import type { App } from 'vue'
import VAnnotator from './components/VAnnotator.vue'
import EntityDialogs from './components/EntityDialogs.vue'
// Re-enable safe CSS optimizations for SVG text
import './assets/font-optimizations.css'

// Export types for external use
export type { EntityData, CandidateEntity } from './composables/useEntityCRUD'

// Export font utilities for external use
export * from './composables/utils/fontUtils'

export interface VAnnotatorV3Options {
  enableFontOptimizations?: boolean;
  fontLoadingTimeout?: number;
}

export const VAnnotatorV3 = {
  install(app: App, options?: VAnnotatorV3Options) {
    app.component('VAnnotator', VAnnotator)
    app.component('EntityDialogs', EntityDialogs)
    
    // Provide global configuration for font loading
    if (options) {
      app.provide('vAnnotatorOptions', options)
    }
  }
}

// Export individual components
export { VAnnotator, EntityDialogs }

// Export plugin as default
export default VAnnotatorV3