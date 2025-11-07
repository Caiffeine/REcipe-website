# REcipe Website

The official download hub for the REcipe mobile application - an AI-powered food management system designed to help Filipino households reduce food waste.

## Project Overview

REcipe is a mobile application that helps users minimize food waste by:

- Tracking household food inventory
- Monitoring expiry dates
- Suggesting recipes based on available ingredients
- Providing nutritional information through API integrations

This website serves as the **exclusive download platform** for the REcipe app (not available on Play Store/App Store).

## Tech Stack

- **Framework:** React 19.1.1
- **Build Tool:** Vite 7.1.7
- **Routing:** React Router DOM
- **Animations:** AOS (Animate On Scroll)
- **Icons:** Lucide React
- **Styling:** Pure CSS with CSS Variables

## Design System

### Color Palette

- Primary: `#81a969`
- Secondary: `#9dcd5a`
- White: `#FFFFFF`

### Typography

- **Headings:** Sugo Display font (fallback: system fonts)
- **Body:** Rubik font (Google Fonts)

### Guidelines

- Clean, minimal UI design
- No emojis throughout the site
- No gradient colors - flat colors only
- Icons from Lucide React
- AOS for scroll animations only

## Project Structure

```
src/
├── assets/
│   ├── images/         # Placeholder images
│   ├── icons/          # Custom icons (if needed)
│   └── fonts/          # Custom font files
│
├── components/
│   ├── nav-bar/        # Navigation component
│   ├── footer/         # Footer component
│   └── button/         # Reusable button component
│
├── hooks/
│   └── use-aos-init.js # AOS initialization hook
│
├── pages/
│   ├── home/           # Home page
│   ├── about/          # About page
│   ├── download/       # Download page
│   ├── contact/        # Contact page
│   └── not-found/      # 404 page
│
├── styles/
│   ├── variables.css   # CSS custom properties
│   ├── base.css        # Base styles & resets
│   └── components.css  # Reusable component styles
│
└── utils/
    ├── constants.js    # App constants
    └── helpers.js      # Helper functions
```

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository:

```bash
git clone https://github.com/Caiffeine/REcipe-website.git
cd REcipe-website/recipe
```

2. Install dependencies:

```bash
npm install
```

3. Run development server:

```bash
npm run dev
```

4. Open your browser to `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Development Guidelines

### File Naming

- Use **kebab-case** for all files and directories
- Component files: `component-name.jsx`
- Style files: `component-name.css`

### Component Structure

- Each component should have its own directory
- Include component file and CSS file in the same directory
- Export default from the component file

### Styling

- Use CSS custom properties from `variables.css`
- Follow BEM naming convention for CSS classes
- Keep styles modular and component-specific

### Animation

- Use AOS for scroll-based animations only
- Configure through `data-aos` attributes
- Keep animations subtle and purposeful

## Building for Production

```bash
npm run build
```

The optimized build will be in the `dist/` directory.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

This is a capstone project. For any questions or suggestions, please reach out through the contact page.

## License

All rights reserved © 2025 REcipe

## Contact

- Email: <contact@recipe.ph>
- Location: Manila, Philippines

---

Built with React + Vite | Developed with GitHub Copilot (Claude Sonnet 4.5)
