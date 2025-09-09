# Sunna Health Design System

A comprehensive design system built from Figma designs for the Sunna Health ecommerce platform.

## 🎨 Design Tokens

### Colors
- **Primary**: `#171717` (Dark text/backgrounds)
- **Background**: `#FAFAFA` (Light gray base)
- **Accent**: `#FFC633` (Stars/ratings)
- **Error/Sale**: `#FF3333`
- **Success**: `#01AB31`
- **Flavor Colors**: Cookies (`#A47941`), Banana (`#9A8955`), Strawberry (`#AA5F5B`), Chocolate (`#2A130D`)

### Typography
- **Primary Font**: Poppins (headings, body text)
- **Secondary Font**: Satoshi (buttons, testimonial names)
- **Hierarchy**: 64px (hero) → 48px (sections) → 32px (logo) → 20px (products) → 16px (body)

### Spacing Scale
- `4px, 8px, 12px, 16px, 24px, 32px, 40px, 55px, 64px`
- **Container**: 1240px max-width, 100px side padding (desktop)

### Border Radius
- **Cards**: 24px
- **Flavor Cards**: 20px  
- **Buttons/Pills**: 62px

## 🧩 Components

### UI Components
- **Button** - Primary, secondary, outline variants
- **ProductCard** - Product display with rating, pricing, discount
- **SearchBar** - Header search functionality
- **TestimonialCard** - Customer review display

### Layout Components
- **Container** - Responsive wrapper with proper spacing
- **Header** - Navigation with logo, menu, search, icons

## 📱 Responsive Design

### Breakpoints
- **Mobile**: 640px and below (1 column)
- **Tablet**: 768px and up (2 columns)
- **Desktop**: 1024px and up (3 columns)
- **Wide**: 1440px (design canvas width)

### Grid Patterns
- **Products**: 1 → 2 → 3 columns
- **Testimonials**: 1 → 2 → 3 columns

## 🎯 Usage

### CSS Classes
Use these utility classes for consistent styling:

```css
/* Typography */
.text-hero          /* 64px hero text */
.text-section-header /* 48px section headers */
.text-product-name  /* 20px product names */
.text-price         /* 22px prices */

/* Buttons */
.btn-primary        /* Dark background button */
.btn-secondary      /* Light border button */

/* Layout */
.container-custom   /* Responsive container */
.product-grid       /* Responsive product grid */
.star-rating        /* Star shape clip-path */
```

### Component Import
```tsx
import { Button, ProductCard, Container } from '@/components';

// Usage
<Container>
  <Button variant="primary" size="lg">Shop Now</Button>
  <ProductCard {...productData} />
</Container>
```

## 🛠 Development

All design tokens are stored in `/src/styles/tokens/` and exported from the index file. Components follow atomic design principles with UI components being the smallest reusable pieces.

### File Structure
```
src/
├── styles/
│   ├── tokens/          # Design tokens
│   └── README.md        # This file
├── components/
│   ├── ui/              # Reusable UI components
│   └── layout/          # Layout components
└── index.css            # Global styles & utilities
```