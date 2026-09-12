const fs = require('fs');
const path = require('path');

const itemsDir = path.join(__dirname, '..', 'assets', 'items');
const existingFiles = new Set(fs.readdirSync(itemsDir).filter(f => f.endsWith('.png')));

// 1. First, load all 206 handcrafted items from scripts/data
const scriptsDataDir = path.join(__dirname, 'data');
const dataFiles = [
  'cataclysm.js', 'iceandfire.js', 'create.js', 'tconstruct.js',
  'irons.js', 'aether.js', 'alexsmobs.js', 'farmersdelight.js',
  'hexerei.js', 'backpacks.js', 'waystones_deeper.js', 'minecraft.js'
];

const allItems = [];
const itemMap = new Map();

for (const file of dataFiles) {
  const p = path.join(scriptsDataDir, file);
  if (fs.existsSync(p)) {
    const items = require(p);
    for (const item of items) {
      if (existingFiles.has(item.iconFile) && !itemMap.has(item.id)) {
        itemMap.set(item.id, item);
        allItems.push(item);
      }
    }
  }
}

console.log(`Loaded ${allItems.length} verified handcrafted items from scripts/data.`);

// 2. Map of mod definitions
const MODS = {
  create: {
    mod: "Create",
    modId: "create",
    defaultCat: "tech",
    tag: "#tech",
    tier: "Kinetic Machine / Component",
    rarity: "uncommon",
    desc: (n) => `Mechanical engineering and kinetic rotational component from Create. Used in automated production, rotational power networks, or railway systems.`
  },
  cataclysm: {
    mod: "L_Ender's Cataclysm",
    modId: "cataclysm",
    defaultCat: "boss_drop",
    tag: "#cataclysm",
    tier: "Nether & Void Boss Relic",
    rarity: "epic",
    desc: (n) => `Rare boss drop or dungeon relic from L_Ender's Cataclysm. Grants immense combat prowess or activates dark sacrificial altars.`
  },
  alexsmobs: {
    mod: "Alex's Mobs",
    modId: "alexsmobs",
    defaultCat: "creatures",
    tag: "#creatures",
    tier: "Fauna Specimen / Biological Relic",
    rarity: "uncommon",
    desc: (n) => `Distinctive specimen or crafting resource obtained from Alex's Mobs wildlife across overworld, nether, and void biomes.`
  },
  tconstruct: {
    mod: "Tinkers' Construct",
    modId: "tconstruct",
    defaultCat: "tool",
    tag: "#tconstruct",
    tier: "Smeltery Alloy / Cast Part",
    rarity: "rare",
    desc: (n) => `Modular tool part, foundry component, or metallurgy alloy from Tinkers' Construct. Modifiable at the Tinker Station.`
  },
  hexerei: {
    mod: "Hexerei",
    modId: "hexerei",
    defaultCat: "magic",
    tag: "#magic",
    tier: "Witchcraft & Herbalism",
    rarity: "rare",
    desc: (n) => `Herbal ingredient, ritual offering, or occult tool from Hexerei. Essential for brewing potions in the Mixing Cauldron and crafting brooms.`
  },
  farmersdelight: {
    mod: "Farmer's Delight",
    modId: "farmersdelight",
    defaultCat: "food",
    tag: "#food",
    tier: "Culinary & Agriculture",
    rarity: "common",
    desc: (n) => `Nourishing agricultural harvest, gourmet meal, or kitchen utensil from Farmer's Delight. Cookable in the Skillet or Cooking Pot.`
  },
  aether: {
    mod: "The Aether",
    modId: "aether",
    defaultCat: "dimension",
    tag: "#aether",
    tier: "Aetherial Sky Dimension",
    rarity: "rare",
    desc: (n) => `Celestial material or ancient dungeon treasure discovered within the floating islands and cloud temples of The Aether.`
  },
  sophisticatedbackpacks: {
    mod: "Sophisticated Backpacks",
    modId: "sophisticatedbackpacks",
    defaultCat: "storage",
    tag: "#storage",
    tier: "Modular Backpack Upgrade",
    rarity: "rare",
    desc: (n) => `Functional upgrade module for Sophisticated Backpacks. Expands internal storage, automates item sorting, smelting, feeding, or magnetizing.`
  },
  iceandfire: {
    mod: "Ice and Fire",
    modId: "iceandfire",
    defaultCat: "creatures",
    tag: "#iceandfire",
    tier: "Dragon Forged / Mythic Relic",
    rarity: "legendary",
    desc: (n) => `Legendary dragon trophy, forged dragonsteel gear, or mythological relic from Ice and Fire: Dragons.`
  },
  irons_spellbooks: {
    mod: "Iron's Spells 'n Spellbooks",
    modId: "irons_spellbooks",
    defaultCat: "magic",
    tag: "#magic",
    tier: "Arcane Spellcraft",
    rarity: "epic",
    desc: (n) => `Mystical spell scroll, enchanted grimoire, or arcane catalyst from Iron's Spells 'n Spellbooks.`
  },
  deeperdarker: {
    mod: "Deeper and Darker",
    modId: "deeperdarker",
    defaultCat: "dimension",
    tag: "#dimension",
    tier: "The Otherside Relic",
    rarity: "epic",
    desc: (n) => `Sculk-infused relic salvaged from the deep dark ancient cities and the otherworldly dimensions of Deeper and Darker.`
  },
  waystones: {
    mod: "Waystones",
    modId: "waystones",
    defaultCat: "travel",
    tag: "#travel",
    tier: "Teleportation Network",
    rarity: "rare",
    desc: (n) => `Instantaneous long-distance transit beacon from Waystones. Attunes to Warp Scrolls and Bound Scrolls for world traversal.`
  },
  minecraft: {
    mod: "Minecraft",
    modId: "minecraft",
    defaultCat: "material",
    tag: "#vanilla",
    tier: "Vanilla Fundamental",
    rarity: "common",
    desc: (n) => `Essential Minecraft vanilla item and foundational crafting ingredient utilized across hundreds of mod recipes.`
  }
};

