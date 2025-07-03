import { measureTextWithFallback, waitForSVGFonts } from '../../utils/fontUtils';

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
      console.log('Starting optimized SVG font loading process...');
      
      // Shortened timeouts to prevent blocking
      const fontReady = await Promise.race([
        waitForSVGFonts(textElement, { 
          timeout: 1000,  // Reduced from 5000 
          retryCount: 2,  // Reduced from 5
          retryDelay: 100 // Reduced from 200
        }),
        new Promise<boolean>(resolve => setTimeout(() => resolve(false), 1500)) // Overall timeout
      ]);
      
      if (!fontReady) {
        console.warn('SVG font loading verification timeout, using sync fallback immediately');
        return Font.createSync(text, textElement);
      }

      // Quick measurement with minimal retries
      const width = await measureTextWithFallback(text, textElement, {
        timeout: 1000,    // Reduced from 3000
        retryCount: 1,    // Reduced from 3
        retryDelay: 50    // Reduced from 150
      });

      // Extract font information
      const fontSize = parseFloat(window.getComputedStyle(textElement).fontSize);
      const fontFamily = window.getComputedStyle(textElement).fontFamily;
      const fontWeight = window.getComputedStyle(textElement).fontWeight;
      const lineHeight = textElement.getBoundingClientRect().height;
      
      console.log(`✅ Fast SVG font measurement completed: ${fontFamily} ${fontSize}px`);
      return new Font(fontSize, fontFamily, fontWeight, lineHeight, width);
    } catch (error) {
      console.warn('❌ Font creation failed, using synchronous fallback:', error);
      return Font.createSync(text, textElement);
    }
  }

  static createSync(text: string, textElement: SVGTextElement): Font {
    // Calculate font width
    const characterSet = new Set(text);
    const width = new Map<string, number>();
    characterSet.delete("\n");
    const characterArray = Array.from(characterSet);
    characterArray.sort();
    
    textElement.textContent = characterArray.join("");
    
    // Measure each character
    for (let i = 0; i < textElement.getNumberOfChars(); i++) {
      const ch = textElement.textContent.charAt(i);
      try {
        const charWidth = textElement.getExtentOfChar(i).width;
        width.set(ch, charWidth);
      } catch (error) {
        // Fallback for measurement failure
        console.warn(`Font measurement failed for character '${ch}', using fallback`);
        width.set(ch, 10);
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
