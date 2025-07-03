import { Identifiable } from "./Identifiable";
export interface Label {
    readonly id: number;
    readonly text: string;
    readonly color?: string;
    readonly backgroundColor?: string;
}
export declare class LabelListItem implements Identifiable {
    readonly id: number;
    readonly text: string;
    readonly color: string;
    readonly textWidth: number;
    readonly maxLength: number;
    constructor(id: number, text: string, color: string, textWidth: number, maxLength?: number);
    get width(): number;
    get truncatedText(): string;
    get truncatedWidth(): number;
}
export declare class EntityLabelListItem extends LabelListItem {
    get width(): number;
}
export declare class RelationLabelListItem extends LabelListItem {
}
export declare class LabelList {
    private labels;
    private id2Label;
    constructor(labels: LabelListItem[]);
    getById(id: number): LabelListItem | undefined;
    getColor(id: number): string | undefined;
    getText(id: number): string | undefined;
    getWidth(id: number): number | undefined;
    get maxLabelWidth(): number;
    static valueOf(maxLabelLength: number, labels: Label[], widths: number[], itemClass: typeof LabelListItem): LabelList;
}
