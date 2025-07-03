export declare class Text {
    readonly text: string;
    private graphemes;
    private g2c;
    private c2g;
    private idx2len;
    constructor(text: string);
    private setCodePointMapping;
    private setGraphemeMapping;
    private setWordBoundary;
    /**
     * Returns the word of the specified index.
     *   If there is no word at the index, returns undefined.
     * @param {number} index  - An integer between 0 and this.codePointLength.
     * @returns {(string | undefined)} - a word or undefined.
     */
    getWord(index: number): string | undefined;
    /**
     * Converts the given codePointOffset to the graphemeOffset.
     *   If there is no corresponding offset, returns undefined.
     * @param {number} codePointOffset - An integer between 0 and this.codePointLength.
     * @returns {(number | undefined)} - A graphemeOffset or undefined.
     */
    toGraphemeOffset(codePointOffset: number): number | undefined;
    /**
     * Converts the given graphemeOffset to the codePointOffset.
     * @param {number} graphemeOffset - An integer between 0 and this.graphemeLength.
     * @returns {(number | undefined)} - A codePointOffset or undefined.
     */
    toCodePointOffset(graphemeOffset: number): number | undefined;
    /**
     * The index of the graphemes to be returned.
     *   If index is out of range, this returns empty string;
     * @param {number} index - An integer between 0 and this.graphemeLength.
     * @returns {string} - A grapheme.
     */
    graphemeAt(index: number): string;
    /**
     * Returns a new string consisting of the single UTF-16 code unit.
     *   If index is out of range, this returns empty string.
     * @param {number} index - An integer between 0 and this.codePointLength.
     * @returns {string} - A character.
     */
    charAt(index: number): string;
    /**
     * Return text length by grapheme clusters.
     * @returns {number} - text length.
     */
    get graphemeLength(): number;
    /**
     * Return text length by CodePoints.
     * @returns {number} - text length.
     */
    get codePointLength(): number;
    /**
     * Return substring of the text.
     * @param {number} from - The Unicode CodePoint offset.
     * @param {number} length - The length. The unit is per CodePoint.
     * @returns {string} - text.
     */
    substr(from: number, length: number): string;
}
