// ============================================
// نظام الترجمة
// ============================================
const T = {
  ar: {
    app_name:'Trafik Saveurs', app_sub:'نظام تسيير تجارة الحلويات والبسكويت بالجملة',
    nav:{dashboard:'📊 الرئيسية',products:'📦 المنتجات',sales:'💰 المبيعات',purchases:'🛒 المشتريات',customers:'👥 العملاء',expenses:'💸 المصاريف',reports:'📈 التقارير',backup:'💾 النسخ الاحتياطي',settings:'⚙️ الإعدادات'},
    dashboard:{title:'لوحة القيادة',todaySales:'💰 مبيعات اليوم',todayPaid:'✅ المحصل اليوم',totalProducts:'📦 عدد المنتجات',lowStock:'⚠️ مخزون منخفض',totalDebt:'💳 ديون العملاء',totalCustomers:'👥 عدد العملاء',monthSales:'📈 مبيعات الشهر',monthPurchases:'🛒 مشتريات الشهر',monthExpenses:'💸 مصاريف الشهر',monthProfit:'📊 ربح الشهر',recentSales:'آخر عمليات البيع',lowStockAlert:'⚠️ تنبيه المخزون المنخفض',noOperations:'لا توجد عمليات',stockOk:'✅ جميع المنتجات بحالة جيدة',th:{num:'رقم',date:'التاريخ',customer:'العميل',total:'الإجمالي',paid:'المدفوع',due:'المتبقي',product:'المنتج',stock:'المخزون',min:'الحد الأدنى'}},
    products:{title:'إدارة المنتجات والمخزون',add:'+ إضافة منتج',edit:'تعديل',delete:'حذف',confirmDelete:'حذف المنتج؟',search:'🔍 بحث بالاسم أو الباركود أو الصنف...',form:{add:'إضافة منتج',edit:'تعديل منتج',name:'اسم المنتج *',category:'الصنف',barcode:'الباركود',unit:'الوحدة',buy:'سعر الشراء',sell:'سعر البيع',stock:'المخزون',min:'حد التنبيه',expiry:'الصلاحية',save:'💾 حفظ',cancel:'إلغاء',required:'اسم المنتج إجباري'},th:{num:'الرقم',name:'الاسم',cat:'الصنف',buy:'سعر الشراء',sell:'سعر البيع',stock:'المخزون',min:'الحد',exp:'الصلاحية',actions:'إجراءات'},empty:'لا توجد منتجات',duplicate:'⚠️ يوجد منتج بنفس الاسم أو الباركود!',forceSave:'هل تريد المتابعة؟',noResults:'لا توجد نتائج',deleted:'تم الحذف بنجاح'},
    customers:{title:'إدارة العملاء',add:'+ إضافة عميل',payDebt:'💳 تسجيل تسديد',search:'🔍 بحث بالاسم أو الهاتف...',form:{add:'إضافة عميل',edit:'تعديل عميل',name:'الاسم *',phone:'الهاتف',address:'العنوان',notes:'ملاحظات',save:'💾 حفظ',cancel:'إلغاء',required:'الاسم إجباري'},payForm:{title:'💳 تسجيل تسديد',customer:'العميل',amount:'المبلغ',confirm:'تأكيد',cancel:'إلغاء',noDebt:'لا توجد ديون',success:'تم التسديد',invalidAmount:'مبلغ غير صحيح'},th:{num:'الرقم',name:'الاسم',phone:'الهاتف',address:'العنوان',debt:'الديون',actions:'إجراءات'},empty:'لا يوجد عملاء',confirmDelete:'حذف العميل؟',duplicate:'⚠️ يوجد عميل بنفس الاسم!'},
    sales:{title:'سجل المبيعات',add:'+ فاتورة جديدة',search:'🔍 بحث بالعميل أو رقم الفاتورة...',form:{title:'💰 فاتورة بيع جديدة',customer:'العميل',date:'التاريخ',product:'المنتج',qty:'الكمية',price:'سعر الوحدة',method:'طريقة الدفع',paid:'المبلغ المدفوع',notes:'ملاحظات',addItem:'+ إضافة للفاتورة',save:'💾 حفظ وخصم المخزون',cancel:'إلغاء',cashCustomer:'زبون نقدي',methods:['نقداً','تحويل','آجل','مختلط'],noItems:'أضف منتجاً',emptyQty:'تحقق من الكمية والسعر',overStock:'الكمية أكبر من المخزون',noItemsYet:'لم تضف منتجات',success:'تم حفظ الفاتورة رقم'},th:{num:'رقم',date:'التاريخ',customer:'العميل',total:'الإجمالي',paid:'المدفوع',due:'المتبقي',method:'الدفع',actions:'إجراءات'},print:'🖨️ فاتورة',empty:'لا توجد مبيعات'},
    purchases:{title:'سجل المشتريات',add:'+ تسجيل شراء',search:'🔍 بحث بالمورد...',form:{title:'🛒 تسجيل شراء',supplier:'المورد',date:'التاريخ',product:'المنتج',qty:'الكمية',cost:'تكلفة الوحدة',paid:'المبلغ المدفوع',addItem:'+ إضافة',save:'💾 حفظ وتحديث المخزون',cancel:'إلغاء',noItems:'أضف منتجاً',invalidData:'تحقق من البيانات',success:'تم حفظ الشراء رقم'},th:{num:'رقم',date:'التاريخ',supplier:'المورد',total:'الإجمالي',paid:'المدفوع',due:'المتبقي'},empty:'لا توجد مشتريات'},
    expenses:{title:'سجل المصاريف',add:'+ إضافة مصروف',search:'🔍 بحث بالبيان...',form:{title:'💸 إضافة مصروف',date:'التاريخ',amount:'المبلغ',desc:'البيان *',notes:'ملاحظات',save:'💾 حفظ',cancel:'إلغاء',required:'أدخل البيان والمبلغ'},th:{num:'رقم',date:'التاريخ',desc:'البيان',amount:'المبلغ',notes:'ملاحظات',actions:'إجراءات'},empty:'لا توجد مصاريف',confirmDelete:'حذف المصروف؟'},
    reports:{title:'📈 التقارير',from:'من تاريخ',to:'إلى تاريخ',show:'📊 عرض التقرير',export:'📥 تصدير CSV',totalSales:'💰 إجمالي المبيعات',totalPaid:'✅ المبالغ المحصلة',totalPurchases:'🛒 المشتريات',totalExpenses:'💸 المصاريف',profit:'📊 الربح التقديري',operations:'📋 عدد العمليات',note:'⚠️ الربح التقديري = المبيعات - المشتريات - المصاريف.',invalidDates:'أدخل التواريخ'},
    backup:{title:'💾 النسخ الاحتياطي',exportTitle:'📤 تصدير البيانات',exportDesc:'ينشئ ملف JSON. يمكنك حفظه في الفلاش.',exportBtn:'📤 تصدير الآن',importTitle:'📥 استيراد البيانات',importWarn:'⚠️ سيستبدل كل البيانات!',importBtn:'📥 استيراد',tip:'💡 قم بالتصدير يومياً كاحتياط.'},
    settings:{title:'⚙️ الإعدادات',companyName:'اسم الشركة',currency:'العملة',phone:'الهاتف',address:'العنوان',userName:'اسم المستخدم (في الفواتير)',save:'💾 حفظ',saved:'تم الحفظ'},
    common:{error:'خطأ',chooseFile:'اختر ملفاً',confirmReplace:'استبدال كل البيانات؟'}
  },
  fr: {
    app_name:'Trafik Saveurs', app_sub:'Système de gestion - Vente de pâtisseries en gros',
    nav:{dashboard:'📊 Accueil',products:'📦 Produits',sales:'💰 Ventes',purchases:'🛒 Achats',customers:'👥 Clients',expenses:'💸 Dépenses',reports:'📈 Rapports',backup:'💾 Sauvegarde',settings:'⚙️ Paramètres'},
    dashboard:{title:'Tableau de bord',todaySales:'💰 Ventes du jour',todayPaid:'✅ Encaissé',totalProducts:'📦 Produits',lowStock:'⚠️ Stock faible',totalDebt:'💳 Dettes',totalCustomers:'👥 Clients',monthSales:'📈 Ventes du mois',monthPurchases:'🛒 Achats du mois',monthExpenses:'💸 Dépenses du mois',monthProfit:'📊 Bénéfice',recentSales:'Dernières ventes',lowStockAlert:'⚠️ Alerte stock',noOperations:'Aucune opération',stockOk:'✅ Stock OK',th:{num:'N°',date:'Date',customer:'Client',total:'Total',paid:'Payé',due:'Reste',product:'Produit',stock:'Stock',min:'Min'}},
    products:{title:'Gestion des produits',add:'+ Ajouter',edit:'Modifier',delete:'Supprimer',confirmDelete:'Supprimer ?',search:'🔍 Rechercher...',form:{add:'Ajouter',edit:'Modifier',name:'Nom *',category:'Catégorie',barcode:'Code-barres',unit:'Unité',buy:'Prix achat',sell:'Prix vente',stock:'Stock',min:'Seuil',expiry:'Expiration',save:'💾 Enregistrer',cancel:'Annuler',required:'Nom obligatoire'},th:{num:'N°',name:'Nom',cat:'Catégorie',buy:'Prix achat',sell:'Prix vente',stock:'Stock',min:'Seuil',exp:'Expiration',actions:'Actions'},empty:'Aucun produit',duplicate:'⚠️ Produit existe!',forceSave:'Continuer?',noResults:'Aucun résultat',deleted:'Supprimé'},
    customers:{title:'Gestion des clients',add:'+ Ajouter',payDebt:'💳 Paiement',search:'🔍 Rechercher...',form:{add:'Ajouter',edit:'Modifier',name:'Nom *',phone:'Téléphone',address:'Adresse',notes:'Notes',save:'💾 Enregistrer',cancel:'Annuler',required:'Nom obligatoire'},payForm:{title:'💳 Paiement',customer:'Client',amount:'Montant',confirm:'Confirmer',cancel:'Annuler',noDebt:'Aucune dette',success:'Enregistré',invalidAmount:'Montant invalide'},th:{num:'N°',name:'Nom',phone:'Téléphone',address:'Adresse',debt:'Dettes',actions:'Actions'},empty:'Aucun client',confirmDelete:'Supprimer ?',duplicate:'⚠️ Client existe!'},
    sales:{title:'Registre des ventes',add:'+ Facture',search:'🔍 Rechercher...',form:{title:'💰 Nouvelle facture',customer:'Client',date:'Date',product:'Produit',qty:'Quantité',price:'Prix',method:'Paiement',paid:'Payé',notes:'Notes',addItem:'+ Ajouter',save:'💾 Enregistrer',cancel:'Annuler',cashCustomer:'Client cash',methods:['Espèces','Virement','Crédit','Mixte'],noItems:'Ajoutez un produit',emptyQty:'Vérifiez',overStock:'Stock insuffisant',noItemsYet:'Aucun produit',success:'Facture N°'},th:{num:'N°',date:'Date',customer:'Client',total:'Total',paid:'Payé',due:'Reste',method:'Paiement',actions:'Actions'},print:'🖨️ Facture',empty:'Aucune vente'},
    purchases:{title:'Registre des achats',add:'+ Enregistrer',search:'🔍 Rechercher...',form:{title:'🛒 Enregistrer',supplier:'Fournisseur',date:'Date',product:'Produit',qty:'Quantité',cost:'Coût',paid:'Payé',addItem:'+ Ajouter',save:'💾 Enregistrer',cancel:'Annuler',noItems:'Ajoutez un produit',invalidData:'Données invalides',success:'Achat N°'},th:{num:'N°',date:'Date',supplier:'Fournisseur',total:'Total',paid:'Payé',due:'Reste'},empty:'Aucun achat'},
    expenses:{title:'Dépenses',add:'+ Ajouter',search:'🔍 Rechercher...',form:{title:'💸 Ajouter',date:'Date',amount:'Montant',desc:'Description *',notes:'Notes',save:'💾 Enregistrer',cancel:'Annuler',required:'Description et montant'},th:{num:'N°',date:'Date',desc:'Description',amount:'Montant',notes:'Notes',actions:'Actions'},empty:'Aucune dépense',confirmDelete:'Supprimer ?'},
    reports:{title:'📈 Rapports',from:'Du',to:'Au',show:'📊 Afficher',export:'📥 Export CSV',totalSales:'💰 Ventes',totalPaid:'✅ Encaissé',totalPurchases:'🛒 Achats',totalExpenses:'💸 Dépenses',profit:'📊 Bénéfice',operations:'📋 Opérations',note:'⚠️ Bénéfice = Ventes - Achats - Dépenses.',invalidDates:'Entrez les dates'},
    backup:{title:'💾 Sauvegarde',exportTitle:'📤 Exporter',exportDesc:'Crée un fichier JSON.',exportBtn:'📤 Exporter',importTitle:'📥 Importer',importWarn:'⚠️ Remplace les données!',importBtn:'📥 Importer',tip:'💡 Exportez quotidiennement.'},
    settings:{title:'⚙️ Paramètres',companyName:'Nom entreprise',currency:'Devise',phone:'Téléphone',address:'Adresse',userName:'Nom utilisateur (factures)',save:'💾 Enregistrer',saved:'Enregistré'},
    common:{error:'Erreur',chooseFile:'Choisissez un fichier',confirmReplace:'Remplacer les données ?'}
  }
};

