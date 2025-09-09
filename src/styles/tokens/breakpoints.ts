export const breakpoints = {
  // Base breakpoints
  xs: '320px',   // Small mobile
  sm: '640px',   // Mobile
  md: '768px',   // Tablet
  lg: '1024px',  // Desktop
  xl: '1280px',  // Large desktop
  '2xl': '1440px', // Design width

  // Design-specific breakpoints
  mobile: '640px',
  tablet: '768px', 
  desktop: '1024px',
  wide: '1440px',   // Design canvas width

  // Content breakpoints
  content: {
    narrow: '640px',
    medium: '768px',
    wide: '1024px',
    max: '1240px',  // Container max-width from design
  },
} as const;

// Responsive design patterns from the Figma design
export const responsivePatterns = {
  // Container patterns
  container: {
    padding: {
      mobile: '16px',    // Mobile padding
      tablet: '32px',    // Tablet padding
      desktop: '100px',  // Desktop padding (from design)
    },
    maxWidth: '1240px',  // From design
  },

  // Typography scaling
  typography: {
    hero: {
      mobile: '32px',
      tablet: '48px', 
      desktop: '64px',  // From design
    },
    h1: {
      mobile: '28px',
      tablet: '36px',
      desktop: '48px',  // From design
    },
    h2: {
      mobile: '24px',
      tablet: '32px',
      desktop: '40px',  // From design
    },
    h3: {
      mobile: '20px',
      tablet: '28px',
      desktop: '36px',  // From design
    },
    body: {
      mobile: '14px',
      tablet: '15px',
      desktop: '16px',  // From design
    },
  },

  // Grid patterns
  grid: {
    products: {
      mobile: '1fr',              // 1 column
      tablet: 'repeat(2, 1fr)',   // 2 columns
      desktop: 'repeat(3, 1fr)',  // 3 columns (from design)
    },
    testimonials: {
      mobile: '1fr',              // 1 column
      tablet: 'repeat(2, 1fr)',   // 2 columns
      desktop: 'repeat(3, 1fr)',  // 3 columns (from design)
    },
  },

  // Spacing scaling
  spacing: {
    section: {
      mobile: '32px',
      tablet: '48px',
      desktop: '64px',
    },
    component: {
      mobile: '16px',
      tablet: '20px', 
      desktop: '24px',
    },
  },
} as const;

export type Breakpoints = typeof breakpoints;
export type ResponsivePatterns = typeof responsivePatterns;