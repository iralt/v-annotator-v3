import type { App } from 'vue'
import DialogTest from './components/DialogTest.vue'

export interface VAnnotatorV3Options {
  // ライブラリの設定オプション
}

export const VAnnotatorV3 = {
  install(app: App, _options?: VAnnotatorV3Options) {
    app.component('DialogTest', DialogTest)
  }
}

export { DialogTest }
export default VAnnotatorV3