// ============================================
// قاعدة البيانات المحلية (localStorage)
// ============================================
const DB = {
  get(key) { return JSON.parse(localStorage.getItem('trafik_'+key) || '[]'); },
  set(key, data) { localStorage.setItem('trafik_'+key, JSON.stringify(data)); },
  getObj(key) { return JSON.parse(localStorage.getItem('trafik_'+key) || '{}'); },
  setObj(key, data) { localStorage.setItem('trafik_'+key, JSON.stringify(data)); },
  nextId(key) {
    const data = this.get(key);
    if (!data.length) return 1;
    return Math.max(...data.map(r => parseInt(r.id) || 0)) + 1;
  }
};

// إعدادات افتراضية
if (!localStorage.getItem('trafik_settings')) {
  DB.setObj('settings', {
    'اسم_الشركة': 'Trafik Saveurs', 'العملة': 'دج',
    'الهاتف': '', 'العنوان': '', 'اسم_المستخدم': ''
  });
}

// ============================================
// إدارة اللغة
// ============================================
let currentLang = localStorage.getItem('trafik_lang') || 'ar';
let currentSection = 'dashboard';

function t(path) {
  const keys = path.split('.');
  let val = T[currentLang];
  for (const k of keys) {
    if (val && val[k] !== undefined) val = val[k];
    else return path;
  }
  return val;
}

function toggleLang() {
  currentLang = currentLang === 'ar' ? 'fr' : 'ar';
  localStorage.setItem('trafik_lang', currentLang);
  applyLang();
  const activeBtn = document.querySelector('.nav button.active');
  if (activeBtn) activeBtn.click();
}

function applyLang() {
  const isAr = currentLang === 'ar';
  document.body.className = isAr ? 'rtl' : 'ltr';
  document.documentElement.lang = currentLang;
  document.documentElement.dir = isAr ? 'rtl' : 'ltr';
  document.getElementById('langFlag').textContent = isAr ? '🇫🇷' : '🇸🇦';
  document.getElementById('langLabel').textContent = isAr ? 'Français' : 'العربية';
  document.querySelectorAll('[data-t]').forEach(el => {
    const key = el.getAttribute('data-t');
    el.textContent = t(key);
  });
  renderNav();
}

