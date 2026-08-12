# かどのめし屋 海鮮食堂 足立市場店

足立市場内にある1店舗専用の、HTML / CSS / JavaScriptだけで動く静的Webサイトです。サーバーやAPIキーは不要です。

> 公開前に、営業時間・定休日・メニュー内容・住所などを店舗へ確認してください。このサイトでは、外部サイトやSNSのURLを推測して掲載していません。

## 1. サイトの構成

```
.
├── index.html          # ページの構造、SEO・OGPの基本設定
├── style.css           # デザイン、スマホ対応
├── photos.css          # 実写写真ギャラリーと拡大表示のスタイル
├── script.js           # ★ 店舗情報・メニュー・地図URLをまとめたファイル
├── images/
│   ├── hero-seafood.svg    # ヒーロー用の差し替え可能なイメージ
│   ├── market-table.svg    # 店舗紹介用の差し替え可能なイメージ
│   └── favicon.svg         # ブラウザタブのアイコン
│   └── photos/              # ★ ご提供いただいた店舗・料理写真
├── vercel.json         # Vercelで使う設定
└── README.md           # この手順書
```

ブラウザで `index.html` を開けば表示を確認できます。より本番に近い確認をする場合は、ターミナルでこのフォルダを開いて次を実行し、`http://localhost:8000` をブラウザで開きます。

```bash
python3 -m http.server 8000
```

終了するにはターミナルで `Ctrl + C` を押します。

## 2. 店舗情報の変更方法

`script.js` の先頭にある `storeData` を編集します。住所・電話番号・営業時間・定休日・予算などはここだけを変えると、ページ内の表示に反映されます。

```js
const storeData = {
  address: "〒120-0038 東京都足立区千住橋戸町50 足立市場内",
  hours: "月・火・木・金：7:00〜13:00\n土曜日：7:00〜14:00",
  closed: "水曜日・日曜日・祝日",
  budget: "1,000〜2,000円程度"
};
```

メニューは `menu` の各行が1品です。価格を載せる場合は、名前に `（1,200円）` のように追記できます。価格や提供内容は変わることがあるため、更新後にもページの注意書きを残すことをおすすめします。

## 3. 画像の差し替え方法

`images/photos/` には、ご提供いただいた店舗外観・料理写真を配置済みです。トップには店舗外観、ギャラリーには料理写真を使っています。実際の料理・店内写真を追加・差し替えると、より店舗の魅力が伝わります。

1. 使用許可を得た写真を、例として `images/hero.jpg` と `images/about.jpg` の名前で保存します。横長、幅1600px以上の写真がおすすめです。
2. トップ写真は `index.html` の `images/photos/storefront.png` を `images/photos/hero.jpg` に変更します。
3. ギャラリー写真は `script.js` の `photos` に追加・変更します。
4. 写真の内容が分かるよう、`alt` 相当の説明文も「店内の様子」「海鮮丼」などに変更します。

人物が写る写真や、外部から提供された画像は、公開許可と利用条件を確認してから使ってください。

## 4. Google Mapsの設定方法

Google Mapsで対象地点を表示し、「共有」から「地図を埋め込む」を選んで埋め込み用URLを取得します。`script.js` の `mapEmbedUrl` に、そのURLだけを貼り付けます。

```js
mapEmbedUrl: "https://www.google.com/maps/embed?pb=...",
```

クリックしてGoogle Mapsを開くためのURLもある場合は、`mapUrl` に設定します。

```js
mapUrl: "https://maps.google.com/?q=...",
```

空のままの場合は、地図を設定する場所が分かるプレースホルダーを表示します。Google Mapsの利用条件・表示要件は、設定前にGoogleの最新案内をご確認ください。

## 5. GitHubへのアップロード方法

1. GitHubで **New repository** を選び、空のリポジトリを作成します（例: `kadono-meshiya`）。
2. ターミナルでこのフォルダを開き、GitHubで表示されたリポジトリURLに置き換えて実行します。

```bash
git init
git add .
git commit -m "Initial site"
git branch -M main
git remote add origin https://github.com/ユーザー名/kadono-meshiya.git
git push -u origin main
```

以後の更新は、ファイルを保存してから次の3行を実行します。

```bash
git add .
git commit -m "店舗情報を更新"
git push
```

## 6. Vercelなどへのデプロイ方法

Vercelの場合は、[Vercel](https://vercel.com/) にGitHubでログインし、**Add New → Project** から作成したリポジトリをImportします。これは静的サイトなので、Framework Presetは **Other** のまま、Build CommandとOutput Directoryは空欄で構いません。**Deploy** を押すと公開URLが発行されます。

GitHubへ `push` するたびに、Vercelは通常自動で公開内容を更新します。公開URLは必ずPCとスマートフォンの両方で確認してください。

## 7. 独自ドメインを設定する場合

1. Vercelプロジェクトの **Settings → Domains** で取得済みのドメインを追加します。
2. 画面に表示されたAレコードまたはCNAMEレコードを、ドメインを購入したサービスのDNS設定に追加します。
3. Vercelで `Valid Configuration` と表示されれば設定完了です。HTTPSは通常自動設定されます。

DNSの反映には数分から最大48時間ほどかかることがあります。メールを使っているドメインでは、既存のメール用DNSレコードを削除しないよう注意してください。

## 公開前チェック

- 店舗に営業時間・定休日・メニューの最新情報を確認した
- 写真の掲載許可を得た
- `index.html` のOGP画像URLを、公開後の絶対URLへ変更した
- Google Maps URLを設定した（利用する場合）
- スマートフォン表示と電話リンクを確認した
