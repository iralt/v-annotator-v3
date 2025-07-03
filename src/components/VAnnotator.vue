<!-- Template部分
SVGマーカーの定義:
コンポーネントはSVG要素を使用してカスタムマーカー（矢印など）を定義しています。これはテキスト内の関係を視覚的に示すために使用されることがあります。

各アイテム（テキストライン）は v-line コンポーネントを使って表示され、それぞれのテキストラインに対応するエンティティや関係のデータを渡しています。

イベントハンドリング:
クリックやタッチイベントを通じて、特定のエンティティや関係がクリックされたときの動作を定義しています。 -->

<script setup lang="ts">
import { ref, onMounted, watch, computed, nextTick, Ref } from "vue";
import { debounce } from "lodash-es";
import { v7 as uuidv7 } from "uuid";
// @ts-ignore
import VLine from "./Vline.vue";
import EntityDialogs from "./EntityDialogs.vue";

// import { Text, Label, Entity, Relation, Font, widthOf, TextLine, Entities, RelationList, LabelList, EntityLabelListItem, RelationLabelListItem, TextLineSplitter, LineWidthManager, TextSelector } from '@/domain';
import { Text } from "../composables/models/Label/Text";
import {
  EntityLabelListItem,
  RelationLabelListItem,
  LabelList,
  Label,
} from "../composables/models/Label/Label";
// MTODO Label, Relation,Entity はclassじゃなかった。別で定義必要かも。
import {
  RelationList,
  Relation,
  RelationListItem,
} from "../composables/models/Label/Relation";
import { Entities, Entity } from "../composables/models/Label/Entity";
import { Font } from "../composables/models/Line/Font";
import { widthOf } from "../composables/models/Line/Utils";
import { TextLine } from "../composables/models/Line/LineText";
import { TextLineSplitter } from "../composables/models/Line/LineSplitter";
import { LineWidthManager } from "../composables/models/Line/WidthManager";
import { TextSelector } from "../composables/models/EventHandler/TextSelectionHandler";
import { useEntityCRUD, type EntityData } from "../composables/useEntityCRUD";

// 型定義
interface VAnnotatorProps {
  record?: any;
  maxLabelLength?: number;
  text: string;
  entitiesData: EntityData[];
  entityLabels: Label[];
  relations: Relation[];
  relationLabels: Label[];
  allowOverlapping: boolean;
  rtl: boolean;
  graphemeMode: boolean;
  dark: boolean;
  selectedEntities: Entity[];
  editFlag: boolean;
  rightOffeset?: number;
}

interface VirtualScrollItem {
  id: string;
  textLine: TextLine;
  size: number;
}

const props = withDefaults(defineProps<VAnnotatorProps>(), {
  record: undefined,

  text: "",
  entitiesData: () => [],
  entityLabels: () => [],
  selectedEntities: () => [],
  relations: () => [],
  relationLabels: () => [],
  maxLabelLength: () => 10,
  allowOverlapping: false,
  graphemeMode: false,
  rtl: false,

  dark: false,

  editFlag: false,
  rightOffeset: 50,
});

// 親から呼ばれるメソッドを公開
const updateFlag = (newFlag: boolean): void => {
  console.log("Flag updated to:", newFlag);
  console.log(
    `%c*** newFlag *** ${newFlag}`,
    "background-color:#de6; padding:6px; border-radius:4px;"
  );
  // フラグを更新するロジックをここに追加
};

// 親から呼ばれるメソッドを公開する
defineExpose({
  updateFlag,
});

const emits = defineEmits([
  "click:entity",
  "click:relation",
  "contextmenu:entity",
  "contextmenu:relation",
  "add:entity",
  "rendered",
  "update:entitiesData",
]);

const uuid: string = uuidv7();
const font: Ref<Font | null> = ref(null);
const heights: Ref<Record<string, number>> = ref({});
const maxWidth: Ref<number> = ref(-1);
const baseX: Ref<number> = ref(0);
const left: Ref<number> = ref(0);
const right: Ref<number> = ref(0);
const selectedRelation: Ref<RelationListItem | null> = ref(null);
const selectedEntity: Ref<Entity | null> = ref(null);

const textElement: Ref<SVGTextElement | null> = ref(null);

// Entity CRUD integration
const entitiesDataRef = ref([...props.entitiesData]);
const textRef = ref(props.text);
const isUpdatingFromProp = ref(false);

const {
  entities,
  candidateEntity,
  addEntityWithDialog,
  updateEntityWithDialog,
  deleteEntityWithDialog,
  updateEntityAddPrefix,
  updateEntitySubtractPrefix,
  updateEntityAddSuffix,
  updateEntitySubtractSuffix,
  confirmAction,
  cancelAction,
  dialog4Adding,
  dialog4Updating,
  dialog4Deleting,
} = useEntityCRUD(entitiesDataRef, textRef);

