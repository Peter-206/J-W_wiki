const fs = require('fs');
const path = require('path');

const wikiPath = path.join(__dirname, 'minecraft_modpack_wiki.html');
let html = fs.readFileSync(wikiPath + '.bak2', 'utf8');

// 1. Add <script src="scripts/jei_database.js"></script> to <head> if not present
if (!html.includes('src="scripts/jei_database.js"')) {
  html = html.replace('</head>', '  <script src="scripts/jei_database.js"></script>\n</head>');
  console.log('Added scripts/jei_database.js script tag to head.');
}

// 2. Add pagination controls under jeiGrid if not present
if (!html.includes('id="jeiPagination"')) {
  const target = '<div id="jeiNoResults"';
  const paginationHtml = `
          <!-- JEI Pagination & Page Sizer -->
          <div class="jei-pagination" id="jeiPagination" style="display:flex; flex-wrap:wrap; justify-content:space-between; align-items:center; gap:12px; margin-top:20px; padding:12px 18px; background:var(--panel); border:1px solid var(--border); border-radius:var(--radius);">
            <div style="display:flex; align-items:center; gap:6px;">
              <button id="jeiFirstPage" class="doc-link-btn" style="padding:5px 12px; cursor:pointer;" title="First Page">⏮ First</button>
              <button id="jeiPrevPage" class="doc-link-btn" style="padding:5px 12px; cursor:pointer;" title="Previous Page">◀ Prev</button>
              <span id="jeiPageIndicator" style="font-weight:600; color:var(--lime); padding:0 10px; font-size:0.9rem;">Page 1 of 32</span>
              <button id="jeiNextPage" class="doc-link-btn" style="padding:5px 12px; cursor:pointer;" title="Next Page">Next ▶</button>
              <button id="jeiLastPage" class="doc-link-btn" style="padding:5px 12px; cursor:pointer;" title="Last Page">Last ⏭</button>
            </div>
            <div style="display:flex; align-items:center; gap:8px;">
              <span style="font-size:0.8rem; color:var(--text-muted);">Per Page:</span>
              <select id="jeiPageSize" style="background:var(--bg); color:var(--text); border:1px solid var(--border); border-radius:4px; padding:4px 8px; font-size:0.85rem; cursor:pointer;">
                <option value="96" selected>96 items</option>
                <option value="192">192 items</option>
                <option value="480">480 items</option>
                <option value="99999">Show All</option>
              </select>
            </div>
          </div>
`;
  html = html.replace(target, paginationHtml + '\n          ' + target);
  console.log('Added jeiPagination HTML controls.');
}

// 3. Replace the hardcoded jeiDatabase array with loading window.JEI_FULL_DATABASE
const pStart = html.indexOf('const jeiDatabase = [');
const pEndSection = html.indexOf('/* 5. NAVIGATION & VIEW ROUTER');

if (pStart === -1 || pEndSection === -1) {
  console.error('Could not find jeiDatabase boundaries! pStart:', pStart, 'pEndSection:', pEndSection);
  process.exit(1);
}

// Find the last ]; before /* 5. NAVIGATION & VIEW ROUTER
const pEnd = html.lastIndexOf('];', pEndSection) + 2;

// Fallback: load 206 handcrafted items from scripts/data
const scriptsDataDir = path.join(__dirname, 'scripts', 'data');
const fallbackData = [];
const fallbackIds = new Set();
const dataFiles = [
  'cataclysm.js', 'iceandfire.js', 'create.js', 'tconstruct.js',
  'irons.js', 'aether.js', 'alexsmobs.js', 'farmersdelight.js',
  'hexerei.js', 'backpacks.js', 'waystones_deeper.js', 'minecraft.js'
];
for (const df of dataFiles) {
  const p = path.join(scriptsDataDir, df);
  if (fs.existsSync(p)) {
    const list = require(p);
    for (const it of list) {
      if (!fallbackIds.has(it.id)) {
        fallbackIds.add(it.id);
        fallbackData.push(it);
      }
    }
  }
}
console.log(`Prepared fallback array of ${fallbackData.length} handcrafted items.`);

