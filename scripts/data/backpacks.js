module.exports = [
  {
    id: "sophisticatedbackpacks:netherite_backpack",
    name: "Netherite Backpack",
    mod: "Sophisticated Backpacks",
    modId: "sophisticatedbackpacks",
    iconFile: "sophisticatedbackpacks_netherite_backpack.png",
    category: "storage",
    tags: ["#storage"],
    tier: "Pinnacle Mobile Vault",
    rarity: "legendary",
    description: "The absolute pinnacle of personal storage. Provides 120 internal inventory slots and 7 modular upgrade slots. Completely immune to lava, fire, and explosions.",
    craftType: "Smithing Table (Diamond Backpack + Netherite)",
    outputCount: 1,
    grid: [null, "minecraft:netherite_ingot", null, "minecraft:netherite_ingot", "minecraft:chest", "minecraft:netherite_ingot", null, "minecraft:netherite_ingot", null],
    uses: [
      "120 inventory slots (massive 13x9 layout) + 7 upgrade slots.",
      "Immune to lava, fire, cactus, and explosive destruction.",
      "Wearable on back curio slot with hotkey 'B' direct access."
    ],
    spotlight: true
  },
  {
    id: "sophisticatedbackpacks:upgrade_base",
    name: "Upgrade Base",
    mod: "Sophisticated Backpacks",
    modId: "sophisticatedbackpacks",
    iconFile: "sophisticatedbackpacks_upgrade_base.png",
    category: "storage",
    tags: ["#storage", "#utility"],
    tier: "Modular Blueprint",
    rarity: "common",
    description: "The foundational leather and iron substrate used to craft all functional backpack upgrades.",
    craftType: "Crafting Table (3x3)",
    outputCount: 1,
    grid: ["minecraft:string", "minecraft:leather", "minecraft:string", "minecraft:iron_ingot", null, "minecraft:iron_ingot", "minecraft:string", "minecraft:leather", "minecraft:string"],
    uses: [
      "Base material for Magnet, Pickup, Filter, and Compacting upgrades.",
      "Can be mass-produced with standard leather and iron.",
      "Modular design allows infinite upgrade combinations."
    ]
  },
  {
    id: "sophisticatedbackpacks:magnet_upgrade",
    name: "Magnet Upgrade",
    mod: "Sophisticated Backpacks",
    modId: "sophisticatedbackpacks",
    iconFile: "sophisticatedbackpacks_magnet_upgrade.png",
    category: "storage",
    tags: ["#storage", "#utility"],
    tier: "Item Vacuum Module",
    rarity: "uncommon",
    description: "Draws nearby dropped items directly into the backpack from up to 5 blocks away. Can be configured with whitelist/blacklist filters.",
    craftType: "Crafting Table (3x3)",
    outputCount: 1,
    grid: [null, "minecraft:iron_ingot", null, "minecraft:redstone", "sophisticatedbackpacks:upgrade_base", "minecraft:redstone", null, "minecraft:iron_ingot", null],
    uses: [
      "Pulls dropped items automatically within a 5-block radius.",
      "Configurable item whitelist and blacklist.",
      "Prevents dropped ore losses when mining over lava."
    ]
  },
  {
    id: "sophisticatedbackpacks:advanced_magnet_upgrade",
    name: "Advanced Magnet Upgrade",
    mod: "Sophisticated Backpacks",
    modId: "sophisticatedbackpacks",
    iconFile: "sophisticatedbackpacks_advanced_magnet_upgrade.png",
    category: "storage",
    tags: ["#storage", "#utility"],
    tier: "Long-Range Item Vacuum",
    rarity: "rare",
    description: "Supercharged magnet module expanding item pickup radius to 12 blocks with advanced NBT, tag, and mod ID filtering.",
    craftType: "Crafting Table (3x3)",
    outputCount: 1,
    grid: [null, "minecraft:gold_ingot", null, "minecraft:diamond", "sophisticatedbackpacks:magnet_upgrade", "minecraft:diamond", null, "minecraft:gold_ingot", null],
    uses: [
      "Extended 12-block suction radius.",
      "Supports tag filtering (e.g. all #forge:ores or #forge:ingots).",
      "Can prevent vacuuming when inventory is nearly full."
    ]
  },
  {
    id: "sophisticatedbackpacks:compacting_upgrade",
    name: "Compacting Upgrade",
    mod: "Sophisticated Backpacks",
    modId: "sophisticatedbackpacks",
    iconFile: "sophisticatedbackpacks_compacting_upgrade.png",
    category: "storage",
    tags: ["#storage", "#utility"],
    tier: "Auto-Packer Module",
    rarity: "uncommon",
    description: "Automatically compacts incoming items into their 2x2 or 3x3 block forms (e.g. 9 redstone -> 1 redstone block, 9 iron -> 1 iron block).",
    craftType: "Crafting Table (3x3)",
    outputCount: 1,
    grid: [null, "minecraft:iron_ingot", null, "minecraft:piston", "sophisticatedbackpacks:upgrade_base", "minecraft:piston", null, "minecraft:redstone", null],
    uses: [
      "Automatically compresses redstone, coal, lapis, and iron into blocks.",
      "Multiplies functional backpack storage capacity by 9x.",
      "Configurable per-item recipe toggles."
    ]
  },
  {
    id: "sophisticatedbackpacks:void_upgrade",
    name: "Void Upgrade",
    mod: "Sophisticated Backpacks",
    modId: "sophisticatedbackpacks",
    iconFile: "sophisticatedbackpacks_void_upgrade.png",
    category: "storage",
    tags: ["#storage", "#utility"],
    tier: "Trash Disposal Module",
    rarity: "uncommon",
    description: "Instantly incinerates unwanted garbage items (such as gravel, diorite, or rotten flesh) as soon as they enter the backpack.",
    craftType: "Crafting Table (3x3)",
    outputCount: 1,
    grid: [null, "minecraft:obsidian", null, "minecraft:ender_pearl", "sophisticatedbackpacks:upgrade_base", "minecraft:ender_pearl", null, "minecraft:obsidian", null],
    uses: [
      "Deletes excess cobblestone, gravel, and dirt during mining.",
      "Can void items only when a specified threshold is exceeded.",
      "Keeps inventory squeaky clean during long quarrying sessions."
    ]
  },
  {
    id: "sophisticatedbackpacks:auto_smelting_upgrade",
    name: "Auto-Smelt Upgrade",
    mod: "Sophisticated Backpacks",
    modId: "sophisticatedbackpacks",
    iconFile: "sophisticatedbackpacks_auto_smelting_upgrade.png",
    category: "storage",
    tags: ["#storage", "#tech"],
    tier: "Mobile Foundry Module",
    rarity: "rare",
    description: "Integrated mobile furnace. Automatically smelts raw mined ores and foods into ingots and cooked meats inside the backpack.",
    craftType: "Crafting Table (3x3)",
    outputCount: 1,
    grid: [null, "minecraft:blaze_rod", null, "minecraft:furnace", "sophisticatedbackpacks:upgrade_base", "minecraft:furnace", null, "minecraft:blaze_rod", null],
    uses: [
      "Smelts incoming raw iron, copper, and gold into pure ingots.",
      "Automatically cooks porkchops, beef, and potatoes.",
      "Accepts coal, charcoal, or lava buckets as fuel sources."
    ]
  },
  {
    id: "sophisticatedbackpacks:crafting_upgrade",
    name: "Crafting Upgrade",
    mod: "Sophisticated Backpacks",
    modId: "sophisticatedbackpacks",
    iconFile: "sophisticatedbackpacks_crafting_upgrade.png",
    category: "storage",
    tags: ["#storage", "#utility"],
    tier: "Integrated Workbench",
    rarity: "common",
    description: "Integrates a full 3x3 crafting table directly into the backpack interface with automatic ingredient pulling from stored contents.",
    craftType: "Crafting Table (3x3)",
    outputCount: 1,
    grid: [null, "minecraft:crafting_table", null, null, "sophisticatedbackpacks:upgrade_base", null, null, null, null],
    uses: [
      "Access a full 3x3 crafting grid directly in the backpack UI.",
      "Pulls crafting ingredients straight from backpack storage slots.",
      "Supports JEI recipe clicking with '+' button transfers."
    ]
  },
  {
    id: "sophisticatedbackpacks:feeding_upgrade",
    name: "Feeding Upgrade",
    mod: "Sophisticated Backpacks",
    modId: "sophisticatedbackpacks",
    iconFile: "sophisticatedbackpacks_feeding_upgrade.png",
    category: "storage",
    tags: ["#storage", "#food"],
    tier: "Auto-Nutritional Module",
    rarity: "uncommon",
    description: "Monitors the player's hunger bar and automatically consumes the most optimal food stored in the backpack whenever hunger drops.",
    craftType: "Crafting Table (3x3)",
    outputCount: 1,
    grid: [null, "minecraft:golden_carrot", null, null, "sophisticatedbackpacks:upgrade_base", null, null, "minecraft:glistering_melon_slice", null],
    uses: [
      "Never starve again; automatically eats when hunger reaches threshold.",
      "Can prioritize foods with highest saturation (e.g. golden carrots).",
      "Works during frantic combat without interrupting weapon swinging."
    ]
  },
  {
    id: "sophisticatedbackpacks:stack_upgrade_omega_tier",
    name: "Omega Stack Upgrade",
    mod: "Sophisticated Backpacks",
    modId: "sophisticatedbackpacks",
    iconFile: "sophisticatedbackpacks_stack_upgrade_omega_tier.png",
    category: "storage",
    tags: ["#storage"],
    tier: "Deep Storage Multiplier",
    rarity: "legendary",
    description: "Mythic compression module that multiplies maximum item stack sizes inside the backpack by 16x (allowing up to 1,024 items per single slot).",
    craftType: "Crafting Table (3x3)",
    outputCount: 1,
    grid: ["minecraft:netherite_ingot", "minecraft:nether_star", "minecraft:netherite_ingot", "minecraft:nether_star", "sophisticatedbackpacks:upgrade_base", "minecraft:nether_star", "minecraft:netherite_ingot", "minecraft:nether_star", "minecraft:netherite_ingot"],
    uses: [
      "Multiplies stack size per slot by 16x (1,024 items per slot).",
      "Transforms the Netherite Backpack into a multi-million item vault.",
      "Unmatched storage density for massive quarry mining expeditions."
    ],
    spotlight: true
  }
];