// Watch for prop changes and update refs
watch(
  () => props.entitiesData,
  (newEntitiesData) => {
    isUpdatingFromProp.value = true;
    entitiesDataRef.value = [...newEntitiesData];
    nextTick(() => {
      isUpdatingFromProp.value = false;
    });
  },
  { deep: true, immediate: true }
);

watch(
  () => props.text,
  (newText) => {
    textRef.value = newText;
  }
);

// Watch for internal entitiesData changes and emit to parent
watch(
  entitiesDataRef,
  (newEntitiesData) => {
    if (!isUpdatingFromProp.value) {
      emits("update:entitiesData", [...newEntitiesData]);
    }
  },
  { deep: true }
);

onMounted(() => {
  const element = document.getElementById(`text-${uuid}`);
  textElement.value = element as SVGTextElement | null;
  window.addEventListener("resize", setMaxWidth);
  setMaxWidth();
  console.log("Received text in VAnnotator:", props.text);
  console.log("Virtual scroll items:", items.value);
});

watch(
  () => props.text,
  () => {
    heights.value = {};
    nextTick(() => {
      if (textElement.value) {
        font.value = Font.create(props.text, textElement.value);
      }
      console.log("Font:", font.value, "*****************");
    });
  },
  { immediate: true }
);

const items = computed((): VirtualScrollItem[] => {
  if (!textLines.value || textLines.value.length === 0) {
    return [];
  }

  return textLines.value.map((line, _i) => {
    const heightKey = `${line.startOffset}:${line.endOffset}`;
    const height = heights.value[heightKey] || 64;

    return {
      id: heightKey,
      textLine: line,
      size: height,
    };
  });
});

const entityList = computed((): Entities => {
  resetSelection();

  console.log(
    "Computing entityList...",
    entities.value,
    "entitiesDataRef:",
    entitiesDataRef.value
  );
  // Ensure entities.value is always an array and contains valid Entity objects
  const entityArray = Array.isArray(entities.value) ? entities.value : [];
  console.log("Entity array to process:", entityArray);
  return props.graphemeMode
    ? Entities.valueOf(entityArray, _text.value)
    : Entities.valueOf(entityArray);
});

const relationList = computed((): RelationList => {
  resetSelection();
  return new RelationList(props.relations, entityList.value);
});

const textLines = computed((): TextLine[] => {
  console.log("Computing textLines...");
  console.log("Font:", font.value);
  if (!font.value) {
    console.warn("Font is null, attempting to initialize...");
    // フォントがnullの場合は初期化を試行
    nextTick(() => {
      if (textElement.value) {
        font.value = Font.create(props.text, textElement.value);
        console.log("Font initialized:", font.value);
      }
    });
    return [];
  }
  console.log("Entity Label List:", entityLabelList.value);
  console.log("Max Width:", maxWidth.value);
  if (!font.value || !entityLabelList.value || maxWidth.value === -1) {
    console.log("One or more dependencies are not ready:", {
      font: font.value,
      entityLabelList: entityLabelList.value,
      maxWidth: maxWidth.value,
    });
    return [];
  } else {
    const maxLabelWidth = entityLabelList.value.maxLabelWidth;
    // console.log('Max Label Width:', maxLabelWidth);
    const calculator = new LineWidthManager(
      maxWidth.value + props.rightOffeset,
      maxLabelWidth
    );
    const splitter = new TextLineSplitter(calculator, font.value);

    // console.log('Splitting text with given font and widths...');
    const lines = splitter.split(_text.value);
    // console.log('Generated text lines:', lines);

    return lines;
  }
});

const _text = computed((): Text => new Text(props.text));

const entityLabelList = computed((): LabelList | null => {
  if (textElement.value) {
    const widths = props.entityLabels.map((label) =>
      widthOf(label.text, textElement.value!)
    );
    return LabelList.valueOf(
      props.maxLabelLength,
      props.entityLabels,
      widths,
      EntityLabelListItem
    );
  }
  return null;
});

const relationLabelList = computed((): LabelList | null => {
  if (textElement.value) {
    const widths = props.relationLabels.map((label) =>
      widthOf(label.text, textElement.value!)
    );
    return LabelList.valueOf(
      props.maxLabelLength,
      props.relationLabels,
      widths,
      RelationLabelListItem
    );
  }
  return null;
});

const highlightedEntities = computed((): Entity[] => {
  if (selectedEntity.value) {
    return props.selectedEntities.concat(selectedEntity.value);
  }
  return props.selectedEntities;
});

function setMaxWidth(): void {
  nextTick(
    debounce(() => {
      console.log(`Setting max width for container-${uuid}: ${maxWidth.value}`);
      const containerElement = document.getElementById(`container-${uuid}`);

      if (containerElement) {
        const clientWidth = containerElement.clientWidth;
        const rect = containerElement.getBoundingClientRect();

        console.log(
          `Container found: clientWidth = ${clientWidth}, rect =`,
          rect
        );

        maxWidth.value = clientWidth;
        left.value = rect.left;
        right.value = rect.right - rect.left;
        baseX.value = !props.rtl ? 0 : right.value;
      } else {
        console.log(`Container element for container-${uuid} not found`);
      }
    }, 500)
  );
}

