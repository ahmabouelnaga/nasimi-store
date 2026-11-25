/* App: router + boot. */
(function (NS) {
  'use strict';
  var h = NS.h, t = NS.t, C = NS.C, P = NS.P, state = NS.state;

  function parse() {
    var raw = location.hash.replace(/^#\/?/, ''), qi = raw.indexOf('?'), path = qi >= 0 ? raw.slice(0, qi) : raw, params = {};
    if (qi >= 0) raw.slice(qi + 1).split('&').forEach(function (kv) { var p = kv.split('='); if (p[0]) params[p[0]] = decodeURIComponent((p[1] || '').replace(/\+/g, ' ')); });
    var seg = path.split('/').filter(Boolean).map(decodeURIComponent);
    var r = { name: 'home', params: params, q: params.q || '' };
    if (seg[0] === 'shop') { r.name = 'shop'; r.key = seg[1] || 'all'; }
    else if (seg[0] === 'brand' && seg[1]) { r.name = 'brand'; r.id = seg[1]; r.key = params.cat || 'all'; }
    else if (seg[0] === 'brands') r.name = 'brands';
    else if (seg[0] === 'product' && seg[1]) { r.name = 'product'; r.id = seg[1]; }
    else if (seg[0] === 'about') r.name = 'about';
    else if (seg.length) r.name = 'notFound';
    return r;
  }

  var headerEl = NS.$('#site-header'), mainEl = NS.$('#main'), footerEl = NS.$('#site-footer');
  var lastKey = null;
  function render() {
    var r = parse();
    NS.clear(headerEl); headerEl.appendChild(C.Header(r));
    NS.clear(footerEl); footerEl.appendChild(C.Footer());
    NS.clear(mainEl);
    var page;
    if (state.status === 'loading') page = P.loading();
    else if (state.status === 'error') page = P.error(boot);
    else if (r.name === 'home') page = P.home();
    else if (P[r.name]) page = P[r.name](r);
    else page = P.notFound();
    mainEl.appendChild(page);
    var key = r.name + '|' + (r.key || '') + '|' + (r.id || '');
    if (key !== lastKey) window.scrollTo(0, 0);
    lastKey = key;
    document.documentElement.lang = state.lang;
    document.documentElement.dir = state.lang === 'ar' ? 'rtl' : 'ltr';
    var topWa = NS.$('#topbar-wa'); if (topWa) { topWa.textContent = ''; topWa.appendChild(document.createTextNode(t('topbarContact') + ' ')); topWa.appendChild(h('bdo', { a: { dir: 'ltr' }, text: '+201500059484' })); }
    var to = NS.$('#topbar-original'); if (to) to.textContent = t('topbarOriginal');
    updateCount();
  }
  function updateCount() {
    var n = NS.Cart.count(), c = NS.$('#cart-count'); if (c) { c.textContent = n; c.classList.toggle('hidden', !n); }
    var bar = NS.$('#cart-bar'); document.body.classList.toggle('has-cartbar', n > 0); NS.clear(bar); bar.classList.toggle('hidden', !n);
    if (n) { bar.appendChild(h('span', { text: t('cart') + ' (' + n + ')' })); bar.appendChild(h('span', { text: NS.fmtPrice(NS.Cart.total()) })); }
  }
  NS.Cart.onChange(updateCount);
  NS.$('#cart-bar').onclick = function () { C.openCart(); };
  NS.toggleLang = function () { state.lang = state.lang === 'ar' ? 'en' : 'ar'; localStorage.setItem('nasimi_lang', state.lang); C.closeCart(); render(); };
  window.addEventListener('hashchange', function () { C.closeCart(); NS.closeMenu(); render(); });

  function boot() {
    var cached = NS.cachedProducts();
    if (cached && !state.products.length) { state.products = cached; state.status = 'ready'; } else if (!state.products.length) state.status = 'loading';
    render();
    NS.loadProducts().then(function (list) {
      var changed = state.status !== 'ready' || JSON.stringify(list) !== JSON.stringify(state.products);
      state.products = list; state.status = 'ready';
      if (changed) render();
    }).catch(function () { if (state.status !== 'ready') { state.status = 'error'; render(); } });
  }
  document.documentElement.lang = state.lang;
  boot();
})(window.NS);
