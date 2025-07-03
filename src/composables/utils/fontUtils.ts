export interface FontLoadingOptions {
  timeout?: number;
  retryCount?: number;
  retryDelay?: number;
}

export interface SVGFontInfo {
  fontSize: number;
  fontFamily: string;
  fontWeight: string;
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
  // Character classification for better width estimation
  const isWideChar = /[\u3000-\u9fff\uac00-\ud7af]/.test(ch); // CJK characters
  const isNarrowChar = /[iIjl1\|\!\.\,\;\:]/.test(ch); // Narrow characters
  const isWideLatinChar = /[mMwW@]/.test(ch); // Wide Latin characters
  const isNumber = /[0-9]/.test(ch);
  const isSpace = /\s/.test(ch);
  
  if (isSpace) {
    return fontSize * 0.25; // Space characters
  } else if (isWideChar) {
    return fontSize * 1.0; // Full-width CJK characters
  } else if (isNarrowChar) {
    return fontSize * 0.3; // Narrow characters like 'i', 'l', '1'
  } else if (isWideLatinChar) {
    return fontSize * 0.8; // Wide Latin characters like 'm', 'W'
  } else if (isNumber) {
    return fontSize * 0.55; // Numbers (typically monospace-like)
  } else {
    return fontSize * 0.6; // Average Latin characters
  }
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

export async function waitForSVGFonts(svgElement: SVGTextElement, options: FontLoadingOptions = {}): Promise<boolean> {
  const { timeout = 5000, retryCount = 5, retryDelay = 200 } = options;
  
  if (typeof document === 'undefined' || !document.fonts) {
    return true; // Assume fonts are available in non-browser environments
  }

  const fontInfo = getSVGFontInfo(svgElement);
  const testText = 'ABCabc123漢字';
  
  // First wait for general font loading
  await waitForFonts({ timeout: timeout / 2 });
  
  // Then verify SVG font rendering
  let attempts = 0;
  while (attempts < retryCount) {
    if (await isSVGFontReady(svgElement, testText, fontInfo)) {
      return true;
    }
    
    attempts++;
    if (attempts < retryCount) {
      await new Promise(resolve => setTimeout(resolve, retryDelay));
    }
  }
  
  console.warn(`SVG font loading verification failed after ${retryCount} attempts`);
  return false;
}

export function getSVGFontInfo(svgElement: SVGTextElement): SVGFontInfo {
  const computedStyle = window.getComputedStyle(svgElement);
  return {
    fontSize: parseFloat(computedStyle.fontSize) || 16,
    fontFamily: computedStyle.fontFamily || 'serif',
    fontWeight: computedStyle.fontWeight || 'normal'
  };
}

export async function isSVGFontReady(svgElement: SVGTextElement, testText: string, fontInfo: SVGFontInfo): Promise<boolean> {
  const originalContent = svgElement.textContent;
  
  try {
    // Test with a known character set
    svgElement.textContent = testText;
    
    // Check if we can get meaningful measurements
    if (svgElement.getNumberOfChars() === 0) {
      return false;
    }
    
    let totalWidth = 0;
    let validMeasurements = 0;
    
    for (let i = 0; i < Math.min(svgElement.getNumberOfChars(), testText.length); i++) {
      try {
        const charWidth = svgElement.getExtentOfChar(i).width;
        if (charWidth > 0.1) { // Reasonable minimum width
          totalWidth += charWidth;
          validMeasurements++;
        }
      } catch (error) {
        // Measurement failed for this character
        continue;
      }
    }
    
    // Verify that we got reasonable measurements for most characters
    const successRate = validMeasurements / Math.min(svgElement.getNumberOfChars(), testText.length);
    const averageWidth = validMeasurements > 0 ? totalWidth / validMeasurements : 0;
    
    // Check if measurements are reasonable
    const minExpectedWidth = fontInfo.fontSize * 0.2; // Very conservative minimum
    const maxExpectedWidth = fontInfo.fontSize * 2.0; // Reasonable maximum
    
    const isReady = successRate >= 0.7 && averageWidth >= minExpectedWidth && averageWidth <= maxExpectedWidth;
    
    if (!isReady) {
      console.debug(`SVG font not ready: successRate=${successRate}, avgWidth=${averageWidth}, expected range=[${minExpectedWidth}, ${maxExpectedWidth}]`);
    }
    
    return isReady;
  } catch (error) {
    console.warn('SVG font readiness check failed:', error);
    return false;
  } finally {
    svgElement.textContent = originalContent;
  }
}

export function createSVGFontTestElement(): SVGTextElement {
  if (typeof document === 'undefined') {
    throw new Error('Cannot create SVG element in non-browser environment');
  }
  
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.style.position = 'absolute';
  svg.style.left = '-9999px';
  svg.style.top = '-9999px';
  svg.style.width = '1px';
  svg.style.height = '1px';
  svg.style.visibility = 'hidden';
  
  const textElement = document.createElementNS('http://www.w3.org/2000/svg', 'text');
  textElement.setAttribute('x', '0');
  textElement.setAttribute('y', '0');
  
  svg.appendChild(textElement);
  document.body.appendChild(svg);
  
  return textElement;
}

export function removeSVGFontTestElement(textElement: SVGTextElement): void {
  if (textElement.parentNode && textElement.parentNode.parentNode) {
    textElement.parentNode.parentNode.removeChild(textElement.parentNode);
  }
}