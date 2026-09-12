const fs = require('fs');
const path = require('path');

const itemsDir = path.join(__dirname, 'assets', 'items');
const existingFiles = new Set(fs.readdirSync(itemsDir));

const cataclysm = require('./scripts/data/cataclysm');
const iceandfire = require('./scripts/data/iceandfire');
const create = require('./scripts/data/create');
const tconstruct = require('./scripts/data/tconstruct');
const irons = require('./scripts/data/irons');
const aether = require('./scripts/data/aether');
const alexsmobs = require('./scripts/data/alexsmobs');
const farmersdelight = require('./scripts/data/farmersdelight');
const hexerei = require('./scripts/data/hexerei');
const backpacks = require('./scripts/data/backpacks');
const waystonesDeeper = require('./scripts/data/waystones_deeper');
const minecraft = require('./scripts/data/minecraft');

const allItems = [
  ...cataclysm,
  ...iceandfire,
  ...create,
  ...tconstruct,
  ...irons,
  ...aether,
  ...alexsmobs,
  ...farmersdelight,
  ...hexerei,
  ...backpacks,
  ...waystonesDeeper,
  ...minecraft
];

console.log(`Loaded ${allItems.length} total items across 12 mod groups.`);

// Verify all icon files exist
const missingIcons = [];
allItems.forEach(item => {
  if (!existingFiles.has(item.iconFile)) {
    missingIcons.push({ id: item.id, icon: item.iconFile });
  }
});

if (missingIcons.length > 0) {
  console.error('Missing icon files:', missingIcons);
  process.exit(1);
} else {
  console.log('ALL item icon files verified successfully!');
}

// Collect all grid ingredients
const itemMap = new Map(allItems.map(it => [it.id, it]));
const missingIngredients = new Set();

allItems.forEach(item => {
  if (Array.isArray(item.grid)) {
    item.grid.forEach(slot => {
      if (slot && !itemMap.has(slot)) {
        missingIngredients.add(slot);
      }
    });
  }
});

console.log(`Ingredients used in grids that are not primary items (${missingIngredients.size}):`, Array.from(missingIngredients));
