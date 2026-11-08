/* =====================================================================
   DISI SAFETY v2 — YÖNETİM AYARLARI
   Menü düğmesi eklemek/çıkarmak, banner ve açılış penceresini değiştirmek
   için SADECE bu bloğu düzenlemek yeterli. (Canlı sitede bu alanlar
   yönetim panelinden form olarak düzenlenecek.)
   ===================================================================== */
const AYAR = {
  /* Üst menü düğmeleri — satır ekle = düğme eklenir, sil = düğme kalkar */
  menu: [
    { tr: "KKD",        en: "PPE",        link: "category.html",  ikon: "shield"  },
    { tr: "Tekstil",    en: "Textile",    link: "#tekstil",        ikon: "shirt"   },
    { tr: "Promosyon",  en: "Promotional",link: "#promosyon",      ikon: "gift"    },
    { tr: "Üretim",     en: "Production", link: "#uretim",         ikon: "factory" },
    { tr: "Belgeler",   en: "Documents",  link: "#belgeler",       ikon: "doc"     },
  ],

  /* Markalar — büyük yazılan ad + altında küçük "bump cap" */
  markalar: [
    { ad: "Shelter", alt: "bump cap", logo: "img/shelter-logo-11.png", gorsel: "img/shelter-8.jpg", link: "category.html?brand=shelter",
      tr: "Endüstriyel, dayanıklı klasik seri", en: "Industrial, durable classic line" },
    { ad: "Lymra",   alt: "bump cap", logo: "img/lymra-logo-11.png",   gorsel: "img/lymra-tek-neon.jpg",   link: "category.html?brand=lymra",
      tr: "Hafif, fileli, reflektifli spor seri", en: "Lightweight, mesh, reflective sport line" },
    { ad: "Houcap",  alt: "bump cap", logo: "",                         gorsel: "img/shelter-7.jpg", link: "category.html",
      tr: "Yeni seri — yakında", en: "New line — coming soon" },
  ],

  /* Ana sayfa kayan banner (4–5 adet önerilir) */
  bannerSure: 6000, // ms
  banner: [
    { gorsel: "gen/hero.webp", etiket: { tr: "EN 812 Sertifikalı", en: "EN 812 Certified" },
      baslik: { tr: "Türkiye'den <em>EN 812</em> Darbe Emici Şapka Üreticisi", en: "EN 812 Bump Cap <em>Manufacturer</em> from Türkiye" },
      metin: { tr: "1986'dan beri İstanbul'daki kendi tesisimizde üretim; logolu, özel etiketli ve ihracata hazır.", en: "Produced in our own Istanbul facility since 1986 — custom logo, private label, export ready." },
      dugme: { tr: "Modelleri İncele", en: "View Models", link: "category.html" } },
    { gorsel: "img/wa-20.09.01.jpeg", konum: "center 35%", etiket: { tr: "Markalarımız", en: "Our Brands" },
      baslik: { tr: "Shelter · Lymra · <em>Houcap</em>", en: "Shelter · Lymra · <em>Houcap</em>" },
      metin: { tr: "Üç seri, tek kalite standardı: ABS iç kabuk, EVA darbe emici, file havalandırma.", en: "Three lines, one standard: ABS inner shell, EVA absorber, mesh ventilation." },
      dugme: { tr: "Serileri Gör", en: "See the Lines", link: "#markalar" } },
    { gorsel: "gen/factory.webp", etiket: { tr: "Üretim Gücü", en: "Production" },
      baslik: { tr: "Ayda <em>50.000+</em> şapka, 1.000 m² tesis", en: "<em>50,000+</em> caps a month, 1,000 m² facility" },
      metin: { tr: "Nakış, dikim, montaj ve kalite kontrol aynı çatı altında.", en: "Embroidery, sewing, assembly and QC under one roof." },
      dugme: { tr: "Üretimi Keşfet", en: "Explore Production", link: "#uretim" } },
    { gorsel: "img/slider-33.jpg", etiket: { tr: "KKD", en: "PPE" },
      baslik: { tr: "Baştan ayağa <em>iş güvenliği</em> ekipmanı", en: "Head-to-toe <em>safety</em> equipment" },
      metin: { tr: "Baret, gözlük, kulaklık, eldiven ve iş ayakkabısı tek tedarikçiden.", en: "Helmets, eyewear, ear protection, gloves and footwear from one supplier." },
      dugme: { tr: "KKD Ürünleri", en: "PPE Products", link: "#kkd" } },
    { gorsel: "img/slider2.jpg", konum: "center 30%", etiket: { tr: "Tekstil & Promosyon", en: "Textile & Promo" },
      baslik: { tr: "Kurumsal <em>tekstil</em> ve promosyon", en: "Corporate <em>textile</em> & promotional" },
      metin: { tr: "Polo, sweatshirt, şapka, çanta — firmanızın logosuyla.", en: "Polos, sweatshirts, caps, bags — with your logo." },
      dugme: { tr: "Tekstili Gör", en: "See Textile", link: "#tekstil" } },
  ],

  /* Açılış penceresi (duyuru / kutlama / fuar) */
  popup: {
    aktif: true,              // false = hiç gösterme
    kimlik: "fuar-2026-kas",  // değiştirilirse herkes yeniden görür
    baslangic: "2026-11-01",  // bu tarihten itibaren
    bitis: "2026-12-31",      // bu tarihe kadar
    tekSefer: true,           // ziyaretçi kapattıysa bir daha gösterme
    gecikme: 1200,            // ms — sayfa açıldıktan sonra
    gorsel: "gen/factory.webp",
    etiket: { tr: "Duyuru", en: "Announcement" },
    baslik: { tr: "A+A 2027 Düsseldorf'tayız!", en: "Meet us at A+A 2027 Düsseldorf!" },
    metin:  { tr: "Yeni Houcap serimizi standımızda ilk kez tanıtıyoruz. Randevu için bize yazın.", en: "We launch our new Houcap line at our booth. Write to us to book a meeting." },
    dugme:  { tr: "Randevu Al", en: "Book a Meeting", link: "#teklif" },
  },
};