function renderNav() {
  const nav = document.getElementById('navBar');
  const sections = ['dashboard','products','sales','purchases','customers','expenses','reports','backup','settings'];
  nav.innerHTML = sections.map(s => 
    `<button class="${s===currentSection?'active':''}" onclick="showSection('${s}')">${t('nav.'+s)}</button>`
  ).join('');
}

// ============================================
// الساعة الحية
// ============================================
function updateClock() {
  const now = new Date();
  const h = String(now.getHours()).padStart(2,'0');
  const m = String(now.getMinutes()).padStart(2,'0');
  const s = String(now.getSeconds()).padStart(2,'0');
  document.getElementById('clockTime').textContent = `${h}:${m}:${s}`;
  const isAr = currentLang === 'ar';
  document.getElementById('clockDate').textContent = now.toLocaleDateString(isAr?'ar-DZ':'fr-FR', {
    weekday:'long', day:'numeric', month:'long', year:'numeric'
  });
  const hours = now.getHours() % 12;
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  setHand('hourHand', (hours*30)+(minutes*0.5), 22);
  setHand('minHand', minutes*6, 30);
  setHand('secHand', seconds*6, 33);
}

function setHand(id, angle, length) {
  const rad = (angle - 90) * Math.PI / 180;
  const hand = document.getElementById(id);
  if (hand) {
    hand.setAttribute('x2', 50 + length * Math.cos(rad));
    hand.setAttribute('y2', 50 + length * Math.sin(rad));
  }
}

setInterval(updateClock, 1000);
updateClock();

// ============================================
// دوال مساعدة
// ============================================
const content = document.getElementById('content');
const modalBg = document.getElementById('modalBg');
const modalContent = document.getElementById('modalContent');

function showSection(name) {
  currentSection = name;
  document.querySelectorAll('.nav button').forEach(b=>b.classList.remove('active'));
  renderNav();
  const funcs = {
    dashboard:loadDashboard, products:loadProducts, sales:loadSales,
    purchases:loadPurchases, customers:loadCustomers, expenses:loadExpenses,
    reports:loadReports, backup:loadBackup, settings:loadSettings
  };
  funcs[name]();
}

function openModal(html) { modalContent.innerHTML = html; modalBg.classList.add('show'); }
function closeModal() { modalBg.classList.remove('show'); }
modalBg.onclick = e => { if(e.target===modalBg) closeModal(); };

function money(v) {
  const n = parseFloat(v) || 0;
  const settings = DB.getObj('settings');
  return n.toLocaleString('fr-FR', {minimumFractionDigits:2, maximumFractionDigits:2}) + ' ' + (settings['العملة']||'دج');
}

function todayStr() { return new Date().toISOString().substring(0,10); }

// ============================================
// لوحة التحكم
// ============================================
function loadDashboard() {
  const today = todayStr();
  const sales = DB.get('sales');
  const purchases = DB.get('purchases');
  const products = DB.get('products');
  const expenses = DB.get('expenses');
  const customers = DB.get('customers');

  const todaySales = sales.filter(s => s.date === today);
  const todayTotal = todaySales.reduce((a, s) => a + (parseFloat(s.total)||0), 0);
  const todayPaid = todaySales.reduce((a, s) => a + (parseFloat(s.paid)||0), 0);
  const totalDebt = sales.reduce((a, s) => a + (parseFloat(s.due)||0), 0);
  const lowStock = products.filter(p => (parseFloat(p.stock)||0) <= (parseFloat(p.min)||0));
  
  const monthStart = today.substring(0, 7);
  const monthSales = sales.filter(s => (s.date||'').startsWith(monthStart))
    .reduce((a, s) => a + (parseFloat(s.total)||0), 0);
  const monthPurchases = purchases.filter(p => (p.date||'').startsWith(monthStart))
    .reduce((a, p) => a + (parseFloat(p.total)||0), 0);
  const monthExpenses = expenses.filter(e => (e.date||'').startsWith(monthStart))
    .reduce((a, e) => a + (parseFloat(e.amount)||0), 0);

  const th = t('dashboard.th');
  content.innerHTML = `
    <div class="section-title">${t('dashboard.title')}</div>
    <div class="cards">
      <div class="card"><div class="title">${t('dashboard.todaySales')}</div><div class="value">${money(todayTotal)}</div></div>
      <div class="card green"><div class="title">${t('dashboard.todayPaid')}</div><div class="value">${money(todayPaid)}</div></div>
      <div class="card blue"><div class="title">${t('dashboard.totalProducts')}</div><div class="value">${products.length}</div></div>
      <div class="card red"><div class="title">${t('dashboard.lowStock')}</div><div class="value">${lowStock.length}</div></div>
      <div class="card red"><div class="title">${t('dashboard.totalDebt')}</div><div class="value">${money(totalDebt)}</div></div>
      <div class="card"><div class="title">${t('dashboard.totalCustomers')}</div><div class="value">${customers.length}</div></div>
      <div class="card green"><div class="title">${t('dashboard.monthSales')}</div><div class="value">${money(monthSales)}</div></div>
      <div class="card"><div class="title">${t('dashboard.monthPurchases')}</div><div class="value">${money(monthPurchases)}</div></div>
      <div class="card"><div class="title">${t('dashboard.monthExpenses')}</div><div class="value">${money(monthExpenses)}</div></div>
      <div class="card green"><div class="title">${t('dashboard.monthProfit')}</div><div class="value">${money(monthSales - monthPurchases - monthExpenses)}</div></div>
    </div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:20px;">
      <div>
        <div class="section-title">${t('dashboard.recentSales')}</div>
        <table><thead><tr><th>${th.num}</th><th>${th.date}</th><th>${th.customer}</th><th>${th.total}</th><th>${th.paid}</th><th>${th.due}</th></tr></thead>
        <tbody>${sales.slice(-10).reverse().map(s=>`<tr><td>${s.id}</td><td>${s.date}</td><td>${s.customer}</td><td>${money(s.total)}</td><td>${money(s.paid)}</td><td>${money(s.due)}</td></tr>`).join('')||`<tr><td colspan="6">${t('dashboard.noOperations')}</td></tr>`}</tbody></table>
      </div>
      <div>
        <div class="section-title">${t('dashboard.lowStockAlert')}</div>
        <table><thead><tr><th>${th.product}</th><th>${th.stock}</th><th>${th.min}</th></tr></thead>
        <tbody>${lowStock.slice(0, 8).map(p=>`<tr><td>${p.name}</td><td style="color:#B33A32;font-weight:bold;">${p.stock}</td><td>${p.min}</td></tr>`).join('')||`<tr><td colspan="3">${t('dashboard.stockOk')}</td></tr>`}</tbody></table>
      </div>
    </div>`;
}

// ============================================
// المنتجات
// ============================================
function loadProducts() {
  content.innerHTML = `
    <div class="section-title">${t('products.title')}<button class="btn" onclick="productForm()">${t('products.add')}</button></div>
    <div class="search-box">
      <input type="text" id="searchProduct" placeholder="${t('products.search')}" oninput="renderProductsList()">
    </div>
    <div id="productsList"></div>`;
  renderProductsList();
}

