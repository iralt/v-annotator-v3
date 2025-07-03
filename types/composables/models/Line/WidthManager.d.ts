export interface WidthManager {
    width: number;
    maxWidth: number;
    add(width: number): void;
    reset(): void;
    isFull(wordOrLabelWidth: number): boolean;
    isEmpty(): boolean;
    canAdd(width: number): boolean;
}
export declare class LineWidthManager implements WidthManager {
    private maxLineWidth;
    private maxLabelWidth;
    private totalWidth;
    constructor(maxLineWidth: number, maxLabelWidth: number);
    get width(): number;
    get maxWidth(): number;
    add(width: number): void;
    reset(): void;
    isFull(wordOrLabelWidth?: number): boolean;
    canAdd(width: number): boolean;
    isEmpty(): boolean;
}