function clicked(event: Event, entity: Entity): void {
  // Call internal CRUD function for updating entity
  updateEntityWithDialog(event, entity.id);
  // Also emit for external listeners if needed
  emits("click:entity", event, entity.id, props.record);
}

function onRelationClicked(event: Event, relation: RelationListItem): void {
  emits("click:relation", event, relation);
}

function onEntityContextMenu(entity: Entity): void {
  // Call internal CRUD function for deleting entity
  deleteEntityWithDialog(entity);
  // Also emit for external listeners if needed
  emits("contextmenu:entity", entity, props.record);
}

function updateHeight(id: string, height: number): void {
  heights.value[id] = height;
}

function resetSelection(): void {
  selectedRelation.value = null;
  selectedEntity.value = null;
}

function open(event: Event): void {
  try {
    console.log("entityList:", entityList.value);
    // entityList.value.id2entity.forEach((entity, key) => {
    //   console.log(`Entity ${key}:`, entity);
    //   console.log('startOffset:', entity.startOffset);
    // });
    // console.log('_text:', _text.value);

    // if (!event.shiftKey) {
    //   console.log('Shift key is pressed. Exiting the function.');
    //   return;
    // }

    const selector = new TextSelector(
      props.allowOverlapping,
      props.graphemeMode
    );
    const [startOffset, endOffset] = selector.getOffsets(
      entityList.value,
      _text.value
    );
    console.log(
      "Calling addEntityWithDialog:",
      startOffset,
      endOffset,
      _text.value.text,
      props.record
    );
    // Call internal CRUD function for adding entity
    addEntityWithDialog(event, startOffset, endOffset, _text.value.text);
    // Also emit for external listeners if needed
    emits(
      "add:entity",
      event,
      startOffset,
      endOffset,
      _text.value.text,
      props.record
    );
  } catch (e) {
    console.log("Error while selecting text:", e);
    return;
  }
}
</script>

<template>
  <div :id="`container-${uuid}`" @click="open" @touchend="open">
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="0" height="0">
      <defs>
        <marker
          id="v-annotator-arrow"
          viewBox="0 0 10 10"
          refX="5"
          refY="5"
          markerWidth="6"
          markerHeight="6"
          orient="auto-start-reverse"
        >
          <path d="M 0 0 L 10 5 L 0 10 z" stroke="#74b8dc" fill="#74b8dc" />
        </marker>
      </defs>
    </svg>
    <v-virtual-scroll :items="items" item-height="64">
      <template v-slot:default="{ item, index }">
        <v-line
          :key="`${index}:${rtl}`"
          :annotator-uuid="uuid"
          :dark="dark"
          :entities="
            entityList.filterByRange(
              item.textLine.startOffset,
              item.textLine.endOffset
            )
          "
          :entityLabels="entityLabelList"
          :relations="
            relationList.filterByRange(
              item.textLine.startOffset,
              item.textLine.endOffset
            )
          "
          :maxLabelLength="maxLabelLength"
          :relationLabels="relationLabelList"
          :font="font"
          :rtl="rtl"
          :selected-entities="highlightedEntities"
          :selected-relation="selectedRelation"
          :text="text"
          :textLine="item.textLine"
          :base-x="baseX"
          :left="left"
          :right="right"
          @click:entity="clicked"
          @click:relation="onRelationClicked"
          @contextmenu:entity="onEntityContextMenu"
          @contextmenu:relation="$emit('contextmenu:relation', $event)"
          @update:height="updateHeight"
          @setSelectedEntity="selectedEntity = $event"
          @setSelectedRelation="selectedRelation = $event"
        />
      </template>
    </v-virtual-scroll>
    <!-- MMEMO SVG要素を非表示にするが、DOMには存在させるよう調整 -->
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      style="position: absolute; opacity: 0; pointer-events: none"
    >
      <text :id="`text-${uuid}`" style="white-space: pre" />
    </svg>

    <!-- Entity Dialogs -->
    <EntityDialogs
      v-if="
        candidateEntity && (dialog4Adding || dialog4Updating || dialog4Deleting)
      "
      :candidate-entity="candidateEntity"
      :entity-labels="entityLabels"
      :dialog4-adding="dialog4Adding"
      :dialog4-updating="dialog4Updating"
      :dialog4-deleting="dialog4Deleting"
      @cancel="cancelAction"
      @confirm="confirmAction"
      @update-entity-add-prefix="updateEntityAddPrefix"
      @update-entity-subtract-prefix="updateEntitySubtractPrefix"
      @update-entity-add-suffix="updateEntityAddSuffix"
      @update-entity-subtract-suffix="updateEntitySubtractSuffix"
      @update-candidate-entity-label="
        (value) => (candidateEntity.label = value)
      "
    />
  </div>
</template>
