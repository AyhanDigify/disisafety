/* =====================================================================
   DISI SAFETY v2 — YÖNETİM AYARLARI
   Menü düğmesi eklemek/çıkarmak, banner ve açılış penceresini değiştirmek
   için SADECE bu bloğu düzenlemek yeterli. (Canlı sitede bu alanlar
   yönetim panelinden form olarak düzenlenecek.)
   ===================================================================== */
const AYAR = {
  /* Üst menü düğmeleri — satır ekle = düğme eklenir, sil = düğme kalkar */
  menu: [
    { tr: "Darbe Emici Şapka", en: "Bump Caps", link: "category.html", ikon: "cap"     },
    { tr: "KKD",        en: "PPE",        link: "#kkd",            ikon: "shield"  },
    { tr: "Tekstil",    en: "Textile",    link: "#tekstil",        ikon: "shirt"   },
    { tr: "Promosyon",  en: "Promotional",link: "#promosyon",      ikon: "gift"    },
    { tr: "Üretim",     en: "Production", link: "#uretim",         ikon: "factory" },
    { tr: "Belgeler",   en: "Documents",  link: "#belgeler",       ikon: "doc"     },
    { tr: "Kataloglar", en: "Catalogs",   link: "#kataloglar",     ikon: "book"    },
  ],

  /* Markalar — logo düğmesi (üst bar) + "Markalarımız" kartları.
     alt = logonun altındaki küçük yazı. sadeceB:true = yalnız Tasarım B'de gösterilir */
  markalar: [
    { ad: "Shelter", alt: "bump cap", logo: "img/shelter-logo-11.png", gorsel: "img/shelter-8.jpg", link: "category.html?brand=shelter",
      tr: "Endüstriyel, dayanıklı klasik seri", en: "Industrial, durable classic line" },
    { ad: "Lymra",   alt: "bump cap", logo: "img/lymra-logo-cizgisiz.png", gorsel: "img/lymra-tek-neon.jpg", link: "category.html?brand=lymra",
      tr: "Hafif, fileli, reflektifli spor seri", en: "Lightweight, mesh, reflective sport line" },
    { ad: "Houcap",  alt: "petcap",   logo: "img/houcap-logo.png", gorsel: "img/houcap-kare.jpg", link: "houcap.html",
      tr: "Köpekler için ayarlı şapka — yeni seri", en: "Adjustable caps for dogs — new line" },
    { ad: "Disi Safety", alt: "KKD", logo: "img/disidafety-logo-11.png", gorsel: "img/slider4.webp", link: "#kkd", sadeceB: true,
      tr: "Baştan ayağa kişisel koruyucu donanım", en: "Head-to-toe personal protective equipment" },
  ],

  /* Hızlı işlem düğmeleri (üst şerit) — link "#modal:xxx" = açılır pencere */
  hizli: [
    { tr: "Banka Bilgileri", en: "Bank Details", link: "#modal:banka",     ikon: "bank"  },
    { tr: "Teklif İste",     en: "Request Quote",link: "#teklif",          ikon: "quote" },
    { tr: "Mail Order",      en: "Mail Order",   link: "#modal:mailorder", ikon: "card"  },
    { tr: "Katalog",         en: "Catalog",      link: "#kataloglar",      ikon: "book"  },
  ],

  /* Banka hesapları — ⚠️ ÖRNEK: gerçek IBAN'lar firmadan gelecek */
  banka: [
    { banka: "Banka adı (örnek)", sube: "Şube / kod", para: "TL",  iban: "TR00 0000 0000 0000 0000 0000 00" },
    { banka: "Banka adı (örnek)", sube: "Şube / kod", para: "USD", iban: "TR00 0000 0000 0000 0000 0000 00" },
    { banka: "Banka adı (örnek)", sube: "Şube / kod", para: "EUR", iban: "TR00 0000 0000 0000 0000 0000 00" },
  ],
  hesapSahibi: "Disi Tekstil (unvan firmadan teyit edilecek)",

  /* Kataloglar */
  kataloglar: [
    { ad: { tr: "Shelter Kataloğu", en: "Shelter Catalog" }, alt: { tr: "Darbe emici şapka, KKD ve iş giysileri · PDF", en: "Bump caps, PPE and workwear · PDF" }, link: "docs/shelter-katalog.pdf", gorsel: "img/katalog/kapak-shelter.jpg", tur: "pdf" },
    { ad: { tr: "Promosyon Kataloğu", en: "Promotional Catalog" }, alt: { tr: "Promosyon ürünleri · promosyonajans.com", en: "Promotional products · promosyonajans.com" }, link: "https://www.promosyonajans.com/", gorsel: "img/katalog/kapak-promosyon.jpg", tur: "web" },
  ],

  /* Ana sayfa kayan banner (4–5 adet önerilir) */
  bannerSure: 6000, // ms
  banner: [
    { gorsel: "gen/hero.webp", etiket: { tr: "EN 812 Sertifikalı", en: "EN 812 Certified" },
      baslik: { tr: "Türkiye'den <em>EN 812</em> Darbe Emici Şapka Üreticisi", en: "EN 812 Bump Cap <em>Manufacturer</em> from Türkiye" },
      metin: { tr: "1986'dan beri İstanbul'daki kendi tesisimizde üretim; logolu, özel etiketli ve ihracata hazır.", en: "Produced in our own Istanbul facility since 1986 — custom logo, private label, export ready." },
      dugme: { tr: "Modelleri İncele", en: "View Models", link: "category.html" } },
    { gorsel: "img/wa-20.09.01.jpeg", konum: "center 35%", etiket: { tr: "Markalarımız", en: "Our Brands" },
      baslik: { tr: "Shelter · Lymra · <em>Houcap</em> · Disi Safety", en: "Shelter · Lymra · <em>Houcap</em> · Disi Safety" },
      metin: { tr: "Darbe emici şapkadan köpek şapkasına, KKD'den kurumsal tekstile — hepsi tek üreticiden.", en: "From bump caps to dog caps, PPE to corporate textile — all from one manufacturer." },
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
  book: '<path d="M4 5c3-1 5-1 8 1 3-2 5-2 8-1v14c-3-1-5-1-8 1-3-2-5-2-8-1z"/><path d="M12 6v14"/>',
  bank: '<path d="M3 10l9-6 9 6M5 10v8M9.5 10v8M14.5 10v8M19 10v8M3 21h18"/>',
  card: '<rect x="2.5" y="5" width="19" height="14" rx="2"/><path d="M2.5 10h19M6 15h4"/>',
  quote: '<path d="M4 4h16v12H8l-4 4z"/><path d="M8 9h8M8 12h5"/>',
  user: '<circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 3.6-7 8-7s8 3 8 7"/>',
};
const svg = (k, sw = 1.7) => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round">${IKON[k] || ""}</svg>`;

let DIL = "tr"; try { DIL = localStorage.getItem("disi_v2_dil") || "tr"; } catch (e) {}
{ const q = new URLSearchParams(location.search).get("lang"); if (q === "tr" || q === "en") { DIL = q; try { localStorage.setItem("disi_v2_dil", q); } catch (e) {} } }
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
  el.innerHTML = AYAR.markalar.filter(b => !b.sadeceB || window.TASARIM_B).map(sablon).join("");
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

/* Hızlı işlem düğmeleri + açılır pencereler (banka / mail order) — Tasarım B */
function hizliCiz(sel) {
  document.querySelectorAll(sel).forEach(el => el.innerHTML = AYAR.hizli.map(h => `<a href="${h.link}">${svg(h.ikon, 2)}<span>${t(h)}</span></a>`).join(""));
}
const MODAL = {
  banka: () => `<span class="pill">${DIL === "tr" ? "Ödeme" : "Payment"}</span>
    <h3>${DIL === "tr" ? "Banka Bilgileri" : "Bank Details"}</h3>
    <p>${DIL === "tr" ? "Hesap sahibi" : "Account holder"}: <b>${AYAR.hesapSahibi}</b></p>
    <div class="ibn">${AYAR.banka.map(b => `<div><b>${b.banka}</b><span class="cur">${b.para}</span><small>${b.sube}</small><code>${b.iban}</code><button data-iban="${b.iban}">${DIL === "tr" ? "Kopyala" : "Copy"}</button></div>`).join("")}</div>
    <p class="note">${DIL === "tr" ? "Örnek bilgilerdir — gerçek IBAN'lar firmadan gelince eklenecek. Havale açıklamasına firma adınızı yazınız." : "Sample data — real IBANs will be added. Please write your company name in the transfer description."}</p>`,
  mailorder: () => `<span class="pill">${DIL === "tr" ? "Kredi kartı" : "Credit card"}</span>
    <h3>Mail Order</h3>
    <p>${DIL === "tr" ? "Kredi kartınızla, siteye kart bilgisi girmeden ödeme yapabilirsiniz." : "Pay by credit card without entering card details on the website."}</p>
    <ol class="steps">
      <li>${DIL === "tr" ? "Mail order formunu indirin ve doldurun." : "Download and fill in the mail order form."}</li>
      <li>${DIL === "tr" ? "Kart sahibi olarak imzalayın." : "Sign it as the card holder."}</li>
      <li>${DIL === "tr" ? "Formu ve kimlik fotokopisini e-posta ile gönderin." : "Email the form with a copy of your ID."}</li>
      <li>${DIL === "tr" ? "Ödemeniz alınınca siparişiniz onaylanır." : "Your order is confirmed once payment is received."}</li>
    </ol>
    <div class="mdl-cta"><a class="btn btn-red" href="#" onclick="return false" title="Form firmadan gelecek">${DIL === "tr" ? "Formu İndir (PDF)" : "Download Form (PDF)"}</a>
    <a class="btn btn-ghost" href="mailto:info@disisafety.com?subject=Mail%20Order">${DIL === "tr" ? "E-posta ile Gönder" : "Send by Email"}</a></div>
    <p class="note">${DIL === "tr" ? "Mail order formu firmadan gelince indirme düğmesi çalışacak." : "Download will work once the form is supplied."}</p>`,
};
function modalAc(ad) {
  if (!MODAL[ad]) return;
  let m = document.querySelector(".mdl");
  if (!m) {
    m = document.createElement("div"); m.className = "mdl";
    m.innerHTML = `<div class="mdl-box" role="dialog" aria-modal="true"><button class="mdl-x" aria-label="Kapat">×</button><div class="mdl-in"></div></div>`;
    document.body.appendChild(m);
    m.addEventListener("click", e => {
      if (e.target === m || e.target.closest(".mdl-x")) { m.classList.remove("open"); document.body.classList.remove("noscroll"); }
      const k = e.target.closest("[data-iban]");
      if (k) { navigator.clipboard?.writeText(k.dataset.iban.replace(/\s/g, "")); k.textContent = DIL === "tr" ? "Kopyalandı ✓" : "Copied ✓"; }
    });
    document.addEventListener("keydown", e => { if (e.key === "Escape") { m.classList.remove("open"); document.body.classList.remove("noscroll"); } });
  }
  m.querySelector(".mdl-in").innerHTML = MODAL[ad]();
  requestAnimationFrame(() => m.classList.add("open")); document.body.classList.add("noscroll");
}
document.addEventListener("click", e => {
  const a = e.target.closest('a[href^="#modal:"]'); if (!a) return;
  e.preventDefault(); modalAc(a.getAttribute("href").slice(7));
});
/* Bağlantı #modal:banka ile açılırsa pencereyi doğrudan aç */
addEventListener("load", () => { if (location.hash.startsWith("#modal:")) modalAc(location.hash.slice(7)); });
