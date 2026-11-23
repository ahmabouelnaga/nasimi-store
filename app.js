(function () {
  'use strict';
  var CFG = window.NASIMI_CONFIG;

  var I18N = {
    ar: {
      topbarContact: 'تواصل معنا عبر واتساب:',
      topbarOriginal: 'منتجات أصلية 100%',
      topbarDelivery: 'توصيل لجميع المحافظات',
      navHome: 'الرئيسية',
      navLenses: 'العدسات اللاصقة',
      navSolutions: 'محلول العدسات',
      navAccessories: 'الملحقات',
      navAbout: 'عن ناسيمي',
      navContact: 'تواصل معنا',
      heroTitle: 'رؤيتك أوضح .. كل يوم',
      heroSub: 'عدسات لاصقة عالية الجودة من أفضل الماركات العالمية',
      shopNow: 'تسوق الآن',
      tileLenses: 'العدسات اللاصقة',
      tileSolutions: 'محلول العدسات',
      tileAccessories: 'الملحقات',
      bestTitle: 'أفضل المنتجات',
      viewAll: 'عرض الكل',
      bestBadge: 'الأكثر مبيعاً',
      catalogTitle: 'تصفح المنتجات',
      searchPh: 'ابحث عن منتج أو ماركة...',
      allCats: 'الكل',
      'Colored Lenses': 'عدسات ملونة',
      'Clear Lenses': 'عدسات طبية',
      solutions: 'محاليل',
      accessories: 'إكسسوارات',
      allBrands: 'كل الماركات',
      results: 'منتج',
      egp: 'جنيه',
      addToCart: 'أضف إلى السلة',
      cartTitle: 'سلة التسوق',
      cartEmpty: 'السلة فارغة',
      total: 'الإجمالي:',
      cartNote: 'سيتم تحويلك إلى واتساب لإرسال الطلب وتأكيده وطريقة الدفع',
      checkout: 'إتمام الطلب عبر واتساب',
      powerR: 'عدسة العين اليمنى',
      powerL: 'عدسة العين اليسرى',
      plano: 'بدون قياس (0.00)',
      qty: 'الكمية',
      trust1: 'منتجات أصلية 100%',
      trust2: 'دفع آمن عبر واتساب',
      trust3: 'توصيل سريع لجميع المحافظات',
      trust4: 'خدمة عملاء متميزة',
      aboutTitle: 'عن ناسيمي',
      aboutText: 'ناسيمي وجهتك الأولى للعدسات اللاصقة الأصلية في مصر. نختار لك أفضل الماركات العالمية من العدسات الملونة والطبية والمحاليل، ونوصلها لباب بيتك في أي محافظة. لأن عينيك تستحق الأفضل.',
      footerQuick: 'روابط سريعة',
      footerService: 'خدمة العملاء',
      footerContact: 'تواصل معنا',
      footerHours: 'من 9 ص إلى 12 م',
      privacy: 'سياسة الخصوصية',
      returns: 'سياسة الاسترجاع',
      shipping: 'الشحن والتوصيل',
      rights: 'Nasimi. All rights reserved.',
      footerTag: 'ناسيمي - لأن عينيك تستحق الأفضل',
      remove: 'حذف',
      colors: ['Blue','Green','Grey','Hazel','Brown','Honey','Olive','Turquoise','Violet','Pink','Chocolate','Black','Amber','Mint','Sky','Ice','Gold','Purple'],
      colorNames: {Blue:'أزرق',Green:'أخضر',Grey:'رمادي',Hazel:'عسلي فاتح',Brown:'بني',Honey:'عسلي',Olive:'زيتوني',Turquoise:'تركواز',Violet:'بنفسجي',Pink:'وردي',Chocolate:'شوكولاتة',Black:'أسود',Amber:'كهرماني',Mint:'نعناعي',Sky:'سماوي',Ice:'أيس',Gold:'ذهبي',Purple:'موف'},
      durations: ['1 Day','Monthly','Quarterly'],
      durationNames: {'1 Day':'يومي','Monthly':'شهري','Quarterly':'ربع سنوي'},
      orderIntro: 'مرحباً ناسيمي، أريد تأكيد هذا الطلب:',
      orderTotal: 'الإجمالي',
      orderName: 'الاسم:',
      orderAddress: 'العنوان:',
      orderNotes: 'ملاحظات:',
      rightEye: 'يمين',
      leftEye: 'يسار'
    },
    en: {
      topbarContact: 'Contact us on WhatsApp:',
      topbarOriginal: '100% Original Products',
      topbarDelivery: 'Delivery to all governorates',
      navHome: 'Home',
      navLenses: 'Contact Lenses',
      navSolutions: 'Lens Solutions',
      navAccessories: 'Accessories',
      navAbout: 'About Nasimi',
      navContact: 'Contact Us',
      heroTitle: 'Clearer vision .. every day',
      heroSub: 'High-quality contact lenses from the best international brands',
      shopNow: 'Shop Now',
      tileLenses: 'Contact Lenses',
      tileSolutions: 'Lens Solutions',
      tileAccessories: 'Accessories',
      bestTitle: 'Best Sellers',
      viewAll: 'View All',
      bestBadge: 'Best Seller',
      catalogTitle: 'Browse Products',
      searchPh: 'Search for a product or brand...',
      allCats: 'All',
      'Colored Lenses': 'Colored Lenses',
      'Clear Lenses': 'Clear Lenses',
      solutions: 'Solutions',
      accessories: 'Accessories',
      allBrands: 'All brands',
      results: 'products',
      egp: 'EGP',
      addToCart: 'Add to cart',
      cartTitle: 'Shopping Cart',
      cartEmpty: 'Your cart is empty',
      total: 'Total:',
      cartNote: 'You will be redirected to WhatsApp to send the order and confirm payment method',
      checkout: 'Checkout via WhatsApp',
      powerR: 'Right eye lens',
      powerL: 'Left eye lens',
      plano: 'Plano (0.00)',
      qty: 'Qty',
      trust1: '100% Original Products',
      trust2: 'Secure Payment via WhatsApp',
      trust3: 'Fast Delivery to All Governorates',
      trust4: 'Outstanding Customer Service',
      aboutTitle: 'About Nasimi',
      aboutText: 'Nasimi is your first destination for original contact lenses in Egypt. We pick the best international brands of colored and clear lenses and solutions, and deliver them to your door in any governorate. Because your eyes deserve the best.',
      footerQuick: 'Quick Links',
      footerService: 'Customer Service',
      footerContact: 'Contact Us',
      footerHours: '9 AM to 12 AM',
      privacy: 'Privacy Policy',
      returns: 'Return Policy',
      shipping: 'Shipping & Delivery',
      rights: 'Nasimi. All rights reserved.',
      footerTag: 'Nasimi - because your eyes deserve the best',
      remove: 'Remove',
      colors: ['Blue','Green','Grey','Hazel','Brown','Honey','Olive','Turquoise','Violet','Pink','Chocolate','Black','Amber','Mint','Sky','Ice','Gold','Purple'],
      colorNames: {Blue:'Blue',Green:'Green',Grey:'Grey',Hazel:'Hazel',Brown:'Brown',Honey:'Honey',Olive:'Olive',Turquoise:'Turquoise',Violet:'Violet',Pink:'Pink',Chocolate:'Chocolate',Black:'Black',Amber:'Amber',Mint:'Mint',Sky:'Sky',Ice:'Ice',Gold:'Gold',Purple:'Purple'},
      durations: ['1 Day','Monthly','Quarterly'],
      durationNames: {'1 Day':'Daily','Monthly':'Monthly','Quarterly':'Quarterly'},
      orderIntro: 'Hello Nasimi, I would like to confirm this order:',
      orderTotal: 'Total',
      orderName: 'Name:',
      orderAddress: 'Address:',
      orderNotes: 'Notes:',
      rightEye: 'R',
      leftEye: 'L'
    }
  };

  var urlLang = new URLSearchParams(location.search).get('lang');
  var state = {
    lang: (urlLang === 'en' || urlLang === 'ar') ? urlLang : (localStorage.getItem('nasimi_lang') || 'ar'),
    products: [],
    category: 'all',
    brand: 'all',
    color: 'all',
    duration: 'all',
    search: '',
    cart: JSON.parse(localStorage.getItem('nasimi_cart') || '[]')
  };

  function t(key) { return (I18N[state.lang] && I18N[state.lang][key]) || I18N.en[key] || key; }

  function fmtPrice(p) {
    var n = Number(p);
    if (!isFinite(n)) return '';
    return (n % 1 === 0 ? n.toLocaleString('en-US') : n.toFixed(2)) + ' ' + t('egp');
  }

  function parseCsv(text) {
    var rows = [], row = [], cur = '', inQ = false, i, c;
    for (i = 0; i < text.length; i++) {
      c = text[i];
      if (inQ) {
        if (c === '"') { if (text[i+1] === '"') { cur += '"'; i++; } else inQ = false; }
        else cur += c;
      } else if (c === '"') inQ = true;
      else if (c === ',') { row.push(cur); cur = ''; }
      else if (c === '\n' || c === '\r') {
        if (c === '\r' && text[i+1] === '\n') i++;
        row.push(cur); cur = '';
        if (row.length > 1 || row[0] !== '') rows.push(row);
        row = [];
      } else cur += c;
    }
    if (cur !== '' || row.length) { row.push(cur); rows.push(row); }
    var head = rows.shift().map(function (h) { return h.trim().toLowerCase(); });
    return rows.map(function (r) {
      var o = {};
      head.forEach(function (h, idx) { o[h] = (r[idx] || '').trim(); });
      return o;
    });
  }

  function truthy(v) { return v === true || v === 'yes' || v === 'TRUE' || v === 'true' || v === '1'; }

  function normalize(raw) {
    return {
      id: raw.id,
      title: raw.title,
      brand: raw.brand || 'Other',
      category: raw.category || 'Colored Lenses',
      price: parseFloat(raw.price) || null,
      colors: typeof raw.colors === 'string' ? raw.colors.split('|').filter(Boolean) : (raw.colors || []),
      duration: raw.duration || '',
      power: truthy(raw.power),
      image: raw.image || '',
      stock: raw.stock === undefined || raw.stock === '' ? true : truthy(raw.stock)
    };
  }

  function loadProducts() {
    if (CFG.sheetCsvUrl) {
      return fetch(CFG.sheetCsvUrl).then(function (r) { return r.text(); })
        .then(function (txt) { return parseCsv(txt).map(normalize); });
    }
    return fetch(CFG.productsJsonUrl).then(function (r) { return r.json(); })
      .then(function (arr) { return arr.map(normalize); });
  }

  function isAccessory(p) {
    return p.category === 'Solutions & Accessories' &&
      (p.brand.toLowerCase() === 'accessories' || /box|case|holder|tweezers/i.test(p.title));
  }

  function inCategory(p, cat) {
    if (cat === 'all') return true;
    if (cat === 'lenses') return p.category === 'Colored Lenses' || p.category === 'Clear Lenses';
    if (cat === 'solutions') return p.category === 'Solutions & Accessories' && !isAccessory(p);
    if (cat === 'accessories') return isAccessory(p);
    return p.category === cat;
  }

  function powerOptions() {
    var opts = [{ v: '0.00', label: t('plano') }];
    for (var d = 0.5; d <= 6.001; d += 0.25) opts.push({ v: '+' + d.toFixed(2), label: '+' + d.toFixed(2) });
    for (var m = 0.5; m <= 10.001; m += 0.25) opts.push({ v: '-' + m.toFixed(2), label: '-' + m.toFixed(2) });
    return opts;
  }

  function imgHtml(p, cls) {
    if (p.image) return '<div class="' + cls + '"><img src="' + p.image + '" alt="" loading="lazy" onerror="this.parentNode.innerHTML=\'<span class=ph-letter>' + (p.brand[0] || 'N') + '</span>\'"></div>';
    return '<div class="' + cls + '"><span class="ph-letter">' + (p.brand[0] || 'N') + '</span></div>';
  }

  function filtered() {
    var q = state.search.toLowerCase();
    return state.products.filter(function (p) {
      if (!p.stock) return false;
      if (!inCategory(p, state.category)) return false;
      if (state.brand !== 'all' && p.brand !== state.brand) return false;
      if (state.color !== 'all' && p.colors.indexOf(state.color) < 0) return false;
      if (state.duration !== 'all' && p.duration !== state.duration) return false;
      if (q && (p.title + ' ' + p.brand).toLowerCase().indexOf(q) < 0) return false;
      return true;
    });
  }

  var TABS = ['all', 'Colored Lenses', 'Clear Lenses', 'solutions', 'accessories'];
  function renderTabs() {
    var el = document.getElementById('cat-tabs');
    el.innerHTML = '';
    TABS.forEach(function (c) {
      var b = document.createElement('button');
      b.type = 'button';
      b.className = 'cat-tab' + (state.category === c ? ' active' : '');
      b.textContent = c === 'all' ? t('allCats') : t(c);
      b.onclick = function () { setCategory(c); };
      el.appendChild(b);
    });
    document.querySelectorAll('.main-nav a[data-cat]').forEach(function (a) {
      a.classList.toggle('active', a.getAttribute('data-cat') === state.category);
    });
  }

  function setCategory(c) {
    state.category = c; state.brand = 'all'; state.color = 'all'; state.duration = 'all'; state.search = '';
    document.getElementById('search').value = '';
    renderAll();
  }

  function renderFilters() {
    var sel = document.getElementById('brand-filter');
    var brands = [];
    state.products.forEach(function (p) {
      if (p.stock && inCategory(p, state.category) && brands.indexOf(p.brand) < 0) brands.push(p.brand);
    });
    brands.sort();
    sel.innerHTML = '<option value="all">' + t('allBrands') + '</option>' + brands.map(function (b) {
      return '<option value="' + b + '"' + (state.brand === b ? ' selected' : '') + '>' + b + '</option>';
    }).join('');

    var showColors = state.category === 'all' || state.category === 'lenses' || state.category === 'Colored Lenses';
    var cc = document.getElementById('color-chips');
    cc.innerHTML = '';
    if (showColors) {
      var avail = {};
      state.products.forEach(function (p) {
        if (p.stock && p.category === 'Colored Lenses' && (state.brand === 'all' || p.brand === state.brand)) p.colors.forEach(function (c) { avail[c] = 1; });
      });
      t('colors').forEach(function (c) {
        if (!avail[c]) return;
        var b = document.createElement('button');
        b.type = 'button';
        b.className = 'chip' + (state.color === c ? ' active' : '');
        b.textContent = t('colorNames')[c] || c;
        b.onclick = function () { state.color = state.color === c ? 'all' : c; renderAll(); };
        cc.appendChild(b);
      });
    }
    var dc = document.getElementById('duration-chips');
    dc.innerHTML = '';
    if (state.category !== 'solutions' && state.category !== 'accessories' && state.category !== 'Solutions & Accessories') {
      t('durations').forEach(function (d) {
        var b = document.createElement('button');
        b.type = 'button';
        b.className = 'chip' + (state.duration === d ? ' active' : '');
        b.textContent = t('durationNames')[d] || d;
        b.onclick = function () { state.duration = state.duration === d ? 'all' : d; renderAll(); };
        dc.appendChild(b);
      });
    }
  }

  function cardHtml(p, badge) {
    return (badge ? '<span class="p-badge">' + t('bestBadge') + '</span>' : '') +
      imgHtml(p, 'product-img') +
      '<div class="product-info"><div class="product-brand">' + p.brand + '</div>' +
      '<div class="product-title">' + p.title + '</div>' +
      '<div class="product-price">' + fmtPrice(p.price) + '</div>' +
      '<button class="card-add" type="button"><svg viewBox="0 0 24 24" class="ic"><path fill="none" stroke="currentColor" stroke-width="2" d="M6 6h15l-1.7 8.5a2 2 0 0 1-2 1.5H9.7a2 2 0 0 1-2-1.6L5.2 3.9A1 1 0 0 0 4.2 3H2"/><circle cx="9.5" cy="20" r="1.6" fill="currentColor"/><circle cx="17.5" cy="20" r="1.6" fill="currentColor"/></svg>' + t('addToCart') + '</button></div>';
  }

  function bindCard(card, p) {
    card.onclick = function () { openModal(p); };
  }

  function renderGrid() {
    var list = filtered();
    document.getElementById('result-count').textContent = list.length + ' ' + t('results');
    var grid = document.getElementById('product-grid');
    grid.innerHTML = '';
    list.forEach(function (p) {
      var card = document.createElement('div');
      card.className = 'product-card';
      card.innerHTML = cardHtml(p, false);
      bindCard(card, p);
      grid.appendChild(card);
    });
  }

  var BEST_TITLES = ['1-DAY ACUVUE OASYS', 'Acuvue Oasys', 'Acuvue Moist', 'Acuvue Oasys Toric'];
  function renderBest() {
    var grid = document.getElementById('best-grid');
    grid.innerHTML = '';
    var picks = [];
    BEST_TITLES.forEach(function (title) {
      var p = state.products.filter(function (x) { return x.title === title && x.stock; })[0];
      if (p) picks.push(p);
    });
    state.products.forEach(function (p) {
      if (picks.length >= 4) return;
      if (p.stock && p.category === 'Colored Lenses' && (p.brand === 'Bella' || p.brand === 'Desio') && picks.indexOf(p) < 0) picks.push(p);
    });
    picks.slice(0, 4).forEach(function (p) {
      var card = document.createElement('div');
      card.className = 'product-card';
      card.innerHTML = cardHtml(p, true);
      bindCard(card, p);
      grid.appendChild(card);
    });
  }

  var modalProduct = null;
  function openModal(p) {
    modalProduct = p;
    var body = document.getElementById('modal-body');
    var optsHtml = powerOptions().map(function (o) { return '<option value="' + o.v + '">' + o.label + '</option>'; }).join('');
    var powerHtml = '';
    if (p.power) {
      powerHtml =
        '<div class="power-row"><div class="power-field"><label>' + t('powerR') + '</label><select id="power-r">' + optsHtml + '</select></div>' +
        '<div class="power-field"><label>' + t('powerL') + '</label><select id="power-l">' + optsHtml + '</select></div></div>';
    }
    body.innerHTML =
      '<h3>' + p.title + '</h3><div class="m-brand">' + p.brand + '</div>' +
      imgHtml(p, 'm-img') +
      '<div class="m-price">' + fmtPrice(p.price) + '</div>' +
      powerHtml +
      '<div class="qty-row"><span>' + t('qty') + '</span>' +
      '<button class="qty-btn" type="button" id="q-minus">−</button><span id="q-val">1</span>' +
      '<button class="qty-btn" type="button" id="q-plus">+</button></div>' +
      '<button class="btn-add" type="button" id="add-btn">' + t('addToCart') + '</button>';

    var qty = 1;
    body.querySelector('#q-minus').onclick = function () { qty = Math.max(1, qty - 1); body.querySelector('#q-val').textContent = qty; };
    body.querySelector('#q-plus').onclick = function () { qty = Math.min(20, qty + 1); body.querySelector('#q-val').textContent = qty; };
    var pr = body.querySelector('#power-r'), pl = body.querySelector('#power-l');
    if (pr && pl) pr.onchange = function () { pl.value = pr.value; };
    body.querySelector('#add-btn').onclick = function () {
      addToCart(p, qty, pr ? pr.value : '', pl ? pl.value : '');
      closeModal();
      openCart();
    };
    document.getElementById('modal-backdrop').classList.remove('hidden');
  }
  function closeModal() { document.getElementById('modal-backdrop').classList.add('hidden'); modalProduct = null; }

  function saveCart() { localStorage.setItem('nasimi_cart', JSON.stringify(state.cart)); }
  function cartCount() { return state.cart.reduce(function (s, i) { return s + i.qty; }, 0); }
  function cartTotal() { return state.cart.reduce(function (s, i) { return s + i.qty * (i.price || 0); }, 0); }

  function addToCart(p, qty, pr, pl) {
    var key = p.id + '|' + pr + '|' + pl;
    var ex = state.cart.filter(function (i) { return i.key === key; })[0];
    if (ex) ex.qty = Math.min(20, ex.qty + qty);
    else state.cart.push({ key: key, id: p.id, title: p.title, brand: p.brand, price: p.price, qty: qty, powerR: pr, powerL: pl });
    saveCart();
    renderCartCount();
  }

  function renderCartCount() { document.getElementById('cart-count').textContent = cartCount(); }

  function renderCart() {
    var el = document.getElementById('cart-items');
    if (!state.cart.length) {
      el.innerHTML = '<div class="cart-empty">' + t('cartEmpty') + '</div>';
    } else {
      el.innerHTML = '';
      state.cart.forEach(function (i, idx) {
        var div = document.createElement('div');
        div.className = 'cart-item';
        var meta = i.brand + (i.powerR ? ' · ' + t('rightEye') + ' ' + i.powerR + ' / ' + t('leftEye') + ' ' + i.powerL : '');
        div.innerHTML =
          '<div class="ci-title">' + i.title + '</div>' +
          '<div class="ci-meta">' + meta + '</div>' +
          '<div class="ci-row"><div class="ci-qty">' +
          '<button type="button">−</button><span>' + i.qty + '</span><button type="button">+</button>' +
          '</div><strong>' + fmtPrice((i.price || 0) * i.qty) + '</strong>' +
          '<button class="ci-remove" type="button">' + t('remove') + '</button></div>';
        var btns = div.querySelectorAll('.ci-qty button');
        btns[0].onclick = function () { i.qty = Math.max(1, i.qty - 1); saveCart(); renderCart(); renderCartCount(); };
        btns[1].onclick = function () { i.qty = Math.min(20, i.qty + 1); saveCart(); renderCart(); renderCartCount(); };
        div.querySelector('.ci-remove').onclick = function () { state.cart.splice(idx, 1); saveCart(); renderCart(); renderCartCount(); };
        el.appendChild(div);
      });
    }
    document.getElementById('cart-total').textContent = fmtPrice(cartTotal());
  }

  function openCart() { renderCart(); document.getElementById('cart-drawer').classList.remove('hidden'); }
  function closeCart() { document.getElementById('cart-drawer').classList.add('hidden'); }

  function checkout() {
    if (!state.cart.length) return;
    var L = I18N[state.lang];
    var lines = [L.orderIntro, ''];
    state.cart.forEach(function (i, n) {
      var line = (n + 1) + ') ' + i.title;
      if (i.powerR) line += ' | ' + L.rightEye + ': ' + i.powerR + ' / ' + L.leftEye + ': ' + i.powerL;
      line += ' | ' + i.qty + ' x ' + (i.price || 0) + ' = ' + ((i.price || 0) * i.qty) + ' ' + CFG.currency;
      lines.push(line);
    });
    lines.push('');
    lines.push(L.orderTotal + ': ' + cartTotal() + ' ' + CFG.currency);
    lines.push('');
    lines.push(L.orderName);
    lines.push(L.orderAddress);
    lines.push(L.orderNotes);
    var url = 'https://wa.me/' + CFG.whatsappNumber + '?text=' + encodeURIComponent(lines.join('\n'));
    window.open(url, '_blank');
  }

  function applyLang() {
    var ar = state.lang === 'ar';
    document.documentElement.lang = state.lang;
    document.documentElement.dir = ar ? 'rtl' : 'ltr';
    document.getElementById('lang-toggle').textContent = ar ? 'English' : 'عربي';
    document.querySelectorAll('[data-i18n]').forEach(function (el) { el.textContent = t(el.getAttribute('data-i18n')); });
    document.querySelectorAll('[data-i18n-ph]').forEach(function (el) { el.placeholder = t(el.getAttribute('data-i18n-ph')); });
    document.getElementById('checkout-wa').textContent = t('checkout');
    document.title = ar ? 'ناسيمي | NASIMI - عدسات لاصقة' : 'NASIMI | ناسيمي - Contact Lenses';
    localStorage.setItem('nasimi_lang', state.lang);
  }

  function renderAll() { applyLang(); renderTabs(); renderFilters(); renderGrid(); renderCartCount(); }
  function recount() { document.getElementById('result-count').textContent = filtered().length + ' ' + t('results'); }

  document.getElementById('lang-toggle').onclick = function () { state.lang = state.lang === 'ar' ? 'en' : 'ar'; renderAll(); renderBest(); renderCart(); };
  document.getElementById('search').oninput = function (e) { state.search = e.target.value; renderGrid(); recount(); };
  document.getElementById('brand-filter').onchange = function (e) { state.brand = e.target.value; state.color = 'all'; renderFilters(); renderGrid(); recount(); };
  document.getElementById('cart-button').onclick = openCart;
  document.getElementById('cart-close').onclick = closeCart;
  document.getElementById('modal-close').onclick = closeModal;
  document.getElementById('modal-backdrop').onclick = function (e) { if (e.target === this) closeModal(); };
  document.getElementById('checkout-wa').onclick = checkout;
  document.getElementById('search-jump').onclick = function () {
    document.getElementById('catalog').scrollIntoView({ behavior: 'smooth' });
    setTimeout(function () { document.getElementById('search').focus(); }, 400);
  };
  document.getElementById('brand-home').onclick = function (e) { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); };

  document.querySelectorAll('[data-cat]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      e.preventDefault();
      setCategory(a.getAttribute('data-cat'));
      var target = a.getAttribute('href');
      if (target === '#catalog') document.getElementById('catalog').scrollIntoView({ behavior: 'smooth' });
      else window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });

  var waUrl = 'https://wa.me/' + CFG.whatsappNumber;
  document.getElementById('topbar-wa').href = waUrl;
  document.getElementById('footer-wa').href = waUrl;
  document.getElementById('footer-contact-link').href = waUrl;
  document.getElementById('year').textContent = new Date().getFullYear();

  applyLang();
  renderCartCount();
  loadProducts().then(function (products) {
    state.products = products;
    renderAll();
    renderBest();
  }).catch(function (err) {
    console.error(err);
    document.getElementById('product-grid').innerHTML = '<p>Failed to load products.</p>';
  });
})();
