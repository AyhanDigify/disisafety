/* Disi Safety prototype — shared data, header/footer and TR/EN switch for inner pages */
const COLORS={black:["Black","Siyah","#1b1d22"],navy:["Navy","Lacivert","#1d2a4d"],red:["Red","Kırmızı","#d62b1f"],yellow:["Yellow","Sarı","#f2c318"],grey:["Grey","Gri","#7d838c"],neon:["Neon yellow","Neon sarı","#c8e62c"]};
const FEATS={mesh:["Mesh ventilation","File havalandırma"],reflective:["Reflective strip","Reflektif şerit"],holes:["Air holes","Hava delikleri"],winter:["Winter / ear flap","Kışlık / kulaklıklı"]};
const SH_GAL=["img/wa-20.08.57-1.jpeg","img/shelter-2-2.jpg","img/wa-20.08.58-1.jpeg"];
const PRODUCTS=[
 {id:"shelter-01",brand:"Shelter",no:"01",img:"img/shelter-11.jpg",color:"black",feat:["mesh","reflective"],en:"Black cap with orange contrast peak trim and mesh side panels.",tr:"Turuncu kontrast siperlik biyeli, file yan panelli siyah şapka."},
 {id:"shelter-02",brand:"Shelter",no:"02",img:"img/shelter-333.jpg",color:"black",feat:["mesh"],en:"Black mesh-back cap, shown with corporate logo embroidery.",tr:"Arkası fileli siyah şapka, kurumsal logo nakışıyla."},
 {id:"shelter-03",brand:"Shelter",no:"03",img:"img/shelter-4.jpg",color:"red",feat:["mesh"],en:"High-visibility red cap with full mesh back.",tr:"Tam file arkalı, yüksek görünürlüklü kırmızı şapka."},
 {id:"shelter-04",brand:"Shelter",no:"04",img:"img/shelter-5.jpg",color:"black",feat:["holes"],en:"Classic black six-panel cap with ventilation holes.",tr:"Havalandırma delikli klasik siyah altı panel şapka."},
 {id:"shelter-05",brand:"Shelter",no:"05",img:"img/shelter-6.jpg",color:"navy",feat:["holes"],en:"Classic navy six-panel cap with metal-ringed air holes.",tr:"Metal halkalı hava delikli klasik lacivert altı panel şapka."},
 {id:"shelter-06",brand:"Shelter",no:"06",img:"img/shelter-7.jpg",color:"yellow",feat:["mesh"],en:"Yellow cap with mesh side panels for warm environments.",tr:"Sıcak ortamlar için file yan panelli sarı şapka."},
 {id:"shelter-07",brand:"Shelter",no:"07",img:"img/shelter-8.jpg",color:"navy",feat:["mesh","reflective"],en:"Navy sport cap with grey mesh and reflective peak edge.",tr:"Gri fileli, siperlik kenarı reflektif lacivert spor şapka."},
 {id:"shelter-08",brand:"Shelter",no:"08",img:"img/wa-20.09.01.jpeg",color:"grey",feat:["mesh","reflective"],en:"Dark grey short-peak cap with reflective band.",tr:"Reflektif bantlı, kısa siperlikli koyu gri şapka."},
 {id:"lymra-01",brand:"Lymra",no:"01",img:"img/lymra-1.jpg",color:"grey",feat:["mesh","reflective"],en:"Lightweight grey cap with breathable mesh and reflective piping.",tr:"Nefes alan fileli, reflektif biyeli hafif gri şapka."},
 {id:"lymra-02",brand:"Lymra",no:"02",img:"img/lymra-2.jpg",color:"navy",feat:["mesh","reflective"],en:"Navy lightweight cap with reflective piping.",tr:"Reflektif biyeli hafif lacivert şapka."},
 {id:"lymra-03",brand:"Lymra",no:"03",img:"img/lymra-4.jpg",color:"neon",feat:["mesh","reflective"],en:"Neon yellow hi-vis cap for maximum visibility.",tr:"Maksimum görünürlük için neon sarı şapka."},
 {id:"lymra-04",brand:"Lymra",no:"04",img:"img/lymra-6.jpg",color:"red",feat:["mesh","reflective"],en:"Red lightweight cap with black mesh panels.",tr:"Siyah file panelli hafif kırmızı şapka."},
 {id:"lymra-05",brand:"Lymra",no:"05",img:"img/lymra-7.jpg",color:"red",feat:["winter","reflective"],en:"Winter version with ear and neck flap.",tr:"Kulak ve ense korumalı kışlık model."},
 {id:"lymra-06",brand:"Lymra",no:"06",img:"img/lymra-8.jpg",color:"black",feat:["mesh"],en:"Black mesh cap, available with long or short peak.",tr:"Uzun veya kısa siperlikli siyah fileli şapka."},
];
const LY_GAL=["img/lymra-3.jpg","img/lymra-5.jpg","img/wa-20.08.58.jpeg"];
PRODUCTS.forEach(p=>{p.name=p.brand+" "+p.no;p.gallery=[p.img,...(p.brand==="Shelter"?SH_GAL:LY_GAL)]});

