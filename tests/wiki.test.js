const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const root = path.join(__dirname,'..');
const context = {window:{}};
for(const file of ['articles','jei_database','mod_directory'])vm.runInNewContext(fs.readFileSync(path.join(root,'scripts',file+'.js'),'utf8'),context);
const {WIKI_ARTICLES:articles,WIKI_CATALOG:catalog,WIKI_MODS:mods}=context.window;
test('each article has primary sources, content, and valid related pages',()=>{
  assert.equal(new Set(articles.map(a=>a.id)).size,articles.length);
  for(const a of articles){assert.ok(a.sections.length);assert.ok(a.sources.length);for(const [,url] of a.sources)assert.equal(new URL(url).protocol,'https:');for(const id of a.related)assert.ok(articles.some(a=>a.id===id),id);}
});
test('catalog is an asset index with real images and no invented gameplay',()=>{
  assert.ok(catalog.length>0);assert.equal(new Set(catalog.map(x=>x.id)).size,catalog.length);
  for(const item of catalog){assert.ok(fs.existsSync(path.join(root,'assets/items',item.file)),item.file);assert.deepEqual(Object.keys(item).sort(),['file','group','id','name']);}
});
test('entry points match and only load the maintained scripts',()=>{
  const html=fs.readFileSync(path.join(root,'index.html'),'utf8');
  assert.equal(html,fs.readFileSync(path.join(root,'minecraft_modpack_wiki.html'),'utf8'));
  for(const [,src] of html.matchAll(/(?:src|href)="([^"#]+)"/g)){if(!src.startsWith('http'))assert.ok(fs.existsSync(path.join(root,src)),src);}
  assert.ok(!html.includes('jeiFallbackDatabase'));
});
test('directory IDs are unique and project references use HTTPS',()=>{
  assert.equal(new Set(mods.map(x=>x.id)).size,mods.length);
  for(const mod of mods)assert.equal(new URL(mod.url).protocol,'https:');
});
test('all application JavaScript parses',()=>{new vm.Script(fs.readFileSync(path.join(root,'scripts/wiki.js'),'utf8'));});
