import type { App } from 'vue';
import VAnnotator from './components/VAnnotator.vue';
import EntityDialogs from './components/EntityDialogs.vue';
export type { EntityData, CandidateEntity } from './composables/useEntityCRUD';
export interface VAnnotatorV3Options {
}
export declare const VAnnotatorV3: {
    install(app: App, _options?: VAnnotatorV3Options): void;
};
export { VAnnotator, EntityDialogs };
export default VAnnotatorV3;
