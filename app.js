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
      navBrands: 'الماركات',
      navAbout: 'عن ناسيمي',
      navContact: 'تواصل معنا',
      heroTitle: 'رؤيتك أوضح .. كل يوم',
      heroSub: 'عدسات لاصقة عالية الجودة من أفضل الماركات العالمية',
      shopNow: 'تسوق الآن',
      tileLenses: 'العدسات اللاصقة',
      tileSolutions: 'محلول العدسات',
      tileAccessories: 'الملحقات',
      bestTitle: 'أفضل المنتجات',
      brandsTitle: 'تسوق حسب الماركة',
      backHome: 'الرئيسية',
      viewAll: 'عرض الكل',
      bestBadge: 'الأكثر مبيعاً',
      catalogTitle: 'تصفح المنتجات',
      searchPh: 'ابحث عن منتج أو ماركة...',
      allCats: 'الكل',
      'Colored Lenses': 'عدسات ملونة',
      'Clear Lenses': 'عدسات طبية',
      'Solutions & Accessories': 'محاليل وإكسسوارات',
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
      sph: 'القياس (SPH)',
      cyl: 'الأسطوانة (CYL)',
      ax: 'المحور (AX)',
      choose: 'اختر',
      choosePowerError: 'من فضلك اختر القياس لكل عين قبل الإضافة إلى السلة',
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
      navBrands: 'Brands',
      navAbout: 'About Nasimi',
      navContact: 'Contact Us',
      heroTitle: 'Clearer vision .. every day',
      heroSub: 'High-quality contact lenses from the best international brands',
      shopNow: 'Shop Now',
      tileLenses: 'Contact Lenses',
      tileSolutions: 'Lens Solutions',
      tileAccessories: 'Accessories',
      bestTitle: 'Best Sellers',
      brandsTitle: 'Shop by Brand',
      backHome: 'Home',
      viewAll: 'View All',
      bestBadge: 'Best Seller',
      catalogTitle: 'Browse Products',
      searchPh: 'Search for a product or brand...',
      allCats: 'All',
      'Colored Lenses': 'Colored Lenses',
      'Clear Lenses': 'Clear Lenses',
      'Solutions & Accessories': 'Solutions & Accessories',
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
      sph: 'Power (SPH)',
      cyl: 'Cylinder (CYL)',
      ax: 'Axis (AX)',
      choose: 'Select',
      choosePowerError: 'Please choose a power for each eye before adding to cart',
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
    brandPage: null,
    brandCat: 'all',
    cart: migrateCart(JSON.parse(localStorage.getItem('nasimi_cart') || '[]'))
  };

  function migrateCart(items) {
    return items.map(function (i) {
      if (i.specs === undefined) {
        i.specs = i.powerR ? { R: { sph: i.powerR }, L: { sph: i.powerL || i.powerR } } : null;
        delete i.powerR; delete i.powerL;
      }
      return i;
    });
  }

  function t(key) { return (I18N[state.lang] && I18N[state.lang][key]) || I18N.en[key] || key; }

  function el(tag, cls, text) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text !== undefined) e.textContent = text;
    return e;
  }

  function fmtPrice(p) {
    var n = Number(p);
    if (!isFinite(n)) return '';
    return (n % 1 === 0 ? n.toLocaleString('en-US') : n.toFixed(2)) + ' ' + t('egp');
  }

  function isToric(p) { return /toric/i.test(p.title); }

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

  function sphValues() {
    var vals = ['0.00'];
    for (var d = 0.5; d <= 6.001; d += 0.25) vals.push('+' + d.toFixed(2));
    for (var m = 0.5; m <= 10.001; m += 0.25) vals.push('-' + m.toFixed(2));
    return vals;
  }
  function cylValues() { return ['-0.75', '-1.25', '-1.75', '-2.25']; }
  function axValues() {
    var vals = [];
    for (var a = 0; a <= 180; a += 10) vals.push(String(a));
    return vals;
  }

  function powerSelect(kind, values) {
    var sel = el('select', 'power-select');
    sel.setAttribute('data-kind', kind);
    var ph = el('option', '', t('choose'));
    ph.value = ''; ph.disabled = true; ph.selected = true;
    sel.appendChild(ph);
    values.forEach(function (v) {
      var o = el('option', '', v === '0.00' && kind === 'sph' ? t('plano') : v);
      o.value = v;
      sel.appendChild(o);
    });
    return sel;
  }

  function imgEl(p, cls) {
    var box = el('div', cls);
    if (p.image) {
      var img = el('img');
      img.src = p.image;
      img.alt = '';
      img.loading = 'lazy';
      img.onerror = function () {
        box.textContent = '';
        box.appendChild(el('span', 'ph-letter', (p.brand[0] || 'N')));
      };
      box.appendChild(img);
    } else {
      box.appendChild(el('span', 'ph-letter', (p.brand[0] || 'N')));
    }
    return box;
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
    var wrap = document.getElementById('cat-tabs');
    wrap.textContent = '';
    TABS.forEach(function (c) {
      var b = el('button', 'cat-tab' + (state.category === c ? ' active' : ''), c === 'all' ? t('allCats') : t(c));
      b.type = 'button';
      b.onclick = function () { setCategory(c); };
      wrap.appendChild(b);
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
    sel.textContent = '';
    var all = el('option', '', t('allBrands'));
    all.value = 'all';
    sel.appendChild(all);
    brands.forEach(function (b) {
      var o = el('option', '', b);
      o.value = b;
      if (state.brand === b) o.selected = true;
      sel.appendChild(o);
    });

    var showColors = state.category === 'all' || state.category === 'lenses' || state.category === 'Colored Lenses';
    var cc = document.getElementById('color-chips');
    cc.textContent = '';
    if (showColors) {
      var avail = {};
      state.products.forEach(function (p) {
        if (p.stock && p.category === 'Colored Lenses' && (state.brand === 'all' || p.brand === state.brand)) p.colors.forEach(function (c) { avail[c] = 1; });
      });
      t('colors').forEach(function (c) {
        if (!avail[c]) return;
        var b = el('button', 'chip' + (state.color === c ? ' active' : ''), t('colorNames')[c] || c);
        b.type = 'button';
        b.onclick = function () { state.color = state.color === c ? 'all' : c; renderAll(); };
        cc.appendChild(b);
      });
    }
    var dc = document.getElementById('duration-chips');
    dc.textContent = '';
    if (state.category !== 'solutions' && state.category !== 'accessories' && state.category !== 'Solutions & Accessories') {
      t('durations').forEach(function (d) {
        var b = el('button', 'chip' + (state.duration === d ? ' active' : ''), t('durationNames')[d] || d);
        b.type = 'button';
        b.onclick = function () { state.duration = state.duration === d ? 'all' : d; renderAll(); };
        dc.appendChild(b);
      });
    }
  }

  var CART_ICON_SVG = '<svg viewBox="0 0 24 24" class="ic"><path fill="none" stroke="currentColor" stroke-width="2" d="M6 6h15l-1.7 8.5a2 2 0 0 1-2 1.5H9.7a2 2 0 0 1-2-1.6L5.2 3.9A1 1 0 0 0 4.2 3H2"/><circle cx="9.5" cy="20" r="1.6" fill="currentColor"/><circle cx="17.5" cy="20" r="1.6" fill="currentColor"/></svg>';

  function cardEl(p, badge) {
    var card = el('div', 'product-card');
    if (badge) card.appendChild(el('span', 'p-badge', t('bestBadge')));
    card.appendChild(imgEl(p, 'product-img'));
    var info = el('div', 'product-info');
    info.appendChild(el('div', 'product-brand', p.brand));
    info.appendChild(el('div', 'product-title', p.title));
    info.appendChild(el('div', 'product-price', fmtPrice(p.price)));
    var btn = el('button', 'card-add');
    btn.type = 'button';
    btn.innerHTML = CART_ICON_SVG;
    btn.appendChild(document.createTextNode(t('addToCart')));
    info.appendChild(btn);
    card.appendChild(info);
    card.onclick = function () { openModal(p); };
    return card;
  }

  function renderGrid() {
    var list = filtered();
    document.getElementById('result-count').textContent = list.length + ' ' + t('results');
    var grid = document.getElementById('product-grid');
    grid.textContent = '';
    list.forEach(function (p) { grid.appendChild(cardEl(p, false)); });
  }

  var BRAND_EXCLUDE = { accessories: true };

  function brandList() {
    var counts = {};
    state.products.forEach(function (p) {
      if (!p.stock) return;
      if (BRAND_EXCLUDE[p.brand.toLowerCase()]) return;
      counts[p.brand] = (counts[p.brand] || 0) + 1;
    });
    return Object.keys(counts).sort(function (a, b) { return a.localeCompare(b); }).map(function (b) {
      return { name: b, count: counts[b] };
    });
  }

  function renderBrands() {
    var grid = document.getElementById('brands-grid');
    if (!grid) return;
    grid.textContent = '';
    brandList().forEach(function (b) {
      var card = el('a', 'brand-card');
      card.href = '#/brand/' + encodeURIComponent(b.name);
      card.appendChild(el('span', 'brand-letter', (b.name[0] || 'N')));
      card.appendChild(el('span', 'brand-name', b.name));
      card.appendChild(el('span', 'brand-count', b.count + ' ' + t('results')));
      grid.appendChild(card);
    });
  }

  function brandProducts(name) {
    return state.products.filter(function (p) { return p.stock && p.brand === name; });
  }

  function renderBrandPage() {
    var name = state.brandPage;
    if (!name) return;
    document.getElementById('brand-bc-name').textContent = name;
    document.getElementById('brand-page-title').textContent = name;
    document.getElementById('brand-page-letter').textContent = (name[0] || 'N');
    var prods = brandProducts(name);
    document.getElementById('brand-page-count').textContent = prods.length + ' ' + t('results');

    var cats = ['all', 'Colored Lenses', 'Clear Lenses', 'Solutions & Accessories'].filter(function (c) {
      return c === 'all' || prods.some(function (p) { return p.category === c; });
    });
    if (cats.indexOf(state.brandCat) < 0) state.brandCat = 'all';
    var tabs = document.getElementById('brand-cat-tabs');
    tabs.textContent = '';
    cats.forEach(function (c) {
      var b = el('button', 'cat-tab' + (state.brandCat === c ? ' active' : ''), c === 'all' ? t('allCats') : t(c));
      b.type = 'button';
      b.onclick = function () { state.brandCat = c; renderBrandPage(); };
      tabs.appendChild(b);
    });

    var grid = document.getElementById('brand-grid');
    grid.textContent = '';
    prods.filter(function (p) { return state.brandCat === 'all' || p.category === state.brandCat; })
      .forEach(function (p) { grid.appendChild(cardEl(p, false)); });
  }

  var VIEW_SECTIONS = {
    home: ['.hero', '.cat-tiles', '#best', '#brands', '.trust', '.about'],
    catalog: ['#catalog', '.trust'],
    brand: ['#brand-page', '.trust']
  };
  var ALL_VIEW_SELS = ['.hero', '.cat-tiles', '#best', '#brands', '.trust', '.about', '#catalog', '#brand-page'];
  function showView(name) {
    var show = VIEW_SECTIONS[name];
    ALL_VIEW_SELS.forEach(function (s) {
      var elm = document.querySelector(s);
      if (elm) elm.classList.toggle('hidden', show.indexOf(s) < 0);
    });
  }

  function currentView() {
    if (/^#\/brand\//.test(location.hash)) return 'brand';
    if (location.hash === '#catalog') return 'catalog';
    return 'home';
  }

  function router(scroll) {
    var h = location.hash;
    var m = h.match(/^#\/brand\/(.+)$/);
    if (m) {
      var name = decodeURIComponent(m[1]);
      if (name !== state.brandPage) { state.brandPage = name; state.brandCat = 'all'; }
      renderBrandPage();
      showView('brand');
      if (scroll !== false) window.scrollTo({ top: 0 });
    } else if (h === '#catalog') {
      showView('catalog');
      if (scroll !== false) document.getElementById('catalog').scrollIntoView();
    } else {
      state.brandPage = null;
      showView('home');
      renderTabs();
    }
  }

  var BEST_TITLES = ['1-DAY ACUVUE OASYS', 'Acuvue Oasys', 'Acuvue Moist', 'Acuvue Oasys Toric'];
  function renderBest() {
    var grid = document.getElementById('best-grid');
    grid.textContent = '';
    var picks = [];
    BEST_TITLES.forEach(function (title) {
      var p = state.products.filter(function (x) { return x.title === title && x.stock; })[0];
      if (p) picks.push(p);
    });
    state.products.forEach(function (p) {
      if (picks.length >= 4) return;
      if (p.stock && p.category === 'Colored Lenses' && (p.brand === 'Bella' || p.brand === 'Desio') && picks.indexOf(p) < 0) picks.push(p);
    });
    picks.slice(0, 4).forEach(function (p) { grid.appendChild(cardEl(p, true)); });
  }

  function eyeSpecBlock(eyeLabel, eyeKey, toric) {
    var wrap = el('div', 'eye-block');
    wrap.appendChild(el('div', 'eye-label', eyeLabel));
    var fields = el('div', 'eye-fields');
    var sphF = el('div', 'power-field');
    sphF.appendChild(el('label', '', t('sph')));
    sphF.appendChild(powerSelect('sph-' + eyeKey, sphValues()));
    fields.appendChild(sphF);
    if (toric) {
      var cylF = el('div', 'power-field');
      cylF.appendChild(el('label', '', t('cyl')));
      cylF.appendChild(powerSelect('cyl-' + eyeKey, cylValues()));
      fields.appendChild(cylF);
      var axF = el('div', 'power-field');
      axF.appendChild(el('label', '', t('ax')));
      axF.appendChild(powerSelect('ax-' + eyeKey, axValues()));
      fields.appendChild(axF);
    }
    wrap.appendChild(fields);
    return wrap;
  }

  var modalProduct = null;
  function openModal(p) {
    modalProduct = p;
    var toric = isToric(p);
    var body = document.getElementById('modal-body');
    body.textContent = '';
    body.appendChild(el('h3', '', p.title));
    body.appendChild(el('div', 'm-brand', p.brand));
    body.appendChild(imgEl(p, 'm-img'));
    body.appendChild(el('div', 'm-price', fmtPrice(p.price)));

    var err = el('div', 'power-error hidden', t('choosePowerError'));
    err.id = 'power-error';

    var qty = 1;
    if (p.power) {
      var specs = el('div', 'eye-specs');
      specs.appendChild(eyeSpecBlock(t('powerR'), 'r', toric));
      specs.appendChild(eyeSpecBlock(t('powerL'), 'l', toric));
      body.appendChild(specs);
      body.appendChild(err);
    }

    var qtyRow = el('div', 'qty-row');
    qtyRow.appendChild(el('span', '', t('qty')));
    var minus = el('button', 'qty-btn', '−'); minus.type = 'button';
    var val = el('span', '', '1'); val.id = 'q-val';
    var plus = el('button', 'qty-btn', '+'); plus.type = 'button';
    minus.onclick = function () { qty = Math.max(1, qty - 1); val.textContent = qty; };
    plus.onclick = function () { qty = Math.min(20, qty + 1); val.textContent = qty; };
    qtyRow.appendChild(minus); qtyRow.appendChild(val); qtyRow.appendChild(plus);
    body.appendChild(qtyRow);

    var add = el('button', 'btn-add', t('addToCart'));
    add.type = 'button';
    add.id = 'add-btn';
    add.onclick = function () {
      var specs = null;
      if (p.power) {
        specs = {};
        var ok = true;
        ['r', 'l'].forEach(function (eye) {
          var eyeSpec = {};
          body.querySelectorAll('select[data-kind$="-' + eye + '"]').forEach(function (sel) {
            var kind = sel.getAttribute('data-kind').split('-')[0];
            eyeSpec[kind] = sel.value;
            if (!sel.value) { ok = false; sel.classList.add('select-error'); }
            else sel.classList.remove('select-error');
          });
          specs[eye.toUpperCase()] = eyeSpec;
        });
        if (!ok) {
          err.classList.remove('hidden');
          return;
        }
      }
      addToCart(p, qty, specs);
      closeModal();
      openCart();
    };
    body.appendChild(add);
    document.getElementById('modal-backdrop').classList.remove('hidden');
  }
  function closeModal() { document.getElementById('modal-backdrop').classList.add('hidden'); modalProduct = null; }

  function saveCart() { localStorage.setItem('nasimi_cart', JSON.stringify(state.cart)); }
  function cartCount() { return state.cart.reduce(function (s, i) { return s + i.qty; }, 0); }
  function cartTotal() { return state.cart.reduce(function (s, i) { return s + i.qty * (i.price || 0); }, 0); }

  function addToCart(p, qty, specs) {
    var key = p.id + '|' + JSON.stringify(specs || null);
    var ex = state.cart.filter(function (i) { return i.key === key; })[0];
    if (ex) ex.qty = Math.min(20, ex.qty + qty);
    else state.cart.push({ key: key, id: p.id, title: p.title, brand: p.brand, price: p.price, qty: qty, specs: specs });
    saveCart();
    renderCartCount();
  }

  function renderCartCount() { document.getElementById('cart-count').textContent = cartCount(); }

  function fmtEye(spec, labels) {
    var parts = [];
    if (spec.sph) parts.push((labels ? 'SPH ' : '') + spec.sph);
    if (spec.cyl) parts.push('CYL ' + spec.cyl);
    if (spec.ax !== undefined && spec.ax !== null && spec.ax !== '') parts.push('AX ' + spec.ax);
    return parts.join(labels ? ', ' : ' / ');
  }

  function fmtSpecs(i, labels) {
    if (!i.specs) return '';
    return t('rightEye') + ': ' + fmtEye(i.specs.R || {}, labels) + ' | ' + t('leftEye') + ': ' + fmtEye(i.specs.L || {}, labels);
  }

  function renderCart() {
    var wrap = document.getElementById('cart-items');
    wrap.textContent = '';
    if (!state.cart.length) {
      wrap.appendChild(el('div', 'cart-empty', t('cartEmpty')));
    } else {
      state.cart.forEach(function (i, idx) {
        var div = el('div', 'cart-item');
        div.appendChild(el('div', 'ci-title', i.title));
        var meta = i.brand;
        var specStr = fmtSpecs(i, false);
        if (specStr) meta += ' · ' + specStr;
        div.appendChild(el('div', 'ci-meta', meta));
        var row = el('div', 'ci-row');
        var qtyWrap = el('div', 'ci-qty');
        var minus = el('button', '', '−'); minus.type = 'button';
        qtyWrap.appendChild(minus);
        qtyWrap.appendChild(el('span', '', String(i.qty)));
        var plus = el('button', '', '+'); plus.type = 'button';
        qtyWrap.appendChild(plus);
        minus.onclick = function () { i.qty = Math.max(1, i.qty - 1); saveCart(); renderCart(); renderCartCount(); };
        plus.onclick = function () { i.qty = Math.min(20, i.qty + 1); saveCart(); renderCart(); renderCartCount(); };
        row.appendChild(qtyWrap);
        row.appendChild(el('strong', '', fmtPrice((i.price || 0) * i.qty)));
        var rm = el('button', 'ci-remove', t('remove')); rm.type = 'button';
        rm.onclick = function () { state.cart.splice(idx, 1); saveCart(); renderCart(); renderCartCount(); };
        row.appendChild(rm);
        div.appendChild(row);
        wrap.appendChild(div);
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
      if (i.specs) line += ' | ' + fmtSpecs(i, true);
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
    document.querySelectorAll('[data-i18n]').forEach(function (elm) { elm.textContent = t(elm.getAttribute('data-i18n')); });
    document.querySelectorAll('[data-i18n-ph]').forEach(function (elm) { elm.placeholder = t(elm.getAttribute('data-i18n-ph')); });
    document.getElementById('checkout-wa').textContent = t('checkout');
    document.title = ar ? 'ناسيمي | NASIMI - عدسات لاصقة' : 'NASIMI | ناسيمي - Contact Lenses';
    localStorage.setItem('nasimi_lang', state.lang);
  }

  function renderAll() { applyLang(); renderTabs(); renderFilters(); renderGrid(); renderCartCount(); }
  function recount() { document.getElementById('result-count').textContent = filtered().length + ' ' + t('results'); }

  document.getElementById('lang-toggle').onclick = function () { state.lang = state.lang === 'ar' ? 'en' : 'ar'; renderAll(); renderBest(); renderBrands(); renderBrandPage(); renderCart(); };
  document.getElementById('search').oninput = function (e) { state.search = e.target.value; renderGrid(); recount(); };
  document.getElementById('brand-filter').onchange = function (e) { state.brand = e.target.value; state.color = 'all'; renderFilters(); renderGrid(); recount(); };
  document.getElementById('cart-button').onclick = openCart;
  document.getElementById('cart-close').onclick = closeCart;
  document.getElementById('modal-close').onclick = closeModal;
  document.getElementById('modal-backdrop').onclick = function (e) { if (e.target === this) closeModal(); };
  document.getElementById('checkout-wa').onclick = checkout;
  document.getElementById('search-jump').onclick = function () {
    if (location.hash === '#catalog') router(); else location.hash = '#catalog';
    setTimeout(function () { document.getElementById('search').focus(); }, 500);
  };
  document.getElementById('brand-home').onclick = function (e) { e.preventDefault(); if (location.hash) location.hash = ''; else router(); window.scrollTo({ top: 0, behavior: 'smooth' }); };

  document.querySelectorAll('[data-cat]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      e.preventDefault();
      setCategory(a.getAttribute('data-cat'));
      if (a.getAttribute('href') === '#catalog') {
        if (location.hash === '#catalog') router(); else location.hash = '#catalog';
      } else {
        if (location.hash) location.hash = ''; else router();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
  });

  document.getElementById('brand-back').onclick = function (e) { e.preventDefault(); location.hash = ''; };
  document.getElementById('brand-bc-brands').onclick = function (e) {
    e.preventDefault();
    location.hash = '';
    setTimeout(function () { document.getElementById('brands').scrollIntoView({ behavior: 'smooth' }); }, 60);
  };
  document.querySelectorAll('a[href="#about"], a[href="#contact"], a[href="#brands"]').forEach(function (a) {
    if (a.id === 'brand-bc-brands') return;
    a.addEventListener('click', function (e) {
      e.preventDefault();
      var target = a.getAttribute('href');
      if (location.hash) location.hash = ''; else router();
      setTimeout(function () {
        var elm = document.querySelector(target);
        if (elm) elm.scrollIntoView({ behavior: 'smooth' });
      }, 60);
    });
  });
  window.addEventListener('hashchange', function () { router(); });

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
    renderBrands();
    router(false);
  }).catch(function (err) {
    console.error(err);
    document.getElementById('product-grid').textContent = 'Failed to load products.';
  });
})();
