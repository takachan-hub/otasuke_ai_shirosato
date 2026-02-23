# お助けAI城里センター Webページ（2026-02-23更新版）

このフォルダは、`https://otasuke-ai-shirosato.com/` 向けの静的サイト一式です。
GitHub Pages または通常の静的ホスティングにそのまま上書きアップロードできます。

## 更新内容（2026年2月23日）

- デザインを全面刷新（スマホ/PC対応、視認性改善、導線整理）
- テキストを全面見直し（サービス説明、問い合わせ導線、FAQ）
- `AIキャラクター` を主ビジュアルとして活用
- 構造化データ（`LocalBusiness` / `FAQPage`）を整理
- `robots.txt` / `sitemap.xml` をシンプルな運用形に更新
- JavaScriptを整理（モバイルメニュー、スクロール表示、テンプレートコピー）

## ファイル構成

- `index.html` : ページ本体（SEOメタ、構造化データ含む）
- `styles.css` : デザイン全体
- `script.js` : UI動作（メニュー、コピー、アニメーション）
- `robots.txt` : クローラ向け設定
- `sitemap.xml` : サイトマップ
- `ai-character.png` : メインキャラクター画像
- `assets/hero-tree.jpg` : ヒーロー補助画像
- `assets/line-qr.png` : LINE QRコード
- `assets/representative.png` : 代表写真

## GitHubへ上書きする手順

### 1. 既存リポジトリに反映

以下を上書きしてください。

- `index.html`
- `styles.css`
- `script.js`
- `robots.txt`
- `sitemap.xml`
- （画像が未配置なら）`ai-character.png`, `assets/*`

### 2. コミット例

```bash
git add index.html styles.css script.js robots.txt sitemap.xml ai-character.png assets/
git commit -m "サイト全面リニューアル（デザイン・文面・導線改善）"
git push origin main
```

## 公開後の確認チェック

- トップページ表示（PC / スマホ）
- LINE・電話・メールリンクの動作
- SNSリンク遷移
- `robots.txt` の表示確認
- `sitemap.xml` の表示確認
- 画像パス崩れがないか

## メモ（運用）

- 料金や連絡先を変更した場合は、`index.html` の表記を優先して更新
- サイト構成を増やした場合は `sitemap.xml` にURLを追加
- 公開URLを変更した場合は `canonical`, `og:url`, `sitemap.xml`, `robots.txt` を合わせて更新
