# SEO改善実装ガイド

このフォルダには、お助けAI城里センターのウェブサイトのSEO最適化版ファイルが含まれています。

## 実装された主な改善点

### 1. **メタタグの最適化**
- タイトルタグ: 検索キーワードを含めた最適化
- メタディスクリプション: 詳細な説明文を追加
- キーワードメタタグ: 主要検索キーワードを設定
- Open Graphタグ: SNSシェア時の表示最適化
- Twitter Cardタグ: Twitter表示の最適化
- Canonical URL: 重複コンテンツ対策

### 2. **構造化データ（JSON-LD）の実装**
以下の3種類の構造化データを追加:
- **LocalBusiness**: Googleマップ・ローカル検索での表示向上
- **FAQPage**: FAQ項目をリッチリザルトで表示
- **Service**: サービス内容を構造化データで提供

### 3. **H1タグとコンテンツの最適化**
- H1タグに主要キーワード「城里町」「訪問型」「AIサポート」を含む
- 地域名（茨城県城里町）を本文中に追加
- 画像のalt属性を最適化

### 4. **アクセシビリティの向上**
- aria-label属性の追加
- role属性の追加
- FAQにschema.orgマークアップを追加
- 外部リンクにrel="noopener"を追加

## ファイル一覧

```
seo-optimized/
├── index.html          # SEO最適化版HTMLファイル
├── styles.css          # CSSファイル（変更なし）
├── script.js           # JavaScriptファイル（変更なし）
├── robots.txt          # 検索エンジン向け指示ファイル
├── sitemap.xml         # サイトマップ
└── README.md           # このファイル
```

## GitHubへのアップロード手順

### 方法1: GitHub Webインターフェース経由

1. GitHubリポジトリにアクセス
2. 既存のファイル（index.html, styles.css, script.js）をそれぞれ選択
3. 編集ボタンをクリック
4. このフォルダ内の対応するファイルの内容をコピー&ペースト
5. コミットメッセージを入力（例: "SEO最適化を実装"）
6. "Commit changes"をクリック

### 方法2: Git CLIを使用

```bash
# リポジトリをクローン
git clone https://github.com/yourusername/your-repo.git
cd your-repo

# このフォルダのファイルをコピー
cp /path/to/seo-optimized/index.html ./
cp /path/to/seo-optimized/styles.css ./
cp /path/to/seo-optimized/script.js ./
cp /path/to/seo-optimized/robots.txt ./
cp /path/to/seo-optimized/sitemap.xml ./

# 変更をコミット
git add .
git commit -m "SEO最適化を実装: メタタグ、構造化データ、アクセシビリティ向上"
git push origin main
```

## 追加で必要な作業

### 1. Googleビジネスプロフィールの最適化
- 定期的な投稿（週1回程度）
- 写真の追加（サービス風景、スタッフ写真など）
- 口コミへの返信

### 2. Google Search Consoleの設定
1. https://search.google.com/search-console にアクセス
2. サイトを追加
3. sitemap.xmlを送信: https://otasuke-ai-shirosato.com/sitemap.xml
4. インデックス状況を確認

### 3. Googleアナリティクスの設定（任意）
訪問者数やユーザー行動を追跡する場合は設定を推奨

### 4. ページ速度の最適化
- 画像の圧縮（TinyPNG等を使用）
- 画像を次世代フォーマット（WebP）に変換
- 遅延読み込み（lazy loading）の実装

### 5. コンテンツの追加
以下のページを追加することで更なるSEO効果が期待できます:

- **ブログページ**: `/blog/index.html`
  - 「城里町でのパソコン活用術」
  - 「補助金申請のポイント」
  - 「スマホ初心者向けガイド」

- **サービス詳細ページ**: 
  - `/services/pc-support.html`（パソコンサポート）
  - `/services/document-creation.html`（書類作成）
  - `/services/subsidy-support.html`（補助金申請）

- **事例紹介ページ**: `/case-studies/`
  - お客様の声（プライバシーに配慮）

## 優先度の高い次のステップ

### 🔥 すぐに実施すべきこと（1週間以内）
1. ✅ GitHubに最適化版ファイルをアップロード
2. ✅ robots.txtとsitemap.xmlを追加
3. ✅ Google Search Consoleでサイトマップを送信
4. ✅ Googleビジネスプロフィールに最新情報を投稿

### ⭐ 1ヶ月以内に実施すべきこと
1. ブログを開始（月2-4記事）
2. 画像の最適化（圧縮・WebP化）
3. ローカル情報サイトへの登録
4. 口コミの収集開始

### 📈 継続的に実施すること
1. 月1回のブログ更新
2. Googleビジネスプロフィールの投稿（週1回）
3. Google Search Consoleでの検索パフォーマンス確認
4. 競合サイトの分析

## 測定すべき指標（KPI）

- **Google Search Console**:
  - 検索表示回数
  - クリック数
  - 平均掲載順位
  - CTR（クリック率）

- **Googleビジネスプロフィール**:
  - 検索数
  - マップでの表示回数
  - ウェブサイトへのアクセス数
  - 電話での問い合わせ数

## 期待される効果

### 短期（1-2ヶ月）
- Google検索での「城里町 パソコン サポート」での表示順位向上
- Googleマップでの表示改善
- リッチリザルト（FAQ、評価など）の表示開始

### 中期（3-6ヶ月）
- オーガニック検索流入の増加（20-30%）
- 問い合わせ数の増加
- 周辺地域（水戸市など）からの検索流入

### 長期（6ヶ月以上）
- 茨城県内での認知度向上
- 「訪問型 デジタルサポート」などのキーワードでの上位表示
- ブランド名での検索増加

## サポート

質問や追加の最適化が必要な場合は、お気軽にお問い合わせください。

---
作成日: 2025年2月15日
