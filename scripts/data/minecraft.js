module.exports = [
  {
    id: "minecraft:netherite_sword",
    name: "Netherite Sword",
    mod: "Minecraft",
    modId: "minecraft",
    iconFile: "minecraft_netherite_sword.png",
    category: "weapon",
    tags: ["#weapon", "#material"],
    tier: "Tier 5 Heavy Blade",
    rarity: "rare",
    description: "Peak vanilla melee weapon forged by plating a Diamond Sword with a Netherite Ingot at a Smithing Table. Does not burn in lava and deals 8 base damage.",
    craftType: "Smithing Table (Diamond Sword + Netherite)",
    outputCount: 1,
    grid: [null, null, null, "minecraft:diamond_sword", "minecraft:netherite_ingot", null, null, null, null],
    uses: [
      "8 Base Attack Damage with 1.6 attack speed.",
      "Immune to lava and fire; floats on lava surfaces.",
      "Base weapon for Cataclysm and Tinkers' upgrades."
    ],
    spotlight: true
  },
  {
    id: "minecraft:diamond_sword",
    name: "Diamond Sword",
    mod: "Minecraft",
    modId: "minecraft",
    iconFile: "minecraft_diamond_sword.png",
    category: "weapon",
    tags: ["#weapon", "#material"],
    tier: "Tier 4 Gem Blade",
    rarity: "uncommon",
    description: "Classic high-tier sword crafted from diamonds. Provides substantial damage and serves as the precursor to Netherite equipment.",
    craftType: "Crafting Table (3x3)",
    outputCount: 1,
    grid: [null, "minecraft:diamond", null, null, "minecraft:diamond", null, null, "minecraft:stick", null],
    uses: [
      "7 Base Attack Damage.",
      "Upgraded into Netherite Sword in a Smithing Table.",
      "Accepts high-tier enchants like Sharpness V and Looting III."
    ]
  },
  {
    id: "minecraft:bow",
    name: "Bow",
    mod: "Minecraft",
    modId: "minecraft",
    iconFile: "minecraft_bow.png",
    category: "weapon",
    tags: ["#weapon"],
    tier: "Ranged Weapon",
    rarity: "common",
    description: "Classic projectile launcher crafted from wooden sticks and string. Shoots arrows to snipe distant targets.",
    craftType: "Crafting Table (3x3)",
    outputCount: 1,
    grid: [null, "minecraft:stick", "minecraft:string", "minecraft:stick", null, "minecraft:string", null, "minecraft:stick", "minecraft:string"],
    uses: [
      "Fires standard arrows and tipped potion arrows.",
      "Can be enchanted with Power V, Infinity, and Flame.",
      "Precursor ingredient for Create and Cataclysm artillery."
    ]
  },
  {
    id: "minecraft:trident",
    name: "Trident",
    mod: "Minecraft",
    modId: "minecraft",
    iconFile: "minecraft_trident.png",
    category: "weapon",
    tags: ["#weapon"],
    tier: "Aquatic Relic",
    rarity: "rare",
    description: "Mythical marine weapon dropped by Drowned. Can be used in melee combat or hurled across distances, returning with Loyalty or launching the user with Riptide.",
    craftType: "Mob Drop: Drowned with Trident",
    outputCount: 1,
    grid: [null, null, null, null, "minecraft:prismarine_crystals", null, null, null, null],
    uses: [
      "9 Melee Damage and 8 Ranged Throw Damage.",
      "Riptide enchantment propels the player rapidly through water or rain.",
      "Channelling strikes lightning bolts during thunderstorms."
    ],
    spotlight: true
  },
  {
    id: "minecraft:netherite_chestplate",
    name: "Netherite Chestplate",
    mod: "Minecraft",
    modId: "minecraft",
    iconFile: "minecraft_netherite_chestplate.png",
    category: "armor",
    tags: ["#armor", "#material"],
    tier: "Tier 5 Heavy Plate",
    rarity: "rare",
    description: "Heavy chest armor forged with Netherite. Grants exceptional protection, armor toughness, and intrinsic knockback resistance while being fireproof.",
    craftType: "Smithing Table (Diamond Chest + Netherite)",
    outputCount: 1,
    grid: [null, null, null, "minecraft:diamond_chestplate", "minecraft:netherite_ingot", null, null, null, null],
    uses: [
      "+8 Armor, +3 Armor Toughness, and +1 Knockback Resistance.",
      "Immune to lava and fire destruction.",
      "Upgradable into Cataclysm Ignitium or Warden armor sets."
    ],
    spotlight: true
  },
  {
    id: "minecraft:netherite_helmet",
    name: "Netherite Helmet",
    mod: "Minecraft",
    modId: "minecraft",
    iconFile: "minecraft_netherite_helmet.png",
    category: "armor",
    tags: ["#armor", "#material"],
    tier: "Tier 5 Heavy Helm",
    rarity: "rare",
    description: "Reinforced Netherite helm that shields against concussive blows and lava.",
    craftType: "Smithing Table (Diamond Helmet + Netherite)",
    outputCount: 1,
    grid: [null, null, null, "minecraft:diamond_helmet", "minecraft:netherite_ingot", null, null, null, null],
    uses: [
      "+3 Armor, +3 Armor Toughness, +1 Knockback Resistance.",
      "Precursor helmet for the Monstrous Helm and Warden Helmet.",
      "Never burns in lava."
    ]
  },
  {
    id: "minecraft:netherite_ingot",
    name: "Netherite Ingot",
    mod: "Minecraft",
    modId: "minecraft",
    iconFile: "minecraft_netherite_ingot.png",
    category: "material",
    tags: ["#material"],
    tier: "Tier 5 Precious Metal",
    rarity: "rare",
    description: "Superdense alloy combining 4 Netherite Scraps with 4 Gold Ingots. Impervious to heat, fire, and explosions.",
    craftType: "Crafting Table (3x3 shapeless)",
    outputCount: 1,
    grid: ["minecraft:netherite_scrap", "minecraft:netherite_scrap", "minecraft:gold_ingot", "minecraft:netherite_scrap", "minecraft:netherite_scrap", "minecraft:gold_ingot", null, "minecraft:gold_ingot", "minecraft:gold_ingot"],
    uses: [
      "Upgrades Diamond equipment into Netherite gear at Smithing Tables.",
      "Key component for Cataclysm Ignitium and Witherite ingots.",
      "Crafts Netherite Backpacks and Lodestones."
    ],
    spotlight: true
  },
  {
    id: "minecraft:netherite_scrap",
    name: "Netherite Scrap",
    mod: "Minecraft",
    modId: "minecraft",
    iconFile: "minecraft_netherite_scrap.png",
    category: "material",
    tags: ["#material"],
    tier: "Raw Netherite",
    rarity: "rare",
    description: "Metallic scrap extracted by smelting Ancient Debris mined from deep within the Nether bedrock layers.",
    craftType: "Furnace / Blast Furnace (Ancient Debris)",
    outputCount: 1,
    grid: [null, null, null, null, "minecraft:ancient_debris", null, null, null, null],
    uses: [
      "Combined with 4 Gold Ingots to forge Netherite Ingots.",
      "Used in crafting Cataclysm Black Steel and alloy plates.",
      "Smelted efficiently in Create blast systems."
    ]
  },
  {
    id: "minecraft:diamond",
    name: "Diamond",
    mod: "Minecraft",
    modId: "minecraft",
    iconFile: "minecraft_diamond.png",
    category: "material",
    tags: ["#material"],
    tier: "Precious Gem",
    rarity: "uncommon",
    description: "Hard carbon gemstone mined deep beneath the earth. The gold standard for high-tier vanilla armor, weapons, and magical devices.",
    craftType: "Diamond Ore Mining",
    outputCount: 1,
    grid: [null, null, null, null, "minecraft:stone", null, null, null, null],
    uses: [
      "Crafts Diamond armor, weapons, and high-tier tools.",
      "Component for Enchanting Tables and Jukeboxes.",
      "Upgrades backpacks to Diamond tier."
    ]
  },
  {
    id: "minecraft:nether_star",
    name: "Nether Star",
    mod: "Minecraft",
    modId: "minecraft",
    iconFile: "minecraft_nether_star.png",
    category: "boss_drop",
    tags: ["#boss_drop", "#material", "#magic"],
    tier: "Wither Boss Trophy",
    rarity: "legendary",
    description: "Pulsing astral star claimed by defeating the Wither. Emanates boundless radiance and powers Beacons and endgame modded contraptions.",
    craftType: "Boss Drop: The Wither",
    outputCount: 1,
    grid: [null, null, null, null, "minecraft:soul_sand", null, null, null, null],
    uses: [
      "Core power source for Beacons.",
      "Used in crafting Witherite Ingots, Void Cores, and Omega upgrades.",
      "Unmatched magical resonance across multiple mod systems."
    ],
    spotlight: true
  },
  {
    id: "minecraft:totem_of_undying",
    name: "Totem of Undying",
    mod: "Minecraft",
    modId: "minecraft",
    iconFile: "minecraft_totem_of_undying.png",
    category: "utility",
    tags: ["#utility", "#magic"],
    tier: "Life-Saving Relic",
    rarity: "rare",
    description: "Golden effigy dropped by Evokers in Woodland Mansions and Raids. Holding it in either hand prevents death upon taking fatal damage.",
    craftType: "Mob Drop: Evoker",
    outputCount: 1,
    grid: [null, null, null, null, "minecraft:emerald", null, null, null, null],
    uses: [
      "Prevents lethal damage, restoring 1 HP + Absorption and Regeneration.",
      "Essential lifesaver when fighting Stage 5 Dragons and Cataclysm bosses.",
      "Can be held in off-hand or slotted into Curios charm slot."
    ],
    spotlight: true
  },
  {
    id: "minecraft:golden_apple",
    name: "Golden Apple",
    mod: "Minecraft",
    modId: "minecraft",
    iconFile: "minecraft_golden_apple.png",
    category: "food",
    tags: ["#food", "#magic"],
    tier: "Enchanted Sustain",
    rarity: "uncommon",
    description: "Sweet apple encased in a shell of pure gold. Grants immediate Absorption and Regeneration buffs to survive deadly boss encounters.",
    craftType: "Crafting Table (3x3)",
    outputCount: 1,
    grid: ["minecraft:gold_ingot", "minecraft:gold_ingot", "minecraft:gold_ingot", "minecraft:gold_ingot", "minecraft:apple", "minecraft:gold_ingot", "minecraft:gold_ingot", "minecraft:gold_ingot", "minecraft:gold_ingot"],
    uses: [
      "Grants Regeneration II (5s) and Absorption (2m).",
      "Restores 4 Hunger and 9.6 Saturation.",
      "Cures Zombie Villagers when combined with Weakness potions."
    ]
  },
  {
    id: "minecraft:echo_shard",
    name: "Echo Shard",
    mod: "Minecraft",
    modId: "minecraft",
    iconFile: "minecraft_echo_shard.png",
    category: "material",
    tags: ["#material", "#magic"],
    tier: "Deep Dark Resonance",
    rarity: "rare",
    description: "Resonant crystalline shard salvaged from the chest vaults of Ancient Cities. Vibrates with the memory of lost souls.",
    craftType: "Ancient City Chest Loot",
    outputCount: 1,
    grid: [null, null, null, null, "minecraft:sculk", null, null, null, null],
    uses: [
      "Crafts Recovery Compasses that point to the player's last death site.",
      "Used in Deeper and Darker Heart of the Deep recipes.",
      "Transmits sonic sculk vibrations through modded sensors."
    ]
  },
  {
    id: "minecraft:ender_eye",
    name: "Eye of Ender",
    mod: "Minecraft",
    modId: "minecraft",
    iconFile: "minecraft_ender_eye.png",
    category: "utility",
    tags: ["#utility", "#magic"],
    tier: "Dimensional Locator",
    rarity: "uncommon",
    description: "Fused Ender Pearl and Blaze Powder. Floats through the air towards the nearest Stronghold and activates the End Portal.",
    craftType: "Crafting Table (2x2)",
    outputCount: 1,
    grid: [null, null, null, "minecraft:ender_pearl", "minecraft:blaze_powder", null, null, null, null],
    uses: [
      "Thrown into the air to locate underground Strongholds.",
      "Slots into End Portal frames to unlock the End dimension.",
      "Crafts Ender Chests and Endolocators."
    ]
  },
  {
    id: "minecraft:ender_pearl",
    name: "Ender Pearl",
    mod: "Minecraft",
    modId: "minecraft",
    iconFile: "minecraft_ender_pearl.png",
    category: "utility",
    tags: ["#utility", "#material"],
    tier: "Spatial Core",
    rarity: "common",
    description: "Teleportation sphere dropped by defeated Endermen. Can be thrown to instantly teleport to the impact site at the cost of 5 HP.",
    craftType: "Mob Drop: Enderman",
    outputCount: 1,
    grid: [null, null, null, null, "minecraft:amethyst_shard", null, null, null, null],
    uses: [
      "Thrown to teleport instantly across distances.",
      "Key component for Waystones, Warp Stones, and Eyes of Ender.",
      "Used to craft Void Upgrades and spatial machinery."
    ]
  },
  {
    id: "minecraft:obsidian",
    name: "Obsidian",
    mod: "Minecraft",
    modId: "minecraft",
    iconFile: "minecraft_obsidian.png",
    category: "material",
    tags: ["#material"],
    tier: "Blast-Resistant Mineral",
    rarity: "common",
    description: "Dense volcanic glass formed when water pours over lava sources. Impervious to all mob explosions and forms the frame for Nether Portals.",
    craftType: "Water flowing over Lava Source",
    outputCount: 1,
    grid: [null, null, null, null, "minecraft:lava_bucket", null, null, null, null],
    uses: [
      "Constructs Nether Portals (minimum 4x5 rectangular frame).",
      "Blast-resistant defense against Creeper and boss explosions.",
      "Used to craft Enchanting Tables, Beacons, and Ender Chests."
    ]
  },
  {
    id: "minecraft:blaze_rod",
    name: "Blaze Rod",
    mod: "Minecraft",
    modId: "minecraft",
    iconFile: "minecraft_blaze_rod.png",
    category: "material",
    tags: ["#material"],
    tier: "Thermal Catalyst",
    rarity: "common",
    description: "Incandescent rod dropped by Blazes in Nether Fortresses. Fuels Brewing Stands and crafts Blaze Powder.",
    craftType: "Mob Drop: Nether Fortress Blaze",
    outputCount: 1,
    grid: [null, null, null, null, "minecraft:blaze_powder", null, null, null, null],
    uses: [
      "Crafts Brewing Stands and fuels alchemical potion brewing.",
      "Ground into 2 Blaze Powder for eyes of ender and fire charges.",
      "Component for Phoenix Bows, Blaze Burners, and heat engines."
    ]
  },
  {
    id: "minecraft:anvil",
    name: "Anvil",
    mod: "Minecraft",
    modId: "minecraft",
    iconFile: "minecraft_anvil.png",
    category: "tool",
    tags: ["#tool", "#utility"],
    tier: "Smithing Workstation",
    rarity: "common",
    description: "Heavy iron block used to combine enchantments from books, rename items, and repair damaged equipment using matching materials.",
    craftType: "Crafting Table (3x3)",
    outputCount: 1,
    grid: ["minecraft:iron_block", "minecraft:iron_block", "minecraft:iron_block", null, "minecraft:iron_ingot", null, "minecraft:iron_ingot", "minecraft:iron_ingot", "minecraft:iron_ingot"],
    uses: [
      "Combines enchanted books onto weapons and armor.",
      "Repairs tools using their native material without losing enchants.",
      "Renames items and name tags for pets."
    ]
  },
  {
    id: "minecraft:cauldron",
    name: "Cauldron",
    mod: "Minecraft",
    modId: "minecraft",
    iconFile: "minecraft_cauldron.png",
    category: "utility",
    tags: ["#utility"],
    tier: "Fluid Basin",
    rarity: "common",
    description: "Iron vessel capable of holding water, lava, or powdered snow. Found in witch huts and village armories.",
    craftType: "Crafting Table (3x3)",
    outputCount: 1,
    grid: ["minecraft:iron_ingot", null, "minecraft:iron_ingot", "minecraft:iron_ingot", null, "minecraft:iron_ingot", "minecraft:iron_ingot", "minecraft:iron_ingot", "minecraft:iron_ingot"],
    uses: [
      "Stores water for filling glass bottles and washing leather dyes.",
      "Collects lava from dripstone stalactites for infinite lava farming.",
      "Base crafting component for Hexerei Mixing Cauldrons."
    ]
  }
];
