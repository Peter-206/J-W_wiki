# Modpack Field Guide & JEI Encyclopedia

A local Minecraft 1.20.1 Forge field guide with a restored item and recipe explorer, detailed gameplay guides, and optional personal tools.

## Open the wiki

Open `index.html` or `minecraft_modpack_wiki.html` in a modern browser. Both entry points contain the same site. No build, account, or installation is needed. The wiki and item images work offline; external project links require internet access.

## Main site

- **JEI Item & Recipe Explorer:** 3,030 restored item records, crafting/process information, a 3×3 ingredient grid, output quantities, clickable ingredients, and reverse recipe-use links.
- **Item information:** descriptions, practical uses, IDs, mods, categories, tags, rarity, tiers, and available equipment/ability information from the restored data.
- **Browsing:** category filters, text and item-ID search, `@mod` search, `#tag` and `$tag` search, and page sizes of 96, 192, 480, or all items.
- **Bookmarks:** a drawer beside the item grid, using the original `jei_bookmarks` browser storage key.
- **Guides:** the Field Station home page and spotlight items, six-tab progression field guide, boss encounters, magic and technology systems, dimensions and biomes, and game keybinds.
- **Objectives:** six early-game, nine boss, and five mastery objectives in a flat checklist, with completion shown in the sidebar.
- **Mod directory:** 43 retained entries linking to project references in the optional tools.

The website's hovered-item `R`, `U`, and `A` shortcuts have not been restored. The hotkeys guide also describes controls inside Minecraft.

## Progression field guide

Progression has six tabs: **Roadmap**, **Combat Loadouts**, **Tools & Technology**, **Magic & Alchemy**, **Exploration & Bosses**, and **Mod Paths**. Five readiness stages connect survival, a supplied base, Nether resources, advanced expeditions, and endgame projects. These are recommended milestones; technology, magic, and exploration can advance in parallel.

- More than 120 distinct named items, with acquisition routes, practical reasons to use them, and upgrade tradeoffs.
- Fifteen combat loadouts: melee, ranged, and spellcaster setups at every stage, including armor, support supplies, enchantments, and alternatives.
- Fourteen expedition briefings separating entry requirements, recommended equipment, and rewards or follow-up crafts.
- Nineteen mod paths and groups covering all 43 retained directory entries, including supporting mods without item progression.
- Stage selectors, a mod selector, section cross-links, keyboard-accessible tabs, and responsive layouts. The selected topic and stage survive main-site navigation within the current page session.

Item buttons open matching records in the existing explorer. Missing records remain readable text with full guide notes. Potion and spell-scroll variants remain text-only because a generic bottle or scroll record cannot identify their particular effects. The guide never fabricates a recipe to fill a missing record.

The editorial structure takes inspiration from Terraria's [Class setups](https://terraria.fandom.com/wiki/Guide%3AClass_setups), [Game progression](https://terraria.fandom.com/wiki/Guide%3AGame_progression), and [Walkthrough](https://terraria.fandom.com/wiki/Guide%3AWalkthrough). All Minecraft recommendations are original. Mod-author documentation and versioned source references appear beside the relevant content. Checks include Create's heated brass recipe, Cataclysm's boss loot and Incinerator recipe, Ice and Fire's forge recipe/Bestiary, and Hexerei and Aether in-game guide text.

Stage placement and loadout choices are editorial advice, not verified pack gates. Exact installed mod versions, configuration, and custom recipes are unavailable. Read local notes where those affect a recommendation. The retained So Many Enchants project reference could not be verified; its path makes no special-enchantment claims. Five existing encounter cards linked from progression were corrected to match the new guidance; other restored content and explorer recipes retain the accuracy limits below.

## Optional tools and saved data

Follow **Inventory icons & saved tools** in the sidebar, or open `tools.html#catalog`, for the inventory icon catalog. `tools.html` also provides separate page bookmarks, personal notes, JSON backup import/export, a checklist, directory search, and the Sources & Accuracy page.

The inventory icon catalog includes only exact item-model/translation matches from the audited Minecraft 1.20.1 sources. It excludes raw model parts and animation sheets. Items without a verified inventory sprite show **Icon unavailable**. Old texture links resolve to an exact matched item or an unavailable page that preserves saved notes and bookmarks. The replacement short articles are no longer loaded, although their source file and the older article-search interface remain.

