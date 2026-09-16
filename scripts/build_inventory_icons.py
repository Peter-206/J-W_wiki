"""Build conservative inventory sprites from pinned, hash-checked game/mod JARs.

Requires Python 3.11+, Pillow, and Node.js. No Minecraft/mod code is executed.
Generated and handheld item models are resolved from their exact texture layers.
Animated sprites use their declared first frame, matching the initial inventory
appearance. Custom renderers, runtime tints and uncertain IDs remain unavailable
rather than borrowing a texture from a similar item.
"""
import concurrent.futures
import hashlib
import io
import json
from pathlib import Path
import re
import subprocess
import urllib.request
import zipfile
from PIL import Image
import numpy as np

ROOT = Path(__file__).resolve().parent.parent
CACHE = ROOT / '.cache/inventory-icons'
OUT = ROOT / 'assets/inventory'
SOURCES = json.loads((ROOT / 'scripts/icon-sources.json').read_text(encoding='utf-8'))
# Reviewed RegisterColorHandlersEvent.Item registrations in the pinned JARs
# using javap -c -p; flat models alone do not establish runtime colors.
RUNTIME_ITEMS = {
    'alexsmobs': {'straddleboard'},
    'hexerei': {'crow_flute', 'lily_pad', 'lily_pad_block', 'coffer', 'mixing_cauldron',
                'small_satchel', 'medium_satchel', 'large_satchel', 'infused_fabric_block',
                'infused_fabric_carpet', 'waxed_infused_fabric_block', 'waxed_infused_fabric_carpet'},
    'sophisticatedbackpacks': {'backpack', 'copper_backpack', 'iron_backpack', 'gold_backpack',
                              'diamond_backpack', 'netherite_backpack'},
}

def digest(data, algorithm='sha256'):
    return hashlib.new(algorithm, data).hexdigest()

def download(source):
    artifact = source['artifact']
    algorithm = 'sha512' if 'sha512' in artifact['hashes'] else 'sha1'
    expected = artifact['hashes'][algorithm]
    target = CACHE / (source['id'] + '-' + expected[:12] + '.jar')
    if target.exists():
        data = target.read_bytes()
    else:
        req = urllib.request.Request(artifact['url'], headers={'User-Agent': 'ModpackFieldGuide-icons/1.0'})
        with urllib.request.urlopen(req, timeout=120) as response:
            data = response.read()
    if digest(data, algorithm) != expected:
        raise ValueError('Artifact hash mismatch: ' + source['id'])
    target.write_bytes(data)
    return source['id'], zipfile.ZipFile(io.BytesIO(data))

def resource(identifier, kind, suffix):
    ns, name = identifier.split(':', 1) if ':' in identifier else ('minecraft', identifier)
    return f'assets/{ns}/{kind}/{name}{suffix}'

class Unavailable(Exception):
    pass

def read_json(jar, name):
    try:
        return json.loads(jar.read(name))
    except (KeyError, ValueError) as error:
        raise Unavailable('Missing or invalid model: ' + name) from error

def resolve_model(jar, vanilla, identifier, seen=None):
    seen = set() if seen is None else seen
    if identifier in seen:
        raise Unavailable('Cyclic model parent')
    seen.add(identifier)
    source_jar = vanilla if identifier.startswith('minecraft:') or ':' not in identifier else jar
    model_path = resource(identifier, 'models', '.json')
    model = read_json(source_jar, model_path)
    parent = model.get('parent', '')
    if any(k in model for k in ['loader', 'overrides', 'elements']):
        raise Unavailable('Model needs rendering or item-state evaluation')
    if parent in ['item/generated', 'minecraft:item/generated', 'item/handheld', 'minecraft:item/handheld']:
        return model.get('textures', {}), [model_path], model.get('display', {}).get('gui')
    if not parent or parent in ['builtin/entity', 'minecraft:builtin/entity', 'builtin/generated']:
        raise Unavailable('Custom or unsupported inventory renderer')
    textures, chain, gui = resolve_model(jar, vanilla, parent, seen)
    return dict(textures, **model.get('textures', {})), [model_path] + chain, model.get('display', {}).get('gui', gui)

