import type { App } from 'vue'
import VAnnotator from './components/VAnnotator.vue'
import EntityDialogs from './components/EntityDialogs.vue'

// Export types for external use
export type { EntityData, CandidateEntity } from './composables/useEntityCRUD'

export interface VAnnotatorV3Options {
  // ライブラリの設定オプション
}

export const VAnnotatorV3 = {
  install(app: App, _options?: VAnnotatorV3Options) {
    app.component('VAnnotator', VAnnotator)
    app.component('EntityDialogs', EntityDialogs)
  }
}

// Export individual components
export { VAnnotator, EntityDialogs }

// Export plugin as default
export default VAnnotatorV3