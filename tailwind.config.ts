import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        whitesmoke: {
          '100': '#f5f7fa',
          '200': '#f1f1f1',
        },
        white: '#fff',
        gainsboro: '#d3d9e5',
        dimgray: '#5a5d66',
        darkslategray: {
          DEFAULT: '#292d33',
          '100': '#292d33',
          '200': 'rgba(41, 45, 51, 0.1)',
          '300': 'rgba(41, 45, 51, 0.05)',
        },
        slategray: '#6b7480',
        black: '#000',
        gray: 'rgba(0, 0, 0, 0.1)',
        dodgerblue: {
          '100': 'rgba(0, 115, 217, 0.5)',
          '200': 'rgba(0, 115, 217, 0.1)',
        },
        cornflowerblue: {
          '100': '#4ea8f7',
          '200': 'rgba(78, 168, 247, 0.1)',
        },
      },
      fontFamily: {
        'plus-jakarta-sans': 'Plus Jakarta Sans',
        geist: 'Geist',
        inter: 'Inter',
      },
      spacing: {
        '[220px]': '200px',
        'num-50': '50px',
        'num-1': '1px solid #000',
        'num-2': '0.8px solid #000',
      },
      borderRadius: {
        'num-50': '50%',
        'num-16': '16px',
      },
      letterSpacing: {
        'num--0_03': '-0.03em',
      },
      padding: {
        'num-20': '20px',
        'num-12': '12px',
      },
      fontSize: {
        'num-15': '15px',
      },
      lineHeight: {
        'num-22': '22px',
      },
      opacity: {
        'num-0_5': '0.5',
      },
    },
  },
  plugins: [],
};

export default config;
