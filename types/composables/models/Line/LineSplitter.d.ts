import { Text } from "../Label/Text";
import { TextLine } from "./LineText";
import { WidthManager } from "./WidthManager";
import { Font } from "./Font";
export interface BaseLineSplitter {
    split(text: Text): TextLine[];
}
export declare class TextLineSplitter implements BaseLineSplitter {
    private widthManager;
    private font;
    constructor(widthManager: WidthManager, font: Font);
    split(text: Text): TextLine[];
    private needsNewline;
    private calculateWordLength;
}