const replacementDb = `/* ============================================================== */
/* 4. MASTER JEI DATABASE (3,000+ VERIFIED ITEMS ACROSS ALL MODS)  */
/* ============================================================== */
const jeiFallbackDatabase = ${JSON.stringify(fallbackData, null, 2)};

const jeiDatabase = (typeof window !== "undefined" && window.JEI_FULL_DATABASE && Array.isArray(window.JEI_FULL_DATABASE) && window.JEI_FULL_DATABASE.length > 0)
  ? window.JEI_FULL_DATABASE
  : jeiFallbackDatabase;

// Fast O(1) item index map for instant lookups & recipes
const jeiItemMap = new Map();
jeiDatabase.forEach(item => {
  jeiItemMap.set(item.id, item);
  if (item.name) jeiItemMap.set(item.name.toLowerCase(), item);
  if (!ITEM_REGISTRY[item.id]) {
    ITEM_REGISTRY[item.id] = {
      name: item.name,
      mod: item.mod,
      file: item.iconFile,
      tier: item.tier || "Standard",
      rarity: item.rarity || "common"
    };
  }
});`;

html = html.substring(0, pStart) + replacementDb + html.substring(pEnd);
console.log('Replaced hardcoded jeiDatabase with dynamic master JEI database!');

// 4. Update getItemMeta to use jeiItemMap for fast lookup
html = html.replace(
  'const dbItem = jeiDatabase.find(x => x.id === idOrName || x.name.toLowerCase() === idOrName.toLowerCase());',
  'const dbItem = jeiItemMap.get(idOrName) || jeiItemMap.get(idOrName.toLowerCase()) || jeiDatabase.find(x => x.id === idOrName || x.name.toLowerCase() === idOrName.toLowerCase());'
);

// 5. Update renderJEI to support pagination
const newRenderJEI = `let jeiCurrentPage = 1;
let jeiPageSize = 96;

function renderJEI() {
  if (!jeiGrid) return;
  const q = (jeiSearchQuery || "").toLowerCase().trim();
  const filtered = jeiDatabase.filter(item => {
    let matchFilter = true;
    if (jeiActiveFilter !== "All") {
      if (jeiActiveFilter.startsWith("#")) {
        matchFilter = (item.tags || []).includes(jeiActiveFilter);
      }
    }

    if (!matchFilter) return false;
    if (!q) return true;

    if (q.startsWith("@")) {
      const modQueryTerm = q.slice(1);
      return (item.modId && item.modId.toLowerCase().includes(modQueryTerm)) || (item.mod && item.mod.toLowerCase().includes(modQueryTerm));
    }
    if (q.startsWith("#")) {
      return (item.tags || []).some(t => t.toLowerCase().includes(q));
    }

    return (item.name && item.name.toLowerCase().includes(q)) ||
           (item.mod && item.mod.toLowerCase().includes(q)) ||
           (item.description && item.description.toLowerCase().includes(q)) ||
           ((item.tags || []).some(t => t.toLowerCase().includes(q)));
  });

  const totalPages = Math.ceil(filtered.length / jeiPageSize) || 1;
  if (jeiCurrentPage > totalPages) jeiCurrentPage = totalPages;
  if (jeiCurrentPage < 1) jeiCurrentPage = 1;

  const startIdx = (jeiCurrentPage - 1) * jeiPageSize;
  const endIdx = Math.min(startIdx + jeiPageSize, filtered.length);
  const pageItems = filtered.slice(startIdx, endIdx);

  if (jeiResultCount) {
    if (filtered.length === 0) {
      jeiResultCount.innerHTML = \`Showing <b>0</b> of \${jeiDatabase.length.toLocaleString()} items\`;
    } else {
      jeiResultCount.innerHTML = \`Showing <b>\${startIdx + 1}–\${endIdx}</b> of <b>\${filtered.length.toLocaleString()}</b> items <span style="color:var(--text-dim); font-weight:normal;">(Total Database: \${jeiDatabase.length.toLocaleString()})</span>\`;
    }
  }

  const jeiPagination = document.getElementById("jeiPagination");
  const jeiPageIndicator = document.getElementById("jeiPageIndicator");
  const jeiPrevPage = document.getElementById("jeiPrevPage");
  const jeiNextPage = document.getElementById("jeiNextPage");
  const jeiFirstPage = document.getElementById("jeiFirstPage");
  const jeiLastPage = document.getElementById("jeiLastPage");

  if (jeiPagination) {
    jeiPagination.style.display = filtered.length > 0 ? "flex" : "none";
  }
  if (jeiPageIndicator) {
    jeiPageIndicator.textContent = \`Page \${jeiCurrentPage} of \${totalPages}\`;
  }
  if (jeiPrevPage) jeiPrevPage.disabled = jeiCurrentPage <= 1;
  if (jeiFirstPage) jeiFirstPage.disabled = jeiCurrentPage <= 1;
  if (jeiNextPage) jeiNextPage.disabled = jeiCurrentPage >= totalPages;
  if (jeiLastPage) jeiLastPage.disabled = jeiCurrentPage >= totalPages;

  if (filtered.length === 0) {
    jeiGrid.innerHTML = "";
    if (jeiNoResults) jeiNoResults.style.display = "block";
  } else {
    if (jeiNoResults) jeiNoResults.style.display = "none";
    jeiGrid.innerHTML = pageItems.map(item => \`
      <div class="jei-slot-card" data-item-id="\${item.id}">
        <div class="jei-slot-icon-box">\${renderItemSprite(item.id)}</div>
        <div class="jei-slot-details">
          <span class="jei-slot-name">\${item.name}</span>
          <span class="jei-slot-mod">\${item.mod}</span>
        </div>
      </div>
    \`).join("");
  }
}`;

