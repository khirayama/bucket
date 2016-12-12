# Bucket

## コンセプト

### 内向け

行きたい場所リスト

### 外向け

友達のお気に入りの場所を見てみよう

### なにができるの？

行きたい場所をリストに追加できる。
行きたい・お気に入りといった時にはスタンプを押せる。

## 画面設計

- `/` 登録/ログイン画面 - userの登録ができる。
- `/` リコメンド画面 - トップページ。場所によってオススメなどを出す。
  - 検索
- `/places/:id` 場所詳細画面 - 場所の詳細を表示できる。
- `/:user_id/places` ユーザの行きたい・お気に入り場所画面 - 場所を一覧できる。
  - リスト表示と地図表示できる。
- `/:user_id` ユーザ画面 - ユーザの行きたい・お気に入り・スタンプが一覧できる。
- `/:user_id/setting` 設定画面 - 情報更新、退会更新

## リソース

- users (id / uid / provider / name / language / image-url / profile / private)
- following (id / user-id / following-user-id)
- wants (id / user-id / place-id)
- favorites (id / user-id / place-id)
- stamps (id / user-id / place-id)

## ネタ

- みんな、なにかをアピールしたい
- 実は競合は、食べログ、ぐるなび、Rettyとかなのかもしれない
- 店舗情報はgoogle、写真はinstagrameから
- 住所 / 地図 / 時間 / 連絡先