/* i18n */
const I18N={tr:{}};
let LANG="en";try{LANG=localStorage.getItem("disi_lang")||"en"}catch(e){}
const T=(en,tr)=>LANG==="tr"?tr:en;
function addTR(d){Object.assign(I18N.tr,d)}
const EN_CACHE={};
function applyLang(){
  document.documentElement.lang=LANG;
  document.querySelectorAll("[data-k]").forEach(el=>{const k=el.dataset.k;EN_CACHE[k]??=el.innerHTML;el.innerHTML=LANG==="tr"&&I18N.tr[k]?I18N.tr[k]:EN_CACHE[k]});
  document.querySelectorAll("[data-ph]").forEach(el=>{const k=el.dataset.ph;EN_CACHE["ph_"+k]??=el.placeholder;el.placeholder=LANG==="tr"&&I18N.tr[k]?I18N.tr[k]:EN_CACHE["ph_"+k]});
  document.querySelectorAll(".lang button").forEach(b=>b.classList.toggle("on",b.dataset.l===LANG));
  document.dispatchEvent(new Event("langchange"));
}
function setLang(l){LANG=l;try{localStorage.setItem("disi_lang",l)}catch(e){}applyLang()}

const WA='<svg viewBox="0 0 24 24"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm5.3 14.1c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .2-3.3-.7-2.8-1.1-4.5-3.9-4.7-4.1-.1-.2-1.1-1.5-1.1-2.9s.7-2.1 1-2.4c.3-.3.6-.3.8-.3h.6c.2 0 .4 0 .6.5l.9 2.1c.1.2.1.3 0 .5l-.4.6-.4.4c-.1.1-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.3 2.4 1.5.3.1.5.1.6-.1l.9-1c.2-.3.4-.2.6-.1l2 1c.3.1.5.2.5.3.1.2.1.7-.1 1.3z"/></svg>';
function shell(){
  document.getElementById("hdr").outerHTML=`
<div class="topbar"><div class="wrap"><div class="tb-l"><a href="tel:+902163084432">+90 216 308 44 32</a><a href="mailto:info@disisafety.com">info@disisafety.com</a></div>
<div class="tb-r"><span data-k="tb_mfr">EN 812 Bump Cap Manufacturer · Istanbul, Türkiye</span><a href="https://disisafety.com/catalog/" data-k="tb_dealer">Dealer Login</a></div></div></div>
<header><div class="wrap">
 <a href="index.html" class="logo"><img src="img/disi-logo-1.png" alt="Disi Safety"><small>SAFETY · SINCE 1986</small></a>
 <nav class="main"><a href="category.html" data-k="n_caps">Bump Caps</a><a href="index.html#brands" data-k="n_brands">Shelter & Lymra</a><a href="index.html#technology" data-k="n_tech">Technology</a><a href="index.html#factory" data-k="n_factory">Factory</a><a href="index.html#certificates" data-k="n_cert">Certificates</a><a href="index.html#products" data-k="n_other">Textile & PPE</a></nav>
 <div class="lang"><button data-l="en">EN</button><button data-l="tr">TR</button></div>
 <a href="#quote" class="btn btn-red hdr-cta" data-k="cta_quote">Request a Quote</a>
 <button class="burger" aria-label="Menu"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 6h18M3 12h18M3 18h18"/></svg></button>
</div></header>
<div class="mnav"><a href="category.html" data-k="n_caps">Bump Caps</a><a href="index.html#brands" data-k="n_brands">Shelter & Lymra</a><a href="index.html#technology" data-k="n_tech">Technology</a><a href="index.html#factory" data-k="n_factory">Factory</a><a href="index.html#certificates" data-k="n_cert">Certificates</a><a href="#quote" data-k="cta_quote">Request a Quote</a></div>`;
  document.getElementById("ftr").outerHTML=`
<footer><div class="wrap"><div class="f-grid">
 <div><img src="img/footer-logo-2.png" alt="Disi Safety" style="height:44px"><p style="margin-top:16px;max-width:300px" data-k="ft_about">EN 812 bump cap manufacturer and corporate textile producer from Istanbul, since 1986.</p></div>
 <div><h5 data-k="ft_caps">Bump Caps</h5><ul><li><a href="category.html?brand=shelter">Shelter®</a></li><li><a href="category.html?brand=lymra">Lymra®</a></li><li><a href="index.html#technology" data-k="n_tech">Technology</a></li><li><a href="index.html#certificates" data-k="n_cert">Certificates</a></li></ul></div>
 <div><h5 data-k="ft_co">Company</h5><ul><li><a href="https://disisafety.com/about-us/" data-k="ft_about2">About us</a></li><li><a href="index.html#factory" data-k="n_factory">Factory</a></li><li><a href="https://disisafety.com/references/" data-k="ft_ref">References</a></li><li><a href="https://disisafety.com/faq/">FAQ</a></li></ul></div>
 <div><h5 data-k="ft_ct">Contact</h5><ul><li>Ferah Mah. Ferah Yolu Sok. No:6/3<br>(Çamlıca) Üsküdar / İstanbul</li><li><a href="tel:+902163084432">+90 216 308 44 32</a></li><li><a href="mailto:info@disisafety.com">info@disisafety.com</a></li></ul></div>
</div><div class="f-bottom"><span>© 2026 Disi Safety. <span data-k="ft_rights">All rights reserved.</span></span><span>EN 812 · Shelter® · Lymra®</span></div></div></footer>
<a class="wa-float" href="https://wa.me/902163084432" target="_blank" rel="noopener" aria-label="WhatsApp">${WA}</a>`;
  const mnav=document.querySelector(".mnav");
  document.querySelector(".burger").onclick=()=>mnav.classList.toggle("open");
  mnav.querySelectorAll("a").forEach(a=>a.onclick=()=>mnav.classList.remove("open"));
  document.querySelectorAll(".lang button").forEach(b=>b.onclick=()=>setLang(b.dataset.l));
}
addTR({tb_mfr:"EN 812 Darbe Emici Şapka Üreticisi · İstanbul",tb_dealer:"Bayi Girişi",n_caps:"Darbe Emici Şapka",n_brands:"Shelter & Lymra",n_tech:"Teknoloji",n_factory:"Üretim Tesisi",n_cert:"Sertifikalar",n_other:"Tekstil & KKD",cta_quote:"Teklif Al",
ft_about:"1986'dan beri İstanbul'da EN 812 darbe emici şapka ve kurumsal tekstil üreticisi.",ft_caps:"Darbe Emici Şapka",ft_co:"Kurumsal",ft_about2:"Hakkımızda",ft_ref:"Referanslar",ft_ct:"İletişim",ft_rights:"Tüm hakları saklıdır.",home:"Ana Sayfa"});

/* product card used by category + related */
function card(p){
  const c=COLORS[p.color];
  return `<a class="pcard" href="product.html?id=${p.id}">
   <div class="pimg"><img src="${p.img}" alt="${p.name} bump cap" loading="lazy"><span class="pbadge">EN 812</span>${p.feat.includes("reflective")?`<span class="pbadge r">${T("Reflective","Reflektif")}</span>`:""}</div>
   <div class="pbody"><small>${p.brand}®</small><b>${p.name}</b><p>${T(p.en,p.tr)}</p>
   <div class="pmeta"><span class="dot" style="background:${c[2]}" title="${T(c[0],c[1])}"></span><span>${T(c[0],c[1])}</span><span class="sep"></span><span>3 / 5 / 8 cm</span></div>
   <div class="pact"><span class="link">${T("Details","İncele")} →</span><span class="qbtn" data-q="${p.name}">${T("Quote","Teklif")}</span></div></div></a>`;
}
