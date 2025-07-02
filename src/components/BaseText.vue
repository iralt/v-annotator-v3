<!--
機能
テキスト表示：与えられたテキストから特定の範囲（startOffset から endOffset）のテキストを抽出し、SVG <text> 要素内に表示します。
条件付きレンダリング：テキストスニペットが存在する場合はそのスニペットを表示し、存在しない場合はプレースホルダーテキストとして特定の記号（例：⮐）を表示します。
スタイル適用：fill="currentColor" を用いてテキストの色を現在のフォントカラーに合わせ、white-space: pre スタイルを適用してテキストのフォーマットを保持します。

主要なプロパティ
text：表示する全テキストデータ。
textLine：テキストの抽出範囲を定義する TextLine オブジェクト。これには startOffset と endOffset が含まれます。

Computedプロパティ
snippet：text プロパティから textLine プロパティで指定された範囲のテキストを抽出する計算プロパティ。この値はテキストスニペットが表示される <text> タグの v-text ディレクティブ（またはテンプレート式）によって利用されます。

ライフサイクルとウォッチャ
ライフサイクルメソッドやウォッチャ（watch）を使って textLine の変更を監視し、テキストラインが更新された際にUIを適切に更新します。このウォッチャは、テキストラインが変更されたときにその変更を検出して関連する処理を実行するために存在します。

スタイル
Scoped CSSを使用して <text> タグのデフォルトスタイルを設定しています。white-space: pre により、テキストがそのオリジナルの空白（スペースや改行など）を保持するようになっています。 -->

<template>
  <text
    :id="id"
    v-if="snippet"
    v-text="snippet"
    fill="currentColor"
    style="white-space: pre"
    ref="textElement"
  />
  <!-- MMEMO ref="textElement" でテキスト要素を参照 -->
  <text v-else style="font-size: 6px" fill="currentColor">⮐</text>
</template>

<script setup>
// import { ref, computed, watchEffect, type Ref } from 'vue';
import { ref, computed, watch, nextTick } from "vue";

// Propsの定義
const props = defineProps({
  text: {
    type: String,
    default: "",
    required: true,
  },
  textLine: {
    type: Object,
    required: true,
  },
  id: {
    type: String,
    required: true,
  },
});

const textElement = ref(null);
const snippet = computed(() => {
  return props.text.substring(
    props.textLine.startOffset,
    props.textLine.endOffset,
  );
});

watch(
  () => props.textLine,
  () => {
    nextTick(() => {
      if (textElement.value) {
        textElement.value.annotatorElement = props.textLine;
        // console.log("Text element updated with annotatorElement.");
      }
    });
  },
  { immediate: true },
);
</script>

<style scoped>
text {
  white-space: pre;
}
</style>
