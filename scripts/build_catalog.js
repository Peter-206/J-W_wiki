// A texture is evidence of an asset, not of an item, recipe, or game mechanic.
const fs = require('node:fs');
const path = require('node:path');
const root = path.join(__dirname, '..');
const mods = require('./mods.json');
const prefixes = [...mods.map(m => m.id), 'minecraft'].sort((a,b) => b.length-a.length);
const assets = fs.readdirSync(path.join(root, 'assets/items')).filter(f => f.endsWith('.png')).sort();
const catalog = assets.filter(file => prefixes.some(p => file.startsWith(p+'_'))).map(file => {
  const group = prefixes.find(p => file.startsWith(p+'_'));
  const slug = file.slice(group.length+1, -4);
  return {id:file, name:slug.replaceAll('_',' ').replaceAll('-',' '), group, file};
});
fs.writeFileSync(path.join(__dirname, 'jei_database.js'), '// Generated asset index. Names and groups are derived from filenames; no gameplay claims.\nwindow.WIKI_CATALOG = '+JSON.stringify(catalog)+';\n');
fs.writeFileSync(path.join(__dirname, 'mod_directory.js'), 'window.WIKI_MODS = '+JSON.stringify(mods)+';\n');
console.log(`Indexed ${catalog.length} local textures. No recipes inferred.`);