function renderProductsList() {
  const query = (document.getElementById('searchProduct')?.value || '').toLowerCase();
  const list = DB.get('products').filter(p => 
    !query || p.name.toLowerCase().includes(query) || 
    (p.barcode||'').toLowerCase().includes(query) ||
    (p.category||'').toLowerCase().includes(query)
  );
  const th = t('products.th');
  const noResults = list.length === 0 && query ? `<tr><td colspan="9" class="no-results">${t('products.noResults')}</td></tr>` : '';
  document.getElementById('productsList').innerHTML = `
    <table><thead><tr><th>${th.num}</th><th>${th.name}</th><th>${th.cat}</th><th>${th.buy}</th><th>${th.sell}</th><th>${th.stock}</th><th>${th.min}</th><th>${th.exp}</th><th>${th.actions}</th></tr></thead>
    <tbody>${list.map(p=>`<tr><td>${p.id}</td><td>${p.name}</td><td>${p.category||'-'}</td><td>${money(p.buy)}</td><td>${money(p.sell)}</td><td style="color:${p.stock<=p.min?'#B33A32':'#26734D'};font-weight:bold;">${p.stock}</td><td>${p.min}</td><td>${p.expiry||'-'}</td><td><button class="btn btn-sm" onclick='productForm(${p.id})'>${t('products.edit')}</button> <button class="btn btn-sm btn-danger" onclick="delProduct(${p.id})">${t('products.delete')}</button></td></tr>`).join('')||noResults||`<tr><td colspan="9">${t('products.empty')}</td></tr>`}</tbody></table>`;
}

function productForm(id=null) {
  const f = t('products.form');
  const p = id ? DB.get('products').find(x => x.id == id) : {};
  openModal(`
    <h3>${id?f.edit:f.add}</h3>
    <div class="form-row">
      <div class="form-group"><label>${f.name}</label><input id="p_name" value="${p.name||''}"></div>
      <div class="form-group"><label>${f.category}</label><input id="p_cat" value="${p.category||''}"></div>
    </div>
    <div class="form-row">
      <div class="form-group"><label>${f.barcode}</label><input id="p_bar" value="${p.barcode||''}"></div>
      <div class="form-group"><label>${f.unit}</label><input id="p_unit" value="${p.unit||'علبة'}"></div>
    </div>
    <div class="form-row">
      <div class="form-group"><label>${f.buy}</label><input id="p_buy" type="number" step="0.01" value="${p.buy||0}"></div>
      <div class="form-group"><label>${f.sell}</label><input id="p_sell" type="number" step="0.01" value="${p.sell||0}"></div>
    </div>
    <div class="form-row">
      <div class="form-group"><label>${f.stock}</label><input id="p_stock" type="number" step="0.01" value="${p.stock||0}"></div>
      <div class="form-group"><label>${f.min}</label><input id="p_min" type="number" step="0.01" value="${p.min||0}"></div>
    </div>
    <div class="form-group"><label>${f.expiry}</label><input id="p_exp" type="date" value="${p.expiry||''}"></div>
    <div style="display:flex;gap:10px;margin-top:15px;">
      <button class="btn btn-success" onclick='saveProduct(${id||"null"})'>${f.save}</button>
      <button class="btn" onclick="closeModal()">${f.cancel}</button>
    </div>`);
}

function saveProduct(id) {
  const f = t('products.form');
  const data = {
    name:document.getElementById('p_name').value.trim(),
    category:document.getElementById('p_cat').value,
    barcode:document.getElementById('p_bar').value.trim(),
    unit:document.getElementById('p_unit').value,
    buy:parseFloat(document.getElementById('p_buy').value)||0,
    sell:parseFloat(document.getElementById('p_sell').value)||0,
    stock:parseFloat(document.getElementById('p_stock').value)||0,
    min:parseFloat(document.getElementById('p_min').value)||0,
    expiry:document.getElementById('p_exp').value
  };
  if(!data.name) { alert(f.required); return; }
  
  const products = DB.get('products');
  const duplicate = products.find(p => 
    p.id != id && 
    (p.name.toLowerCase() === data.name.toLowerCase() || 
     (data.barcode && p.barcode === data.barcode))
  );
  if (duplicate) {
    if (!confirm(t('products.duplicate') + '\n' + duplicate.name + '\n\n' + t('products.forceSave'))) return;
  }
  
  if (id) {
    const idx = products.findIndex(p => p.id == id);
    products[idx] = {...products[idx], ...data};
  } else {
    data.id = DB.nextId('products');
    products.push(data);
  }
  DB.set('products', products);
  closeModal();
  renderProductsList();
}

function delProduct(id) { 
  if(confirm(t('products.confirmDelete'))) {
    DB.set('products', DB.get('products').filter(p => p.id != id));
    alert(t('products.deleted'));
    renderProductsList();
  } 
}

// ============================================
// العملاء
// ============================================
function loadCustomers() {
  content.innerHTML = `
    <div class="section-title">${t('customers.title')}
      <div><button class="btn" onclick="customerForm()">${t('customers.add')}</button> <button class="btn btn-success" onclick="payDebtForm()">${t('customers.payDebt')}</button></div>
    </div>
    <div class="search-box">
      <input type="text" id="searchCustomer" placeholder="${t('customers.search')}" oninput="renderCustomersList()">
    </div>
    <div id="customersList"></div>`;
  renderCustomersList();
}

function renderCustomersList() {
  const query = (document.getElementById('searchCustomer')?.value || '').toLowerCase();
  const customers = DB.get('customers');
  const sales = DB.get('sales');
  const list = customers.filter(c => 
    !query || c.name.toLowerCase().includes(query) || 
    (c.phone||'').includes(query) ||
    (c.address||'').toLowerCase().includes(query)
  ).map(c => {
    const debt = sales.filter(s => s.customer === c.name).reduce((a, s) => a + (parseFloat(s.due)||0), 0);
    return {...c, debt};
  });
  const th = t('customers.th');
  document.getElementById('customersList').innerHTML = `
    <table><thead><tr><th>${th.num}</th><th>${th.name}</th><th>${th.phone}</th><th>${th.address}</th><th>${th.debt}</th><th>${th.actions}</th></tr></thead>
    <tbody>${list.map(c=>`<tr><td>${c.id}</td><td>${c.name}</td><td>${c.phone||'-'}</td><td>${c.address||'-'}</td><td style="color:${c.debt>0?'#B33A32':'#26734D'};font-weight:bold;">${money(c.debt)}</td><td><button class="btn btn-sm" onclick='customerForm(${c.id})'>${t('products.edit')}</button> <button class="btn btn-sm btn-danger" onclick="delCustomer(${c.id})">${t('products.delete')}</button></td></tr>`).join('')||`<tr><td colspan="6">${t('customers.empty')}</td></tr>`}</tbody></table>`;
}

function customerForm(id=null) {
  const f = t('customers.form');
  const c = id ? DB.get('customers').find(x => x.id == id) : {};
  openModal(`
    <h3>${id?f.edit:f.add}</h3>
    <div class="form-group"><label>${f.name}</label><input id="c_name" value="${c.name||''}"></div>
    <div class="form-row">
      <div class="form-group"><label>${f.phone}</label><input id="c_phone" value="${c.phone||''}"></div>
      <div class="form-group"><label>${f.address}</label><input id="c_addr" value="${c.address||''}"></div>
    </div>
    <div class="form-group"><label>${f.notes}</label><textarea id="c_notes" rows="2">${c.notes||''}</textarea></div>
    <div style="display:flex;gap:10px;margin-top:15px;">
      <button class="btn btn-success" onclick='saveCustomer(${id||"null"})'>${f.save}</button>
      <button class="btn" onclick="closeModal()">${f.cancel}</button>
    </div>`);
}

function saveCustomer(id) {
  const f = t('customers.form');
  const data = {
    name:document.getElementById('c_name').value.trim(),
    phone:document.getElementById('c_phone').value,
    address:document.getElementById('c_addr').value,
    notes:document.getElementById('c_notes').value
  };
  if(!data.name) { alert(f.required); return; }
  
  const customers = DB.get('customers');
  const duplicate = customers.find(c => c.id != id && c.name.toLowerCase() === data.name.toLowerCase());
  if (duplicate) {
    if (!confirm(t('customers.duplicate') + '\n' + duplicate.name + '\n\n' + t('products.forceSave'))) return;
  }
  
  if (id) {
    const idx = customers.findIndex(c => c.id == id);
    customers[idx] = {...customers[idx], ...data};
  } else {
    data.id = DB.nextId('customers');
    customers.push(data);
  }
  DB.set('customers', customers);
  closeModal();
  renderCustomersList();
}

