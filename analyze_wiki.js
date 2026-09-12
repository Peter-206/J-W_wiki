const fs = require('fs');
const path = require('path');

const itemsDir = path.join(__dirname, 'assets', 'items');
const files = fs.readdirSync(itemsDir);

const terms = ['schematic', 'speed', 'worldshaper', 'diving', 'copper_diving', 'flame', 'crystallized'];

for (const t of terms) {
  const matches = files.filter(f => f.includes(t));
  console.log(`Term "${t}":`, matches.slice(0, 10));
}
