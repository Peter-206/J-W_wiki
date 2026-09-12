module.exports = [
  {
    id: "waystones:waystone",
    name: "Waystone",
    mod: "Waystones",
    modId: "waystones",
    iconFile: "waystones_waystone.png",
    category: "utility",
    tags: ["#utility", "#magic"],
    tier: "Fast-Travel Monolith",
    rarity: "rare",
    description: "Ancient carved stone obelisk that can be activated by right-clicking. Once activated, players can teleport back to it from any other Waystone, Warp Stone, or Return Scroll.",
    craftType: "Crafting Table (3x3)",
    outputCount: 1,
    grid: [null, "minecraft:stone_bricks", null, "minecraft:stone_bricks", "minecraft:ender_pearl", "minecraft:stone_bricks", "minecraft:obsidian", "minecraft:obsidian", "minecraft:obsidian"],
    uses: [
      "Right-click to discover and name the Waystone location.",
      "Instant teleportation network linking bases, villages, and dimensions.",
      "Can be placed anywhere in the world and mined with a pickaxe."
    ],
    spotlight: true
  },
  {
    id: "waystones:warp_stone",
    name: "Warp Stone",
    mod: "Waystones",
    modId: "waystones",
    iconFile: "waystones_warp_stone.png",
    category: "utility",
    tags: ["#utility", "#magic"],
    tier: "Portable Teleport Relic",
    rarity: "epic",
    description: "Handheld spatial gemstone that allows teleporting to any previously activated Waystone from anywhere in the world, with a short cooldown between uses.",
    craftType: "Crafting Table (3x3)",
    outputCount: 1,
    grid: [null, "minecraft:ender_pearl", null, "minecraft:amethyst_shard", "minecraft:nether_star", "minecraft:amethyst_shard", null, "minecraft:ender_pearl", null],
    uses: [
      "Hold right-click to channel teleportation to any known Waystone.",
      "Infinite uses with a built-in cooldown timer.",
      "Saves players from catastrophic death in the Void or Nether."
    ],
    spotlight: true
  },
  {
    id: "deeperdarker:heart_of_the_deep",
    name: "Heart of the Deep",
    mod: "Deeper and Darker",
    modId: "deeperdarker",
    iconFile: "deeperdarker_heart_of_the_deep.png",
    category: "boss_drop",
    tags: ["#boss_drop", "#material", "#magic"],
    tier: "Otherside Catalyst",
    rarity: "legendary",
    description: "Pulsing dark organ dropped by the Warden upon defeat in the Deep Dark. Right-clicking the center of the Ancient City portal frame with this heart unlocks the gateway to The Otherside.",
    craftType: "Boss Drop: The Warden",
    outputCount: 1,
    grid: [null, "minecraft:echo_shard", null, "minecraft:echo_shard", "minecraft:nether_star", "minecraft:echo_shard", null, "minecraft:echo_shard", null],
    uses: [
      "Ignites the Reinforced Deepslate Portal in the Ancient City.",
      "Key component for crafting Warden Armor and Sculk Transmitters.",
      "Grants temporary Darkness immunity when held in hand."
    ],
    spotlight: true
  },
  {
    id: "deeperdarker:warden_helmet",
    name: "Warden Helmet",
    mod: "Deeper and Darker",
    modId: "deeperdarker",
    iconFile: "deeperdarker_warden_helmet.png",
    category: "armor",
    tags: ["#armor", "#boss_drop"],
    tier: "Sculk Bone Relic",
    rarity: "legendary",
    description: "Horns and sensory skullplate fashioned from the Warden's resonant bone. Grants echolocation vibrations, revealing living entities through walls.",
    craftType: "Anvil Smithing (Netherite Helm + Heart of Deep)",
    outputCount: 1,
    grid: [null, "deeperdarker:heart_of_the_deep", null, "minecraft:echo_shard", "minecraft:netherite_helmet", "minecraft:echo_shard", null, null, null],
    uses: [
      "Reveals footsteps and creature vibrations through walls (Echolocation).",
      "+4 Armor, +3 Armor Toughness, and +1 Knockback Resistance.",
      "Total immunity to the Darkness and Blindness status effects."
    ],
    spotlight: true
  },
  {
    id: "born_in_chaos:dark_metal_ingot",
    name: "Dark Metal Ingot",
    mod: "Born in Chaos",
    modId: "born_in_chaos",
    iconFile: "cataclysm_ancient_metal_ingot.png",
    category: "material",
    tags: ["#material", "#weapon"],
    tier: "Occult Ingot",
    rarity: "rare",
    description: "Infused shadowy metal refined from demonic soul dust and dark minerals. Used to forge cursed weaponry and heavy siege warhammers.",
    craftType: "Blast Furnace Smelting",
    outputCount: 1,
    grid: [null, "minecraft:iron_ingot", null, "minecraft:obsidian", "minecraft:netherite_scrap", "minecraft:obsidian", null, "minecraft:iron_ingot", null],
    uses: [
      "Forges Dark Metal weapons and demonic scythes.",
      "Deals bonus damage against holy and celestial creatures.",
      "Resistant to corrosive acid and curse decay."
    ]
  },
  {
    id: "so_many_enchants:ancient_tome",
    name: "Ancient Enchantment Tome",
    mod: "So Many Enchants",
    modId: "so_many_enchants",
    iconFile: "minecraft_enchanted_book.png",
    category: "magic",
    tags: ["#magic"],
    tier: "Mythic Enchantment",
    rarity: "legendary",
    description: "Lost arcane grimoire containing forbidden enchantments that exceed normal level limits (Supreme Sharpness V, Critical Strike IV, Advanced Protection).",
    craftType: "Ancient Dungeon / End City Loot",
    outputCount: 1,
    grid: [null, "minecraft:diamond", null, "minecraft:echo_shard", "minecraft:enchanted_book", "minecraft:echo_shard", null, "minecraft:nether_star", null],
    uses: [
      "Applies legendary enchants in an Anvil (Supreme Sharpness, Vitality).",
      "Breaks standard level caps (Sharpness VI-X equivalents).",
      "Essential for conquering Stage 5 Dragons and Cataclysm bosses."
    ]
  }
];