/* ===================================================================== */
/* Aşağısı motor — normalde dokunulmaz                                   */
/* ===================================================================== */
const IKON = {
  shield: '<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/><path d="M8.5 12l2.5 2.5 4.5-5"/>',
  shirt: '<path d="M8 3l-5 3 2 4 2-1v12h10V9l2 1 2-4-5-3c-.5 1.7-2 3-4 3s-3.5-1.3-4-3z"/>',
  gift: '<rect x="3" y="8" width="18" height="4"/><path d="M5 12v9h14v-9M12 8v13M12 8c-2-4-6-4-6-1.5S10 8 12 8zm0 0c2-4 6-4 6-1.5S14 8 12 8z"/>',
  factory: '<path d="M3 21V10l5 3V10l5 3V5h4v16z"/><path d="M3 21h18"/>',
  doc: '<path d="M6 2h9l5 5v15H6z"/><path d="M14 2v6h6M9 13h8M9 17h6"/>',
  cap: '<path d="M4 15c0-5 3.5-9 8-9s8 4 8 9H4z"/><path d="M2 15h14l6 2"/>',
  user: '<circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 3.6-7 8-7s8 3 8 7"/>',
};
const svg = (k, sw = 1.7) => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round">${IKON[k] || ""}</svg>`;

let DIL = "tr"; try { DIL = localStorage.getItem("disi_v2_dil") || "tr"; } catch (e) {}
const t = o => (o && typeof o === "object") ? (o[DIL] ?? o.tr) : o;

/* Menü */
function menuCiz(sel, sablon) {
  document.querySelectorAll(sel).forEach(el => {
    el.innerHTML = AYAR.menu.map(m => sablon(m)).join("");
  });
}
/* Markalar */
function markaCiz(sel, sablon) {
  const el = document.querySelector(sel); if (!el) return;
  el.innerHTML = AYAR.markalar.map(sablon).join("");
}