def resolve_geometry(jar, vanilla, identifier, seen=None):
    """Resolve a static block/item model, retaining inherited cuboid elements."""
    seen = set() if seen is None else seen
    if identifier in seen:
        raise Unavailable('Cyclic model parent')
    seen.add(identifier)
    source_jar = vanilla if identifier.startswith('minecraft:') or ':' not in identifier else jar
    model_path = resource(identifier, 'models', '.json')
    model = read_json(source_jar, model_path)
    if 'loader' in model or 'overrides' in model:
        raise Unavailable('Model needs item-state evaluation')
    parent = model.get('parent', '')
    textures, elements, chain, gui = {}, None, [], None
    if parent and parent not in ['builtin/entity', 'minecraft:builtin/entity', 'builtin/generated']:
        textures, elements, chain, gui = resolve_geometry(jar, vanilla, parent, seen)
    textures.update(model.get('textures', {}))
    if 'elements' in model:
        elements = model['elements']
    gui = model.get('display', {}).get('gui', gui)
    return textures, elements, [model_path] + chain, gui

def render_geometry(jar, vanilla, item_id):
    """Render ordinary JSON cuboid models to a small Minecraft-style GUI sprite."""
    ns, name = item_id.split(':', 1)
    textures, elements, chain, gui = resolve_geometry(jar, vanilla, f'{ns}:item/{name}')
    if not elements:
        raise Unavailable('Layered or non-generated inventory model requires rendering')
    size, supersample = 32, 4
    dim = size * supersample
    rgba = np.zeros((dim, dim, 4), dtype=np.uint8)
    depth = np.full((dim, dim), -1e9, dtype=np.float32)
    cache = {}

    def tex(ref):
        while isinstance(ref, str) and ref.startswith('#'):
            ref = textures.get(ref[1:], '')
        if not ref:
            raise Unavailable('Unresolved texture reference')
        if ref not in cache:
            image, path, _ = texture_image(jar, vanilla, ref, textures)
            cache[ref] = (np.asarray(image), path)
        return cache[ref]

    rx, ry, rz = (gui or {}).get('rotation', [30, 225, 0])
    scale = (gui or {}).get('scale', [0.625, 0.625, 0.625])
    trans = (gui or {}).get('translation', [0, 0, 0])
    def rot(axis, angle):
        a = np.deg2rad(angle); c, s = np.cos(a), np.sin(a)
        if axis == 'x': return np.array([[1,0,0],[0,c,-s],[0,s,c]])
        if axis == 'y': return np.array([[c,0,s],[0,1,0],[-s,0,c]])
        return np.array([[c,-s,0],[s,c,0],[0,0,1]])
    matrix = rot('z', rz) @ rot('y', ry) @ rot('x', rx)

    face_vertices = {
        'north': (0,1,5,4), 'south': (3,2,6,7), 'west': (3,0,4,7),
        'east': (1,2,6,5), 'down': (3,2,1,0), 'up': (4,5,6,7)
    }
    def raster_triangle(points, uv, texture, shade):
        minx=max(0,int(np.floor(points[:,0].min()))); maxx=min(dim-1,int(np.ceil(points[:,0].max())))
        miny=max(0,int(np.floor(points[:,1].min()))); maxy=min(dim-1,int(np.ceil(points[:,1].max())))
        if minx>maxx or miny>maxy: return
        x,y=np.meshgrid(np.arange(minx,maxx+1)+.5,np.arange(miny,maxy+1)+.5)
        p0,p1,p2=points; den=(p1[1]-p2[1])*(p0[0]-p2[0])+(p2[0]-p1[0])*(p0[1]-p2[1])
        if abs(den)<1e-6:return
        a=((p1[1]-p2[1])*(x-p2[0])+(p2[0]-p1[0])*(y-p2[1]))/den
        b=((p2[1]-p0[1])*(x-p2[0])+(p0[0]-p2[0])*(y-p2[1]))/den; c=1-a-b
        mask=(a>=0)&(b>=0)&(c>=0)
        z=a*p0[2]+b*p1[2]+c*p2[2]
        region=depth[miny:maxy+1,minx:maxx+1]; mask &= z>region
        if not mask.any():return
        tuv=a[...,None]*uv[0]+b[...,None]*uv[1]+c[...,None]*uv[2]
        tx=np.clip(tuv[...,0].astype(int),0,texture.shape[1]-1); ty=np.clip(tuv[...,1].astype(int),0,texture.shape[0]-1)
        pixels=texture[ty,tx].copy(); pixels[...,:3]=(pixels[...,:3].astype(np.float32)*shade).astype(np.uint8)
        mask &= pixels[...,3]>0
        region[mask]=z[mask]; rgba[miny:maxy+1,minx:maxx+1][mask]=pixels[mask]

    for element in elements:
        lo=np.array(element.get('from',[0,0,0]),float); hi=np.array(element.get('to',[16,16,16]),float)
        verts=np.array([[lo[0],lo[1],lo[2]],[hi[0],lo[1],lo[2]],[hi[0],lo[1],hi[2]],[lo[0],lo[1],hi[2]],
                        [lo[0],hi[1],lo[2]],[hi[0],hi[1],lo[2]],[hi[0],hi[1],hi[2]],[lo[0],hi[1],hi[2]]])
        er=element.get('rotation')
        if er:
            origin=np.array(er.get('origin',[8,8,8]),float); verts=(verts-origin)@rot(er['axis'],er['angle']).T+origin
        world=(verts-8)*np.array(scale)+np.array(trans)
        view=world@matrix.T
        screen=np.column_stack((dim/2+view[:,0]*supersample,dim/2-view[:,1]*supersample,view[:,2]))
        for direction, face in element.get('faces',{}).items():
            ids=face_vertices[direction]; pts=screen[list(ids)]
            edge1=pts[1,:2]-pts[0,:2]; edge2=pts[2,:2]-pts[0,:2]
            cross=edge1[0]*edge2[1]-edge1[1]*edge2[0]
            if cross <= 0: continue
            texture,path=tex(face.get('texture',''))
            uv=face.get('uv',[0,0,16,16]); tw,th=texture.shape[1],texture.shape[0]
            coords=np.array([[uv[0]/16*tw,uv[3]/16*th],[uv[2]/16*tw,uv[3]/16*th],
                             [uv[2]/16*tw,uv[1]/16*th],[uv[0]/16*tw,uv[1]/16*th]])
            shade={'up':1.0,'down':.5,'north':.8,'south':.8,'west':.65,'east':.65}.get(direction,.8)
            raster_triangle(pts[[0,1,2]],coords[[0,1,2]],texture,shade)
            raster_triangle(pts[[0,2,3]],coords[[0,2,3]],texture,shade)
    image=Image.fromarray(rgba,'RGBA').resize((size,size),Image.Resampling.LANCZOS)
    if image.getbbox() is None: raise Unavailable('Static model rendered empty')
    output=io.BytesIO(); image.save(output,format='PNG',optimize=True)
    return output.getvalue(), dict(model=resource(f'{ns}:item/{name}','models','.json'), modelChain=chain,
        texture=next(iter(cache.values()))[1], textureLayers=[v[1] for v in cache.values()],
        guiTransform=gui, method='static-json-model-render')

