async () => {
  const results=[];
  const assert=(ok,message)=>{if(!ok)throw Error(message);results.push(message);};
  const wait=()=>new Promise(r=>setTimeout(r,60));
  const navigate=async p=>{location.hash=p;await wait();};
  const old=JSON.stringify(saved),stored=localStorage.getItem(storageKey);
  try{
    for(const page of ['home','guides','catalog','article/recipes','mods','checklist','about']){
      await navigate(page);assert(document.documentElement.scrollWidth<=innerWidth,'No horizontal overflow: '+page);
    }
    document.querySelector('#menu').click();assert(document.querySelector('#menu').getAttribute('aria-expanded')==='true','Mobile menu opens');
    document.querySelector('[data-nav=home]').click();await wait();assert(document.querySelector('#menu').getAttribute('aria-expanded')==='false','Mobile navigation closes menu');
    const previous=location.hash;document.querySelector('.skip').click();assert(location.hash===previous&&document.activeElement===main,'Skip link focuses content without routing');
    await navigate('article/create');await navigate('article/aether');history.back();await wait();assert(main.querySelector('h1').textContent.includes('Create'),'Browser back restores article');history.forward();await wait();assert(main.querySelector('h1').textContent.includes('Aether'),'Browser forward restores article');
    await navigate('jei-view');assert(main.querySelector('h1').textContent==='Texture catalog','Legacy navigation link supported');
    await navigate('bookmarks');
    const payload={bookmarks:['article/recipes'],checks:['setup'],notes:{'article/recipes':'Imported test note'}};
    const transfer=new DataTransfer();transfer.items.add(new File([JSON.stringify(payload)],'backup.json',{type:'application/json'}));
    const input=main.querySelector('#import');input.files=transfer.files;input.dispatchEvent(new Event('change',{bubbles:true}));await wait();
    assert(saved.bookmarks.includes('article/recipes')&&saved.notes['article/recipes']==='Imported test note'&&saved.checks.includes('setup'),'Valid backup import restores all data types');
    const originalCreate=URL.createObjectURL;const originalClick=HTMLAnchorElement.prototype.click;let exported;
    try{URL.createObjectURL=blob=>{exported=blob;return originalCreate(blob);};HTMLAnchorElement.prototype.click=function(){};main.querySelector('[data-export]').click();assert(JSON.parse(await exported.text()).notes['article/recipes']==='Imported test note','Export includes saved notes');}
    finally{URL.createObjectURL=originalCreate;HTMLAnchorElement.prototype.click=originalClick;}
    await navigate('article/recipes');const setItem=Storage.prototype.setItem;
    try{Storage.prototype.setItem=function(){throw Error('Storage unavailable');};const note=main.querySelector('textarea');note.value='Session only';note.dispatchEvent(new Event('input',{bubbles:true}));assert(document.querySelector('#status').textContent.includes('unavailable'),'Unavailable storage degrades without crashing');}
    finally{Storage.prototype.setItem=setItem;}
    return results;
  }finally{saved=JSON.parse(old);if(stored===null)localStorage.removeItem(storageKey);else localStorage.setItem(storageKey,stored);document.querySelector('#status').textContent='';await navigate('home');}
}
