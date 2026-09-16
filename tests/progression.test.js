const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const guide = require('../scripts/progression-data.js');
const database = require('../scripts/restored_jei_database.js');
const directory = require('../scripts/mods.json');
const root = path.join(__dirname, '..');

test('recommendations have acquisition, reasoning, upgrades, sources, and explicit icon decisions', () => {
  assert.ok(new Set(Object.values(guide.items).map(item => item.id)).size >= 80);
  const db = new Map(database.map(item => [item.id, item]));
  for (const [key, item] of Object.entries(guide.items)) {
    assert.match(item.id, /^[a-z0-9_]+:[a-z0-9_]+$/, key);
    for (const field of ['name', 'mod', 'role', 'acquire', 'why', 'upgrade']) assert.ok(item[field]?.length, `${key}: ${field}`);
    assert.ok(item.acquire.length > 20, `${key}: missing acquisition route`);
    for (const field of ['why', 'upgrade']) assert.ok(item[field].length > 20, `${key}: missing ${field}`);
    assert.ok(item.stage >= 1 && item.stage <= 5, key);
    assert.ok(item.sources.length, key);
    for (const source of item.sources) assert.ok(guide.sources[source], `${key}: ${source}`);
    if (!item.textOnly) {
      const icon = require('../scripts/inventory-icons.json').items[item.id];
      assert.ok(icon, item.id);
      if (icon.status === 'verified') assert.ok(fs.existsSync(path.join(root, icon.file)), item.id);
      else assert.ok(icon.reason, item.id);
    }
  }
  for (const key of ['firePotion', 'slowPotion', 'breathPotion', 'scroll', 'missile', 'firebolt', 'heal', 'teleport']) {
    assert.equal(guide.items[key].textOnly, true, 'NBT variants must not open a generic bottle or blank scroll recipe');
  }
});

test('all five milestones have complete three-style loadouts and usable guide sections', () => {
  assert.equal(guide.stages.length, 5);
  assert.equal(guide.loadouts.length, 15);
  for (const stage of guide.stages) {
    assert.ok(stage.priorities.length >= 3 && stage.ready && stage.optional);
    const kits = guide.loadouts.filter(kit => kit.stage === stage.id);
    assert.deepEqual(kits.map(kit => kit.style).sort(), ['Melee', 'Ranged', 'Spellcaster']);
    for (const kit of kits) {
      for (const field of ['armor', 'enchants', 'reasoning', 'alternative', 'next']) assert.ok(kit[field]);
      assert.ok(kit.gear.length && kit.support.length && kit.armorItems.length);
    }
    assert.ok(guide.tools.some(entry => entry.stage === stage.id));
    assert.ok(guide.magic.some(entry => entry.stage === stage.id));
  }
});

test('item, tab, section, directory, and source references resolve', () => {
  const used = new Set();
  const tabs = ['roadmap', 'combat', 'tools', 'magic', 'exploration', 'mods'];
  const groups = { roadmap: guide.stages, tools: guide.tools, magic: guide.magic, exploration: guide.expeditions, mods: guide.paths };
  for (const entries of Object.values(groups)) {
    assert.equal(new Set(entries.map(entry => entry.id)).size, entries.length);
    for (const entry of entries) {
      for (const key of [...entry.items, ...(entry.rewardItems || [])]) { assert.ok(guide.items[key], key); used.add(key); }
      for (const source of entry.sources || []) assert.ok(guide.sources[source], source);
      for (const [tab, label, target] of entry.links || []) {
        assert.ok(tabs.includes(tab) && label);
        if (target) assert.ok(groups[tab]?.some(entry => entry.id === target), `${tab}/${target}`);
      }
    }
  }
  for (const kit of guide.loadouts) for (const key of [...kit.gear, ...kit.support, ...kit.armorItems]) { assert.ok(guide.items[key], key); used.add(key); }
  assert.deepEqual(Object.keys(guide.items).filter(key => !used.has(key)), []);
  for (const mod of directory) assert.ok(guide.paths.some(entry => entry.directoryIds.includes(mod.id)), mod.id);
  for (const entry of guide.paths) for (const id of entry.directoryIds) assert.ok(directory.some(mod => mod.id === id), id);
  for (const [, url] of Object.values(guide.sources)) assert.equal(new URL(url).protocol, 'https:');
});

test('first-attempt boss kits do not require their own rewards', () => {
  for (const entry of guide.expeditions) {
    for (const key of entry.rewardItems) assert.ok(!entry.items.includes(key), `${entry.id} requires its own reward: ${key}`);
  }
  assert.ok(!guide.expeditions.find(entry => entry.id === 'ignis').items.includes('incinerator'));
  assert.match(guide.items.incinerator.acquire, /Craft.*Ignitium.*blaze rods.*Netherite Sword/);
  assert.match(guide.expeditions.find(entry => entry.id === 'nether').caution, /Crafting a Brewing Stand.*blaze rod/);
});

test('the single entry point ships offline data and renderer with valid script order', () => {
  const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
  for (const asset of ['assets/progression.css', 'scripts/progression-data.js', 'scripts/progression.js']) assert.ok(html.includes(asset));
  assert.ok(html.indexOf('scripts/progression-data.js') < html.indexOf('scripts/progression.js'));
  assert.ok(html.indexOf('scripts/restored-wiki.js') < html.indexOf('scripts/progression.js'));
  assert.equal((html.match(/id="progression-guide"/g) || []).length, 1);
  for (const file of ['progression-data.js', 'progression.js']) new vm.Script(fs.readFileSync(path.join(root, 'scripts', file), 'utf8'));
  const context = { window: {} };
  vm.runInNewContext(fs.readFileSync(path.join(root, 'scripts/progression-data.js'), 'utf8'), context);
  assert.equal(Object.keys(context.window.PROGRESSION_GUIDE.items).length, Object.keys(guide.items).length);
});
