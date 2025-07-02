<script setup lang="ts">
import type { CandidateEntity } from '@/composables/useEntityCRUD'

interface Props {
  candidateEntity: CandidateEntity
  entityLabels: Array<{ id: number; text: string; color: string }>
  dialog4Adding: boolean
  dialog4Updating: boolean
  dialog4Deleting: boolean
}

interface Emits {
  (e: 'cancel'): void
  (e: 'confirm', actionType: 'add' | 'update' | 'delete'): void
  (e: 'updateEntityAddPrefix'): void
  (e: 'updateEntitySubtractPrefix'): void
  (e: 'updateEntityAddSuffix'): void
  (e: 'updateEntitySubtractSuffix'): void
}

defineProps<Props>()
defineEmits<Emits>()
</script>

<template>
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

        <v-btn color="grey darken-1" text @click="$emit('cancel')">
          キャンセル
        </v-btn>

        <v-btn
          color="primary"
          variant="flat"
          @click="$emit('confirm', 'add')"
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
                @click="$emit('updateEntityAddPrefix')"
                size="small"
                color="indigo"
                ><v-icon>mdi-plus</v-icon></v-btn
              >
            </div>
            <div class="mx-2 mt-1">前</div>
            <div>
              <v-btn
                @click="$emit('updateEntitySubtractPrefix')"
                size="small"
                color="indigo"
                ><v-icon>mdi-minus</v-icon></v-btn
              >
            </div>

            <v-spacer></v-spacer>

            <div>
              <v-btn
                @click="$emit('updateEntitySubtractSuffix')"
                size="small"
                color="indigo"
                ><v-icon>mdi-minus</v-icon></v-btn
              >
            </div>
            <div class="mx-2 mt-1">後</div>
            <div>
              <v-btn
                @click="$emit('updateEntityAddSuffix')"
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

        <v-btn color="grey darken-1" text @click="$emit('cancel')">
          キャンセル
        </v-btn>

        <v-btn
          color="green darken-1"
          variant="tonal"
          @click="$emit('confirm', 'update')"
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

        <v-btn color="grey darken-1" text @click="$emit('cancel')">
          キャンセル
        </v-btn>

        <v-btn
          color="red darken-1"
          variant="tonal"
          @click="$emit('confirm', 'delete')"
        >
          削除
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
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