// Find renderJEI in html
const pRenderStart = html.indexOf('function renderJEI() {');
const pRenderEnd = html.indexOf('if (jeiSearchInput) {', pRenderStart);

if (pRenderStart !== -1 && pRenderEnd !== -1) {
  html = html.substring(0, pRenderStart) + newRenderJEI + '\n\n' + html.substring(pRenderEnd);
  console.log('Updated renderJEI with pagination logic!');
} else {
  console.error('Could not find renderJEI boundaries!');
}

// 6. Hook up pagination event listeners
const paginationListeners = `
  // JEI Pagination Event Handlers
  const jeiPrevPage = document.getElementById("jeiPrevPage");
  const jeiNextPage = document.getElementById("jeiNextPage");
  const jeiFirstPage = document.getElementById("jeiFirstPage");
  const jeiLastPage = document.getElementById("jeiLastPage");
  const jeiPageSizeSelect = document.getElementById("jeiPageSize");

  if (jeiPrevPage) {
    jeiPrevPage.addEventListener("click", () => {
      if (jeiCurrentPage > 1) {
        jeiCurrentPage--;
        renderJEI();
        if (jeiGrid) jeiGrid.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  }
  if (jeiNextPage) {
    jeiNextPage.addEventListener("click", () => {
      jeiCurrentPage++;
      renderJEI();
      if (jeiGrid) jeiGrid.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }
  if (jeiFirstPage) {
    jeiFirstPage.addEventListener("click", () => {
      jeiCurrentPage = 1;
      renderJEI();
      if (jeiGrid) jeiGrid.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }
  if (jeiLastPage) {
    jeiLastPage.addEventListener("click", () => {
      jeiCurrentPage = 999999;
      renderJEI();
      if (jeiGrid) jeiGrid.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }
  if (jeiPageSizeSelect) {
    jeiPageSizeSelect.addEventListener("change", (e) => {
      jeiPageSize = parseInt(e.target.value, 10) || 96;
      jeiCurrentPage = 1;
      renderJEI();
    });
  }
`;

// Insert pagination listeners right after jeiCategoryPills listener
const pillEventTarget = 'jeiActiveFilter = btn.dataset.filter;';
if (html.includes(pillEventTarget)) {
  html = html.replace(
    pillEventTarget,
    pillEventTarget + '\n          jeiCurrentPage = 1;'
  );
}

// Also reset page on search input
const searchEventTarget = 'jeiSearchQuery = e.target.value;';
if (html.includes(searchEventTarget)) {
  html = html.replace(
    searchEventTarget,
    searchEventTarget + '\n    jeiCurrentPage = 1;'
  );
}

// Add the event listeners before </script>
html = html.replace('</script>\n</body>', paginationListeners + '\n</script>\n</body>');
if (!html.includes('jeiPrevPage.addEventListener')) {
  // Try with \r\n
  html = html.replace('</script>\r\n</body>', paginationListeners + '\r\n</script>\r\n</body>');
}

fs.writeFileSync(wikiPath, html, 'utf8');
console.log('Successfully updated minecraft_modpack_wiki.html!');
