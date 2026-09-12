// Source-backed summaries. Pack installation and version compatibility are not established.
window.WIKI_ARTICLES = [
  {id:'recipes', title:'Finding recipes with JEI', category:'Getting started', summary:'Look up how to make an item and what it is used for.', sections:[
    ['Recipes and uses','With JEI installed, hover over an item and press R to see recipes, or U to see recipes that use it. These are default bindings; check Options → Controls if they have been changed.'],
    ['Narrow your search','Type @ followed by a mod name to filter JEI by mod. Combine it with an item term, such as shaft @create. Ctrl + O toggles the item overlay.'],
    ['Check your running pack','Use the recipe viewer in the world you are playing. This website has no export of the pack’s recipes, so the texture catalog does not display crafting grids.']
  ], sources:[['JEI — author’s controls guide','https://www.curseforge.com/minecraft/mc-mods/jei']], related:['create','netherite','controls']},
  {id:'netherite', title:'Netherite upgrades in Java 1.20', category:'Equipment', summary:'The smithing template is part of the upgrade.', sections:[
    ['Three inputs','Upgrading diamond equipment to netherite requires a Netherite Upgrade Smithing Template, the diamond equipment, and a netherite ingot at a smithing table. The earlier guide omitted the template.'],
    ['Pack-specific recipes','This is the vanilla upgrade system introduced for 1.20. Confirm the recipe in your running modpack before gathering materials.']
  ],sources:[['Mojang — Netherite upgrade change','https://feedback.minecraft.net/hc/en-us/articles/12514780107661-Minecraft-Java-Edition-Snapshot-23w04a']],related:['recipes']},
  {id:'create',title:'Create: learning your machines',category:'Systems',summary:'Use Ponder to understand how components work together.',sections:[
    ['Building and automation','Create adds tools and blocks for building, decoration, and automation. Its contraptions combine moving components.'],
    ['Learn in the game','Create’s Ponder system provides visual explanations of its mechanics and gadgets. Use it alongside JEI when planning a machine. Check the installed version before following a build intended for another release.']
  ],sources:[['Create — project documentation','https://www.curseforge.com/minecraft/mc-mods/create']],related:['recipes','storage']},
  {id:'aether',title:'Entering the Aether',category:'Dimensions',summary:'A glowstone frame activated with water leads to the sky dimension.',sections:[
    ['The portal','The Aether’s project guide describes building a glowstone portal frame and using a water bucket in the middle to activate it.'],
    ['Exploration','The mod adds a sky dimension with its own survival progression and dungeons. Check your installed release and any pack changes before relying on a particular loot table or equipment effect.']
  ],sources:[['The Aether — getting started','https://www.curseforge.com/minecraft/mc-mods/aether']],related:['dimensions','recipes']},
  {id:'dimensions',title:'Deeper and Darker: the Otherside',category:'Dimensions',summary:'The Otherside is the dimension added by Deeper and Darker.',sections:[
    ['What the mod adds','Deeper and Darker expands the Deep Dark and adds the Otherside dimension. The project describes using the Warden’s heart to enter.'],
    ['Before a trip','Confirm the entry procedure for your installed release. The previous guide’s claims about Warden Armor granting a Sonic Boom attack and preventing all darkness have been removed because they were not substantiated.']
  ],sources:[['Deeper and Darker — project guide','https://www.curseforge.com/minecraft/mc-mods/deeperdarker']],related:['aether','bosses']},
  {id:'bosses',title:'Cataclysm: dungeons and bosses',category:'Bosses & creatures',summary:'A starting point for checking encounters in your version.',sections:[
    ['Overview','L_Ender’s Cataclysm adds dungeons, boss encounters, and powerful items.'],
    ['Encounter details','No pack version or loot export is available here. Boss health, summoning requirements, drops, and item abilities are therefore not listed as confirmed facts. Follow the project’s documentation for your installed release and verify recipe ingredients in game.']
  ],sources:[['L_Ender’s Cataclysm — author’s project page','https://www.curseforge.com/minecraft/mc-mods/lendercataclysm']],related:['dragons','recipes']},
  {id:'dragons',title:'Ice and Fire: dragons and creatures',category:'Bosses & creatures',summary:'Find the mod’s documentation before planning an encounter.',sections:[
    ['Overview','Ice and Fire adds dragons and other mythical creatures. The author’s page links to its wiki for detailed creature information.'],
    ['Version matters','Use documentation for the installed release when checking dragon growth, eggs, equipment, and forge recipes. This guide does not claim a particular Ice and Fire version is installed.']
  ],sources:[['Ice and Fire — project and wiki links','https://www.curseforge.com/minecraft/mc-mods/ice-and-fire-dragons']],related:['animals','bosses']},
  {id:'animals',title:'Alex’s Mobs: the Animal Dictionary',category:'Bosses & creatures',summary:'An in-game reference for creatures and their drops.',sections:[
    ['Read the dictionary','The Animal Dictionary documents the creatures added by Alex’s Mobs and explains uses for mobs and their drops. Consult it for the version you are playing.']
  ],sources:[['Alex’s Mobs — Animal Dictionary documentation','https://www.curseforge.com/minecraft/mc-mods/alexs-mobs']],related:['dragons','recipes']},
  {id:'food',title:'Farmer’s Delight: getting started',category:'Systems',summary:'Follow the advancements to learn farming and cooking.',sections:[
    ['Farming and cooking','Farmer’s Delight expands farming and cooking with meals and kitchen tools, including cooking pots, skillets, and cutting boards.'],
    ['Follow advancements','The author recommends following the mod’s advancements to learn its progression. L is the default key for the Advancements screen. Check Controls if your pack uses another binding.']
  ],sources:[['Farmer’s Delight — getting started','https://www.curseforge.com/minecraft/mc-mods/farmers-delight']],related:['recipes','controls']},
  {id:'storage',title:'Sophisticated Backpacks',category:'Systems',summary:'Portable storage with configurable upgrades.',sections:[
    ['Upgrades','Sophisticated Backpacks supports upgrades that change backpack behavior. For example, the Pickup Upgrade collects items according to a filter.'],
    ['Choose for your release','Check the installed mod’s interface and JEI for available upgrades and recipes. Storage capacities and upgrade limits are not confirmed for this pack.']
  ],sources:[['Sophisticated Backpacks — upgrade documentation','https://www.curseforge.com/minecraft/mc-mods/sophisticated-backpacks']],related:['recipes','travel']},
  {id:'travel',title:'Waystones: returning to a destination',category:'Systems',summary:'Activate waystones to build a travel network.',sections:[
    ['Travel options','Waystones can be used as return points after activation. The mod provides Warp Scrolls, a rechargeable Warp Stone, and travel between waystones.'],
    ['Server settings','The project supports configurable travel features. Check your server’s settings for costs, cooldowns, and global waystones. This wiki does not assume teleportation is free.']
  ],sources:[['Waystones — author’s feature guide','https://www.curseforge.com/minecraft/mc-mods/waystones']],related:['aether','storage']},
  {id:'hexerei',title:'Hexerei: the Mixing Cauldron',category:'Systems',summary:'The Mixing Cauldron is a crafting system in Hexerei.',sections:[
    ['Overview','Hexerei provides witchcraft-themed items and a Mixing Cauldron for making items. Coffers and herb jars provide storage options.'],
    ['Recipes','Look up the cauldron’s recipes in the installed game. A conventional three-by-three crafting grid is not a substitute for a machine recipe.']
  ],sources:[['Hexerei — author’s overview','https://www.curseforge.com/minecraft/mc-mods/hexerei']],related:['recipes','storage']},
  {id:'controls',title:'Controls and search',category:'Getting started',summary:'Website shortcuts and default in-game bindings.',sections:[
    ['On this website','Press / outside an input to focus search. Search covers article titles and text. The texture catalog supports multiple words, @filename-prefix filters, and -word exclusions. Bookmark pages and textures to return to them later.'],
    ['In Minecraft with JEI','R shows recipes for the hovered item. U shows its uses. Ctrl + O toggles JEI’s item list. These shortcuts belong to the game; this website does not emulate recipe results.']
  ],sources:[['JEI — default controls','https://www.curseforge.com/minecraft/mc-mods/jei']],related:['recipes']}
];