Bookmarks, notes, and progress stay in the browser and origin where they were saved:

- `jei_bookmarks` stores the main explorer's item bookmarks.
- `field-guide-v2` stores optional page bookmarks, notes, and the current checklist progress. The restored objectives use this format too.
- Original `check_q_*` quest saves remain untouched and are not imported into the current checklist.

The optional tools' JSON backup covers `field-guide-v2`; it does not include `jei_bookmarks` or `check_q_*`. Changing browsers or moving from a local file to a hosted address can give the site a different storage location.

## Content and recovery sources

The recipes and detailed guides were restored from the preserved original site. They have not been independently checked against an installed modpack's versions, configuration, or custom recipes. This is a restoration of the original content, not a verified export from Minecraft.

`archive/`, the root `.bak`/`.bak2` HTML files, and `scripts/data/` preserve earlier content and generators. The live site uses separate restored copies rather than loading files directly from `archive/`. See [RESTORE_CHECKLIST.md](RESTORE_CHECKLIST.md) for the requested scope and completion notes.

## Editing and building

| File | Purpose |
| --- | --- |
| `index.html`, `minecraft_modpack_wiki.html` | Main layout and detailed guide text; keep both entry points in sync |
| `assets/restored-wiki.css` | Main site styles |
| `assets/progression.css` | Progression tabs, responsive comparison tables, and guide cards |
| `scripts/restored-wiki.js` | Main explorer, dialogs, search, bookmarks, and objective behavior |
| `scripts/progression-data.js` | Shared progression items, stages, loadouts, guides, mod paths, and source references |
| `scripts/progression.js` | Progression rendering, accessible tabs, stage/mod selection, and cross-links |
| `scripts/restored_jei_database.js` | Restored 3,030-item recipe database |
| `tools.html`, `assets/wiki.css`, `scripts/wiki.js` | Optional tools and their interface |
| `scripts/jei_database.js` | Generated inventory icon catalog, despite its historical filename |
| `scripts/inventory-icons.json`, `scripts/icon-sources.json` | Per-item verification evidence and pinned publisher artifact sources |
| `scripts/inventory-icons.js`, `scripts/item-icons.js`, `assets/item-icons.css` | Offline icon manifest, shared renderer, and accessible placeholders |
| `scripts/mods.json`, `scripts/mod_directory.js` | Directory source and generated browser data |
| `scripts/restored_articles.js` | Empty article list loaded by the optional tools |
| `scripts/articles.js` | Retained replacement articles; not loaded by either live entry point |

To rebuild the inventory catalog, browser icon manifest, coverage report, and mod directory from the committed verification data, with Node.js installed:

```sh
node scripts/build_catalog.js
```

This writes `scripts/jei_database.js`, `scripts/inventory-icons.js`, `scripts/mod_directory.js`, and `ICON_COVERAGE.md`. It does not update the restored recipe database. `generate_full_jei.js`, `scripts/build_full_database.js`, and `update_wiki.js` currently delegate to this same catalog builder; their original implementations remain in `archive/`.

### Inventory icon verification

See [ICON_COVERAGE.md](ICON_COVERAGE.md) for counts, the project audit, source links, and limitations. All live item-image views use the shared registry-ID mapping. Verified inventory sprites are preferred; entries without one use a matching `assets/items/<namespace>_<item>.png` image when available.

Verified generated icons are resolved from publisher JARs after checking their published artifact hashes, exact item model, inherited texture references, and matching item/block translation. Multiple declared layers are composited and animated textures use their declared first frame. Model parts, block faces, runtime tints, custom 3D renderers, and unsupported item states remain placeholders. No similar-looking sprite or generic enchanted book is substituted.

The audit covers the directory's 49 mod entries plus vanilla Minecraft. Published Forge-compatible 1.20.1 releases are pinned; this is not confirmation of the user's installed versions. Unresolved projects are listed explicitly. Model/translation matches establish artwork identities, not complete registry membership or recipe accuracy.

To regenerate sprites and per-item evidence from the pinned sources (Python 3.11+, Pillow, Node.js, and internet access on the first run):