function delCustomer(id) { 
  if(confirm(t('customers.confirmDelete'))) {
    DB.set('customers', DB.get('customers').filter(c => c.id != id));
    renderCustomersList();
  } 
}

function payDebtForm() {
  const f = t('customers.payForm');
  const customers = DB.get('customers');
  const sales = DB.get('sales');
  const debtors = customers.map(c => {
    const debt = sales.filter(s => s.customer === c.name).reduce((a, s) => a + (parseFloat(s.due)||0), 0);
    return {...c, debt};
  }).filter(c => c.debt > 0);
  
  if(!debtors.length) { alert(f.noDebt); return; }
  openModal(`
    <h3>${f.title}</h3>
    <div class="form-group"><label>${f.customer}</label><select id="pd_cust">${debtors.map(c=>`<option value="${c.name}">${c.name} - ${money(c.debt)}</option>`).join('')}</select></div>
    <div class="form-group"><label>${f.amount}</label><input id="pd_amount" type="number" step="0.01"></div>
    <button class="btn btn-success" onclick="doPayDebt()">${f.confirm}</button>
    <button class="btn" onclick="closeModal()">${f.cancel}</button>`);
}

function doPayDebt() {
  const f = t('customers.payForm');
  const name = document.getElementById('pd_cust').value;
  const amount = parseFloat(document.getElementById('pd_amount').value);
  if(!amount || amount<=0) { alert(f.invalidAmount); return; }
  
  const sales = DB.get('sales');
  let remaining = amount;
  sales.filter(s => s.customer === name && parseFloat(s.due) > 0).forEach(s => {
    if (remaining <= 0) return;
    const due = parseFloat(s.due);
    const pay = Math.min(remaining, due);
    s.paid = (parseFloat(s.paid)||0) + pay;
    s.due = due - pay;
    remaining -= pay;
  });
  DB.set('sales', sales);
  closeModal();
  renderCustomersList();
  alert(f.success);
}

// ============================================
// المبيعات
// ============================================
let saleItems = [];
function loadSales() {
  content.innerHTML = `
    <div class="section-title">${t('sales.title')}<button class="btn" onclick="saleForm()">${t('sales.add')}</button></div>
    <div class="search-box">
      <input type="text" id="searchSale" placeholder="${t('sales.search')}" oninput="renderSalesList()">
    </div>
    <div id="salesList"></div>`;
  renderSalesList();
}

function renderSalesList() {
  const query = (document.getElementById('searchSale')?.value || '').toLowerCase();
  const list = DB.get('sales').filter(s => 
    !query || s.customer.toLowerCase().includes(query) || 
    s.id.toString().includes(query)
  ).reverse();
  const th = t('sales.th');
  document.getElementById('salesList').innerHTML = `
    <table><thead><tr><th>${th.num}</th><th>${th.date}</th><th>${th.customer}</th><th>${th.total}</th><th>${th.paid}</th><th>${th.due}</th><th>${th.method}</th><th>${th.actions}</th></tr></thead>
    <tbody>${list.map(s=>`<tr><td>${s.id}</td><td>${s.date}</td><td>${s.customer}</td><td>${money(s.total)}</td><td>${money(s.paid)}</td><td style="color:#B33A32;">${money(s.due)}</td><td>${s.method}</td><td><button class="btn btn-sm btn-success" onclick="printInvoice(${s.id})">${t('sales.print')}</button></td></tr>`).join('')||`<tr><td colspan="8">${t('sales.empty')}</td></tr>`}</tbody></table>`;
}

function saleForm() {
  saleItems = [];
  const f = t('sales.form');
  const products = DB.get('products');
  const customers = DB.get('customers');
  
  if (!products.length) { alert('لا توجد منتجات. أضف المنتجات أولاً.'); return; }
  
  openModal(`
    <h3>${f.title}</h3>
    <div class="form-row">
      <div class="form-group"><label>${f.customer}</label><select id="s_cust"><option value="${f.cashCustomer}">${f.cashCustomer}</option>${customers.map(c=>`<option value="${c.name}">${c.name}</option>`).join('')}</select></div>
      <div class="form-group"><label>${f.date}</label><input id="s_date" type="date" value="${todayStr()}"></div>
    </div>
    <div class="form-row">
      <div class="form-group"><label>${f.product}</label><select id="s_prod" onchange="setSalePrice()">${products.map(p=>`<option value="${p.id}" data-price="${p.sell}" data-stock="${p.stock}" data-name="${p.name}">${p.name} (${p.stock})</option>`).join('')}</select></div>
      <div class="form-group"><label>${f.qty}</label><input id="s_qty" type="number" step="0.01" value="1" min="1"></div>
    </div>
    <div class="form-row">
      <div class="form-group"><label>${f.price}</label><input id="s_price" type="number" step="0.01"></div>
      <div class="form-group"><label>${f.method}</label><select id="s_method">${f.methods.map(m=>`<option>${m}</option>`).join('')}</select></div>
    </div>
    <button class="btn" onclick="addSaleItem()">${f.addItem}</button>
    <div class="items-list" id="saleItemsList"></div>
    <div class="form-row" style="margin-top:10px;">
      <div class="form-group"><label>${f.paid}</label><input id="s_paid" type="number" step="0.01" value="0"></div>
      <div class="form-group"><label>${f.notes}</label><input id="s_notes"></div>
    </div>
    <div class="total-bar"><span>${t('dashboard.th.total')}:</span><span id="saleTotal">0.00</span></div>
    <div style="display:flex;gap:10px;margin-top:15px;">
      <button class="btn btn-success" onclick="saveSale()">${f.save}</button>
      <button class="btn" onclick="closeModal()">${f.cancel}</button>
    </div>`);
  setSalePrice();
}

function setSalePrice() {
  const sel = document.getElementById('s_prod');
  document.getElementById('s_price').value = sel.options[sel.selectedIndex].dataset.price;
}

function addSaleItem() {
  const f = t('sales.form');
  const sel = document.getElementById('s_prod');
  const id = sel.value, name = sel.options[sel.selectedIndex].dataset.name;
  const qty = parseFloat(document.getElementById('s_qty').value);
  const price = parseFloat(document.getElementById('s_price').value);
  const stock = parseFloat(sel.options[sel.selectedIndex].dataset.stock);
  if(!qty||qty<=0||!price) { alert(f.emptyQty); return; }
  const existing = saleItems.find(i=>i.productId==id);
  const totalQty = (existing?existing.qty:0) + qty;
  if(totalQty > stock) { alert(f.overStock); return; }
  if(existing) existing.qty = totalQty;
  else saleItems.push({productId:id, name, qty, price});
  renderSaleItems();
}

function renderSaleItems() {
  const f = t('sales.form');
  let total = 0;
  const html = saleItems.map((it,i)=>{
    const sub = it.qty*it.price; total += sub;
    return `<div class="item-row"><span>${it.name} × ${it.qty} = ${sub.toFixed(2)}</span><button class="btn btn-sm btn-danger" onclick="removeSaleItem(${i})">×</button></div>`;
  }).join('');
  document.getElementById('saleItemsList').innerHTML = html || `<div style="padding:10px;color:#776A62;">${f.noItemsYet}</div>`;
  document.getElementById('saleTotal').innerText = total.toFixed(2);
}

function removeSaleItem(i) { saleItems.splice(i,1); renderSaleItems(); }

