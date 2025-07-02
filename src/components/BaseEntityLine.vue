<!-- 
BaseEntityLine.vue コンポーネントは、エンティティのビジュアル表現の一部として、SVG <line> 要素を用いて直線を描画する役割を担っています。ここでは、Vue 2のスクリプトをVue 3に適応する方法について説明し、特に直線の座標とスタイルを調整するロジックを扱います。

コンポーネントの説明
このコンポーネントは、受け取ったプロパティ (x1, x2, y, color, height) を基にSVGの <line> を描画します。直線は次の属性を持ちます:

x1, y1, x2, y2: 線の始点と終点の座標を指定します。
stroke: 線の色。
stroke-width: 線の太さ。
stroke-linecap: 線の端点のスタイル（ここでは "round" に設定されています）。
-->

<template>
  <line
    :x1="_x1"
    :y1="y"
    :x2="_x2"
    :y2="y"
    :stroke="color"
    :stroke-width="height"
    stroke-linecap="round"
  />
</template>

<script setup lang="ts">
import { computed } from 'vue';

// Propsの定義
const props = defineProps({
  x1: {
    type: Number,
    required: true,
  },
  x2: {
    type: Number,
    required: true,
  },
  y: {
    type: Number,
    required: true,
  },
  height: {
    type: Number,
    default: 5,
  },
  color: {
    type: String,
    required: true,
  },
});

// 線の端の位置を調整するための算出プロパティ
const _x1 = computed(() => {
  return Math.min(props.x1, props.x2) + props.height / 2;
});

const _x2 = computed(() => {
  return Math.max(props.x1, props.x2) - props.height / 2;
});
</script>
