/* Core: namespace, i18n, state, helpers, catalog data. No framework, no build step. */
window.NS = { C: {}, P: {} };
(function (NS) {
  'use strict';
  var CFG = NS.CFG = window.NASIMI_CONFIG;

  var I18N = NS.I18N = {
    ar: {
      topbarContact: 'تواصل معنا عبر واتساب:', topbarOriginal: 'منتجات أصلية 100%',
      navHome: 'الرئيسية', navLenses: 'العدسات', navSolutions: 'المحاليل', navAccessories: 'الإكسسوارات', navBrands: 'الماركات', navAbout: 'من نحن', navContact: 'تواصل معنا',
      menu: 'القائمة', close: 'إغلاق', cart: 'السلة', search: 'بحث', searchPh: 'ابحث عن عدسة، لون، أو منتج...',
      heroTitle: 'عدساتك اليومية… برؤية أوضح وأناقة أكثر.',
      heroSub: 'عدسات طبية، عدسات ملونة، محاليل وكل ما تحتاجه لعناية عينيك.',
      shopNow: 'تسوق الآن', discover: 'اكتشف العدسات',
      shopByCat: 'تسوق حسب الفئة',
      catClear: 'العدسات الطبية', catClearD: 'عدسات يومية وشهرية بالقياس اللي محتاجه.',
      catColored: 'العدسات الملونة', catColoredD: 'اكتشف ألوان تناسب إطلالتك.',
      catSolutions: 'المحاليل', catSolutionsD: 'محاليل للعناية بعدساتك.',
      catAccessories: 'الإكسسوارات', catAccessoriesD: 'علب وملحقات للعدسات.',
      exploreCat: 'اكتشف المجموعة', viewAll: 'عرض الكل',
      bestTitle: 'أفضل المنتجات', newTitle: 'وصل حديثاً', brandsTitle: 'تسوق حسب الماركة',
      whyTitle: 'لماذا ناسيمي؟',
      why1: 'منتجات أصلية', why1d: 'ماركات عالمية معروفة، ومنتجات أصلية 100%.',
      why2: 'اختيار سهل', why2d: 'اختار القياس لكل عين بخطوات واضحة.',
      why3: 'دعم قبل وبعد الشراء', why3d: 'فريقنا معاك على واتساب لأي سؤال.',
      why4: 'طلب بسيط', why4d: 'تكمل الطلب في دقيقة وتبعته على واتساب.',
      aboutTitle: 'عن ناسيمي',
      aboutText: 'ناسيمي وجهتك الأولى للعدسات اللاصقة الأصلية في مصر. نختار لك أفضل الماركات العالمية من العدسات الملونة والطبية والمحاليل. لأن عينيك تستحق الأفضل.',
      footerAbout: 'عدسات لاصقة أصلية من أفضل الماركات العالمية.',
      footerShop: 'تسوق', footerHelp: 'المساعدة', footerContact: 'تواصل معنا', footerHours: 'من 9 ص إلى 12 م',
      whatsapp: 'واتساب', rights: 'Nasimi. All rights reserved.',
      home: 'الرئيسية', brands: 'الماركات', all: 'الكل', allLenses: 'كل العدسات',
      'Colored Lenses': 'عدسات ملونة', 'Clear Lenses': 'عدسات طبية',
      productsCount: 'منتج', egp: 'جنيه',
      sort: 'ترتيب', sortDefault: 'الافتراضي', sortPriceAsc: 'السعر: الأقل', sortPriceDesc: 'السعر: الأعلى', sortNew: 'الأحدث',
      filter: 'فلتر', filters: 'الفلاتر', apply: 'عرض النتائج', reset: 'إعادة ضبط',
      fBrand: 'الماركة', fColor: 'اللون', fDuration: 'النوع', fPrice: 'السعر', min: 'من', max: 'إلى', allBrands: 'كل الماركات',
      daily: 'يومية', monthly: 'شهرية', quarterly: 'ربع سنوية',
      addToCart: 'أضف للسلة', choosePower: 'اختر القياس', buyNow: 'اشترِ الآن',
      added: 'تمت إضافة المنتج إلى السلة', viewCart: 'عرض السلة', keepShopping: 'متابعة التسوق',
      cartTitle: 'سلة التسوق', cartEmpty: 'السلة فاضية', cartEmptyD: 'ابدأ بإضافة منتجات من المتجر.',
      total: 'الإجمالي', remove: 'حذف', edit: 'تعديل', qty: 'الكمية',
      cartInvalid: 'أزلنا هذه المنتجات من السلة لأن قياساتها غير مكتملة. أعد إضافتها واختر القياسات الكاملة لكل عين:',
      checkoutTitle: 'بيانات الطلب', phName: 'الاسم', phPhone: 'رقم الموبايل', phGov: 'المحافظة', phAddress: 'العنوان بالتفصيل', phNotes: 'ملاحظات (اختياري)',
      chooseGov: 'اختر المحافظة',
      errName: 'اكتب اسمك', errPhone: 'اكتب رقم موبايل صحيح', errGov: 'اختر المحافظة', errAddress: 'اكتب العنوان',
      confirmOrder: 'تأكيد الطلب عبر واتساب', orderSummary: 'ملخص الطلب',
      cartNote: 'هيتفتح واتساب برسالة جاهزة بطلبك لتبعتها لنا.',
      rightEye: 'العين اليمنى', leftEye: 'العين اليسرى', sameEye: 'نفس القياس للعينين',
      sph: 'القياس (SPH)', cyl: 'الأسطوانة (CYL)', ax: 'المحور (AX)', choose: 'اختر', plano: 'بدون قياس (0.00)',
      pickPower: 'اختر درجة العدسة',
      choosePowerError: 'من فضلك اختر القياس لكل عين قبل الإضافة للسلة',
      specs: 'المواصفات', spBrand: 'الماركة', spType: 'النوع', spDuration: 'مدة الاستخدام', spColors: 'الألوان', spPower: 'القياسات',
      spPowerYes: 'متوفرة بقياسات مختلفة', spPowerNo: 'بدون قياس',
      related: 'منتجات قد تعجبك',
      emptyTitle: 'لم نجد منتجات مطابقة', emptyD: 'جرب تغيير الفلاتر أو البحث عن منتج آخر.', resetFilters: 'إعادة ضبط الفلاتر',
      errTitle: 'حدث خطأ غير متوقع', errD: 'تعذر تحميل المنتجات. حاول مرة أخرى.', retry: 'إعادة المحاولة',
      notFoundTitle: 'المنتج غير موجود', notFoundD: 'ممكن يكون اتشال من المتجر.', backShop: 'الرجوع للمتجر',
      askWa: 'اسألنا على واتساب',
      newBadge: 'جديد', toricBadge: 'Toric',
      orderIntro: 'مرحباً ناسيمي، أريد تأكيد هذا الطلب:', orderTotal: 'الإجمالي', orderName: 'الاسم:', orderPhone: 'الموبايل:', orderGov: 'المحافظة:', orderAddress: 'العنوان:', orderNotes: 'ملاحظات:',
      rEye: 'يمين', lEye: 'يسار',
      colorNames: { Blue: 'أزرق', Green: 'أخضر', Grey: 'رمادي', Hazel: 'عسلي فاتح', Brown: 'بني', Honey: 'عسلي', Olive: 'زيتوني', Turquoise: 'تركوازي', Violet: 'بنفسجي', Pink: 'وردي', Chocolate: 'شوكولاتة', Black: 'أسود', Amber: 'كهرماني', Mint: 'نعناعي', Sky: 'سماوي', Ice: 'ثلجي', Gold: 'ذهبي', Purple: 'أرجواني' },
      govs: ['القاهرة','الجيزة','الإسكندرية','الدقهلية','البحيرة','الفيوم','الغربية','الإسماعيلية','المنوفية','المنيا','القليوبية','الوادي الجديد','السويس','أسوان','أسيوط','بني سويف','بورسعيد','دمياط','الشرقية','جنوب سيناء','كفر الشيخ','مطروح','الأقصر','قنا','شمال سيناء','سوهاج','البحر الأحمر'],
      metaHome: 'ناسيمي | NASIMI - عدسات لاصقة طبية وملونة ومحاليل في مصر',
      metaHomeD: 'ناسيمي: عدسات لاصقة طبية وملونة ومحاليل من أفضل الماركات العالمية. اختار قياسك وأكمل طلبك على واتساب.'
    },
    en: {
      topbarContact: 'Contact us on WhatsApp:', topbarOriginal: '100% Original Products',
      navHome: 'Home', navLenses: 'Lenses', navSolutions: 'Solutions', navAccessories: 'Accessories', navBrands: 'Brands', navAbout: 'About', navContact: 'Contact',
      menu: 'Menu', close: 'Close', cart: 'Cart', search: 'Search', searchPh: 'Search for a lens, color or product...',
      heroTitle: 'Your everyday lenses, with clearer vision and more style.',
      heroSub: 'Clear lenses, colored lenses, solutions and everything you need to care for your eyes.',
      shopNow: 'Shop now', discover: 'Discover lenses',
      shopByCat: 'Shop by category',
      catClear: 'Clear Lenses', catClearD: 'Daily and monthly lenses in the power you need.',
      catColored: 'Colored Lenses', catColoredD: 'Discover colors that suit your look.',
      catSolutions: 'Solutions', catSolutionsD: 'Solutions to care for your lenses.',
      catAccessories: 'Accessories', catAccessoriesD: 'Cases and lens accessories.',
      exploreCat: 'Explore the collection', viewAll: 'View all',
      bestTitle: 'Top Picks', newTitle: 'New Arrivals', brandsTitle: 'Shop by Brand',
      whyTitle: 'Why NASIMI?',
      why1: 'Original products', why1d: 'Well-known international brands, 100% original.',
      why2: 'Easy selection', why2d: 'Choose the power for each eye in clear steps.',
      why3: 'Support before and after', why3d: 'Our team is with you on WhatsApp for any question.',
      why4: 'Simple ordering', why4d: 'Finish your order in a minute and send it on WhatsApp.',
      aboutTitle: 'About Nasimi',
      aboutText: 'Nasimi is your first destination for original contact lenses in Egypt. We pick the best international brands of colored and clear lenses and solutions. Because your eyes deserve the best.',
      footerAbout: 'Original contact lenses from the best international brands.',
      footerShop: 'Shop', footerHelp: 'Help', footerContact: 'Contact us', footerHours: '9 AM to 12 AM',
      whatsapp: 'WhatsApp', rights: 'Nasimi. All rights reserved.',
      home: 'Home', brands: 'Brands', all: 'All', allLenses: 'All lenses',
      'Colored Lenses': 'Colored Lenses', 'Clear Lenses': 'Clear Lenses',
      productsCount: 'products', egp: 'EGP',
      sort: 'Sort', sortDefault: 'Default', sortPriceAsc: 'Price: low to high', sortPriceDesc: 'Price: high to low', sortNew: 'Newest',
      filter: 'Filter', filters: 'Filters', apply: 'Show results', reset: 'Reset',
      fBrand: 'Brand', fColor: 'Color', fDuration: 'Type', fPrice: 'Price', min: 'Min', max: 'Max', allBrands: 'All brands',
      daily: 'Daily', monthly: 'Monthly', quarterly: 'Quarterly',
      addToCart: 'Add to cart', choosePower: 'Choose power', buyNow: 'Buy now',
      added: 'Added to cart', viewCart: 'View cart', keepShopping: 'Keep shopping',
      cartTitle: 'Shopping Cart', cartEmpty: 'Your cart is empty', cartEmptyD: 'Start by adding products from the store.',
      total: 'Total', remove: 'Remove', edit: 'Edit', qty: 'Qty',
      cartInvalid: 'We removed these items because their lens powers were incomplete. Please add them again and choose the full powers for each eye:',
      checkoutTitle: 'Order details', phName: 'Name', phPhone: 'Mobile number', phGov: 'Governorate', phAddress: 'Full address', phNotes: 'Notes (optional)',
      chooseGov: 'Choose governorate',
      errName: 'Enter your name', errPhone: 'Enter a valid mobile number', errGov: 'Choose a governorate', errAddress: 'Enter your address',
      confirmOrder: 'Confirm order on WhatsApp', orderSummary: 'Order summary',
      cartNote: 'WhatsApp will open with a ready message of your order to send to us.',
      rightEye: 'Right eye', leftEye: 'Left eye', sameEye: 'Same power for both eyes',
      sph: 'Power (SPH)', cyl: 'Cylinder (CYL)', ax: 'Axis (AX)', choose: 'Select', plano: 'Plano (0.00)',
      pickPower: 'Choose your lens power',
      choosePowerError: 'Please choose a power for each eye before adding to cart',
      specs: 'Specifications', spBrand: 'Brand', spType: 'Type', spDuration: 'Wear duration', spColors: 'Colors', spPower: 'Powers',
      spPowerYes: 'Available in different powers', spPowerNo: 'No power needed',
      related: 'You may also like',
      emptyTitle: 'No matching products', emptyD: 'Try changing the filters or searching for another product.', resetFilters: 'Reset filters',
      errTitle: 'Something went wrong', errD: 'We could not load the products. Please try again.', retry: 'Try again',
      notFoundTitle: 'Product not found', notFoundD: 'It may have been removed from the store.', backShop: 'Back to the store',
      askWa: 'Ask us on WhatsApp',
      newBadge: 'New', toricBadge: 'Toric',
      orderIntro: 'Hello Nasimi, I would like to confirm this order:', orderTotal: 'Total', orderName: 'Name:', orderPhone: 'Mobile:', orderGov: 'Governorate:', orderAddress: 'Address:', orderNotes: 'Notes:',
      rEye: 'R', lEye: 'L',
      colorNames: { Blue: 'Blue', Green: 'Green', Grey: 'Grey', Hazel: 'Hazel', Brown: 'Brown', Honey: 'Honey', Olive: 'Olive', Turquoise: 'Turquoise', Violet: 'Violet', Pink: 'Pink', Chocolate: 'Chocolate', Black: 'Black', Amber: 'Amber', Mint: 'Mint', Sky: 'Sky', Ice: 'Ice', Gold: 'Gold', Purple: 'Purple' },
      govs: ['Cairo','Giza','Alexandria','Dakahlia','Beheira','Fayoum','Gharbia','Ismailia','Monufia','Minya','Qalyubia','New Valley','Suez','Aswan','Asyut','Beni Suef','Port Said','Damietta','Sharqia','South Sinai','Kafr El Sheikh','Matrouh','Luxor','Qena','North Sinai','Sohag','Red Sea'],
      metaHome: 'NASIMI | ناسيمي - Clear and colored contact lenses and solutions in Egypt',
      metaHomeD: 'NASIMI: clear and colored contact lenses and solutions from the best international brands. Choose your power and complete your order on WhatsApp.'
    }
  };

  var COLOR_HEX = NS.COLOR_HEX = { Blue: '#4a7bd0', Green: '#4f9a5a', Grey: '#9a9fa6', Hazel: '#a98a4f', Brown: '#6b4426', Honey: '#c9922e', Olive: '#7a7a3a', Turquoise: '#2fb5b0', Violet: '#8a5fc4', Pink: '#e48fb0', Chocolate: '#4a2c1a', Black: '#222222', Amber: '#c27a1a', Mint: '#98d8b8', Sky: '#8fc7ee', Ice: '#cfe6f2', Gold: '#d4af37', Purple: '#6b2f8f' };
  NS.COLOR_ORDER = Object.keys(COLOR_HEX);

  var urlLang = new URLSearchParams(location.search).get('lang');
  var state = NS.state = {
    lang: (urlLang === 'en' || urlLang === 'ar') ? urlLang : (localStorage.getItem('nasimi_lang') || 'ar'),
    products: [], status: 'loading',
    cart: []
  };

  NS.t = function (k) { var d = I18N[state.lang]; return (d && d[k] !== undefined) ? d[k] : (I18N.en[k] !== undefined ? I18N.en[k] : k); };

  /* DOM helper: h('div', {class:'x', onclick:fn, a:{href:'#'}}, child, 'text', ...) */
  NS.h = function (tag, props) {
    var e = document.createElement(tag);
    if (props) Object.keys(props).forEach(function (k) {
      var v = props[k];
      if (v === undefined || v === null || v === false) return;
      if (k === 'class') e.className = v;
      else if (k === 'text') e.textContent = v;
      else if (k === 'a') Object.keys(v).forEach(function (n) { if (v[n] !== undefined && v[n] !== null) e.setAttribute(n, v[n]); });
      else if (k.slice(0, 2) === 'on') e[k] = v;
      else e[k] = v;
    });
    for (var i = 2; i < arguments.length; i++) NS.add(e, arguments[i]);
    return e;
  };
  NS.add = function (parent, c) {
    if (c === undefined || c === null || c === false) return;
    if (Array.isArray(c)) c.forEach(function (x) { NS.add(parent, x); });
    else parent.appendChild(typeof c === 'string' || typeof c === 'number' ? document.createTextNode(String(c)) : c);
  };
  NS.clear = function (n) { while (n.firstChild) n.removeChild(n.firstChild); return n; };
  NS.$ = function (s, r) { return (r || document).querySelector(s); };
  NS.$$ = function (s, r) { return [].slice.call((r || document).querySelectorAll(s)); };

  NS.icon = function (name) {
    var paths = {
      search: '<path fill="none" stroke="currentColor" stroke-width="2" d="M10.5 3a7.5 7.5 0 1 0 4.6 13.4l4.7 4.7 1.4-1.4-4.7-4.7A7.5 7.5 0 0 0 10.5 3Zm0 2a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11Z"/>',
      cart: '<path fill="none" stroke="currentColor" stroke-width="2" d="M6 6h15l-1.7 8.5a2 2 0 0 1-2 1.5H9.7a2 2 0 0 1-2-1.6L5.2 3.9A1 1 0 0 0 4.2 3H2"/><circle cx="9.5" cy="20" r="1.6" fill="currentColor"/><circle cx="17.5" cy="20" r="1.6" fill="currentColor"/>',
      menu: '<path stroke="currentColor" stroke-width="2" stroke-linecap="round" d="M4 7h16M4 12h16M4 17h16"/>',
      close: '<path stroke="currentColor" stroke-width="2" stroke-linecap="round" d="M6 6l12 12M18 6 6 18"/>',
      eye: '<path fill="none" stroke="currentColor" stroke-width="1.6" d="M12 5c4.4 0 8.4 3 10 7-1.6 4-5.6 7-10 7S3.6 16 2 12c1.6-4 5.6-7 10-7Z"/><circle cx="12" cy="12" r="3.2" fill="none" stroke="currentColor" stroke-width="1.6"/>',
      palette: '<path fill="none" stroke="currentColor" stroke-width="1.6" d="M12 3a9 9 0 1 0 0 18c1.4 0 2-1 1.6-2.1-.5-1.3.3-2.4 1.7-2.4H17a4 4 0 0 0 4-4C21 6.9 17 3 12 3Z"/><circle cx="7.5" cy="11" r="1.2" fill="currentColor"/><circle cx="10.5" cy="7.5" r="1.2" fill="currentColor"/><circle cx="15" cy="7.8" r="1.2" fill="currentColor"/>',
      drop: '<path fill="none" stroke="currentColor" stroke-width="1.6" d="M10 2h4v3h-4zM9 5h6l1 3v12a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V8l1-3Z"/><path fill="none" stroke="currentColor" stroke-width="1.6" d="M8 13h8"/>',
      box: '<rect x="3" y="7" width="18" height="12" rx="3" fill="none" stroke="currentColor" stroke-width="1.6"/><path stroke="currentColor" stroke-width="1.6" d="M3 12h18M9 4h6"/>',
      shield: '<path fill="none" stroke="currentColor" stroke-width="1.7" d="M12 2 4 5v6c0 5 3.4 9.7 8 11 4.6-1.3 8-6 8-11V5l-8-3Z"/><path fill="none" stroke="currentColor" stroke-width="1.7" d="m8.5 12 2.5 2.5 4.5-5"/>',
      chat: '<path fill="none" stroke="currentColor" stroke-width="1.7" d="M4 5h16v11H9l-5 4V5Z"/>',
      tap: '<path fill="none" stroke="currentColor" stroke-width="1.7" d="M9 11V5a1.5 1.5 0 0 1 3 0v5h1.5a3 3 0 0 1 3 3v2a5 5 0 0 1-5 5H10a4 4 0 0 1-3-1.4L4 15l1.7-1.2L9 15"/>',
      sparkle: '<path fill="none" stroke="currentColor" stroke-width="1.7" d="M12 3l2 6 6 2-6 2-2 6-2-6-6-2 6-2 2-6Z"/>',
      warn: '<path fill="none" stroke="currentColor" stroke-width="1.7" d="M12 3 2 20h20L12 3Z"/><path stroke="currentColor" stroke-width="1.7" d="M12 10v4M12 17.5v.5"/>',
      wa: '<path fill="currentColor" d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm5.2 14.2c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .2-3.4-.7-2.9-1.2-4.7-4.1-4.9-4.3-.1-.2-1.1-1.5-1.1-2.9s.7-2 1-2.3c.3-.3.6-.4.8-.4h.6c.2 0 .4 0 .6.5s.8 1.9.8 2c.1.1.1.3 0 .5-.3.6-.7.9-.5 1.2.7 1.2 1.6 2 2.8 2.6.3.2.5.1.7-.1l.9-1c.2-.3.4-.2.7-.1l1.9.9c.3.1.5.2.5.4 0 .1 0 .7-.2 1.5Z"/>'
    };
    var s = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    s.setAttribute('viewBox', '0 0 24 24'); s.setAttribute('class', 'ic'); s.setAttribute('aria-hidden', 'true');
    s.innerHTML = paths[name] || '';   // static internal strings only, never catalog data
    return s;
  };

  NS.fmtPrice = function (p) {
    var n = Number(p); if (!isFinite(n) || p === null) return '';
    return (n % 1 === 0 ? n.toLocaleString('en-US') : n.toFixed(2)) + ' ' + NS.t('egp');
  };
  NS.isToric = function (p) { return /toric/i.test(p.title); };
  NS.isAccessory = function (p) {
    return p.category === 'Solutions & Accessories' && (p.brand.toLowerCase() === 'accessories' || /box|case|holder|tweezers/i.test(p.title));
  };
  NS.typeKey = function (p) { return p.category === 'Colored Lenses' ? 'colored' : p.category === 'Clear Lenses' ? 'clear' : NS.isAccessory(p) ? 'accessories' : 'solutions'; };

  /* Per-brand sphere range: [maxPlus, maxMinus]. Default +6.00 to -10.00. */
  var SPH_RANGE = { 'MYLENS': [0, 8] };
  NS.sphValues = function (brand) {
    var rg = SPH_RANGE[brand] || [6, 10], vals = ['0.00'], d, m;
    for (d = 0.5; d <= rg[0] + 0.001; d += 0.25) vals.push('+' + d.toFixed(2));
    for (m = 0.5; m <= rg[1] + 0.001; m += 0.25) vals.push('-' + m.toFixed(2));
    return vals;
  };
  NS.cylValues = function () { return ['-0.75', '-1.25', '-1.75', '-2.25']; };
  NS.axValues = function () { var v = [], a; for (a = 10; a <= 180; a += 10) v.push(String(a)); return v; };

  /* ---------- catalog ---------- */
  function parseCsv(text) {
    var rows = [], row = [], cur = '', inQ = false, i, c;
    for (i = 0; i < text.length; i++) {
      c = text[i];
      if (inQ) { if (c === '"') { if (text[i + 1] === '"') { cur += '"'; i++; } else inQ = false; } else cur += c; }
      else if (c === '"') inQ = true;
      else if (c === ',') { row.push(cur); cur = ''; }
      else if (c === '\n' || c === '\r') {
        if (c === '\r' && text[i + 1] === '\n') i++;
        row.push(cur); cur = '';
        if (row.length > 1 || row[0] !== '') rows.push(row);
        row = [];
      } else cur += c;
    }
    if (cur !== '' || row.length) { row.push(cur); rows.push(row); }
    var head = rows.shift().map(function (x) { return x.trim().toLowerCase(); });
    return rows.map(function (r) { var o = {}; head.forEach(function (k, ix) { o[k] = (r[ix] || '').trim(); }); return o; });
  }
  function truthy(v) { return v === true || v === 'yes' || v === 'TRUE' || v === 'true' || v === '1'; }
  function normalize(raw, idx) {
    return {
      id: raw.id, idx: idx, title: raw.title, brand: raw.brand || 'Other',
      category: raw.category || 'Colored Lenses',
      price: parseFloat(raw.price) || null,
      colors: raw.colors ? raw.colors.split('|').filter(Boolean) : [],
      duration: raw.duration || '', power: truthy(raw.power), image: raw.image || '',
      stock: raw.stock === undefined || raw.stock === '' ? true : truthy(raw.stock)
    };
  }
  var CACHE_KEY = 'nasimi_products_v1';
  function fetchText(url, ms) {
    return new Promise(function (resolve, reject) {
      var done = false, timer = setTimeout(function () { if (!done) { done = true; reject(new Error('timeout')); } }, ms);
      fetch(url).then(function (r) { if (!r.ok) throw new Error('http ' + r.status); return r.text(); })
        .then(function (x) { if (!done) { done = true; clearTimeout(timer); resolve(x); } })
        .catch(function (e) { if (!done) { done = true; clearTimeout(timer); reject(e); } });
    });
  }
  function toList(txt) { var l = parseCsv(txt).map(normalize); if (!l.length) throw new Error('empty'); return l; }
  NS.loadProducts = function () {
    var sheet = CFG.sheetCsvUrl ? fetchText(CFG.sheetCsvUrl, 8000).then(function (txt) { var l = toList(txt); try { localStorage.setItem(CACHE_KEY, txt); } catch (e) {} return l; }) : Promise.reject(new Error('no sheet'));
    return sheet.catch(function () {
      var cached = null; try { cached = localStorage.getItem(CACHE_KEY); } catch (e) {}
      if (cached) { try { return toList(cached); } catch (e) {} }
      return fetchText('products-fallback.csv', 10000).then(toList);
    });
  };
  NS.cachedProducts = function () { try { var c = localStorage.getItem(CACHE_KEY); return c ? toList(c) : null; } catch (e) { return null; } };
  NS.byId = function (id) { return state.products.filter(function (p) { return String(p.id) === String(id); })[0]; };
  NS.visible = function () { return state.products.filter(function (p) { return p.stock; }); };
  NS.brandList = function () {
    var counts = {};
    NS.visible().forEach(function (p) { if (p.brand.toLowerCase() !== 'accessories') counts[p.brand] = (counts[p.brand] || 0) + 1; });
    return Object.keys(counts).sort(function (a, b) { return a.localeCompare(b); }).map(function (b) { return { name: b, count: counts[b] }; });
  };

  /* ---------- SEO ---------- */
  NS.setMeta = function (title, desc, jsonld) {
    document.title = title;
    var m = NS.$('meta[name="description"]'); if (m && desc) m.setAttribute('content', desc);
    var og = NS.$('meta[property="og:title"]'); if (og) og.setAttribute('content', title);
    var od = NS.$('meta[property="og:description"]'); if (od && desc) od.setAttribute('content', desc);
    var old = NS.$('#jsonld'); if (old) old.remove();
    if (jsonld) { var s = document.createElement('script'); s.type = 'application/ld+json'; s.id = 'jsonld'; s.textContent = JSON.stringify(jsonld); document.head.appendChild(s); }
  };
})(window.NS);