function saveSale() {
  const f = t('sales.form');
  if(!saleItems.length) { alert(f.noItems); return; }
  const total = saleItems.reduce((a, it) => a + it.qty * it.price, 0);
  const paid = parseFloat(document.getElementById('s_paid').value) || 0;
  const sale = {
    id: DB.nextId('sales'),
    date: document.getElementById('s_date').value,
    customer: document.getElementById('s_cust').value,
    total, paid, due: total - paid,
    method: document.getElementById('s_method').value,
    notes: document.getElementById('s_notes').value,
    items: [...saleItems]
  };
  
  const products = DB.get('products');
  saleItems.forEach(it => {
    const p = products.find(x => x.id == it.productId);
    if (p) p.stock = (parseFloat(p.stock)||0) - it.qty;
  });
  DB.set('products', products);
  
  const sales = DB.get('sales');
  sales.push(sale);
  DB.set('sales', sales);
  
  closeModal();
  alert(`${f.success} ${sale.id}`);
  renderSalesList();
}

function printInvoice(id) {
  const sale = DB.get('sales').find(s => s.id == id);
  if (!sale) return;
  
  const settings = DB.getObj('settings');
  const shopName = settings['اسم_الشركة'] || 'Trafik Saveurs';
  const userName = settings['اسم_المستخدم'] || 'مستخدم النظام';
  const shopPhone = settings['الهاتف'] || '';
  const shopAddress = settings['العنوان'] || '';
  
  const now = new Date();
  const timeStr = now.toLocaleTimeString('fr-FR', {hour:'2-digit', minute:'2-digit', second:'2-digit'});
  const dateStr = now.toLocaleDateString('fr-FR', {year:'numeric', month:'long', day:'numeric'});
  const hijriDate = gregorianToHijri(now);
  
  const rows = (sale.items||[]).map(it => 
    `<tr><td>${it.name}</td><td>${it.qty}</td><td>${money(it.price)}</td><td>${money(it.qty*it.price)}</td></tr>`
  ).join('');
  
  const html = `<!doctype html><html lang="ar" dir="rtl"><head><meta charset="utf-8"><title>فاتورة ${id}</title>
<style>
  * { margin:0; padding:0; box-sizing:border-box; }
  body { font-family:'Segoe UI',Arial,sans-serif; margin:25px; color:#35190f; background:#fff; }
  .head { text-align:center; border-bottom:3px solid #e9a900; padding-bottom:18px; margin-bottom:20px; }
  h1 { color:#e0a000; font-size:30px; margin-bottom:5px; }
  .subtitle { font-size:15px; color:#776a62; }
  h2 { font-size:20px; color:#3B1B12; margin-top:12px; }
  .info-row { display:flex; justify-content:space-between; align-items:center; margin:15px 0; padding:12px; background:#f9f6f0; border-radius:8px; flex-wrap:wrap; gap:10px; }
  table { width:100%; border-collapse:collapse; margin:15px 0; font-size:13px; }
  th, td { border:1px solid #d7c8b6; padding:10px; text-align:center; }
  th { background:#f5e8cf; font-weight:bold; }
  .sum-table { width:350px; margin:20px 0 20px auto; background:#f9f6f0; border-radius:8px; overflow:hidden; }
  .sum-table th { background:#E9A900; text-align:right; padding:10px 15px; }
  .sum-table td { text-align:right; padding:10px 15px; font-weight:bold; }
  .date-info { display:flex; justify-content:center; gap:20px; margin:15px 0; flex-wrap:wrap; }
  .date-box { background:#f5e8cf; padding:8px 18px; border-radius:6px; font-weight:bold; }
  .foot { margin-top:30px; text-align:center; border-top:2px solid #e9a900; padding-top:15px; }
  button { background:#E9A900; color:#3B1B12; border:none; padding:10px 25px; font-size:15px; font-weight:bold; border-radius:6px; cursor:pointer; margin-top:15px; }
  @media print { button{display:none} body{margin:10px} }
</style></head><body>
  <div class="head">
    <h1>${shopName}</h1>
    <div class="subtitle">بيع الحلويات والبسكويت بالجملة</div>
    ${shopPhone ? `<div>📞 ${shopPhone}</div>` : ''}
    ${shopAddress ? `<div>📍 ${shopAddress}</div>` : ''}
    <h2>فاتورة بيع رقم ${id}</h2>
  </div>
  <div class="info-row">
    <div><b>👤 الزبون:</b> ${sale.customer}</div>
    <div><b>📅 التاريخ:</b> ${sale.date}</div>
    <div><b>🕐 الوقت:</b> ${timeStr}</div>
  </div>
  <table>
    <thead><tr><th>المنتج</th><th>الكمية</th><th>سعر الوحدة</th><th>المجموع</th></tr></thead>
    <tbody>${rows || '<tr><td colspan="4">لا توجد تفاصيل</td></tr>'}</tbody>
  </table>
  <table class="sum-table">
    <tr><th>الإجمالي</th><td>${money(sale.total)}</td></tr>
    <tr><th>المدفوع</th><td>${money(sale.paid)}</td></tr>
    <tr><th>المتبقي</th><td>${money(sale.due)}</td></tr>
  </table>
  <div class="info-row">
    <div><b>💳 طريقة الدفع:</b> ${sale.method}</div>
    <div><b>📝 ملاحظات:</b> ${sale.notes || 'لا توجد'}</div>
  </div>
  <div class="date-info">
    <div class="date-box">📅 ${dateStr}</div>
    <div class="date-box">🕌 ${hijriDate}</div>
  </div>
  <div class="foot">
    <div style="font-size:15px;margin-bottom:8px;">شكراً لثقتكم في ${shopName} ❤️</div>
    <div style="font-size:13px;color:#776a62;"><b>👨‍💼 تم الإصدار بواسطة:</b> ${userName}</div>
    <button onclick="window.print()">🖨️ طباعة</button>
  </div>
</body></html>`;
  
  const w = window.open('','_blank');
  w.document.write(html);
  w.document.close();
}

// ============================================
// المشتريات
// ============================================
let purchaseItems = [];
function loadPurchases() {
  content.innerHTML = `
    <div class="section-title">${t('purchases.title')}<button class="btn" onclick="purchaseForm()">${t('purchases.add')}</button></div>
    <div class="search-box">
      <input type="text" id="searchPurchase" placeholder="${t('purchases.search')}" oninput="renderPurchasesList()">
    </div>
    <div id="purchasesList"></div>`;
  renderPurchasesList();
}

function renderPurchasesList() {
  const query = (document.getElementById('searchPurchase')?.value || '').toLowerCase();
  const list = DB.get('purchases').filter(p => 
    !query || p.supplier.toLowerCase().includes(query) || p.id.toString().includes(query)
  ).reverse();
  const th = t('purchases.th');
  document.getElementById('purchasesList').innerHTML = `
    <table><thead><tr><th>${th.num}</th><th>${th.date}</th><th>${th.supplier}</th><th>${th.total}</th><th>${th.paid}</th><th>${th.due}</th></tr></thead>
    <tbody>${list.map(p=>`<tr><td>${p.id}</td><td>${p.date}</td><td>${p.supplier}</td><td>${money(p.total)}</td><td>${money(p.paid)}</td><td style="color:#B33A32;">${money(p.due)}</td></tr>`).join('')||`<tr><td colspan="6">${t('purchases.empty')}</td></tr>`}</tbody></table>`;
}

