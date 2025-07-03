import { Entities } from "../Label/Entity";
import { Text } from "../Label/Text";
export declare class TextSelector {
    private readonly allowOverlapping;
    private readonly graphemeMode;
    constructor(allowOverlapping: boolean, graphemeMode: boolean);
    /**
     * Returns the offsets of the selected text.
     * @param {Entities} entities - To decide whether or not the offsets overlap the entities.
     * @param {Text} text - To convert the code point offsets to the grapheme offsets.
     * @returns {[number, number]} - The offsets of the selected text.
     */
    getOffsets(entities: Entities, text: Text): [number, number];
    private getRange;
    private validate;
    private convert;
}
