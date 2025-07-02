# V-Annotator V3

Vue 3 + Vuetify をベースとしたテキストアノテーションライブラリです。エンティティ（固有表現）の追加・編集・削除機能を提供します。（リレーション関連の機能は、後日実装予定。）

## 特徴

- 📝 **テキストアノテーション**: マウス選択によるエンティティの追加
- ✏️ **エンティティ編集**: 範囲調整とラベル変更
- 🗑️ **エンティティ削除**: 右クリックメニューからの削除
- 🎨 **カスタマイズ可能**: ラベル色、重複許可設定など
- 🔧 **Vue 3対応**: Composition API とTypeScript完全対応

## インストール

```bash
npm install v-annotator-v3
# または
yarn add v-annotator-v3
```

## 前提条件

このライブラリを使用するには、以下がインストールされている必要があります：

- Vue 3.x
- Vuetify 3.x

## セットアップ

### 1. プラグインとして登録（推奨）

```javascript
import { createApp } from 'vue'
import { createVuetify } from 'vuetify'
import VAnnotatorV3 from 'v-annotator-v3'
import App from './App.vue'

const vuetify = createVuetify({
  // Vuetifyの設定
})

const app = createApp(App)
app.use(vuetify)
app.use(VAnnotatorV3) // プラグインとして登録
app.mount('#app')
```

### 2. 個別コンポーネントとしてインポート

```vue
<script setup>
import { VAnnotator } from 'v-annotator-v3'
</script>

<template>
  <VAnnotator
    :text="text"
    :entities-data="entitiesData"
    :entity-labels="entityLabels"
    :relations="relations"
    :relation-labels="relationLabels"
    :max-label-length="maxLabelLength"
    :allow-overlapping="allowOverlapping"
    :grapheme-mode="graphemeMode"
    :rtl="rtl"
    :dark="false"
    :edit-flag="true"
    @update:entitiesData="entitiesData = $event"
  />
</template>
```

## 使用方法

### 基本的な使用例

```vue
<template>
  <div>
    <v-annotator
      :text="text"
      :entities-data="entitiesData"
      :entity-labels="entityLabels"
      :selected-entities="selectedEntities"
      :relations="relations"
      :relation-labels="relationLabels"
      :max-label-length="maxLabelLength"
      :allow-overlapping="allowOverlapping"
      :grapheme-mode="graphemeMode"
      :rtl="rtl"
      :dark="false"
      :edit-flag="true"
      @update:entitiesData="entitiesData = $event"
    />
    
    <!-- エンティティデータの表示 -->
    <pre>{{ entitiesData }}</pre>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const text = ref("吉田正尚選手は優秀な野球選手です。")

const entitiesData = ref([
  {
    id: "entity-1",
    label: 1,
    startOffset: 0,
    endOffset: 4,
    text: "吉田正尚",
    user: 1
  }
])

const entityLabels = ref([
  { id: 1, text: "人名", color: "#2196F3" },
  { id: 2, text: "地名", color: "#4CAF50" },
  { id: 3, text: "組織名", color: "#FF5722" }
])


const maxLabelLength = ref(10);
const allowOverlapping = ref<boolean>(true);
const graphemeMode = ref<boolean>(false);
const rtl = ref<boolean>(false);

const selectedEntities = computed(() => {
  return [];
});

const relations = reactive([
  // { id: 0, fromId: 4, toId: 0, labelId: 0 },
]);

const relationLabels = reactive([
  //   { id: 0, text: "Rel_1", color: "#ffffff" },
]);
</script>
```

### エンティティデータ形式

```typescript
interface EntityData {
  id: string | number        // エンティティの一意識別子（UUID v7推奨）
  startOffset: number        // テキスト内の開始位置
  endOffset: number         // テキスト内の終了位置
  label: number            // ラベルID
  text: string            // エンティティのテキスト内容
  user?: number           // 作成者ID（オプション）
}
```

### ラベル設定

```typescript
interface EntityLabel {
  id: number               // ラベルの一意識別子
  text: string            // ラベル表示名
  color: string           // ラベル色（CSS色指定）
}
```

## コンポーネント仕様

### VAnnotator

テキストアノテーション機能を提供するメインコンポーネントです。

#### Props

| プロパティ | 型 | デフォルト | 説明 |
|------------|------|-----------|------|
| `text` | `string` | `""` | アノテーション対象のテキスト |
| `entitiesData` | `EntityData[]` | `[]` | エンティティデータの配列 |
| `entityLabels` | `EntityLabel[]` | `[]` | エンティティラベルの定義 |
| `relations` | `Relation[]` | `[]` | 関係データ（将来拡張用） |
| `relationLabels` | `Label[]` | `[]` | 関係ラベル（将来拡張用） |
| `selectedEntities` | `Entity[]` | `[]` | 選択中のエンティティ |
| `maxLabelLength` | `number` | `10` | ラベル表示の最大長 |
| `allowOverlapping` | `boolean` | `false` | エンティティの重複を許可するか |
| `graphemeMode` | `boolean` | `false` | グラフェーム単位での処理 |
| `rtl` | `boolean` | `false` | 右から左のテキスト表示 |
| `dark` | `boolean` | `false` | ダークモード |
| `editFlag` | `boolean` | `false` | 編集モードの有効化 |

#### Events

| イベント | 説明 |
|----------|------|
| `update:entitiesData` | エンティティデータが更新された時に発火 |
| `click:entity` | エンティティがクリックされた時に発火 |
| `contextmenu:entity` | エンティティが右クリックされた時に発火 |
| `add:entity` | エンティティが追加された時に発火 |

## 操作方法

### エンティティの追加
1. テキストをマウスでドラッグして選択
2. 表示されるダイアログでラベルを選択
3. 「追加」ボタンをクリック

### エンティティの編集
1. 既存のエンティティラベルをクリック
2. 範囲調整ボタン（前後の+/-）で範囲を調整
3. ラベルを変更（必要に応じて）
4. 「アップデート」ボタンをクリック

### エンティティの削除
1. 既存のエンティティラベルを右クリック
2. 確認ダイアログで「削除」ボタンをクリック

## 開発

### デモページの起動

```bash
yarn dev
```

ブラウザで `http://localhost:5177` にアクセスしてデモページを確認できます。

### ライブラリのビルド

```bash
yarn build
```

ビルド結果は `lib/` ディレクトリに出力されます。

### デモページのビルド

```bash
yarn build:demo
```

### 型チェック

```bash
yarn typecheck
```

## アーキテクチャ

このライブラリは以下の設計思想に基づいています：

- **分離された責務**: コンポーネント、状態管理、ビジネスロジックを明確に分離
- **型安全性**: TypeScriptによる完全な型定義
- **再利用性**: Composition APIパターンによる機能の再利用
- **拡張性**: 将来的な関係アノテーション機能への対応

### 主要ファイル構成

```
src/
├── components/
│   ├── VAnnotator.vue          # メインアノテーションコンポーネント
│   ├── EntityDialogs.vue       # エンティティ操作ダイアログ群
│   └── Vline.vue              # テキスト行表示コンポーネント
├── composables/
│   ├── useEntityCRUD.ts        # エンティティCRUD操作
│   ├── useDialogState.ts       # ダイアログ状態管理
│   └── models/                 # データモデル定義
└── demo/                       # デモアプリケーション
```

## ライセンス

MIT