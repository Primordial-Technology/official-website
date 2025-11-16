/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        founders: ['"Founders Grotesk"', 'system-ui', '-apple-system', 'sans-serif'],
        'founders-cond': ['"Founders Grotesk X-Condensed"', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"Fira Mono"', 'ui-monospace', 'monospace'],
      },
    },
  },
  plugins: [],
};

