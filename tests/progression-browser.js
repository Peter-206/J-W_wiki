/* Inject this exported function with the Chrome DevTools evaluate_script command.
 * It exercises the live UI without overwriting the document or changing saved progress.
 */
module.exports = async function progressionBrowserChecks() {
  const results = [];
  function check(condition, message) { if (!condition) throw new Error(message); results.push(message); }
  const root = document.getElementById('progression-guide');
  const saved = ['jei_bookmarks', 'field-guide-v2', ...Object.keys(localStorage).filter(key => key.startsWith('check_q_'))].map(key => [key, localStorage.getItem(key)]);
  const tab = name => root.querySelector(`#pg-tab-${name}`);
  const panel = () => root.querySelector('[role="tabpanel"]:not([hidden])');
  const chooseStage = stage => panel().querySelector(`[data-pg-stage="${stage}"]`).click();
  const checkWidth = message => check(document.documentElement.scrollWidth <= innerWidth + 1, message);
  navigateTo('progression-view');
  check(root.querySelectorAll('[role="tab"]').length === 6, 'Six accessible nested tabs');
  check(root.querySelectorAll('.pg-milestone').length === 5, 'Five roadmap milestones');
  for (const name of ['roadmap', 'combat', 'tools', 'magic', 'exploration', 'mods']) {
    tab(name).click();
    check(panel().id === `pg-panel-${name}`, `${name}: correct panel`);
    check(root.querySelectorAll('[role="tabpanel"]:not([hidden])').length === 1, `${name}: only one visible panel`);
    check(root.querySelectorAll('[role="tab"][tabindex="0"]').length === 1, `${name}: roving tab stop`);
    checkWidth(`${name}: no page overflow at ${innerWidth}px`);
    if (['combat', 'tools', 'magic', 'exploration'].includes(name)) {
      for (let stage = 1; stage <= 5; stage++) {
        chooseStage(stage);
        check(panel().querySelectorAll('[aria-pressed="true"]').length === 1, `${name}/${stage}: selected stage`);
        check(panel().querySelector('.pg-section-heading h3').textContent === PROGRESSION_GUIDE.stages[stage - 1].title, `${name}/${stage}: correct content`);
        if (name === 'combat') check(panel().querySelectorAll('tbody tr').length === 3, `combat/${stage}: three complete kits`);
        const details = panel().querySelector('.pg-details');
        if (details) { details.open = true; check(details.querySelector('.pg-item-card dd').textContent.length > 0, `${name}/${stage}: acquisition details`); }
        checkWidth(`${name}/${stage}: expanded content fits`);
        check(!panel().textContent.includes('undefined'), `${name}/${stage}: all content resolved`);
      }
    }
  }
  tab('mods').click();
  for (const entry of PROGRESSION_GUIDE.paths) {
    const select = document.getElementById('pg-mod-select');
    select.value = entry.id; select.dispatchEvent(new Event('change', { bubbles: true }));
    check(panel().querySelector('.pg-guide-card h3').textContent === entry.title, `Mod path: ${entry.title}`);
    checkWidth(`Mod path ${entry.id}: no overflow`);
  }
  // Cross-links must switch both the topic and the stage, then focus the actual section.
  tab('roadmap').click();
  root.querySelector('#pg-road-stage-3 [data-pg-tab="tools"]').click();
  check(panel().id === 'pg-panel-tools' && panel().querySelector('[data-pg-stage="3"]').getAttribute('aria-pressed') === 'true', 'Roadmap link selects topic and stage');
  tab('mods').click();
  const select = document.getElementById('pg-mod-select');
  select.value = 'create'; select.dispatchEvent(new Event('change', { bubbles: true }));
  panel().querySelector('[data-pg-target="workshop"]').click();
  check(document.activeElement.id === 'pg-tools-workshop', 'Mod path link focuses the workshop at its own stage');
  tab('magic').click(); chooseStage(5);
  panel().querySelector('[data-pg-target="dead-king"]').click();
  check(document.activeElement.id === 'pg-exploration-dead-king', 'Cross-tab link focuses Dead King briefing');
  // Check every authored cross-link, including links that target a different stage.
  for (const [name, entries] of [['tools', PROGRESSION_GUIDE.tools], ['magic', PROGRESSION_GUIDE.magic], ['mods', PROGRESSION_GUIDE.paths]]) {
    for (const entry of entries) {
      for (const [destination, , target] of entry.links) {
        tab(name).click();
        if (name === 'mods') { const s = document.getElementById('pg-mod-select'); s.value = entry.id; s.dispatchEvent(new Event('change', { bubbles: true })); }
        else chooseStage(entry.stage);
        const card = document.getElementById(`pg-${name}-${entry.id}`);
        const button = [...card.querySelectorAll('[data-pg-tab]')].find(node => node.dataset.pgTab === destination && node.dataset.pgTarget === (target || ''));
        button.click();
        check(panel().id === `pg-panel-${destination}`, `Cross-link ${name}/${entry.id} → ${destination}/${target || ''}`);
        if (target) check(document.activeElement.id === `pg-${destination}-${target}`, `Cross-link target focused: ${target}`);
      }
    }
  }
  tab('combat').click(); chooseStage(3);
  const item = panel().querySelector('button[data-item-id]');
  const id = item.dataset.itemId;
  item.focus(); item.click();
  check(document.querySelector('#recipeModal').open, 'Progression item opens existing recipe dialog');
  check(currentOpenItem.id === id, 'Dialog selects the clicked item ID');
  document.querySelector('#recipeModal').close();
  const note = panel().querySelector('[data-pg-recommendation="firePotion"]');
  check(note && !note.querySelector('[data-item-id]'), 'Potion variant remains readable without an incorrect generic recipe');
  check([...root.querySelectorAll('[data-item-id]')].every(node => JEI_FULL_DATABASE.some(item => item.id === node.dataset.itemId)), 'Every explorer link resolves to an existing record');
  tab('exploration').click(); chooseStage(5);
  for (const boss of ['monstrosity', 'ignis', 'deadking', 'voidworm']) {
    panel().querySelector(`[data-pg-boss="${boss}"]`).click();
    check(document.querySelector('.wiki-view.active').id === 'bosses-view', `Encounter guide link: ${boss}`);
    check(document.activeElement.classList.contains('boss-card'), `Encounter guide focus: ${boss}`);
    navigateTo('progression-view');
  }
  tab('combat').click(); chooseStage(4);
  navigateTo('home-view'); navigateTo('progression-view');
  check(panel().id === 'pg-panel-combat' && panel().querySelector('[data-pg-stage="4"]').getAttribute('aria-pressed') === 'true', 'Topic and stage survive main navigation');
  tab('combat').focus();
  tab('combat').dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowRight', bubbles: true }));
  check(document.activeElement.id === 'pg-tab-tools', 'ArrowRight changes and focuses tab');
  document.activeElement.dispatchEvent(new KeyboardEvent('keydown', { key: 'End', bubbles: true }));
  check(document.activeElement.id === 'pg-tab-mods', 'End focuses last tab');
  document.activeElement.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowRight', bubbles: true }));
  check(document.activeElement.id === 'pg-tab-roadmap', 'ArrowRight wraps to first tab');
  document.activeElement.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowLeft', bubbles: true }));
  check(document.activeElement.id === 'pg-tab-mods', 'ArrowLeft wraps to last tab');
  document.activeElement.dispatchEvent(new KeyboardEvent('keydown', { key: 'Home', bubbles: true }));
  check(document.activeElement.id === 'pg-tab-roadmap', 'Home focuses first tab');
  // Load every image in rendered panels so missing assets do not hide behind lazy loading.
  for (const img of root.querySelectorAll('img')) img.loading = 'eager';
  await Promise.all([...root.querySelectorAll('img')].map(img => img.decode().catch(() => {})));
  check([...root.querySelectorAll('img')].every(img => img.complete && img.naturalWidth > 0), 'All currently rendered item images load');
  check(!performance.getEntriesByType('resource').some(entry => /^https?:/.test(entry.name)), 'No network dependencies for the local guide');
  for (const [key, value] of saved) check(localStorage.getItem(key) === value, `Saved state unchanged: ${key}`);
  checkWidth('Final roadmap fits viewport');
  if (innerWidth <= 900) root.scrollIntoView({ block: 'start', behavior: 'instant' });
  else window.scrollTo({ top: 0, behavior: 'instant' });
  return { status: 'PASS', checks: results.length, viewport: innerWidth, entry: location.pathname, results };
};
