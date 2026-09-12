module.exports = [
  {
    id: "cataclysm:the_incinerator",
    name: "The Incinerator",
    mod: "L_Ender's Cataclysm",
    modId: "cataclysm",
    iconFile: "cataclysm_the_incinerator.png",
    category: "weapon",
    tags: ["#weapon", "#boss_drop"],
    tier: "Mythic Boss Relic",
    rarity: "legendary",
    description: "Colossal greatsword forged in the heart of the Nether Burning Arena. Wielded by Ignis, it cleaves through multiple foes and releases sweeping waves of infernal flame that incinerate all nearby opposition.",
    craftType: "Boss Drop: Ignis",
    outputCount: 1,
    grid: [null, "cataclysm:burning_ashes", null, null, "cataclysm:black_steel_sword", null, null, "cataclysm:ignitium_ingot", null],
    uses: [
      "Deals 13 base attack damage with wide sweeping fire cleaves.",
      "Right-click unleashes a forward erupting shockwave of flame.",
      "Ignites all targets hit for 10 seconds with intense soulburn."
    ],
    spotlight: true
  },
  {
    id: "cataclysm:monstrous_helm",
    name: "Monstrous Helm",
    mod: "L_Ender's Cataclysm",
    modId: "cataclysm",
    iconFile: "cataclysm_monstrous_helm.png",
    category: "armor",
    tags: ["#armor", "#boss_drop"],
    tier: "Mythic Boss Relic",
    rarity: "legendary",
    description: "Imposing heavy skull helmet carved from the impenetrable horn of the Netherite Monstrosity. Grants immense armor, knockback immunity, and damage reflection upon taking heavy blows.",
    craftType: "Anvil Smithing",
    outputCount: 1,
    grid: ["cataclysm:monstrous_horn", "minecraft:netherite_helmet", "cataclysm:monstrous_horn", null, "cataclysm:witherite_ingot", null, null, null, null],
    uses: [
      "+4 Armor, +3 Armor Toughness, and +1 Knockback Resistance.",
      "Reflects 20% of incoming physical damage back to the attacker.",
      "Immunity to ramming stagger and explosive shockwaves."
    ],
    spotlight: true
  },
  {
    id: "cataclysm:monstrous_horn",
    name: "Monstrous Horn",
    mod: "L_Ender's Cataclysm",
    modId: "cataclysm",
    iconFile: "cataclysm_monstrous_horn.png",
    category: "boss_drop",
    tags: ["#boss_drop", "#material"],
    tier: "Mythic Boss Relic",
    rarity: "epic",
    description: "Dense calcified horn severed from the Netherite Monstrosity in the Soul Blacksmith. Possesses unyielding density capable of withstanding extreme magma pressure.",
    craftType: "Boss Drop: Netherite Monstrosity",
    outputCount: 1,
    grid: [null, null, null, null, "minecraft:netherite_ingot", null, null, null, null],
    uses: [
      "Key component for forging the Monstrous Helm.",
      "Used to craft the devastating Hammer of Monstrosity and Infernal Forge.",
      "High-value trophy of mastery over the Soul Blacksmith."
    ]
  },
  {
    id: "cataclysm:burning_ashes",
    name: "Burning Ashes",
    mod: "L_Ender's Cataclysm",
    modId: "cataclysm",
    iconFile: "cataclysm_burning_ashes.png",
    category: "boss_drop",
    tags: ["#boss_drop", "#material"],
    tier: "Nether Boss Material",
    rarity: "rare",
    description: "Still-smoldering ashes collected from the remnants of Ignis. Radiates eternal heat and infuses ingots with molten energy.",
    craftType: "Boss Drop: Ignis",
    outputCount: 2,
    grid: [null, "minecraft:blaze_rod", null, "minecraft:blaze_rod", "minecraft:nether_star", "minecraft:blaze_rod", null, "minecraft:blaze_rod", null],
    uses: [
      "Catalyst required to smelt raw Ignitium in the Infernal Forge.",
      "Used in re-forging The Incinerator.",
      "Fuels high-tier fire alchemical rites."
    ]
  },
  {
    id: "cataclysm:ignitium_ingot",
    name: "Ignitium Ingot",
    mod: "L_Ender's Cataclysm",
    modId: "cataclysm",
    iconFile: "cataclysm_ignitium_ingot.png",
    category: "material",
    tags: ["#material", "#boss_drop"],
    tier: "Mythic Alloy",
    rarity: "epic",
    description: "Superheated alloy made from Netherite and the essence of Ignis. Impervious to lava and cactus, and retains cutting sharpness even under extreme friction.",
    craftType: "Infernal Forge Smelting",
    outputCount: 1,
    grid: ["cataclysm:burning_ashes", "minecraft:netherite_ingot", "cataclysm:burning_ashes", "minecraft:netherite_ingot", "cataclysm:black_steel_ingot", "minecraft:netherite_ingot", "cataclysm:burning_ashes", "minecraft:netherite_ingot", "cataclysm:burning_ashes"],
    uses: [
      "Forges the legendary Ignitium Armor set.",
      "Upgrades Netherite gear into molten Ignitium variants.",
      "Ingredient for The Incinerator and Bulwark of the Flame."
    ]
  },
  {
    id: "cataclysm:witherite_ingot",
    name: "Witherite Ingot",
    mod: "L_Ender's Cataclysm",
    modId: "cataclysm",
    iconFile: "cataclysm_witherite_ingot.png",
    category: "material",
    tags: ["#material", "#boss_drop"],
    tier: "Wither Alloy",
    rarity: "epic",
    description: "Dense necro-metallic ingot forged from concentrated Nether Stars, Wither bones, and Netherite. Resists decay and wither corruption.",
    craftType: "Crafting Table (3x3)",
    outputCount: 1,
    grid: [null, "minecraft:nether_star", null, "minecraft:netherite_ingot", "cataclysm:black_steel_ingot", "minecraft:netherite_ingot", null, "minecraft:nether_star", null],
    uses: [
      "Used to craft the Monstrous Helm and Wither Assault weaponry.",
      "Grants intrinsic Wither immunity to crafted armor pieces.",
      "Material for endgame Netherite Monstrosity relics."
    ]
  },
  {
    id: "cataclysm:laser_gatling",
    name: "Laser Gatling",
    mod: "L_Ender's Cataclysm",
    modId: "cataclysm",
    iconFile: "cataclysm_laser_gatling.png",
    category: "weapon",
    tags: ["#weapon", "#boss_drop", "#tech"],
    tier: "Ancient Tech Weapon",
    rarity: "legendary",
    description: "Heavy rotary energy cannon scavenged from The Harbinger in the Ancient Factory. Fires high-velocity thermal laser beams powered by redstone or mechanical capacitors.",
    craftType: "Boss Drop: The Harbinger",
    outputCount: 1,
    grid: ["minecraft:redstone", "cataclysm:void_core", "minecraft:redstone", "minecraft:iron_ingot", "minecraft:bow", "minecraft:iron_ingot", "cataclysm:black_steel_ingot", "minecraft:redstone", "cataclysm:black_steel_ingot"],
    uses: [
      "Rapid-fire laser projection dealing piercing thermal damage.",
      "Spools up firing rate over continuous trigger hold.",
      "Effective against high-armor airborne and armored bosses."
    ],
    spotlight: true
  },
  {
    id: "cataclysm:tidal_claws",
    name: "Tidal Claws",
    mod: "L_Ender's Cataclysm",
    modId: "cataclysm",
    iconFile: "cataclysm_tidal_claws.png",
    category: "weapon",
    tags: ["#weapon", "#boss_drop"],
    tier: "Abyssal Relic",
    rarity: "legendary",
    description: "Pair of serrated deep-sea pincers salvaged from the Leviathan in the Sunken City. Allows the wearer to grapple forward underwater and crush foes with crushing hydraulic force.",
    craftType: "Boss Drop: The Leviathan",
    outputCount: 1,
    grid: [null, "cataclysm:crystallized_coral", null, "cataclysm:chitin_claw", "cataclysm:abyssal_egg", "cataclysm:chitin_claw", null, "minecraft:trident", null],
    uses: [
      "Extends reach and deals bonus damage to wet or submerged targets.",
      "Right-click grapples you directly towards target enemies or terrain.",
      "Provides water sprint boost and riptide-style mobility."
    ]
  },
  {
    id: "cataclysm:gauntlet_of_guard",
    name: "Gauntlet of Guard",
    mod: "L_Ender's Cataclysm",
    modId: "cataclysm",
    iconFile: "cataclysm_gauntlet_of_guard.png",
    category: "tool",
    tags: ["#tool", "#boss_drop", "#armor"],
    tier: "Ancient Tech Curio",
    rarity: "epic",
    description: "Heavy mechanical power gauntlet capable of deploying an emergency kinetic shield when taking catastrophic damage.",
    craftType: "Boss Drop: The Harbinger",
    outputCount: 1,
    grid: ["cataclysm:black_steel_ingot", "cataclysm:void_core", "cataclysm:black_steel_ingot", "minecraft:iron_ingot", "minecraft:shield", "minecraft:iron_ingot", null, "minecraft:leather", null],
    uses: [
      "Equipped in off-hand or curio slot for passive damage absorption.",
      "Absorbs lethal blows once every 120 seconds.",
      "Empowers unarmed punches with kinetic shockwaves."
    ]
  },
  {
    id: "cataclysm:void_core",
    name: "Void Core",
    mod: "L_Ender's Cataclysm",
    modId: "cataclysm",
    iconFile: "cataclysm_void_core.png",
    category: "material",
    tags: ["#material", "#boss_drop"],
    tier: "End Dimension Relic",
    rarity: "epic",
    description: "Pulsing dimensional core extracted from the Ender Guardian in the Ruined Citadel. Warps space-time and channels gravitational fields.",
    craftType: "Boss Drop: Ender Guardian",
    outputCount: 1,
    grid: ["minecraft:ender_pearl", "minecraft:ender_eye", "minecraft:ender_pearl", "minecraft:ender_eye", "minecraft:nether_star", "minecraft:ender_eye", "minecraft:ender_pearl", "minecraft:ender_eye", "minecraft:ender_pearl"],
    uses: [
      "Required component for assembling the Void Forge.",
      "Used to craft the Laser Gatling and Gauntlet of Guard.",
      "Stabilizes end-tier spatial contraptions."
    ]
  },
  {
    id: "cataclysm:void_forge",
    name: "Void Forge",
    mod: "L_Ender's Cataclysm",
    modId: "cataclysm",
    iconFile: "cataclysm_void_forge.png",
    category: "weapon",
    tags: ["#weapon", "#boss_drop"],
    tier: "Void Boss Relic",
    rarity: "legendary",
    description: "Massive warhammer infused with Ender Guardian matter. When slammed into the earth, it generates gravitational fissures that pull in enemies and detonate.",
    craftType: "Crafting Table (3x3)",
    outputCount: 1,
    grid: ["cataclysm:void_core", "minecraft:obsidian", "cataclysm:void_core", "minecraft:obsidian", "minecraft:netherite_sword", "minecraft:obsidian", null, "minecraft:blaze_rod", null],
    uses: [
      "Deals 14 physical damage with high sweeping area.",
      "Ground slam creates a localized singularity pulling nearby mobs.",
      "Causes spatial disorientation and levitation on direct hit."
    ]
  },
  {
    id: "cataclysm:infernal_forge",
    name: "Infernal Forge",
    mod: "L_Ender's Cataclysm",
    modId: "cataclysm",
    iconFile: "cataclysm_infernal_forge.png",
    category: "weapon",
    tags: ["#weapon", "#boss_drop"],
    tier: "Nether Boss Relic",
    rarity: "legendary",
    description: "Brutal war axe forged in the Netherite Monstrosity's molten foundry. Delivers crushing downward strikes that shatter enemy shields and armor.",
    craftType: "Boss Drop: Netherite Monstrosity",
    outputCount: 1,
    grid: ["cataclysm:monstrous_horn", "cataclysm:ignitium_ingot", "cataclysm:monstrous_horn", "cataclysm:ignitium_ingot", "minecraft:netherite_sword", "cataclysm:ignitium_ingot", null, "cataclysm:blazing_bone", null],
    uses: [
      "Guaranteed shield disable on target blocking players or mobs.",
      "Deals 15 raw attack damage with heavy armor penetration.",
      "Creates magma shockwaves when performing jumping critical hits."
    ]
  },
  {
    id: "cataclysm:bulwark_of_the_flame",
    name: "Bulwark of the Flame",
    mod: "L_Ender's Cataclysm",
    modId: "cataclysm",
    iconFile: "cataclysm_bulwark_of_the_flame.png",
    category: "armor",
    tags: ["#armor", "#boss_drop"],
    tier: "Mythic Shield",
    rarity: "legendary",
    description: "Impenetrable tower shield infused with Ignitium and Ignis' fiery core. Blocks 100% of projectile and fire damage while charging a counter-blast.",
    craftType: "Crafting Table (3x3)",
    outputCount: 1,
    grid: ["cataclysm:ignitium_ingot", "cataclysm:ignitium_ingot", "cataclysm:ignitium_ingot", "cataclysm:ignitium_ingot", "minecraft:shield", "cataclysm:ignitium_ingot", null, "cataclysm:ignitium_ingot", null],
    uses: [
      "Blocks all fire, lava, and explosion damage completely.",
      "Releases a conical burst of flame upon parrying heavy attacks.",
      "Cannot be disabled by regular axe strikes."
    ]
  },
  {
    id: "cataclysm:meat_shredder",
    name: "Meat Shredder",
    mod: "L_Ender's Cataclysm",
    modId: "cataclysm",
    iconFile: "cataclysm_meat_shredder.png",
    category: "weapon",
    tags: ["#weapon", "#boss_drop"],
    tier: "Ancient Tech Weapon",
    rarity: "epic",
    description: "Mechanized drill blade scavenged from The Harbinger. Spins at thousands of RPM, ripping into target armor and inflicting deep lacerations.",
    craftType: "Boss Drop: The Harbinger",
    outputCount: 1,
    grid: ["cataclysm:black_steel_ingot", "minecraft:iron_ingot", null, "minecraft:iron_ingot", "cataclysm:void_core", "minecraft:iron_ingot", null, "minecraft:iron_ingot", "cataclysm:black_steel_ingot"],
    uses: [
      "Continuous drill attack dealing multiple hits per second.",
      "Applies Bleeding status effect ignoring regular armor.",
      "Can quickly mine soft organic blocks and flesh."
    ]
  },
  {
    id: "cataclysm:coral_bardiche",
    name: "Coral Bardiche",
    mod: "L_Ender's Cataclysm",
    modId: "cataclysm",
    iconFile: "cataclysm_coral_bardiche.png",
    category: "weapon",
    tags: ["#weapon", "#boss_drop"],
    tier: "Abyssal Weapon",
    rarity: "rare",
    description: "Long-hafted poleaxe adorned with razor-sharp crystallized abyss coral. Grants superior attack reach and sweeps broad underwater arcs.",
    craftType: "Crafting Table (3x3)",
    outputCount: 1,
    grid: ["cataclysm:crystallized_coral", "cataclysm:crystallized_coral", null, "cataclysm:crystallized_coral", "minecraft:stick", null, null, "minecraft:stick", null],
    uses: [
      "+2.5 Attack Reach bonus.",
      "Deals 9 attack damage with fluid sweep attacks.",
      "Effective weapon for mounted combat and underwater expeditions."
    ]
  },
  {
    id: "cataclysm:crystallized_coral",
    name: "Crystallized Coral",
    mod: "L_Ender's Cataclysm",
    modId: "cataclysm",
    iconFile: "cataclysm_crystallized_coral.png",
    category: "material",
    tags: ["#material", "#boss_drop"],
    tier: "Sunken City Material",
    rarity: "rare",
    description: "Hardened mineral coral harvested from the deepest trenches of the Sunken City. Extremely sharp and durable.",
    craftType: "Sunken City Excavation",
    outputCount: 1,
    grid: [null, null, null, null, "minecraft:amethyst_shard", null, null, null, null],
    uses: [
      "Crafting component for the Coral Bardiche.",
      "Reinforces Tidal Claws and abyssal gear.",
      "Can be polished into decorative abyssal tiles."
    ]
  },
  {
    id: "cataclysm:abyssal_egg",
    name: "Abyssal Egg",
    mod: "L_Ender's Cataclysm",
    modId: "cataclysm",
    iconFile: "cataclysm_abyssal_egg.png",
    category: "boss_drop",
    tags: ["#boss_drop", "#material"],
    tier: "Abyssal Boss Relic",
    rarity: "epic",
    description: "Pulsing dark egg dropped by The Leviathan deep inside the Sunken City abyss. Emanates a profound ocean hum.",
    craftType: "Boss Drop: The Leviathan",
    outputCount: 1,
    grid: [null, null, null, null, "minecraft:dragon_egg", null, null, null, null],
    uses: [
      "Used to craft the Tidal Claws.",
      "Trophy and key to abyssal summoning pedestals.",
      "Grants Water Breathing and Conduit Power when carried near the sea."
    ]
  },
  {
    id: "cataclysm:black_steel_sword",
    name: "Black Steel Sword",
    mod: "L_Ender's Cataclysm",
    modId: "cataclysm",
    iconFile: "cataclysm_black_steel_sword.png",
    category: "weapon",
    tags: ["#weapon", "#material"],
    tier: "Heavy Steel Weapon",
    rarity: "uncommon",
    description: "Forged from heavy Black Steel ingots found in the Soul Blacksmith. Possesses high base durability and superior balance.",
    craftType: "Crafting Table (3x3)",
    outputCount: 1,
    grid: [null, "cataclysm:black_steel_ingot", null, null, "cataclysm:black_steel_ingot", null, null, "minecraft:stick", null],
    uses: [
      "8.5 Base Attack Damage with 1.6 attack speed.",
      "Component required to forge The Incinerator.",
      "High durability exceeding standard Diamond equipment."
    ]
  },
  {
    id: "cataclysm:black_steel_ingot",
    name: "Black Steel Ingot",
    mod: "L_Ender's Cataclysm",
    modId: "cataclysm",
    iconFile: "cataclysm_black_steel_ingot.png",
    category: "material",
    tags: ["#material"],
    tier: "Cataclysm Alloy",
    rarity: "uncommon",
    description: "Tempered heavy steel alloy produced in the industrial furnaces of Cataclysm structures. Forms the backbone of heavy weapons and shields.",
    craftType: "Blast Furnace Smelting",
    outputCount: 1,
    grid: ["minecraft:iron_ingot", "minecraft:flint", "minecraft:iron_ingot", "minecraft:flint", "minecraft:netherite_scrap", "minecraft:flint", "minecraft:iron_ingot", "minecraft:flint", "minecraft:iron_ingot"],
    uses: [
      "Forges the Black Steel armor, sword, and tool sets.",
      "Alloy ingredient for Ignitium and Witherite ingots.",
      "Used to craft the Black Steel Targe and Gauntlet of Guard."
    ]
  },
  {
    id: "cataclysm:black_steel_targe",
    name: "Black Steel Targe",
    mod: "L_Ender's Cataclysm",
    modId: "cataclysm",
    iconFile: "cataclysm_black_steel_targe.png",
    category: "armor",
    tags: ["#armor"],
    tier: "Heavy Steel Shield",
    rarity: "rare",
    description: "Reinforced buckler crafted from curved Black Steel plates. Offers quick parrying recovery and high durability against heavy boss hits.",
    craftType: "Crafting Table (3x3)",
    outputCount: 1,
    grid: [null, "cataclysm:black_steel_ingot", null, "cataclysm:black_steel_ingot", "minecraft:shield", "cataclysm:black_steel_ingot", null, "cataclysm:black_steel_ingot", null],
    uses: [
      "Allows faster shield raise time than standard wooden shields.",
      "Blocks 100% of physical damage with reduced knockback taken.",
      "Ideal off-hand protection in mid-to-late dungeon crawls."
    ]
  },
  {
    id: "cataclysm:ancient_metal_ingot",
    name: "Ancient Metal Ingot",
    mod: "L_Ender's Cataclysm",
    modId: "cataclysm",
    iconFile: "cataclysm_ancient_metal_ingot.png",
    category: "material",
    tags: ["#material"],
    tier: "Ancient Remnant Ingot",
    rarity: "rare",
    description: "Reclaimed metal smelted from the scrap mechanisms of the Ancient Factory. Exhibits unusual magnetic properties.",
    craftType: "Blast Furnace Smelting",
    outputCount: 1,
    grid: ["minecraft:iron_ingot", "minecraft:copper_ingot", "minecraft:iron_ingot", "minecraft:copper_ingot", "minecraft:redstone", "minecraft:copper_ingot", "minecraft:iron_ingot", "minecraft:copper_ingot", "minecraft:iron_ingot"],
    uses: [
      "Used to craft Ancient Spears and factory automation pieces.",
      "Repair material for Harbinger machinery.",
      "Can be converted into nuggets and structural blocks."
    ]
  },
  {
    id: "cataclysm:ancient_spear",
    name: "Ancient Spear",
    mod: "L_Ender's Cataclysm",
    modId: "cataclysm",
    iconFile: "cataclysm_ancient_spear.png",
    category: "weapon",
    tags: ["#weapon"],
    tier: "Ancient Weapon",
    rarity: "rare",
    description: "Long javelin forged from Ancient Metal. Can be thrust at close range or hurled with high precision at distant flying automatons.",
    craftType: "Crafting Table (3x3)",
    outputCount: 1,
    grid: [null, null, "cataclysm:ancient_metal_ingot", null, "minecraft:stick", null, "minecraft:stick", null, null],
    uses: [
      "Can be thrown like a trident to impale distant foes.",
      "+2 Attack Reach when used in melee.",
      "Bonus damage against mechanical and construct entities."
    ]
  },
  {
    id: "cataclysm:chitin_claw",
    name: "Chitin Claw",
    mod: "L_Ender's Cataclysm",
    modId: "cataclysm",
    iconFile: "cataclysm_chitin_claw.png",
    category: "material",
    tags: ["#material", "#boss_drop"],
    tier: "Abyssal Part",
    rarity: "rare",
    description: "Reinforced carapace claw harvested from Amethyst Crabs and abyssal guardians in the Sunken City.",
    craftType: "Mob Drop: Amethyst Crab",
    outputCount: 1,
    grid: [null, null, null, null, "cataclysm:crystallized_coral", null, null, null, null],
    uses: [
      "Required ingredient for the Tidal Claws.",
      "Used in brewing Abyssal Resistance potions.",
      "Crafts specialized crustacean armor plating."
    ]
  },
  {
    id: "cataclysm:blazing_bone",
    name: "Blazing Bone",
    mod: "L_Ender's Cataclysm",
    modId: "cataclysm",
    iconFile: "cataclysm_blazing_bone.png",
    category: "material",
    tags: ["#material", "#boss_drop"],
    tier: "Nether Relic Material",
    rarity: "rare",
    description: "Calcified skeletal remain charred by continuous soulfire. Radiates extreme internal heat.",
    craftType: "Mob Drop: Netherite Monstrosity Minions",
    outputCount: 1,
    grid: [null, "minecraft:blaze_rod", null, "minecraft:blaze_rod", "minecraft:bone", "minecraft:blaze_rod", null, "minecraft:blaze_rod", null],
    uses: [
      "Handle material for the Infernal Forge and Blazing Brand.",
      "Acts as a permanent heat source in specialized smelters.",
      "Essential component for high-tier fiery weapons."
    ]
  },
  {
    id: "cataclysm:blazing_brand",
    name: "Blazing Brand",
    mod: "L_Ender's Cataclysm",
    modId: "cataclysm",
    iconFile: "cataclysm_blazing_brand.png",
    category: "weapon",
    tags: ["#weapon"],
    tier: "Infernal Blade",
    rarity: "rare",
    description: "Short curved brand ignited with soul flames. Attacks ignite targets and detonate burning enemies with explosive bursts.",
    craftType: "Crafting Table (3x3)",
    outputCount: 1,
    grid: [null, "cataclysm:ignitium_ingot", null, null, "cataclysm:ignitium_ingot", null, null, "cataclysm:blazing_bone", null],
    uses: [
      "Rapid attack speed with high fire damage.",
      "Detonates mobs that are already on fire.",
      "Provides light in dark nether biomes."
    ]
  },
  {
    id: "cataclysm:bone_reptile_helmet",
    name: "Bone Reptile Helmet",
    mod: "L_Ender's Cataclysm",
    modId: "cataclysm",
    iconFile: "cataclysm_bone_reptile_helmet.png",
    category: "armor",
    tags: ["#armor"],
    tier: "Bone Armor",
    rarity: "uncommon",
    description: "Helmet fashioned from the thick skull of an ancient subterranean reptile. Protects against ceiling collapses and falls.",
    craftType: "Crafting Table (3x3)",
    outputCount: 1,
    grid: ["minecraft:bone", "minecraft:bone", "minecraft:bone", "minecraft:bone", null, "minecraft:bone", null, null, null],
    uses: [
      "+3 Armor protection.",
      "Reduces fall and kinetic impact damage by 15%.",
      "Early-to-mid game protective headwear."
    ]
  },
  {
    id: "cataclysm:bone_reptile_chestplate",
    name: "Bone Reptile Chestplate",
    mod: "L_Ender's Cataclysm",
    modId: "cataclysm",
    iconFile: "cataclysm_bone_reptile_chestplate.png",
    category: "armor",
    tags: ["#armor"],
    tier: "Bone Armor",
    rarity: "uncommon",
    description: "Sturdy ribcage cuirass that protects vital organs against claws and arrows.",
    craftType: "Crafting Table (3x3)",
    outputCount: 1,
    grid: ["minecraft:bone", null, "minecraft:bone", "minecraft:bone", "minecraft:bone", "minecraft:bone", "minecraft:bone", "minecraft:bone", "minecraft:bone"],
    uses: [
      "+6 Armor protection.",
      "Provides natural projectile deflection.",
      "Durable skeleton gear for spelunking."
    ]
  },
  {
    id: "cataclysm:bloom_stone_pauldrons",
    name: "Bloom Stone Pauldrons",
    mod: "L_Ender's Cataclysm",
    modId: "cataclysm",
    iconFile: "cataclysm_bloom_stone_pauldrons.png",
    category: "armor",
    tags: ["#armor", "#boss_drop"],
    tier: "Cursed Relic Curio",
    rarity: "rare",
    description: "Heavy volcanic shoulder guards discovered in the Soul Blacksmith ruins. Infuses the wearer with unyielding fortitude at low health.",
    craftType: "Dungeon Chest Loot",
    outputCount: 1,
    grid: [null, null, null, "cataclysm:black_steel_ingot", "minecraft:netherite_scrap", "cataclysm:black_steel_ingot", null, null, null],
    uses: [
      "Equips in Curios shoulder slot.",
      "Grants Resistance II when falling below 30% maximum HP.",
      "Prevents knockback from regular mob melee attacks."
    ]
  }
];
