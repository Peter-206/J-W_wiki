module.exports = [
  {
    id: "irons_spellbooks:diamond_spellbook",
    name: "Diamond Spellbook",
    mod: "Iron's Spells 'n Spellbooks",
    modId: "irons_spellbooks",
    iconFile: "irons_spellbooks_diamond_spellbook.png",
    category: "magic",
    tags: ["#magic"],
    tier: "Tier 4 Arcane Grimoire",
    rarity: "epic",
    description: "Ornate leather and diamond tome capable of binding up to 10 high-tier magical spells. Significantly amplifies maximum mana reserves and spell power.",
    craftType: "Crafting Table (3x3)",
    outputCount: 1,
    grid: ["minecraft:diamond", "irons_spellbooks:arcane_essence", "minecraft:diamond", "irons_spellbooks:arcane_essence", "minecraft:book", "irons_spellbooks:arcane_essence", "minecraft:diamond", "irons_spellbooks:arcane_essence", "minecraft:diamond"],
    uses: [
      "Holds up to 10 inscribed spell scrolls.",
      "+250 Max Mana and +15% Spell Power amplification.",
      "Quick-cast radial menu allows rapid combat spell rotation."
    ],
    spotlight: true
  },
  {
    id: "irons_spellbooks:scroll_forge",
    name: "Scroll Forge",
    mod: "Iron's Spells 'n Spellbooks",
    modId: "irons_spellbooks",
    iconFile: "irons_spellbooks_scroll_forge.png",
    category: "magic",
    tags: ["#magic", "#tech"],
    tier: "Arcane Inscribing Bench",
    rarity: "rare",
    description: "Mystical worktable used to scribe raw magical spells into physical scrolls using ink, blank scrolls, and magical catalysts.",
    craftType: "Crafting Table (3x3)",
    outputCount: 1,
    grid: [null, "minecraft:book", null, "minecraft:iron_ingot", "irons_spellbooks:arcane_essence", "minecraft:iron_ingot", "minecraft:smooth_stone", "minecraft:smooth_stone", "minecraft:smooth_stone"],
    uses: [
      "Transcribes spells into parchment scrolls.",
      "Requires Arcane Essence, ink, and blank scrolls.",
      "Key progression station for advancing wizardry tiers."
    ]
  },
  {
    id: "irons_spellbooks:blood_staff",
    name: "Blood Staff",
    mod: "Iron's Spells 'n Spellbooks",
    modId: "irons_spellbooks",
    iconFile: "irons_spellbooks_blood_staff.png",
    category: "magic",
    tags: ["#magic", "#weapon"],
    tier: "Blood Magic Focus",
    rarity: "rare",
    description: "Sinister bloodwood staff tipped with a crimson crystal. Dramatically increases Blood school spell damage and converts spent health directly into necrotic burst power.",
    craftType: "Crafting Table (3x3)",
    outputCount: 1,
    grid: [null, null, "irons_spellbooks:arcane_essence", null, "minecraft:blaze_rod", null, "minecraft:stick", null, null],
    uses: [
      "+25% Blood Spell Power amplification.",
      "Accelerates cooldowns on Blood Slash, Heartstop, and Ray of Siphoning.",
      "Siphons life force from fallen targets to restore caster HP."
    ]
  },
  {
    id: "irons_spellbooks:arcane_essence",
    name: "Arcane Essence",
    mod: "Iron's Spells 'n Spellbooks",
    modId: "irons_spellbooks",
    iconFile: "irons_spellbooks_arcane_essence.png",
    category: "material",
    tags: ["#material", "#magic"],
    tier: "Fundamental Magical Reagent",
    rarity: "common",
    description: "Crystallized magical residue harvested from Arcane Debris in ancient Catacombs and Wizard Towers. The fundamental catalyst for all spellcrafting.",
    craftType: "Catacomb Excavation / Mob Drops",
    outputCount: 1,
    grid: [null, "minecraft:lapis_lazuli", null, "minecraft:redstone", "minecraft:amethyst_shard", "minecraft:redstone", null, "minecraft:lapis_lazuli", null],
    uses: [
      "Primary ingredient for upgrading Spellbooks.",
      "Used in the Scroll Forge to inscribe spells.",
      "Synthesizes Arcane Salvage and Mage Armor fabric."
    ]
  },
  {
    id: "irons_spellbooks:scroll",
    name: "Blank Spell Scroll",
    mod: "Iron's Spells 'n Spellbooks",
    modId: "irons_spellbooks",
    iconFile: "irons_spellbooks_scroll.png",
    category: "material",
    tags: ["#material", "#magic"],
    tier: "Arcane Parchment",
    rarity: "common",
    description: "Infused parchment treated with Arcane Essence. Receptive to magical runes inscribed within a Scroll Forge.",
    craftType: "Crafting Table (3x3)",
    outputCount: 3,
    grid: [null, "minecraft:paper", null, "minecraft:paper", "irons_spellbooks:arcane_essence", "minecraft:paper", null, "minecraft:paper", null],
    uses: [
      "Substrate for inscribing fire, ice, blood, lightning, and holy spells.",
      "Can be bound permanently into equipped Spellbooks.",
      "Can be consumed directly from the hotbar for single-cast magic."
    ]
  }
];
