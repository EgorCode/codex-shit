import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'dark-graphite': '#0B0F14',
        'light-gray': '#F5F7FA',
        'blue-accent': '#4CA6FF',
        'success-green': '#2ECC71',
        'warning-orange': '#FFB020',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      lineHeight: {
        'relaxed': '1.5',
      },
    },
  },
  plugins: [],
}

export default config
