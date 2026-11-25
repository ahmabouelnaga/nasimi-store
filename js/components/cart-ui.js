/* CartItem, CheckoutForm, CartDrawer. */
(function (NS) {
  'use strict';
  var h = NS.h, t = NS.t, C = NS.C, Cart = NS.Cart, state = NS.state;

  C.CartItem = function (i, rerender) {
    var p = NS.byId(i.id), img = i.image || (p && p.image) || '';
    var thumb = h('div', { class: 'citem-img' });
    if (img) { var im = h('img', { a: { src: img, alt: '', loading: 'lazy' } }); im.onerror = function () { NS.clear(thumb); thumb.textContent = (i.brand[0] || 'N'); }; thumb.appendChild(im); } else thumb.textContent = (i.brand[0] || 'N');
    var meta = i.brand + (i.specs ? ' · ' + Cart.fmtSpecs(i, false) : '');
    var qty = h('div', { class: 'qty' },
      h('button', { a: { type: 'button', 'aria-label': '-' }, text: '−', onclick: function () { Cart.setQty(i, i.qty - 1); rerender(); } }),
      h('span', { text: String(i.qty) }),
      h('button', { a: { type: 'button', 'aria-label': '+' }, text: '+', onclick: function () { Cart.setQty(i, i.qty + 1); rerender(); } }));
    var acts = h('div', null);
    if (i.specs && p) acts.appendChild(h('button', { class: 'link-btn neutral', text: t('edit'), a: { type: 'button' }, onclick: function () { C.closeCart(); location.hash = '#/product/' + encodeURIComponent(i.id) + '?edit=' + encodeURIComponent(i.key); } }));
    acts.appendChild(h('button', { class: 'link-btn', text: t('remove'), a: { type: 'button' }, onclick: function () { Cart.remove(i); rerender(); } }));
    return h('div', { class: 'citem' }, thumb,
      h('div', null,
        h('div', { class: 'citem-title', text: i.title }),
        h('div', { class: 'citem-meta', text: meta }),
        h('div', { class: 'citem-row' }, qty, h('strong', { text: NS.fmtPrice((i.price || 0) * i.qty) }), acts)));
  };

  C.CheckoutForm = function (onBad) {
    var name = C.Input({ id: 'co-name', label: t('phName'), autocomplete: 'name' });
    var phone = C.Input({ id: 'co-phone', label: t('phPhone'), type: 'tel', autocomplete: 'tel', inputmode: 'tel' });
    var gov = C.Input({ id: 'co-gov', label: t('phGov'), tag: 'select', placeholder: t('chooseGov'), options: t('govs') });
    var addr = C.Input({ id: 'co-addr', label: t('phAddress'), tag: 'textarea', autocomplete: 'street-address' });
    var notes = C.Input({ id: 'co-notes', label: t('phNotes'), tag: 'textarea' });
    var saved = {}; try { saved = JSON.parse(localStorage.getItem('nasimi_cust') || '{}'); } catch (e) {}
    if (saved.name) name.input.value = saved.name;
    if (saved.phone) phone.input.value = saved.phone;
    if (saved.address) addr.input.value = saved.address;
    if (saved.govIdx !== undefined && saved.govIdx !== '') gov.input.selectedIndex = Number(saved.govIdx) + 1;
    var btn = C.Button({ text: t('confirmOrder'), kind: 'wa', icon: 'wa', block: true, type: 'button' });
    var form = h('form', { class: 'co-form', a: { novalidate: 'novalidate' } },
      h('h3', { text: t('checkoutTitle') }), name, phone, gov, addr, notes,
      h('p', { class: 'co-note', text: t('cartNote') }), btn);
    form.onsubmit = function (e) { e.preventDefault(); };
    btn.onclick = function () {
      if (!state.cart.length) return;
      var bad = Cart.dropInvalid();
      if (bad.length) { onBad(bad); return; }
      var ph = phone.input.value.replace(/[\s\-+()]/g, '').replace(/[٠-٩]/g, function (d) { return d.charCodeAt(0) - 1632; });
      var ok = true, first = null;
      function chk(f, cond, msg) { f.setError(cond ? '' : msg); if (!cond) { ok = false; if (!first) first = f.input; } }
      chk(name, name.input.value.trim().length >= 2, t('errName'));
      chk(phone, /^(\+?20|0)?1[0125]\d{8}$/.test(ph), t('errPhone'));
      chk(gov, !!gov.input.value, t('errGov'));
      chk(addr, addr.input.value.trim().length >= 6, t('errAddress'));
      if (!ok) { first.focus(); return; }
      try { localStorage.setItem('nasimi_cust', JSON.stringify({ name: name.input.value.trim(), phone: phone.input.value.trim(), address: addr.input.value.trim(), govIdx: gov.input.selectedIndex - 1 })); } catch (e) {}
      btn.classList.add('is-loading');
      window.open(Cart.whatsappUrl({ name: name.input.value.trim(), phone: ph, gov: gov.input.value, address: addr.input.value.trim(), notes: notes.input.value.trim() }), '_blank');
      setTimeout(function () { btn.classList.remove('is-loading'); }, 900);
    };
    return form;
  };

  var drawer = null, notice = null;
  C.closeCart = function () { if (drawer) { drawer.remove(); drawer = null; } C.closeOverlay(); };
  C.openCart = function (badItems) {
    C.closeCart();
    C.openOverlay(C.closeCart);
    drawer = h('aside', { class: 'sheet cart-drawer', a: { role: 'dialog', 'aria-modal': 'true', 'aria-label': t('cartTitle') } });
    document.body.appendChild(drawer);
    function render() {
      NS.clear(drawer);
      var body = h('div', { class: 'sheet-body' });
      drawer.appendChild(h('div', { class: 'sheet-head' }, h('h2', { text: t('cartTitle'), style: 'font-size:20px' }),
        h('button', { class: 'icon-btn', a: { type: 'button', 'aria-label': t('close') }, onclick: C.closeCart }, NS.icon('close'))));
      drawer.appendChild(body);
      if (notice) { var n = h('div', { class: 'cart-notice' }, h('div', { text: t('cartInvalid') })); notice.forEach(function (x) { n.appendChild(h('div', { class: 'cn-title', text: x })); }); body.appendChild(n); }
      if (!state.cart.length) {
        body.appendChild(h('div', { class: 'state' }, NS.icon('cart'), h('h3', { text: t('cartEmpty') }), h('p', { text: t('cartEmptyD') }),
          C.Button({ text: t('shopNow'), kind: 'primary', href: '#/shop/all', onclick: C.closeCart })));
        return;
      }
      var items = h('div', { class: 'cart-items' });
      state.cart.forEach(function (i) { items.appendChild(C.CartItem(i, render)); });
      body.appendChild(items);
      body.appendChild(h('div', { class: 'cart-total', style: 'margin-top:16px' }, h('span', { text: t('total') }), h('span', { text: NS.fmtPrice(Cart.total()) })));
      body.appendChild(C.CheckoutForm(function (bad) { notice = bad.map(function (x) { return x.title; }); render(); }));
    }
    notice = badItems ? badItems.map(function (x) { return x.title; }) : null;
    render();
    drawer.tabIndex = -1; drawer.focus();
  };
  NS.toastAdded = function () {
    C.Toast(t('added'), [
      { text: t('viewCart'), kind: 'secondary', onclick: function () { C.openCart(); } },
      { text: t('keepShopping'), kind: 'ghost', onclick: function () {} }
    ]);
  };
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') { C.closeCart(); if (NS.closeMenu) NS.closeMenu(); } });
})(window.NS);