/* Banner */
function banner(kok, opts = {}) {
  const el = document.querySelector(kok); if (!el) return;
  const S = AYAR.banner;
  el.querySelector(".sl-track").innerHTML = S.map((s, i) => `
    <div class="sl${i === 0 ? " on" : ""}">
      <div class="sl-bg" style="background-image:url('${s.gorsel}');background-position:${s.konum || "center"}"></div>
      <div class="sl-in"><div class="sl-txt">
        <span class="sl-tag">${t(s.etiket)}</span>
        <h1>${t(s.baslik)}</h1>
        <p>${t(s.metin)}</p>
        <div class="sl-cta"><a class="btn btn-red" href="${s.dugme.link}">${t(s.dugme)} <span aria-hidden="true">→</span></a>
        <a class="btn btn-ghost" href="#teklif">${DIL === "tr" ? "Teklif Al" : "Request a Quote"}</a></div>
      </div></div>
    </div>`).join("");
  const nav = el.querySelector(".sl-nav");
  if (nav) nav.innerHTML = S.map((s, i) => `<button class="${i === 0 ? "on" : ""}" aria-label="${i + 1}"><i></i><span>${String(i + 1).padStart(2, "0")}</span><b>${t(s.etiket)}</b></button>`).join("");
  const sl = [...el.querySelectorAll(".sl")], dots = nav ? [...nav.children] : [];
  let cur = 0; clearTimeout(window._slT);
  el.style.setProperty("--dur", AYAR.bannerSure + "ms");
  const go = n => {
    cur = (n + S.length) % S.length;
    sl.forEach((x, i) => x.classList.toggle("on", i === cur));
    dots.forEach((x, i) => { x.classList.remove("on"); if (i === cur) { void x.offsetWidth; x.classList.add("on"); } });
    const c = el.querySelector(".sl-count"); if (c) c.innerHTML = `<b>${String(cur + 1).padStart(2, "0")}</b> / ${String(S.length).padStart(2, "0")}`;
    clearTimeout(window._slT); window._slT = setTimeout(() => go(cur + 1), AYAR.bannerSure);
  };
  dots.forEach((d, i) => d.onclick = () => go(i));
  const pv = el.querySelector(".sl-prev"), nx = el.querySelector(".sl-next");
  if (pv) pv.onclick = () => go(cur - 1);
  if (nx) nx.onclick = () => go(cur + 1);
  let x0 = null;
  el.ontouchstart = e => x0 = e.touches[0].clientX;
  el.ontouchend = e => { if (x0 == null) return; const dx = e.changedTouches[0].clientX - x0; if (Math.abs(dx) > 40) go(cur + (dx < 0 ? 1 : -1)); x0 = null; };
  go(0);
}

/* Açılış penceresi */
function popup(stil) {
  const P = AYAR.popup; if (!P.aktif) return;
  const bugun = new Date().toISOString().slice(0, 10);
  if ((P.baslangic && bugun < P.baslangic) || (P.bitis && bugun > P.bitis)) return;
  const anahtar = "disi_popup_" + P.kimlik;
  const zorla = location.search.includes("popup=1"); if (location.search.includes("popup=0")) return;
  try { if (P.tekSefer && !zorla && localStorage.getItem(anahtar)) return; } catch (e) {}
  const d = document.createElement("div");
  d.className = "pop pop-" + stil;
  d.innerHTML = `<div class="pop-box" role="dialog" aria-modal="true" aria-label="${t(P.baslik)}">
    <button class="pop-x" aria-label="Kapat">×</button>
    ${P.gorsel ? `<div class="pop-img" style="background-image:url('${P.gorsel}')"></div>` : ""}
    <div class="pop-body"><span class="pop-tag">${t(P.etiket)}</span><h3>${t(P.baslik)}</h3><p>${t(P.metin)}</p>
    <a class="btn btn-red" href="${P.dugme.link}">${t(P.dugme)} →</a></div></div>`;
  const kapat = () => { d.classList.remove("open"); try { localStorage.setItem(anahtar, "1"); } catch (e) {} setTimeout(() => d.remove(), 400); };
  d.addEventListener("click", e => { if (e.target === d || e.target.closest(".pop-x") || e.target.closest(".pop-body a")) kapat(); });
  document.addEventListener("keydown", e => { if (e.key === "Escape") kapat(); });
  setTimeout(() => { document.body.appendChild(d); requestAnimationFrame(() => d.classList.add("open")); }, P.gecikme);
}

