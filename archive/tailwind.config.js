/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "prim-purple-01": "#2D2246",
        "prim-purple-02": "#331862",
        "prim-purple-03": "#7E44F1",
        "prim-purple-04": "#A080FF",
        "prim-purple-05": "#BBB0F7",
        "prim-cyan": "#6ADDDD",
        "prim-pink": "#F869FC",
        "prim-orange": "#E2492F"
      },
      fontFamily: {
        founders: ['"Founders Grotesk"', "system-ui", "sans-serif"],
        "founders-cond": ['"Founders Grotesk X-Condensed"', "system-ui", "sans-serif"],
        mono: ['"Fira Mono"', "ui-monospace", "SFMono-Regular", "Menlo", "monospace"]
      },
      backgroundImage: {
        "primordial-gradient": "radial-gradient(circle at 20% 20%, rgba(122, 239, 255, 0.25), transparent 40%), radial-gradient(circle at 80% 0, rgba(248, 105, 252, 0.25), transparent 35%), radial-gradient(circle at 70% 70%, rgba(158, 120, 255, 0.3), transparent 45%)"
      },
      dropShadow: {
        glow: "0 0 35px rgba(106, 221, 221, 0.5)"
      }
    }
  }
};
