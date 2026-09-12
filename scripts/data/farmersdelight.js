module.exports = [
  {
    id: "farmersdelight:cooking_pot",
    name: "Cooking Pot",
    mod: "Farmer's Delight",
    modId: "farmersdelight",
    iconFile: "farmersdelight_cooking_pot.png",
    category: "food",
    tags: ["#food", "#tech"],
    tier: "Culinary Station",
    rarity: "common",
    description: "Cast-iron pot placed above a heat source (like a Stove, Campfire, or Blaze Burner). Simmers ingredients into gourmet stews, pasta, and feasts.",
    craftType: "Crafting Table (3x3)",
    outputCount: 1,
    grid: ["minecraft:iron_ingot", "minecraft:brick", "minecraft:iron_ingot", "minecraft:iron_ingot", "minecraft:water_bucket", "minecraft:iron_ingot", "minecraft:iron_ingot", "minecraft:iron_ingot", "minecraft:iron_ingot"],
    uses: [
      "Simmers up to 6 ingredients into plated meals and stews.",
      "Requires a heat source directly beneath the pot.",
      "Supports automated input and output with hoppers and pipes."
    ],
    spotlight: true
  },
  {
    id: "farmersdelight:cutting_board",
    name: "Cutting Board",
    mod: "Farmer's Delight",
    modId: "farmersdelight",
    iconFile: "farmersdelight_cutting_board.png",
    category: "food",
    tags: ["#food", "#utility"],
    tier: "Culinary Prep Bench",
    rarity: "common",
    description: "Wooden food preparation board. Place items on top and slice with any Knife to yield chopped vegetables, meat cuts, fish fillets, and canvas strips.",
    craftType: "Crafting Table (2x2)",
    outputCount: 1,
    grid: [null, null, null, "minecraft:stick", "minecraft:oak_planks", null, null, null, null],
    uses: [
      "Slices raw meats into chops, bacon, and minced beef.",
      "Portions cakes, pies, and melon blocks into individual servings.",
      "Strips tree bark and cuts wool into canvas thread."
    ]
  },
  {
    id: "farmersdelight:stove",
    name: "Stove",
    mod: "Farmer's Delight",
    modId: "farmersdelight",
    iconFile: "farmersdelight_stove_front.png",
    category: "food",
    tags: ["#food", "#tech"],
    tier: "Culinary Hearth",
    rarity: "common",
    description: "Brick stove that cooks up to 6 items simultaneously on its stovetop without requiring fuel after ignition. Serves as a heat source for Cooking Pots.",
    craftType: "Crafting Table (3x3)",
    outputCount: 1,
    grid: ["minecraft:brick", "minecraft:iron_ingot", "minecraft:brick", "minecraft:brick", null, "minecraft:brick", "minecraft:brick", "minecraft:campfire", "minecraft:brick"],
    uses: [
      "Cooks up to 6 items at once on its flat cast-iron top.",
      "Permanent heat source for Cooking Pots placed above.",
      "Can be extinguished with a shovel and reignited with flint & steel."
    ]
  },
  {
    id: "farmersdelight:diamond_knife",
    name: "Diamond Knife",
    mod: "Farmer's Delight",
    modId: "farmersdelight",
    iconFile: "farmersdelight_diamond_knife.png",
    category: "tool",
    tags: ["#tool", "#food", "#weapon"],
    tier: "Precision Diamond Blade",
    rarity: "rare",
    description: "Razor-sharp culinary and hunting knife. Slices food on Cutting Boards and guarantees straw and animal cuts when harvesting wild plants and mobs.",
    craftType: "Crafting Table (2x2)",
    outputCount: 1,
    grid: [null, null, null, "minecraft:diamond", null, null, "minecraft:stick", null, null],
    uses: [
      "Guarantees straw drops when breaking grass and wheat.",
      "Slices mobs to harvest leather, ham, and poultry secondary cuts.",
      "Fast 3.0 attack speed with light sweeping cuts."
    ]
  },
  {
    id: "farmersdelight:netherite_knife",
    name: "Netherite Knife",
    mod: "Farmer's Delight",
    modId: "farmersdelight",
    iconFile: "farmersdelight_netherite_knife.png",
    category: "tool",
    tags: ["#tool", "#food", "#weapon"],
    tier: "Pinnacle Chef Knife",
    rarity: "epic",
    description: "The ultimate chef's knife forged with Netherite. Unrivaled cutting durability, high attack speed, and immune to lava.",
    craftType: "Smithing Table (Diamond Knife + Netherite)",
    outputCount: 1,
    grid: [null, null, null, "farmersdelight:diamond_knife", "minecraft:netherite_ingot", null, null, null, null],
    uses: [
      "Near-infinite durability for massive automated butcher setups.",
      "Highest looting multipliers on animal meats and canvas fibers.",
      "Does not burn in lava or fire."
    ]
  },
  {
    id: "farmersdelight:rich_soil",
    name: "Rich Soil",
    mod: "Farmer's Delight",
    modId: "farmersdelight",
    iconFile: "farmersdelight_rich_soil.png",
    category: "utility",
    tags: ["#utility", "#food"],
    tier: "Supercharged Farmland",
    rarity: "uncommon",
    description: "Nutrient-dense organic soil produced by decomposing organic compost. Accelerates crop growth rates and eliminates the need for adjacent water sources.",
    craftType: "Organic Compost Decomposition",
    outputCount: 1,
    grid: [null, "minecraft:bone_meal", null, "minecraft:dirt", "minecraft:rotten_flesh", "minecraft:dirt", null, "minecraft:dirt", null],
    uses: [
      "Tilled into Rich Farmland that never tramples and needs no water.",
      "Accelerates crop growth speed by up to 200%.",
      "Permits wild mushrooms and crops to grow in bright sunlight."
    ]
  },
  {
    id: "farmersdelight:canvas",
    name: "Canvas",
    mod: "Farmer's Delight",
    modId: "farmersdelight",
    iconFile: "farmersdelight_canvas.png",
    category: "material",
    tags: ["#material"],
    tier: "Heavy Textile",
    rarity: "common",
    description: "Durable woven fabric made from straw and plant fibers. Used to make carpets, canvas signs, safety nets, and backpacks.",
    craftType: "Crafting Table (2x2)",
    outputCount: 1,
    grid: [null, null, null, "minecraft:string", "minecraft:wheat", null, "minecraft:wheat", "minecraft:string", null],
    uses: [
      "Crafts Safety Nets, Canvas Rugs, and Canvas Signs.",
      "Essential component for early cloth armor and backpacks.",
      "Can be dyed in all 16 colors."
    ]
  },
  {
    id: "farmersdelight:rope",
    name: "Rope",
    mod: "Farmer's Delight",
    modId: "farmersdelight",
    iconFile: "farmersdelight_rope.png",
    category: "utility",
    tags: ["#utility"],
    tier: "Spelunking Tackle",
    rarity: "common",
    description: "Braided utility cord. Automatically extends downwards when placed from the top of a cliff or chasm, creating a climbable ascent line.",
    craftType: "Crafting Table (3x3)",
    outputCount: 3,
    grid: [null, "minecraft:string", null, null, "minecraft:string", null, null, "minecraft:string", null],
    uses: [
      "Right-click the top of a cliff to unroll rope all the way to the bottom.",
      "Climb up and down safely without placing ladders.",
      "Can be retracted from the top."
    ]
  },
  {
    id: "farmersdelight:roast_chicken",
    name: "Roast Chicken",
    mod: "Farmer's Delight",
    modId: "farmersdelight",
    iconFile: "farmersdelight_roast_chicken.png",
    category: "food",
    tags: ["#food"],
    tier: "Master Feast",
    rarity: "rare",
    description: "Magnificent whole roasted chicken served on a platter with roasted potatoes and sweet carrots. Provides the Nourishment buff.",
    craftType: "Cooking Pot (Whole Chicken + Veggies)",
    outputCount: 1,
    grid: ["minecraft:carrot", "minecraft:baked_potato", "minecraft:carrot", null, "minecraft:cooked_chicken", null, null, "minecraft:bowl", null],
    uses: [
      "Can be placed as a multi-serving feast block (4 servings).",
      "Grants Nourishment status effect, preventing hunger depletion.",
      "Heals 14 Hunger and gives massive saturation."
    ]
  },
  {
    id: "farmersdelight:shepherds_pie",
    name: "Shepherd's Pie",
    mod: "Farmer's Delight",
    modId: "farmersdelight",
    iconFile: "farmersdelight_shepherds_pie.png",
    category: "food",
    tags: ["#food"],
    tier: "Master Feast",
    rarity: "rare",
    description: "Savory baked casserole layered with seasoned minced mutton, garden peas, and rich mashed potatoes browned to perfection.",
    craftType: "Cooking Pot (Mutton + Potato + Milk)",
    outputCount: 1,
    grid: ["minecraft:cooked_mutton", "minecraft:baked_potato", "minecraft:cooked_mutton", null, "minecraft:milk_bucket", null, null, "minecraft:bowl", null],
    uses: [
      "Restores 14 Hunger and grants Nourishment for 5 minutes.",
      "Placable feast block serving up to 4 portions.",
      "Ideal team sustenance for boss expeditions."
    ]
  },
  {
    id: "farmersdelight:stuffed_pumpkin",
    name: "Stuffed Pumpkin",
    mod: "Farmer's Delight",
    modId: "farmersdelight",
    iconFile: "farmersdelight_stuffed_pumpkin.png",
    category: "food",
    tags: ["#food"],
    tier: "Master Feast",
    rarity: "rare",
    description: "Whole roasted pumpkin filled with spiced rice, sweet berries, diced pork, and brown mushrooms.",
    craftType: "Cooking Pot (Pumpkin + Pork + Rice)",
    outputCount: 1,
    grid: ["minecraft:cooked_porkchop", "farmersdelight:rice", "minecraft:cooked_porkchop", null, "minecraft:pumpkin", null, null, "minecraft:bowl", null],
    uses: [
      "Serves 4 hearty bowls of stuffed pumpkin.",
      "Grants long-duration Nourishment and health regeneration.",
      "Festive decorative feast block."
    ]
  },
  {
    id: "farmersdelight:hamburger",
    name: "Hamburger",
    mod: "Farmer's Delight",
    modId: "farmersdelight",
    iconFile: "farmersdelight_hamburger.png",
    category: "food",
    tags: ["#food"],
    tier: "Handheld Gourmet",
    rarity: "uncommon",
    description: "Classic sandwich piled high with a thick seared beef patty, crisp cabbage leaf, tomato slice, and onion rings between toasted buns.",
    craftType: "Crafting Table (3x3)",
    outputCount: 1,
    grid: [null, "minecraft:bread", null, "farmersdelight:tomato", "minecraft:cooked_beef", "farmersdelight:cabbage", null, "minecraft:bread", null],
    uses: [
      "Restores 11 Hunger and 13 Saturation points.",
      "Quick to eat on the go during frantic combat.",
      "High-efficiency everyday staple food."
    ]
  },
  {
    id: "farmersdelight:dumplings",
    name: "Dumplings",
    mod: "Farmer's Delight",
    modId: "farmersdelight",
    iconFile: "farmersdelight_dumplings.png",
    category: "food",
    tags: ["#food"],
    tier: "Steamed Dim Sum",
    rarity: "common",
    description: "Delicate steamed dough parcels stuffed with seasoned minced meat and finely diced cabbage.",
    craftType: "Cooking Pot (Dough + Meat + Cabbage)",
    outputCount: 2,
    grid: [null, "farmersdelight:cabbage", null, null, "minecraft:cooked_porkchop", null, null, "minecraft:bread", null],
    uses: [
      "Restores 7 Hunger with exceptional Saturation.",
      "Stacks up to 64 for compact adventure provisions.",
      "Quick eating animation time."
    ]
  },
  {
    id: "farmersdelight:sweet_berry_cheesecake",
    name: "Sweet Berry Cheesecake",
    mod: "Farmer's Delight",
    modId: "farmersdelight",
    iconFile: "farmersdelight_sweet_berry_cheesecake.png",
    category: "food",
    tags: ["#food"],
    tier: "Gourmet Dessert",
    rarity: "rare",
    description: "Rich and creamy baked cheesecake glazed with sweet berry compote. Placeable cake block providing 4 generous slices.",
    craftType: "Crafting Table (3x3)",
    outputCount: 1,
    grid: ["minecraft:sweet_berries", "minecraft:sugar", "minecraft:sweet_berries", "minecraft:milk_bucket", "minecraft:egg", "minecraft:milk_bucket", "minecraft:wheat", "minecraft:wheat", "minecraft:wheat"],
    uses: [
      "Placable dessert block providing 4 slices.",
      "Each slice restores 3 hunger and grants Speed I for 30 seconds.",
      "Adds festive aesthetic charm to dining tables."
    ]
  },
  {
    id: "farmersdelight:hot_cocoa",
    name: "Hot Cocoa",
    mod: "Farmer's Delight",
    modId: "farmersdelight",
    iconFile: "farmersdelight_hot_cocoa.png",
    category: "food",
    tags: ["#food"],
    tier: "Soothing Drink",
    rarity: "common",
    description: "Steaming mug of rich chocolate milk topped with sweet froth. Cures negative effects and warms the soul in cold biomes.",
    craftType: "Cooking Pot (Milk + Cocoa Beans + Sugar)",
    outputCount: 1,
    grid: [null, "minecraft:cocoa_beans", null, null, "minecraft:milk_bucket", null, null, "minecraft:glass_bottle", null],
    uses: [
      "Clears 1 negative status effect without removing positive buffs.",
      "Grants Warmth and resistance against freezing in snowy biomes.",
      "Returns an empty glass bottle upon consumption."
    ]
  }
];
