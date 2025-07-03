import { Label } from "../composables/models/Label/Label";
import { Relation } from "../composables/models/Label/Relation";
import { Entity } from "../composables/models/Label/Entity";
import { type EntityData } from "../composables/useEntityCRUD";
interface VAnnotatorProps {
    record?: any;
    maxLabelLength?: number;
    text: string;
    entitiesData: EntityData[];
    entityLabels: Label[];
    relations: Relation[];
    relationLabels: Label[];
    allowOverlapping: boolean;
    rtl: boolean;
    graphemeMode: boolean;
    dark: boolean;
    selectedEntities: Entity[];
    editFlag: boolean;
    rightOffeset?: number;
}
declare const _default: import("vue").DefineComponent<VAnnotatorProps, {
    updateFlag: (newFlag: boolean) => void;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "click:entity": (...args: any[]) => void;
    "click:relation": (...args: any[]) => void;
    "contextmenu:entity": (...args: any[]) => void;
    "contextmenu:relation": (...args: any[]) => void;
    "add:entity": (...args: any[]) => void;
    rendered: (...args: any[]) => void;
    "update:entitiesData": (...args: any[]) => void;
}, string, import("vue").PublicProps, Readonly<VAnnotatorProps> & Readonly<{
    "onClick:entity"?: ((...args: any[]) => any) | undefined;
    "onClick:relation"?: ((...args: any[]) => any) | undefined;
    "onContextmenu:entity"?: ((...args: any[]) => any) | undefined;
    "onContextmenu:relation"?: ((...args: any[]) => any) | undefined;
    "onAdd:entity"?: ((...args: any[]) => any) | undefined;
    onRendered?: ((...args: any[]) => any) | undefined;
    "onUpdate:entitiesData"?: ((...args: any[]) => any) | undefined;
}>, {
    text: string;
    entityLabels: Label[];
    maxLabelLength: number;
    record: any;
    entitiesData: EntityData[];
    relations: Relation[];
    relationLabels: Label[];
    allowOverlapping: boolean;
    rtl: boolean;
    graphemeMode: boolean;
    dark: boolean;
    selectedEntities: Entity[];
    editFlag: boolean;
    rightOffeset: number;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default _default;
