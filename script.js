/*
 * 店舗情報・メニューは、このファイル上部の storeData を編集すると更新できます。
 * 外部URLは確認できたものだけを設定してください。Google Maps は mapEmbedUrl または mapUrl を使います。
 */
const storeData = {
  name: "かどのめし屋 海鮮食堂 足立市場店",
  address: "〒120-0038 東京都足立区千住橋戸町50 足立市場内",
  phone: "03-3882-5811",
  phoneLink: "tel:0338825811",
  access: "京成線「千住大橋駅」から徒歩約5分",
  genre: "食堂・弁当・海鮮",
  hours: "月・火・木・金：7:00〜13:00\n土曜日：7:00〜14:00（L.O. 13:30前後）",
  closed: "水曜日・日曜日・祝日（休市日）",
  budget: "1,000〜2,000円程度",
  reservation: "予約可",
  seats: "19席（カウンター5席・テーブル14席）",
  payment: "カード不可／電子マネー不可／QRコード決済可（PayPay）",
  smoking: "全席禁煙（市場内に喫煙所あり）",
  parking: "駐車場なし（近隣にコインパーキングあり）",
  services: "テイクアウト可／お弁当・オードブルはご相談ください",
  children: "お子様連れ可／ベビーカー入店可",
  socials: [
    ["Instagram", "https://www.instagram.com/kado_no_meshiya"],
    ["Facebook", "https://www.facebook.com/kadomeshi.senju/"]
  ],
  marketNote: "定休日は原則として市場の営業日に準じます。あだち市場の日は限定メニューでの営業となり、混雑する場合があります。最新情報は「東京都中央卸売市場 足立市場」および店舗へご確認ください。",
  mapUrl: "https://www.google.com/maps/search/?api=1&query=%E6%9D%B1%E4%BA%AC%E9%83%BD%E8%B6%B3%E7%AB%8B%E5%8C%BA%E5%8D%83%E4%BD%8F%E6%A9%8B%E6%88%B8%E7%94%BA50%20%E8%B6%B3%E7%AB%8B%E5%B8%82%E5%A0%B4",
  mapEmbedUrl: "https://www.google.com/maps?q=%E6%9D%B1%E4%BA%AC%E9%83%BD%E8%B6%B3%E7%AB%8B%E5%8C%BA%E5%8D%83%E4%BD%8F%E6%A9%8B%E6%88%B8%E7%94%BA50%20%E8%B6%B3%E7%AB%8B%E5%B8%82%E5%A0%B4&output=embed",
  menu: [
    ["丼・ラーメン", "ミニまぐろ丼・八戸ラーメンセット"],
    ["丼・ラーメン", "ミニネギトロ丼・八戸ラーメンセット"],
    ["丼・ラーメン", "かき揚げ丼・八戸ラーメンセット"],
    ["海鮮丼", "鉄火丼"],
    ["定食", "天ぷら刺身定食"],
    ["土曜日限定", "やっちゃば御膳"]
  ],
  photos: [
    ["images/photos/hachinohe-ramen-1.png", "八戸ラーメン"],
    ["images/photos/tuna-bowl-1.png", "まぐろを使った海鮮丼"],
    ["images/photos/grilled-fish-set.png", "焼き魚の定食"],
    ["images/photos/hachinohe-ramen-2.png", "八戸ラーメンと海鮮丼"],
    ["images/photos/hachinohe-ramen-noodles.png", "八戸ラーメンの麺"],
    ["images/photos/sashimi-tempura-set.png", "刺身と天ぷらの定食"],
    ["images/photos/sashimi.png", "刺身の盛り合わせ"],
    ["images/photos/tuna-bowl-2.png", "ネギトロ丼"],
    ["images/photos/hachinohe-ramen-3.png", "八戸ラーメン"],
    ["images/photos/hachinohe-ramen-4.png", "八戸ラーメン"]
  ]
};

const nl2br = (text) => text.replace(/\n/g, "<br>");
const menuGrid = document.querySelector("#menuGrid");
menuGrid.innerHTML = storeData.menu.map(([category, name]) => `<article class="menu-card"><span class="menu-category">${category}</span><h3>${name}</h3></article>`).join("");

const photoGrid = document.querySelector("#photoGrid");
photoGrid.innerHTML = storeData.photos.map(([src, alt]) => `<button class="photo-card" type="button"><img src="${src}" alt="${alt}" loading="lazy" /></button>`).join("");
const lightbox = document.querySelector("#lightbox");
const lightboxImage = document.querySelector("#lightboxImage");
photoGrid.addEventListener("click", (event) => {
  const image = event.target.closest(".photo-card")?.querySelector("img");
  if (!image) return;
  lightboxImage.src = image.currentSrc || image.src;
  lightboxImage.alt = image.alt;
  lightbox.showModal();
});
lightbox.querySelector(".lightbox-close").addEventListener("click", () => lightbox.close());
lightbox.addEventListener("click", event => { if (event.target === lightbox) lightbox.close(); });

const infoItems = [["所在地", storeData.address], ["電話番号", `<a href="${storeData.phoneLink}">${storeData.phone}</a>`], ["営業時間", nl2br(storeData.hours)], ["定休日", storeData.closed], ["アクセス", storeData.access], ["ご予算", storeData.budget]];
document.querySelector("#infoGrid").innerHTML = infoItems.map(([label, value]) => `<dl class="info-card"><dt>${label}</dt><dd>${value}</dd></dl>`).join("");
const usageItems = [["ジャンル", storeData.genre], ["ご予約", storeData.reservation], ["お席", storeData.seats], ["お支払い", storeData.payment], ["店内環境", storeData.smoking], ["駐車場", storeData.parking], ["サービス", storeData.services], ["お子様連れ", storeData.children]];
document.querySelector("#usageGrid").innerHTML = usageItems.map(([label, value]) => `<article class="usage-card"><h4>${label}</h4><p>${value}</p></article>`).join("");
document.querySelector("#marketNote").textContent = storeData.marketNote;
document.querySelector("#socialLinks").innerHTML = storeData.socials.map(([label, url]) => `<a href="${url}" target="_blank" rel="noopener noreferrer">公式 ${label}<span aria-hidden="true">↗</span></a>`).join("");
document.querySelector("#heroFacts").innerHTML = [["LOCATION", "足立市場内"], ["ACCESS", "千住大橋駅 徒歩約5分"], ["OPEN", "朝7時から営業"]].map(([label, value]) => `<div class="fact"><span>${label}</span>${value}</div>`).join("");
document.querySelector("#year").textContent = new Date().getFullYear();

if (storeData.mapEmbedUrl) {
  document.querySelector("#map-area").innerHTML = `<iframe title="${storeData.name}の地図" src="${storeData.mapEmbedUrl}" loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowfullscreen></iframe>`;
}
if (storeData.mapUrl) document.querySelector("#mapLink").href = storeData.mapUrl;

const menuButton = document.querySelector(".menu-button");
const nav = document.querySelector("#site-nav");
menuButton.addEventListener("click", () => { const open = nav.classList.toggle("is-open"); menuButton.setAttribute("aria-expanded", open); });
nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => { nav.classList.remove("is-open"); menuButton.setAttribute("aria-expanded", "false"); }));
const reveal = document.querySelector(".reveal");
if (reveal && "IntersectionObserver" in window) new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add("is-visible"); } }), { threshold: .15 }).observe(reveal); else if (reveal) reveal.classList.add("is-visible");
