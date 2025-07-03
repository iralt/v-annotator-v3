# GitHub公開準備ガイド

このリポジトリをGitHub公開リポジトリとして公開するための手順書です。

## セキュリティ確認 ✅

このリポジトリは安全に公開できる状態です：

- ✅ 機密情報（パスワード、APIキー、秘密鍵など）は含まれていません
- ✅ 全ての依存関係は信頼できる公開ライブラリです
- ✅ MITライセンスでオープンソース公開に適しています
- ✅ 悪意のあるコードは含まれていません

## 公開前の準備作業

### 1. GitHubリポジトリの作成

1. GitHubで新しいパブリックリポジトリを作成
2. リポジトリ名: `v-annotator-v3`（推奨）
3. 作成後、以下の手順でURLを更新

### 2. package.json のリポジトリURL更新

```bash
# package.json の以下の行を実際のリポジトリURLに変更
"url": "git+https://github.com/your-username/v-annotator-v3.git"

# 例：ユーザー名が "example-user" の場合
"url": "git+https://github.com/example-user/v-annotator-v3.git"
```

### 3. 初回プッシュ

```bash
# リモートリポジトリを追加
git remote add origin https://github.com/your-username/v-annotator-v3.git

# 初回プッシュ
git branch -M main
git push -u origin main
```

## .gitignore で除外されるファイル

以下のファイル・ディレクトリは公開されません：

- `node_modules/` - 依存関係
- `lib/`, `types/` - ビルド成果物
- `.env*` - 環境変数ファイル
- `.claude/` - Claude Code設定
- `s/` - 開発用スクリプト
- `.DS_Store` - macOSシステムファイル

## npm パッケージ公開（オプション）

パッケージ名 `v-annotator-v3` は利用可能です。npm公開する場合：

```bash
# ビルド
yarn build

# npmアカウントでログイン
npm login

# パッケージ公開
npm publish
```

## 推奨されるGitHub設定

リポジトリ公開後に設定することを推奨：

### セキュリティ設定
- **Settings > Security**
  - Dependabot alerts: 有効
  - Dependabot security updates: 有効
  - Code scanning: 有効（GitHub Advanced Security）

### ブランチ保護
- **Settings > Branches**
  - `main` ブランチの保護ルール設定
  - Pull request required before merging

### GitHub Pages（デモページ）
- **Settings > Pages**
  - Source: GitHub Actions
  - `yarn build:demo` でビルドしたデモページの公開

## ライセンス

このプロジェクトはMITライセンスの下で公開されます。
商用・非商用問わず自由に使用・改変・配布可能です。

## サポート

- Issues: GitHubのIssuesでバグ報告・機能要請
- Documentation: `/docs/` ディレクトリ内の完全なAPIリファレンス
- Demo: デモアプリケーションで実際の使用例を確認

## 公開後の推奨作業

1. **README.mdの更新**: 実際のリポジトリURLでリンクを更新
2. **GitHubトピックの設定**: `vue`, `vuetify`, `annotation`, `typescript`
3. **リリースタグの作成**: `v0.1.0` での初回リリース
4. **コントリビューションガイドの作成**: `CONTRIBUTING.md`

---

このガイドに従って公開すれば、セキュリティリスクなしでプロフェッショナルなオープンソースライブラリとして公開できます。