/* ProductCard, ProductGrid, ProductGallery, ProductOptions. */
(function (NS) {
  'use strict';
  var h = NS.h, t = NS.t, C = NS.C;

  function media(p, cls) {
    var box = h('div', { class: cls });
    function letter() { NS.clear(box); box.appendChild(h('span', { class: 'pcard-letter', text: (p.brand[0] || 'N') })); }
    if (p.image) {
      var img = h('img', { a: { src: p.image, alt: p.title, loading: 'lazy', decoding: 'async' } });
      img.onerror = letter; box.appendChild(img);
    } else letter();
    return box;
  }
  C.media = media;

  C.ProductCard = function (p, o) {
    o = o || {};
    var needsPower = p.power || NS.isToric(p);
    var card = h('article', { class: 'card pcard' + (p.image ? '' : ' no-img') });
    var badges = h('div', { class: 'pcard-badges' });
    if (o.isNew) badges.appendChild(C.Badge(t('newBadge'), true));
    if (NS.isToric(p)) badges.appendChild(C.Badge(t('toricBadge')));
    if (badges.firstChild) card.appendChild(badges);
    var dots = h('div', { class: 'pcard-dots' });
    p.colors.slice(0, 6).forEach(function (c) { dots.appendChild(h('span', { class: 'dot', a: { title: (t('colorNames') || {})[c] || c, style: 'background:' + (NS.COLOR_HEX[c] || '#ccc') } })); });
    if (p.colors.length > 6) dots.appendChild(h('span', { class: 'caption', text: '+' + (p.colors.length - 6) }));
    var link = h('a', { class: 'pcard-link', a: { href: '#/product/' + encodeURIComponent(p.id), 'aria-label': p.title } },
      media(p, 'pcard-media'),
      h('div', { class: 'pcard-body' },
        h('div', { class: 'pcard-brand', text: p.brand }),
        h('h3', { class: 'pcard-title', text: p.title }),
        C.Rating(p.rating),
        dots,
        h('div', { class: 'pcard-price', text: NS.fmtPrice(p.price) })));
    card.appendChild(link);
    card.appendChild(h('div', { class: 'pcard-cta' }, C.Button({
      text: needsPower ? t('choosePower') : t('addToCart'), kind: needsPower ? 'secondary' : 'primary', size: 'sm', block: true, icon: needsPower ? null : 'cart',
      onclick: function () {
        if (needsPower) { location.hash = '#/product/' + encodeURIComponent(p.id); return; }
        NS.Cart.add(p, 1, null); NS.toastAdded();
      }
    })));
    return card;
  };

  C.ProductGrid = function (list, o) {
    o = o || {};
    var g = h('div', { class: 'product-grid' });
    list.forEach(function (p) { g.appendChild(C.ProductCard(p, o.cardOpts && o.cardOpts(p))); });
    return g;
  };
  C.SkeletonGrid = function (n) {
    var g = h('div', { class: 'product-grid', a: { 'aria-busy': 'true' } });
    for (var i = 0; i < (n || 8); i++) g.appendChild(h('div', { class: 'skeleton pcard-skel' }));
    return g;
  };

  C.ProductGallery = function (p) {
    var images = p.images && p.images.length ? p.images : (p.image ? [p.image] : []);
    var main = h('div', { class: 'gallery-main' });
    function show(ix) {
      NS.clear(main);
      if (!images.length) { main.appendChild(h('span', { class: 'pcard-letter', text: (p.brand[0] || 'N') })); return; }
      var img = h('img', { a: { src: images[ix], alt: p.title, decoding: 'async' } });
      img.onerror = function () { NS.clear(main); main.appendChild(h('span', { class: 'pcard-letter', text: (p.brand[0] || 'N') })); };
      main.appendChild(img);
    }
    show(0);
    var wrap = h('div', null, main);
    if (images.length > 1) {
      var th = h('div', { class: 'gallery-thumbs' });
      images.forEach(function (src, ix) {
        var b = h('button', { a: { type: 'button', 'aria-label': p.title + ' ' + (ix + 1), 'aria-current': ix === 0 ? 'true' : 'false' }, onclick: function () { show(ix); NS.$$('button', th).forEach(function (x, j) { x.setAttribute('aria-current', j === ix ? 'true' : 'false'); }); } }, h('img', { a: { src: src, alt: '' } }));
        th.appendChild(b);
      });
      wrap.appendChild(th);
    }
    return wrap;
  };

  /* ProductOptions: power picker (per eye), quantity. getSpecs() returns specs, or false after showing errors. */
  C.ProductOptions = function (p, init) {
    var toric = NS.isToric(p);
    var sphs = NS.sphValues(p.brand);
    var st = { same: !toric, R: {}, L: {}, qty: 1 };
    if (init && init.specs) { st.R = Object.assign({}, init.specs.R); st.L = Object.assign({}, init.specs.L); st.same = !toric && JSON.stringify(st.R) === JSON.stringify(st.L); st.qty = init.qty || 1; }
    var root = h('div', { class: 'pdp-options' });
    var err = h('div', { class: 'power-error hidden', a: { role: 'alert' }, text: t('choosePowerError') });
    var eyesBox = h('div', { class: 'opt-group' });
    var qtyVal = h('span', { text: String(st.qty), a: { 'aria-live': 'polite' } });

    function eyeBlock(label, key) {
      var blk = h('div', { class: 'eye-block' }, h('div', { class: 'eye-title', text: label }));
      var grid = h('div', { class: 'power-grid', a: { role: 'group', 'aria-label': t('sph') } });
      sphs.forEach(function (v) {
        var b = h('button', { class: 'power-chip', text: v === '0.00' ? '0.00' : v, a: { type: 'button', 'aria-pressed': st[key].sph === v ? 'true' : 'false', 'data-v': v }, onclick: function () {
          st[key].sph = v; if (st.same) st.L = Object.assign({}, st.R); err.classList.add('hidden');
          NS.$$('.power-chip', grid).forEach(function (x) { x.setAttribute('aria-pressed', x.getAttribute('data-v') === v ? 'true' : 'false'); });
        } });
        grid.appendChild(b);
      });
      blk.appendChild(grid);
      if (toric) {
        var cylBox = h('div', { class: 'power-grid', a: { role: 'group', 'aria-label': t('cyl') } });
        NS.cylValues().forEach(function (v) {
          cylBox.appendChild(h('button', { class: 'power-chip', text: v, a: { type: 'button', 'aria-pressed': st[key].cyl === v ? 'true' : 'false', 'data-v': v }, onclick: function () {
            st[key].cyl = v; NS.$$('.power-chip', cylBox).forEach(function (x) { x.setAttribute('aria-pressed', x.getAttribute('data-v') === v ? 'true' : 'false'); });
          } }));
        });
        var ax = C.Input({ id: 'ax-' + key, label: t('ax'), tag: 'select', placeholder: t('choose'), options: NS.axValues() });
        if (st[key].ax) ax.input.value = st[key].ax;
        ax.input.onchange = function () { st[key].ax = ax.input.value; };
        blk.appendChild(h('div', { class: 'opt-label', text: t('cyl'), style: 'margin-top:12px' }));
        blk.appendChild(cylBox);
        blk.appendChild(h('div', { style: 'margin-top:12px' }, ax));
      }
      return blk;
    }
    function renderEyes() {
      NS.clear(eyesBox);
      if (!toric) {
        eyesBox.appendChild(h('label', { class: 'same-eye' },
          h('input', { a: { type: 'checkbox' }, checked: st.same, onchange: function (e) { st.same = e.target.checked; if (st.same) st.L = Object.assign({}, st.R); renderEyes(); } }),
          t('sameEye')));
      }
      if (st.same) eyesBox.appendChild(eyeBlock(t('rightEye') + ' + ' + t('leftEye'), 'R'));
      else { eyesBox.appendChild(eyeBlock(t('rightEye'), 'R')); eyesBox.appendChild(eyeBlock(t('leftEye'), 'L')); }
    }
    if (p.power) {
      root.appendChild(h('div', { class: 'opt-label', text: t('pickPower') }));
      renderEyes(); root.appendChild(eyesBox); root.appendChild(err);
    }
    var qty = h('div', { class: 'qty' },
      h('button', { a: { type: 'button', 'aria-label': '-' }, text: '−', onclick: function () { st.qty = Math.max(1, st.qty - 1); qtyVal.textContent = st.qty; } }),
      qtyVal,
      h('button', { a: { type: 'button', 'aria-label': '+' }, text: '+', onclick: function () { st.qty = Math.min(20, st.qty + 1); qtyVal.textContent = st.qty; } }));
    root.appendChild(h('div', { class: 'opt-group' }, h('div', { class: 'opt-label', text: t('qty') }), qty));

    root.qty = function () { return st.qty; };
    root.getSpecs = function () {
      if (!p.power) return null;
      var L = st.same ? st.R : st.L;
      function ok(s) { return s.sph && (!toric || (s.cyl && s.ax)); }
      if (!ok(st.R) || !ok(L)) { err.classList.remove('hidden'); err.scrollIntoView({ block: 'center', behavior: 'smooth' }); return false; }
      return { R: Object.assign({}, st.R), L: Object.assign({}, L) };
    };
    return root;
  };
})(window.NS);
