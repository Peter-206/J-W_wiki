const fs = require('fs');
const path = require('path');

const itemsDir = path.join(__dirname, 'assets', 'items');
const existingFiles = new Set(fs.readdirSync(itemsDir));

console.log('Total asset files available:', existingFiles.size);

function verifyFile(file) {
  if (!existingFiles.has(file)) {
    throw new Error(`File not found: ${file}`);
  }
}

// Test verify
verifyFile('cataclysm_the_incinerator.png');
console.log('Asset verify works.');
