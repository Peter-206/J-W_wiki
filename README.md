# Modpack Field Guide & JEI Encyclopedia

A local Minecraft 1.20.1 Forge field guide with a restored item and recipe explorer, detailed gameplay guides, and optional personal tools.

## Open the wiki

Open `index.html` or `minecraft_modpack_wiki.html` in a modern browser. Both entry points contain the same site. No build, account, or installation is needed. The wiki and item images work offline; external project links require internet access.

## Main site

- **JEI Item & Recipe Explorer:** 3,030 restored item records, crafting/process information, a 3×3 ingredient grid, output quantities, clickable ingredients, and reverse recipe-use links.
- **Item information:** descriptions, practical uses, IDs, mods, categories, tags, rarity, tiers, and available equipment/ability information from the restored data.
- **Browsing:** category filters, text and item-ID search, `@mod` search, `#tag` and `$tag` search, and page sizes of 96, 192, 480, or all items.
- **Bookmarks:** a drawer beside the item grid, using the original `jei_bookmarks` browser storage key.
- **Guides:** the Field Station home page and spotlight items, five-stage progression roadmap, boss encounters, magic and technology systems, dimensions and biomes, and game keybinds.
- **Objectives:** six early-game, nine boss, and five mastery objectives in a flat checklist, with completion shown in the sidebar.
- **Mod directory:** 43 retained entries linking to project references in the optional tools.

The website's hovered-item `R`, `U`, and `A` shortcuts have not been restored. The hotkeys guide also describes controls inside Minecraft.

## Optional tools and saved data

Follow **Texture catalog & saved tools** in the sidebar, or open `tools.html#catalog`, for the retained texture catalog. `tools.html` also provides separate page bookmarks, personal notes, JSON backup import/export, a checklist, directory search, and the Sources & Accuracy page.

The texture catalog indexes artwork by filename; its entries can include model parts and animation frames. It is separate from the item/recipe database. The replacement short articles are no longer loaded, although their source file and the older article-search interface remain.

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
| `scripts/restored-wiki.js` | Main explorer, dialogs, search, bookmarks, and objective behavior |
| `scripts/restored_jei_database.js` | Restored 3,030-item recipe database |
| `tools.html`, `assets/wiki.css`, `scripts/wiki.js` | Optional tools and their interface |
| `scripts/jei_database.js` | Generated texture catalog, despite its historical filename |
| `scripts/mods.json`, `scripts/mod_directory.js` | Directory source and generated browser data |
| `scripts/restored_articles.js` | Empty article list loaded by the optional tools |
| `scripts/articles.js` | Retained replacement articles; not loaded by either live entry point |

To rebuild the texture catalog and mod directory, with Node.js installed:

```sh
node scripts/build_catalog.js
```

This writes `scripts/jei_database.js` and `scripts/mod_directory.js`. It does not update the restored recipe database. `generate_full_jei.js`, `scripts/build_full_database.js`, and `update_wiki.js` currently delegate to this same texture builder; their original implementations remain in `archive/`.

## Validation

Basic retained data and structure checks:

```sh
node --test tests/wiki.test.js
node --check scripts/restored-wiki.js
node --check scripts/wiki.js
```

The older test suite checks retained article/catalog data and some shared structure; it is not a complete test of the restored explorer. `tests/restoration-browser.js` contains browser checks for the restored site, and `tests/restoration-result.html` records the successful headless Chrome run. To rerun those checks, load the browser-check script at the end of a temporary copy of the main HTML, before the page's load event, using a separate browser profile. The script replaces the page with its results.

The older `browser-check.js`, `browser-mobile-check.js`, and desktop/mobile screenshots describe the replacement interface and have not been updated for the restored main site.

## Static hosting

Publish the three entry points (`index.html`, `minecraft_modpack_wiki.html`, and `tools.html`), `modpack_field_guide.ico`, the `assets/` directory, and these browser scripts from `scripts/`:

- `restored-wiki.js`
- `restored_jei_database.js`
- `mod_directory.js`
- `wiki.js`
- `jei_database.js`
- `restored_articles.js`

Preserve their relative paths. A static host is sufficient; there is no backend or shared progress storage. Archives, generators, tests, and source-data directories are not needed to run the site.