def texture_image(jar, vanilla, texture, textures):
    for _ in range(16):
        if not texture.startswith('#'):
            break
        texture = textures.get(texture[1:], '')
    if not texture or texture.startswith('#'):
        raise Unavailable('Unresolved texture reference')
    texture_path = resource(texture, 'textures', '.png')
    texture_jar = vanilla if texture_path.startswith('assets/minecraft/') else jar
    try:
        data = texture_jar.read(texture_path)
    except KeyError as error:
        raise Unavailable('Missing declared inventory texture') from error
    with Image.open(io.BytesIO(data)) as source:
        image = source.convert('RGBA')
    animated = texture_path + '.mcmeta' in texture_jar.namelist()
    if animated:
        frame = min(image.width, image.height)
        image = image.crop((0, 0, frame, frame))
    if image.width != image.height or image.width > 256:
        raise Unavailable('Non-square sprite or texture sheet requires rendering')
    if image.getbbox() is None:
        raise Unavailable('Empty texture')
    return image, texture_path, animated

def make_icon(item_id, jar, vanilla):
    ns, name = item_id.split(':', 1)
    model_path = resource(f'{ns}:item/{name}', 'models', '.json')
    read_json(jar, model_path)
    lang = read_json(jar, f'assets/{ns}/lang/en_us.json')
    lang_key = next((k for k in [f'item.{ns}.{name}', f'block.{ns}.{name}'] if k in lang), None)
    if not lang_key:
        raise Unavailable('No matching item/block translation for this ID')
    # These item families depend on runtime color/material/NBT handling even when
    # a generated model exists. They require an actual game export.
    if (name in RUNTIME_ITEMS.get(ns, set())
            or re.search(r'(spawn_egg|potion|tipped_arrow|leather_|firework|filled_map|enchanted_golden_apple|enchanted_book)', name)
            or ns == 'hexerei' and any(x in name for x in ['broom', 'candle', 'armor', 'helmet', 'chestplate', 'leggings', 'boots'])):
        raise Unavailable('Runtime tint, material or item effect requires a game export')
    try:
        textures, chain, gui = resolve_model(jar, vanilla, f'{ns}:item/{name}')
    except Unavailable as error:
        if str(error) != 'Model needs rendering or item-state evaluation':
            raise
        data, evidence = render_geometry(jar, vanilla, item_id)
        evidence.update(languageKey=lang_key, verifiedName=lang[lang_key])
        return data, evidence
    layers = sorted((k for k in textures if re.fullmatch(r'layer\d+', k)), key=lambda k: int(k[5:]))
    if not layers or layers[0] != 'layer0':
        raise Unavailable('Layered or non-generated inventory model requires rendering')
    images = [texture_image(jar, vanilla, textures[layer], textures) for layer in layers]
    size = max(image.width for image, _, _ in images)
    canvas = Image.new('RGBA', (size, size))
    for image, _, _ in images:
        if image.size != (size, size):
            image = image.resize((size, size), Image.Resampling.NEAREST)
        canvas.alpha_composite(image)
    output = io.BytesIO()
    canvas.save(output, format='PNG', optimize=True)
    method = 'layered-generated-item-model' if len(images) > 1 else 'static-generated-item-model'
    if any(animated for _, _, animated in images):
        method = 'animated-item-model-first-frame'
    return output.getvalue(), dict(model=model_path, modelChain=chain,
                      texture=images[0][1], textureLayers=[path for _, path, _ in images],
                      guiTransform=gui, languageKey=lang_key, verifiedName=lang[lang_key], method=method)

