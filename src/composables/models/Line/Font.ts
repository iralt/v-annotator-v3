import { measureTextWithFallback, getFallbackCharWidth } from '../../utils/fontUtils';

export class Font {
  constructor(
    readonly fontSize: number,
    readonly fontFamily: string,
    readonly fontWeight: string,
    readonly lineHeight: number,
    readonly width: Map<string, number>
  ) {}

  widthOf(text: string, return_max = false): number {
    if (return_max) {
      return Math.max(
        ...Array.from(text).map((ch) => this.widthOfChar(ch)),
        20
      ); // Todo: return fixed width
    } else {
      return Array.from(text)
        .map((ch) => this.widthOfChar(ch))
        .reduce((a: number, b: number) => a + b, 0);
    }
  }

  widthOfChar(ch: string): number {
    return this.width.get(ch) || 0;
  }

  static async create(text: string, textElement: SVGTextElement): Promise<Font> {
    try {
      // Use utility function for font measurement with fallback
      const width = await measureTextWithFallback(text, textElement);

      // Extract font information
      const fontSize = parseFloat(window.getComputedStyle(textElement).fontSize);
      const fontFamily = window.getComputedStyle(textElement).fontFamily;
      const fontWeight = window.getComputedStyle(textElement).fontWeight;
      const lineHeight = textElement.getBoundingClientRect().height;
      
      return new Font(fontSize, fontFamily, fontWeight, lineHeight, width);
    } catch (error) {
      console.warn('Font creation failed, using synchronous fallback:', error);
      return Font.createSync(text, textElement);
    }
  }

  static createSync(text: string, textElement: SVGTextElement): Font {
    // Fallback to synchronous measurement
    const characterSet = new Set(text);
    const width = new Map<string, number>();
    characterSet.delete("\n");
    const characterArray = Array.from(characterSet);
    characterArray.sort();
    
    textElement.textContent = characterArray.join("");
    
    try {
      for (let i = 0; i < textElement.getNumberOfChars(); i++) {
        const ch = textElement.textContent.charAt(i);
        const charWidth = textElement.getExtentOfChar(i).width;
        // Use fallback if width is too small or zero
        if (charWidth > 0.5) {
          width.set(ch, charWidth);
        } else {
          const fontSize = parseFloat(window.getComputedStyle(textElement).fontSize) || 16;
          width.set(ch, getFallbackCharWidth(ch, fontSize));
          console.warn(`Using fallback width for character '${ch}': ${charWidth} -> ${getFallbackCharWidth(ch, fontSize)}`);
        }
      }
    } catch (error) {
      console.warn('Synchronous font measurement failed, using fallback widths:', error);
      const fontSize = parseFloat(window.getComputedStyle(textElement).fontSize) || 16;
      for (const ch of characterArray) {
        width.set(ch, getFallbackCharWidth(ch, fontSize));
      }
    }
    
    width.set("\n", 0);

    // Extract font information
    const fontSize = parseFloat(window.getComputedStyle(textElement).fontSize);
    const fontFamily = window.getComputedStyle(textElement).fontFamily;
    const fontWeight = window.getComputedStyle(textElement).fontWeight;
    const lineHeight = textElement.getBoundingClientRect().height;
    textElement.textContent = "";
    
    return new Font(fontSize, fontFamily, fontWeight, lineHeight, width);
  }
}
