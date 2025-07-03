export declare class Font {
    readonly fontSize: number;
    readonly fontFamily: string;
    readonly fontWeight: string;
    readonly lineHeight: number;
    readonly width: Map<string, number>;
    constructor(fontSize: number, fontFamily: string, fontWeight: string, lineHeight: number, width: Map<string, number>);
    widthOf(text: string, return_max?: boolean): number;
    widthOfChar(ch: string): number;
    static create(text: string, textElement: SVGTextElement): Promise<Font>;
    static createSync(text: string, textElement: SVGTextElement): Font;
}
