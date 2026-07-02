# react-output-crud-auth-api-features-featrues

## 技術構成

### フロントエンド

- typescript: 5.7.2
- react: 19.0.0
- react-dom: 19.0.0
- react-route: 7.1.5
- react-hook-form: 7.54.2
- zod: 3.24.2
- @hookform/resolvers: 4.0.0
- axios: 1.7.9
- @fortawesome/react-fontawesom: 0.2.0
- @fortawesome/free-solid-svg-icons: 6.2.0

### バックエンド

- go: 1.23.5
- gorm: 1.25.12
- gorilla/mux: 1.8.1
- gorilla/handlers: 1.5.2

### その他

- docker
- postgres: 17.2

## 仕様

- 認証機能

  - ログイン
  - 会員登録
  - ログアウト

- Todo リスト
  - 一覧表示
  - 検索処理
  - 新規登録処理
  - 詳細表示
  - 編集処理
  - 削除処理

## 環境構築

※docker を使用しているので PC に入っていない場合はインストールをお願いします。

https://matsuand.github.io/docs.docker.jp.onthefly/desktop/mac/install/

### 1. docker image を作成

- .env.sample をコピーして.env を作成

```
touch .env
```

- jwt secret key を作成して環境変数に適用

```
# jwt secret keyの生成コマンド
openssl rand -base64 32


.envのJWT_SECRETに記載
JWT_SECRET=xxxx

```

- docker build を実行

```
docker-compose build
```

### 2. コンテナを起動

```
// バックエンド、DBのコンテナを起動する
docker-compose up -d
```

### 3. マイグレーション、シーディング (テーブル、データ作成)

- backend/.env.local.sample をコピーして、backend/.env.local を作成

```
touch backend/.env.local
```

- migration 実行

```
cd backend
make migrate
```

- データ作成(seeding)

```
make seed
```

### 4. ブラウザに表示

- frontend/.env.sample をコピーして、frontend/.env を作成

```
touch frontend/.env
```

- フロントエンドのアプリを起動

```
cd frontend

npm run dev

url: http://localhost:5173
```

- 以下を入力してログイン

```

email: user1@test.com
password: password
```

<br >

## 補足

### DB 関連の情報

- 以下の情報を元に「sequel ace」などを用いて DB コンテナにアクセスすれば、DB のデータの状態を確認できる

```
DBMS: Postgres
host: 127.0.0.1
database: REACT_OUTPUT_CRUD_AUTH_API_FEATURES_DB
user: user
password: pass
port: 5432
```

- DBeaver について
- https://zenn.dev/aiq_dev/articles/2629b53f1298bc

### DB のデータを初期化したい場合

```
cd backend
make rollback
```

### コンテナのログを確認したい場合

バックエンド、DB コンテナのログを確認する方法

#### 1. コンテナ ID を確認

コンテナを起動している状態で、以下のコマンドでコンテナ ID(CONTAINER ID)を確認する。

```
docker ps
```

各イメージに対応する コンテナ ID を確認

- バックエンド: react-output-crud-auth-api-features-backend
- DB: postgres:17.2

以下のコマンドで各コンテナのログを確認

```
docker logs -f [コンテナID]
```

### Postman で API の動作確認をしたい場合

#### 1. ログイン(トークン取得)

- Method: POST
- URL: http://localhost:4000/api/v1/auth/login
- Headers: Content-Type: application/json
- Body (raw / JSON):

```
{
  "email": "user1@test.com",
  "password": "password"
}
```

- 200 が返り、レスポンスの token をコピーする

#### 2. 認証が必要な API(例: Todo 一覧)

- Method: GET
- URL: http://localhost:4000/api/v1/todos
- Headers: Authorization: Bearer \<上でコピーした token\>

#### その他のエンドポイント

| Method | Path                         | Body                     | 認証 |
| ------ | ---------------------------- | ------------------------ | ---- |
| POST   | /api/v1/auth/signup         | {name, email, password} | 不要 |
| POST   | /api/v1/auth/login          | {email, password}       | 不要 |
| GET    | /api/v1/auth/authentication | なし                     | 必要 |
| GET    | /api/v1/todos               | なし                     | 必要 |
| GET    | /api/v1/todos/{id}          | なし                     | 必要 |
| POST   | /api/v1/todos               | {title, content}        | 必要 |
| PUT    | /api/v1/todos/{id}          | {title, content}        | 必要 |
| DELETE | /api/v1/todos/{id}          | なし                     | 必要 |

Postman では、まずログインのリクエストを 1 つ作り、Tests タブに以下を書いておくとトークンを自動で変数に保存できて便利です:

```
pm.environment.set("token", pm.response.json().token);
```

その後、他のリクエストの Authorization ヘッダーで `Bearer {{token}}` と指定すれば手動コピペ不要になります。
