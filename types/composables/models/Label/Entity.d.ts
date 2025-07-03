import { Text } from "./Text";
import { Identifiable } from "./Identifiable";
export declare class Entity implements Identifiable {
    readonly id: number | string;
    readonly label: number;
    readonly startOffset: number;
    readonly endOffset: number;
    readonly text?: string;
    constructor(id: number | string, label: number, startOffset: number, endOffset: number, text?: string);
    /**
     * Return true if the entity and start/end offset has some overlapping.
     * @param {number} startOffset - start offset of something(maybe entity or relation)
     * @param {number} endOffset - end offset of something(maybe entity or relation)
     * @returns {boolean} - true if there is an overlapping, otherwise false.
     */
    isIn(startOffset: number, endOffset: number): boolean;
    /**
     * Return true if the provided entity equals to the entity.
     * @param {Entity} other - the provided entity.
     * @returns {boolean}
     */
    equalTo(other: Entity): boolean;
    /**
     * Return true if the entity is located after the given offset.
     * @param {number} offset - The offset.
     * @returns {boolean} - true if offset <= this.startOffset.
     */
    startsAfter(offset: number): boolean;
    /**
     * Return the center offset of the entity.
     * This is used to calculate the width of the relation.
     */
    get center(): number;
    /**
     * Get the text content. Returns stored text if available, otherwise extracts from source text.
     * @param {string} sourceText - The source text to extract from (optional if text is stored).
     * @returns {string} - The text content.
     */
    getText(sourceText?: string): string;
}
export declare class Entities {
    private tree;
    private id2entity;
    constructor(entities: Entity[]);
    static valueOf(entities: Entity[], text?: Text): Entities;
    /**
     * Returns the number of entities.
     * @returns {number} - The number of entities.
     */
    get size(): number;
    /**
     * Returns the entity that matches the provided id.
     *   If no match is found, undefined is returned.
     * @param {number | string} id - the entity id.
     * @returns {(Entity | undefined)} - Entity if match is found, otherwise undefined.
     */
    findById(id: number | string): Entity | undefined;
    /**
     * Filter entities by the provided start/end offsets.
     * @param {number} startOffset - the start offset.
     * @param {number} endOffset - the end offset.
     * @returns {RelationListItem[]} - An array with the filtered entities.
     */
    filterByRange(startOffset: number, endOffset: number): Entity[];
    /**
     * Returns true if intersection between given offsets and entities found.
     * @param {number} startOffset - the start offset.
     * @param {number} endOffset - the end offset.
     * @returns {boolean} - true if intersection found, otherwise false.
     */
    intersectAny(startOffset: number, endOffset: number): boolean;
}
