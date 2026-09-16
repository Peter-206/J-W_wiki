# Inventory icon coverage

Reviewed 2026-09-15. Minecraft 1.20.1; published Forge-compatible releases, not an installed-pack export.

3893 verified static inventory sprites; 2778 unavailable references. 4818 exact item-model/translation identities appear in the catalog. Coverage includes restored database items and additional live guide/recipe references.

| Namespace | Verified icons | Unavailable |
| --- | ---: | ---: |
| aether | 224 | 79 |
| alexsmobs | 179 | 450 |
| born_in_chaos | 0 | 2 |
| cataclysm | 204 | 274 |
| create | 652 | 567 |
| deeperdarker | 154 | 19 |
| farmersdelight | 183 | 40 |
| hexerei | 209 | 176 |
| iceandfire | 342 | 71 |
| irons_spellbooks | 194 | 45 |
| minecraft | 1052 | 187 |
| so_many_enchants | 0 | 2 |
| sophisticatedbackpacks | 65 | 21 |
| tconstruct | 427 | 821 |
| waystones | 8 | 24 |

## Verification and limitations

Sprites are copied byte-for-byte from hash-checked publisher artifacts. Their exact item model resolves to a static, single-layer generated inventory sprite with default GUI transforms. Runtime colors, item-state overrides, custom renderers, animation strips, and unsupported models require a game export and remain placeholders. A model plus translation establishes an asset identity, not proof of obtainability or an installed registry export. Missing models may indicate a texture-only record, incorrect ID, or version difference. Recipes and gameplay data are not verified by this audit.

The complete per-item evidence and missing reasons are in [inventory-icons.json](scripts/inventory-icons.json). Project identities, version URLs, artifact hashes, namespace evidence where inspected, and license references are in [icon-sources.json](scripts/icon-sources.json).

## Final validation

All accepted PNGs decode offline. Desktop and mobile browser checks cover the live entry point, recipe navigation, accessible image-error placeholders, and unchanged JEI bookmarks. A visual review sheet covers all 15 referenced namespaces with representative accepted sprites and unavailable entries; this is a sample review, not an in-game comparison of every icon. Reproduce it with <code>node tests/run-inventory-browser.js</code>; reports and screenshots are saved under <code>.cache/inventory-browser/</code>.

## Project audit

