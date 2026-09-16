# Modpack Field Guide & JEI Encyclopedia

A local, offline Minecraft 1.20.1 Forge field guide with a restored item and recipe explorer.

## Open the wiki

Open `index.html` in a modern browser. No build, account, backend, or installation is required. The wiki and item images work offline; external source links require internet access.

## Live views

- **Home:** entry point for the five guide destinations.
- **JEI Item & Recipe Explorer:** 3,030 restored item records, recipe and use dialogs, search and filters, and browser-local item bookmarks.
- **Progression:** roadmap, combat loadouts, tools and technology, magic and alchemy, exploration and bosses, and mod paths across five readiness stages.
- **Bosses:** preparation and encounter guidance for the pack's major fights.
- **Magic:** an interactive Iron's Spells class guide with nine schools and focused builds for each.
- **Dimensions:** Aether, Otherside, Terralith, and Biomes O' Plenty guidance.

The recipe and guide content was restored from the preserved original site. It has not been independently checked against an installed modpack's exact versions, configuration, or custom recipes.

## Important files

| File | Purpose |
| --- | --- |
| `index.html` | Sole site entry point and guide markup |
| `assets/restored-wiki.css` | Main site styles |
| `assets/progression.css` | Progression tabs, tables, and guide cards |
| `assets/magic.css` | Magic-school selector, build cards, and responsive layouts |
| `scripts/restored-wiki.js` | Main navigation, explorer, dialogs, search, and JEI bookmarks |
| `scripts/magic.js` | Magic school data, build recommendations, and interactive rendering |
| `scripts/progression-data.js` | Progression items, stages, loadouts, guides, paths, and sources |
| `scripts/progression.js` | Progression rendering and cross-links |
| `scripts/restored_jei_database.js` | Restored 3,030-item recipe database |
| `scripts/inventory-icons.json`, `scripts/icon-sources.json` | Icon verification evidence and source metadata |
| `scripts/inventory-icons.js`, `scripts/item-icons.js` | Offline icon manifest and shared image renderer |

## Inventory icons

See [ICON_COVERAGE.md](ICON_COVERAGE.md) for counts, source links, and limitations. Verified sprites come from hash-checked Minecraft 1.20.1 artifacts and exact item-model mappings. Unsupported renders use explicit placeholders.

To regenerate sprites and icon evidence:

```sh
python scripts/build_inventory_icons.py
node scripts/build_catalog.js
```

## Editing progression

Edit `scripts/progression-data.js`. Item rows include an editorial key, registry ID, display name, recommended stage, role, acquisition route, reasoning, and upgrade advice. Use `textOnly` for variants that cannot safely resolve to one explorer item.

Expedition `items` describe first-attempt preparation. `rewardItems` are rewards or later crafts and must not overlap. Mod paths retain their source references directly in the progression UI.

## Validation

```sh
node --test tests/wiki.test.js tests/progression.test.js tests/item-icons.test.js
node --check scripts/restored-wiki.js
node --check scripts/progression-data.js
node --check scripts/progression.js
```

For desktop and mobile browser checks, install the `chrome-devtools-mcp` CLI and run:

```sh
node tests/run-progression-browser.js
node tests/run-inventory-browser.js
```

Both runners test the sole `index.html` entry point with network access disabled.

## Static hosting

Publish `index.html`, `modpack_field_guide.ico`, the `assets/` directory, and these runtime scripts:

- `inventory-icons.js`
- `item-icons.js`
- `restored-wiki.js`
- `progression-data.js`
- `progression.js`
- `restored_jei_database.js`
- `jei_database.js`

Preserve their relative paths. Archives, generators, tests, and source data are not needed to run the site.
