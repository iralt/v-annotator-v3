import { Entity, Entities } from "./Entity";
import { Identifiable } from "./Identifiable";
export interface Relation {
    id: number;
    labelId: number;
    fromId: number;
    toId: number;
}
export declare class RelationListItem implements Identifiable {
    readonly id: number;
    readonly labelId: number;
    readonly fromEntity: Entity;
    readonly toEntity: Entity;
    constructor(id: number, labelId: number, fromEntity: Entity, toEntity: Entity);
    /**
     * Return true if the relation and start/end offset has some overlapping.
     * @param {number} startOffset - start offset of something(maybe entity or relation)
     * @param {number} endOffset - end offset of something(maybe entity or relation)
     * @returns {boolean} - true if there is an overlapping, otherwise false.
     */
    isIn(startOffset: number, endOffset: number): boolean;
    /**
     * Return true if entity is a part of the relation.
     * @param {Entity} entity - an entity.
     * @returns {boolean} - true if the entity is a part of the relation, otherwise false.
     */
    consistOf(entity: Entity): boolean;
    /**
     * Return true if the left side is open, otherwise return false.
     * If the start offset of the relation is smaller than that of text line,
     *   this should return true because I assume that
     *   the vertical line of the relation starts with the first line of the entity.
     * This may be in trouble when the first line is smaller than the second line.
     * @param {number} startOffset - start offset of a text line.
     * @returns {boolean} - the result.
     */
    isOpenOnLeft(startOffset: number): boolean;
    /**
     * Return true if the right side is open, otherwise return false.
     * If the start offset of the entity1 which appears after the another entity
     *   is larger than the end offset of text line,
     *   this should return true because I assume that the vertical line of the
     *   relation starts with the entity1.
     * @param {number} endOffset - end offset of a text line.
     * @returns {boolean} - the result.
     */
    isOpenOnRight(endOffset: number): boolean;
    /**
     * Return true if the relation is visible, otherwise return false.
     * If the start offset of either entity is after the start offset of
     *   the TextLine, it should be visible.
     * @param {number} startOffset - start offset of a text line.
     * @returns {boolean} - the result.
     */
    isVisible(startOffset: number): boolean;
    /**
     * Return width between centers of each entity.
     * @returns {number} - the width between each entity.
     */
    get width(): number;
    /**
     * Return start offset of the relation.
     * The value is a smaller value of the two entities.
     * @returns {number} - the start offset.
     */
    get startOffset(): number;
    /**
     * Return end offset of the relation.
     * The value is a bigger value of the two entities.
     * @returns {number} - the end offset.
     */
    get endOffset(): number;
}
export declare class RelationList {
    private tree;
    constructor(relations: Relation[], entities: Entities);
    /**
     * Filter relations by the provided start/end offsets.
     * @param {number} startOffset - the start offset.
     * @param {number} endOffset - the end offset.
     * @returns {RelationListItem[]} - An array with the filtered relations.
     */
    filterByRange(startOffset: number, endOffset: number): RelationListItem[];
}
