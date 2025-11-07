# REcipe Website Assets

This directory contains all static assets for the REcipe website.

## Directory Structure

### `/images`

Placeholder images for website layout. Replace these with final designs:

- `placeholder-hero.jpg` - Hero section image
- `placeholder-feature.jpg` - Feature section images
- `placeholder-download.jpg` - Download page app screenshots

Current placeholders use Unsplash for demonstration purposes.

### `/icons`

Custom icons and graphics (if needed beyond Lucide React icons)

### `/fonts`

Custom font files:

- `sugo-display.woff2` - Sugo Display font for major headings (to be added)
- `rubik.woff2` - Rubik font for body text (currently using Google Fonts fallback)

## Adding Fonts

To add custom fonts:

1. Place font files in this directory
2. Uncomment the `@font-face` declarations in `src/styles/base.css`
3. Update the font file paths if needed

## Image Guidelines

- Use optimized images (WebP format recommended)
- Maximum file size: 500KB per image
- Recommended dimensions:
  - Hero images: 1200x800px
  - Feature cards: 600x400px
  - Mobile screenshots: 400x800px
