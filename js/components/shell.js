/* Header, SearchBar, Footer, Hero, CategoryCard, FilterPanel. */
(function (NS) {
  'use strict';
  var h = NS.h, t = NS.t, C = NS.C, state = NS.state;
  var WORDMARK = '<text x="50%" y="46" text-anchor="middle" font-family="Marcellus, serif" font-size="46" letter-spacing="7" fill="currentColor">NASIMI</text><path class="spark spark-1" fill="currentColor" d="M0 -7 L1.8 -1.8 L7 0 L1.8 1.8 L0 7 L-1.8 1.8 L-7 0 L-1.8 -1.8 Z"/><path class="spark spark-2" fill="currentColor" d="M0 -7 L1.8 -1.8 L7 0 L1.8 1.8 L0 7 L-1.8 1.8 L-7 0 L-1.8 -1.8 Z"/>';
  function wordmark() {
    var s = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    s.setAttribute('viewBox', '0 0 330 64'); s.setAttribute('class', 'wordmark'); s.setAttribute('role', 'img'); s.setAttribute('aria-label', 'NASIMI');
    s.innerHTML = WORDMARK; return s;
  }
  var NAV = [['navHome', '#/', 'home'], ['navLenses', '#/shop/lenses', 'lenses'], ['navSolutions', '#/shop/solutions', 'solutions'], ['navAccessories', '#/shop/accessories', 'accessories'], ['navBrands', '#/brands', 'brands'], ['navAbout', '#/about', 'about'], ['navContact', 'https://wa.me/' + NS.CFG.whatsappNumber, 'contact']];

  C.SearchBar = function (value, cls) {
    var inp = h('input', { class: 'input', a: { type: 'search', placeholder: t('searchPh'), 'aria-label': t('search'), enterkeyhint: 'search', autocomplete: 'off', list: 'search-sugg' }, value: value || '' });
    var dl = h('datalist', { id: 'search-sugg' });
    var form = h('form', { class: 'search-form ' + (cls || ''), a: { role: 'search' } }, NS.icon('search'), inp, dl);
    function fill() {
      NS.clear(dl); var q = inp.value.trim().toLowerCase(); if (q.length < 2) return;
      var seen = {}, n = 0;
      NS.visible().forEach(function (p) { if (n < 6 && (p.title.toLowerCase().indexOf(q) >= 0 || p.brand.toLowerCase().indexOf(q) >= 0) && !seen[p.title]) { seen[p.title] = 1; n++; dl.appendChild(h('option', { value: p.title })); } });
    }
    inp.addEventListener('input', fill);
    form.onsubmit = function (e) { e.preventDefault(); location.hash = '#/shop/all?q=' + encodeURIComponent(inp.value.trim()); inp.blur(); };
    return form;
  };

  C.Header = function (route) {
    var active = route.name === 'shop' ? (route.key === 'lenses' || route.key === 'clear' || route.key === 'colored' ? 'lenses' : route.key) : route.name;
    function navLinks() { return NAV.map(function (n) { var ext = n[1].indexOf('http') === 0; return h('a', { text: t(n[0]), a: { href: n[1], target: ext ? '_blank' : null, rel: ext ? 'noopener' : null }, class: active === n[2] ? 'is-active' : '' }); }); }
    var count = h('span', { class: 'badge-count', id: 'cart-count', text: String(NS.Cart.count()) });
    if (!NS.Cart.count()) count.classList.add('hidden');
    var cartBtn = h('button', { class: 'icon-btn', a: { type: 'button', 'aria-label': t('cart') }, onclick: function () { C.openCart(); } }, NS.icon('cart'), count);
    var lang = h('button', { class: 'btn btn-ghost lang-btn desk', a: { type: 'button' }, text: state.lang === 'ar' ? 'English' : 'عربي', onclick: NS.toggleLang });
    var menuBtn = h('button', { class: 'icon-btn menu-btn', a: { type: 'button', 'aria-label': t('menu') }, onclick: NS.openMenu }, NS.icon('menu'));
    var logo = h('a', { class: 'logo', a: { href: '#/', 'aria-label': 'NASIMI' } }, wordmark(), h('span', { class: 'tagline', text: 'CLEAR VISION · BETTER DAYS' }));
    var inner = h('div', { class: 'container header-inner' }, menuBtn, logo, h('nav', { class: 'nav-desktop', a: { 'aria-label': 'main' } }, navLinks()),
      C.SearchBar(route.q || '', 'desk'), h('div', { class: 'header-actions' }, lang, cartBtn));
    var header = h('header', { class: 'site-header' }, inner, h('div', { class: 'mobile-search' }, C.SearchBar(route.q || '', '')));
    header.navLinks = navLinks;
    return header;
  };
  NS.openMenu = function () {
    NS.closeMenu();
    C.openOverlay(NS.closeMenu);
    var sheet = h('div', { class: 'sheet menu-sheet', id: 'menu-sheet', a: { role: 'dialog', 'aria-modal': 'true', 'aria-label': t('menu') } },
      h('div', { class: 'sheet-head' }, h('strong', { text: 'NASIMI', style: 'font-family:var(--f-brand);letter-spacing:4px' }),
        h('button', { class: 'icon-btn', a: { type: 'button', 'aria-label': t('close') }, onclick: NS.closeMenu }, NS.icon('close'))),
      h('nav', { onclick: NS.closeMenu }, NAV.map(function (n) { var ext = n[1].indexOf('http') === 0; return h('a', { text: t(n[0]), a: { href: n[1], target: ext ? '_blank' : null, rel: ext ? 'noopener' : null } }); })),
      h('div', { style: 'padding:16px' }, h('button', { class: 'btn btn-ghost btn-block', a: { type: 'button' }, text: state.lang === 'ar' ? 'English' : 'عربي', onclick: function () { NS.closeMenu(); NS.toggleLang(); } })));
    document.body.appendChild(sheet);
  };
  NS.closeMenu = function () { var m = NS.$('#menu-sheet'); if (m) { m.remove(); if (!NS.$('.cart-drawer')) C.closeOverlay(); } };

  C.Footer = function () {
    var wa = 'https://wa.me/' + NS.CFG.whatsappNumber;
    var social = NS.CFG.social || {}, soc = h('div', { class: 'footer-social' });
    ['instagram', 'facebook', 'tiktok'].forEach(function (k) { if (social[k]) soc.appendChild(h('a', { text: k[0].toUpperCase(), a: { href: social[k], target: '_blank', rel: 'noopener', 'aria-label': k } })); });
    return h('footer', { class: 'footer' },
      h('div', { class: 'container footer-inner' },
        h('div', null, wordmark(), h('div', { class: 'tagline', text: 'CLEAR VISION · BETTER DAYS', style: 'font-size:9px;letter-spacing:3.5px;direction:ltr;margin-top:4px' }), h('p', { text: t('footerAbout') })),
        h('div', { class: 'footer-col' }, h('h3', { text: t('footerShop') }),
          h('a', { text: t('catClear'), a: { href: '#/shop/clear' } }), h('a', { text: t('catColored'), a: { href: '#/shop/colored' } }), h('a', { text: t('catSolutions'), a: { href: '#/shop/solutions' } }), h('a', { text: t('catAccessories'), a: { href: '#/shop/accessories' } }), h('a', { text: t('navBrands'), a: { href: '#/brands' } })),
        h('div', { class: 'footer-col' }, h('h3', { text: t('footerHelp') }),
          h('a', { text: t('navContact'), a: { href: wa, target: '_blank', rel: 'noopener' } }), h('a', { text: t('navAbout'), a: { href: '#/about' } })),
        h('div', { class: 'footer-col' }, h('h3', { text: t('footerContact') }),
          h('a', { a: { href: wa, target: '_blank', rel: 'noopener' } }, t('whatsapp') + ' ', h('bdo', { a: { dir: 'ltr' }, text: '+20 150 005 9484' })),
          h('span', { text: t('footerHours') }), soc)),
      h('div', { class: 'footer-bottom container' }, h('bdo', { a: { dir: 'ltr' }, text: '© ' + new Date().getFullYear() + ' ' + t('rights') })));
  };

  C.Hero = function () {
    return h('section', { class: 'hero' }, h('div', { class: 'container hero-inner' },
      h('div', { class: 'hero-copy' }, h('h1', { text: t('heroTitle') }), h('p', { text: t('heroSub') }),
        h('div', { class: 'hero-cta' }, C.Button({ text: t('shopNow'), kind: 'primary', href: '#/shop/all' }), C.Button({ text: t('discover'), kind: 'secondary', href: '#/shop/lenses' }))),
      h('img', { class: 'hero-art', a: { src: 'monogram.svg', alt: '', 'aria-hidden': 'true' } })));
  };

  C.CategoryCard = function (c) {
    return h('a', { class: 'card ccard', a: { href: c.href } },
      h('span', { class: 'ccard-icon' }, NS.icon(c.icon)), h('h3', { text: t(c.name) }), h('p', { text: t(c.desc) }),
      h('span', { class: 'ccard-cta', text: t('exploreCat') + (state.lang === 'ar' ? ' ←' : ' →') }));
  };

  /* FilterPanel: returns {el, open(), close()}. filters = {brand,color,dur,min,max}; onChange(newFilters). */
  C.FilterPanel = function (ctx) {
    var f = Object.assign({}, ctx.filters);
    var panel = h('aside', { class: 'card filter-panel', id: 'filter-panel', a: { 'aria-label': t('filters') } });
    function chipGroup(title, items, key, label) {
      var g = h('div', { class: 'filter-group' }, h('h3', { text: title }));
      var box = h('div', { class: 'chips' });
      items.forEach(function (v) {
        var chip = h('button', { class: 'chip', a: { type: 'button', 'aria-pressed': f[key] === v ? 'true' : 'false' }, onclick: function () { f[key] = f[key] === v ? '' : v; draw(); if (!isMobile()) ctx.onChange(f); } });
        if (key === 'color') chip.appendChild(h('span', { class: 'dot', a: { style: 'background:' + (NS.COLOR_HEX[v] || '#ccc') } }));
        chip.appendChild(document.createTextNode(label ? label(v) : v));
        box.appendChild(chip);
      });
      g.appendChild(box); return g;
    }
    function isMobile() { return window.matchMedia('(max-width: 860px)').matches; }
    function draw() {
      NS.clear(panel);
      panel.appendChild(h('div', { class: 'filter-head-m' }, h('h2', { text: t('filters'), style: 'font-size:18px' }), h('button', { class: 'icon-btn', a: { type: 'button', 'aria-label': t('close') }, onclick: close }, NS.icon('close'))));
      if (ctx.brands.length > 1) panel.appendChild(chipGroup(t('fBrand'), ctx.brands, 'brand'));
      if (ctx.colors.length) panel.appendChild(chipGroup(t('fColor'), ctx.colors, 'color', function (v) { return t('colorNames')[v] || v; }));
      if (ctx.durations.length) panel.appendChild(chipGroup(t('fDuration'), ctx.durations, 'dur', function (v) { return v === '1 Day' ? t('daily') : v === 'Monthly' ? t('monthly') : v === 'Quarterly' ? t('quarterly') : v; }));
      var min = h('input', { class: 'input', a: { type: 'number', inputmode: 'numeric', min: '0', placeholder: t('min'), 'aria-label': t('min') }, value: f.min || '' });
      var max = h('input', { class: 'input', a: { type: 'number', inputmode: 'numeric', min: '0', placeholder: t('max'), 'aria-label': t('max') }, value: f.max || '' });
      function pr() { f.min = min.value; f.max = max.value; if (!isMobile()) ctx.onChange(f); }
      min.onchange = pr; max.onchange = pr;
      panel.appendChild(h('div', { class: 'filter-group' }, h('h3', { text: t('fPrice') + ' (' + t('egp') + ')' }), h('div', { class: 'price-row' }, min, h('span', { text: '–' }), max)));
      var foot = h('div', { style: 'display:flex;gap:8px' }, C.Button({ text: t('reset'), kind: 'ghost', size: 'sm', onclick: function () { f = {}; ctx.onChange(f); close(); } }));
      foot.appendChild(C.Button({ text: t('apply'), kind: 'primary', size: 'sm', onclick: function () { pr(); ctx.onChange(f); close(); } }));
      panel.appendChild(foot);
    }
    function open() { panel.classList.add('is-open'); C.openOverlay(close); NS.$('#overlay').style.zIndex = 65; }
    function close() { panel.classList.remove('is-open'); C.closeOverlay(); }
    draw();
    return { el: panel, open: open, close: close };
  };
})(window.NS);
