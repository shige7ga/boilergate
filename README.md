# ボイラーゲイト（BoilerGate）

2級ボイラー技士の資格取得を目指す初学者向けの学習アプリです。
プログラミング学習サービス「Progate」を参考に、スライドで学び、問題を解きながら段階的に理解を深められる体験を目指します。

## 学習の流れ（実装予定）

1. **スライドで学ぶ**：図や身近な例を使い、専門用語やボイラーの仕組みを初学者にも分かりやすく解説します。
2. **練習問題で復習する**：学んだスライドの内容に対応する問題を解き、解説で理解を深めます。
3. **確認テストで定着を確かめる**：複数の学習項目をまとめたセクションごとにテストを行い、理解度を確認します。
4. **模擬試験で本番に備える**：本試験と同じ出題形式・問題数・試験時間・合格基準に沿った模擬試験で、試験対策を行います。

基礎学習から試験対策まで、自分のペースで繰り返し取り組める構成にします。
現在は開発環境を用意した段階で、画面はViteの初期状態です。上記の学習機能は未実装です。

## 技術構成

- React / TypeScript / Vite
- Node.js 24系 / npm / ESLint
- Docker / Docker Compose
- SPAとして実装し、保存が必要なデータにはLocalStorageを使用する予定です。
- バックエンド・DB・AI APIは使用しません。

## ディレクトリ構成

```text
src/                アプリの画面・スタイル
public/             静的ファイル
Dockerfile.dev      開発用コンテナ（Node.js 24系）
docker-compose.yml  ポート公開・ソースのマウント設定
vite.config.ts      Viteの設定
```

## ローカルでの起動

DockerとDocker Composeが利用できる環境で、プロジェクトのルートディレクトリから実行します。ホスト側へのNode.jsのインストールは不要です。

```bash
# 初回起動（イメージをビルドしてバックグラウンドで起動）
docker compose up --build -d

# 起動状態の確認
docker compose ps

# ログの確認（Ctrl+Cでログ表示を終了）
docker compose logs -f app
```

ブラウザで http://localhost:5173 にアクセスします。ソースの変更は開発サーバーに自動反映されます。

```bash
# 停止・コンテナ削除
docker compose down

# 次回の起動
docker compose up -d
```

## 開発用コマンド

コンテナの起動中に実行します。

```bash
# Lint
docker compose exec app npm run lint

# TypeScriptのチェックと本番用ビルド（dist/に出力）
docker compose exec app npm run build

# package.json・package-lock.json変更後の依存関係の同期
docker compose exec app npm ci
```

依存関係の同期後は、`docker compose restart app`で開発サーバーを再起動してください。
