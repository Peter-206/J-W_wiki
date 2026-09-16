const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const crypto = require('node:crypto');
const root = path.resolve(__dirname, '..');
const manifest = require('../scripts/inventory-icons.json');
const sources = require('../scripts/icon-sources.json');
const db = require('../scripts/restored_jei_database.js');

test('artwork attribution covers every accepted source and retained notices are intact', () => {
  const notices = require('../assets/inventory/licenses/index.json');
  const used = new Set(Object.values(manifest.items).filter(x => x.status === 'verified').map(x => x.source));
  for (const source of used) assert.ok(notices.some(n => n.id === source), source);
  for (const notice of notices) {
    assert.ok(notice.license.id && notice.noticeStatus, notice.id);
    if (!notice.file) continue;
    const bytes = fs.readFileSync(path.join(root, notice.file));
    assert.equal(crypto.createHash('sha256').update(bytes).digest('hex'), notice.sha256, notice.id);
    assert.equal(new URL(notice.url).protocol, 'https:');
    assert.match(notice.gitBlob, /^[a-f0-9]{40}$/);
  }
});

test('all restored IDs and ingredient references have an explicit icon decision', () => {
  function visit(value) {
    if (typeof value === 'string' && /^[a-z][a-z0-9_]*:[a-z0-9_/]+$/.test(value)) assert.ok(manifest.items[value], value);
    else if (Array.isArray(value)) value.forEach(visit);
    else if (value && typeof value === 'object') Object.values(value).forEach(visit);
  }
  visit(db);
});
test('verified icons have exact model evidence, local PNGs, checksums and pinned sources', () => {
  for (const [id, item] of Object.entries(manifest.items)) {
    if (item.status !== 'verified') { assert.ok(item.reason, id); assert.ok(!item.file, id); continue; }
    const source = sources.find(s => s.id === item.source);
    assert.equal(source.status, 'verified', id);
    assert.ok(source.artifact.hashes.sha512 || source.artifact.hashes.sha1, id);
    assert.equal(item.minecraft, '1.20.1');
    assert.equal(item.version, source.version);
    assert.equal(new URL(item.sourceUrl).protocol, 'https:');
    const [namespace, name] = id.split(':');
    assert.equal(item.model, `assets/${namespace}/models/item/${name}.json`);
    assert.ok(item.identityVerified && item.languageKey && item.texture && item.method, id);
    assert.ok(Array.isArray(item.textureLayers) && item.textureLayers.length >= 1, id);
    assert.match(item.file, /^assets\/inventory\/[a-z0-9_]+\.png$/);
    const bytes = fs.readFileSync(path.join(root, item.file));
    assert.equal(bytes.subarray(1,4).toString(), 'PNG');
    assert.equal(bytes.readUInt32BE(16), bytes.readUInt32BE(20));
    assert.equal(crypto.createHash('sha256').update(bytes).digest('hex'), item.sha256, id);
  }
});
test('renderer links restored IDs to bundled textures and rejects unknown/unsafe lookups', () => {
  const context = { window: { INVENTORY_ICON_DATA: manifest } };
  vm.runInNewContext(fs.readFileSync(path.join(root, 'scripts/item-icons.js'), 'utf8'), context);
  const icons = context.window.ItemIcons;
  assert.match(icons.render('minecraft:diamond', 'Diamond'), /assets\/inventory\/minecraft__diamond.png/);
  for (const id of ['create:mechanical_drill', 'create:mechanical_saw', 'create:shaft']) {
    const html = icons.render(id, '<unsafe>');
    const entry = manifest.items[id];
    const expected = entry.status === 'verified' ? entry.file : `assets/items/${id.replace(':', '_')}.png`;
    assert.ok(html.includes(expected), id);
    assert.doesNotMatch(html, /<unsafe>/);
  }
  for (const id of ['missing:thing', '__proto__']) {
    const html = icons.render(id, '<unsafe>');
    assert.match(html, /Icon unavailable/);
    assert.doesNotMatch(html, /<img|assets\/items|enchanted_book|<unsafe>/);
  }
});
test('all live renderers load the manifest first and do not reference raw texture paths', () => {
  const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
  assert.ok(html.indexOf('scripts/inventory-icons.js') < html.indexOf('scripts/item-icons.js'));
  assert.ok(html.indexOf('scripts/item-icons.js') < html.indexOf('scripts/restored-wiki.js'));
  for (const file of ['restored-wiki.js', 'progression.js']) {
    assert.doesNotMatch(fs.readFileSync(path.join(root, 'scripts', file), 'utf8'), /assets\/items\//);
  }
});
