/* Pages: Home, Shop (listing), Brands, Product, About, NotFound. Each returns a DOM node. */
(function (NS) {
  'use strict';
  var h = NS.h, t = NS.t, C = NS.C, P = NS.P, state = NS.state;
  var CATS = [
    { key: 'clear', name: 'catClear', desc: 'catClearD', icon: 'eye', href: '#/shop/clear' },
    { key: 'colored', name: 'catColored', desc: 'catColoredD', icon: 'palette', href: '#/shop/colored' },
    { key: 'solutions', name: 'catSolutions', desc: 'catSolutionsD', icon: 'drop', href: '#/shop/solutions' },
    { key: 'accessories', name: 'catAccessories', desc: 'catAccessoriesD', icon: 'box', href: '#/shop/accessories' }
  ];
  var SHOP_TITLE = { all: 'allLenses', lenses: 'navLenses', clear: 'catClear', colored: 'catColored', solutions: 'catSolutions', accessories: 'catAccessories' };
  var SHOP_DESC = { all: 'heroSub', lenses: 'heroSub', clear: 'catClearD', colored: 'catColoredD', solutions: 'catSolutionsD', accessories: 'catAccessoriesD' };
  function inCat(p, key) {
    if (key === 'all') return true;
    if (key === 'lenses') return p.category === 'Colored Lenses' || p.category === 'Clear Lenses';
    return NS.typeKey(p) === key;
  }
  function crumbs(items) {
    var b = h('nav', { class: 'breadcrumb', a: { 'aria-label': 'breadcrumb' } });
    items.forEach(function (it, i) {
      if (i) b.appendChild(h('span', { text: '/' }));
      b.appendChild(it.href ? h('a', { text: it.text, a: { href: it.href } }) : h('span', { text: it.text, a: { 'aria-current': 'page' } }));
    });
    return b;
  }
  function section(titleKey, linkHref, body, id) {
    return h('section', { class: 'section container', id: id },
      h('div', { class: 'section-head' }, h('h2', { text: t(titleKey) }), linkHref ? h('a', { text: t('viewAll') + (state.lang === 'ar' ? ' ←' : ' →'), a: { href: linkHref } }) : null), body);
  }
  function stateBox(icon, title, desc, btn) { return h('div', { class: 'state' }, NS.icon(icon), h('h3', { text: title }), h('p', { text: desc }), btn); }
  function numId(p) { return Number(p.id) || 0; }

  /* ---------- Home ---------- */
  var BEST_TITLES = ['1-DAY ACUVUE OASYS', 'Acuvue Oasys', 'Acuvue Moist', 'Acuvue Oasys Toric'];
  P.home = function () {
    var root = h('div');
    root.appendChild(C.Hero());
    root.appendChild(section('shopByCat', null, h('div', { class: 'cat-grid' }, CATS.map(C.CategoryCard))));
    var vis = NS.visible(), picks = [];
    BEST_TITLES.forEach(function (ti) { var p = vis.filter(function (x) { return x.title === ti; })[0]; if (p) picks.push(p); });
    vis.forEach(function (p) { if (picks.length < 4 && p.category === 'Colored Lenses' && (p.brand === 'Bella' || p.brand === 'Desio') && picks.indexOf(p) < 0) picks.push(p); });
    if (picks.length) root.appendChild(section('bestTitle', '#/shop/all', C.ProductGrid(picks)));
    var fresh = vis.filter(function (p) { return p.category !== 'Solutions & Accessories'; }).sort(function (a, b) { return numId(b) - numId(a); }).slice(0, 8);
    if (fresh.length) root.appendChild(section('newTitle', '#/shop/all?sort=new', C.ProductGrid(fresh, { cardOpts: function () { return { isNew: true }; } })));
    var bg = h('div', { class: 'brand-grid' });
    NS.brandList().forEach(function (b) {
      bg.appendChild(h('a', { class: 'card bcard', a: { href: '#/brand/' + encodeURIComponent(b.name) } }, h('span', { class: 'bcard-letter', text: b.name[0] || 'N' }), h('span', { class: 'bcard-name', text: b.name }), h('span', { class: 'caption', text: b.count + ' ' + t('productsCount') })));
    });
    root.appendChild(section('brandsTitle', '#/brands', bg));
    var why = [['shield', 'why1', 'why1d'], ['tap', 'why2', 'why2d'], ['chat', 'why3', 'why3d'], ['sparkle', 'why4', 'why4d']];
    root.appendChild(section('whyTitle', null, h('div', { class: 'why-grid' }, why.map(function (w) {
      return h('div', { class: 'card why-item' }, h('span', { class: 'ccard-icon' }, NS.icon(w[0])), h('div', null, h('h3', { text: t(w[1]) }), h('p', { text: t(w[2]) })));
    }))));
    root.appendChild(P.aboutBlock());
    NS.setMeta(t('metaHome'), t('metaHomeD'));
    return root;
  };
  P.aboutBlock = function () {
    return h('section', { class: 'container about', id: 'about' }, h('img', { a: { src: 'monogram.svg', alt: '', 'aria-hidden': 'true', loading: 'lazy' } }), h('div', null, h('h2', { text: t('aboutTitle') }), h('p', { text: t('aboutText') })));
  };
  P.about = function () {
    var root = h('div', { class: 'container' }, crumbs([{ text: t('home'), href: '#/' }, { text: t('navAbout') }]), P.aboutBlock());
    root.appendChild(h('div', { style: 'padding-bottom:32px' }, C.Button({ text: t('askWa'), kind: 'wa', icon: 'wa', href: 'https://wa.me/' + NS.CFG.whatsappNumber })));
    NS.setMeta(t('navAbout') + ' | NASIMI', t('aboutText'));
    return root;
  };

  /* ---------- Brands ---------- */
  P.brands = function () {
    var bg = h('div', { class: 'brand-grid' });
    NS.brandList().forEach(function (b) { bg.appendChild(h('a', { class: 'card bcard', a: { href: '#/brand/' + encodeURIComponent(b.name) } }, h('span', { class: 'bcard-letter', text: b.name[0] || 'N' }), h('span', { class: 'bcard-name', text: b.name }), h('span', { class: 'caption', text: b.count + ' ' + t('productsCount') }))); });
    NS.setMeta(t('brandsTitle') + ' | NASIMI', t('metaHomeD'));
    return h('div', { class: 'container' }, crumbs([{ text: t('home'), href: '#/' }, { text: t('navBrands') }]), h('div', { class: 'page-head' }, h('h1', { text: t('brandsTitle') })), bg);
  };

  /* ---------- Shop / listing (also brand pages) ---------- */
  function qs(r) {
    var o = {}; Object.keys(r.params).forEach(function (k) { if (r.params[k]) o[k] = r.params[k]; });
    return Object.keys(o).map(function (k) { return k + '=' + encodeURIComponent(o[k]); }).join('&');
  }
  P.shop = function (r) {
    var isBrand = r.name === 'brand';
    var key = isBrand ? (r.params.cat || 'all') : r.key, brandName = isBrand ? r.id : '';
    var pr = r.params;
    var base = NS.visible().filter(function (p) { return (!isBrand || p.brand === brandName) && inCat(p, key); });
    var q = (pr.q || '').toLowerCase();
    function matches(p, skip) {
      if (q) { var hay = (p.title + ' ' + p.brand + ' ' + p.colors.join(' ') + ' ' + p.colors.map(function (c) { return state.lang === 'ar' ? (t('colorNames')[c] || '') : ''; }).join(' ') + ' ' + p.category + ' ' + (p.duration || '')).toLowerCase(); if (q.split(/\s+/).some(function (w) { return w && hay.indexOf(w) < 0; })) return false; }
      if (skip !== 'brand' && pr.brand && p.brand !== pr.brand) return false;
      if (skip !== 'color' && pr.color && p.colors.indexOf(pr.color) < 0) return false;
      if (skip !== 'dur' && pr.dur && p.duration !== pr.dur) return false;
      if (pr.min && (p.price || 0) < Number(pr.min)) return false;
      if (pr.max && (p.price || 0) > Number(pr.max)) return false;
      return true;
    }
    var list = base.filter(function (p) { return matches(p); });
    var sort = pr.sort || '';
    if (sort === 'price-asc') list.sort(function (a, b) { return (a.price || 0) - (b.price || 0); });
    else if (sort === 'price-desc') list.sort(function (a, b) { return (b.price || 0) - (a.price || 0); });
    else if (sort === 'new') list.sort(function (a, b) { return numId(b) - numId(a); });

    function go(patch) {
      var np = Object.assign({}, pr, patch);
      var s = Object.keys(np).filter(function (k) { return np[k]; }).map(function (k) { return k + '=' + encodeURIComponent(np[k]); }).join('&');
      var path = isBrand ? '#/brand/' + encodeURIComponent(brandName) : '#/shop/' + key;
      location.replace(path + (s ? '?' + s : ''));
    }
    var optBrands = [], optColors = [], optDur = [];
    base.forEach(function (p) {
      if (matches(p, 'brand') && optBrands.indexOf(p.brand) < 0) optBrands.push(p.brand);
      if (matches(p, 'color')) p.colors.forEach(function (c) { if (optColors.indexOf(c) < 0) optColors.push(c); });
      if (matches(p, 'dur') && p.duration && optDur.indexOf(p.duration) < 0) optDur.push(p.duration);
    });
    optBrands.sort(); optColors.sort(function (a, b) { return NS.COLOR_ORDER.indexOf(a) - NS.COLOR_ORDER.indexOf(b); });
    var fp = C.FilterPanel({ filters: { brand: pr.brand || '', color: pr.color || '', dur: pr.dur || '', min: pr.min || '', max: pr.max || '' }, brands: isBrand ? [] : optBrands, colors: optColors, durations: optDur,
      onChange: function (f) { go({ brand: f.brand, color: f.color, dur: f.dur, min: f.min, max: f.max }); } });

    var title = isBrand ? brandName : (pr.q ? '“' + pr.q + '”' : t(SHOP_TITLE[key] || 'allLenses'));
    var bc = isBrand ? [{ text: t('home'), href: '#/' }, { text: t('navBrands'), href: '#/brands' }, { text: brandName }] : [{ text: t('home'), href: '#/' }, { text: t(SHOP_TITLE[key] || 'allLenses') }];
    var sortSel = h('select', { class: 'select', a: { 'aria-label': t('sort') }, onchange: function (e) { go({ sort: e.target.value }); } },
      [['', 'sortDefault'], ['price-asc', 'sortPriceAsc'], ['price-desc', 'sortPriceDesc'], ['new', 'sortNew']].map(function (o) { return h('option', { value: o[0], text: t(o[1]), selected: sort === o[0] }); }));
    var tabs = null;
    if (isBrand) {
      var cats = ['all'].concat(['clear', 'colored', 'solutions', 'accessories'].filter(function (c) { return NS.visible().some(function (p) { return p.brand === brandName && inCat(p, c); }); }));
      if (cats.length > 2) tabs = h('div', { class: 'cat-tabs', style: 'margin-bottom:12px' }, cats.map(function (c) { return h('button', { class: 'chip', text: c === 'all' ? t('all') : t(SHOP_TITLE[c]), a: { type: 'button', 'aria-pressed': key === c ? 'true' : 'false' }, onclick: function () { go({ cat: c === 'all' ? '' : c }); } }); }));
    }
    var grid;
    if (!list.length) grid = h('div', { class: 'product-grid' }, stateBox('search', t('emptyTitle'), t('emptyD'), C.Button({ text: t('resetFilters'), kind: 'primary', href: isBrand ? '#/brand/' + encodeURIComponent(brandName) : '#/shop/' + key })));
    else grid = C.ProductGrid(list);
    var filtBtn = C.Button({ text: t('filter'), kind: 'ghost', size: 'sm', onclick: fp.open }); filtBtn.classList.add('filter-btn');
    var root = h('div', { class: 'container' },
      crumbs(bc),
      h('div', { class: 'page-head' }, h('h1', { text: title }), isBrand ? null : h('p', { text: t(SHOP_DESC[key] || 'heroSub') })),
      tabs,
      h('div', { class: 'toolbar' }, h('span', { class: 'caption', text: list.length + ' ' + t('productsCount'), a: { 'aria-live': 'polite' } }), h('div', { class: 'toolbar-r' }, filtBtn, sortSel)),
      h('div', { class: 'listing' }, fp.el, h('div', null, grid)));
    NS.setMeta(title.replace(/[“”]/g, '') + ' | NASIMI', t(SHOP_DESC[key] || 'heroSub'));
    return root;
  };

  /* ---------- Product page ---------- */
  P.product = function (r) {
    var p = NS.byId(r.id);
    if (!p || !p.stock) {
      NS.setMeta(t('notFoundTitle') + ' | NASIMI', '');
      return h('div', { class: 'container' }, stateBox('warn', t('notFoundTitle'), t('notFoundD'), C.Button({ text: t('backShop'), kind: 'primary', href: '#/shop/all' })));
    }
    var edit = r.params.edit ? state.cart.filter(function (i) { return i.key === r.params.edit; })[0] : null;
    var type = t(p.category) || p.category;
    var opts = C.ProductOptions(p, edit);
    function add(buy) {
      var specs = opts.getSpecs(); if (specs === false) return;
      if (edit) { NS.Cart.remove(edit); edit = null; }
      NS.Cart.add(p, opts.qty(), specs);
      if (buy) C.openCart(); else NS.toastAdded();
    }
    var actions = h('div', { class: 'pdp-actions pdp-sticky' }, C.Button({ text: t('addToCart'), kind: 'primary', icon: 'cart', block: true, onclick: function () { add(false); } }),
      C.Button({ text: t('buyNow'), kind: 'secondary', block: true, onclick: function () { add(true); } }));
    var spec = h('table', { class: 'spec-table' });
    function row(k, v) { if (v) spec.appendChild(h('tr', null, h('th', { text: t(k) }), h('td', { text: v }))); }
    row('spBrand', p.brand); row('spType', type);
    row('spDuration', p.duration === '1 Day' ? t('daily') : p.duration === 'Monthly' ? t('monthly') : p.duration === 'Quarterly' ? t('quarterly') : '');
    row('spColors', p.colors.map(function (c) { return t('colorNames')[c] || c; }).join(' / '));
    row('spPower', NS.isToric(p) ? 'Toric (SPH / CYL / AX)' : p.power ? t('spPowerYes') : t('spPowerNo'));
    var rel = NS.visible().filter(function (x) { return x !== p && x.brand === p.brand && x.category === p.category; }).slice(0, 4);
    if (rel.length < 4) NS.visible().forEach(function (x) { if (rel.length < 4 && x !== p && x.category === p.category && rel.indexOf(x) < 0) rel.push(x); });
    var root = h('div', { class: 'container' },
      crumbs([{ text: t('home'), href: '#/' }, { text: t(p.category === 'Colored Lenses' ? 'catColored' : p.category === 'Clear Lenses' ? 'catClear' : 'catSolutions'), href: '#/shop/' + NS.typeKey(p) }, { text: p.title }]),
      h('div', { class: 'pdp' }, C.ProductGallery(p),
        h('div', { class: 'pdp-info' },
          h('div', { class: 'pdp-brand' }, h('a', { text: p.brand, a: { href: '#/brand/' + encodeURIComponent(p.brand) } })),
          h('h1', { text: p.title }), C.Rating(p.rating), h('div', { class: 'pdp-price', text: NS.fmtPrice(p.price) }),
          opts, actions)),
      h('div', { class: 'pdp-more' }, h('h2', { text: t('specs') }), spec));
    if (rel.length) root.appendChild(h('div', { class: 'pdp-more', style: 'padding-bottom:16px' }, h('h2', { text: t('related') }), C.ProductGrid(rel)));
    var ld = { '@context': 'https://schema.org', '@type': 'Product', name: p.title, brand: { '@type': 'Brand', name: p.brand }, category: type,
      offers: { '@type': 'Offer', priceCurrency: 'EGP', price: String(p.price || ''), availability: 'https://schema.org/InStock', url: location.origin + location.pathname + '#/product/' + p.id } };
    if (p.image) ld.image = new URL(p.image, location.href).href;
    NS.setMeta(p.title + ' | ' + p.brand + ' | NASIMI', p.title + ' - ' + p.brand + ' - ' + NS.fmtPrice(p.price), ld);
    return root;
  };
  P.notFound = function () { NS.setMeta('NASIMI', ''); return h('div', { class: 'container' }, stateBox('warn', t('notFoundTitle'), t('notFoundD'), C.Button({ text: t('backShop'), kind: 'primary', href: '#/shop/all' }))); };
  P.loading = function () { return h('div', { class: 'container', style: 'padding-top:24px' }, C.SkeletonGrid(8)); };
  P.error = function (retry) { return h('div', { class: 'container' }, stateBox('warn', t('errTitle'), t('errD'), C.Button({ text: t('retry'), kind: 'primary', onclick: retry }))); };
})(window.NS);
window.NS.P.brand = window.NS.P.shop;
