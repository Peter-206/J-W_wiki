const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const root = path.join(__dirname,'..');
const context = {window:{}};
for(const file of ['jei_database','mod_directory'])vm.runInNewContext(fs.readFileSync(path.join(root,'scripts',file+'.js'),'utf8'),context);
const {WIKI_CATALOG:catalog,WIKI_MODS:mods}=context.window;
test('catalog contains matched inventory identities and honest missing icons',()=>{
  const manifest = require('../scripts/inventory-icons.json').items;
  assert.ok(catalog.length>0);assert.equal(new Set(catalog.map(x=>x.id)).size,catalog.length);
  for(const item of catalog){
    assert.ok(manifest[item.id]?.identityVerified,item.id);
    if(item.file) {
      assert.equal(manifest[item.id].status,'verified');
      assert.ok(fs.existsSync(path.join(root,item.file)),item.file);
    } else assert.equal(manifest[item.id].status,'unavailable');
    assert.deepEqual(Object.keys(item).sort(),['file','group','id','name']);
  }
});
test('the entry point only loads maintained local assets',()=>{
  const html=fs.readFileSync(path.join(root,'index.html'),'utf8');
  for(const [,src] of html.matchAll(/(?:src|href)="([^"#]+)"/g)){if(!src.startsWith('http'))assert.ok(fs.existsSync(path.join(root,src)),src);}
  assert.ok(!html.includes('jeiFallbackDatabase'));
});
test('directory IDs are unique and project references use HTTPS',()=>{
  assert.equal(new Set(mods.map(x=>x.id)).size,mods.length);
  for(const mod of mods)assert.equal(new URL(mod.url).protocol,'https:');
});
test('all application JavaScript parses',()=>{
  for(const file of ['restored-wiki.js','progression-data.js','progression.js','magic.js'])new vm.Script(fs.readFileSync(path.join(root,'scripts',file),'utf8'));
});
test('magic guide covers every school with focused builds',()=>{
  const source=fs.readFileSync(path.join(root,'scripts','magic.js'),'utf8');
  const element={style:{setProperty(){}},addEventListener(){},querySelector(){return {focus(){}}}};
  const sandbox={window:{},document:{getElementById(){return element}}};
  new vm.Script(source).runInNewContext(sandbox);
  const schools=sandbox.window.MAGIC_GUIDE_DATA.schools;
  const catalogIds=new Set(catalog.map(item=>item.id));
  assert.deepEqual(Array.from(schools,x=>x.id),['fire','ice','lightning','holy','ender','blood','evocation','nature','eldritch']);
  for(const school of schools){
    assert.ok(school.description.length>40,school.id);
    assert.ok(school.builds.length>=2,school.id);
    for(const build of school.builds){
      assert.ok(build.spells.length>=4,`${school.id}: ${build.name}`);
      assert.ok(build.gear.length>=3,`${school.id}: ${build.name}`);
      for(const [,id] of build.gear)assert.ok(catalogIds.has(id),`${school.id}: missing ${id}`);
      assert.ok(build.rotation.length>=4,`${school.id}: ${build.name}`);
      assert.ok(build.progression&&build.weakness,`${school.id}: ${build.name}`);
    }
  }
});
