# お助けAI城里センター Webサイト（GitHub Pages用）

このフォルダをそのまま GitHub にアップロードすると、静的サイトとして表示できます。

## ファイル構成
- `index.html` : 本文（1ページ完結）
- `styles.css` : デザイン（スマホ自動対応）
- `script.js` : メニュー開閉 / お問い合わせテンプレのコピー機能

## GitHub Pages で公開する手順（最短）
1. GitHubで新規リポジトリを作成（例：`otasuke-ai-shirosato`）
2. この3ファイルをリポジトリ直下へアップロード
3. GitHub の **Settings → Pages**
4. **Build and deployment** の Source を `Deploy from a branch` に
5. Branch を `main` / folder を `/ (root)` にして Save
6. 表示されたURLにアクセス

## 写真について
ページ内の写真は Unsplash のフリー画像を埋め込み表示しています。
（自前の写真に差し替えたい場合は、`index.html` の `<img src="...">` を変更してください）
