<script setup lang="ts">
interface Props {
  modelValue: boolean
  title?: string
  maxWidth?: string | number
  persistent?: boolean
}

interface Emits {
  (e: 'update:modelValue', value: boolean): void
}

withDefaults(defineProps<Props>(), {
  title: 'ダイアログ',
  maxWidth: '500px',
  persistent: false
})

const emit = defineEmits<Emits>()

const updateDialog = (value: boolean) => {
  emit('update:modelValue', value)
}
</script>

<template>
  <v-dialog
    :model-value="modelValue"
    :max-width="maxWidth"
    :persistent="persistent"
    @update:model-value="updateDialog"
  >
    <v-card>
      <v-card-title class="text-h5">
        {{ title }}
      </v-card-title>
      <v-card-text>
        <slot>
          <p>V-Annotator V3 ダイアログコンポーネントです。</p>
          <p>カスタムコンテンツはslotで渡すことができます。</p>
        </slot>
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <slot name="actions">
          <v-btn color="primary" @click="updateDialog(false)">
            閉じる
          </v-btn>
        </slot>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<style scoped>
</style>