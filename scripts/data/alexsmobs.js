module.exports = [
  {
    id: "alexsmobs:animal_dictionary",
    name: "Animal Dictionary",
    mod: "Alex's Mobs",
    modId: "alexsmobs",
    iconFile: "alexsmobs_animal_dictionary.png",
    category: "utility",
    tags: ["#utility"],
    tier: "Field Guide",
    rarity: "common",
    description: "Illustrated encyclopedic field guide to all wildlife added by Alex's Mobs. Provides taming requirements, breeding foods, drop rates, and habitat biomes for every creature.",
    craftType: "Crafting Table (2x2)",
    outputCount: 1,
    grid: [null, null, null, "minecraft:book", "minecraft:leather", null, null, null, null],
    uses: [
      "Right-click to browse detailed guides for 80+ unique creatures.",
      "Lists taming steps for Capybaras, Tigers, Grizzly Bears, and Orcas.",
      "Explains drop utilities and craftable armors from animal parts."
    ],
    spotlight: true
  },
  {
    id: "alexsmobs:dimensional_carver",
    name: "Dimensional Carver",
    mod: "Alex's Mobs",
    modId: "alexsmobs",
    iconFile: "alexsmobs_dimensional_carver.png",
    category: "weapon",
    tags: ["#weapon", "#boss_drop"],
    tier: "Void Worm Relic",
    rarity: "legendary",
    description: "Cosmic blade forged from the mandible of the Void Worm. Can rip open dimensional rifts in space-time that suck in surrounding enemies or teleport the wielder.",
    craftType: "Void Worm Mandible Smithing",
    outputCount: 1,
    grid: [null, "alexsmobs:void_worm_eye", null, null, "cataclysm:void_core", null, null, "minecraft:netherite_ingot", null],
    uses: [
      "Deals 11 base damage with spatial bypass.",
      "Right-click slashes the fabric of reality to tear open a wormhole.",
      "Sucks in nearby enemies and inflicts intense Void damage."
    ],
    spotlight: true
  },
  {
    id: "alexsmobs:crocodile_chestplate",
    name: "Crocodile Chestplate",
    mod: "Alex's Mobs",
    modId: "alexsmobs",
    iconFile: "alexsmobs_crocodile_chestplate.png",
    category: "armor",
    tags: ["#armor"],
    tier: "Reptilian Plating",
    rarity: "uncommon",
    description: "Tough cuirass fashioned from heavy Crocodile Scutes. Grants high physical defense and increases swim speed significantly in swamp waters.",
    craftType: "Crafting Table (3x3)",
    outputCount: 1,
    grid: ["alexsmobs:crocodile_scute", null, "alexsmobs:crocodile_scute", "alexsmobs:crocodile_scute", "alexsmobs:crocodile_scute", "alexsmobs:crocodile_scute", "alexsmobs:crocodile_scute", "alexsmobs:crocodile_scute", "alexsmobs:crocodile_scute"],
    uses: [
      "+6 Armor and +2 Armor Toughness.",
      "Grants +20% swimming speed in water.",
      "Deflects light physical bite attacks."
    ]
  },
  {
    id: "alexsmobs:crocodile_scute",
    name: "Crocodile Scute",
    mod: "Alex's Mobs",
    modId: "alexsmobs",
    iconFile: "alexsmobs_crocodile_scute.png",
    category: "material",
    tags: ["#material"],
    tier: "Animal Trophy",
    rarity: "common",
    description: "Thick osteoderm scale shed by Crocodiles basking on riverbanks or harvested from defeated specimens.",
    craftType: "Shed by Basking Crocodiles",
    outputCount: 1,
    grid: [null, null, null, null, "minecraft:turtle_scute", null, null, null, null],
    uses: [
      "Crafts the Crocodile Chestplate and Crocodile Crown.",
      "Can be used in an anvil to repair reptilian armor.",
      "Brewed into Potion of Aquatic Strength."
    ]
  },
  {
    id: "alexsmobs:centipede_leggings",
    name: "Centipede Leggings",
    mod: "Alex's Mobs",
    modId: "alexsmobs",
    iconFile: "alexsmobs_centipede_leggings.png",
    category: "armor",
    tags: ["#armor"],
    tier: "Insectoid Chitin",
    rarity: "uncommon",
    description: "Multi-jointed greaves crafted from Cave Centipede legs. Allows the wearer to climb vertical walls seamlessly like a spider.",
    craftType: "Crafting Table (3x3)",
    outputCount: 1,
    grid: ["alexsmobs:centipede_leg", "alexsmobs:centipede_leg", "alexsmobs:centipede_leg", "alexsmobs:centipede_leg", null, "alexsmobs:centipede_leg", "alexsmobs:centipede_leg", null, "alexsmobs:centipede_leg"],
    uses: [
      "Allows scaling sheer vertical cliffs and walls effortlessly.",
      "+5 Armor protection.",
      "Prevents wall-slide fall damage."
    ]
  },
  {
    id: "alexsmobs:centipede_leg",
    name: "Centipede Leg",
    mod: "Alex's Mobs",
    modId: "alexsmobs",
    iconFile: "alexsmobs_centipede_leg.png",
    category: "material",
    tags: ["#material"],
    tier: "Monster Part",
    rarity: "common",
    description: "Spiny chitinous limb harvested from subterranean Cave Centipedes.",
    craftType: "Mob Drop: Cave Centipede",
    outputCount: 1,
    grid: [null, null, null, null, "minecraft:string", null, null, null, null],
    uses: [
      "Required component for crafting Centipede Leggings.",
      "Brewed into potions that grant climbing properties.",
      "Ingredient for insectoid binding ropes."
    ]
  },
  {
    id: "alexsmobs:emu_leggings",
    name: "Emu Leggings",
    mod: "Alex's Mobs",
    modId: "alexsmobs",
    iconFile: "alexsmobs_emu_leggings.png",
    category: "armor",
    tags: ["#armor"],
    tier: "Agility Gear",
    rarity: "uncommon",
    description: "Feathered leggings crafted from aggressive Emu plumage. Grants permanent Speed I and swift evasive dodge steps.",
    craftType: "Crafting Table (3x3)",
    outputCount: 1,
    grid: ["alexsmobs:emu_feather", "alexsmobs:emu_feather", "alexsmobs:emu_feather", "alexsmobs:emu_feather", null, "alexsmobs:emu_feather", "alexsmobs:emu_feather", null, "alexsmobs:emu_feather"],
    uses: [
      "Grants permanent +15% movement speed (Speed I).",
      "+4 Armor protection.",
      "Increases field-of-view sprint acceleration."
    ]
  },
  {
    id: "alexsmobs:moose_headgear",
    name: "Moose Headgear",
    mod: "Alex's Mobs",
    modId: "alexsmobs",
    iconFile: "alexsmobs_moose_headgear.png",
    category: "armor",
    tags: ["#armor"],
    tier: "Ramming Helm",
    rarity: "uncommon",
    description: "Formidable antler headpiece carved from naturally shed Moose antlers. Allows sprint-ramming into mobs to deal heavy knockback and stun.",
    craftType: "Crafting Table (3x3)",
    outputCount: 1,
    grid: ["alexsmobs:moose_antler", "minecraft:leather_helmet", "alexsmobs:moose_antler", null, "minecraft:leather", null, null, null, null],
    uses: [
      "Sprinting into enemies deals 7 ramming damage with heavy knockback.",
      "Stuns small and medium targets for 1.5 seconds.",
      "+3 Armor protection."
    ]
  },
  {
    id: "alexsmobs:moose_antler",
    name: "Moose Antler",
    mod: "Alex's Mobs",
    modId: "alexsmobs",
    iconFile: "alexsmobs_moose_antler.png",
    category: "material",
    tags: ["#material"],
    tier: "Animal Trophy",
    rarity: "common",
    description: "Broad palmate antler naturally shed by bull Moose in snowy taiga biomes during springtime.",
    craftType: "Naturally Shed by Moose in Taigas",
    outputCount: 1,
    grid: [null, null, null, null, "minecraft:bone", null, null, null, null],
    uses: [
      "Crafting component for the Moose Headgear.",
      "Can be ground into 6 Bone Meal in a crafting grid.",
      "Used to craft decorative antler wall mounts."
    ]
  },
  {
    id: "alexsmobs:roadrunner_boots",
    name: "Roadrunner Boots",
    mod: "Alex's Mobs",
    modId: "alexsmobs",
    iconFile: "alexsmobs_roadrunner_boots.png",
    category: "armor",
    tags: ["#armor"],
    tier: "Desert Speed Boots",
    rarity: "uncommon",
    description: "Ultra-light boots laced with Roadrunner feathers. Grants dramatic sprinting speed boosts across desert sand and red sand.",
    craftType: "Crafting Table (3x3)",
    outputCount: 1,
    grid: [null, null, null, "alexsmobs:roadrunner_feather", null, "alexsmobs:roadrunner_feather", "minecraft:leather", null, "minecraft:leather"],
    uses: [
      "+40% Sprint Speed boost while traveling on sand, red sand, and gravel.",
      "Prevents sinking in desert quicksand or soul sand.",
      "+2 Armor protection."
    ]
  },
  {
    id: "alexsmobs:flying_fish_boots",
    name: "Flying Fish Boots",
    mod: "Alex's Mobs",
    modId: "alexsmobs",
    iconFile: "alexsmobs_flying_fish_boots.png",
    category: "armor",
    tags: ["#armor"],
    tier: "Marine Glider Boots",
    rarity: "rare",
    description: "Finned boots crafted with Flying Fish fins. Allows the wearer to launch out of the water like a dolphin and glide across open oceans.",
    craftType: "Crafting Table (3x3)",
    outputCount: 1,
    grid: [null, null, null, "alexsmobs:lobster_tail", null, "alexsmobs:lobster_tail", "minecraft:prismarine_crystals", null, "minecraft:prismarine_crystals"],
    uses: [
      "Leaping out of water triggers high-speed aerial ocean skimming.",
      "Dolphin's Grace synergy.",
      "+2 Armor and +1 Dolphin leap bonus."
    ]
  },
  {
    id: "alexsmobs:rocky_chestplate",
    name: "Rocky Chestplate",
    mod: "Alex's Mobs",
    modId: "alexsmobs",
    iconFile: "alexsmobs_rocky_chestplate.png",
    category: "armor",
    tags: ["#armor"],
    tier: "Subterranean Plating",
    rarity: "rare",
    description: "Heavy plate carved from Rocky Rollers found in crystalline deep caves. Grants massive knockback resistance and rolls down steep slopes safely.",
    craftType: "Crafting Table (3x3)",
    outputCount: 1,
    grid: ["minecraft:raw_iron", null, "minecraft:raw_iron", "minecraft:raw_iron", "minecraft:iron_chestplate", "minecraft:raw_iron", "minecraft:raw_iron", "minecraft:raw_iron", "minecraft:raw_iron"],
    uses: [
      "+7 Armor and +2 Knockback Resistance.",
      "Crouching turns the wearer into an armored rolling boulder.",
      "Smashes through mob crowds when rolling down hills."
    ]
  },
  {
    id: "alexsmobs:spiked_turtle_shell",
    name: "Spiked Turtle Shell",
    mod: "Alex's Mobs",
    modId: "alexsmobs",
    iconFile: "alexsmobs_spiked_turtle_shell.png",
    category: "armor",
    tags: ["#armor"],
    tier: "Defensive Carapace",
    rarity: "rare",
    description: "Barbed shell helmet crafted from Alligator Snapping Turtle scutes. Inflicts heavy Thorns damage when struck and extends water breathing.",
    craftType: "Crafting Table (3x3)",
    outputCount: 1,
    grid: ["minecraft:turtle_scute", "alexsmobs:crocodile_scute", "minecraft:turtle_scute", "minecraft:turtle_scute", null, "minecraft:turtle_scute", null, null, null],
    uses: [
      "Intrinsic Thorns III effect on all melee attackers.",
      "Grants +10 seconds of Water Breathing underwater.",
      "+3 Armor protection."
    ]
  },
  {
    id: "alexsmobs:falconry_glove",
    name: "Falconry Glove",
    mod: "Alex's Mobs",
    modId: "alexsmobs",
    iconFile: "alexsmobs_falconry_glove.png",
    category: "utility",
    tags: ["#utility", "#tool"],
    tier: "Avian Taming Tool",
    rarity: "uncommon",
    description: "Stout leather gauntlet used to command trained Bald Eagles, Hawks, and crows. Allows sending your raptor to hunt distant mobs or retrieve items.",
    craftType: "Crafting Table (3x3)",
    outputCount: 1,
    grid: [null, "minecraft:leather", null, "minecraft:leather", "minecraft:leather", "minecraft:leather", "minecraft:iron_nugget", "minecraft:leather", "minecraft:leather"],
    uses: [
      "Perches trained raptors onto the player's arm.",
      "Right-click targeting sends the bird to attack or disarm enemies.",
      "Can command birds to fly down and fetch dropped loot."
    ]
  },
  {
    id: "alexsmobs:falconry_hood",
    name: "Falconry Hood",
    mod: "Alex's Mobs",
    modId: "alexsmobs",
    iconFile: "alexsmobs_falconry_hood.png",
    category: "utility",
    tags: ["#utility"],
    tier: "Avian Taming Gear",
    rarity: "common",
    description: "Tiny leather cap placed over the head of trained raptors to keep them calm and docile during travel.",
    craftType: "Crafting Table (2x2)",
    outputCount: 1,
    grid: [null, null, null, "minecraft:leather", "minecraft:string", null, null, null, null],
    uses: [
      "Equip on a tamed raptor to prevent it from wandering or attacking.",
      "Removes bird anxiety in enclosed or underground areas.",
      "Removable at any time with a Falconry Glove."
    ]
  },
  {
    id: "alexsmobs:blood_sprayer",
    name: "Blood Sprayer",
    mod: "Alex's Mobs",
    modId: "alexsmobs",
    iconFile: "alexsmobs_blood_sprayer.png",
    category: "weapon",
    tags: ["#weapon"],
    tier: "Mosquito Alchemy Weapon",
    rarity: "rare",
    description: "Pressurized biological sprayer crafted with Crimson Mosquito proboscis. Sprays aerosolized mosquito blood that corrodes armor and enrages hostile mobs.",
    craftType: "Crafting Table (3x3)",
    outputCount: 1,
    grid: [null, "minecraft:iron_ingot", null, "minecraft:leather", "alexsmobs:mimicream", "minecraft:iron_ingot", null, "minecraft:glass_bottle", null],
    uses: [
      "Sprays acidic blood cone inflicting sustained damage over time.",
      "Causes afflicted targets to fight each other in frenzied madness.",
      "Melt armor durability rapidly on high-defense mobs."
    ]
  },
  {
    id: "alexsmobs:hemolymph_blaster",
    name: "Hemolymph Blaster",
    mod: "Alex's Mobs",
    modId: "alexsmobs",
    iconFile: "alexsmobs_hemolymph_blaster.png",
    category: "weapon",
    tags: ["#weapon"],
    tier: "Insectoid Artillery",
    rarity: "epic",
    description: "Biomechanical cannon that fires high-velocity hemolymph shells, exploding into paralytic goo upon impact.",
    craftType: "Crafting Table (3x3)",
    outputCount: 1,
    grid: ["alexsmobs:centipede_leg", "minecraft:iron_ingot", null, "minecraft:iron_ingot", "alexsmobs:dropbear_claw", "minecraft:iron_ingot", null, "minecraft:iron_ingot", "alexsmobs:centipede_leg"],
    uses: [
      "Fires explosive hemolymph globes that slow mobs by 80%.",
      "Deals 10 concussive splash damage.",
      "Long-range crowd control against charging dungeon hordes."
    ]
  },
  {
    id: "alexsmobs:mimicream",
    name: "Mimicream",
    mod: "Alex's Mobs",
    modId: "alexsmobs",
    iconFile: "alexsmobs_mimicream.png",
    category: "material",
    tags: ["#material", "#magic"],
    tier: "Transmutation Catalyst",
    rarity: "rare",
    description: "Peculiar metamorphic slime dropped by the subterranean Mimicube. Capable of duplicating non-unique items or repairing complex tools in an anvil.",
    craftType: "Mob Drop: Mimicube",
    outputCount: 1,
    grid: [null, null, null, null, "minecraft:slime_ball", null, null, null, null],
    uses: [
      "Can duplicate rare non-legendary items in crafting grids.",
      "Repairs any tool or armor piece in an anvil without matching ingots.",
      "Key ingredient in crafting advanced biological weapons."
    ],
    spotlight: true
  },
  {
    id: "alexsmobs:dropbear_claw",
    name: "Dropbear Claw",
    mod: "Alex's Mobs",
    modId: "alexsmobs",
    iconFile: "alexsmobs_dropbear_claw.png",
    category: "material",
    tags: ["#material", "#weapon"],
    tier: "Predator Trophy",
    rarity: "uncommon",
    description: "Curved talon dropped by Nether Dropbears that ambush adventurers from the ceilings of Nether forests.",
    craftType: "Mob Drop: Dropbear",
    outputCount: 1,
    grid: [null, null, null, null, "minecraft:bone", null, null, null, null],
    uses: [
      "Component for crafting Hemolymph Blasters and climbing claws.",
      "Infuses weapons with bonus downward aerial plunge damage.",
      "Can be brewed into Potions of Leaping."
    ]
  },
  {
    id: "alexsmobs:kangaroo_burger",
    name: "Kangaroo Burger",
    mod: "Alex's Mobs",
    modId: "alexsmobs",
    iconFile: "alexsmobs_kangaroo_burger.png",
    category: "food",
    tags: ["#food"],
    tier: "Hearty Outbacker Meal",
    rarity: "uncommon",
    description: "Juicy burger made with seasoned cooked kangaroo meat sandwiched between fresh toasted buns. Grants Jump Boost II.",
    craftType: "Crafting Table (3x3)",
    outputCount: 1,
    grid: [null, "minecraft:bread", null, null, "minecraft:cooked_beef", null, null, "minecraft:bread", null],
    uses: [
      "Restores 12 Hunger and 16 Saturation points.",
      "Grants Jump Boost II for 1 minute.",
      "Great high-energy food for spelunking and mountain climbing."
    ]
  },
  {
    id: "alexsmobs:shield_of_the_deep",
    name: "Shield of the Deep",
    mod: "Alex's Mobs",
    modId: "alexsmobs",
    iconFile: "alexsmobs_shield_of_the_deep.png",
    category: "armor",
    tags: ["#armor"],
    tier: "Abyssal Carapace Shield",
    rarity: "rare",
    description: "Living shield crafted from deep-sea Giant Squid and Cachalot Whale parts. Blinds attackers with jet-black ink when blocking strikes.",
    craftType: "Crafting Table (3x3)",
    outputCount: 1,
    grid: [null, "minecraft:prismarine_crystals", null, "alexsmobs:crocodile_scute", "minecraft:shield", "alexsmobs:crocodile_scute", null, "minecraft:ink_sac", null],
    uses: [
      "Releases an ink cloud blinding all nearby hostile attackers.",
      "Blocks 100% of physical and trident damage.",
      "Allows the player to dash forward through water while blocking."
    ]
  },
  {
    id: "alexsmobs:squid_grapple",
    name: "Squid Grapple",
    mod: "Alex's Mobs",
    modId: "alexsmobs",
    iconFile: "alexsmobs_squid_grapple.png",
    category: "tool",
    tags: ["#tool", "#utility"],
    tier: "Biomechanical Grappling Hook",
    rarity: "rare",
    description: "High-elasticity grappling hook tipped with suction tentacles. Fires a tentacle line that pulls the player rapidly towards ledges or mobs.",
    craftType: "Crafting Table (3x3)",
    outputCount: 1,
    grid: [null, "minecraft:string", "alexsmobs:dropbear_claw", null, "minecraft:bow", "minecraft:string", "minecraft:lead", null, null],
    uses: [
      "Shoots a long grappling line pulling you to terrain or ceilings.",
      "Pulls distant flying mobs down into melee range.",
      "Infinite durability when used with proper reeling rhythm."
    ]
  },
  {
    id: "alexsmobs:pocket_sand",
    name: "Pocket Sand",
    mod: "Alex's Mobs",
    modId: "alexsmobs",
    iconFile: "alexsmobs_pocket_sand.png",
    category: "weapon",
    tags: ["#weapon", "#utility"],
    tier: "Combat Dirty Trick",
    rarity: "common",
    description: "Pouch of coarse desert sand. Throwing it directly into an enemy's face temporarily blinds and disorients them, cancelling attacks.",
    craftType: "Crafting Table (2x2)",
    outputCount: 4,
    grid: [null, null, null, "minecraft:sand", "minecraft:leather", null, null, null, null],
    uses: [
      "Instantly blinds and stuns target mobs for 3 seconds.",
      "Cancels enemy boss charge and projectile wind-ups.",
      "Quick emergency self-defense tool."
    ]
  },
  {
    id: "alexsmobs:tendon_whip",
    name: "Tendon Whip",
    mod: "Alex's Mobs",
    modId: "alexsmobs",
    iconFile: "alexsmobs_tendon_whip.png",
    category: "weapon",
    tags: ["#weapon"],
    tier: "Organic Lash",
    rarity: "rare",
    description: "Flexible whip crafted from Void Worm tendons. Cracks across long distances to disarm foes and rip shields right out of their hands.",
    craftType: "Crafting Table (3x3)",
    outputCount: 1,
    grid: [null, "minecraft:string", "alexsmobs:dropbear_claw", null, "minecraft:lead", "minecraft:string", "minecraft:stick", null, null],
    uses: [
      "+3 Melee Attack Reach bonus.",
      "Instantly disables enemy shields on direct crack.",
      "Sweeps wide arcs striking multiple targets."
    ]
  },
  {
    id: "alexsmobs:straddleboard",
    name: "Straddleboard",
    mod: "Alex's Mobs",
    modId: "alexsmobs",
    iconFile: "alexsmobs_straddleboard.png",
    category: "utility",
    tags: ["#utility"],
    tier: "Magma Surfboard",
    rarity: "rare",
    description: "Heat-resistant surfboard crafted from basalt and Straddlite. Allows extreme-speed surfing across the Nether's vast lava oceans.",
    craftType: "Crafting Table (3x3)",
    outputCount: 1,
    grid: [null, null, null, "minecraft:basalt", "minecraft:basalt", "minecraft:basalt", "minecraft:netherite_scrap", null, "minecraft:netherite_scrap"],
    uses: [
      "Surfs across lava seas at speeds surpassing regular boats.",
      "Immune to lava damage and magma cube collisions.",
      "Perform high jumps across lava rapids by tapping jump."
    ]
  }
];
