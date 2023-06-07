/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        "base-corner-radius": "var(--base-corner-radius)", // corner-radius-base
        "large-corner-radius": "var(--large-corner-radius)", // corner-radius-large
        "small-corner-radius": "var(--small-corner-radius)", // corner-radius-small
        "control-border-radius": "var(--control-border-radius)", // control-corner-radius - ADD
        "checkbox-border-radius": "var(--checkbox-border-radius)", // checkbox-corner-radius - ADD
        "pb-border-radius": "var(--pb-border-radius)", // primary button-geometry-corner radius - ADD
        "sb-border-radius": "var(--sb-border-radius)", // secondary button-geometry-corner radius - WE DO NOT HAVE IT
        "merch-border-radius": "var(--merch-border-radius)", // merchandise thumbnail-geometry-corner radius - ADD
      },

      fontFamily: {
        "primary-font-family": "var(--primary-font-family)", // typography-primary-base(font)
        "secondary-font-family": "var(--secondary-font-family)", // typography-secondary-base(font)
        "h1-font-family": "var(--h1-font-family)", // h1-font - ADD as class
        "h2-font-family": "var(--h2-font-family)", // h2-font - ADD as class
        "h3-font-family": "var(--h3-font-family)", // h3-font - WE DO NOT HAVE IT
        "pb-font-family": "var(--pb-font-family)", // primary button-typography-font - ADD
        "sb-font-family": "var(--sb-font-family)", // secondary button-typography-font - WE DO NOT HAVE IT
        "select-font-family": "var(--select-font-family)", // select-typography-font - ADD
        "text-field-font-family": "var(--text-field-font-family)", // text field-typography-font - ADD
      },
      fontWeight: {
        "primary-base-weight": "var(--primary-base-weight)", // typography-primary-base-weight
        "primary-bold-weight": "var(--primary-bold-weight)", // typography-primary-bold-weight
        "secondary-base-weight": "var(--secondary-base-weight)", // typography-secondary-base-weight
        "secondary-bold-weight": "var(--secondary-bold-weight)", // typography-secondary-bold-weight
        "h1-font-weight": "var(--h1-font-weight)", // h1-weight - ADD
        "h2-font-weight": "var(--h2-font-weight)", // h2-weight - ADD
        "h3-font-weight": "var(--h3-font-weight)", // h3-weight - WE DO NOT HAVE IT
        "pb-font-weight": "var(--pb-font-weight)", // primary button-typography-weight - ADD
        "sb-font-weight": "var(--sb-font-weight)", // secondary button-typography-weight - WE DO NOT HAVE IT
        "select-font-weight": "var(--select-font-weight)", // select-typography-weight - ADD
        "text-field-font-weight": "var(--text-field-font-weight)", // text field-typography-weight - ADD
      },
      // Put it in a index.css
      fontSize: {
        "base-font-size": "var(--base-font-size)", // typography-size-base - ADD(but it does not work on breadcrumbs and product name on right panel)
        "h1-font-size": "var(--h1-font-size)", // h1-size - ADD
        "h2-font-size": "var(--h2-font-size)", // h2-size - ADD
        "h3-font-size": "var(--h3-font-size)", // h3-size - WE DO NOT HAVE IT
        "pb-font-size": "var(--pb-font-size)", // primary button-typography-size - ADD
        "sb-font-size": "var(--sb-font-size)", // secondary button-typography-size - WE DO NOT HAVE IT
        "select-font-size": "var(--select-font-size)", // select-typography-size - ADD
        "text-field-font-size": "var(--text-field-font-size)", // text field-typography-size - ADD
      },
      colors: {
        "canvas-accent-color": "var(--canvas-accent-color)", // - ADD (index.jsx - <Spinner/>)
        "canvas-background-color": "var(--canvas-background-color)", // - ADD as bg color to h1. Also, when checkout is loading, it is have empty page with spinner. This variables responsible for color this page.
        "canvas-foreground-color": "var(--canvas-foreground-color)", // - ADD to h1 as text color
        "canvas-color1-accent": "var(--canvas-color1-accent)", // not found
        "canvas-color1-background": "var(--canvas-color1-background)", // - ADD
        "canvas-color1-foreground": "var(--canvas-color1-foreground)", //- ADD
        "canvas-color2-accent": "var(--canvas-color2-accent)", // not found
        "canvas-color2-background": "var(--canvas-color2-background)", // - ADD
        "canvas-color2-foreground": "var(--canvas-color2-foreground)", // - ADD (color text right panel)
        "canvas-critical-accent": "var(--canvas-critical-accent)",
        "canvas-critical-background": "var(--canvas-critical-background)",
        "canvas-critical-foreground": "var(--canvas-critical-foreground)",
        "canvas-interactive-accent": "var(--canvas-interactive-accent)", // - not found
        "canvas-interactive-background": "var(--canvas-interactive-background)", // - ADD (bcg links)
        "canvas-interactive-foreground": "var(--canvas-interactive-foreground)", // ADD as focus:outline, also checkbox bg
        "canvas-primary-accent": "var(--canvas-primary-accent)", // - primary button - undefined
        "canvas-primary-background": "var(--canvas-primary-background)", //- primary button - use this 'pb-bcg-color'
        "canvas-primary-foreground": "var(--canvas-primary-foreground)", //- primary button - ADD
        "control-color": "var(--control-color)", // control-color - do not understand
        "control-bg-color": "var(--control-bg-color)", // control-color - do not understand
        "control-bg-color1": "var(--control-bg-color1)", // control-color - do not understand
        "pb-bcg-color": "var(--pb-bcg-color)", //  - ADD
        "pb-text-color": "var(--pb-text-color)", //
        "sb-bcg-color": "var(--sb-bcg-color)", //  - WE DO NOT HAVE IT
        "sb-text-color": "var(--sb-text-color)", //  - WE DO NOT HAVE IT
      },

      backgroundImage: {
        "main-bg-image": "var(--mainBgImage)",
        "order-bg-image": "var(--orderBgImage)",
        "header-bg-banner": "var(--headerBannerBgImage)",
      },

      letterSpacing: {
        "h1-letter-spacing-base": "var(--h1-letter-spacing)", // h1-kerning - ADD
        "h2-letter-spacing-base": "var(--h2-letter-spacing)", // h2-kerning - ADD
        "h3-letter-spacing-base": "var(--h3-letter-spacing)", // h3-kerning - WE DO NOT HAVE IT
        "global-letter-spacing": "var(--global-letter-spacing)", // global-typography-kerning
        "pb-letter-spacing": "var(--pb-letter-spacing)", // primary button-typography-kerning - ADD
        "sb-letter-spacing": "var(--sb-letter-spacing)", // secondary button-typography-kerning - WE DO NOT HAVE IT
        "select-letter-spacing": "var(--select-letter-spacing)", // select-typography-kerning - ADD
        "text-field-letter-spacing": "var(--text-field-letter-spacing)", // text field-typography-kerning - ADD
      },
      width: {
        "header-logo-width": "var(--header-logo-width)", // header-logo max width
      },
      borderWidth: {
        "control-border-width": "var(--control-border-width)", // control-border - it is checkbox
        "pb-border-width": "var(--pb-border-width)", // primary button-geometry-border - ADD
        "sb-border-width": "var(--sb-border-width)", // secondary button-geometry-border - WE DO NOT HAVE IT
        "select-border-width": "var(--select-border-width)", // select-border - ADD
        "text-field-border-width": "var(--text-field-border-width)", // text field-border - ADD
        "merch-border-width": "var(--merch-border-width)", // merchandise thumbnail-border - ADD
      },
      spacing: {
        "pb-vertical-padding": "var(--pb-vertical-padding)", // primary button-geometry-block padding(vertical) - ADD
        "sb-vertical-padding": "var(--sb-vertical-padding)", // secondary button-geometry-block padding(vertical) - WE DO NOT HAVE IT
        "pb-horizontal-padding": "var(--pb-horizontal-padding)", // primary button-geometry-inline padding(horizontal) - ADD
        "sb-horizontal-padding": "var(--sb-horizontal-padding)", // secondary button-geometry-inline padding(horizontal) - WE DO NOT HAVE IT
      },
    },
  },
  plugins: [],
}

