# お助けAI城里センター 公式サイト

`https://www.otasuke-ai-shirosato.com/`（正式URLは www あり）の静的な1ページサイトです。
ビルド工程はなく、このフォルダのファイルをそのまま配信しています。

## 公開・デプロイ

- Cloudflare Pages（プロジェクト `otasuke-ai-shirosato`）で公開しています。
- **main へ push すると Cloudflare Pages が自動で本番デプロイします。main への push は本番反映の操作です。**
- main への反映は、本人から「本番反映OK」等の明示的な指示があるときだけ行います。「修正して」「直して」等の依頼だけでは反映しません。
- main 以外のブランチを push すると、本番とは別のプレビュー（`https://<ブランチ名>.otasuke-ai-shirosato.pages.dev/`・noindex 付き）が作られます。修正はこのプレビューで確認してから本番へ反映します。
- 作業中の表示確認はローカルでもできます（例：このフォルダで `python3 -m http.server 8765` → `http://127.0.0.1:8765/`）。プレビューとローカルでは GA4 は計測されません。

## ページ構成（上から）

1. ファーストビュー（H1「ホームページを、もっと気軽に。」・HP制作の料金・羊二の実画面・LINE相談）
2. 共感（`#worries`）
3. できること（`#solutions`：HP制作・業務アプリ・AI伴走支援の入口）
4. 制作実績（`#works`）
5. ホームページ制作の料金（`#homepage` / `#pricing` / `#flow`）
6. AI・業務アプリ（`#services` / `#service-app` / `#service-ai`）
7. 選ばれる理由（`#strength`）
8. FAQ（`#faq`）
9. お問い合わせ（`#contact`）

料金・契約条件の詳細はページ内の折りたたみ（`<details>`）に置き、表側は要点だけにしています。
ページ内リンクで折りたたみの中へ移動したときは `script.js` が自動で開きます。

## デザイン

| 用途 | 色 |
|---|---|
| 背景（アイボリー） | `#FAF8F2` |
| メイン（城里グリーン） | `#39705A` |
| アクセント（オレンジ。装飾・バッジ用で、白文字は載せない） | `#E98232` |
| 料金の大きな数字（濃いオレンジ） | `#C8651A` |
| 本文 | `#333633` |
| 小さい注記・補足文（アイボリー系の背景でも 4.5:1 以上） | `#676C68` |
| カード | `#FFFFFF` |

色は `styles.css` 冒頭の `:root` で変数として管理しています。

## ファイル構成

- `index.html`：ページ本体（meta / OGP / 構造化データ / GA4タグを含む）
- `styles.css`：デザイン全体
- `script.js`：メニュー、表示アニメーション、折りたたみの自動展開、送信テンプレートのコピー、GA4クリック計測
- `robots.txt` / `sitemap.xml`：クローラ向け設定
- `google030902e84e6ce9b2.html`：Google Search Console の所有権確認用（削除しない）
- `favicon.png` / `apple-touch-icon.png`：ブラウザ・iPhone用アイコン
- `ai-character.png`：**OGP・Twitterカード・LocalBusiness JSON-LD 用**（ページには表示しない）
- `assets/ai-character-160.png`：**ページ表示用**のキャラクター（ヘッダーのロゴ・共感セクション）
- `assets/line-qr.png`：LINE友だち追加のQRコード
- `assets/people/`：人物素材（背景透過）
  - `woman-thinking-640.webp`（共感セクション）・`woman-guiding-640.webp`（料金セクション）が通常表示用
  - 同名の `.png` は WebP 非対応ブラウザ用の予備（`<picture>` の `<img src>`。削除しない）
- `assets/works/`：制作実績「羊二」の画面素材（ファーストビューと制作実績で使用）
  - `yoji.jpg`：PC表示の画面
  - `yoji-sp.jpg`：スマートフォン表示の画面

「できること」のホームページ制作の図は、画像ではなく HTML/CSS の図形で描いています。

## FAQ と構造化データ

- 表示しているFAQは13問です。先頭4問を表示し、残りは「ほかの質問を見る」に入れています。
- **画面のFAQと `FAQPage` JSON-LD は、質問・回答の文言と順番を完全に一致させます。** どちらかを変えたら必ず両方を直します。
- 料金・契約条件は契約書（ホームページ制作・業務アプリ制作・AI導入伴走支援の各契約と別紙）と連動しています。本文・FAQ・JSON-LD・meta description の料金表記を一部だけ変えないようにします。

## GA4（クリック計測）

- 測定ID：`G-DC58WV2H6W`
- 計測は正式URL（`www.otasuke-ai-shirosato.com`）で開いたときだけです。`index.html` 冒頭のタグが `location.hostname` を `PRODUCTION_HOSTNAME` と完全一致で判定し、Cloudflare Pages のプレビュー・`otasuke-ai-shirosato.pages.dev`・ローカル確認では GA4 を読み込みません。
- `script.js` が、電話・LINE・Googleマップ・Instagram へのリンクのクリックを `tel_click` / `line_click` / `map_click` / `instagram_click` として送信します。
- 押された場所は各リンクの `data-ga-location` を `link_location` として送ります（このサイトでは `hero` / `footer`）。対象リンクを追加・変更したら属性を付け忘れないようにします。
- 現在の対象は5件（LINE 3・電話 1・Instagram 1）です。地図リンクはないため `map_click` の対象は0件です。
- 仕様の正本は月次Webレポートの `docs/GA4_SETUP.md` 6章です。リンクを変えたら月次Webレポートのリポジトリで確認します：
  - `npm run hp:links -- <index.html または 正式URL>`（`data-ga-location` の漏れがあると終了コード1）
  - `npm run ga4:realtime -- 555948320`（本番でボタンを押した直後の受信確認）
  - `npm run ga4:check -- 555948320 YYYY-MM`（標準レポートに反映後の確認）
- GA4 の管理画面で、`link_location` をイベントスコープのカスタムディメンション（名前「リンクの場所」）として登録しておきます（未登録だと月次Webレポートで押された場所の内訳が出ません）。

## 変更から公開までの手順

詳しい手順・確認項目・後片付けの正本は、業務標準「格安ホームページ制作標準／修正・本番反映手順.md」（Google Drive）です。ここには要点だけを書きます。

1. main と origin/main が一致し、未コミットの変更がないことを確認して、main から作業ブランチを作る
2. 作業ブランチで変更し、PC（1280px）とスマートフォン（390px・340px）で表示を確認する
3. 公開するファイルだけを確認しながら stage し（`git add -A` や `git add .` でまとめて追加しない）、`git diff --cached` で意図した変更だけであることを確かめて commit する
4. 作業ブランチを push し（`git push origin <ブランチ名>:<ブランチ名>`）、プレビューで表示・リンク・GA4 が送信されないことを確認して報告する
5. 「本番反映OK」の指示を受けてから、確認済みのコミットだけを main へ早送りで反映して push する（＝本番公開）
6. 本番URLで表示・リンク・GA4 の実受信を確認し、作業ブランチを削除する。残ったプレビューは Cloudflare のダッシュボードで削除する

## 運用メモ

- ページやURLを増やした場合は `sitemap.xml` にURLを追加し、更新時は `<lastmod>` を直す
- 公開URLを変更した場合は `canonical`・`og:url`・JSON-LD の `url`・`sitemap.xml`・`robots.txt` を合わせて直す（GA4タグの `PRODUCTION_HOSTNAME` も新しいホスト名に直す）
- 制作実績を追加するときは `index.html` の `article.work-feature` を1件分複製し、画像は `assets/works/` に置く
