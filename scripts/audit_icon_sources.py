"""Refresh the reviewed project lock; ordinary icon builds use the committed lock.

Python 3.11+, standard library only. Downloads metadata, never executes mod code.
"""
import concurrent.futures
import json
from pathlib import Path
import urllib.parse
import urllib.request

ROOT = Path(__file__).resolve().parent.parent
API = 'https://api.modrinth.com/v2/'
# Reviewed identities: do not substitute search results automatically.
SLUGS = {
    'bookshelf': 'bookshelf-lib', 'born_in_chaos': 'borninchaos',
    'cataclysm': 'l_enders-cataclysm', 'skinlayers3d': '3dskinlayers',
    'bosslocator': None, 'dragonseeker': None, 'inventorysorter': None,
    'moogs_soaring_structures': None, 'so_many_enchants': None,
}

def get(url):
    req = urllib.request.Request(url, headers={'User-Agent': 'ModpackFieldGuide-icon-audit/1.0'})
    with urllib.request.urlopen(req, timeout=45) as response:
        return json.load(response)

def audit(mod):
    result = dict(mod, minecraft='1.20.1', reviewed='2026-09-15')
    slug = SLUGS.get(mod['id'], mod['url'].rsplit('/', 1)[1])
    if slug is None:
        result.update(status='unresolved', reason='No matching versioned project source established; no automatic name substitution.')
        if mod['id'] == 'inventorysorter':
            result.update(status='identity-verified', source='https://github.com/cpw/inventorysorter',
                          reason='CurseForge identifies cpw as author. The similarly named Modrinth project is different; 1.20.1 release not pinned.')
        return result
    try:
        p = get(API + 'project/' + slug)
        query = urllib.parse.urlencode({'game_versions': '["1.20.1"]', 'loaders': '["forge"]'})
        versions = get(API + 'project/' + p['id'] + '/version?' + query)
        versions = [v for v in versions if v['date_published'][:10] <= '2026-09-15']
        releases = [v for v in versions if v['version_type'] == 'release']
        versions = sorted(releases or versions, key=lambda v: v['date_published'], reverse=True)
        result.update(projectId=p['id'], projectUrl='https://modrinth.com/mod/' + p['slug'],
                      verifiedName=p['title'], source=p.get('source_url'), license=p['license'])
        if not versions:
            result.update(status='identity-verified', reason='No published Forge 1.20.1 artifact found.')
            return result
        v = versions[0]
        artifact = next((f for f in v['files'] if f['primary']), v['files'][0])
        result.update(status='verified', version=v['version_number'], versionId=v['id'],
                      versionUrl='https://modrinth.com/mod/' + p['slug'] + '/version/' + v['id'],
                      artifact=artifact, loaders=v['loaders'])
    except Exception as error:
        result.update(status='unresolved', reason=str(error))
    return result

if __name__ == '__main__':
    mods = json.loads((ROOT / 'scripts/mods.json').read_text(encoding='utf-8'))
    with concurrent.futures.ThreadPoolExecutor(max_workers=6) as pool:
        results = list(pool.map(audit, mods))
    manifest = get('https://piston-meta.mojang.com/mc/game/version_manifest_v2.json')
    version = get(next(v['url'] for v in manifest['versions'] if v['id'] == '1.20.1'))
    client = version['downloads']['client']
    results.insert(0, dict(id='minecraft', name='Minecraft', status='verified', minecraft='1.20.1',
                          version='1.20.1', reviewed='2026-09-15',
                          projectUrl='https://www.minecraft.net/', source='https://piston-meta.mojang.com/mc/game/version_manifest_v2.json',
                          license={'id': 'Mojang', 'url': 'https://www.minecraft.net/usage-guidelines'},
                          artifact={'url': client['url'], 'filename': 'minecraft-1.20.1.jar', 'hashes': {'sha1': client['sha1']}}))
    target = ROOT / 'scripts/icon-sources.json'
    target.write_text(json.dumps(results, indent=2) + '\n', encoding='utf-8')
    for r in results:
        print(r['id'], r['status'], r.get('version', r.get('reason')))
