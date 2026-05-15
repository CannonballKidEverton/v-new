import type { Config } from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx,mdx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      /**
       * COLOUR SYSTEM
       * Naming is semantic, not numbered (except the ink scale).
       * - bg / bg-2    : page backgrounds
       * - ink-*        : all text/foreground colours
       * - hairline / hairline-2  : borders and dividers
       * - accent       : oxidised gold — used in max 4 contexts
       */
      colors: {
        bg: {
          DEFAULT: '#0A0A09',
          2: '#0E0E0C',
        },
        ink: {
          DEFAULT: '#F2EEE6',
          strong: '#ADADA0',
          2: '#8A8A82',
          3: '#5A5A52',
          4: '#3A3A35',
        },
        hairline: {
          DEFAULT: '#1A1A18',
          2: '#25241F',
        },
        accent: '#8A7352',
      },

      /**
       * TYPOGRAPHY — font families via CSS variables set by next/font
       */
      fontFamily: {
        sans:  ['var(--font-sans)', ...fontFamily.sans],
        serif: ['var(--font-serif)', ...fontFamily.serif],
        mono:  ['var(--font-mono)', ...fontFamily.mono],
      },

      /**
       * SPACING — 8px base grid
       */
      spacing: {
        margin: 'clamp(28px, 4vw, 64px)',
        header: '60px',
      },

      /**
       * LETTER-SPACING — institutional scale
       */
      letterSpacing: {
        'mono-tight':   '0.06em',
        'mono-normal':  '0.14em',
        'mono-wide':    '0.18em',
        'mono-wider':   '0.22em',
        'mono-widest':  '0.24em',
      },

      /**
       * LINE-HEIGHT — editorial scale
       */
      lineHeight: {
        'manifesto': '0.92',
        'display':   '0.94',
        'tight':     '1.05',
        'editorial': '1.65',
      },

      /**
       * ANIMATION — institutional motion timing
       * Arrival: 760ms cubic-bezier(0.16, 1, 0.3, 1)
       * Reactive: 140-220ms ease
       */
      transitionDuration: {
        'arrival':  '760ms',
        'reactive': '140ms',
        'moderate': '220ms',
        'slow':     '380ms',
      },
      transitionTimingFunction: {
        'arrival': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },

      /**
       * KEYFRAMES — radar pulse only
       */
      keyframes: {
        'radar-pulse': {
          '0%, 100%': { opacity: '0.3' },
          '18%':       { opacity: '1'   },
          '36%':       { opacity: '0.3' },
        },
      },
      animation: {
        'radar': 'radar-pulse 8s ease-in-out infinite',
      },

      /**
       * MAX-WIDTH — editorial reading width
       */
      maxWidth: {
        'prose-narrow': '52ch',
        'prose':        '62ch',
        'prose-wide':   '72ch',
      },
    },
  },
  plugins: [],
};

export default config;
