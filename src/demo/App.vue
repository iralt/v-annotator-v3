<script setup lang="ts">
import { ref, computed, reactive } from "vue";
import { v7 as uuidv7 } from "uuid";
import VAnnotator from "@/components/VAnnotator.vue";

const text = ref(
  "ここ数年ずっと言われているんですけれども、やっぱり吉田正尚の後を打つバッターですね、和田さん。特にオリックス打線の方が少し点を取る意味では苦しんでいるということもあるんですけれども。ロッテは5番の、ファーストの、レアードから始まります。"
);

// sample data
const entities = ref([
  {
    id: 1,
    startOffset: 25,
    endOffset: 29,
    label: 1,
    user: 11,
    text: "吉田正尚",
  },
  { id: 2, startOffset: 42, endOffset: 44, label: 6, user: 11, text: "和田" },
  {
    id: 3,
    startOffset: 49,
    endOffset: 54,
    label: 4,
    user: 11,
    text: "オリックス",
  },
  { id: 4, startOffset: 91, endOffset: 94, label: 4, user: 11, text: "ロッテ" },
  {
    id: 5,
    startOffset: 106,
    endOffset: 110,
    label: 1,
    user: 11,
    text: "レアード",
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
const allowOverlapping = ref<boolean>(true); // 重なりを許可するかどうか
const graphemeMode = ref<boolean>(false);
const rtl = ref<boolean>(false);

const candidateEntity = ref<{
  id?: string;
  startOffset?: number;
  endOffset?: number;
  label?: number;
  user?: number;
  text?: string;
}>({
  id: "",
  startOffset: 0,
  endOffset: 0,
  label: 1,
  user: 1,
  text: "",
});
const dialog4Adding = ref<boolean>(false);
const dialog4Updating = ref<boolean>(false);
const dialog4Deleting = ref<boolean>(false);

//// Adding, Updating, Deleting Entities ////////
const addEntity = (
  event: any,
  startOffset: number,
  endOffset: number,
  text: string
) => {
  console.log("parent addEntity", startOffset, endOffset, text);
  dialog4Adding.value = true;
  candidateEntity.value = {
    id: uuidv7(),
    startOffset,
    endOffset,
    label: 1,
    // user: userId.value,
    text: text.substring(startOffset, endOffset),
  };
};

const confirmAddingEntity = (): void => {
  console.log("confirmAddingEntity");
  entities.value.push(candidateEntity.value);
  candidateEntity.value = {};
  dialog4Adding.value = false;
};

const cancelAddingEntity = () => {
  console.log("cancelAddingEntity");
  candidateEntity.value = {};
  dialog4Adding.value = false;
};

const updateEntity = (event, id) => {
  dialog4Updating.value = true;
  console.log("updateEntity", id);
  candidateEntity.value = JSON.parse(
    JSON.stringify(entities.value.find((e) => e.id == id))
  );
  // console.log("candidateEntity.value", candidateEntity.value);
};

const updateEntityAddPrefix = () => {
  console.log("updateEntityAddPrefix");
  candidateEntity.value.startOffset -= 1;
  candidateEntity.value.text = text.value.substring(
    candidateEntity.value.startOffset,
    candidateEntity.value.endOffset
  );
};

const updateEntitySubtractPrefix = () => {
  console.log("updateEntitySubtractPrefix");
  candidateEntity.value.startOffset += 1;
  candidateEntity.value.text = text.value.substring(
    candidateEntity.value.startOffset,
    candidateEntity.value.endOffset
  );
};

const updateEntityAddSuffix = () => {
  console.log("updateEntityAddSuffix");
  candidateEntity.value.endOffset += 1;
  candidateEntity.value.text = text.value.substring(
    candidateEntity.value.startOffset,
    candidateEntity.value.endOffset
  );
};

const updateEntitySubtractSuffix = () => {
  console.log("updateEntitySubtractSuffix");
  candidateEntity.value.endOffset -= 1;
  candidateEntity.value.text = text.value.substring(
    candidateEntity.value.startOffset,
    candidateEntity.value.endOffset
  );
};

const confirmUpdatingEntity = () => {
  console.log("confirmUpdatingEntity");
  const entityIndex = entities.value.findIndex(
    (e) => e.id == candidateEntity.value.id
  );
  entities.value.splice(entityIndex, 1, candidateEntity.value);

  candidateEntity.value = {};
  dialog4Updating.value = false;
};

const cancelUpdatingEntity = () => {
  console.log("cancelUpdatingEntity");
  candidateEntity.value = {};
  dialog4Updating.value = false;
};

const deleteEntity = (entity) => {
  dialog4Deleting.value = true;
  console.log("deleteEntity");
  candidateEntity.value = entities.value.find((e) => e.id == entity.id);
};

const confirmDeletingEntity = () => {
  console.log("confirmDeletingEntity");
  dialog4Deleting.value = false;
  entities.value = entities.value.filter(
    (e) => e.id !== candidateEntity.value.id
  );
  candidateEntity.value = {};
  console.log("deleted");
};

const cancelDeletingEntity = () => {
  console.log("cancelDeletingEntity");
  candidateEntity.value = {};
  dialog4Deleting.value = false;
};

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
                  @add:entity="addEntity"
                  @click:entity="updateEntity"
                  @contextmenu:entity="deleteEntity"
                  :allow-overlapping="allowOverlapping"
                  :grapheme-mode="graphemeMode"
                  :rtl="rtl"
                />
              </v-card-text>
            </v-card>

            <v-radio-group>
              <v-radio label="Radio One" value="one"></v-radio>
              <v-radio label="Radio Two" value="two"></v-radio>
              <v-radio label="Radio Three" value="three"></v-radio>
            </v-radio-group>
          </v-col>
        </v-row>

        <!-- v-annotator dialogs -->
        <v-dialog v-model="dialog4Adding" max-width="500">
          <v-card class="ma-3">
            <v-card-title class="text-h5"> 追加しますか？ </v-card-title>
            <v-card-subtitle>
              追加する場合は、ラベルを選んで、<v-btn
                color="primary"
                variant="flat"
                size="small"
                ><b>追加</b></v-btn
              >
              してください
            </v-card-subtitle>

            <v-card-text>
              <v-card variant="outlined">
                <div class="ma-3">
                  <span><small>選択したテキスト:</small></span>
                  <span class="text-h5 text-indigo ml-5"
                    ><b>{{ candidateEntity.text }}</b></span
                  >
                </div>
              </v-card>

              <v-radio-group v-model="candidateEntity.label" row class="mt-5">
                <v-radio
                  v-for="sp in entityLabels"
                  :key="sp.id"
                  :label="`${sp.id}: ${sp.text}`"
                  :value="sp.id"
                  :color="sp.color"
                  class="radio-button-custom"
                >
                  <template v-slot:label>
                    <span class="radio-label" :style="{ color: sp.color }">
                      {{ sp.id }}: {{ sp.text }}
                    </span>
                  </template>
                </v-radio>
              </v-radio-group>
            </v-card-text>
            <!-- {{ candidateEntity }} -->
            <v-card-actions>
              <v-spacer></v-spacer>

              <v-btn color="grey darken-1" text @click="cancelAddingEntity">
                キャンセル
              </v-btn>

              <v-btn
                color="primary"
                variant="flat"
                @click="confirmAddingEntity"
              >
                追加
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>

        <v-dialog v-model="dialog4Updating" max-width="500">
          <v-card color="rgba(255, 255, 255, 1.0)" class="ma-3">
            <v-card-title class="text-h5"> 修正しますか？ </v-card-title>
            <v-card-subtitle>
              修正する場合は、範囲指定をし直すか、ラベルを選んで、<v-btn
                color="green"
                variant="tonal"
                size="small"
                ><b>アップデート</b></v-btn
              >
              してください
            </v-card-subtitle>

            <v-card-text>
              <v-card variant="outlined">
                <div class="ma-3">
                  <span><small>選択したテキスト:</small></span>
                  <span class="text-h5 text-indigo ml-5"
                    ><b>{{ candidateEntity.text }}</b></span
                  >
                </div>

                <hr class="mx-10" />
                <div class="d-flex justify-space-around my-3">
                  <v-spacer></v-spacer>
                  <div>
                    <v-btn
                      @click="updateEntityAddPrefix"
                      size="small"
                      color="indigo"
                      ><v-icon>mdi-plus</v-icon></v-btn
                    >
                  </div>
                  <div class="mx-2 mt-1">前</div>
                  <div>
                    <v-btn
                      @click="updateEntitySubtractPrefix"
                      size="small"
                      color="indigo"
                      ><v-icon>mdi-minus</v-icon></v-btn
                    >
                  </div>

                  <v-spacer></v-spacer>

                  <div>
                    <v-btn
                      @click="updateEntitySubtractSuffix"
                      size="small"
                      color="indigo"
                      ><v-icon>mdi-minus</v-icon></v-btn
                    >
                  </div>
                  <div class="mx-2 mt-1">後</div>
                  <div>
                    <v-btn
                      @click="updateEntityAddSuffix"
                      size="small"
                      color="indigo"
                      ><v-icon>mdi-plus</v-icon></v-btn
                    >
                  </div>
                  <v-spacer></v-spacer>
                </div>
              </v-card>

              <v-radio-group v-model="candidateEntity.label" row class="mt-5">
                <v-radio
                  v-for="sp in entityLabels"
                  :key="sp.id"
                  :label="`${sp.id}: ${sp.text}`"
                  :value="sp.id"
                  :color="sp.color"
                  class="radio-button-custom"
                >
                  <template v-slot:label>
                    <span class="radio-label" :style="{ color: sp.color }">
                      {{ sp.id }}: {{ sp.text }}
                    </span>
                  </template>
                </v-radio>
              </v-radio-group>
            </v-card-text>
            <!-- {{ candidateEntity }} ||| -->
            <v-card-actions>
              <v-spacer></v-spacer>

              <v-btn color="grey darken-1" text @click="cancelUpdatingEntity">
                キャンセル
              </v-btn>

              <v-btn
                color="green darken-1"
                variant="tonal"
                @click="confirmUpdatingEntity"
              >
                アップデート
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>

        <v-dialog v-model="dialog4Deleting" max-width="500">
          <v-card color="rgba(255, 255, 255, 0.85)" class="ma-3">
            <v-card-title class="text-h5"> 削除しますか？ </v-card-title>
            <v-card-subtitle>
              削除する場合は、<v-btn color="red" variant="tonal" size="small"
                ><b>削除</b></v-btn
              >
              をクリックしてください
            </v-card-subtitle>

            <v-card-text>
              <v-card variant="outlined">
                <div class="ma-3">
                  <span><small>選択したテキスト:</small></span>
                  <span class="text-h5 text-indigo ml-5"
                    ><b>{{ candidateEntity.text }}</b></span
                  >
                </div>
              </v-card>
            </v-card-text>
            <!-- {{ candidateEntity }} -->
            <v-card-actions>
              <v-spacer></v-spacer>

              <v-btn color="grey darken-1" text @click="cancelDeletingEntity">
                キャンセル
              </v-btn>

              <v-btn
                color="red darken-1"
                variant="tonal"
                @click="confirmDeletingEntity"
              >
                削除
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <!-- end of v-annotator dialogs -->
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

<style scoped>
.radio-button-custom {
  margin: 8px 0;
}

.radio-button-custom :deep(.v-selection-control) {
  opacity: 1 !important;
}

.radio-button-custom :deep(.v-selection-control__input) {
  opacity: 1 !important;
}

.radio-button-custom :deep(.v-selection-control__wrapper) {
  opacity: 1 !important;
}

.radio-button-custom :deep(.v-radio) {
  opacity: 1 !important;
}

.radio-button-custom :deep(.v-selection-control-group__input) {
  opacity: 1 !important;
}

/* ラジオボタンの円形部分 */
.radio-button-custom :deep(.v-selection-control__input > .v-icon) {
  opacity: 1 !important;
  color: currentColor !important;
  font-size: 20px !important;
}

/* チェックされていない状態 */
.radio-button-custom
  :deep(.v-selection-control:not(.v-selection-control--dirty) .v-icon) {
  color: #666 !important;
  opacity: 0.8 !important;
}

/* チェックされた状態 */
.radio-button-custom :deep(.v-selection-control--dirty .v-icon) {
  color: currentColor !important;
  opacity: 1 !important;
}

/* より具体的なセレクタでアイコンを強制表示 */
.radio-button-custom :deep(.mdi-radiobox-marked),
.radio-button-custom :deep(.mdi-radiobox-blank) {
  opacity: 1 !important;
  color: currentColor !important;
}

.radio-label {
  font-weight: 500;
  font-size: 14px;
  margin-left: 8px;
}
</style>
