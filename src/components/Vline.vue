<!--
機能
エンティティ表示：テキスト中のエンティティ（人名、地名、日付など）を視覚的にマークアップします。これは BaseEntity コンポーネントを使用して実現されています。
関係表示：エンティティ間の関係（例えば、「AはBの親である」など）を線や矢印で示すことで、テキスト中の複雑な関連を明確にします。これは BaseRelation コンポーネントを利用して描画されます。
テキスト表示：選択されたテキストラインを BaseText コンポーネントを通じて表示します。

主要なプロパティ
annotatorUuid: アノテーターの一意識別子。これにより、同一ページ上で複数のアノテーターインスタンスが区別されます。
entities と relations: アノテーションされたエンティティおよび関係のデータ。
textLine: 表示するテキストの行。
font, text, entityLabels, relationLabels: テキストやラベルのフォーマットを制御するためのスタイルやデータ。
rtl (Right to Left): テキストの方向が右から左かどうかを指定します。

Computedプロパティ
geometricEntities: BaseEntity で使用されるエンティティの幾何学的プロパティを計算します。
lineRelations: BaseRelation で使用される関係のデータを計算します。
translate と translateEntity: SVG内のグループ要素の位置を動的に調整します。

メソッド
setElement: テキスト要素の参照を取得し、内部状態を更新します。
color と labelText: エンティティの表示色とラベルテキストを計算します。
isSelectedEntity と isSelectedRelation: 特定のエンティティや関係が選択されているかどうかを判定します。
-->

<template>
  <!-- KKK
  basetextId:{{ basetextId}}
  textLine:{{textLine  }}
  text:{{ text }}
  geometricEntities: {{ geometricEntities }} -->
  <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    :direction="direction"
    :id="svgId"
    width="100%"
    :height="svgHeight"
  >
    <g :transform="translate">
        <!-- <BaseRelation
          v-for="relation in lineRelations"
          :key="relation.relation.id"
          :dark="dark"
          :font-size="font.fontSize"
          :x1="relation.x1"
          :x2="relation.x2"
          :level="relation.level"
          :label="relation.label"
          :label-width="relation.labelWidth"
          :marker="relation.marker"
          :max-level="maxRelationLevel"
          :openLeft="relation.openLeft"
          :openRight="relation.openRight"
          :rtl="rtl"
          :margin="left"
          :selected="isSelectedRelation(relation.relation)"
          @click:relation="$emit('click:relation', $event, relation.relation)"
          @contextmenu:relation="$emit('contextmenu:relation', relation.relation)"
          @mouseover="$emit('setSelectedRelation', relation.relation)"
          @mouseleave="$emit('setSelectedRelation', null)"
        /> -->
        <BaseText
          :id="basetextId" 
          :text-line="textLine"
          :text="text"
          :x="baseX"
        />
        <BaseEntity
          v-for="gEntity in geometricEntities"
          :key="gEntity.entity.id"
          :ranges="gEntity.ranges"
          :color="color(gEntity.entity)"
          :label="labelText(gEntity.entity)"
          :no-text="noText(gEntity.entity)"
          :rtl="rtl"
          :margin="left"
          :level="gEntity.level"
          :font-size="font.fontSize"
          :selected="isSelectedEntity(gEntity.entity)"
          @click:entity="$emit('click:entity', $event, gEntity.entity)"
          @contextmenu:entity="$emit('contextmenu:entity', gEntity.entity)"
          @mouseover="$emit('setSelectedEntity', gEntity.entity)"
          @mouseleave="$emit('setSelectedEntity', null)"
        />
    </g>
  </svg>
</template>

<script setup>
import { ref, onMounted, watch, computed, nextTick } from 'vue';
import BaseEntity from './BaseEntity.vue';
import BaseText from './BaseText.vue';
import BaseRelation from './BaseRelation.vue';
// import { Entity } from "@/composables/models/Label/Entity";
import { RelationListItem } from "@/composables/models/Label/Relation";
import { Font } from "@/composables/models/Line/Font";
import { LabelList } from "@/composables/models/Label/Label";
import { TextLine } from "@/composables/models/Line/LineText";
import { EntityLine, GeometricEntity } from "@/composables/models/Line/LineEntity";
import { RelationLine } from "@/composables/models/Line/LineRelation";
// MTODO interface LineRelation 

const props = defineProps({
  annotatorUuid: String,
  entities: Array,
  relations: Array,
  textLine: Object,
  dark: Boolean,
  font: Object,
  text: String,
  entityLabels: Object,
  relationLabels: Object,
  rtl: Boolean,
  baseX: Number,
  left: Number,
  right: Number,
  selectedEntities: Array,
  selectedRelation: Object
});

const emits = defineEmits(['click:entity', 'click:relation', 'contextmenu:entity', 'contextmenu:relation', 'setSelectedEntity', 'setSelectedRelation', 'update:height']);

const element = ref(null);

onMounted(() => {
  // console.log("onMounted");
  setElement();
});

watch(() => props.textLine, () => {
  setElement();
}, { deep: true });

watch(() => [props.entities, props.text], () => {
  nextTick(() => {
    updateHeight();
  });
}, { deep: true, immediate: true });

const svgHeight = ref('500px');

const translate = computed(() => `translate(0, ${props.font.lineHeight})`);
const geometricEntities = computed(() => {
  // console.log("geometricEntities", props.entities, props.textLine, element.value);
  // console.log("element.value", element.value);
  if (element.value) {
    // console.log("element.value", element.value);
    const view = new EntityLine(props.textLine, props.rtl);
    return view.render(element.value, props.entities, props.entityLabels);
  }
  return [];
});

const lineRelations = computed(() => {
  const view = new RelationLine(props.relations, props.relationLabels, props.textLine, props.left, props.right);
  return view.render(geometricEntities.value, props.rtl);
});

const maxRelationLevel = computed(() => Math.max(...lineRelations.value.map(r => r.level), 0));
const y = computed(() => {
  const level = Math.max(...lineRelations.value.map(item => item.level));
  return level < 0 ? 0 : 20 + props.font.fontSize * (level + 1.5);
});

const translateEntity = computed(() => `translate(0, ${y.value})`);
const direction = computed(() => props.rtl ? 'rtl' : 'ltr');
const id = computed(() => `${props.textLine.startOffset}:${props.textLine.endOffset}`);
const basetextId = computed(() => `basetext-${props.annotatorUuid}-${id.value}`);
const svgId = computed(() => `svg-${props.annotatorUuid}-${id.value}`);

function setElement() {
  nextTick(() => {
    // console.log("setElement", basetextId.value);
    // console.log("documen", document);  
    element.value = document.getElementById(basetextId.value);
    // console.log("element.value", element.value);
  });
}

function updateHeight() {
  const svg = document.getElementById(svgId.value);
  if (svg) {
    const height = svg.getBBox().height + 30;
    svg.style.height = `${height}px`;
    emits('update:height', id.value, height);
  }
}

function noText(entity) {
  return entity.startOffset < props.textLine.startOffset;
}

function color(entity) {
  return props.entityLabels.getColor(entity.label);
}

function labelText(entity) {
  return props.entityLabels.getText(entity.label);
}

function isSelectedRelation(relation) {
  return props.selectedRelation === relation;
}

function isSelectedEntity(entity) {
  if (props.selectedRelation) {
    return props.selectedRelation.consistOf(entity);
  } else {
    return props.selectedEntities.some(e => e.id === entity.id);
  }
}
</script>

<style scoped>
svg {
  overflow-wrap: normal;
}
</style>
