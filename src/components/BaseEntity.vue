<!-- 
このBaseEntity.vueコンポーネントは、アノテーションツールの一部として、テキストドキュメントに対するエンティティ（アノテーション）のビジュアル表現を提供する役割を担っています。具体的には、SVGを使用して、テキスト上で特定の範囲を視覚的にマークするための線とテキストラベルを描画します。以下に主な機能と動作をまとめます：

主な機能と動作
視覚的表現:
エンティティが占める範囲を示すために、一つまたは複数の線（BaseEntityLine）を描画します。これらの線はテキストの特定の部分に対応し、エンティティの範囲を示します。
線の座標はcoordinates算出プロパティを通じて計算され、各線の開始点(x1)と終了点(x2)が決定されます。

ラベルの表示:
エンティティに関連付けられたラベルを表示するためにBaseEntityTextコンポーネントを使用します。このテキストはエンティティの説明やカテゴリーを示すもので、選択された言語方向（左から右、または右から左）に基づいて配置されます。

インタラクティビティ:
ユーザーがエンティティ上にマウスを持ってくると、mouseoverイベントを発生させて視覚的なフィードバックを提供します。同様に、マウスがエンティティから離れるとmouseleaveイベントが発生します。
エンティティのテキスト部分をクリックすることでclick:entityイベントが発生し、右クリックでcontextmenu:entityイベントが発生します。これらのイベントはエンティティの編集や削除などのアクションをトリガーするのに使われることがあります。

スタイルとカスタマイズ:
エンティティの線の太さやラベルのフォントサイズ、色はプロパティを通じて設定され、選択されているかどうかでスタイルが変わる場合があります（例えば、選択されたエンティティはより太い線で表示される）。 -->


<template>
  <g @mouseover="$emit('mouseover')" @mouseleave="$emit('mouseleave')">
    <BaseEntityLine
      v-for="([x1, x2], index) in coordinates"
      :key="index"
      :x1="x1"
      :x2="x2"
      :y="lineY"
      :color="color"
      :height="height"
    />
    <BaseEntityText
      v-if="!noText"
      :r="r"
      :x="textX"
      :y="textY"
      :dx="dx"
      :rtl="rtl"
      :text="label"
      :color="color"
      @click:entity="$emit('click:entity', $event)"
      @contextmenu:entity="$emit('contextmenu:entity')"
    />
  </g>
</template>

<script setup>
import { computed } from 'vue';
import BaseEntityText from './BaseEntityText.vue';
import BaseEntityLine from './BaseEntityLine.vue';
// import { useRanges } from '@/composables/useRanges';
// import { useConfig } from '@/composables/useConfig';
import { Ranges } from "../composables/models/Line/LineEntity";
import config from "../composables/models/Config/Config";

// MTODO
// ひとまずこのファイルだけでも動かしたいからここで使うものを持ってきてみる

// Propsの定義
const props = defineProps({
  ranges: {
    // type: Object as PropType<Ranges>,
    type: Object,
    required: true,
  },
  // initialRanges: Array, // Vue 2でのRangesオブジェクトに相当
  color: String,
  noText: {
    type: Boolean,
    default: false
  },
  label: String,
  rtl: {
    type: Boolean,
    default: false
  },
  margin: {
    type: Number,
    default: 0
  },
  level: {
    type: Number,
    default: 0
  },
  fontSize: {
    type: Number,
    default: 17
  },
  selected: {
    type: Boolean,
    default: false
  }
});

// Emitsの定義
const emit = defineEmits(['mouseover', 'mouseleave', 'click:entity', 'contextmenu:entity']);

// ロジックのインポート
// const { ranges, addRange, first, center, getIntervals } = useRanges(props.rtl);
// const useConfig = useConfig();

// // 算出プロパティ
// const config = {
//   labelMargin: 10,
//   radius: 5,
//   lineWidth: 2
// };

const dx = computed(() => {
  return props.rtl ? -config.labelMargin : config.labelMargin;
});
const r = computed(() => config.radius);
const height = computed(() => props.selected ? config.lineWidth * 1.5 : config.lineWidth);
// const textX = computed(() => {
//   // firstがundefinedでないことを確認し、さらにそのx1またはx2を安全に取得
//   // return props.rtl ? x(first.value?.x2 ?? 0) : x(first.value?.x1 ?? 0);
//   // firstの値を直接参照（.valueの使用を避ける）
//   const firstRange = first.value;
//   return props.rtl ? x(firstRange?.x2 ?? 0) : x(firstRange?.x1 ?? 0);
// });
const textX = computed(() => props.rtl ? x(props.ranges.first.x2) : x(props.ranges.first.x1));
const textY = computed(() => config.lineWidth + (config.lineWidth + props.fontSize + 8) * props.level + props.fontSize / 2 + 5);
const lineY = computed(() => config.lineWidth + (config.lineWidth + props.fontSize + 8) * props.level);
// const coordinates = computed(() => {
//   return ranges.items?.map(range => [x(range.x1), x(range.x2)]) || [];
// }); // エラーが出たので、ranges.itemsがundefinedの場合にエラーが発生しないようにします。
const coordinates = computed(() => props.ranges.items.map((range) => [x(range.x1), x(range.x2)]));

// ヘルパーメソッド
function x(x) {
  return x - props.margin;
}
</script>
