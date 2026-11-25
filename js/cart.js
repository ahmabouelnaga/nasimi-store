/* Cart store (localStorage) + validation + WhatsApp message. */
(function (NS) {
  'use strict';
  var state = NS.state, t = NS.t;
  function migrate(items) {
    return items.map(function (i) {
      if (i.specs === undefined) { i.specs = i.powerR ? { R: { sph: i.powerR }, L: { sph: i.powerL || i.powerR } } : null; delete i.powerR; delete i.powerL; }
      return i;
    });
  }
  try { state.cart = migrate(JSON.parse(localStorage.getItem('nasimi_cart') || '[]')); } catch (e) { state.cart = []; }
  var listeners = [];
  var Cart = NS.Cart = {
    onChange: function (f) { listeners.push(f); },
    save: function () { try { localStorage.setItem('nasimi_cart', JSON.stringify(state.cart)); } catch (e) {} listeners.forEach(function (f) { f(); }); },
    count: function () { return state.cart.reduce(function (s, i) { return s + i.qty; }, 0); },
    total: function () { return state.cart.reduce(function (s, i) { return s + i.qty * (i.price || 0); }, 0); },
    add: function (p, qty, specs) {
      var key = p.id + '|' + JSON.stringify(specs || null);
      var ex = state.cart.filter(function (i) { return i.key === key; })[0];
      if (ex) ex.qty = Math.min(20, ex.qty + qty);
      else state.cart.push({ key: key, id: p.id, title: p.title, brand: p.brand, price: p.price, qty: qty, specs: specs, image: p.image || '' });
      Cart.save();
    },
    setQty: function (i, q) { i.qty = Math.max(1, Math.min(20, q)); Cart.save(); },
    remove: function (i) { var ix = state.cart.indexOf(i); if (ix >= 0) state.cart.splice(ix, 1); Cart.save(); },
    lineInvalid: function (i) {
      if (!i.specs) return false;
      var toric = /toric/i.test(i.title);
      function ok(s) {
        if (!s || !s.sph) return false;
        if (NS.sphValues(i.brand).indexOf(String(s.sph)) < 0) return false;
        if (toric && (!s.cyl || s.ax === undefined || s.ax === null || s.ax === '')) return false;
        return true;
      }
      return !ok(i.specs.R) || !ok(i.specs.L);
    },
    dropInvalid: function () {
      var bad = state.cart.filter(Cart.lineInvalid);
      if (bad.length) { state.cart = state.cart.filter(function (i) { return !Cart.lineInvalid(i); }); Cart.save(); }
      return bad;
    },
    fmtEye: function (s, labels) {
      var parts = [];
      if (s.sph) parts.push((labels ? 'SPH ' : '') + s.sph);
      if (s.cyl) parts.push('CYL ' + s.cyl);
      if (s.ax !== undefined && s.ax !== null && s.ax !== '') parts.push('AX ' + s.ax);
      return parts.join(labels ? ', ' : ' / ');
    },
    fmtSpecs: function (i, labels) {
      if (!i.specs) return '';
      return t('rEye') + ': ' + Cart.fmtEye(i.specs.R || {}, labels) + ' | ' + t('lEye') + ': ' + Cart.fmtEye(i.specs.L || {}, labels);
    },
    whatsappUrl: function (cust) {
      var L = NS.I18N[state.lang], lines = [L.orderIntro, ''];
      state.cart.forEach(function (i, n) {
        var line = (n + 1) + ') ' + i.title;
        if (i.specs) line += ' | ' + Cart.fmtSpecs(i, true);
        line += ' | ' + i.qty + ' x ' + (i.price || 0) + ' = ' + ((i.price || 0) * i.qty) + ' ' + NS.CFG.currency;
        lines.push(line);
      });
      lines.push('', L.orderTotal + ': ' + Cart.total() + ' ' + NS.CFG.currency, '');
      lines.push(L.orderName + ' ' + cust.name, L.orderPhone + ' ' + cust.phone, L.orderGov + ' ' + cust.gov, L.orderAddress + ' ' + cust.address, L.orderNotes + ' ' + (cust.notes || ''));
      return 'https://wa.me/' + NS.CFG.whatsappNumber + '?text=' + encodeURIComponent(lines.join('\n'));
    }
  };
})(window.NS);
