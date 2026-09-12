async () => {
  const results=[];
  const assert=(condition,message)=>{if(!condition)throw Error(message);results.push(message);};
  const original=JSON.stringify(saved);
  const originalStorage=localStorage.getItem(storageKey);
  const navigate=async hash=>{location.hash=hash;await new Promise(r=>setTimeout(r,40));};
  try{
    for(const page of ['home','guides','catalog','mods','bookmarks','checklist','about']){
      await navigate(page);assert(!!document.querySelector('h1')&&!main.textContent.includes('Page not found'),'Navigation: '+page);
    }
    for(const a of articles){await navigate('article/'+a.id);assert(main.querySelector('h1').textContent===a.title,'Article: '+a.id);}
    await navigate('article/netherite');
    assert(main.textContent.includes('Smithing Template'),'Netherite template correction is visible');
    const button=main.querySelector('[data-bookmark]');button.click();
    assert(button.getAttribute('aria-pressed')===String(saved.bookmarks.includes('article/netherite')),'Bookmark state updates');
    const note=main.querySelector('textarea');note.value='<img src=x onerror=alert(1)> test';note.dispatchEvent(new Event('input',{bubbles:true}));
    await navigate('home');await navigate('article/netherite');
    assert(main.querySelector('textarea').value==='<img src=x onerror=alert(1)> test'&&!main.querySelector('textarea img'),'Notes persist and remain plain text');
    await navigate('checklist');const check=main.querySelector('[data-check]');check.click();
    assert(Number(main.querySelector('progress').value)===tasks.filter(([id])=>saved.checks.includes(id)).length,'Checklist updates progress');
    await navigate('catalog?q=sword+%40minecraft+-netherite');
    assert(main.querySelectorAll('.texture').length>0&&[...main.querySelectorAll('.texture')].every(x=>x.textContent.includes('minecraft')&&!x.textContent.includes('netherite')),'Combined catalog search and exclusions');
    await navigate('catalog?page=999999');assert(main.querySelectorAll('.texture').length>0,'Pagination clamps oversized page');
    await navigate('catalog?q=zzzznonexistent');assert(main.textContent.includes('No matching textures'),'Catalog empty state');
    await navigate('catalog');main.querySelector('.texture').click();await new Promise(r=>setTimeout(r,40));assert(main.textContent.includes('not verified'),'Texture detail communicates uncertainty');
    await navigate('search?q=netherite');assert(main.querySelector('.card')?.textContent.includes('Netherite'),'Article search');
    await navigate('search?q=%3Cimg+src%3Dx+onerror%3Dalert(1)%3E');assert(!main.querySelector('img'),'Search is escaped');
    await navigate('texture/%broken');assert(main.textContent.includes('Page not found'),'Malformed detail link handled');
    await navigate('missing');assert(main.textContent.includes('Page not found'),'Unknown route handled');
    await navigate('bookmarks');
    const input=main.querySelector('#import');const transfer=new DataTransfer();transfer.items.add(new File(['{"bookmarks":false}'],'invalid.json',{type:'application/json'}));input.files=transfer.files;input.dispatchEvent(new Event('change',{bubbles:true}));await new Promise(r=>setTimeout(r,80));assert(document.querySelector('#status').textContent.includes('Import failed'),'Invalid import rejected');
    await navigate('home');search.value='Ponder';document.querySelector('#search-form').requestSubmit();await new Promise(r=>setTimeout(r,40));assert(main.textContent.includes('Create: learning'),'Search form routes to results');
    assert(JSON.parse(localStorage.getItem(storageKey)).notes['article/netherite'].includes('test'),'Saved data written to browser storage');
    return results;
  }finally{
    saved=JSON.parse(original);if(originalStorage===null)localStorage.removeItem(storageKey);else localStorage.setItem(storageKey,originalStorage);
    document.querySelector('#status').textContent='';await navigate('home');
  }
}
