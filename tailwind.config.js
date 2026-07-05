/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue-deep': '#1B3A5C',
        'blue-mid': '#2E5F8A',
        'blue-light': '#D6E8F7',
        'green-primary': '#2D6A4F',
        'green-light': '#B7DFC9',
        'green-mist': '#EAF5EE',
        'space-white': '#FAFAFA',
        'parchment': '#F4F1EC',
        'ink': '#1A1A2E',
        'muted': '#6B7280',
      },
      fontFamily: {
        display: ['Fraunces', 'serif'],
        body: ['Inter', 'sans-serif'],
      },
      fontSize: {
        'xs': '0.75rem',
        'sm': '0.875rem',
        'base': '1rem',
        'md': '1.125rem',
        'lg': '1.375rem',
        'xl': '1.75rem',
        '2xl': '2.25rem',
        '3xl': '3rem',
        'display': 'clamp(2.5rem, 6vw, 4rem)',
      },
      spacing: {
        '1.5x': '4px',
        '2x': '8px',
        '3x': '16px',
        '4x': '24px',
        '5x': '32px',
        '6x': '48px',
        '7x': '64px',
        '8x': '96px',
        '9x': '128px',
      },
      transitionTimingFunction: {
        'grow': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
        'bloom': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        'sway': 'cubic-bezier(0.37, 0, 0.63, 1)',
        'flow': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      transitionDuration: {
        '350': '350ms',
        '700': '700ms',
      },
      maxWidth: {
        'prose': '65ch',
        'legal': '70ch',
      },
      screens: {
        'xs': '480px',
      },
    },
  },
  plugins: [],
}