function purchaseForm() {
  purchaseItems = [];
  const f = t('purchases.form');
  const products = DB.get('products');
  
  if (!products.length) { alert('أضف المنتجات أولاً'); return; }
  
  openModal(`
    <h3>${f.title}</h3>
    <div class="form-row">
      <div class="form-group"><label>${f.supplier}</label><input id="pu_supp"></div>
      <div class="form-group"><label>${f.date}</label><input id="pu_date" type="date" value="${todayStr()}"></div>
    </div>
    <div class="form-row">
      <div class="form-group"><label>${f.product}</label><select id="pu_prod" onchange="setPurchCost()">${products.map(p=>`<option value="${p.id}" data-cost="${p.buy}" data-name="${p.name}">${p.name}</option>`).join('')}</select></div>
      <div class="form-group"><label>${f.qty}</label><input id="pu_qty" type="number" step="0.01" value="1"></div>
    </div>
    <div class="form-row">
      <div class="form-group"><label>${f.cost}</label><input id="pu_cost" type="number" step="0.01"></div>
      <div class="form-group"><label>${f.paid}</label><input id="pu_paid" type="number" step="0.01" value="0"></div>
    </div>
    <button class="btn" onclick="addPurchaseItem()">${f.addItem}</button>
    <div class="items-list" id="purchItemsList"></div>
    <div class="total-bar"><span>${t('dashboard.th.total')}:</span><span id="purchTotal">0.00</span></div>
    <div style="display:flex;gap:10px;margin-top:15px;">
      <button class="btn btn-success" onclick="savePurchase()">${f.save}</button>
      <button class="btn" onclick="closeModal()">${f.cancel}</button>
    </div>`);
  setPurchCost();
}

function setPurchCost() {
  const sel = document.getElementById('pu_prod');
  document.getElementById('pu_cost').value = sel.options[sel.selectedIndex].dataset.cost;
}

function addPurchaseItem() {
  const f = t('purchases.form');
  const sel = document.getElementById('pu_prod');
  const id = sel.value, name = sel.options[sel.selectedIndex].dataset.name;
  const qty = parseFloat(document.getElementById('pu_qty').value);
  const cost = parseFloat(document.getElementById('pu_cost').value);
  if(!qty||!cost) { alert(f.invalidData); return; }
  purchaseItems.push({productId:id, name, qty, cost});
  renderPurchItems();
}

function renderPurchItems() {
  let total = 0;
  const html = purchaseItems.map((it,i)=>{
    const sub = it.qty*it.cost; total += sub;
    return `<div class="item-row"><span>${it.name} × ${it.qty} = ${sub.toFixed(2)}</span><button class="btn btn-sm btn-danger" onclick="removePurchItem(${i})">×</button></div>`;
  }).join('');
  document.getElementById('purchItemsList').innerHTML = html;
  document.getElementById('purchTotal').innerText = total.toFixed(2);
}

function removePurchItem(i) { purchaseItems.splice(i,1); renderPurchItems(); }

function savePurchase() {
  const f = t('purchases.form');
  if(!purchaseItems.length) { alert(f.noItems); return; }
  const total = purchaseItems.reduce((a, it) => a + it.qty * it.cost, 0);
  const paid = parseFloat(document.getElementById('pu_paid').value) || 0;
  const purchase = {
    id: DB.nextId('purchases'),
    date: document.getElementById('pu_date').value,
    supplier: document.getElementById('pu_supp').value,
    total, paid, due: total - paid,
    items: [...purchaseItems]
  };
  
  const products = DB.get('products');
  purchaseItems.forEach(it => {
    const p = products.find(x => x.id == it.productId);
    if (p) {
      p.buy = it.cost;
      p.stock = (parseFloat(p.stock)||0) + it.qty;
    }
  });
  DB.set('products', products);
  
  const purchases = DB.get('purchases');
  purchases.push(purchase);
  DB.set('purchases', purchases);
  
  closeModal();
  alert(`${f.success} ${purchase.id}`);
  renderPurchasesList();
}

// ============================================
// المصاريف
// ============================================
function loadExpenses() {
  content.innerHTML = `
    <div class="section-title">${t('expenses.title')}<button class="btn" onclick="expenseForm()">${t('expenses.add')}</button></div>
    <div class="search-box">
      <input type="text" id="searchExpense" placeholder="${t('expenses.search')}" oninput="renderExpensesList()">
    </div>
    <div id="expensesList"></div>`;
  renderExpensesList();
}

function renderExpensesList() {
  const query = (document.getElementById('searchExpense')?.value || '').toLowerCase();
  const list = DB.get('expenses').filter(e => 
    !query || e.title.toLowerCase().includes(query) || (e.notes||'').toLowerCase().includes(query)
  ).reverse();
  const th = t('expenses.th');
  document.getElementById('expensesList').innerHTML = `
    <table><thead><tr><th>${th.num}</th><th>${th.date}</th><th>${th.desc}</th><th>${th.amount}</th><th>${th.notes}</th><th>${th.actions}</th></tr></thead>
    <tbody>${list.map(e=>`<tr><td>${e.id}</td><td>${e.date}</td><td>${e.title}</td><td>${money(e.amount)}</td><td>${e.notes||'-'}</td><td><button class="btn btn-sm btn-danger" onclick="delExpense(${e.id})">${t('products.delete')}</button></td></tr>`).join('')||`<tr><td colspan="6">${t('expenses.empty')}</td></tr>`}</tbody></table>`;
}

function expenseForm() {
  const f = t('expenses.form');
  openModal(`
    <h3>${f.title}</h3>
    <div class="form-row">
      <div class="form-group"><label>${f.date}</label><input id="e_date" type="date" value="${todayStr()}"></div>
      <div class="form-group"><label>${f.amount}</label><input id="e_amount" type="number" step="0.01"></div>
    </div>
    <div class="form-group"><label>${f.desc}</label><input id="e_title"></div>
    <div class="form-group"><label>${f.notes}</label><input id="e_notes"></div>
    <button class="btn btn-success" onclick="saveExpense()">${f.save}</button>
    <button class="btn" onclick="closeModal()">${f.cancel}</button>`);
}

function saveExpense() {
  const f = t('expenses.form');
  const data = {
    id: DB.nextId('expenses'),
    date: document.getElementById('e_date').value,
    title: document.getElementById('e_title').value,
    amount: parseFloat(document.getElementById('e_amount').value)||0,
    notes: document.getElementById('e_notes').value
  };
  if(!data.title||!data.amount) { alert(f.required); return; }
  const expenses = DB.get('expenses');
  expenses.push(data);
  DB.set('expenses', expenses);
  closeModal();
  renderExpensesList();
}

function delExpense(id) { 
  if(confirm(t('expenses.confirmDelete'))) {
    DB.set('expenses', DB.get('expenses').filter(e => e.id != id));
    renderExpensesList();
  } 
}

// ============================================
// التقارير
// ============================================
function loadReports() {
  const today = new Date();
  const firstDay = new Date(today.getFullYear(), today.getMonth(), 1).toISOString().substring(0,10);
  content.innerHTML = `
    <div class="section-title">${t('reports.title')}</div>
    <div class="card" style="max-width:800px;margin-bottom:20px;">
      <div class="form-row">
        <div class="form-group"><label>${t('reports.from')}</label><input id="r_start" type="date" value="${firstDay}"></div>
        <div class="form-group"><label>${t('reports.to')}</label><input id="r_end" type="date" value="${todayStr()}"></div>
      </div>
      <div style="display:flex;gap:10px;">
        <button class="btn" onclick="showReport()">${t('reports.show')}</button>
        <button class="btn btn-success" onclick="exportReportCSV()">${t('reports.export')}</button>
      </div>
    </div>
    <div id="reportResult"></div>`;
  showReport();
}

