# Pebbles React Template - Setup Guide

## 🎯 What You're Getting

This template contains all the files needed to recreate the Pebbles crypto DCA website in React. It includes:

- Complete React application with modern hooks and components
- Pebbles brand styling and theme system
- Interactive DCA simulator
- Responsive design with Tailwind CSS
- Smooth animations with Framer Motion
- Production-ready build configuration

## 📋 Required Files for React Template

### Core Configuration Files
```
package.json              # Dependencies and scripts
vite.config.js           # Vite build configuration
tailwind.config.js       # Tailwind CSS configuration
postcss.config.js        # PostCSS configuration
index.html               # HTML template
```

### React Source Files
```
src/
├── main.jsx             # React entry point
├── App.jsx              # Main application component
├── App.css              # App-specific styles
├── index.css            # Global styles with Tailwind imports
└── styles/
    └── pebbles-theme.css # Complete Pebbles brand theme
```

### Components
```
src/components/
├── ui/                  # Reusable UI components
│   ├── button.jsx       # Button component
│   ├── card.jsx         # Card component
│   ├── badge.jsx        # Badge component
│   └── slider.jsx       # Slider component (Radix UI)
├── DocumentationPage.jsx
├── CodePage.jsx
├── ArchitecturePage.jsx
└── InteractiveDemo.jsx  # DCA simulator
```

### Utilities
```
src/lib/
└── utils.js             # Utility functions (clsx, tailwind-merge)
```

### Assets
```
src/assets/
├── pebbles-logo.png     # Pebbles logo
├── pebbles-hero-bg.png  # Hero background
└── pebbles-steps.png    # Process illustration
```

## 🔧 Step-by-Step Setup

### 1. Create New React Project
```bash
# Option A: Use this template directly
# Copy all files to your project directory

# Option B: Start fresh and copy files
npm create vite@latest my-pebbles-app -- --template react
cd my-pebbles-app
```

### 2. Replace Default Files
Replace the default Vite React files with the Pebbles template files:

```bash
# Copy configuration files
cp package.json your-project/
cp vite.config.js your-project/
cp tailwind.config.js your-project/
cp postcss.config.js your-project/
cp index.html your-project/

# Copy source files
cp -r src/ your-project/
```

### 3. Install Dependencies
```bash
npm install
# This will install:
# - React 18 with React Router
# - Framer Motion for animations
# - Tailwind CSS for styling
# - Lucide React for icons
# - Radix UI for accessible components
```

### 4. Start Development
```bash
npm run dev
```

### 5. Verify Setup
Open `http://localhost:5173` and you should see:
- Pebbles logo and branding
- "Buy bits. Grow steadily." hero section
- Three-step process with pebble illustrations
- Interactive DCA simulator
- Smooth animations and hover effects

## 🎨 Customization Guide

### Updating Brand Colors
Edit `src/styles/pebbles-theme.css`:
```css
:root {
  /* Change these values */
  --pebbles-primary: #your-primary-color;
  --pebbles-secondary: #your-secondary-color;
  --pebbles-accent: #your-accent-color;
}
```

### Modifying Content
Main content is in `src/App.jsx`:
```jsx
// Hero section
<h1>Your New Tagline</h1>
<p>Your new description</p>

// Steps section
<h3>1. Your first step</h3>
<p>Your step description</p>
```

### Adding New Components
1. Create in `src/components/YourComponent.jsx`
2. Import in `src/App.jsx`
3. Add to routing if needed

### Styling Components
Use Pebbles theme classes:
```jsx
<button className="pebbles-button pebbles-button-primary">
  Your Button
</button>

<div className="pebbles-card">
  Your content
</div>
```

## 🚀 Production Build

### Build Command
```bash
npm run build
```

### Deploy
The `dist/` folder contains your production-ready files:
- Upload to any static hosting service
- Deploy to Vercel, Netlify, or similar
- Use with any CDN

## 🔍 Troubleshooting

### Common Issues

**1. Dependencies not installing**
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

**2. Tailwind styles not working**
- Ensure `postcss.config.js` is present
- Check `tailwind.config.js` content paths
- Verify `@tailwind` imports in `index.css`

**3. Images not loading**
- Check image paths in `src/assets/`
- Verify imports in components
- Ensure images are copied correctly

**4. Animations not smooth**
- Check Framer Motion installation
- Verify `motion` components are imported
- Test in production build

### Getting Help

1. Check the browser console for errors
2. Verify all files are copied correctly
3. Ensure Node.js version is 18+
4. Test with a fresh `npm install`

## 📦 What's Included

### React Features
- ✅ Modern React 18 with hooks
- ✅ React Router for navigation
- ✅ Functional components throughout
- ✅ State management with useState/useEffect
- ✅ Custom hooks for reusability

### Styling Features
- ✅ Tailwind CSS utility classes
- ✅ Custom Pebbles theme system
- ✅ Responsive design (mobile-first)
- ✅ Smooth hover and focus states
- ✅ Consistent spacing and typography

### Interactive Features
- ✅ DCA simulator with real-time updates
- ✅ Smooth page transitions
- ✅ Animated components on scroll
- ✅ Interactive sliders and controls
- ✅ Responsive navigation

### Performance Features
- ✅ Vite for fast development
- ✅ Optimized production builds
- ✅ Code splitting ready
- ✅ Modern ES modules
- ✅ Efficient bundle sizes

---

**You now have everything needed to build and customize your Pebbles React application! 🪨⚛️**