// Aliases for prefixless item files
const UNPREFIXED = {
  andesite: 'create',
  brass: 'create',
  copper: 'create',
  mechanical: 'create',
  crushed: 'create',
  asurine: 'create',
  crimsite: 'create',
  ochrum: 'create',
  veridium: 'create',
  scorchia: 'create',
  scoria: 'create',
  shaft: 'create',
  cogwheel: 'create',
  chute: 'create',
  blaze_burner: 'create',
  sail: 'create',
  belt: 'create',
  speedometer: 'create',
  stressometer: 'create',
  gearbox: 'create',
  clutch: 'create',
  gantry: 'create',
  turntable: 'create',
  schematic: 'create',
  basin: 'create',
  depot: 'create',
  spout: 'create',
  display_board: 'create',
  cuckoo_clock: 'create',
  flywheel: 'create',
  water_wheel: 'create',
  steam_engine: 'create',
  hand_crank: 'create',
  millstone: 'create',
  crushing_wheel: 'create',
  encased_fan: 'create',
  deployer: 'create',
  smart_chute: 'create',
  rope_pulley: 'create',
  elevator_pulley: 'create',
  cart_assembler: 'create',
  controller_rail: 'create',
  sequenced_gearshift: 'create',
  nixie_tube: 'create',

  canvas: 'farmersdelight',
  skillet: 'farmersdelight',
  cutting_board: 'farmersdelight',
  cooking_pot: 'farmersdelight',
  stove: 'farmersdelight',
  cabbage: 'farmersdelight',
  tomato: 'farmersdelight',
  onion: 'farmersdelight',
  rice: 'farmersdelight',
  raw_pasta: 'farmersdelight',
  rich_soil: 'farmersdelight',
  organic_compost: 'farmersdelight',
  tatami: 'farmersdelight',
  safety_net: 'farmersdelight',

  void: 'cataclysm',
  ignis: 'cataclysm',
  the_incinerator: 'cataclysm',
  the_annihilator: 'cataclysm',
  the_leviathan: 'cataclysm',
  the_baby_leviathan: 'cataclysm',
  monstrous: 'cataclysm',
  burning_ashes: 'cataclysm',
  black_steel: 'cataclysm',
  witherite: 'cataclysm',
  ignitium: 'cataclysm',
  tidal: 'cataclysm',
  laser_gatling: 'cataclysm',
  abyssal: 'cataclysm',
  cursed: 'cataclysm',
  deepling: 'cataclysm',
  coralssus: 'cataclysm',
  amethyst_crab: 'cataclysm',
  ender_guardian: 'cataclysm',
  ancient_remnant: 'cataclysm',
  koboleton: 'cataclysm',
  wadjet: 'cataclysm',

  roadrunner: 'alexsmobs',
  cockroach: 'alexsmobs',
  crocodile: 'alexsmobs',
  komodo: 'alexsmobs',
  fly: 'alexsmobs',
  hummingbird: 'alexsmobs',
  orca: 'alexsmobs',
  sunbird: 'alexsmobs',
  gorilla: 'alexsmobs',
  crimson_mosquito: 'alexsmobs',
  rattlesnake: 'alexsmobs',
  enderiophage: 'alexsmobs',
  dropbear: 'alexsmobs',
  tasmanian_devil: 'alexsmobs',
  kangaroo: 'alexsmobs',
  emu: 'alexsmobs',
  platypus: 'alexsmobs',
  crow: 'alexsmobs',
  snow_leopard: 'alexsmobs',
  alligator_snapping_turtle: 'alexsmobs',
  mungus: 'alexsmobs',
  mantis_shrimp: 'alexsmobs',
  guster: 'alexsmobs',
  warped_toad: 'alexsmobs',
  moose: 'alexsmobs',
  mimicube: 'alexsmobs',
  racoon: 'alexsmobs',
  seal: 'alexsmobs',
  toucan: 'alexsmobs',
  blobfish: 'alexsmobs',
  shoebill: 'alexsmobs',
  elephant: 'alexsmobs',
  soul_vulture: 'alexsmobs',
  spectral_moray: 'alexsmobs',
  anteater: 'alexsmobs',
  rocky_roller: 'alexsmobs',
  flutter: 'alexsmobs',
  cosmic_cod: 'alexsmobs',
  bunfungus: 'alexsmobs',
  spectre: 'alexsmobs',
  gelada_monkey: 'alexsmobs',
  straddler: 'alexsmobs',
  stradpole: 'alexsmobs',
  leafcutter: 'alexsmobs',
  tiger: 'alexsmobs',
  tarantula_hawk: 'alexsmobs',
  void_worm: 'alexsmobs',
  frilled_shark: 'alexsmobs',
  mimic_octopus: 'alexsmobs',
  seagull: 'alexsmobs',
  bald_eagle: 'alexsmobs',
  skelewag: 'alexsmobs',
  rain_frog: 'alexsmobs',
  potoo: 'alexsmobs',
  mudskipper: 'alexsmobs',
  rhino: 'alexsmobs',
  sugar_glider: 'alexsmobs',
  skreecher: 'alexsmobs',
  underminer: 'alexsmobs',
  murmur: 'alexsmobs',
  centipede: 'alexsmobs',
  catfish: 'alexsmobs',
  flying_fish: 'alexsmobs',
  squid_grapple: 'alexsmobs',
  falconry: 'alexsmobs',
  tendon_whip: 'alexsmobs',
  straddleboard: 'alexsmobs',
  capsid: 'alexsmobs',
  spiked_turtle_shell: 'alexsmobs',
  fedora: 'alexsmobs',
  tarantula_hawk_elytra: 'alexsmobs',
  shield_of_the_deep: 'alexsmobs',
  pocket_sand: 'alexsmobs'
};

