import { Entity } from "../Label/Entity";
import { LabelList } from "../Label/Label";
import { TextLine } from "./LineText";
export declare class GeometricEntity {
    readonly entity: Entity;
    readonly ranges: Ranges;
    readonly level: number;
    constructor(entity: Entity, ranges: Ranges, level: number);
    get center(): number;
}
export declare class Range {
    readonly x1: number;
    readonly x2: number;
    constructor(x1: number, x2: number);
    get center(): number;
    getInterval(rtl?: boolean, labelWidth?: number): [number, number];
}
export declare class Ranges {
    readonly rtl: boolean;
    private _items;
    constructor(rtl?: boolean);
    get items(): Range[];
    add(x1: number, x2: number): void;
    get first(): Range;
    get center(): number;
    getIntervals(startsWith: boolean, labelWidth: number): [number, number][];
}
export declare class EntityLine {
    private textLine;
    private rtl;
    private levelManager;
    constructor(textLine: TextLine, rtl?: boolean);
    render(element: SVGTextElement, entities: Entity[], entityLabels: LabelList): GeometricEntity[];
    private createRanges;
}
