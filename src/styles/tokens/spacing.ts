export const spacing = {
  // Base spacing scale
  0: '0px',
  1: '4px',
  2: '8px',
  3: '12px',
  4: '16px',
  5: '20px',
  6: '24px',
  8: '32px',
  10: '40px',
  12: '48px',
  14: '56px',
  16: '64px',
  20: '80px',
  24: '96px',
  28: '112px',
  32: '128px',

  // Design-specific spacing from Figma
  xs: '4px',      // Very small gaps
  sm: '8px',      // Small gaps
  md: '12px',     // Medium gaps (form inputs, small buttons)
  lg: '16px',     // Large gaps (cards, sections)
  xl: '24px',     // Extra large gaps (between sections)
  '2xl': '32px',  // Section spacing
  '3xl': '40px',  // Large section spacing
  '4xl': '55px',  // Product grid gaps
  '5xl': '64px',  // Large section padding

  // Container and layout
  container: {
    maxWidth: '1240px',
    paddingX: '100px',  // Side margins
  },

  // Component-specific spacing
  card: {
    padding: '32px 40px',
    gap: '24px',
  },

  button: {
    paddingY: '16px',
    paddingX: '54px',
    gap: '12px',
  },

  input: {
    padding: '12px 16px',
    gap: '12px',
  },

  nav: {
    gap: '24px',
    itemGap: '40px',
  },

  product: {
    cardGap: '55px',
    imageGap: '46px 80px',
    contentGap: '16px',
  },

  testimonial: {
    gap: '20px',
    cardPadding: '28px 32px',
    contentGap: '15px',
  },

  footer: {
    padding: '36px 64px',
    sectionGap: '207px',
    itemGap: '26px',
  },

  flavor: {
    cardPadding: '32px',
    titleOffset: '32px 32px',
  },
} as const;

export type Spacing = typeof spacing;