export const borders = {
  // Border widths
  width: {
    none: '0px',
    thin: '1px',
    medium: '2px',
    thick: '3px',
  },

  // Border radius values from design
  radius: {
    none: '0px',
    sm: '5px',      // Payment badges
    md: '20px',     // Cards, flavor cards
    lg: '24px',     // Product cards, image containers
    xl: '40px',     // Large background sections
    full: '50px',   // Circular elements (arrows)
    pill: '62px',   // Buttons, search bar, newsletter
  },

  // Border styles
  style: {
    solid: 'solid',
    dashed: 'dashed',
    dotted: 'dotted',
    none: 'none',
  },

  // Common border combinations
  presets: {
    card: {
      width: '1px',
      style: 'solid',
      color: 'rgba(0, 0, 0, 0.1)',
      radius: '24px',
    },

    button: {
      primary: {
        width: '0px',
        style: 'none',
        radius: '62px',
      },
      secondary: {
        width: '1px',
        style: 'solid',
        color: 'rgba(0, 0, 0, 0.1)',
        radius: '62px',
      },
    },

    input: {
      width: '0px',
      style: 'none',
      radius: '62px',
    },

    flavorCard: {
      width: '0px',
      style: 'none',
      radius: '20px',
    },

    testimonial: {
      width: '1px',
      style: 'solid',
      color: 'rgba(0, 0, 0, 0.1)',
      radius: '20px',
    },

    paymentBadge: {
      width: '0.224107px',
      style: 'solid',
      color: '#D6DCE5',
      radius: '5.37857px',
    },

    socialIcon: {
      circular: {
        width: '1px',
        style: 'solid',
        color: 'rgba(0, 0, 0, 0.2)',
        radius: '50%',
      },
      filled: {
        width: '0px',
        style: 'none',
        radius: '50%',
      },
    },

    arrow: {
      width: '1px',
      style: 'solid',
      color: '#171717',
      radius: '50px',
    },
  },
} as const;

export type Borders = typeof borders;