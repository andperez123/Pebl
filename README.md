# Pebbles React Template

A complete React template for the Pebbles crypto DCA app with modern styling and interactive components.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. **Clone or download this template**
2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Start development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm run dev
   ```

4. **Open your browser to `http://localhost:5173`**

## 📁 Project Structure

```
pebbles-react-template/
├── public/                 # Static assets
├── src/
│   ├── components/         # React components
│   │   ├── ui/            # Reusable UI components
│   │   ├── DocumentationPage.jsx
│   │   ├── CodePage.jsx
│   │   ├── ArchitecturePage.jsx
│   │   └── InteractiveDemo.jsx
│   ├── assets/            # Images and static files
│   │   ├── pebbles-logo.png
│   │   ├── pebbles-hero-bg.png
│   │   └── pebbles-steps.png
│   ├── styles/            # CSS files
│   │   └── pebbles-theme.css
│   ├── lib/               # Utility functions
│   │   └── utils.js
│   ├── App.jsx            # Main app component
│   ├── main.jsx           # React entry point
│   └── index.css          # Global styles
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## 🎨 Pebbles Brand Guidelines

### Color Palette
- **Primary**: Soft stone gray (`--pebbles-stone-700`)
- **Secondary**: Earthy green (`--pebbles-green-500`)
- **Accent**: Soft blue (`--pebbles-blue-500`)

### Typography
- **Font**: Inter (friendly sans-serif with rounded edges)
- **Headings**: `.pebbles-heading`
- **Body**: `.pebbles-body`
- **Subheadings**: `.pebbles-subheading`

### Components
- **Buttons**: `.pebbles-button`, `.pebbles-button-primary`, `.pebbles-button-secondary`
- **Cards**: `.pebbles-card`
- **Gradients**: `.pebbles-gradient-hero`, `.pebbles-gradient-section`, `.pebbles-gradient-water`

## 🔧 Tech Stack

- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Smooth animations
- **React Router** - Client-side routing
- **Lucide React** - Beautiful icons
- **Radix UI** - Accessible UI primitives

## 📦 Key Components

### 1. Main App (`src/App.jsx`)
- Landing page with hero section
- Navigation and routing
- Pebbles branding and messaging

### 2. Interactive Demo (`src/components/InteractiveDemo.jsx`)
- DCA simulation with sliders
- Real-time calculations
- Progress visualization

### 3. UI Components (`src/components/ui/`)
- Button, Card, Badge components
- Slider component with Radix UI
- Reusable styled components

### 4. Pebbles Theme (`src/styles/pebbles-theme.css`)
- Complete color system
- Typography styles
- Component classes
- Smooth animations

## 🎯 Customization

### Updating Colors
Edit the CSS variables in `src/styles/pebbles-theme.css`:
```css
:root {
  --pebbles-primary: #your-color;
  --pebbles-secondary: #your-color;
  /* ... */
}
```

### Adding New Pages
1. Create component in `src/components/`
2. Add route in `src/App.jsx`
3. Update navigation links

### Modifying Content
- **Hero text**: Update in `src/App.jsx` LandingPage component
- **Steps**: Modify the "How it works" section
- **Benefits**: Update "Why Pebbles" section

## 🚀 Build & Deploy

### Build for Production
```bash
npm run build
# or
yarn build
# or
pnpm run build
```

### Preview Production Build
```bash
npm run preview
# or
yarn preview
# or
pnpm run preview
```

## 📱 Features

- ✅ Fully responsive design
- ✅ Smooth animations with Framer Motion
- ✅ Interactive DCA simulator
- ✅ Modern React patterns (hooks, functional components)
- ✅ Accessible UI components
- ✅ SEO-friendly structure
- ✅ Fast Vite development experience
- ✅ Production-ready build

## 🎨 Brand Voice

**Pebbles Philosophy**: "Buy bits. Grow steadily."
- **Approachable**: Start small, build big — without the noise
- **Steady**: Consistent, stress-free investing
- **Natural**: Pebble metaphors throughout
- **Safe**: Self-custody and guided growth
- **Empowering**: Your crypto foundation, pebble by pebble

## 📄 License

This template is provided as-is for educational and development purposes.

---

**Ready to build your crypto foundation? Start stacking today! 🪨💎**

