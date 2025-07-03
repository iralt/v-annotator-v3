export interface FontLoadingOptions {
  timeout?: number;
  retryCount?: number;
  retryDelay?: number;
}

export async function waitForFonts(options: FontLoadingOptions = {}): Promise<void> {
  const { timeout = 5000 } = options;
  
  if (typeof document === 'undefined' || !document.fonts) {
    return;
  }

  try {
    await Promise.race([
      document.fonts.ready,
      new Promise<void>((resolve) => setTimeout(resolve, timeout))
    ]);
  } catch (error) {
    console.warn('Font loading detection failed:', error);
  }
}

export async function waitForSpecificFonts(
  fontFamilies: string[],
  options: FontLoadingOptions = {}
): Promise<void> {
  const { timeout = 5000, retryCount = 3, retryDelay = 100 } = options;
  
  if (typeof document === 'undefined' || !document.fonts) {
    return;
  }

  const promises = fontFamilies.map(async (fontFamily) => {
    let attempts = 0;
    
    while (attempts < retryCount) {
      try {
        const font = new FontFace(fontFamily, `url()`);
        await Promise.race([
          font.loaded,
          new Promise<void>((resolve) => setTimeout(resolve, timeout))
        ]);
        return;
      } catch (error) {
        attempts++;
        if (attempts >= retryCount) {
          console.warn(`Failed to load font ${fontFamily} after ${retryCount} attempts`);
          return;
        }
        await new Promise(resolve => setTimeout(resolve, retryDelay));
      }
    }
  });

  await Promise.all(promises);
}

export function isFontLoaded(fontFamily: string): boolean {
  if (typeof document === 'undefined' || !document.fonts) {
    return true; // Assume loaded in non-browser environments
  }

  try {
    return document.fonts.check(`16px ${fontFamily}`);
  } catch (error) {
    console.warn(`Error checking font ${fontFamily}:`, error);
    return false;
  }
}

export function preloadFont(_fontFamily: string, _fontWeight: string | number = 'normal'): void {
  if (typeof document === 'undefined') {
    return;
  }

  const link = document.createElement('link');
  link.rel = 'preload';
  link.as = 'font';
  link.type = 'font/woff2';
  link.crossOrigin = 'anonymous';
  link.href = `data:font/woff2;base64,`; // This would need actual font data
  
  document.head.appendChild(link);
}

export function addFontDisplay(fontFamily: string, display: 'auto' | 'block' | 'swap' | 'fallback' | 'optional' = 'swap'): void {
  if (typeof document === 'undefined') {
    return;
  }

  const style = document.createElement('style');
  style.textContent = `
    @font-face {
      font-family: "${fontFamily}";
      font-display: ${display};
      src: local("${fontFamily}");
    }
  `;
  document.head.appendChild(style);
}

export function getFallbackCharWidth(ch: string, fontSize: number = 16): number {
  const isWideChar = /[\u3000-\u9fff\uac00-\ud7af]/.test(ch);
  // More realistic character width estimation based on common fonts
  const baseWidth = isWideChar ? fontSize * 1.0 : fontSize * 0.6;
  return baseWidth;
}

export async function measureTextWithFallback(
  text: string,
  element: SVGTextElement,
  options: FontLoadingOptions = {}
): Promise<Map<string, number>> {
  const { retryCount = 3, retryDelay = 100 } = options;
  
  // Only wait for fonts if they're not already loaded
  if (typeof document !== 'undefined' && document.fonts && !document.fonts.check('16px serif')) {
    await waitForFonts(options);
  }
  
  const characterSet = new Set(text);
  const width = new Map<string, number>();
  characterSet.delete("\n");
  const characterArray = Array.from(characterSet);
  characterArray.sort();
  
  element.textContent = characterArray.join("");
  
  let attempts = 0;
  let measurementSuccessful = false;
  
  while (attempts < retryCount && !measurementSuccessful) {
    try {
      // Check if we can get measurements
      if (element.getNumberOfChars() > 0) {
        for (let i = 0; i < element.getNumberOfChars(); i++) {
          const ch = element.textContent.charAt(i);
          const charWidth = element.getExtentOfChar(i).width;
          
          // Validate measurement - reject if too small or zero
          if (charWidth > 0.1) {
            width.set(ch, charWidth);
          } else {
            throw new Error(`Invalid character width: ${charWidth} for character: ${ch}`);
          }
        }
        measurementSuccessful = true;
      } else {
        throw new Error('No characters to measure');
      }
    } catch (error) {
      attempts++;
      console.warn(`Font measurement attempt ${attempts} failed:`, error);
      
      if (attempts >= retryCount) {
        console.warn('Font measurement failed after retries, using fallback');
        const fontSize = parseFloat(window.getComputedStyle(element).fontSize) || 16;
        for (const ch of characterArray) {
          width.set(ch, getFallbackCharWidth(ch, fontSize));
        }
        break;
      }
      await new Promise(resolve => setTimeout(resolve, retryDelay));
    }
  }
  
  width.set("\n", 0);
  element.textContent = "";
  
  return width;
}