| Project | Status | Published version / limitation |
| --- | --- | --- |
| [Minecraft](https://www.minecraft.net/) | verified | 1.20.1 |
| [Alex's Mobs](https://modrinth.com/mod/alexs-mobs) | verified | 1.22.9 |
| [AppleSkin](https://modrinth.com/mod/appleskin) | verified | 2.5.1+mc1.20.1 |
| [Balm](https://modrinth.com/mod/balm) | verified | 7.3.43+forge-1.20.1 |
| [Biomes O' Plenty](https://modrinth.com/mod/biomes-o-plenty) | verified | 18.0.0.592 |
| [Bookshelf](https://modrinth.com/mod/bookshelf-lib) | verified | 20.2.15 |
| [Born in Chaos](https://modrinth.com/mod/borninchaos) | verified | 1.7.5 |
| [Boss Locator × L_Ender's Cataclysm](https://www.curseforge.com/minecraft/mc-mods/boss-locator-l_enders-cataclysm) | unresolved | No matching versioned project source established; no automatic name substitution. |
| [Chat Heads](https://modrinth.com/mod/chat-heads) | verified | 0.15.7 |
| [Citadel](https://modrinth.com/mod/citadel) | verified | 2.6.3 |
| [Clumps](https://modrinth.com/mod/clumps) | verified | 12.0.0.4 |
| [CoroUtil](https://modrinth.com/mod/coroutil) | verified | 1.20.1-1.3.7 |
| [Corpse](https://modrinth.com/mod/corpse) | verified | forge-1.20.1-1.0.23 |
| [Create](https://modrinth.com/mod/create) | verified | mc1.20.1-6.0.8 |
| [Curios API](https://modrinth.com/mod/curios) | verified | 5.14.1+1.20.1 |
| [Deeper and Darker](https://modrinth.com/mod/deeperdarker) | verified | 1.3.3-forge+1.20.1 |
| [Embeddium](https://modrinth.com/mod/embeddium) | verified | 0.3.31+mc1.20.1 |
| [Ember's Floating Islands](https://modrinth.com/mod/embers-floating-islands) | verified | 1.5.3 |
| [Enchantment Descriptions](https://modrinth.com/mod/enchantment-descriptions) | verified | 17.1.21 |
| [Farmer's Delight](https://modrinth.com/mod/farmers-delight) | verified | 1.20.1-1.3.4 |
| [Hexerei](https://modrinth.com/mod/hexerei) | verified | 0.4.2.2 |
| [Ice and Fire: Dragons](https://modrinth.com/mod/ice-and-fire-dragons) | verified | 2.1.13-1.20.1-beta-5 |
| [Ice and Fire: Dragonseeker](https://www.curseforge.com/minecraft/mc-mods/dragonseeker) | unresolved | No matching versioned project source established; no automatic name substitution. |
| [Inventory Sorter](https://www.curseforge.com/minecraft/mc-mods/inventory-sorter) | identity-verified | CurseForge identifies cpw as author. The similarly named Modrinth project is different; 1.20.1 release not pinned. |
| [Iron's Lib](https://modrinth.com/mod/irons-lib) | verified | 1.20.1-2.1.0 |
| [Iron's Spells 'n Spellbooks](https://modrinth.com/mod/irons-spells-n-spellbooks) | verified | 1.20.1-3.16.3 |
| [JourneyMap](https://modrinth.com/mod/journeymap) | verified | 1.20.1-6.0.5+forge |
| [L_Ender's Cataclysm](https://modrinth.com/mod/l_enders-cataclysm) | verified | 3.31 |
| [Lionfish API](https://modrinth.com/mod/lionfish-api) | verified | 3.0 |
| [Lithostitched](https://modrinth.com/mod/lithostitched) | verified | 1.4.11-forge-1.20 |
| [Mantle](https://modrinth.com/mod/mantle) | verified | 1.11.104 |
| [McQoy](https://modrinth.com/mod/mcqoy) | verified | 0.4.1+forge-1.20 |
| [ModernFix](https://modrinth.com/mod/modernfix) | verified | 5.27.83+mc1.20.1 |
| [Moog's Soaring Structures](https://www.curseforge.com/minecraft/mc-mods/moogs-soaring-structures) | unresolved | No matching versioned project source established; no automatic name substitution. |
| [Moog's Structure Lib](https://modrinth.com/mod/moogs-structure-lib) | verified | 3.1.2 |
| [Oculus](https://modrinth.com/mod/oculus) | verified | 1.20.1-1.8.0 |
| [playerAnimator](https://modrinth.com/mod/playeranimator) | verified | 1.0.2-rc1+1.20-forge |
| [Skin Layers 3D](https://modrinth.com/mod/3dskinlayers) | verified | 1.11.2 |
| [So Many Enchants](https://www.curseforge.com/minecraft/mc-mods/so-many-enchants) | unresolved | No matching versioned project source established; no automatic name substitution. |
| [Sophisticated Backpacks](https://modrinth.com/mod/sophisticated-backpacks) | verified | 1.20.1-3.26.3.2157 |
| [Sophisticated Core](https://modrinth.com/mod/sophisticated-core) | verified | 1.20.1-1.5.1.2335 |
| [Sound Physics Remastered](https://modrinth.com/mod/sound-physics-remastered) | verified | forge-1.20.1-1.5.1 |
| [TerraBlender](https://modrinth.com/mod/terrablender) | verified | 3.0.1.10 |
| [Terralith](https://modrinth.com/mod/terralith) | verified | 2.5.4 |
| [The Aether](https://modrinth.com/mod/aether) | verified | 1.20.1-1.5.2-neoforge |
| [Tinkers' Construct](https://modrinth.com/mod/tinkers-construct) | verified | 3.11.2.166 |
| [Waystones](https://modrinth.com/mod/waystones) | verified | 14.1.21+forge-1.20.1 |
| [YetAnotherConfigLib](https://modrinth.com/mod/yacl) | verified | 3.6.6+1.20.1-forge |
| [YUNG's API](https://modrinth.com/mod/yungs-api) | verified | 1.20-Forge-4.0.6 |
| [YUNG's Better Dungeons](https://modrinth.com/mod/yungs-better-dungeons) | verified | 1.20-Forge-4.0.4 |

## Attribution

All game and mod artwork remains owned by its respective authors. Original artifact license/notice files, where included, are retained under assets/inventory/licenses. Source and license links are also shown on catalog detail pages. No ownership or new license is claimed for these images. See [artwork attribution and retained notices](assets/inventory/ATTRIBUTION.md) for repository notice snapshots, separately identified from files bundled in release artifacts.