function showReport() {
  const start = document.getElementById('r_start').value;
  const end = document.getElementById('r_end').value;
  if(!start||!end) { alert(t('reports.invalidDates')); return; }
  
  const sales = DB.get('sales').filter(s => s.date >= start && s.date <= end);
  const purchases = DB.get('purchases').filter(p => p.date >= start && p.date <= end);
  const expenses = DB.get('expenses').filter(e => e.date >= start && e.date <= end);
  
  const totalSales = sales.reduce((a, s) => a + (parseFloat(s.total)||0), 0);
  const totalPaid = sales.reduce((a, s) => a + (parseFloat(s.paid)||0), 0);
  const totalPurchases = purchases.reduce((a, p) => a + (parseFloat(p.total)||0), 0);
  const totalExpenses = expenses.reduce((a, e) => a + (parseFloat(e.amount)||0), 0);
  const profit = totalSales - totalPurchases - totalExpenses;
  
  document.getElementById('reportResult').innerHTML = `
    <div class="cards">
      <div class="card"><div class="title">${t('reports.totalSales')}</div><div class="value">${money(totalSales)}</div></div>
      <div class="card green"><div class="title">${t('reports.totalPaid')}</div><div class="value">${money(totalPaid)}</div></div>
      <div class="card"><div class="title">${t('reports.totalPurchases')}</div><div class="value">${money(totalPurchases)}</div></div>
      <div class="card"><div class="title">${t('reports.totalExpenses')}</div><div class="value">${money(totalExpenses)}</div></div>
      <div class="card ${profit>=0?'green':'red'}"><div class="title">${t('reports.profit')}</div><div class="value">${money(profit)}</div></div>
      <div class="card blue"><div class="title">${t('reports.operations')}</div><div class="value">${sales.length + purchases.length + expenses.length}</div></div>
    </div>
    <div class="alert alert-warning">${t('reports.note')}</div>`;
}

function exportReportCSV() {
  const start = document.getElementById('r_start').value;
  const end = document.getElementById('r_end').value;
  const sales = DB.get('sales').filter(s => s.date >= start && s.date <= end);
  const purchases = DB.get('purchases').filter(p => p.date >= start && p.date <= end);
  const expenses = DB.get('expenses').filter(e => e.date >= start && e.date <= end);
  
  let csv = 'Date;Type;Reference;Montant;Payé;Reste\n';
  sales.forEach(s => csv += `${s.date};Vente;${s.id};${s.total};${s.paid};${s.due}\n`);
  purchases.forEach(p => csv += `${p.date};Achat;${p.id};${p.total};${p.paid};${p.due}\n`);
  expenses.forEach(e => csv += `${e.date};Depense;${e.title};${e.amount};${e.amount};0\n`);
  
  const blob = new Blob([csv], {type:'text/csv;charset=utf-8;'});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.download = `rapport_${start}_${end}.csv`; a.click();
}

// ============================================
// النسخ الاحتياطي
// ============================================
function loadBackup() {
  content.innerHTML = `
    <div class="section-title">${t('backup.title')}</div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:20px;max-width:1000px;">
      <div class="card">
        <div class="title" style="font-size:16px;">${t('backup.exportTitle')}</div>
        <p style="margin:10px 0;color:#776A62;font-size:13px;">${t('backup.exportDesc')}</p>
        <button class="btn btn-success" onclick="doExport()">${t('backup.exportBtn')}</button>
      </div>
      <div class="card">
        <div class="title" style="font-size:16px;">${t('backup.importTitle')}</div>
        <p style="margin:10px 0;color:#776A62;font-size:13px;">${t('backup.importWarn')}</p>
        <input type="file" id="importFile" accept=".json" style="margin:10px 0;">
        <br>
        <button class="btn" onclick="doImport()">${t('backup.importBtn')}</button>
      </div>
    </div>
    <div class="alert alert-warning" style="margin-top:20px;max-width:1000px;">${t('backup.tip')}</div>`;
}

function doExport() {
  const data = {
    version: '1.0',
    exportDate: new Date().toISOString(),
    products: DB.get('products'),
    customers: DB.get('customers'),
    sales: DB.get('sales'),
    purchases: DB.get('purchases'),
    expenses: DB.get('expenses'),
    settings: DB.getObj('settings')
  };
  const blob = new Blob([JSON.stringify(data, null, 2)], {type:'application/json'});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `TrafikSaveurs_Backup_${todayStr()}.json`;
  a.click();
  alert('✅ تم التصدير بنجاح!');
}

function doImport() {
  const fileInput = document.getElementById('importFile');
  if (!fileInput.files.length) { alert(t('common.chooseFile')); return; }
  if (!confirm(t('common.confirmReplace'))) return;
  
  const reader = new FileReader();
  reader.onload = e => {
    try {
      const data = JSON.parse(e.target.result);
      if (!data.version) throw new Error('ملف غير صالح');
      
      if (data.products) DB.set('products', data.products);
      if (data.customers) DB.set('customers', data.customers);
      if (data.sales) DB.set('sales', data.sales);
      if (data.purchases) DB.set('purchases', data.purchases);
      if (data.expenses) DB.set('expenses', data.expenses);
      if (data.settings) DB.setObj('settings', data.settings);
      
      alert(`✅ تم الاستيراد!\n- المنتجات: ${data.products?.length || 0}\n- العملاء: ${data.customers?.length || 0}\n- المبيعات: ${data.sales?.length || 0}`);
      loadDashboard();
    } catch(err) {
      alert('❌ خطأ: ' + err.message);
    }
  };
  reader.readAsText(fileInput.files[0]);
}

// ============================================
// الإعدادات
// ============================================
function loadSettings() {
  const s = DB.getObj('settings');
  content.innerHTML = `
    <div class="section-title">${t('settings.title')}</div>
    <div class="card" style="max-width:600px;">
      <div class="form-group"><label>${t('settings.companyName')}</label><input id="st_name" value="${s['اسم_الشركة']||''}"></div>
      <div class="form-group"><label>${t('settings.currency')}</label><input id="st_cur" value="${s['العملة']||'دج'}"></div>
      <div class="form-group"><label>${t('settings.phone')}</label><input id="st_phone" value="${s['الهاتف']||''}"></div>
      <div class="form-group"><label>${t('settings.address')}</label><input id="st_addr" value="${s['العنوان']||''}"></div>
      <div class="form-group"><label>${t('settings.userName')}</label><input id="st_user" value="${s['اسم_المستخدم']||''}"></div>
      <button class="btn btn-success" onclick="saveSettings()">${t('settings.save')}</button>
    </div>`;
}

function saveSettings() {
  const data = {
    'اسم_الشركة': document.getElementById('st_name').value,
    'العملة': document.getElementById('st_cur').value,
    'الهاتف': document.getElementById('st_phone').value,
    'العنوان': document.getElementById('st_addr').value,
    'اسم_المستخدم': document.getElementById('st_user').value
  };
  DB.setObj('settings', data);
  alert(t('settings.saved'));
}

// ============================================
// تحويل التاريخ الميلادي إلى هجري
// ============================================
function gregorianToHijri(date) {
  const hijriMonths = ['محرم','صفر','ربيع الأول','ربيع الثاني','جمادى الأولى','جمادى الآخرة','رجب','شعبان','رمضان','شوال','ذو القعدة','ذو الحجة'];
  const jd = Math.floor((date.getTime() / 86400000) + 2440587.5);
  const l = jd - 1948440 + 10632;
  const n = Math.floor((l - 1) / 10631);
  const l2 = l - 10631 * n + 354;
  const j = Math.floor((10985 - l2) / 5316) * Math.floor((50 * l2) / 17719) + Math.floor(l2 / 5670) * Math.floor((43 * l2) / 15238);
  const l3 = l2 - Math.floor((30 - j) / 15) * Math.floor((17719 * j) / 50) - Math.floor(j / 16) * Math.floor((15238 * j) / 43) + 29;
  const month = Math.floor((24 * l3) / 709);
  const day = l3 - Math.floor((709 * month) / 24);
  const year = 30 * n + j - 30;
  return `${day} ${hijriMonths[month - 1]} ${year} هـ`;
}

// ============================================
// بدء التشغيل
// ============================================
applyLang();
loadDashboard();