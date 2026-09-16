module.exports = async function inventoryBrowserChecks() {
  const results = [];
  const check = (condition, message) => { if (!condition) throw Error(message); results.push(message); };
  const saved = ['jei_bookmarks'].map(key => [key, localStorage.getItem(key)]);
  const entries = Object.values(INVENTORY_ICON_DATA.items);
  const verified = entries.filter(item => item.status === 'verified');
  // Decode every accepted asset, including those outside the first catalog page.
  await Promise.all(verified.map(async item => {
    const image = new Image(); image.src = item.file;
    await image.decode();
    check(image.naturalWidth > 0 && image.naturalHeight === image.naturalWidth, `Loads offline: ${item.id}`);
  }));
  navigateTo('home-view');
  check(document.querySelectorAll('.inventory-icon').length > 0, 'Home uses shared icons');
  navigateTo('jei-view');
  jeiSearchQuery = '@create'; renderJEI();
  check(document.querySelectorAll('.jei-slot-card').length > 0, 'Mod search works');
  jeiSearchQuery = ''; renderJEI();
  document.querySelector('.jei-slot-card').click();
  check(document.querySelector('#recipeModal').open, 'Item dialog opens');
  check(document.querySelector('#recipeModal .inventory-icon'), 'Dialog uses shared icons');
  const ingredient = document.querySelector('#mcGrid3x3 [data-item-id]');
  if (ingredient) {
    const id = ingredient.dataset.itemId; ingredient.click();
    check(currentOpenItem.id === id, 'Recipe ingredient navigation works with placeholders');
  }
  document.querySelector('#recipeModal').close();
  navigateTo('progression-view');
  check(document.querySelector('#progression-guide .inventory-icon'), 'Guide uses shared icons');
  navigateTo('jei-view');
  const fallbackImages = [...document.images].filter(img => img.getAttribute('src')?.startsWith('assets/items/'));
  check(fallbackImages.every(img => img.getAttribute('src') === `assets/items/${img.dataset.inventoryIcon.replace(':', '_')}.png`), 'Fallback textures use full registry IDs');
  check([...document.images].filter(img => img.matches('.inventory-icon')).every(img => {
    const style = getComputedStyle(img);
    return style.objectFit === 'cover' && style.objectPosition === '0% 0%';
  }), 'Inventory textures crop to the square from the top-left');
  // Simulate a missing file without a network request; the handler must replace
  // the broken image exactly once, not retry an unrelated enchanted-book sprite.
  const holder = document.createElement('div');
  holder.innerHTML = ItemIcons.render('minecraft:diamond', 'Diamond');
  document.body.append(holder);
  holder.querySelector('img').dispatchEvent(new Event('error'));
  check(!holder.querySelector('img') && holder.querySelector('[aria-label="Diamond: Icon unavailable"]'), 'Image failure produces accessible placeholder');
  holder.remove();
  check(document.documentElement.scrollWidth <= innerWidth + 1, 'No horizontal page overflow');
  check(!performance.getEntriesByType('resource').some(entry => /^https?:/.test(entry.name)), 'All page resources remain local');
  for (const [key, value] of saved) check(localStorage.getItem(key) === value, `Saved data unchanged: ${key}`);
  return { status: 'PASS', checks: results.length, verifiedIcons: verified.length, viewport: innerWidth, entry: location.pathname, results };
};