/* Sayfa başına dön */
function yukari() {
  const b = document.createElement("button");
  b.className = "totop"; b.setAttribute("aria-label", "Sayfa başına dön");
  b.innerHTML = `<svg class="ring" viewBox="0 0 48 48"><circle cx="24" cy="24" r="21"/><circle class="p" cx="24" cy="24" r="21"/></svg>
    <svg class="ar" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19V5M5 12l7-7 7 7"/></svg><span>${DIL === "tr" ? "Yukarı" : "Top"}</span>`;
  document.body.appendChild(b);
  const p = b.querySelector(".p"), L = 2 * Math.PI * 21;
  p.style.strokeDasharray = L;
  const f = () => {
    const h = document.documentElement, oran = h.scrollTop / (h.scrollHeight - h.clientHeight || 1);
    p.style.strokeDashoffset = L * (1 - oran);
    b.classList.toggle("show", h.scrollTop > 500);
  };
  addEventListener("scroll", f, { passive: true }); f();
  b.onclick = () => scrollTo({ top: 0, behavior: "smooth" });
}

/* Dil: data-en olan öğeler EN'e çevrilir */
const TR_CACHE = new WeakMap();
function dilUygula() {
  document.documentElement.lang = DIL;
  document.querySelectorAll("[data-en]").forEach(el => {
    if (!TR_CACHE.has(el)) TR_CACHE.set(el, el.innerHTML);
    el.innerHTML = DIL === "en" ? el.dataset.en : TR_CACHE.get(el);
  });
  document.querySelectorAll("[data-en-ph]").forEach(el => {
    el.dataset.trPh ??= el.placeholder; el.placeholder = DIL === "en" ? el.dataset.enPh : el.dataset.trPh;
  });
  document.querySelectorAll(".dil button").forEach(b => b.classList.toggle("on", b.dataset.l === DIL));
}
function dilKur(yenidenCiz) {
  document.querySelectorAll(".dil button").forEach(b => b.onclick = () => {
    DIL = b.dataset.l; try { localStorage.setItem("disi_v2_dil", DIL); } catch (e) {}
    dilUygula(); yenidenCiz && yenidenCiz();
  });
  dilUygula();
}

/* Görünür olunca animasyon */
function reveal() {
  const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { threshold: .12 });
  document.querySelectorAll(".rv").forEach(el => io.observe(el));
}
/* Sayaç */
function sayac() {
  const io = new IntersectionObserver(es => es.forEach(e => {
    if (!e.isIntersecting) return; io.unobserve(e.target);
    const el = e.target, hedef = +el.dataset.n, t0 = performance.now();
    const adim = n => { const k = Math.min(1, (n - t0) / 1400); el.textContent = Math.round(hedef * (1 - Math.pow(1 - k, 3))).toLocaleString("tr-TR"); if (k < 1) requestAnimationFrame(adim); };
    requestAnimationFrame(adim);
  }), { threshold: .5 });
  document.querySelectorAll("[data-n]").forEach(el => io.observe(el));
}
/* Mobil menü */
function burger() {
  const b = document.querySelector(".burger"), m = document.querySelector(".mnav");
  if (!b || !m) return;
  b.onclick = () => { m.classList.toggle("open"); document.body.classList.toggle("noscroll"); };
  m.addEventListener("click", e => { if (e.target.closest("a")) { m.classList.remove("open"); document.body.classList.remove("noscroll"); } });
}
/* Kaydırınca header küçülür */
function hdrScroll() {
  const h = document.querySelector(".hdr"); if (!h) return;
  const f = () => h.classList.toggle("scrolled", scrollY > 30);
  addEventListener("scroll", f, { passive: true }); f();
}
