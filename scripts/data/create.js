module.exports = [
  {
    id: "create:wrench",
    name: "Create Wrench",
    mod: "Create",
    modId: "create",
    iconFile: "create_wrench.png",
    category: "tool",
    tags: ["#tool", "#tech"],
    tier: "Essential Engineer Tool",
    rarity: "common",
    description: "Indispensable tool for configuring, rotating, and dismantling kinetic machinery. Instantly picks up contraptions without losing rotation or stress configurations.",
    craftType: "Crafting Table (3x3)",
    outputCount: 1,
    grid: ["create:brass_ingot", "create:brass_ingot", null, "create:brass_ingot", "create:cogwheel", null, null, null, "minecraft:stick"],
    uses: [
      "Right-click to rotate components along their axis.",
      "Sneak right-click to instantly retrieve components into inventory.",
      "Scroll to modify settings on gearboxes, gearshifts, and tunnels."
    ],
    spotlight: true
  },
  {
    id: "create:goggles",
    name: "Engineer's Goggles",
    mod: "Create",
    modId: "create",
    iconFile: "create_goggles.png",
    category: "armor",
    tags: ["#armor", "#tech"],
    tier: "Kinetic Diagnostic Gear",
    rarity: "common",
    description: "Brass-rimmed diagnostic eyewear. Looking at any kinetic shaft or mechanism reveals current rotation speed (RPM), stress capacity (SU), and network load.",
    craftType: "Crafting Table (3x3)",
    outputCount: 1,
    grid: [null, "minecraft:leather", null, "minecraft:glass_pane", "create:brass_ingot", "minecraft:glass_pane", null, null, null],
    uses: [
      "Displays real-time Stress Units (SU) and RPM on kinetic networks.",
      "Shows fluid volume and capacity in pipes and fluid tanks.",
      "Can be worn on helmet or curio head slot."
    ]
  },
  {
    id: "create:water_wheel",
    name: "Water Wheel",
    mod: "Create",
    modId: "create",
    iconFile: "create_water_wheel.png",
    category: "tech",
    tags: ["#tech"],
    tier: "Early Kinetic Generator",
    rarity: "common",
    description: "Foundational kinetic power generator. Uses flowing water along its perimeter paddles to continuously rotate central shafts, generating early rotational force.",
    craftType: "Crafting Table (3x3)",
    outputCount: 1,
    grid: [null, "minecraft:oak_planks", null, "minecraft:oak_planks", "create:shaft", "minecraft:oak_planks", null, "minecraft:oak_planks", null],
    uses: [
      "Generates 256 Stress Units (SU) at 8 RPM when water flows correctly.",
      "Can be tiled side-by-side along shafts for compact early generation.",
      "Powers early mechanical presses, mixers, and mills."
    ]
  },
  {
    id: "create:mechanical_press",
    name: "Mechanical Press",
    mod: "Create",
    modId: "create",
    iconFile: "create_mechanical_press.png",
    category: "tech",
    tags: ["#tech"],
    tier: "Automated Compactor",
    rarity: "uncommon",
    description: "Heavy kinetic ram capable of compacting ingots into sheets, pressing blaze cakes, or packaging materials in conjunction with a Basin placed below.",
    craftType: "Crafting Table (3x3)",
    outputCount: 1,
    grid: [null, "create:shaft", null, null, "create:andesite_casing", null, null, "minecraft:iron_ingot", null],
    uses: [
      "Flattens ingots into mechanical sheets automatically.",
      "Compacts bulk items inside a Basin beneath the piston.",
      "Operating speed scales directly with input rotational RPM."
    ]
  },
  {
    id: "create:mechanical_saw",
    name: "Mechanical Saw",
    mod: "Create",
    modId: "create",
    iconFile: "create_mechanical_saw_top.png",
    category: "tech",
    tags: ["#tech", "#tool"],
    tier: "Kinetic Lumberjack",
    rarity: "uncommon",
    description: "High-speed rotating circular saw blade. Instantly fells entire trees when assembled onto moving contraptions or cuts logs into stripped wood and planks in processing lines.",
    craftType: "Crafting Table (3x3)",
    outputCount: 1,
    grid: [null, "minecraft:iron_ingot", null, "minecraft:iron_ingot", "create:andesite_casing", "minecraft:iron_ingot", null, "create:shaft", null],
    uses: [
      "Automatically cuts whole trees down in one pass on contraptions.",
      "Processes wood on conveyor belts without item loss.",
      "Can stonecut stone and metals when items are dropped on top."
    ]
  },
  {
    id: "create:mechanical_drill",
    name: "Mechanical Drill",
    mod: "Create",
    modId: "create",
    iconFile: "create_mechanical_drill_top.png",
    category: "tech",
    tags: ["#tech", "#tool"],
    tier: "Kinetic Excavator",
    rarity: "uncommon",
    description: "Heavy-duty rotating drill head designed for quarrying rock, tunneling underground, and strip-mining ore deposits when mounted on minecarts, trains, or gantries.",
    craftType: "Crafting Table (3x3)",
    outputCount: 1,
    grid: [null, "create:andesite_alloy", null, "create:andesite_alloy", "minecraft:iron_ingot", "create:andesite_alloy", null, "create:andesite_casing", null],
    uses: [
      "Breaks hard stone, deepslate, and ores instantly when driven.",
      "Essential component for automated mining bore trains.",
      "Drops mined items safely for vacuum chutes or collectors."
    ]
  },
  {
    id: "create:deployer",
    name: "Deployer",
    mod: "Create",
    modId: "create",
    iconFile: "create_deployer.png",
    category: "tech",
    tags: ["#tech"],
    tier: "Automated Articulator",
    rarity: "uncommon",
    description: "Mechanical simulated hand capable of using tools, placing blocks, planting seeds, shearing sheep, or polishing precision components like Rose Quartz.",
    craftType: "Crafting Table (3x3)",
    outputCount: 1,
    grid: [null, "create:shaft", null, null, "create:andesite_casing", null, null, "create:brass_hand", null],
    uses: [
      "Automates sandpaper polishing for Electron Tubes.",
      "Can hold weapons or tools to simulate player left/right clicks.",
      "Milks cows, shears sheep, and harvests crops automatically."
    ]
  },
  {
    id: "create:basin",
    name: "Basin",
    mod: "Create",
    modId: "create",
    iconFile: "create_basin.png",
    category: "tech",
    tags: ["#tech"],
    tier: "Reaction Vessel",
    rarity: "common",
    description: "Sturdy open vessel designed to hold items and fluids for processing beneath Mechanical Presses and Mechanical Mixers.",
    craftType: "Crafting Table (3x3)",
    outputCount: 1,
    grid: ["create:andesite_alloy", null, "create:andesite_alloy", "create:andesite_alloy", null, "create:andesite_alloy", "create:andesite_alloy", "create:andesite_alloy", "create:andesite_alloy"],
    uses: [
      "Holds materials for compacting, mixing, and potion brewing.",
      "Can be heated from below with Blaze Burners for alloy recipes.",
      "Automatically outputs finished crafts to adjacent belts or chutes."
    ]
  },
  {
    id: "create:chute",
    name: "Chute",
    mod: "Create",
    modId: "create",
    iconFile: "create_chute.png",
    category: "tech",
    tags: ["#tech", "#storage"],
    tier: "Gravity Transport",
    rarity: "common",
    description: "Vertical downward logistical pipe. Transports entire stacks of items downward instantly using pure gravity without requiring kinetic energy.",
    craftType: "Crafting Table (3x3)",
    outputCount: 4,
    grid: [null, "minecraft:iron_ingot", null, "minecraft:iron_ingot", null, "minecraft:iron_ingot", null, "minecraft:iron_ingot", null],
    uses: [
      "Transfers full stacks downward each tick without power.",
      "Can be attached to Encased Fans to create upward pneumatic lifts.",
      "Connects directly beneath chests, barrels, and processing basins."
    ]
  },
  {
    id: "create:andesite_funnel",
    name: "Andesite Funnel",
    mod: "Create",
    modId: "create",
    iconFile: "create_andesite_funnel.png",
    category: "tech",
    tags: ["#tech"],
    tier: "Logistical Port",
    rarity: "common",
    description: "Compact input/output port that transfers single items between inventory blocks and moving conveyor belts.",
    craftType: "Crafting Table (3x3)",
    outputCount: 2,
    grid: [null, "create:andesite_alloy", null, null, "minecraft:dried_kelp", null, null, null, null],
    uses: [
      "Extracts or inserts 1 item at a time onto belts and depots.",
      "Toggle direction by right-clicking with a Wrench.",
      "Low-cost early logistics for automated sorting."
    ]
  },
  {
    id: "create:brass_funnel",
    name: "Brass Funnel",
    mod: "Create",
    modId: "create",
    iconFile: "create_brass_funnel.png",
    category: "tech",
    tags: ["#tech"],
    tier: "Advanced Smart Funnel",
    rarity: "rare",
    description: "High-precision brass logistical port. Supports exact stack-size extraction (up to 64) and accepts item/attribute filters for advanced routing.",
    craftType: "Crafting Table (3x3)",
    outputCount: 2,
    grid: [null, "create:brass_ingot", null, null, "create:electron_tube", null, null, "minecraft:dried_kelp", null],
    uses: [
      "Extracts exact specified stack amounts (e.g. exactly 16 ingots).",
      "Slots an item or Attribute Filter to whitelist/blacklist outputs.",
      "Can be controlled and paused via redstone signals."
    ]
  },
  {
    id: "create:andesite_casing",
    name: "Andesite Casing",
    mod: "Create",
    modId: "create",
    iconFile: "create_andesite_casing.png",
    category: "material",
    tags: ["#material", "#tech"],
    tier: "Structural Base",
    rarity: "common",
    description: "Sturdy structural block crafted by encasing stripped wood with Andesite Alloy. The building block for early mechanical contraptions.",
    craftType: "Use Andesite Alloy on Stripped Log",
    outputCount: 1,
    grid: [null, "create:andesite_alloy", null, null, "minecraft:oak_planks", null, null, null, null],
    uses: [
      "Base chassis for Mechanical Presses, Mixers, Drills, and Saws.",
      "Covers open shafts to prevent entanglements and beautify setups.",
      "Essential component for early kinetic engineering."
    ]
  },
  {
    id: "create:brass_casing",
    name: "Brass Casing",
    mod: "Create",
    modId: "create",
    iconFile: "create_brass_casing.png",
    category: "material",
    tags: ["#material", "#tech"],
    tier: "Precision Structural Base",
    rarity: "uncommon",
    description: "High-grade structural casing made from polished brass and stripped timber. Enables precision machinery, mechanical arms, and smart tunnels.",
    craftType: "Use Brass Ingot on Stripped Log",
    outputCount: 1,
    grid: [null, "create:brass_ingot", null, null, "minecraft:oak_planks", null, null, null, null],
    uses: [
      "Chassis for Mechanical Arms, Brass Tunnels, and Speed Controllers.",
      "Protects precision kinetic electronics and gear systems.",
      "Elegant decorative brass block for industrial builds."
    ]
  },
  {
    id: "create:copper_casing",
    name: "Copper Casing",
    mod: "Create",
    modId: "create",
    iconFile: "create_copper_casing.png",
    category: "material",
    tags: ["#material", "#tech"],
    tier: "Fluid Structural Base",
    rarity: "common",
    description: "Watertight casing forged by plating stripped timber with copper. Forms the foundation for spouts, fluid valves, and mechanical pumps.",
    craftType: "Use Copper Ingot on Stripped Log",
    outputCount: 1,
    grid: [null, "minecraft:copper_ingot", null, null, "minecraft:oak_planks", null, null, null, null],
    uses: [
      "Chassis for Spouts, Item Drains, and Fluid Pipes.",
      "Impermeable to high-temperature molten liquids and steam.",
      "Resists oxidation when treated with beeswax."
    ]
  },
  {
    id: "create:andesite_alloy",
    name: "Andesite Alloy",
    mod: "Create",
    modId: "create",
    iconFile: "create_andesite_alloy.png",
    category: "material",
    tags: ["#material", "#tech"],
    tier: "Fundamental Kinetic Alloy",
    rarity: "common",
    description: "Composite alloy fusing crushed andesite with iron or zinc. The cornerstone material of all early mechanical kinetics in Create.",
    craftType: "Crafting Table (2x2)",
    outputCount: 1,
    grid: [null, null, null, "minecraft:iron_ingot", "minecraft:flint", null, null, null, null],
    uses: [
      "Crafts Shafts, Cogwheels, and Andesite Casings.",
      "Can be produced efficiently in a Heated Basin Mixer.",
      "Universal structural binder for mechanical gear."
    ]
  },
  {
    id: "create:brass_ingot",
    name: "Brass Ingot",
    mod: "Create",
    modId: "create",
    iconFile: "create_brass_ingot.png",
    category: "material",
    tags: ["#material", "#tech"],
    tier: "Precision Alloy",
    rarity: "uncommon",
    description: "High-grade metallurgical alloy made by melting copper and zinc inside a Heated Basin with a Mechanical Mixer.",
    craftType: "Heated Basin Mixing (Copper + Zinc)",
    outputCount: 2,
    grid: [null, null, null, "minecraft:copper_ingot", "minecraft:iron_ingot", null, null, null, null],
    uses: [
      "Essential for precision mechanics, Brass Funnels, and Wrenches.",
      "Forms Brass Casings and Rotation Speed Controllers.",
      "Key progression tier required for trains and smart automation."
    ]
  },
  {
    id: "create:cogwheel",
    name: "Cogwheel",
    mod: "Create",
    modId: "create",
    iconFile: "create_cogwheel.png",
    category: "tech",
    tags: ["#tech"],
    tier: "Kinetic Transmission",
    rarity: "common",
    description: "Standard wooden gear mounted on a metal shaft. Transmits rotational force at a 90-degree angle or reverses rotation between adjacent gears.",
    craftType: "Crafting Table (3x3)",
    outputCount: 1,
    grid: [null, "minecraft:oak_planks", null, "minecraft:oak_planks", "create:shaft", "minecraft:oak_planks", null, "minecraft:oak_planks", null],
    uses: [
      "Connects to adjacent cogwheels to transmit and reverse rotation.",
      "Interlocks diagonally with Large Cogwheels to double speed (2x).",
      "Forms the mechanical core of gearboxes and transmission networks."
    ]
  },
  {
    id: "create:large_cogwheel",
    name: "Large Cogwheel",
    mod: "Create",
    modId: "create",
    iconFile: "create_large_cogwheel.png",
    category: "tech",
    tags: ["#tech"],
    tier: "Kinetic Transmission",
    rarity: "common",
    description: "Oversized wooden gear. Crucial for gearing up shaft rotations to double or quadruple rotational RPM.",
    craftType: "Crafting Table (3x3)",
    outputCount: 1,
    grid: ["minecraft:oak_planks", "minecraft:oak_planks", "minecraft:oak_planks", "minecraft:oak_planks", "create:cogwheel", "minecraft:oak_planks", "minecraft:oak_planks", "minecraft:oak_planks", "minecraft:oak_planks"],
    uses: [
      "Meshes with small cogwheels to double rotational speed.",
      "Connects perpendicularly at right angles to shift rotation axes.",
      "Mounts directly onto Water Wheels and Windmills."
    ]
  },
  {
    id: "create:shaft",
    name: "Shaft",
    mod: "Create",
    modId: "create",
    iconFile: "create_shaft.png",
    category: "tech",
    tags: ["#tech"],
    tier: "Rotational Axle",
    rarity: "common",
    description: "Slender axle crafted from Andesite Alloy. Transmits rotational force linearly across any distance without energy loss.",
    craftType: "Crafting Table (3x3)",
    outputCount: 8,
    grid: [null, "create:andesite_alloy", null, null, "create:andesite_alloy", null, null, null, null],
    uses: [
      "Linear transmission of kinetic energy across lines.",
      "Connects pulleys, gearboxes, and machinery to power sources.",
      "Can be encased with Andesite or Brass for aesthetic conduits."
    ]
  },
  {
    id: "create:gearbox",
    name: "Gearbox",
    mod: "Create",
    modId: "create",
    iconFile: "create_gearbox.png",
    category: "tech",
    tags: ["#tech"],
    tier: "Directional Transmission",
    rarity: "common",
    description: "Encased gear cluster that splits or re-routes rotational force across 4 perpendicular outputs.",
    craftType: "Crafting Table (3x3)",
    outputCount: 1,
    grid: [null, "create:cogwheel", null, "create:cogwheel", "create:andesite_casing", "create:cogwheel", null, "create:cogwheel", null],
    uses: [
      "Redirects rotation at 90-degree angles in all four directions.",
      "Can be placed vertically to change vertical to horizontal axes.",
      "Keeps complex kinetic wireframes clean and compact."
    ]
  },
  {
    id: "create:blaze_burner",
    name: "Blaze Burner",
    mod: "Create",
    modId: "create",
    iconFile: "create_blaze_burner_flame.png",
    category: "tech",
    tags: ["#tech"],
    tier: "High-Heat Crucible",
    rarity: "rare",
    description: "Caged Nether Blaze providing controlled industrial heating for mixing basins, fluid distillation, and steam boilers.",
    craftType: "Right-click Empty Blaze Burner on Nether Blaze",
    outputCount: 1,
    grid: [null, "minecraft:iron_ingot", null, "minecraft:iron_ingot", "minecraft:blaze_rod", "minecraft:iron_ingot", null, "minecraft:iron_ingot", null],
    uses: [
      "Fuels with Coal or Lava to provide standard yellow flame heat.",
      "Feeds on Blaze Cakes to reach blue superheated flame (9x power).",
      "Essential heat source for multi-boiler Steam Engines and brass alloys."
    ]
  },
  {
    id: "create:electron_tube",
    name: "Electron Tube",
    mod: "Create",
    modId: "create",
    iconFile: "create_electron_tube.png",
    category: "material",
    tags: ["#material", "#tech"],
    tier: "Precision Electronic",
    rarity: "rare",
    description: "Vacuum diode tube assembled from polished Rose Quartz and redstone. Forms the electrical brain of advanced Create devices.",
    craftType: "Deployer Assembly / Manual Crafting",
    outputCount: 1,
    grid: [null, "create:polished_rose_quartz", null, null, "minecraft:redstone", null, null, "minecraft:iron_nugget", null],
    uses: [
      "Core component for Brass Funnels, Smart Chutes, and Display Links.",
      "Enables Rotation Speed Controllers and Mechanical Arms.",
      "Advanced logic processing for automated item networks."
    ]
  },
  {
    id: "create:polished_rose_quartz",
    name: "Polished Rose Quartz",
    mod: "Create",
    modId: "create",
    iconFile: "create_polished_rose_quartz.png",
    category: "material",
    tags: ["#material", "#tech"],
    tier: "Precision Crystal",
    rarity: "uncommon",
    description: "Rose Quartz crystal meticulously smoothed using Sandpaper or a mechanical Deployer. Displays piezoelectric luminescence.",
    craftType: "Right-click with Sandpaper in Offhand",
    outputCount: 1,
    grid: [null, null, null, null, "create:rose_quartz", null, null, null, null],
    uses: [
      "Essential component for assembling Electron Tubes.",
      "Used in crafting Sequenced Gearshifts and Nixie Tubes.",
      "High-clarity optical and sensory component."
    ]
  },
  {
    id: "create:rose_quartz",
    name: "Rose Quartz",
    mod: "Create",
    modId: "create",
    iconFile: "create_rose_quartz.png",
    category: "material",
    tags: ["#material"],
    tier: "Crystal Substrate",
    rarity: "common",
    description: "Composite crystal synthesized by infusing pure quartz crystals with concentrated redstone dust.",
    craftType: "Crafting Table (3x3)",
    outputCount: 1,
    grid: ["minecraft:redstone", "minecraft:redstone", "minecraft:redstone", "minecraft:redstone", "minecraft:quartz", "minecraft:redstone", "minecraft:redstone", "minecraft:redstone", "minecraft:redstone"],
    uses: [
      "Polished with sandpaper to create Polished Rose Quartz.",
      "Can be mass-produced with mechanical mixers and spouts.",
      "Decorative crystalline building block."
    ]
  },
  {
    id: "create:propeller",
    name: "Propeller",
    mod: "Create",
    modId: "create",
    iconFile: "create_propeller.png",
    category: "tech",
    tags: ["#tech"],
    tier: "Aerodynamic Rotor",
    rarity: "common",
    description: "Four-bladed iron propeller. When spun rapidly inside an Encased Fan, it generates powerful air currents for washing, smelting, and smoking.",
    craftType: "Crafting Table (3x3)",
    outputCount: 1,
    grid: [null, "minecraft:iron_ingot", null, "minecraft:iron_ingot", "create:andesite_alloy", "minecraft:iron_ingot", null, "minecraft:iron_ingot", null],
    uses: [
      "Core component for crafting the Encased Fan.",
      "Generates bulk processing airstreams across water, lava, and fire.",
      "Can push or pull entities through pneumatic air shafts."
    ]
  },
  {
    id: "create:belt_connector",
    name: "Belt Connector",
    mod: "Create",
    modId: "create",
    iconFile: "create_belt_connector.png",
    category: "tech",
    tags: ["#tech"],
    tier: "Conveyor System",
    rarity: "common",
    description: "Flexible rubberized conveyor belt spanning between two shafts. Transports items, mobs, and players smoothly across horizontal and diagonal gradients.",
    craftType: "Crafting Table (3x3)",
    outputCount: 1,
    grid: [null, null, null, "minecraft:dried_kelp", "minecraft:dried_kelp", "minecraft:dried_kelp", "minecraft:dried_kelp", "minecraft:dried_kelp", "minecraft:dried_kelp"],
    uses: [
      "Right-click two shafts up to 20 blocks apart to link them with a belt.",
      "Supports item transport, washing, smoking, and depot transitions.",
      "Synchronizes rotational speed between distant shafts."
    ]
  },
  {
    id: "create:rotation_speed_controller",
    name: "Rotation Speed Controller",
    mod: "Create",
    modId: "create",
    iconFile: "create_rotation_speed_controller.png",
    category: "tech",
    tags: ["#tech"],
    tier: "Precision Kinetics",
    rarity: "epic",
    description: "Master kinetic regulator. Allows exact variable speed selection (from 1 to 256 RPM) without cumbersome mechanical gear-ratio towers.",
    craftType: "Crafting Table (3x3)",
    outputCount: 1,
    grid: [null, "create:electron_tube", null, null, "create:brass_casing", null, null, "create:large_cogwheel", null],
    uses: [
      "Place a Large Cogwheel above it to engage variable output speed.",
      "Scroll on the controller interface to set exact desired RPM.",
      "Maintains constant optimal processing speed on automated lines."
    ]
  },
  {
    id: "create:copper_diving_helmet",
    name: "Copper Diving Helmet",
    mod: "Create",
    modId: "create",
    iconFile: "create_copper_diving_helmet.png",
    category: "armor",
    tags: ["#armor", "#tech"],
    tier: "Deep Sea Pressure Gear",
    rarity: "rare",
    description: "Heavy brass-and-copper diving dome. Connects directly to a Copper Backtank to provide hours of pressurized oxygen underwater or in volcanic smoke.",
    craftType: "Crafting Table (3x3)",
    outputCount: 1,
    grid: ["minecraft:copper_ingot", "minecraft:copper_ingot", "minecraft:copper_ingot", "minecraft:copper_ingot", "minecraft:glass_pane", "minecraft:copper_ingot", null, null, null],
    uses: [
      "Grants clear underwater vision and prevents drowning.",
      "Draws air supply automatically from an equipped Copper Backtank.",
      "Protects the wearer from toxic volcanic gas and steam hazards."
    ]
  },
  {
    id: "create:copper_backtank",
    name: "Copper Backtank",
    mod: "Create",
    modId: "create",
    iconFile: "create_copper_backtank.png",
    category: "armor",
    tags: ["#armor", "#tech"],
    tier: "Pressurized Pneumatic Armor",
    rarity: "rare",
    description: "Wearable pneumatic air reservoir. Can be placed down and pressurized with kinetic shafts to hold up to 15 minutes of breathable air.",
    craftType: "Crafting Table (3x3)",
    outputCount: 1,
    grid: [null, "create:shaft", null, "minecraft:copper_ingot", "create:copper_casing", "minecraft:copper_ingot", null, "minecraft:copper_ingot", null],
    uses: [
      "Pressurize by placing on a spinning kinetic shaft.",
      "Stores 900+ seconds of pressurized oxygen for the Diving Helmet.",
      "Provides +6 Armor and knockback dampening."
    ]
  },
  {
    id: "create:copper_diving_boots",
    name: "Copper Diving Boots",
    mod: "Create",
    modId: "create",
    iconFile: "create_copper_diving_boots.png",
    category: "armor",
    tags: ["#armor", "#tech"],
    tier: "Weighted Marine Boots",
    rarity: "uncommon",
    description: "Weighted copper boots that anchor the wearer firmly to the seabed, allowing normal walking and sprinting speeds underwater.",
    craftType: "Crafting Table (3x3)",
    outputCount: 1,
    grid: [null, null, null, "minecraft:copper_ingot", null, "minecraft:copper_ingot", "minecraft:copper_ingot", null, "minecraft:copper_ingot"],
    uses: [
      "Allows normal walking and jumping on ocean floors.",
      "Prevents ocean currents and whirlpools from dragging the player.",
      "Immunity to magma bubble drag."
    ]
  },
  {
    id: "create:potato_cannon",
    name: "Potato Cannon",
    mod: "Create",
    modId: "create",
    iconFile: "create_potato_cannon.png",
    category: "weapon",
    tags: ["#weapon", "#tech"],
    tier: "Pneumatic Ordnance",
    rarity: "rare",
    description: "High-velocity pneumatic launcher that shoots various agricultural crops as deadly projectiles, each with unique tactical effects.",
    craftType: "Crafting Table (3x3)",
    outputCount: 1,
    grid: ["create:andesite_alloy", "create:andesite_alloy", null, "create:copper_casing", "minecraft:iron_ingot", null, null, null, "minecraft:iron_ingot"],
    uses: [
      "Potatoes deal heavy concussive projectile damage.",
      "Baked potatoes ignite enemies; Poison potatoes inflict venom.",
      "Carrots pierce targets; Golden carrots deal explosive damage."
    ]
  },
  {
    id: "create:extendo_grip",
    name: "Extendo-Grip",
    mod: "Create",
    modId: "create",
    iconFile: "create_extendo_grip.png",
    category: "tool",
    tags: ["#tool", "#tech"],
    tier: "Reach Expansion Rig",
    rarity: "rare",
    description: "Brass scissor-mechanism prosthetic grip that extends block placement, mining, and melee attack reach by up to 4 additional blocks.",
    craftType: "Crafting Table (3x3)",
    outputCount: 1,
    grid: [null, "create:brass_hand", null, null, "create:brass_ingot", null, "minecraft:stick", null, null],
    uses: [
      "+4 Block Placement Reach and +3 Melee Attack Reach.",
      "Equips in off-hand or curio slot for passive reach benefits.",
      "Dramatically accelerates massive construction and excavation builds."
    ]
  },
  {
    id: "create:filter",
    name: "Filter",
    mod: "Create",
    modId: "create",
    iconFile: "create_filter.png",
    category: "utility",
    tags: ["#utility", "#tech"],
    tier: "Logistical Filter",
    rarity: "common",
    description: "Basic whitelist/blacklist configuration card used in Brass Funnels, Tunnels, and Smart Chutes to sort items.",
    craftType: "Crafting Table (3x3)",
    outputCount: 1,
    grid: [null, "minecraft:string", null, "minecraft:string", "minecraft:iron_nugget", "minecraft:string", null, "minecraft:string", null],
    uses: [
      "Stores up to 18 whitelisted or blacklisted items.",
      "Slots directly into Brass Funnels and Tunnels.",
      "Prevents conveyor jams and sorts mixed mineral streams."
    ]
  },
  {
    id: "create:attribute_filter",
    name: "Attribute Filter",
    mod: "Create",
    modId: "create",
    iconFile: "create_attribute_filter.png",
    category: "utility",
    tags: ["#utility", "#tech"],
    tier: "Advanced Tag Filter",
    rarity: "rare",
    description: "Smart algorithmic filter card. Sorts items based on tags, enchantments, mod origin, durability, or culinary nutritional value.",
    craftType: "Crafting Table (3x3)",
    outputCount: 1,
    grid: [null, "minecraft:string", null, "minecraft:string", "create:brass_ingot", "minecraft:string", null, "minecraft:string", null],
    uses: [
      "Filters items by forge tags (e.g. #forge:ores, #forge:ingots).",
      "Sorts armor/weapons by enchanted status or durability.",
      "Categorizes items by mod namespace (e.g. @cataclysm, @aether)."
    ]
  },
  {
    id: "create:schematicannon",
    name: "Schematicannon",
    mod: "Create",
    modId: "create",
    iconFile: "create_schematicannon.png",
    category: "tech",
    tags: ["#tech", "#utility"],
    tier: "Automated Blueprint Builder",
    rarity: "epic",
    description: "Automated pneumatic cannon that reads saved building Schematics and rapidly shoots blocks into place from adjacent material chests.",
    craftType: "Crafting Table (3x3)",
    outputCount: 1,
    grid: [null, "minecraft:iron_ingot", null, null, "minecraft:dispenser", null, "minecraft:smooth_stone", "minecraft:smooth_stone", "minecraft:smooth_stone"],
    uses: [
      "Constructs massive buildings from saved blueprint files automatically.",
      "Fuels with gunpowder and pulls required blocks from nearby chests.",
      "Skipping air and replacing missing blocks with high precision."
    ]
  },
  {
    id: "create:schematic",
    name: "Schematic",
    mod: "Create",
    modId: "create",
    iconFile: "create_schematic.png",
    category: "utility",
    tags: ["#utility", "#tech"],
    tier: "Blueprint Storage",
    rarity: "common",
    description: "Parchment storage scroll holding 3D spatial voxel blueprints of structures. Can be loaded directly into a Schematicannon.",
    craftType: "Crafting Table (3x3)",
    outputCount: 1,
    grid: [null, "minecraft:paper", null, "minecraft:paper", "minecraft:feather", "minecraft:paper", null, "minecraft:paper", null],
    uses: [
      "Saves selected structures for relocation or multi-world export.",
      "Loaded into the Schematic Table to preview hologram outlines.",
      "Fed into the Schematicannon for automated construction."
    ]
  }
];
