/* Small shared components: Button, Input, Badge, Rating, Toast, Modal(Overlay). */
(function (NS) {
  'use strict';
  var h = NS.h, C = NS.C;

  C.Button = function (o) {   // {text, kind:'primary|secondary|ghost|wa', size:'sm', block, onclick, href, icon, disabled, type}
    var cls = 'btn btn-' + (o.kind || 'primary') + (o.size === 'sm' ? ' btn-sm' : '') + (o.block ? ' btn-block' : '');
    var b = h(o.href ? 'a' : 'button', { class: cls, onclick: o.onclick, a: o.href ? { href: o.href } : { type: o.type || 'button' } }, o.icon ? NS.icon(o.icon) : null, o.text);
    if (o.disabled) { b.disabled = true; b.setAttribute('aria-disabled', 'true'); }
    return b;
  };

  C.Input = function (o) {    // {id, label, type, autocomplete, error, tag:'input|textarea|select', options}
    var inp;
    if (o.tag === 'select') {
      inp = h('select', { class: 'input', id: o.id });
      inp.appendChild(h('option', { value: '', text: o.placeholder || '' }));
      (o.options || []).forEach(function (x) { inp.appendChild(h('option', { value: x, text: x })); });
    } else inp = h(o.tag || 'input', { class: 'input', id: o.id, a: { type: o.type || 'text', autocomplete: o.autocomplete, inputmode: o.inputmode, maxlength: o.maxlength } });
    if (o.value) inp.value = o.value;
    var err = h('div', { class: 'field-error hidden', id: o.id + '-err', a: { role: 'alert' } });
    inp.setAttribute('aria-describedby', o.id + '-err');
    var f = h('div', { class: 'field' }, h('label', { text: o.label, a: { for: o.id } }), inp, err);
    f.input = inp;
    f.setError = function (msg) { err.textContent = msg || ''; err.classList.toggle('hidden', !msg); inp.classList.toggle('is-invalid', !!msg); inp.setAttribute('aria-invalid', msg ? 'true' : 'false'); };
    inp.addEventListener('input', function () { f.setError(''); });
    return f;
  };

  C.Badge = function (text, dark) { return h('span', { class: 'badge' + (dark ? ' badge-dark' : ''), text: text }); };

  C.Rating = function (value) {   // renders nothing unless a real rating exists
    var v = Number(value); if (!v) return null;
    var full = Math.round(v), s = '';
    for (var i = 0; i < 5; i++) s += i < full ? '★' : '☆';
    return h('span', { class: 'rating', text: s, a: { 'aria-label': v + ' / 5' } });
  };

  var toastTimer = null;
  C.Toast = function (msg, actions) {
    var wrap = NS.$('#toast-wrap'); NS.clear(wrap);
    var acts = h('div', { class: 'toast-actions' });
    (actions || []).forEach(function (a) { acts.appendChild(C.Button({ text: a.text, kind: a.kind || 'ghost', size: 'sm', onclick: function () { NS.clear(wrap); a.onclick(); } })); });
    wrap.appendChild(h('div', { class: 'toast', a: { role: 'status' } }, h('div', { class: 'toast-msg', text: msg }), acts));
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { NS.clear(wrap); }, 5000);
  };

  /* Modal: overlay + sheet container managed by id. */
  C.openOverlay = function (onClose) {
    var o = h('div', { class: 'overlay', id: 'overlay', onclick: onClose });
    document.body.appendChild(o); document.body.style.overflow = 'hidden'; return o;
  };
  C.closeOverlay = function () { var o = NS.$('#overlay'); if (o) o.remove(); document.body.style.overflow = ''; };
})(window.NS);
