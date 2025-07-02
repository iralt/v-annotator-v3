<script setup lang="ts">
import { ref, computed, reactive } from "vue";
import { v4 as uuidv7 } from "uuid";
import VAnnotator from "@/components/VAnnotator.vue";
import DialogTest from "@/components/DialogTest.vue";

const itemId = ref(1);
const text = ref(
  "ここ数年ずっと言われているんですけれども、やっぱり吉田正尚の後を打つバッターですね、和田さん。特にオリックス打線の方が少し点を取る意味では苦しんでいるということもあるんですけれども。ロッテは5番の、ファーストの、レアードから始まります。"
);

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
}>({});
const dialog4Adding = ref<boolean>(false);
const dialog4Updating = ref<boolean>(false);
const dialog4Deleting = ref<boolean>(false);

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

//// Adding, Updating, Deleting Entities ////////
const addEntity = (event, startOffset, endOffset, text) => {
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

const message = ref("");
const dialogVisible = ref(false);

const showMessage = () => {
  message.value = "V-Annotator V3 ライブラリが正常に動作しています！";
};

const openDialog = () => {
  dialogVisible.value = true;
};
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
                <div class="d-flex gap-2 flex-wrap">
                  <v-btn color="primary" @click="showMessage">
                    テストボタン
                  </v-btn>
                  <v-btn color="secondary" @click="openDialog">
                    ダイアログを開く
                  </v-btn>
                </div>
                <v-alert v-if="message" type="success" class="mt-4">
                  {{ message }}
                </v-alert>

                <hr class="my-4" />

                <v-annotator
                  :claim-id="itemId"
                  :text="text"
                  :entities="entities"
                  :entity-labels="entityLabels"
                  :selected-entities="selectedEntities"
                  @add:entity="addEntity"
                  @click:entity="updateEntity"
                  @contextmenu:entity="deleteEntity"
                  :allow-overlapping="allowOverlapping"
                  :grapheme-mode="graphemeMode"
                  :relations="relations"
                  :relation-labels="relationLabels"
                  :rtl="rtl"
                />
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>

        <!-- v-annotator dialogs -->
        <v-dialog v-model="dialog4Adding" max-width="500">
          <v-card color="rgba(255, 255, 255, 0.85)" class="ma-3">
            <v-card-title class="text-h5"> 追加しますか？ </v-card-title>
            <v-card-subtitle>
              追加する場合は、ラベルを選んで、<v-btn
                color="green"
                variant="tonal"
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
                  color="blue"
                >
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
                color="green darken-1"
                variant="tonal"
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
                  color="blue"
                >
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
            <v-card>
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

    <DialogTest
      v-model="dialogVisible"
      title="テストダイアログ"
      max-width="600px"
    >
      <p>これはV-Annotator V3のダイアログコンポーネントです。</p>
      <p>
        ボタンを押すことで表示され、外部のアプリケーションからもimportして使用できます。
      </p>
      <template #actions>
        <v-btn color="grey" @click="dialogVisible = false"> キャンセル </v-btn>
        <v-btn color="primary" @click="dialogVisible = false"> OK </v-btn>
      </template>
    </DialogTest>
  </v-app>
</template>

<style scoped></style>
