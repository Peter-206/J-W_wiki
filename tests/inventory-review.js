/* Temporary visual review sheet, rendered only in the runner's dedicated tab. */
module.exports = async function inventoryReview() {
  const entries = Object.values(INVENTORY_ICON_DATA.items);
  const namespaces = [...new Set(entries.map(x => x.id.split(':')[0]))].sort();
  const esc = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const rows = namespaces.map(ns => {
    const group = entries.filter(x => x.id.startsWith(ns + ':'));
    const accepted = group.filter(x => x.status === 'verified');
    const chosen = new Set();
    for (const pattern of [/sword|knife|axe|lance/, /helmet|chestplate|boots|gloves/, /ingot|nugget|shard/]) {
      const item = accepted.find(x => pattern.test(x.id));
      if (item) chosen.add(item);
    }
    for (const item of accepted) { if (chosen.size >= 4) break; chosen.add(item); }
    const unavailable = group.find(x => x.identityVerified && x.status !== 'verified') || group.find(x => x.status !== 'verified');
    if (unavailable) chosen.add(unavailable);
    return `<section><h2>${esc(ns)}</h2>${[...chosen].map(x => `<figure>${ItemIcons.render(x.id,x.name)}<figcaption>${esc(x.name)}<small>${x.status}</small></figcaption></figure>`).join('')}</section>`;
  });
  document.body.innerHTML = `<style>body{margin:0;padding:20px;background:#142018;color:#eee;font:14px sans-serif}h1{margin:0 0 16px}section{display:flex;align-items:center;gap:12px;min-height:90px;border-bottom:1px solid #48564a}h2{width:190px;font-size:16px}figure{width:180px;margin:8px;text-align:center}figure .inventory-icon{width:40px;height:40px}figcaption{margin-top:5px;font-size:12px}small{display:block;color:#b3c4b7;font-size:10px;margin-top:3px}</style><h1>Inventory icon visual review</h1>${rows.join('')}`;
  for (const image of document.images) image.loading = 'eager';
  await Promise.all([...document.images].map(image => image.decode().catch(() => {})));
  return { namespaces: namespaces.length, samples: document.querySelectorAll('figure').length };
};
