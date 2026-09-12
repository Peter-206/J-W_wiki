module.exports = [
  {
    id: "hexerei:mixing_cauldron",
    name: "Mixing Cauldron",
    mod: "Hexerei",
    modId: "hexerei",
    iconFile: "hexerei_mixing_cauldron.png",
    category: "magic",
    tags: ["#magic", "#tech"],
    tier: "Witchcraft Crucible",
    rarity: "uncommon",
    description: "Heavy iron witch's cauldron. Filled with water, tallow, or blood and heated from below to brew herbal infusions, infuse fabrics, render animal fats, and dye candles.",
    craftType: "Crafting Table (3x3)",
    outputCount: 1,
    grid: ["minecraft:iron_ingot", null, "minecraft:iron_ingot", "minecraft:iron_ingot", null, "minecraft:iron_ingot", "minecraft:iron_ingot", "minecraft:cauldron", "minecraft:iron_ingot"],
    uses: [
      "Brews herbal teas, infused fabrics, and broom wax blends.",
      "Renders animal fat into molten tallow with bottom heat.",
      "Supports fluid automation with buckets and pipes."
    ],
    spotlight: true
  },
  {
    id: "hexerei:pestle_and_mortar",
    name: "Pestle and Mortar",
    mod: "Hexerei",
    modId: "hexerei",
    iconFile: "hexerei_pestle_and_mortar.png",
    category: "tool",
    tags: ["#tool", "#magic"],
    tier: "Herbal Grinder",
    rarity: "common",
    description: "Stone grinding bowl used to crush dried herbs, flowers, minerals, and bones into fine medicinal powders and brewing extracts.",
    craftType: "Crafting Table (3x3)",
    outputCount: 1,
    grid: [null, "minecraft:stick", null, "minecraft:cobblestone", null, "minecraft:cobblestone", null, "minecraft:cobblestone", null],
    uses: [
      "Grinds dried herbs into alchemical powders.",
      "Crushes Selenite crystals and animal bones.",
      "Essential early tool for Hexerei witchcraft."
    ]
  },
  {
    id: "hexerei:herb_drying_rack",
    name: "Herb Drying Rack",
    mod: "Hexerei",
    modId: "hexerei",
    iconFile: "hexerei_herb_drying_rack.png",
    category: "utility",
    tags: ["#utility", "#magic"],
    tier: "Herbalist Station",
    rarity: "common",
    description: "Hanging wooden frame used to air-dry freshly harvested Belladonna, Sage, and Mugwort. Dried herbs gain increased potency and shelf life.",
    craftType: "Crafting Table (3x3)",
    outputCount: 1,
    grid: ["minecraft:stick", "minecraft:stick", "minecraft:stick", "minecraft:string", "minecraft:string", "minecraft:string", null, null, null],
    uses: [
      "Dries fresh herbs into potent brewing ingredients over time.",
      "Hangs up to 3 bundles of plants simultaneously.",
      "Decorative rustic aesthetic for apothecary cottages."
    ]
  },
  {
    id: "hexerei:witch_hazel_broom",
    name: "Witch Hazel Broom",
    mod: "Hexerei",
    modId: "hexerei",
    iconFile: "hexerei_witch_hazel_broom_stand_horizontal.png",
    category: "utility",
    tags: ["#utility", "#magic"],
    tier: "Enchanted Flying Mount",
    rarity: "rare",
    description: "Classic flying witch's broomstick crafted from enchanted witch hazel wood and dried brush. Upgradable with custom seats, protective tips, and satchels.",
    craftType: "Crafting Table (3x3)",
    outputCount: 1,
    grid: [null, null, "minecraft:stick", null, "minecraft:stick", null, "hexerei:broom_brush", null, null],
    uses: [
      "Rideable flying mount with smooth 3D aerial navigation.",
      "Upgradeable with Netherite Tips (fireproof) and Waterproof Tips.",
      "Attach small satchels to grant mobile inventory storage."
    ],
    spotlight: true
  },
  {
    id: "hexerei:book_of_shadows",
    name: "Book of Shadows",
    mod: "Hexerei",
    modId: "hexerei",
    iconFile: "hexerei_book_of_shadows.png",
    category: "magic",
    tags: ["#magic"],
    tier: "Grimoire of the Craft",
    rarity: "uncommon",
    description: "Leather-bound tome containing centuries of witchcraft knowledge, herbalism guides, crow taming instructions, and cauldron recipes.",
    craftType: "Crafting Table (3x3)",
    outputCount: 1,
    grid: [null, "hexerei:infused_fabric", null, "hexerei:belladonna_flowers", "minecraft:book", "hexerei:sage", null, "hexerei:infused_fabric", null],
    uses: [
      "In-game guidebook for all Hexerei features and mechanics.",
      "Can be placed onto an Altar bookstand for display.",
      "Details crow familiars and broom enchantment combinations."
    ]
  },
  {
    id: "hexerei:coffer",
    name: "Coffer",
    mod: "Hexerei",
    modId: "hexerei",
    iconFile: "hexerei_coffer.png",
    category: "storage",
    tags: ["#storage", "#magic"],
    tier: "Witch's Chest",
    rarity: "uncommon",
    description: "Ornate wooden chest reinforced with copper filigree. Can be picked up with all internal items intact like a shulker box without breaking contents.",
    craftType: "Crafting Table (3x3)",
    outputCount: 1,
    grid: ["minecraft:copper_ingot", "minecraft:oak_planks", "minecraft:copper_ingot", "minecraft:oak_planks", "minecraft:chest", "minecraft:oak_planks", "minecraft:copper_ingot", "minecraft:oak_planks", "minecraft:copper_ingot"],
    uses: [
      "Retains all stored items when broken and moved.",
      "Holds up to 36 item stacks with custom name tag support.",
      "Can be dyed in multiple colors."
    ]
  },
  {
    id: "hexerei:crow_flute",
    name: "Crow Flute",
    mod: "Hexerei",
    modId: "hexerei",
    iconFile: "hexerei_crow_flute.png",
    category: "utility",
    tags: ["#utility", "#magic"],
    tier: "Familiar Command Whistle",
    rarity: "uncommon",
    description: "Carved wooden flute tuned to the frequencies of Corvid familiars. Commands tamed Crows to harvest crops, steal shinies, or perch on shoulders.",
    craftType: "Crafting Table (3x3)",
    outputCount: 1,
    grid: [null, "minecraft:stick", null, "minecraft:feather", "minecraft:stick", null, null, null, "minecraft:stick"],
    uses: [
      "Switches Crow behaviors (Follow, Sit, Harvest, Steal, Perch).",
      "Commands crows to gather dropped items within 32 blocks.",
      "Right-click opens individual Crow inventory and hat slots."
    ]
  },
  {
    id: "hexerei:dowsing_rod",
    name: "Dowsing Rod",
    mod: "Hexerei",
    modId: "hexerei",
    iconFile: "hexerei_dowsing_rod.png",
    category: "tool",
    tags: ["#tool", "#utility"],
    tier: "Divination Tool",
    rarity: "common",
    description: "Forked witch hazel wand used for dowsing underground biomes, witch huts, caves, and specific ore veins.",
    craftType: "Crafting Table (3x3)",
    outputCount: 1,
    grid: ["minecraft:stick", null, "minecraft:stick", null, "minecraft:stick", null, null, "minecraft:stick", null],
    uses: [
      "Dips and vibrates when pointing toward nearby Witch Huts.",
      "Locates subterranean water reservoirs and deep ravines.",
      "Useful navigational tool in dense swamp wetlands."
    ]
  },
  {
    id: "hexerei:witch_helmet",
    name: "Witch Hat",
    mod: "Hexerei",
    modId: "hexerei",
    iconFile: "hexerei_witch_helmet.png",
    category: "armor",
    tags: ["#armor", "#magic"],
    tier: "Coven Attire",
    rarity: "uncommon",
    description: "Conical pointed witch's hat crafted from infused black fabric. Increases potion duration and grants passive brewing speed boosts.",
    craftType: "Crafting Table (3x3)",
    outputCount: 1,
    grid: [null, "hexerei:infused_fabric", null, "hexerei:infused_fabric", "minecraft:leather_helmet", "hexerei:infused_fabric", "hexerei:infused_fabric", null, "hexerei:infused_fabric"],
    uses: [
      "+25% Duration bonus on all consumed beneficial potions.",
      "Accelerates Cauldron mixing and brewing speed.",
      "+3 Armor protection."
    ]
  },
  {
    id: "hexerei:infused_fabric",
    name: "Infused Fabric",
    mod: "Hexerei",
    modId: "hexerei",
    iconFile: "hexerei_infused_fabric.png",
    category: "material",
    tags: ["#material", "#magic"],
    tier: "Woven Mooncloth",
    rarity: "common",
    description: "Textile soaked in a heated Mixing Cauldron with sage, tallow, and belladonna extracts. Repels dark spirits and holds enchantments.",
    craftType: "Cauldron Infusion (Fabric + Sage + Tallow)",
    outputCount: 1,
    grid: [null, "hexerei:sage", null, "hexerei:wax_blend", "minecraft:string", "hexerei:wax_blend", null, "hexerei:belladonna_flowers", null],
    uses: [
      "Crafting fabric for Witch Hats, Robes, and Boots.",
      "Used to line magical satchels and coffres.",
      "Provides natural magic and poison resistance."
    ]
  },
  {
    id: "hexerei:belladonna_flowers",
    name: "Belladonna Flowers",
    mod: "Hexerei",
    modId: "hexerei",
    iconFile: "hexerei_belladonna_flowers.png",
    category: "material",
    tags: ["#material", "#magic"],
    tier: "Nocturnal Herb",
    rarity: "common",
    description: "Toxic nightshade flower harvested from murky swamps. Dried on racks and used in brewing paralysis extracts and sleep elixirs.",
    craftType: "Swamp Foraging / Crop Farming",
    outputCount: 1,
    grid: [null, null, null, null, "minecraft:poppy", null, null, null, null],
    uses: [
      "Dried on Herb Drying Racks to yield dried belladonna.",
      "Brews sleeping draughts and potent blinding toxins.",
      "Can be farmed and cultivated from Belladonna seeds."
    ]
  },
  {
    id: "hexerei:sage",
    name: "Sage",
    mod: "Hexerei",
    modId: "hexerei",
    iconFile: "hexerei_sage.png",
    category: "material",
    tags: ["#material", "#magic"],
    tier: "Purifying Herb",
    rarity: "common",
    description: "Aromatic purifying herb found on riverbanks. Bundled and burned in a Sage Bundle to prevent hostile mobs from spawning within a 32-block radius.",
    craftType: "Riverbank Foraging / Crop Farming",
    outputCount: 1,
    grid: [null, null, null, null, "minecraft:wheat", null, null, null, null],
    uses: [
      "Crafted into Sage Bundles to smudge and sanctify bases.",
      "Key cleansing ingredient in Cauldron fabric infusion.",
      "Prevents hostile monster spawns in purified areas."
    ]
  },
  {
    id: "hexerei:selenite_shard",
    name: "Selenite Shard",
    mod: "Hexerei",
    modId: "hexerei",
    iconFile: "hexerei_selenite_shard.png",
    category: "material",
    tags: ["#material", "#magic"],
    tier: "Lunar Crystal",
    rarity: "uncommon",
    description: "Translucent lunar crystal mined from subterranean Selenite geodes. Absorbs and stores moonlight to power divination rites.",
    craftType: "Selenite Geode Mining",
    outputCount: 1,
    grid: [null, null, null, null, "minecraft:amethyst_shard", null, null, null, null],
    uses: [
      "Crafts Selenite Clusters, Candelabras, and Crystal Balls.",
      "Empowers moon-phase alchemical rites in Cauldrons.",
      "Soft luminescent decorative crystal block."
    ]
  }
];
