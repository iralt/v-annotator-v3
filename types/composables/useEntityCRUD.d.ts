import { type Ref } from 'vue';
import { Entity } from './models/Label/Entity';
export interface EntityData {
    id: string | number;
    startOffset: number;
    endOffset: number;
    label: number;
    user?: number;
    text: string;
}
export interface CandidateEntity {
    id?: number | string;
    startOffset?: number;
    endOffset?: number;
    label?: number;
    user?: number;
    text?: string;
}
export declare function useEntityCRUD(entitiesData: Ref<EntityData[]>, text: Ref<string>): {
    dialog4Adding: Ref<boolean, boolean>;
    dialog4Updating: Ref<boolean, boolean>;
    dialog4Deleting: Ref<boolean, boolean>;
    openAddingDialog: () => void;
    closeAddingDialog: () => void;
    openUpdatingDialog: () => void;
    closeUpdatingDialog: () => void;
    openDeletingDialog: () => void;
    closeDeletingDialog: () => void;
    closeAllDialogs: () => void;
    entities: import("vue").ComputedRef<Entity[]>;
    candidateEntity: Ref<{
        id?: number | string | undefined;
        startOffset?: number | undefined;
        endOffset?: number | undefined;
        label?: number | undefined;
        user?: number | undefined;
        text?: string | undefined;
    }, CandidateEntity | {
        id?: number | string | undefined;
        startOffset?: number | undefined;
        endOffset?: number | undefined;
        label?: number | undefined;
        user?: number | undefined;
        text?: string | undefined;
    }>;
    addEntityWithDialog: (_event: any, startOffset: number, endOffset: number, textValue: string) => void;
    updateEntityWithDialog: (_event: any, id: number | string) => void;
    deleteEntityWithDialog: (entity: Entity) => void;
    updateEntityAddPrefix: () => void;
    updateEntitySubtractPrefix: () => void;
    updateEntityAddSuffix: () => void;
    updateEntitySubtractSuffix: () => void;
    confirmAction: (actionType: "add" | "update" | "delete") => void;
    cancelAction: () => void;
};
