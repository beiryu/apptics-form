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
        darkslategray: '#292d33',
        slategray: '#6b7480',
        black: '#000',
        gray: 'rgba(0, 0, 0, 0.1)',
        dodgerblue: {
          '100': 'rgba(0, 115, 217, 0.5)',
          '200': 'rgba(0, 115, 217, 0.1)',
        },
      },
      fontFamily: {
        'plus-jakarta-sans': 'Plus Jakarta Sans',
        geist: 'Geist',
        inter: 'Inter',
      },
      spacing: {
        'num-1': '0.8px solid #000',
      },
      borderRadius: {
        'num-50': '50%',
      },
    },
  },
  plugins: [],
};

export default config;
