window.addEventListener('load', () => {
  const results = [];
  const check = (value, name) => { if (!value) throw Error(name); results.push(name); };
  try {
    check(jeiDatabase.length === 3030, '3030 archived items loaded');
    for (const id of ['home','jei','progression','bosses','magic','dimensions']) {
      navigateTo(id + '-view');
      check(document.querySelector('.wiki-view.active').id === id + '-view', 'Navigation: ' + id);
    }
    navigateTo('jei-view');
    check(document.querySelectorAll('.jei-slot-card').length === 96, '96 items per page');
    for (const query of ['@create', '#weapon', '$food', 'minecraft:']) {
      jeiSearchQuery = query; renderJEI();
      check(document.querySelectorAll('.jei-slot-card').length > 0, 'Search: ' + query);
    }
    jeiSearchQuery = ''; renderJEI();
    document.querySelector('.jei-slot-card').click();
    check(recipeModal.open, 'Item click opens dialog');
    check(document.querySelectorAll('#mcGrid3x3 .mc-grid-slot').length === 9, 'Nine crafting slots');
    const ingredient = document.querySelector('#mcGrid3x3 [data-item-id]');
    const id = ingredient.dataset.itemId;
    ingredient.click();
    check(currentOpenItem.id === id, 'Ingredient navigation');
    switchRecipeTab('uses');
    check(document.querySelector('#recipeUsesTab').style.display === 'block', 'Uses tab');
    check(document.querySelectorAll('.rec-use-item-card').length > 0, 'Reverse recipe lookup');
    document.querySelector('.rec-use-item-card').click();
    check(currentOpenItem.id !== id, 'Recipe use navigation');
    switchRecipeTab('stats');
    check(document.querySelector('#recipeStatsTab').style.display === 'block', 'Stats tab');
    check(document.querySelector('#restoredItemDetails').textContent.includes(currentOpenItem.id), 'Item ID and restored information');
    const previousBookmarks = localStorage.getItem('jei_bookmarks');
    try {
      toggleBookmark(currentOpenItem.id);
      check(JSON.parse(localStorage.getItem('jei_bookmarks')).includes(currentOpenItem.id), 'Original bookmark storage');
      check(document.querySelector('#bookmarksGrid [data-item-id]'), 'Bookmark drawer icon');
    } finally {
      if (previousBookmarks === null) localStorage.removeItem('jei_bookmarks');
      else localStorage.setItem('jei_bookmarks', previousBookmarks);
    }
    document.body.innerHTML = '<pre id="test-result">PASS\n' + results.join('\n') + '</pre>';
  } catch (error) {
    document.body.innerHTML = '<pre id="test-result">FAIL: ' + error.stack + '\n' + results.join('\n') + '</pre>';
  }
});
