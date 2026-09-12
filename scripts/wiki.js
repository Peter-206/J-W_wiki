'use strict';
const articles = window.WIKI_ARTICLES || [];
const catalog = window.WIKI_CATALOG || [];
const mods = window.WIKI_MODS || [];
const main = document.querySelector('main');
const search = document.querySelector('#search');
const esc = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const link = (route, text, cls='') => `<a class="${cls}" href="#${esc(route)}">${esc(text)}</a>`;
const external = (url, title) => /^https:\/\//.test(url) ? `<a href="${esc(url)}" target="_blank" rel="noopener noreferrer">${esc(title)} ↗</a>` : esc(title);
const storageKey = 'field-guide-v2';
let saved = {bookmarks:[],checks:[],notes:{}};
try {
  const value = JSON.parse(localStorage.getItem(storageKey));
  if(value && typeof value==='object') {
    saved.bookmarks = Array.isArray(value.bookmarks) ? value.bookmarks.filter(x=>typeof x==='string') : [];
    saved.checks = Array.isArray(value.checks) ? value.checks.filter(x=>typeof x==='string') : [];
    saved.notes = value.notes && typeof value.notes==='object' && !Array.isArray(value.notes) ? Object.fromEntries(Object.entries(value.notes).filter(([k,v])=>typeof v==='string')) : {};
  }
} catch { document.querySelector('#status').textContent='Saved data could not be loaded. You can still use the wiki.'; }
function persist(){
  try { localStorage.setItem(storageKey,JSON.stringify(saved)); return true; }
  catch { document.querySelector('#status').textContent='Browser storage is unavailable. Changes last for this session only; export them to keep a copy.'; return false; }
}
function route(){
  const raw = location.hash.slice(1);
  const [path,query=''] = raw.split('?');
  const aliases={'home-view':'home','jei-view':'catalog','progression-view':'checklist','bosses-view':'article/bosses','systems-view':'guides?category=Systems','dimensions-view':'guides?category=Dimensions','hotkeys-view':'article/controls','checklist-view':'checklist','mods-view':'mods'};
  if(aliases[path]){const [target,filter='']=aliases[path].split('?');return {path:target,params:new URLSearchParams(filter||query)};}
  return {path:path||'home', params:new URLSearchParams(query)};
}
function go(path){ if(location.hash==='#'+path) render(); else location.hash=path; }
function heading(title,description='',eyebrow='Field guide'){return `<div class="eyebrow">${esc(eyebrow)}</div><h1>${esc(title)}</h1>${description?`<p class="lede">${esc(description)}</p>`:''}`;}
function cards(list){return `<div class="grid">${list.map(a=>`<a class="card" href="#article/${a.id}"><span class="eyebrow">${esc(a.category)}</span><h3>${esc(a.title)}</h3><p>${esc(a.summary)}</p></a>`).join('')}</div>`;}
function bookmark(key){return `<button data-bookmark="${esc(key)}" aria-pressed="${saved.bookmarks.includes(key)}">${saved.bookmarks.includes(key)?'Remove bookmark':'Bookmark page'}</button>`;}
function notes(key){return `<section><h2>My notes</h2><p class="muted">Personal notes are saved in this browser. They do not change the sourced article.</p><label for="notes">Notes for this page</label><textarea id="notes" data-note="${esc(key)}" maxlength="20000" placeholder="Record a build idea, coordinates, or a detail from your game…">${esc(Object.hasOwn(saved.notes,key)?saved.notes[key]:'')}</textarea><small id="note-status" role="status">Saved locally as you type. Export a backup from Bookmarks.</small></section>`;}
function article(a){
  main.innerHTML=heading(a.title,a.summary,a.category)+`<div class="row">${bookmark('article/'+a.id)}<button data-print>Print article</button></div><p class="muted"><small>Source review: September 10, 2026 · General mod documentation; pack behavior unconfirmed.</small></p><div class="article-layout"><div class="prose">${a.sections.map(([title,body],i)=>`<section id="section-${i}"><h2>${esc(title)}</h2><p>${esc(body)}</p></section>`).join('')}<div class="sources"><h2>Sources</h2>${a.sources.map(([title,url])=>external(url,title)).join('')}</div><h2>Related pages</h2>${cards(a.related.map(id=>articles.find(a=>a.id===id)).filter(Boolean))}${notes('article/'+a.id)}</div><div class="toc"><strong>On this page</strong>${a.sections.map(([title],i)=>`<a href="#article/${a.id}?section=${i}" data-section="${i}">${esc(title)}</a>`).join('')}</div></div>`;
}
function tokensMatch(item,q){
  const hay = (item.name+' '+item.file+' '+item.group).toLowerCase();
  return q.toLowerCase().trim().split(/\s+/).filter(Boolean).every(term=>{
    const negative=term.startsWith('-'); if(negative)term=term.slice(1);
    const match=term.startsWith('@') ? item.group.includes(term.slice(1)) : hay.includes(term);
    return negative ? !match : match;
  });
}
function textureCards(list){return `<div class="catalog">${list.map(item=>`<a class="card texture" href="#texture/${encodeURIComponent(item.id)}"><img loading="lazy" src="assets/items/${encodeURIComponent(item.file)}" alt=""><strong>${esc(item.name)}</strong><small>${esc(item.group)} · texture</small></a>`).join('')}</div>`;}
function catalogPage(params){
  const q=params.get('q')||'',group=params.get('group')||'';
  const filtered=catalog.filter(x=>(!group||x.group===group)&&tokensMatch(x,q));
  const pages=Math.max(1,Math.ceil(filtered.length/60));
  const page=Math.max(1,Math.min(pages,parseInt(params.get('page'),10)||1));
  const pageLink=p=>{const s=new URLSearchParams({q,group,page:String(p)});return 'catalog?'+s;};
  main.innerHTML=heading('Texture catalog','Browse local artwork by filename. These assets may include blocks, model parts, and animation frames.')+`<form id="catalog-form" class="row"><label for="catalog-search">Search textures</label><input id="catalog-search" name="q" type="search" value="${esc(q)}" placeholder="e.g. sword @minecraft -netherite"><label for="group">Filename prefix</label><select id="group" name="group"><option value="">All prefixes</option>${[...new Set(catalog.map(x=>x.group))].sort().map(g=>`<option ${g===group?'selected':''} value="${esc(g)}">${esc(g)}</option>`).join('')}</select><button>Apply filters</button>${link('catalog','Clear filters')}</form><p class="muted" role="status">${filtered.length.toLocaleString()} textures · Page ${page} of ${pages}</p>${filtered.length?textureCards(filtered.slice((page-1)*60,page*60)):'<div class="empty">No matching textures. Try fewer words or clear the prefix filter.</div>'}<div class="row pagination">${page>1?link(pageLink(1),'First','button')+link(pageLink(page-1),'Previous','button'):'<button disabled>Previous</button>'}${page<pages?link(pageLink(page+1),'Next','button')+link(pageLink(pages),'Last','button'):'<button disabled>Next</button>'}</div>`;
}
const tasks=[["q_smeltery", "Construct a Tinkers' Smeltery Controller"], ["q_create_power", "Build a Water Wheel or Windmill kinetic setup"], ["q_backpack", "Craft & equip a Sophisticated Backpack"], ["q_waystone", "Discover and activate an ancient Waystone"], ["q_scroll_forge", "Inscribe a custom Spell Scroll at an Inscription Table"], ["q_feast", "Cook a culinary Feast meal in Farmer's Delight"], ["q_monstrosity", "Slay the Netherite Monstrosity in the Soul Blacksmith"], ["q_ignis", "Conquer Ignis in the Nether Burning Arena"], ["q_harbinger", "Defeat The Harbinger inside the Ancient Factory"], ["q_dragon", "Slay a Stage 4 or 5 Fire/Ice Dragon"], ["q_slider", "Conquer the Bronze Dungeon Slider in The Aether"], ["q_valkyrie", "Defeat the Valkyrie Queen in the Silver Dungeon"], ["q_sun_spirit", "Defeat the Sun Spirit in the Gold Dungeon"], ["q_warden", "Defeat a Warden & activate The Otherside portal"], ["q_void_worm", "Summon & conquer the Void Worm in The End"], ["q_dragonsteel", "Forge an elemental Dragonsteel Blade"], ["q_diamond_spellbook", "Inscribe an Epic Diamond or Netherite Spellbook"], ["q_steam_engine", "Assemble an automated multi-boiler Create Steam Engine"], ["q_gravitite_armor", "Forge and enchant a full suit of Gravitite Armor"], ["q_netherite_backpack", "Fully upgrade your Backpack to Netherite tier"]];
function checklist(){
  const count=tasks.filter(([id])=>saved.checks.includes(id)).length;
  main.innerHTML=heading('Adventure checklist','An optional personal plan. These tasks are not pack unlock requirements.')+`<p id="progress-label">${count} of ${tasks.length} complete</p><progress aria-labelledby="progress-label" value="${count}" max="${tasks.length}"></progress>${tasks.map(([id,text])=>`<label class="check"><input type="checkbox" data-check="${id}" ${saved.checks.includes(id)?'checked':''}><span>${esc(text)}</span></label>`).join('')}<p class="muted">Progress is saved in this browser.</p><button data-reset>Reset checklist</button>`;
}
function searchPage(q){
  const words=q.toLowerCase().trim().split(/\s+/).filter(Boolean);
  const found=articles.filter(a=>words.every(w=>[a.title,a.summary,a.category,...a.sections.flat()].join(' ').toLowerCase().includes(w)));
  const foundMods=mods.filter(m=>words.every(w=>(m.name+' '+m.id).toLowerCase().includes(w)));
  main.innerHTML=heading(q?`Search: ${q}`:'Search the wiki',`${found.length} articles and ${foundMods.length} directory entries found.`)+cards(found)+(!found.length?'<p class="empty">No articles match. Try a mod name or a shorter search.</p>':'')+`<h2>Mod directory matches</h2><div class="chips">${foundMods.map(m=>link('mod/'+m.id,m.name)).join('')||'<p>No directory matches.</p>'}</div><h2>Looking for artwork?</h2>${link('catalog?'+new URLSearchParams({q}),'Search the texture catalog','button')}`;
}
function render(){
  const {path,params}=route();
  document.querySelectorAll('[data-nav]').forEach(a=>{a.removeAttribute('aria-current');const root=path.split('/')[0];if(a.dataset.nav===(root==='article'?'guides':root==='texture'?'catalog':root==='mod'?'mods':root))a.setAttribute('aria-current','page');});
  document.querySelector('#sidebar').classList.remove('open');document.querySelector('#menu').setAttribute('aria-expanded','false');
  if(path==='home')main.innerHTML=heading('A guide for your next adventure.','Explore the mods, learn the systems, and keep your discoveries in one place.','Minecraft · Modpack field guide')+`<div class="grid"><a class="card" href="#guides"><span class="eyebrow">Read & learn</span><h3>${articles.length} sourced articles</h3><p>Short guides with references to the mod authors.</p></a><a class="card" href="#catalog"><span class="eyebrow">Browse & discover</span><h3>${catalog.length.toLocaleString()} local textures</h3><p>Search the artwork without invented item stats.</p></a><a class="card" href="#checklist"><span class="eyebrow">Plan & remember</span><h3>Your adventure</h3><p>Keep bookmarks, page notes, and a personal checklist.</p></a></div><h2>Start here</h2>${cards(articles.filter(a=>['recipes','create','aether','food','netherite','travel'].includes(a.id)))}`;
  else if(path==='guides'){
    const category=params.get('category');
    main.innerHTML=heading('Wiki articles','Source-backed introductions. Select a topic to start exploring.')+`<div class="chips">${link('guides','All topics')}${[...new Set(articles.map(a=>a.category))].map(c=>link('guides?'+new URLSearchParams({category:c}),c)).join('')}</div>`+cards(articles.filter(a=>!category||a.category===category));
  }else if(path.startsWith('article/')){const a=articles.find(a=>path==='article/'+a.id);if(a)article(a);else notFound();}
  else if(path==='catalog')catalogPage(params);
  else if(path.startsWith('texture/')){
    let id;try{id=decodeURIComponent(path.slice(8));}catch{}
    const item=catalog.find(x=>x.id===id);
    if(!item)notFound();else main.innerHTML=heading(item.name,'Local texture record','Asset catalog')+`<div class="row"><img class="detail-image" src="assets/items/${encodeURIComponent(item.file)}" alt="${esc(item.name)} texture">${bookmark(path)}</div><h2>Asset details</h2><p>Filename: <code>${esc(item.file)}</code><br>Filename prefix: <code>${esc(item.group)}</code><br>Recipe and gameplay information: not verified.</p>${link('catalog?'+new URLSearchParams({group:item.group}),'Browse this prefix','button')}<h2>Find the actual recipe</h2><p>Use the installed game’s recipe viewer to check whether a corresponding item exists and how it is obtained.</p>${link('article/recipes','Read the JEI guide')}${notes(path)}`;
  }else if(path==='mods'){
    main.innerHTML=heading('Mod directory','Browse mod project references.')+`<div class="grid">${mods.map(m=>`<a class="card" href="#mod/${m.id}"><h3>${esc(m.name)}</h3><p>Open reference & related guides →</p></a>`).join('')}</div>`;
  }else if(path.startsWith('mod/')){
    const m=mods.find(m=>path==='mod/'+m.id);
    if(!m)notFound();else main.innerHTML=heading(m.name,'Directory entry')+bookmark(path)+`<h2>Project reference</h2><p>${external(m.url,'Open '+m.name+' project page')}</p><h2>Explore</h2><div class="row">${link('search?'+new URLSearchParams({q:m.name.split(':')[0]}),'Search related articles','button')}${link('catalog?'+new URLSearchParams({group:m.id}),'Browse matching texture prefix','button')}</div>${notes(path)}`;
  }else if(path==='search')searchPage(params.get('q')||'');
  else if(path==='checklist')checklist();
  else if(path==='bookmarks'){
    main.innerHTML=heading('Bookmarks & notes','Your saved pages and personal notes stay in this browser.')+`<div class="grid">${saved.bookmarks.map(key=>{const name=articles.find(a=>key==='article/'+a.id)?.title||mods.find(m=>key==='mod/'+m.id)?.name||catalog.find(x=>'texture/'+encodeURIComponent(x.id)===key)?.name;return name?`<div class="card">${link(key,name)}<br><button data-bookmark="${esc(key)}">Remove bookmark</button></div>`:'';}).join('')||'<p class="empty">No bookmarks yet. Open an article or texture and select Bookmark page.</p>'}</div><h2>Pages with notes</h2><div class="chips">${Object.entries(saved.notes).filter(([,value])=>value.trim()).map(([key])=>link(key,articles.find(a=>key==='article/'+a.id)?.title||mods.find(m=>key==='mod/'+m.id)?.name||key)).join('')||'<p class="muted">No notes yet.</p>'}</div><h2>Back up your data</h2><p class="muted">Export bookmarks, notes, and checklist progress as JSON. Import merges bookmarks and checklist progress; imported notes replace notes for matching pages.</p><div class="row"><button data-export>Export backup</button><label class="button" for="import">Import backup</label><input id="import" type="file" accept="application/json,.json"></div>`;
  }else if(path==='about'){
    main.innerHTML=heading('Sources & accuracy','What this wiki knows, and what still needs verification.')+`<div class="prose"><h2>Content standards</h2><p>Articles cite the documentation used for each summary. They describe general mod behavior. The modpack release, installed mod versions, configuration files, and custom recipes have not been provided.</p><h2>Texture catalog</h2><p>The catalog indexes local PNG files with recognized filename prefixes. Labels are derived from filenames. Model parts and animation frames are included. The catalog makes no claim that each texture corresponds to an obtainable item.</p><h2>Corrections made</h2><p>Removed unsupported crafting grids, equipment abilities, rarity tiers, boss statistics, and a mandatory progression order. Removed invented installed versions and dependency lists. Corrected the Netherite Upgrade Smithing Template omission. Removed the misleading “complete” and “verified items” claims.</p><h2>Contributing</h2><p>Shared article content is maintained in <code>scripts/articles.js</code>. Include a primary source, the relevant game/mod version, and a review date when adding facts. Personal page notes are editable here and stored locally; there is no shared account or server editor.</p><h2>To verify this pack</h2><p>Supply its manifest, exact mod JAR versions, configuration files, and recipe changes from datapacks or scripts. Compare any recipe guide with the running game. A mod project’s latest page is not proof of behavior in an older pack.</p><h2>Source index</h2><div class="sources">${[...new Map(articles.flatMap(a=>a.sources).map(s=>[s[1],s])).values()].map(([name,url])=>external(url,name)).join('')}</div></div>`;
  }else notFound();
  document.title=(main.querySelector('h1')?.textContent||'Wiki')+' | Modpack Field Guide';
  search.value=path==='search'?(params.get('q')||''):'';
  if(params.has('section'))document.getElementById('section-'+params.get('section'))?.scrollIntoView();else window.scrollTo(0,0);
}
function notFound(){main.innerHTML=heading('Page not found','The link may be outdated or the page may have moved.')+link('guides','Browse wiki articles','button');}
document.querySelector('#search-form').addEventListener('submit',e=>{e.preventDefault();go('search?'+new URLSearchParams({q:search.value.trim()}));});
document.querySelector('.skip').addEventListener('click',e=>{e.preventDefault();main.focus();main.scrollIntoView();});
document.querySelector('#menu').addEventListener('click',()=>{const open=document.querySelector('#sidebar').classList.toggle('open');document.querySelector('#menu').setAttribute('aria-expanded',String(open));});
main.addEventListener('submit',e=>{if(e.target.id==='catalog-form'){e.preventDefault();go('catalog?'+new URLSearchParams(new FormData(e.target)));}});
main.addEventListener('click',e=>{
  const b=e.target.closest('[data-bookmark]');
  if(b){const key=b.dataset.bookmark;saved.bookmarks=saved.bookmarks.includes(key)?saved.bookmarks.filter(x=>x!==key):[...saved.bookmarks,key];persist();if(route().path==='bookmarks')render();else{b.textContent=saved.bookmarks.includes(key)?'Remove bookmark':'Bookmark page';b.setAttribute('aria-pressed',String(saved.bookmarks.includes(key)));}}
  if(e.target.closest('[data-print]'))window.print();
  if(e.target.closest('[data-reset]')&&confirm('Reset your checklist progress?')){saved.checks=[];persist();checklist();}
  if(e.target.closest('[data-export]')){const url=URL.createObjectURL(new Blob([JSON.stringify(saved,null,2)],{type:'application/json'}));const a=document.createElement('a');a.href=url;a.download='field-guide-backup.json';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);}
});
main.addEventListener('input',e=>{if(e.target.matches('[data-note]')){saved.notes[e.target.dataset.note]=e.target.value;const ok=persist();document.querySelector('#note-status').textContent=ok?'Saved in this browser.':'Saved for this session only. Export a backup to keep it.';}});
main.addEventListener('change',async e=>{
  if(e.target.matches('[data-check]')){const key=e.target.dataset.check;saved.checks=saved.checks.filter(x=>x!==key);if(e.target.checked)saved.checks.push(key);persist();const count=tasks.filter(([id])=>saved.checks.includes(id)).length;document.querySelector('progress').value=count;document.querySelector('#progress-label').textContent=`${count} of ${tasks.length} complete`;}
  if(e.target.id==='import'){
    try{
      const file=e.target.files[0];if(!file)return;if(file.size>2000000)throw Error('File exceeds the 2 MB limit.');
      const data=JSON.parse(await file.text());
      if(!data||!Array.isArray(data.bookmarks)||!Array.isArray(data.checks)||!data.notes||typeof data.notes!=='object'||Array.isArray(data.notes))throw Error('Invalid backup format.');
      const valid=key=>typeof key==='string'&&(articles.some(a=>key==='article/'+a.id)||mods.some(m=>key==='mod/'+m.id)||catalog.some(x=>key==='texture/'+encodeURIComponent(x.id)));
      if(!data.bookmarks.every(valid)||!data.checks.every(x=>tasks.some(([id])=>x===id))||!Object.entries(data.notes).every(([k,v])=>valid(k)&&typeof v==='string'&&v.length<=20000))throw Error('Backup contains unknown pages or invalid values.');
      saved.bookmarks=[...new Set([...saved.bookmarks,...data.bookmarks])];saved.checks=[...new Set([...saved.checks,...data.checks])];Object.assign(saved.notes,data.notes);const ok=persist();render();document.querySelector('#status').textContent=ok?'Backup imported.':'Backup imported for this session only; browser storage is unavailable.';
    }catch(error){document.querySelector('#status').textContent='Import failed: '+error.message;}
  }
});
document.addEventListener('keydown',e=>{if(e.key==='/'&&!e.ctrlKey&&!e.metaKey&&!e.altKey&&!e.target.closest('input,textarea,select,[contenteditable]')){e.preventDefault();search.focus();}});
window.addEventListener('hashchange',()=>{render();main.focus({preventScroll:true});});
render();
