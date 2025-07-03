import type { App } from 'vue';
import VAnnotator from './components/VAnnotator.vue';
import EntityDialogs from './components/EntityDialogs.vue';
import './assets/font-optimizations.css';
export type { EntityData, CandidateEntity } from './composables/useEntityCRUD';
export * from './composables/utils/fontUtils';
export interface VAnnotatorV3Options {
    enableFontOptimizations?: boolean;
    fontLoadingTimeout?: number;
}
export declare const VAnnotatorV3: {
    install(app: App, options?: VAnnotatorV3Options): void;
};
export { VAnnotator, EntityDialogs };
export default VAnnotatorV3;