def build():
    CACHE.mkdir(parents=True, exist_ok=True)
    OUT.mkdir(parents=True, exist_ok=True)
    db = json.loads(subprocess.check_output(['node', '-e', "process.stdout.write(JSON.stringify(require('./scripts/restored_jei_database.js')))"], cwd=ROOT))
    items = {x['id']: x for x in db}
    def collect_ids(value):
        if isinstance(value, str) and re.fullmatch(r'[a-z][a-z0-9_]*:[a-z0-9_/]+', value):
            items.setdefault(value, {'id': value, 'name': value.split(':')[1].replace('_', ' ')})
        elif isinstance(value, list):
            for child in value:
                collect_ids(child)
        elif isinstance(value, dict):
            for child in value.values():
                collect_ids(child)
    collect_ids(db)
    guide = json.loads(subprocess.check_output(['node', '-e', "process.stdout.write(JSON.stringify(require('./scripts/progression-data.js').items))"], cwd=ROOT))
    for item in guide.values():
        if not item.get('textOnly'):
            items.setdefault(item['id'], item)
    for file in ['index.html', 'scripts/restored-wiki.js', 'scripts/progression-data.js']:
        for item_id in re.findall(r'[\"\']([a-z][a-z0-9_]*:[a-z0-9_/]+)[\"\']', (ROOT / file).read_text(encoding='utf-8')):
            items.setdefault(item_id, {'id': item_id, 'name': item_id.split(':')[1].replace('_', ' ')})
    namespaces = {i.split(':')[0] for i in items}
    chosen = [s for s in SOURCES if s['id'] in namespaces and s['status'] == 'verified']
    jars = {}
    with concurrent.futures.ThreadPoolExecutor(max_workers=4) as pool:
        futures = {pool.submit(download, s): s for s in chosen}
        for future in concurrent.futures.as_completed(futures):
            key, jar = future.result()
            jars[key] = jar
            print('Loaded', key, flush=True)
    # Build the catalog from real item models with matching translations. The
    # restored database contains historical texture-derived rows, so it cannot
    # be treated as a registry export.
    for ns, jar in jars.items():
        try:
            lang = read_json(jar, f'assets/{ns}/lang/en_us.json')
        except Unavailable:
            continue
        prefix = f'assets/{ns}/models/item/'
        for path_name in jar.namelist():
            if not path_name.startswith(prefix) or not path_name.endswith('.json'):
                continue
            name = path_name[len(prefix):-5]
            key = next((key for key in (f'item.{ns}.{name}', f'block.{ns}.{name}') if key in lang), None)
            if key:
                items.setdefault(f'{ns}:{name}', {'id': f'{ns}:{name}', 'name': lang[key]})
    sources = {s['id']: s for s in SOURCES}
    for key, jar in jars.items():
        sources[key]['assetNamespaces'] = sorted({p.split('/')[1] for p in jar.namelist() if p.startswith('assets/') and len(p.split('/')) > 2})
        license_dir = OUT / 'licenses' / key
        license_dir.mkdir(parents=True, exist_ok=True)
        for name in jar.namelist():
            if re.fullmatch(r'(META-INF/)?(LICENSE|LICENCE|NOTICE)([._-][a-zA-Z0-9._-]+)?', name, re.I):
                (license_dir / Path(name).name).write_bytes(jar.read(name))
    records = {}
    for item_id, item in sorted(items.items()):
        ns = item_id.split(':')[0]
        entry = {'id': item_id, 'name': item['name'], 'status': 'unavailable'}
        s = sources.get(ns)
        jar = jars.get(ns)
        model_path = resource(item_id.replace(':', ':item/', 1), 'models', '.json')
        # Catalog identity requires an exact model AND translated item/block name.
        entry['identityVerified'] = False
        if jar:
            try:
                lang = read_json(jar, f'assets/{ns}/lang/en_us.json')
                name = item_id.split(':', 1)[1]
                key = next((k for k in [f'item.{ns}.{name}', f'block.{ns}.{name}'] if k in lang), None)
                entry['identityVerified'] = model_path in jar.namelist() and key is not None
                if entry['identityVerified']:
                    entry['name'] = lang[key]
            except Unavailable:
                pass
        try:
            if jar is None:
                raise Unavailable('No verified Forge 1.20.1 artifact for this namespace')
            data, evidence = make_icon(item_id, jar, jars['minecraft'])
            filename = item_id.replace(':', '__').replace('/', '__') + '.png'
            (OUT / filename).write_bytes(data)
            entry.update(evidence, status='verified', file='assets/inventory/' + filename, sha256=digest(data))
        except Unavailable as error:
            entry['reason'] = str(error)
        if s:
            entry.update(source=ns, minecraft='1.20.1', version=s.get('version'),
                         sourceUrl=s.get('versionUrl', s.get('source') or s.get('url')))
        records[item_id] = entry
    manifest = {'schemaVersion': 1, 'reviewed': '2026-09-15', 'items': records}
    (ROOT / 'scripts/inventory-icons.json').write_text(json.dumps(manifest, indent=2) + '\n', encoding='utf-8')
    (ROOT / 'scripts/icon-sources.json').write_text(json.dumps(SOURCES, indent=2) + '\n', encoding='utf-8')
    for key in sorted(namespaces):
        group = [x for x in records.values() if x['id'].startswith(key + ':')]
        print(key, sum(x['status'] == 'verified' for x in group), '/', len(group))

if __name__ == '__main__':
    build()
