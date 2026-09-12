module.exports = [
  {
    id: "iceandfire:dragonsteel_fire_sword",
    name: "Fire Dragonsteel Sword",
    mod: "Ice and Fire: Dragons",
    modId: "iceandfire",
    iconFile: "iceandfire_dragonsteel_fire_sword.png",
    category: "weapon",
    tags: ["#weapon", "#boss_drop"],
    tier: "Stage 5 Dragon Weapon",
    rarity: "legendary",
    description: "Peak-tier legendary broadsword tempered in the blazing breath of an ancient Stage 5 Fire Dragon. Delivers astronomical 25 base damage, heavy knockback, and incinerates the enemy soul on hit.",
    craftType: "Crafting Table (3x3)",
    outputCount: 1,
    grid: [null, "iceandfire:dragonsteel_fire_ingot", null, null, "iceandfire:dragonsteel_fire_ingot", null, null, "iceandfire:dragon_bone", null],
    uses: [
      "Deals massive 25 attack damage with 1.6 attack speed.",
      "Inflicts unquenchable Dragonflame for 15 seconds.",
      "Unrivaled 8,000 durability that ignores standard wear."
    ],
    spotlight: true
  },
  {
    id: "iceandfire:dragonsteel_fire_ingot",
    name: "Fire Dragonsteel Ingot",
    mod: "Ice and Fire: Dragons",
    modId: "iceandfire",
    iconFile: "iceandfire_dragonsteel_fire_ingot.png",
    category: "material",
    tags: ["#material", "#boss_drop"],
    tier: "Stage 5 Dragon Alloy",
    rarity: "legendary",
    description: "Unbreakable alloy created exclusively inside an active Fire Dragon Forge. Requires iron ingots, Fire Dragon blood, and the sustained fiery breath of a tamed Stage 5 dragon.",
    craftType: "Tier 5 Dragon Forge",
    outputCount: 1,
    grid: ["iceandfire:fire_dragon_blood", "minecraft:iron_ingot", "iceandfire:fire_dragon_blood", "minecraft:iron_ingot", "iceandfire:dragon_bone", "minecraft:iron_ingot", "iceandfire:fire_dragon_blood", "minecraft:iron_ingot", "iceandfire:fire_dragon_blood"],
    uses: [
      "Forges the complete Fire Dragonsteel Armor and Weapon set.",
      "Unmatched hardness exceeding Netherite by an order of magnitude.",
      "Immune to all dragon breath, explosions, and void decay."
    ]
  },
  {
    id: "iceandfire:dragon_forge_fire_core",
    name: "Dragon Forge Core",
    mod: "Ice and Fire: Dragons",
    modId: "iceandfire",
    iconFile: "iceandfire_dragon_forge_fire_core.png",
    category: "tech",
    tags: ["#tech", "#boss_drop"],
    tier: "Multiblock Controller",
    rarity: "epic",
    description: "The multiblock heart of the elemental Dragon Forge. When assembled with dragon bone blocks and an aperture, a Stage 5 dragon can breathe directly into it to melt metals into Dragonsteel.",
    craftType: "Crafting Table (3x3)",
    outputCount: 1,
    grid: ["iceandfire:dragon_bone", "iceandfire:fire_dragon_blood", "iceandfire:dragon_bone", "iceandfire:fire_dragon_blood", "minecraft:nether_star", "iceandfire:fire_dragon_blood", "iceandfire:dragon_bone", "iceandfire:fire_dragon_blood", "iceandfire:dragon_bone"],
    uses: [
      "Center block for constructing the multiblock Dragon Forge.",
      "Buffers dragon breath charge to smelt Dragonsteel ingots.",
      "Key progression bridge between dragon hunting and endgame armor."
    ]
  },
  {
    id: "iceandfire:dragon_horn",
    name: "Dragon Horn",
    mod: "Ice and Fire: Dragons",
    modId: "iceandfire",
    iconFile: "iceandfire_dragon_horn.png",
    category: "utility",
    tags: ["#utility", "#boss_drop"],
    tier: "Dragon Taming Relic",
    rarity: "rare",
    description: "Carved musical horn capable of containing and recalling tamed dragons of any stage into portable pocket suspension.",
    craftType: "Crafting Table (3x3)",
    outputCount: 1,
    grid: [null, "iceandfire:dragon_bone", "iceandfire:dragon_bone", "iceandfire:dragon_bone", "minecraft:stick", "iceandfire:dragon_bone", "iceandfire:dragon_bone", "iceandfire:dragon_bone", null],
    uses: [
      "Shift-right click on a tamed dragon to store it safely inside the horn.",
      "Right-click on any ground block to summon your dragon instantly.",
      "Prevents tamed dragons from suffocating or wandering into danger."
    ]
  },
  {
    id: "iceandfire:dragon_bone",
    name: "Dragon Bone",
    mod: "Ice and Fire: Dragons",
    modId: "iceandfire",
    iconFile: "iceandfire_dragon_bone.png",
    category: "material",
    tags: ["#material", "#boss_drop"],
    tier: "Dragon Remains",
    rarity: "uncommon",
    description: "Enormous osteological bone harvested from the skeleton or carcass of a slain dragon. Incomparably stronger than terrestrial bone.",
    craftType: "Dragon Carcass Harvesting",
    outputCount: 4,
    grid: [null, null, null, null, "minecraft:bone_block", null, null, null, null],
    uses: [
      "Handle material for all Dragonsteel weapons and tools.",
      "Crafts Dragon Bone Swords, Bows, and Multiblock Forges.",
      "Ingredient for Dragon Horns and summoning flutes."
    ]
  },
  {
    id: "iceandfire:fire_dragon_blood",
    name: "Fire Dragon Blood",
    mod: "Ice and Fire: Dragons",
    modId: "iceandfire",
    iconFile: "iceandfire_fire_dragon_blood.png",
    category: "material",
    tags: ["#material", "#boss_drop"],
    tier: "Draconic Reagent",
    rarity: "rare",
    description: "Boiling crimson blood collected from a defeated Fire Dragon using empty glass bottles. Retains extreme draconic heat indefinitely.",
    craftType: "Right-click Slain Fire Dragon with Glass Bottle",
    outputCount: 1,
    grid: [null, null, null, null, "minecraft:glass_bottle", null, null, null, null],
    uses: [
      "Crucial flux reagent for forging Fire Dragonsteel in the Dragon Forge.",
      "Infuses normal dragon bone weapons with fiery elemental damage.",
      "Alchemical ingredient for high-potency fire resistance and strength."
    ]
  },
  {
    id: "iceandfire:gorgon_head",
    name: "Gorgon Head",
    mod: "Ice and Fire: Dragons",
    modId: "iceandfire",
    iconFile: "iceandfire_gorgon_head.png",
    category: "weapon",
    tags: ["#weapon", "#boss_drop", "#magic"],
    tier: "Mythic Curse Relic",
    rarity: "legendary",
    description: "Severed head of the mythical Gorgon found in subterranean coastal temples. When raised, its petrifying gaze permanently turns any mortal or boss entity to solid stone.",
    craftType: "Boss Drop: Gorgon (Must wear Blindfold)",
    outputCount: 1,
    grid: [null, null, null, null, "minecraft:totem_of_undying", null, null, null, null],
    uses: [
      "Hold right-click to channel the petrifying gaze at target creatures.",
      "Instantly converts dragons, golems, or mobs into decorative statues.",
      "Extremely rare single-use or limited-charge boss conqueror."
    ]
  }
];
