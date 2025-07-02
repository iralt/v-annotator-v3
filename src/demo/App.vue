<script setup lang="ts">
import { ref, computed, reactive } from "vue";
import VAnnotator from "@/components/VAnnotator.vue";
import EntityDialogs from "@/components/EntityDialogs.vue";
import { useEntityCRUD } from "@/composables/useEntityCRUD";

// Demo data
const text = ref(
  "ここ数年ずっと言われているんですけれども、やっぱり吉田正尚の後を打つバッターですね、和田さん。特にオリックス打線の方が少し点を取る意味では苦しんでいるということもあるんですけれども。ロッテは5番の、ファーストの、レアードから始まります。"
);

const entitiesData = ref([
  {
    id: 1,
    label: 1,
    startOffset: 25,
    endOffset: 29,
    text: "吉田正尚",
    user: 1,
  },
  { id: 2, label: 6, startOffset: 42, endOffset: 44, text: "和田", user: 1 },
  {
    id: 3,
    label: 4,
    startOffset: 49,
    endOffset: 54,
    text: "オリックス",
    user: 1,
  },
  { id: 4, label: 4, startOffset: 91, endOffset: 94, text: "ロッテ", user: 1 },
  {
    id: 5,
    label: 1,
    startOffset: 106,
    endOffset: 110,
    text: "レアード",
    user: 1,
  },
]);

const entityLabels = ref([
  { id: 1, text: "選手名", color: "#2196F3" },
  { id: 2, text: "コーチ名", color: "#4CAF50" },
  { id: 3, text: "審判名", color: "#FFC107" },
  { id: 4, text: "チーム名", color: "#FF5722" },
  { id: 5, text: "実況者", color: "#9C27B0" },
  { id: 6, text: "解説者", color: "#00BCD4" },
  { id: 7, text: "現場リポーター", color: "#FF9800" },
  { id: 8, text: "その他", color: "#607D8B" },
]);

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
} = useEntityCRUD(entitiesData, text);
</script>

<template>
  <v-app>
    <v-app-bar title="V-Annotator V3 Demo" />
    <v-main>
      <v-container>
        <v-row>
          <v-col cols="12">
            <v-card>
              <v-card-title>ライブラリデモページ</v-card-title>
              <v-card-text>
                <p>V-Annotator V3 ライブラリのデモページです。</p>
                <p>
                  開発中のコンポーネントやプラグインの動作確認に使用します。
                </p>

                <hr class="my-4" />

                <v-annotator
                  :text="text"
                  :entities="entities"
                  :entity-labels="entityLabels"
                  :selected-entities="selectedEntities"
                  :relations="relations"
                  :relation-labels="relationLabels"
                  :max-label-length="maxLabelLength"
                  @add:entity="addEntityWithDialog"
                  @click:entity="updateEntityWithDialog"
                  @contextmenu:entity="deleteEntityWithDialog"
                  :allow-overlapping="allowOverlapping"
                  :grapheme-mode="graphemeMode"
                  :rtl="rtl"
                  :dark="false"
                  :edit-flag="true"
                />
              </v-card-text>
            </v-card>

            <pre>{{ entitiesData }}</pre>
          </v-col>
        </v-row>

        <!-- Entity Dialogs Component -->
        <EntityDialogs
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
        />
      </v-container>

      <v-container>
        <v-row>
          <v-col cols="12">
            <v-card color="rgba(200, 200, 255, 0.2)">
              <v-card-title>V-Annotator 操作方法</v-card-title>
              <v-card-text>
                <v-list>
                  <v-list-item>
                    <template v-slot:prepend>
                      <v-icon color="primary">mdi-mouse</v-icon>
                    </template>
                    <v-list-item-title>テキスト選択</v-list-item-title>
                    <v-list-item-subtitle>
                      マウスでドラッグしてテキストを選択し、エンティティを追加できます
                    </v-list-item-subtitle>
                  </v-list-item>

                  <v-list-item>
                    <template v-slot:prepend>
                      <v-icon color="success">mdi-pencil</v-icon>
                    </template>
                    <v-list-item-title>エンティティ編集</v-list-item-title>
                    <v-list-item-subtitle>
                      既存のエンティティラベルをクリックして範囲やラベルを修正できます
                    </v-list-item-subtitle>
                  </v-list-item>

                  <v-list-item>
                    <template v-slot:prepend>
                      <v-icon color="error">mdi-delete</v-icon>
                    </template>
                    <v-list-item-title>エンティティ削除</v-list-item-title>
                    <v-list-item-subtitle>
                      既存のエンティティラベルを右クリックして削除できます
                    </v-list-item-subtitle>
                  </v-list-item>

                  <v-list-item>
                    <template v-slot:prepend>
                      <v-icon color="warning">mdi-cog</v-icon>
                    </template>
                    <v-list-item-title>設定オプション</v-list-item-title>
                    <v-list-item-subtitle>
                      <v-switch
                        v-model="allowOverlapping"
                        label="重なりを許可"
                        density="compact"
                        hide-details
                      />
                      <v-switch
                        v-model="graphemeMode"
                        label="グラフェームモード"
                        density="compact"
                        hide-details
                      />
                      <v-switch
                        v-model="rtl"
                        label="右から左（RTL）"
                        density="compact"
                        hide-details
                      />
                    </v-list-item-subtitle>
                  </v-list-item>
                </v-list>

                <v-alert type="info" class="mt-4">
                  <strong>ヒント:</strong>
                  エンティティの追加・編集・削除は、ダイアログで確認後に実行されます。
                </v-alert>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>
