// Build browser data from reviewed item identities, never from PNG filenames.
const fs = require('node:fs');
const path = require('node:path');
const root = path.join(__dirname, '..');
const mods = require('./mods.json');
const manifest = require('./inventory-icons.json');
const sources = require('./icon-sources.json');
const entries = Object.values(manifest.items);
const catalog = entries.filter(item => item.identityVerified).map(item => ({
  id: item.id, name: item.name, group: item.id.split(':')[0], file: item.file || null
}));
fs.writeFileSync(path.join(__dirname, 'inventory-icons.js'), '// Generated from the reviewed manifest.\nwindow.INVENTORY_ICON_DATA = ' + JSON.stringify(manifest) + ';\nwindow.INVENTORY_ICON_SOURCES = ' + JSON.stringify(sources) + ';\n');
fs.writeFileSync(path.join(__dirname, 'jei_database.js'), '// Generated inventory catalog: exact item models with matching translations.\nwindow.WIKI_CATALOG = '+JSON.stringify(catalog)+';\n');
fs.writeFileSync(path.join(__dirname, 'mod_directory.js'), 'window.WIKI_MODS = '+JSON.stringify(mods)+';\n');
const groups = [...new Set(entries.map(item => item.id.split(':')[0]))].sort();
const verified = entries.filter(item => item.status === 'verified');
const summary = groups.map(group => {
  const items = entries.filter(item => item.id.startsWith(group + ':'));
  return `| ${group} | ${items.filter(item => item.status === 'verified').length} | ${items.filter(item => item.status !== 'verified').length} |`;
}).join('\n');
fs.writeFileSync(path.join(root, 'ICON_COVERAGE.md'), `# Inventory icon coverage\n\nReviewed ${manifest.reviewed}. Minecraft 1.20.1; published Forge-compatible releases, not an installed-pack export.\n\n${verified.length} verified static inventory sprites; ${entries.length - verified.length} unavailable references. ${catalog.length} exact item-model/translation identities appear in the catalog. Coverage includes restored database items and additional live guide/recipe references.\n\n| Namespace | Verified icons | Unavailable |\n| --- | ---: | ---: |\n${summary}\n\n## Verification and limitations\n\nSprites are copied byte-for-byte from hash-checked publisher artifacts. Their exact item model resolves to a static, single-layer generated inventory sprite with default GUI transforms. Runtime colors, item-state overrides, custom renderers, animation strips, and unsupported models require a game export and remain placeholders. A model plus translation establishes an asset identity, not proof of obtainability or an installed registry export. Missing models may indicate a texture-only record, incorrect ID, or version difference. Recipes and gameplay data are not verified by this audit.\n\nThe complete per-item evidence and missing reasons are in [inventory-icons.json](scripts/inventory-icons.json). Project identities, version URLs, artifact hashes, namespace evidence where inspected, and license references are in [icon-sources.json](scripts/icon-sources.json).\n\n## Final validation\n\nAll accepted PNGs decode offline. Desktop and mobile browser checks cover the live entry point, recipe navigation, accessible image-error placeholders, and unchanged JEI bookmarks. A visual review sheet covers all 15 referenced namespaces with representative accepted sprites and unavailable entries; this is a sample review, not an in-game comparison of every icon. Reproduce it with <code>node tests/run-inventory-browser.js</code>; reports and screenshots are saved under <code>.cache/inventory-browser/</code>.\n\n## Project audit\n\n| Project | Status | Published version / limitation |\n| --- | --- | --- |\n${sources.map(s => `| [${s.name}](${s.projectUrl || s.url}) | ${s.status} | ${s.version || s.reason} |`).join('\n')}\n\n## Attribution\n\nAll game and mod artwork remains owned by its respective authors. Original artifact license/notice files, where included, are retained under assets/inventory/licenses. Source and license links are also shown on catalog detail pages. No ownership or new license is claimed for these images. See [artwork attribution and retained notices](assets/inventory/ATTRIBUTION.md) for repository notice snapshots, separately identified from files bundled in release artifacts.\n`);
console.log(`Built ${catalog.length} catalog identities and ${verified.length} verified inventory icons.`);