```sh
python scripts/build_inventory_icons.py
node scripts/build_catalog.js
```

Downloads are hash-checked and cached in `.cache/inventory-icons/`; no mod code is executed. Normal site use needs neither Python nor network access. The generated manifest records source releases, model and texture paths, verification method, and image SHA-256 hashes. Original artifact license files, where supplied, are retained under `assets/inventory/licenses/`; project license references appear on catalog detail pages. [Artwork attribution](assets/inventory/ATTRIBUTION.md) also links retained upstream notice snapshots; their source URLs, Git blob IDs, and checksums are recorded separately from release-artifact evidence.

`python scripts/audit_icon_sources.py` refreshes the source lock and can select newer releases. Review project identity, version compatibility, runtime color registrations, and license changes before rebuilding from a refreshed lock. The explicitly reviewed slug mapping prevents similarly named projects from being substituted automatically.

### Editing progression

Edit the shared data in `scripts/progression-data.js`; neither HTML entry point duplicates the guide text. Item rows contain an editorial key, actual registry ID, display name, recommended starting stage, role, acquisition route, reasoning, and upgrade advice. Sources are keyed in the same file. Use `textOnly` for variants that cannot safely resolve to one explorer item. Do not substitute a similar-looking texture or invent an item ID to obtain a clickable recipe.

Loadouts refer to item keys; guides and mod paths carry step lists and cross-links. Expedition `items` are first-attempt preparation, while `rewardItems` are rewards or subsequent crafts and must not overlap. New mod paths should map their `directoryIds` to retained directory entries. Run progression checks after editing to catch missing references and circular preparation requirements.

## Validation

Basic retained data and structure checks:

```sh
node --test tests/wiki.test.js tests/progression.test.js tests/item-icons.test.js
node --check scripts/restored-wiki.js
node --check scripts/wiki.js
node --check scripts/progression-data.js
node --check scripts/progression.js
```

The tests check retained articles, inventory provenance, checksums, missing-icon behavior, script order, and progression structure; it is not a complete test of the restored explorer. `tests/restoration-browser.js` contains browser checks for the restored site, and `tests/restoration-result.html` records the successful headless Chrome run. To rerun those checks, load the browser-check script at the end of a temporary copy of the main HTML, before the page's load event, using a separate browser profile. The script replaces the page with its results.

The older `browser-check.js`, `browser-mobile-check.js`, and desktop/mobile screenshots describe the replacement interface and have not been updated for the restored main site.

For the expanded progression UI, install the `chrome-devtools-mcp` CLI and run:

```sh
node tests/run-progression-browser.js
```

The runner opens and closes a dedicated test tab, checks both entry points at desktop and mobile sizes with network access disabled, and preserves saved progress and bookmarks. It verifies tab/stage navigation, every authored guide cross-link, mod selection, item dialogs, missing-record behavior, image loading, and overflow. Results are written to `tests/progression-browser-results.json` with `tests/progression-*.png` screenshots. If the global CLI is installed outside the runner's detected locations, set `CHROME_DEVTOOLS_CLI` to its `build/src/bin/chrome-devtools.js` file. The injectable checks are in `tests/progression-browser.js`.

For inventory imagery and catalog compatibility checks, run:

```sh
node tests/run-inventory-browser.js
```

This uses the same Chrome CLI setup and a dedicated tab. It checks all verified PNGs offline, all three entry points at desktop/mobile sizes, recipe navigation, provenance links, legacy texture notes, image-error placeholders, saved-state preservation, and overflow. Results and screenshots go to `.cache/inventory-browser/`.

## Static hosting

Publish the three entry points (`index.html`, `minecraft_modpack_wiki.html`, and `tools.html`), `modpack_field_guide.ico`, the `assets/` directory, and these browser scripts from `scripts/`:

- `inventory-icons.js`
- `item-icons.js`
- `restored-wiki.js`
- `progression-data.js`
- `progression.js`
- `restored_jei_database.js`
- `mod_directory.js`
- `wiki.js`
- `jei_database.js`
- `restored_articles.js`

Preserve their relative paths. A static host is sufficient; there is no backend or shared progress storage. Archives, generators, tests, and source-data directories are not needed to run the site.
