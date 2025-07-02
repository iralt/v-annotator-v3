# V-Annotator V3

Vue 3 + Vuetify をベースとしたアノテーションライブラリです。

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

```javascript
import { VAnnotatorDialog } from 'v-annotator-v3'

export default {
  components: {
    VAnnotatorDialog
  }
}
```

## コンポーネント

### VAnnotatorDialog

ボタンを押してダイアログを表示するコンポーネントです。

#### 基本的な使用方法

```vue
<template>
  <div>
    <!-- ダイアログを開くボタン -->
    <v-btn @click="dialogVisible = true">
      ダイアログを開く
    </v-btn>

    <!-- ダイアログ -->
    <VAnnotatorDialog 
      v-model="dialogVisible"
      title="サンプルダイアログ"
    >
      <p>ダイアログの内容をここに記述します。</p>
    </VAnnotatorDialog>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const dialogVisible = ref(false)
</script>
```

#### カスタムアクションボタン

```vue
<template>
  <VAnnotatorDialog 
    v-model="dialogVisible"
    title="確認ダイアログ"
  >
    <p>この操作を実行しますか？</p>
    
    <!-- カスタムアクションボタン -->
    <template #actions>
      <v-btn color="grey" @click="dialogVisible = false">
        キャンセル
      </v-btn>
      <v-btn color="primary" @click="handleConfirm">
        実行
      </v-btn>
    </template>
  </VAnnotatorDialog>
</template>

<script setup>
import { ref } from 'vue'

const dialogVisible = ref(false)

const handleConfirm = () => {
  // 処理を実行
  console.log('実行されました')
  dialogVisible.value = false
}
</script>
```

#### Props

| プロパティ | 型 | デフォルト | 説明 |
|------------|------|-----------|------|
| `modelValue` | `boolean` | - | ダイアログの表示状態（v-modelで使用） |
| `title` | `string` | `'ダイアログ'` | ダイアログのタイトル |
| `maxWidth` | `string \| number` | `'500px'` | ダイアログの最大幅 |
| `persistent` | `boolean` | `false` | 外側をクリックしてもダイアログを閉じない |

#### Events

| イベント | 説明 |
|----------|------|
| `update:modelValue` | ダイアログの表示状態が変更された時に発火 |

#### Slots

| スロット | 説明 |
|----------|------|
| `default` | ダイアログのメインコンテンツ |
| `actions` | ダイアログのアクションボタン領域 |

## 開発

### デモページの起動

```bash
yarn dev
```

### ライブラリのビルド

```bash
yarn build
```

### 型チェック

```bash
yarn typecheck
```

## ライセンス

MIT