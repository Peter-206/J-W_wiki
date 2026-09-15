/* Progression UI: local data, existing item dialogs, no new persisted state. */
(function () {
  'use strict';
  const data = window.PROGRESSION_GUIDE;
  const root = document.getElementById('progression-guide');
  if (!root || !data) return;
  const tabs = [
    ['roadmap', 'Roadmap', 'Start with your next milestone.'],
    ['combat', 'Combat Loadouts', 'Compare complete kits for melee, ranged, and spellcasting.'],
    ['tools', 'Tools & Technology', 'Build the infrastructure that makes the next trip easier.'],
    ['magic', 'Magic & Alchemy', 'Develop useful spells, a herb workshop, and maintained flight.'],
    ['exploration', 'Exploration & Bosses', 'Prepare for the destination before chasing its rewards.'],
    ['mods', 'Mod Paths', 'Follow one mod from first investment to a useful long-term goal.']
  ];
  const state = { tab: 'roadmap', stage: 1, mod: 'create' };
  const database = new Map((window.JEI_FULL_DATABASE || []).map(item => [item.id, item]));
  const esc = value => String(value ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const list = values => `<ul>${values.map(value => `<li>${esc(value)}</li>`).join('')}</ul>`;
  const sources = ids => ids.length ? `<div class="pg-sources"><span>References</span>${[...new Set(ids)].map(id => {
    const source = data.sources[id];
    return `<a href="${esc(source[1])}" target="_blank" rel="noopener noreferrer">${esc(source[0])} ↗</a>`;
  }).join('')}</div>` : '';
  const jump = (tab, label, target = '', stage = state.stage) => `<button type="button" class="pg-link" data-pg-tab="${esc(tab)}" data-pg-target="${esc(target)}" data-pg-jump-stage="${stage}">${esc(label)} <span aria-hidden="true">→</span></button>`;
  const links = (entries, stage) => `<div class="pg-links">${entries.map(([tab, label, target]) => jump(tab, label, target, stage)).join('')}</div>`;

  function itemLabel(key, compact = false) {
    const item = data.items[key];
    const record = item.textOnly ? null : database.get(item.id);
    const sprite = record && record.iconFile ? `<img src="assets/items/${esc(record.iconFile)}" alt="" loading="lazy" width="28" height="28">` : '<span class="pg-item-placeholder" aria-hidden="true">◆</span>';
    const content = `${sprite}<span>${esc(item.name)}${compact ? '' : `<small>${esc(item.mod)}</small>`}</span>`;
    return record
      ? `<button type="button" class="pg-item-label" data-item-id="${esc(item.id)}" aria-label="Open ${esc(item.name)} in the item explorer">${content}<span class="pg-open-icon" aria-hidden="true">↗</span></button>`
      : `<span class="pg-item-label pg-item-text">${content}</span>`;
  }
  function chips(keys) {
    return `<div class="pg-item-chips">${keys.map(key => itemLabel(key, true)).join('')}</div>`;
  }
  function recommendations(keys, expanded = false) {
    const unique = [...new Set(keys)];
    if (!unique.length) return '';
    const cards = `<div class="pg-item-grid">${unique.map(key => {
      const item = data.items[key];
      return `<article class="pg-item-card" data-pg-recommendation="${esc(key)}">
        <p class="pg-eyebrow">${esc(item.role)} · Stage ${item.stage}+</p>
        <h4>${itemLabel(key)}</h4>
        <p class="pg-item-reason">${esc(item.why)}</p>
        <dl><dt>How to get it</dt><dd>${esc(item.acquire)}</dd><dt>Keep or upgrade?</dt><dd>${esc(item.upgrade)}</dd></dl>
        ${sources(item.sources)}
      </article>`;
    }).join('')}</div>`;
    return expanded ? cards : `<details class="pg-details"><summary>How to get these items & when to upgrade <span>${unique.length} recommendations</span></summary>${cards}</details>`;
  }
  function stageSelector() {
    return `<div class="pg-stage-picker" role="group" aria-label="Choose progression stage">${data.stages.map(stage => `<button type="button" data-pg-stage="${stage.id}" aria-pressed="${stage.id === state.stage}"><span>${String(stage.id).padStart(2, '0')}</span>${esc(stage.short)}</button>`).join('')}</div>`;
  }
  function stageHeading() {
    const stage = data.stages[state.stage - 1];
    return `<header class="pg-section-heading"><p class="pg-eyebrow">Stage ${stage.id} / 5</p><h3>${esc(stage.title)}</h3><p>${esc(stage.subtitle)}</p></header>`;
  }
  function roadmap() {
    return `<div class="pg-route-intro"><div><p class="pg-eyebrow">Your next move</p><h3>Make the next expedition possible.</h3><p>Choose a milestone, build a kit you can resupply, and follow the branches that interest you. These stages describe readiness, not forced unlocks.</p></div><div class="pg-route-stats"><strong>${new Set(Object.values(data.items).map(item => item.id)).size}</strong><span>named items</span><strong>${data.paths.length}</strong><span>mod paths & groups</span></div></div>
      <nav class="pg-road-jumps" aria-label="Jump to roadmap milestone">${data.stages.map(stage => `<a href="#pg-road-stage-${stage.id}">${String(stage.id).padStart(2, '0')} · ${esc(stage.short)}</a>`).join('')}</nav>
      <div class="pg-roadmap">${data.stages.map(stage => `<article class="pg-milestone" id="pg-road-stage-${stage.id}">
        <span class="pg-stage-number" aria-hidden="true">${String(stage.id).padStart(2, '0')}</span>
        <div class="pg-milestone-body"><p class="pg-eyebrow">${esc(stage.subtitle)}</p><h3>${esc(stage.title)}</h3><p>${esc(stage.summary)}</p>
        <div class="pg-road-columns"><div><h4>Prioritize now</h4>${list(stage.priorities)}</div><div class="pg-readiness"><h4>Ready to move on when…</h4><p>${esc(stage.ready)}</p><h4>Optional branch</h4><p>${esc(stage.optional)}</p></div></div>
        <h4 class="pg-kit-title">Items worth working toward</h4>${chips(stage.items)}${recommendations(stage.items)}${links(stage.links, stage.id)}</div>
      </article>`).join('')}</div>
      <details class="pg-details pg-editorial"><summary>How this guide is organized & sourced</summary><p>Original recommendations combine stage-based equipment comparisons with practical acquisition, preparation, and upgrade advice. Stage placement and loadout choices are editorial recommendations, not game-enforced requirements. Terraria supplied the organizational inspiration; all equipment here belongs to this Minecraft guide.</p><p>Upstream references include mod-author documentation and versioned source. No installed pack export or configuration was supplied. Local recipes and tooltips take priority where a release or pack override differs. Item explorer entries are restored reference records and may contain older descriptions.</p>${sources(['terraria', 'terrariaroute', 'terrariawalk'])}</details>`;
  }
  function combat() {
    const kits = data.loadouts.filter(kit => kit.stage === state.stage);
    return `${stageSelector()}${stageHeading()}<p class="pg-intro">These are playstyles, not locked classes. Keep a backup damage option and choose support equipment for the encounter. Armor suggestions describe a full kit; a listed chestplate represents the start of that set.</p>
      <table class="pg-loadout-table"><caption>Stage ${state.stage} equipment and tradeoffs</caption><thead><tr><th scope="col">Playstyle</th><th scope="col">Weapons & core kit</th><th scope="col">Armor & preparation</th><th scope="col">Why this setup</th></tr></thead><tbody>${kits.map(kit => `<tr>
        <th scope="row"><span class="pg-style">${esc(kit.style)}</span><span class="pg-kit-name">${esc(kit.title)}</span></th>
        <td data-label="Weapons & core kit">${chips(kit.gear)}<h4>Support & supplies</h4>${chips(kit.support)}</td>
        <td data-label="Armor & preparation">${chips(kit.armorItems)}<p>${esc(kit.armor)}</p><h4>Enchantments & upgrades</h4><p>${esc(kit.enchants)}</p></td>
        <td data-label="Why this setup"><p>${esc(kit.reasoning)}</p><h4>Accessible alternative</h4><p>${esc(kit.alternative)}</p><h4>Next investment</h4><p>${esc(kit.next)}</p></td>
      </tr>`).join('')}</tbody></table>
      ${recommendations(kits.flatMap(kit => [...kit.gear, ...kit.support, ...kit.armorItems]))}
      ${links([['exploration', 'Choose encounter-specific preparation'], ['magic', 'Develop the casting path'], ['tools', 'Build the supporting infrastructure']], state.stage)}`;
  }
  function guideCards(entries, panel) {
    return entries.map(entry => `<article class="pg-guide-card" id="pg-${panel}-${esc(entry.id)}" tabindex="-1">
      <p class="pg-eyebrow">Stage ${entry.stage} · ${panel === 'tools' ? 'Workshop notes' : 'Magic notes'}</p><h3>${esc(entry.title)}</h3><p class="pg-intro">${esc(entry.intro)}</p>
      <ol class="pg-steps">${entry.steps.map(step => `<li>${esc(step)}</li>`).join('')}</ol>
      ${chips(entry.items)}<p class="pg-note"><strong>Before you invest:</strong> ${esc(entry.note)}</p>
      ${recommendations(entry.items)}${sources(entry.sources)}${links(entry.links, entry.stage)}
    </article>`).join('');
  }
  const bossNames = { monstrosity: 'Netherite Monstrosity', ignis: 'Ignis', dragons: 'Ancient Dragons (Stage 4-5)', deadking: 'The Dead King', voidworm: 'Void Worm' };
  function exploration() {
    const entries = data.expeditions.filter(entry => entry.stage === state.stage);
    // Stage 2 is intentionally preparation, not an invented dimension or boss gate.
    const content = entries.length ? entries.map(entry => `<article class="pg-guide-card" id="pg-exploration-${esc(entry.id)}" tabindex="-1">
      <p class="pg-eyebrow">Stage ${entry.stage} · Expedition briefing</p><h3>${esc(entry.title)}</h3><p class="pg-intro">${esc(entry.objective)}</p>
      <div class="pg-entry-rule"><strong>Actual entry requirement</strong><p>${esc(entry.gate)}</p></div>
      <h4>Recommended kit</h4>${chips(entry.items)}<h4>Before the attempt</h4>${list(entry.preparation)}
      <div class="pg-reward"><h4>What this opens up</h4><p>${esc(entry.reward)}</p>${entry.rewardItems.length ? `<h4>Reward goals & follow-up crafts</h4>${chips(entry.rewardItems)}` : ''}</div>
      <p class="pg-note"><strong>Important distinction:</strong> ${esc(entry.caution)}</p>
      ${recommendations([...entry.items, ...entry.rewardItems])}${sources(entry.sources)}
      ${bossNames[entry.tactics] ? `<button type="button" class="pg-link" data-pg-boss="${esc(entry.tactics)}">Open encounter guide →</button>` : ''}
    </article>`).join('') : `<article class="pg-guide-card"><h3>Make exploration repeatable</h3><p>Use this stage for manageable Overworld structures, mining, and resupply. There is no new mandatory dimension or boss gate.</p>${list(['Finish a protected equipment set and a renewable meal supply.', 'Practice clearing a structure while keeping the entrance and retreat path accessible.', 'Prepare the next Nether resource trip once equipment can be replaced.'])}${chips(['diamondArmor', 'bow', 'arrows', 'shield', 'goldApple', 'backpack'])}${recommendations(['diamondArmor', 'bow', 'arrows', 'shield', 'goldApple', 'backpack'])}${jump('exploration', 'Plan the Nether trip', 'nether', 3)}</article>`;
    return `${stageSelector()}${stageHeading()}<p class="pg-intro">An entry requirement opens the route. The kit below is preparation advice. Rewards stay separate so the first attempt never depends on winning that same fight.</p>${content}`;
  }
  function modPaths() {
    const entry = data.paths.find(path => path.id === state.mod);
    const directory = (window.WIKI_MODS || []).filter(mod => entry.directoryIds.includes(mod.id));
    return `<div class="pg-mod-picker"><label for="pg-mod-select">Choose a mod or group</label><select id="pg-mod-select">${data.paths.map(path => `<option value="${esc(path.id)}"${path.id === state.mod ? ' selected' : ''}>${esc(path.title)}</option>`).join('')}</select></div>
      <article class="pg-guide-card" id="pg-mods-${esc(entry.id)}" tabindex="-1"><p class="pg-eyebrow">Recommended starting point · Stage ${entry.stage}</p><h3>${esc(entry.title)}</h3><p class="pg-intro">${esc(entry.intro)}</p><ol class="pg-steps">${entry.steps.map(step => `<li>${esc(step)}</li>`).join('')}</ol>
      <p class="pg-note">${esc(entry.note)}</p>${recommendations(entry.items, true)}${sources(entry.sources)}${links(entry.links, entry.stage)}
      <div class="pg-directory-links">${directory.map(mod => `<a href="tools.html#mod/${encodeURIComponent(mod.id)}">${esc(mod.name)} directory & references →</a>`).join('')}</div></article>`;
  }

  root.innerHTML = `<header class="pg-header"><div><p class="pg-eyebrow">The field guide / Progression</p><h2>Plan your next upgrade.</h2><p>Specific gear. Useful mod paths. A reason for every recommendation.</p></div><span class="pg-version">Minecraft 1.20.1 · Forge</span></header>
    <div class="pg-tabs" role="tablist" aria-label="Progression guides">${tabs.map(([id, title]) => `<button type="button" role="tab" id="pg-tab-${id}" aria-controls="pg-panel-${id}" aria-selected="${id === state.tab}" tabindex="${id === state.tab ? '0' : '-1'}" data-pg-tab="${id}">${title}</button>`).join('')}</div>
    <p class="pg-reading-note">Stage numbers are recommendations. Item buttons open the restored explorer; unlinked items have their acquisition notes here. Check installed recipes when a version note applies.</p>
    <p class="pg-sr-only" id="pg-status" role="status" aria-live="polite"></p>
    ${tabs.map(([id, , description]) => `<section role="tabpanel" id="pg-panel-${id}" aria-labelledby="pg-tab-${id}" tabindex="0"${id !== state.tab ? ' hidden' : ''}><p class="pg-tab-description">${description}</p><div data-pg-content="${id}"></div></section>`).join('')}`;

  function render() {
    root.querySelectorAll('[role="tab"]').forEach(tab => {
      const selected = tab.dataset.pgTab === state.tab;
      tab.setAttribute('aria-selected', String(selected));
      tab.tabIndex = selected ? 0 : -1;
    });
    root.querySelectorAll('[role="tabpanel"]').forEach(panel => { panel.hidden = panel.id !== `pg-panel-${state.tab}`; });
    const renderers = { roadmap, combat, tools: () => stageSelector() + stageHeading() + guideCards(data.tools.filter(entry => entry.stage === state.stage), 'tools'), magic: () => stageSelector() + stageHeading() + guideCards(data.magic.filter(entry => entry.stage === state.stage), 'magic'), exploration, mods: modPaths };
    root.querySelector(`[data-pg-content="${state.tab}"]`).innerHTML = renderers[state.tab]();
    document.getElementById('pg-status').textContent = `${tabs.find(tab => tab[0] === state.tab)[1]}${['roadmap', 'mods'].includes(state.tab) ? '' : `, stage ${state.stage}`}`;
  }
  function selectTab(tab, target, stage) {
    if (!tabs.some(entry => entry[0] === tab)) return;
    state.tab = tab;
    if (stage >= 1 && stage <= 5) state.stage = Number(stage);
    if (target) {
      if (tab === 'mods' && data.paths.some(path => path.id === target)) state.mod = target;
      else {
        const entries = tab === 'exploration' ? data.expeditions : data[tab];
        const entry = Array.isArray(entries) && entries.find(entry => entry.id === target);
        if (entry) state.stage = entry.stage;
      }
    }
    render();
    if (target) {
      const destination = document.getElementById(`pg-${tab}-${target}`);
      if (destination) { destination.focus({ preventScroll: true }); destination.scrollIntoView({ block: 'start' }); }
    }
  }
  root.addEventListener('click', event => {
    const tab = event.target.closest('[data-pg-tab]');
    if (tab) {
      selectTab(tab.dataset.pgTab, tab.dataset.pgTarget, Number(tab.dataset.pgJumpStage));
      if (tab.getAttribute('role') !== 'tab' && !tab.dataset.pgTarget) {
        document.getElementById(`pg-panel-${state.tab}`).focus({ preventScroll: true });
        root.querySelector('.pg-tabs').scrollIntoView({ block: 'start' });
      }
      return;
    }
    const stage = event.target.closest('[data-pg-stage]');
    if (stage) {
      state.stage = Number(stage.dataset.pgStage); render();
      root.querySelector(`#pg-panel-${state.tab} [data-pg-stage="${state.stage}"]`).focus({ preventScroll: true });
      return;
    }
    const boss = event.target.closest('[data-pg-boss]');
    if (boss) {
      const heading = [...document.querySelectorAll('#bosses-view .boss-name')].find(node => node.textContent === bossNames[boss.dataset.pgBoss]);
      if (heading) {
        window.navigateTo('bosses-view');
        const card = heading.closest('article');
        card.tabIndex = -1; card.focus({ preventScroll: true }); card.scrollIntoView({ block: 'start' });
      }
    }
  });
  root.addEventListener('change', event => {
    if (event.target.id !== 'pg-mod-select') return;
    state.mod = event.target.value; render();
    document.getElementById('pg-mod-select').focus({ preventScroll: true });
  });
  root.addEventListener('keydown', event => {
    const tab = event.target.closest('[role="tab"]');
    if (!tab || !['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
    event.preventDefault();
    let index = tabs.findIndex(entry => entry[0] === tab.dataset.pgTab);
    if (event.key === 'Home') index = 0;
    else if (event.key === 'End') index = tabs.length - 1;
    else index = (index + (event.key === 'ArrowRight' ? 1 : -1) + tabs.length) % tabs.length;
    selectTab(tabs[index][0]);
    document.getElementById(`pg-tab-${state.tab}`).focus();
  });
  // Keep malformed or unavailable artwork from causing repeated network failures.
  root.addEventListener('error', event => {
    if (event.target.tagName === 'IMG') event.target.replaceWith(Object.assign(document.createElement('span'), { className: 'pg-item-placeholder', textContent: '◆' }));
  }, true);
  render();
}());
