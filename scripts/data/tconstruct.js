module.exports = [
  {
    id: "tconstruct:smeltery_controller",
    name: "Smeltery Controller",
    mod: "Tinkers' Construct",
    modId: "tconstruct",
    iconFile: "tconstruct_smeltery_controller.png",
    category: "tech",
    tags: ["#tech", "#material"],
    tier: "Multiblock Smelter Heart",
    rarity: "rare",
    description: "The core regulatory interface of the multiblock Smeltery. Melts down raw ores at 2x doubling efficiency and alloys molten metals like Manyullyn and Rose Gold.",
    craftType: "Crafting Table (3x3)",
    outputCount: 1,
    grid: ["tconstruct:seared_bricks", "minecraft:copper_ingot", "tconstruct:seared_bricks", "tconstruct:seared_bricks", null, "tconstruct:seared_bricks", "tconstruct:seared_bricks", "tconstruct:seared_bricks", "tconstruct:seared_bricks"],
    uses: [
      "Heart of the multiblock Smeltery structure.",
      "Melts ores into liquid metals with 100% bonus yield.",
      "Allows liquid alloying (Cobalt + Ardite/Debris = Manyullyn)."
    ],
    spotlight: true
  },
  {
    id: "tconstruct:seared_bricks",
    name: "Seared Bricks",
    mod: "Tinkers' Construct",
    modId: "tconstruct",
    iconFile: "tconstruct_seared_bricks.png",
    category: "material",
    tags: ["#material", "#tech"],
    tier: "Refractory Smeltery Block",
    rarity: "common",
    description: "Heat-resistant refractory brick block used to construct the floor, walls, and basins of Tinkers' Construct Smelteries and Foundries.",
    craftType: "Crafting Table (2x2)",
    outputCount: 1,
    grid: [null, null, null, "minecraft:brick", "minecraft:brick", null, "minecraft:brick", "minecraft:brick", null],
    uses: [
      "Constructs walls and floors of the multiblock Smeltery.",
      "Expands molten metal internal storage capacity per block.",
      "Withstands extreme internal lava and liquid metal temperatures."
    ]
  },
  {
    id: "tconstruct:tinker_station",
    name: "Tinker Station",
    mod: "Tinkers' Construct",
    modId: "tconstruct",
    iconFile: "tconstruct_tinker_station_top.png",
    category: "tool",
    tags: ["#tool", "#tech"],
    tier: "Tool Assembly Bench",
    rarity: "common",
    description: "Worktable used for assembling, repairing, and modifying modular Tinkers' tools using crafted tool heads, handles, and bindings.",
    craftType: "Crafting Table (3x3)",
    outputCount: 1,
    grid: [null, "minecraft:crafting_table", null, null, "minecraft:oak_planks", null, null, null, null],
    uses: [
      "Combines modular tool parts into pickaxes, axes, and swords.",
      "Repairs tools using their head material without losing modifiers.",
      "Applies upgrade modifiers like redstone speed, lapis luck, and diamond."
    ]
  },
  {
    id: "tconstruct:pattern",
    name: "Blank Pattern",
    mod: "Tinkers' Construct",
    modId: "tconstruct",
    iconFile: "tconstruct_pattern.png",
    category: "material",
    tags: ["#material", "#tool"],
    tier: "Foundational Stencil",
    rarity: "common",
    description: "Carved wooden stencil used in the Part Builder to carve tool heads, bindings, handles, and armor plates from raw materials.",
    craftType: "Crafting Table (2x2)",
    outputCount: 4,
    grid: [null, null, null, "minecraft:oak_planks", "minecraft:stick", null, "minecraft:stick", "minecraft:oak_planks", null],
    uses: [
      "Used in the Part Builder to select part shapes.",
      "Can be converted into reusable cast molds with molten gold.",
      "Infinite reuse once slotted into specialized benches."
    ]
  },
  {
    id: "tconstruct:manyullyn_ingot",
    name: "Manyullyn Ingot",
    mod: "Tinkers' Construct",
    modId: "tconstruct",
    iconFile: "tconstruct_manyullyn_ingot.png",
    category: "material",
    tags: ["#material", "#weapon"],
    tier: "Endgame Nether Alloy",
    rarity: "epic",
    description: "The pinnacle alloy of the Nether, formed by fusing molten Cobalt with Ancient Debris or Ardite inside a Smeltery. Possesses unrivaled weapon damage.",
    craftType: "Smeltery Alloy (Cobalt + Ancient Debris)",
    outputCount: 1,
    grid: [null, null, null, "tconstruct:cobalt_ingot", "minecraft:netherite_scrap", null, null, null, null],
    uses: [
      "Top-tier weapon heads with 'Insatiable' damage stacking trait.",
      "Extremely high base attack damage and durability.",
      "Forges legendary Cleavers, Broadswords, and Armor plates."
    ],
    spotlight: true
  },
  {
    id: "tconstruct:cobalt_ingot",
    name: "Cobalt Ingot",
    mod: "Tinkers' Construct",
    modId: "tconstruct",
    iconFile: "tconstruct_cobalt_ingot.png",
    category: "material",
    tags: ["#material", "#tool"],
    tier: "Nether Speed Metal",
    rarity: "rare",
    description: "Vibrant blue metallic ore found exposed in the Nether cliffs. Unmatched for lightweight tool heads and ultra-fast mining speeds.",
    craftType: "Smeltery Smelting (Cobalt Ore)",
    outputCount: 1,
    grid: [null, null, null, null, "minecraft:lapis_lazuli", null, null, null, null],
    uses: [
      "Lightweight tool heads granting the 'Lightweight' speed trait.",
      "Required alloy component for Manyullyn ingots.",
      "High mining tier capable of harvesting Netherite and obsidian."
    ]
  },
  {
    id: "tconstruct:cleaver",
    name: "Tinkers' Cleaver",
    mod: "Tinkers' Construct",
    modId: "tconstruct",
    iconFile: "tconstruct_cleaver.png",
    category: "weapon",
    tags: ["#weapon", "#tool"],
    tier: "Heavy Beheading Blade",
    rarity: "epic",
    description: "Massive two-handed executioner blade. Features intrinsic Beheading traits to cleanly sever mob skulls and boss trophies while dealing devastating sweep damage.",
    craftType: "Tinker Anvil Assembly",
    outputCount: 1,
    grid: [null, "tconstruct:manyullyn_ingot", "tconstruct:manyullyn_ingot", null, "tconstruct:manyullyn_ingot", "tconstruct:cobalt_ingot", "minecraft:stick", null, null],
    uses: [
      "Intrinsic +20% Beheading bonus for collecting Wither skulls.",
      "Deals massive two-handed sweeping damage.",
      "Can be customized with full modifiers (Lapis Luck, Quartz Sharpness)."
    ]
  }
];
