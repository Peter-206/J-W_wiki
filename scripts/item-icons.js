/* Shared, offline inventory imagery. Unknown items never borrow another icon. */
(function (root) {
  'use strict';
  const items = root.INVENTORY_ICON_DATA?.items || {};
  const escape = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;'}[c]));
  function get(id) { return Object.hasOwn(items, id) ? items[id] : null; }
  function placeholder(name, className = '', reason = 'No verified inventory icon available') {
    return `<span class="inventory-icon icon-unavailable ${escape(className)}" role="img" aria-label="${escape(name)}: Icon unavailable" title="Icon unavailable: ${escape(reason)}"><span aria-hidden="true">?</span><span class="icon-missing-label">Icon unavailable</span></span>`;
  }
  function render(id, name = id, className = '') {
    const item = get(id);
    if (!item) return placeholder(name, className);
    // The restored wiki also ships a large set of extracted item textures under
    // assets/items.  Many restored database rows predate the smaller verified
    // inventory catalog, so use their item-id filename before showing the
    // unavailable marker.  The global error handler below handles IDs for which
    // no extracted texture exists.
    const fallbackFile = `assets/items/${String(id).replace(':', '_')}.png`;
    const file = item?.status === 'verified' ? item.file : fallbackFile;
    return `<img class="inventory-icon ${escape(className)}" data-inventory-icon="${escape(id)}" src="${escape(file)}" alt="${escape(name)}" width="32" height="32" loading="lazy">`;
  }
  root.ItemIcons = Object.freeze({ get, render, placeholder });
  if (root.addEventListener) root.addEventListener('error', event => {
    const target = event.target;
    if (target?.tagName !== 'IMG' || !target.hasAttribute('data-inventory-icon')) return;
    const holder = root.document.createElement('span');
    holder.innerHTML = placeholder(target.alt, target.className, 'Inventory icon failed to load');
    target.replaceWith(holder.firstElementChild);
  }, true);
})(typeof window === 'undefined' ? globalThis : window);