function formatTitle(str) {
  return str
    .replace(/[_-]+/g, ' ')
    .trim()
    .split(' ')
    .map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
    .join(' ');
}

function determineCategory(name) {
  const n = name.toLowerCase();
  if (/(sword|blade|axe|bow|crossbow|spear|staff|scythe|hammer|claws|cannon|gun|weapon|incinerator|annihilator|dagger|katana|halberd|rapier|mace|glaive|cleaver)/.test(n)) return 'weapon';
  if (/(helmet|chestplate|leggings|boots|shield|armor|crown|helm|cap|robe|casing|breastplate|hauberk|greaves|elytra|hat|headgear)/.test(n)) return 'armor';
  if (/(pickaxe|shovel|hoe|wrench|goggles|compass|shears|fishing|knife|tool|bucket|crowbar|wand|mattock|spitter|brush|flint)/.test(n)) return 'tool';
  if (/(cooked|bread|stew|soup|pie|cake|fruit|meat|apple|berry|cider|food|dumpling|salad|sandwich|roast|jam|cookie|bacon|ham|fish|kelp|beef|pork|mutton|egg|carrot|potato)/.test(n)) return 'food';
  if (/(scroll|tome|wand|staff|charm|altar|crystal|spell|candle|brew|potion|herb|rune|magic|witch|mana|sorcery|alchemical)/.test(n)) return 'magic';
  if (/(cogwheel|gear|shaft|motor|press|mixer|crusher|chute|spout|depot|casing|flywheel|fan|drill|piston|filter|funnel|mechanical|kinetics|conveyor|valve|pump|pipe)/.test(n)) return 'tech';
  if (/(backpack|chest|crate|barrel|cabinet|storage|vault|drawer|pouch|shulker|box|sack)/.test(n)) return 'storage';
  return 'material';
}

