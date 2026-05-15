/**
 * Typography stack.
 *
 * Fonts are loaded via CSS @import in app/globals.css so that the build
 * does not require network access to Google Fonts (which blocked local builds).
 * On Vercel, fonts load from the Google CDN in the browser — identical result.
 *
 * Production licensing upgrade path (Klim Type Foundry):
 *  · Söhne replaces Inter Tight   — klim.co.nz/typefaces/soehne
 *  · Tiempos Text replaces Source Serif 4 — klim.co.nz/typefaces/tiempos-text
 *  · Söhne Mono replaces JetBrains Mono   — klim.co.nz/typefaces/soehne-mono
 *
 * To swap to next/font/local: place font files in /public/fonts/, import
 * using next/font/local with the variable names --font-sans, --font-serif,
 * --font-mono, and add the exported .variable classNames to <html>.
 */

// No build-time font injection — CSS variables are set in globals.css.
export const fontClassNames = '';
