import { LabelList } from "../Label/Label";
import { RelationListItem } from "../Label/Relation";
import { GeometricEntity } from "./LineEntity";
import { TextLine } from "./LineText";
export interface LineRelation {
    x1: number;
    x2: number;
    label: string;
    labelWidth: number;
    level: number;
    relation: RelationListItem;
    marker: string;
    openLeft: boolean;
    openRight: boolean;
}
export declare class RelationLine {
    private relations;
    private relationLabels;
    private textLine;
    private left;
    private right;
    private levelManager;
    constructor(relations: RelationListItem[], relationLabels: LabelList, textLine: TextLine, left: number, right: number);
    render(entities: GeometricEntity[], rtl: boolean): LineRelation[];
}
