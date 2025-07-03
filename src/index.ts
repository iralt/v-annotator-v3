import type { App } from 'vue'
import VAnnotator from './components/VAnnotator.vue'
import EntityDialogs from './components/EntityDialogs.vue'
// Temporarily disable CSS optimizations to test
// import './assets/font-optimizations.css'

// Export types for external use
export type { EntityData, CandidateEntity } from './composables/useEntityCRUD'

// Export font utilities for external use
export * from './composables/utils/fontUtils'

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