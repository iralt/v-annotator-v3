<template>
  <g
    style="cursor: pointer; user-select: none"
    @click="$emit('click:relation', $event)"
    @contextmenu="$emit('contextmenu:relation')"
    @mouseover="$emit('mouseover')"
    @mouseleave="$emit('mouseleave')"
  >
    <path
      :d="d"
      v-bind="markerObj"
      stroke="#74b8dc"
      :stroke-width="width"
      fill="none"
    />
    <g v-if="x1">
      <rect
        :x="rectX"
        :y="rectY"
        :width="labelWidth"
        :height="fontSize"
        :fill="fill"
      />
      <text
        :x="center"
        :y="textY"
        fill="currentColor"
        text-anchor="middle"
        v-text="label"
      />
    </g>
  </g>
</template>

<script setup>
import { computed } from 'vue';

// Propsの定義
const props = defineProps({
  fontSize: Number,
  x1: Number,
  x2: Number,
  dark: Boolean,
  label: String,
  labelWidth: Number,
  level: Number,
  openLeft: Boolean,
  openRight: Boolean,
  rtl: Boolean,
  margin: Number,
  marker: String,
  maxLevel: Number,
  selected: Boolean
});

// 算出プロパティ
const r = computed(() => 12);
const y = computed(() => 20 + props.fontSize * props.maxLevel + props.fontSize / 2);
const dy = computed(() => 20 + props.fontSize * props.level);
const lineY = computed(() => y.value - dy.value - r.value);
const center = computed(() => props.x1 + (props.x2 - props.x1) / 2);
const rectX = computed(() => center.value - props.labelWidth / 2);
const rectY = computed(() => lineY.value - props.fontSize / 2);
const textY = computed(() => lineY.value + props.fontSize / 2 - 3);
const _x1 = computed(() => props.x1 - props.margin);
const _x2 = computed(() => props.x2 - props.margin);
const width = computed(() => props.selected ? 3 : 1);
const fill = computed(() => props.dark ? "#1E1E1E" : "white");

// 線のパスを生成
const d = computed(() => {
  if (props.openLeft && props.openRight) {
    return `M ${_x1.value} ${y.value - dy.value - r.value} H ${_x2.value}`;
  } else if (props.openLeft) {
    return `M ${_x1.value} ${y.value - dy.value - r.value} H ${_x2.value - r.value} A ${r.value} ${r.value} 0 0 1 ${_x2.value} ${lineY.value + r.value} v ${dy.value - 3}`;
  } else if (props.openRight) {
    return `M ${_x1.value} ${y.value} v -${dy.value} A ${r.value} ${r.value} 0 0 1 ${_x1.value + r.value} ${lineY.value} H ${_x2.value}`;
  } else {
    return `M ${_x1.value} ${y.value} v -${dy.value} A ${r.value} ${r.value} 0 0 1 ${_x1.value + r.value} ${lineY.value} H ${_x2.value - r.value} A ${r.value} ${r.value} 0 0 1 ${_x2.value} ${lineY.value + r.value} v ${dy.value - 3}`;
  }
});

const markerObj = computed(() => {
  if (props.marker === "start") {
    return { "marker-start": "url(#v-annotator-arrow)" };
  } else if (props.marker === "end") {
    return { "marker-end": "url(#v-annotator-arrow)" };
  } else {
    return {};
  }
});
</script>
