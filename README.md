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







## 編集履歴

### 2024-07-02: アーキテクチャリファクタリング & エンティティ管理機能の完成

#### 主要な変更内容

**1. データ構造の改善**
- Entity クラスにテキスト内容を格納する機能を追加 (`text` プロパティ)
- エンティティIDをUUID v7形式に変更（タイムスタンプベースから移行）
- JSON形式でのエンティティデータ管理（`new Entity()` コンストラクタ形式から移行）

**2. アーキテクチャの分離**
- `useEntityCRUD` composable を実装してエンティティのCRUD操作を統合
- `useDialogState` composable でダイアログ状態管理を分離
- `EntityDialogs.vue` コンポーネントを作成してダイアログUI要素を分離
- App.vue から useEntityCRUD ロジックを VAnnotator.vue に移動

**3. Vue 3 準拠への修正**
- v-model エラーの修正（props でのv-model使用禁止への対応）
- `:model-value` と `@update:model-value` パターンに変更
- TypeScript型エラーの修正（undefined entities配列の処理）

**4. データフロー最適化**
- 親子コンポーネント間でのエンティティデータ同期システム構築
- `update:entitiesData` イベントによる双方向データバインディング
- 無限再帰更新の防止機構（`isUpdatingFromProp` フラグ）

**5. UI/UX改善**
- テキスト選択によるエンティティ追加機能
- 既存エンティティのクリック編集機能
- 右クリックによるエンティティ削除機能
- エンティティ範囲調整機能（前後の文字追加/削除）
- `rightOffeset` プロパティの外部制御対応（スライダーUI付き）

#### 技術的詳細

**コンポーネント構成:**
- **VAnnotator.vue**: メイン注釈コンポーネント（useEntityCRUD統合済み）
- **EntityDialogs.vue**: エンティティ操作用ダイアログ群
- **App.vue**: デモページ（シンプル化、データ定義のみ）

**Composables:**
- **useEntityCRUD.ts**: エンティティのCRUD操作とダイアログ制御
- **useDialogState.ts**: ダイアログの表示状態管理

**データモデル:**
```typescript
interface EntityData {
  id: string | number  // UUID v7推奨
  startOffset: number
  endOffset: number
  label: number
  text: string
  user?: number
}
```

#### 修正された問題
- Vue 3 v-model props エラー
- Entity 配列の undefined 参照エラー
- 削除機能の無限再帰更新エラー
- テキスト選択時のダイアログ表示問題
- 親子コンポーネント間のデータ同期問題







## 今後の予定

* relation関連の機能を追加

## 残された問題

### 1. TypeScriptタイプエクスポート
- ~~公開APIの型定義（`EntityData`, `CandidateEntity` など）が外部から利用できない~~ ✅ **修正済み**
- ~~ライブラリ利用者が型安全性を享受できない状態~~ ✅ **修正済み**

### 2. パフォーマンス関連
- ~~長大なテキストでの仮想スクロール機能が未実装~~ ✅ **修正済み** →要確認
- 大量のテキスト処理時のパフォーマンス最適化が未実装
- エンティティ範囲クエリの最適化余地

### 3. 関係（Relation）機能
- 関係アノテーション機能が未実装
- RelationList, Relation クラスは存在するが UI 統合されていない
- エンティティ間の依存関係管理が不完全

### 4. アクセシビリティ
- キーボードナビゲーション未対応
- スクリーンリーダー対応不足
- ARIA属性の適切な設定が必要

### 5. 国際化（i18n）
- ダイアログのテキストがハードコード（日本語固定）
- 多言語対応のための i18n 設定が未実装

### 6. エラーハンドリング
- エンティティ操作時のエラー処理が不十分
- ユーザーフレンドリーなエラーメッセージが未整備
- 例外状況での適切なフォールバック処理が必要

### 7. テスト不足
- ユニットテストが存在しない
- E2Eテストの設定が未実装
- CI/CDパイプラインでの品質保証体制が必要

### 8. ドキュメント
- API リファレンスドキュメントが不完全
- 使用例やベストプラクティスの記載不足
- 移行ガイドが未整備

