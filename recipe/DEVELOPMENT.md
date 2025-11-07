# REcipe Website - Development Guide

## Quick Start

```bash
cd d:\REcipe-website\recipe
npm install
npm run dev
```

Server will start at `http://localhost:5173` (or next available port)

## Project Architecture

### Component Structure

Each component follows this pattern:

```
component-name/
├── component-name.jsx    # Component logic
└── component-name.css    # Component styles
```

### Routing

- All routes defined in `src/App.jsx`
- Each page has its own directory under `src/pages/`
- Navigation links defined in `src/utils/constants.js`

### Styling Approach

1. Global variables in `src/styles/variables.css`
2. Base styles in `src/styles/base.css`
3. Component utilities in `src/styles/components.css`
4. Component-specific styles in component directories

### Animation Guidelines

- **Only use AOS** for scroll animations
- Add to elements with `data-aos` attributes:

  ```jsx
  <div data-aos="fade-up" data-aos-delay="100">
  ```

- Common animations: `fade-up`, `fade-down`, `fade-left`, `fade-right`, `zoom-in`
- Configure in `src/hooks/use-aos-init.js`

## Color System

```css
--color-primary: #81a969      /* Primary green */
--color-secondary: #9dcd5a    /* Secondary green */
--color-white: #FFFFFF        /* White */
```

## Typography

- **Headings:** Use `font-family: var(--font-heading)`
- **Body:** Use `font-family: var(--font-body)`
- Font sizes: Use variables like `var(--font-size-lg)`

## Icons

Use Lucide React for all icons:

```jsx
import { Download, Menu, X } from 'lucide-react';

<Download size={20} />
```

[Browse icons](https://lucide.dev/icons/)

## Responsive Design

Breakpoints defined in `src/utils/constants.js`:

- Mobile: 480px
- Tablet: 768px
- Desktop: 1024px
- Wide: 1280px

Use in CSS:

```css
@media (max-width: 768px) {
  /* Tablet and below */
}
```

## Component Examples

### Creating a New Button

```jsx
import Button from '../../components/button/button';

<Button variant="primary" size="large" to="/download">
  Download Now
</Button>
```

Variants: `primary`, `secondary`, `outline`, `ghost`
Sizes: `small`, `medium`, `large`

### Adding a New Page

1. Create directory: `src/pages/new-page/`
2. Create files: `new-page.jsx` and `new-page.css`
3. Add route in `src/App.jsx`:

   ```jsx
   <Route path="/new-page" element={<NewPage />} />
   ```

4. Add link in `src/utils/constants.js`

## Common Tasks

### Update Navigation Links

Edit `NAVIGATION_LINKS` in `src/utils/constants.js`

### Change Color Scheme

Edit color variables in `src/styles/variables.css`

### Add New Section to Home Page

Edit `src/pages/home/home-page.jsx`

### Modify Footer

Edit `src/components/footer/footer.jsx`

## Code Style

### Naming Conventions

- Files: kebab-case (`my-component.jsx`)
- Components: PascalCase (`MyComponent`)
- Functions: camelCase (`handleClick`)
- CSS classes: BEM (`component__element--modifier`)

### CSS Class Example

```css
.nav-bar { }                    /* Block */
.nav-bar__link { }              /* Element */
.nav-bar__link--active { }      /* Modifier */
```

## Build & Deploy

### Production Build

```bash
npm run build
```

Output in `dist/` directory

### Preview Production Build

```bash
npm run preview
```

### Lint Code

```bash
npm run lint
```

## Troubleshooting

### Port Already in Use

Vite will automatically use the next available port (5174, 5175, etc.)

### AOS Animations Not Working

1. Check if `useAOSInit()` is called in `App.jsx`
2. Verify `data-aos` attributes on elements
3. Check browser console for errors

### Styles Not Applying

1. Verify CSS import order in component
2. Check for typos in CSS class names
3. Inspect element in browser DevTools

### Router Not Working

1. Ensure `BrowserRouter` wraps the app in `App.jsx`
2. Check route paths match exactly
3. Verify `Link` components use correct `to` prop

## Resources

- [React Router Docs](https://reactrouter.com/)
- [AOS Library](https://michalsnik.github.io/aos/)
- [Lucide Icons](https://lucide.dev/)
- [Vite Documentation](https://vitejs.dev/)

## Project Contacts

- Repository: <https://github.com/Caiffeine/REcipe-website>
- Main Branch: main

---

**Remember:**

- No GSAP animations
- No emojis
- No gradients
- Use Lucide icons only
- Follow kebab-case for all files
