# Primordial — Official Website

The official website for Primordial, building the financial infrastructure for the creative economy, starting with the music royalties market.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- npm or yarn

### Installation

```bash
npm install
```

### Development

Start the development server:

```bash
npm run dev
```

The website will be available at [http://localhost:5173](http://localhost:5173)

### Build

Build the project for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## 🏗️ Project Structure

```
official-website-v2/
├── public/              # Static assets
│   ├── fonts/          # Web fonts (Founders Grotesk, Fira Code)
│   ├── logo.svg        # Company logo
│   └── m.svg           # M monogram graphic
├── src/
│   ├── components/      # React components
│   │   └── PrimordialMinimalPosterPage.jsx
│   ├── styles/         # Global styles
│   │   └── index.css   # Font definitions and CSS variables
│   ├── App.jsx         # Main app component
│   └── main.jsx        # Entry point
├── index.html          # HTML template
└── package.json        # Dependencies
```

## 🎨 Design System

### Colors

- **Primary Purple 01**: `#2D2246` - Deep night purple (backgrounds)
- **Primary Purple 05**: `#BBB0F7` - Light lavender (text)
- **Cyan**: `#6ADDDD` - Brand accent
- **Cyan Bright**: `#B4F2F2` - CTA highlights

### Typography

- **Headlines**: Founders Grotesk X-Condensed (Bold)
- **Body**: Founders Grotesk (Regular)
- **Monospace**: Fira Code (Regular, SemiBold)

### Fonts

Fonts are self-hosted and configured in `src/styles/index.css`:
- Founders Grotesk X-Condensed Bold
- Founders Grotesk Regular
- Fira Code Regular & SemiBold

## 📦 Tech Stack

- **React** 18.2.0
- **Vite** 5.0.10
- **Tailwind CSS** 3.4.1
- **PostCSS** & **Autoprefixer**

## 🌐 Deployment

The project is configured for GitHub Pages deployment via the `gh-pages` branch.

### Deployment Process

1. Build the project: `npm run build`
2. Switch to gh-pages branch: `git checkout gh-pages`
3. Copy build files: `cp -r dist/* . && rm -rf dist`
4. Commit and push: `git add . && git commit -m "Update website" && git push origin gh-pages`
5. Switch back to master: `git checkout master`

## 📝 License

Private - Primordial Technology

## 📧 Contact

For inquiries, please contact: [contact@primordial.net](mailto:contact@primordial.net)