function isCleanTexture(filename) {
  const name = filename.slice(0, -4);
  // filter out numbers and animations
  if (/\b\d+\b/.test(name) && !name.includes('tier') && !name.includes('stage') && !name.includes('level')) return false;
  if (/_\d+$/.test(name)) return false;
  if (/^\d+$/.test(name)) return false;
  
  // filter out texture model fragments
  const blacklist = [
    '_layer', '_particle', '_connected', '_side', '_top', '_bottom', 
    '_front', '_back', '_inner', '_outer', '_open', '_closed',
    '_head_normal', '_head_cracked', '_left', '_right', '_middle',
    '_glow', '_mask', '_overlay', '_active', '_powered', '_lit',
    '_empty', '_full', '_stage', '_growth', '_age', '_temp', '_old',
    '_ghost', '_effect', '_beam', '_flame', '_explode', '_idle', '_grow',
    '_bubble', '_projectile', '_trail', '_sweep', '_segment', '_parts',
    '_wireframe', '_handle_', '_head_', '_binding_', '_plate_', '_limb_',
    '_string_', '_bowstring_', '_grip_', '_guard_', '_shield_'
  ];
  for (const b of blacklist) {
    if (name.includes(b)) return false;
  }
  return true;
}

// Process all files in assets/items
const sortedFiles = Array.from(existingFiles).sort();

for (const file of sortedFiles) {
  if (!isCleanTexture(file)) continue;

  const base = file.slice(0, -4);
  const firstToken = base.split('_')[0];
  
  let modId = null;
  let rawItem = base;

  if (MODS[firstToken]) {
    modId = firstToken;
    rawItem = base.slice(firstToken.length + 1);
  } else {
    // Check unprefixed aliases
    for (const [key, mappedMod] of Object.entries(UNPREFIXED)) {
      if (base === key || base.startsWith(key + '_')) {
        modId = mappedMod;
        rawItem = base;
        break;
      }
    }
  }

  if (!modId || !rawItem || rawItem.length < 2) continue;

  // Curate Tinkers' Construct items to avoid raw sprite part bloat
  if (modId === 'tconstruct') {
    const isValuable = /ingot|nugget|raw|block|cast|slime|seared|scorched|station|table|basin|drain|tank|faucet|controller|pickaxe|axe|sword|cleaver|dagger|mattock|kama|broad|plate|reinforcement|book|modifier/.test(rawItem);
    if (!isValuable) continue;
  }

  const itemId = `${modId}:${rawItem}`;
  if (itemMap.has(itemId)) continue;

  const modDef = MODS[modId];
  const name = formatTitle(rawItem);
  const cat = determineCategory(rawItem);
  const categoryTag = `#${cat}`;
  const tags = [categoryTag, modDef.tag];

  const newItem = {
    id: itemId,
    name: name,
    mod: modDef.mod,
    modId: modId,
    iconFile: file,
    category: cat,
    tags: tags,
    tier: modDef.tier,
    rarity: modDef.rarity,
    description: modDef.desc(name),
    craftType: `${modDef.mod} Crafting / Interaction`,
    outputCount: 1,
    grid: Array(9).fill(null),
    uses: [
      `Functional component in ${modDef.mod}.`,
      `Hover item and press 'R' for recipes or 'U' for uses.`
    ]
  };

  itemMap.set(itemId, newItem);
  allItems.push(newItem);
}

console.log(`Total database items created: ${allItems.length}`);

// Output to scripts/jei_database.js
const outPath = path.join(__dirname, 'jei_database.js');
const fileContent = `/* Auto-generated complete JEI database with ${allItems.length} verified items */
(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.JEI_FULL_DATABASE = factory();
  }
}(typeof self !== 'undefined' ? self : this, function () {
  return ${JSON.stringify(allItems, null, 2)};
}));
`;
fs.writeFileSync(outPath, fileContent, 'utf8');
console.log(`Saved database to ${outPath} (${(fs.statSync(outPath).size / 1024).toFixed(1)} KB)`);
