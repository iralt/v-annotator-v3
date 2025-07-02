<!-- 
主な機能

視覚的表現:
テキストを視覚的に強調表示するために、その背景に円（<circle>）を描画します。円はテキストの色と調和するように設定されており、テキストがより目立つようになっています。

テキスト表示:
<text> 要素を使用して、指定されたテキストを表示します。このテキストはエンティティのラベルや名称など、ユーザーが識別しやすい情報を提供することが目的です。

インタラクティビティ:
ユーザーがテキストまたはその背景円をクリックすると、click:entity イベントが発火し、親コンポーネントにイベントが伝播されます。これにより、クリックされたエンティティに対するさらなるアクションがトリガーされる可能性があります。
右クリック（コンテキストメニュー）に対するアクションもカスタマイズされており、contextmenu:entity イベントを通じて特定の操作が実行されるようになっています。これはデフォルトのブラウザ動作を抑止し、カスタムの動作を提供します。

ダイナミックな位置調整:
テキストのx座標は、右から左（RTL）のテキスト表示のサポートを含むように動的に調整されます。これにより、テキストの表示が言語の読み方に適合し、円の位置がテキストの開始位置に基づいて左右どちらかにオフセットされます。

スタイリングとアクセシビリティ:
cursor: pointer; user-select: none のスタイルが適用されており、ユーザーがテキストを選択することなく、クリックすることを促します。これにより、テキストに対するユーザー操作がより直感的になります

-->

<template>
  <g
    style="cursor: pointer; user-select: none"
    @click="$emit('click:entity', $event)"
    @contextmenu.prevent="$emit('contextmenu:entity')"
  >
    <circle :r="r" :fill="color" :cx="cx" :cy="y" />
    <text
      :x="x"
      :y="y"
      fill="currentColor"
      :dx="dx"
      dy="0.35em"
      v-text="text"
    />
  </g>
</template>

<script setup lang="ts">
import { computed } from 'vue';

// Propsの定義
const props = defineProps({
  r: {
    type: Number,
    required: true
  },
  x: {
    type: Number,
    required: true
  },
  y: {
    type: Number,
    required: true
  },
  dx: {
    type: Number,
    required: true
  },
  color: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  rtl: {
    type: Boolean,
    default: false
  }
});

// Emitsの定義
const emit = defineEmits(['click:entity', 'contextmenu:entity']);

// rtlに基づいてcxを計算する
const cx = computed(() => {
  return props.rtl ? props.x - props.r : props.x + props.r;
});
</script>
