export interface FontLoadingOptions {
    timeout?: number;
    retryCount?: number;
    retryDelay?: number;
}
export declare function waitForFonts(options?: FontLoadingOptions): Promise<void>;
export declare function waitForSpecificFonts(fontFamilies: string[], options?: FontLoadingOptions): Promise<void>;
export declare function isFontLoaded(fontFamily: string): boolean;
export declare function preloadFont(_fontFamily: string, _fontWeight?: string | number): void;
export declare function addFontDisplay(fontFamily: string, display?: 'auto' | 'block' | 'swap' | 'fallback' | 'optional'): void;
export declare function getFallbackCharWidth(ch: string, fontSize?: number): number;
export declare function measureTextWithFallback(text: string, element: SVGTextElement, options?: FontLoadingOptions): Promise<Map<string, number>>;
