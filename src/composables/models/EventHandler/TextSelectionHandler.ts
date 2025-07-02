import { TextLine } from "../Line/LineText";
import { Entities } from "../Label/Entity";
import { Text } from "../Label/Text";

export class TextSelector {
  constructor(
    private readonly allowOverlapping: boolean,
    private readonly graphemeMode: boolean
  ) {}

  /**
   * Returns the offsets of the selected text.
   * @param {Entities} entities - To decide whether or not the offsets overlap the entities.
   * @param {Text} text - To convert the code point offsets to the grapheme offsets.
   * @returns {[number, number]} - The offsets of the selected text.
   */
  getOffsets(entities: Entities, text: Text): [number, number] {
    // console.log('Starting getOffsets with entities:', entities, 'and text:', text);
    const [startOffset, endOffset] = this.getRange();
    console.log('Range received:', startOffset, endOffset);

    if (this.validate(startOffset, endOffset, entities)) {
      // console.log('Validation passed for:', startOffset, endOffset);
      const convertedOffsets = this.convert(startOffset, endOffset, text);
      // console.log('Converted offsets:', convertedOffsets);
      return convertedOffsets;
    } else {
      // console.error(`Validation failed for range: [${startOffset}, ${endOffset}]`);
      throw new RangeError(`[${startOffset}, ${endOffset}] is invalid.`);
    }
  }

  private getRange(): [number, number] {
    const selection = window.getSelection();
    // console.log('Selection:', selection);
    if (!selection || selection.rangeCount === 0) {
        // console.error('No selection found or no range.');
        return [0, 0];  // 選択がない場合、デフォルト値を返す
    }

    const startElement = selection.anchorNode?.parentNode;
    const endElement = selection.focusNode?.parentNode;

    // console.log('Start Element:', startElement);
    // console.log('End Element:', endElement);

    if (!startElement || !endElement) {
        // console.error('Start or end element not found.');
        return [0, 0];
    }

    const startLine = (
      startElement as unknown as { annotatorElement: TextLine }
    ).annotatorElement;
    const endLine = (endElement as unknown as { annotatorElement: TextLine })
      .annotatorElement;

    if (!startLine || !endLine) {
        // console.error('Start or end line object not found.');
        // console.error('Start Line:', startLine);
        // console.error('End Line:', endLine);
        return [0, 0];
    }

    // console.log('Start Line:', startLine);
    // console.log('End Line:', endLine);

    const startOffset = startLine.startOffset + selection.anchorOffset;
    const endOffset = endLine.startOffset + selection.focusOffset;

    // console.log('Start Offset:', startOffset);
    // console.log('End Offset:', endOffset);

    selection.removeAllRanges();
    return startOffset > endOffset ? [endOffset, startOffset] : [startOffset, endOffset];
}


  private validate(
    startOffset: number,
    endOffset: number,
    entities: Entities
  ): boolean {
    if (startOffset >= endOffset) {
      return false;
    }
    if (this.allowOverlapping) {
      return true;
    }
    if (entities.intersectAny(startOffset, endOffset)) {
      return false;
    }
    return true;
  }

  private convert(
    startOffset: number,
    endOffset: number,
    text: Text
  ): [number, number] {
    if (this.graphemeMode) {
      return [
        text.toGraphemeOffset(startOffset)!,
        text.toGraphemeOffset(endOffset)!,
      ];
    } else {
      return [startOffset, endOffset];
    }
  }
}
