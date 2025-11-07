# REcipe Design Tokens - Quick Reference

## Color Palette

### Primary Colors

```css
--color-primary: #81a969       /* Green - Primary actions, headings */
--color-secondary: #9dcd5a     /* Light Green - Accents, hover states */
--color-white: #FFFFFF         /* White - Background, text on dark */
```

### Text Colors

```css
--color-text-dark: #2d2d2d     /* Main text */
--color-text-light: #6b6b6b    /* Secondary text */
```

### Background Colors

```css
--color-background: #FFFFFF        /* Main background */
--color-background-alt: #f8f9fa    /* Alternate sections */
```

## Typography Scale

### Font Families

- **Headings**: Sugo Display (serif)
- **Body**: Rubik (sans-serif)

### Font Sizes

```css
--font-size-xs: 0.75rem       /* 12px */
--font-size-sm: 0.875rem      /* 14px */
--font-size-base: 1rem        /* 16px */
--font-size-lg: 1.125rem      /* 18px */
--font-size-xl: 1.25rem       /* 20px */
--font-size-2xl: 1.5rem       /* 24px */
--font-size-3xl: 1.875rem     /* 30px */
--font-size-4xl: 2.25rem      /* 36px */
--font-size-5xl: 3rem         /* 48px */
--font-size-6xl: 3.75rem      /* 60px */
```

### Font Weights

```css
--font-weight-normal: 400
--font-weight-medium: 500
--font-weight-semibold: 600
--font-weight-bold: 700
```

## Spacing Scale

```css
--spacing-xs: 0.5rem      /* 8px */
--spacing-sm: 1rem        /* 16px */
--spacing-md: 1.5rem      /* 24px */
--spacing-lg: 2rem        /* 32px */
--spacing-xl: 3rem        /* 48px */
--spacing-2xl: 4rem       /* 64px */
--spacing-3xl: 6rem       /* 96px */
```

## Border Radius

```css
--radius-sm: 0.25rem      /* 4px */
--radius-md: 0.5rem       /* 8px */
--radius-lg: 1rem         /* 16px */
--radius-xl: 1.5rem       /* 24px */
--radius-full: 9999px     /* Circle */
```

## Shadows

```css
--shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05)
--shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1)
--shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1)
--shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1)
```

## Transitions

```css
--transition-fast: 150ms ease-in-out
--transition-base: 250ms ease-in-out
--transition-slow: 350ms ease-in-out
```

## Layout Constraints

```css
--max-width-container: 1280px   /* Main container */
--max-width-content: 1024px     /* Content width */
--max-width-text: 768px         /* Text blocks */
```

## Z-Index Scale

```css
--z-index-dropdown: 1000
--z-index-sticky: 1020
--z-index-fixed: 1030
--z-index-modal-backdrop: 1040
--z-index-modal: 1050
--z-index-popover: 1060
--z-index-tooltip: 1070
```

## Button Variants

### Primary

```css
background: var(--color-primary)
color: var(--color-white)
hover: var(--color-secondary)
```

### Secondary

```css
background: var(--color-secondary)
color: var(--color-white)
hover: var(--color-primary)
```

### Outline

```css
background: transparent
color: var(--color-primary)
border: 2px solid var(--color-primary)
hover: background var(--color-primary), color white
```

### Ghost

```css
background: transparent
color: var(--color-primary)
hover: var(--color-background-alt)
```

## Button Sizes

```css
Small:  padding: 0.5rem 1rem;    font-size: 0.875rem
Medium: padding: 1rem 2rem;      font-size: 1rem
Large:  padding: 1.5rem 3rem;    font-size: 1.125rem
```

## Breakpoints

```javascript
mobile: 480px
tablet: 768px
desktop: 1024px
wide: 1280px
```

### Media Query Usage

```css
@media (max-width: 768px) {
  /* Tablet and below */
}
```

## Animation Guidelines

### AOS Animations

- **fade-up**: Fade in from bottom
- **fade-down**: Fade in from top
- **fade-left**: Fade in from right
- **fade-right**: Fade in from left
- **zoom-in**: Scale up fade in

### Common Delays

```html
data-aos-delay="0"      /* No delay */
data-aos-delay="100"    /* Subtle stagger */
data-aos-delay="200"    /* Medium stagger */
data-aos-delay="300"    /* Large stagger */
```

### Duration Settings

```javascript
duration: 800           /* Default */
easing: 'ease-in-out'   /* Default */
once: true              /* Animate once only */
```

## Icon Sizes

```jsx
<Icon size={16} />  /* Small */
<Icon size={20} />  /* Medium */
<Icon size={24} />  /* Large */
<Icon size={32} />  /* XLarge */
```

## Common Lucide Icons Used

- Navigation: `Menu`, `X`
- Actions: `Download`, `Send`, `ArrowLeft`
- Social: `Facebook`, `Twitter`, `Instagram`, `Github`
- Contact: `Mail`, `Phone`, `MapPin`
- UI: `Home`, `Check`, `Calendar`, `Camera`, `Heart`

## CSS Class Naming (BEM)

```css
.block { }                    /* Component */
.block__element { }           /* Part of component */
.block__element--modifier { } /* Variation */
```

### Examples

```css
.nav-bar { }
.nav-bar__link { }
.nav-bar__link--active { }

.button { }
.button--primary { }
.button--large { }
```

## Accessibility

### Focus States

```css
*:focus {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}
```

### Color Contrast

- Text on white: Use `--color-text-dark` or `--color-text-light`
- Text on primary: Use `--color-white`
- Minimum contrast ratio: 4.5:1

## Usage Examples

### Applying Colors

```css
.element {
  color: var(--color-primary);
  background-color: var(--color-white);
}
```

### Applying Spacing

```css
.element {
  padding: var(--spacing-lg);
  margin-bottom: var(--spacing-md);
}
```

### Applying Typography

```css
.heading {
  font-family: var(--font-heading);
  font-size: var(--font-size-4xl);
  font-weight: var(--font-weight-bold);
}
```

---

**File Location**: `src/styles/variables.css`

**Import in Components**: Automatically available via base.css import
