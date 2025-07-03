import type { CandidateEntity } from '../composables/useEntityCRUD';
interface Props {
    candidateEntity: CandidateEntity;
    entityLabels: Array<{
        id: number;
        text: string;
        color?: string;
    }>;
    dialog4Adding: boolean;
    dialog4Updating: boolean;
    dialog4Deleting: boolean;
}
declare const _default: import("vue").DefineComponent<Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {} & {
    updateEntityAddPrefix: () => any;
    updateEntitySubtractPrefix: () => any;
    updateEntityAddSuffix: () => any;
    updateEntitySubtractSuffix: () => any;
    cancel: () => any;
    confirm: (actionType: "add" | "update" | "delete") => any;
    updateCandidateEntityLabel: (value: number) => any;
}, string, import("vue").PublicProps, Readonly<Props> & Readonly<{
    onUpdateEntityAddPrefix?: (() => any) | undefined;
    onUpdateEntitySubtractPrefix?: (() => any) | undefined;
    onUpdateEntityAddSuffix?: (() => any) | undefined;
    onUpdateEntitySubtractSuffix?: (() => any) | undefined;
    onCancel?: (() => any) | undefined;
    onConfirm?: ((actionType: "add" | "update" | "delete") => any) | undefined;
    onUpdateCandidateEntityLabel?: ((value: number) => any) | undefined;
}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default _default;
