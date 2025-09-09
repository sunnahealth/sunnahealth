export const typography = {
  // Font families
  fontFamily: {
    primary: 'Poppins, sans-serif',
    secondary: 'Satoshi, sans-serif',
  },

  // Font sizes
  fontSize: {
    // Hero and large headings
    '5xl': '64px',   // Hero text
    '4xl': '48px',   // Section headers
    '3xl': '40px',   // Newsletter header
    '2xl': '36px',   // Flavor names
    'xl': '32px',    // Logo
    'lg': '22px',    // Product prices
    'base': '20px',  // Product names
    'sm': '16px',    // Body text, navigation
    'xs': '14px',    // Small text, descriptions
    '2xs': '12px',   // Discount labels
  },

  // Line heights
  lineHeight: {
    tight: '1.0',    // 64px/64px for hero
    snug: '1.1',     // 22px/20px for product names
    normal: '1.375', // 22px/16px for body
    relaxed: '1.5',  // 48px/32px for logo
    loose: '1.57',   // 22px/14px for descriptions
  },

  // Font weights
  fontWeight: {
    light: '300',
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
  },

  // Preset text styles
  presets: {
    // Heroes
    hero: {
      fontFamily: 'Poppins, sans-serif',
      fontSize: '64px',
      lineHeight: '64px',
      fontWeight: '700',
      letterSpacing: 'normal',
    },

    // Headers
    h1: {
      fontFamily: 'Poppins, sans-serif',
      fontSize: '48px',
      lineHeight: '72px',
      fontWeight: '700',
      letterSpacing: 'normal',
    },

    h2: {
      fontFamily: 'Poppins, sans-serif',
      fontSize: '40px',
      lineHeight: '45px',
      fontWeight: '700',
      letterSpacing: 'normal',
    },

    h3: {
      fontFamily: 'Poppins, sans-serif',
      fontSize: '36px',
      lineHeight: '54px',
      fontWeight: '500',
      letterSpacing: 'normal',
    },

    h4: {
      fontFamily: 'Poppins, sans-serif',
      fontSize: '32px',
      lineHeight: '48px',
      fontWeight: '700',
      letterSpacing: 'normal',
    },

    // Body text
    bodyLarge: {
      fontFamily: 'Poppins, sans-serif',
      fontSize: '20px',
      lineHeight: '30px',
      fontWeight: '400',
      letterSpacing: 'normal',
    },

    body: {
      fontFamily: 'Poppins, sans-serif',
      fontSize: '16px',
      lineHeight: '22px',
      fontWeight: '400',
      letterSpacing: 'normal',
    },

    bodySmall: {
      fontFamily: 'Poppins, sans-serif',
      fontSize: '14px',
      lineHeight: '22px',
      fontWeight: '300',
      letterSpacing: 'normal',
    },

    // Prices
    price: {
      fontFamily: 'Poppins, sans-serif',
      fontSize: '22px',
      lineHeight: '33px',
      fontWeight: '500',
      letterSpacing: 'normal',
    },

    priceStrikethrough: {
      fontFamily: 'Poppins, sans-serif',
      fontSize: '22px',
      lineHeight: '33px',
      fontWeight: '400',
      letterSpacing: 'normal',
      textDecoration: 'line-through',
    },

    // Navigation
    nav: {
      fontFamily: 'Poppins, sans-serif',
      fontSize: '16px',
      lineHeight: '24px',
      fontWeight: '400',
      letterSpacing: 'normal',
    },

    // Buttons
    button: {
      fontFamily: 'Poppins, sans-serif',
      fontSize: '16px',
      lineHeight: '24px',
      fontWeight: '500',
      letterSpacing: 'normal',
    },

    buttonLarge: {
      fontFamily: 'Satoshi, sans-serif',
      fontSize: '16px',
      lineHeight: '22px',
      fontWeight: '500',
      letterSpacing: 'normal',
    },

    // Labels and small text
    label: {
      fontFamily: 'Poppins, sans-serif',
      fontSize: '12px',
      lineHeight: '18px',
      fontWeight: '400',
      letterSpacing: 'normal',
    },

    // Testimonial names
    testimonialName: {
      fontFamily: 'Satoshi, sans-serif',
      fontSize: '20px',
      lineHeight: '22px',
      fontWeight: '700',
      letterSpacing: 'normal',
    },

    // Footer sections
    footerHeading: {
      fontFamily: 'Poppins, sans-serif',
      fontSize: '16px',
      lineHeight: '18px',
      fontWeight: '500',
      letterSpacing: '3px',
      textTransform: 'uppercase',
    },

    footerLink: {
      fontFamily: 'Poppins, sans-serif',
      fontSize: '16px',
      lineHeight: '19px',
      fontWeight: '300',
      letterSpacing: 'normal',
    },
  },
} as const;

export type Typography = typeof typography;