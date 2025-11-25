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
      colors: {
        'prim-purple-01': 'var(--prim-purple-01)',
        'prim-purple-05': 'var(--prim-purple-05)',
        'prim-hero-bg': 'var(--prim-hero-bg)',
        'prim-cyan': 'var(--prim-cyan)',
        'prim-cyan-bright': 'var(--prim-cyan-bright)',
      },
    },
  },
  plugins: [],
};
