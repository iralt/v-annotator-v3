<script setup lang="ts">
import { ref } from "vue";

const message = ref("");

const showMessage = () => {
  message.value = "V-Annotator V3 ライブラリが正常に動作しています！";
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
                <v-btn color="primary" @click="showMessage">
                  テストボタン
                </v-btn>
                <v-alert v-if="message" type="success" class="mt-4">
                  {{ message }}
                </v-alert>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<style scoped></style>
