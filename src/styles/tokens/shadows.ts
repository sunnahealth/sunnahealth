export const shadows = {
  // Shadow definitions extracted from design
  none: 'none',

  // Payment badge shadows
  paymentBadge: [
    '0px 4.48214px 8.96429px rgba(183, 183, 183, 0.08)',
    '0px 0.448214px 4.48214px rgba(183, 183, 183, 0.08)'
  ].join(', '),

  // Card shadows (subtle)
  card: {
    light: '0px 2px 8px rgba(0, 0, 0, 0.04)',
    medium: '0px 4px 16px rgba(0, 0, 0, 0.08)',
    heavy: '0px 8px 32px rgba(0, 0, 0, 0.12)',
  },

  // Button shadows
  button: {
    default: 'none',
    hover: '0px 2px 8px rgba(23, 23, 23, 0.15)',
    active: '0px 1px 4px rgba(23, 23, 23, 0.2)',
  },

  // Focus shadows
  focus: {
    primary: '0 0 0 3px rgba(255, 198, 51, 0.3)',
    error: '0 0 0 3px rgba(255, 51, 51, 0.3)',
    success: '0 0 0 3px rgba(1, 171, 49, 0.3)',
  },

  // Elevation levels
  elevation: {
    0: 'none',
    1: '0px 1px 2px rgba(0, 0, 0, 0.05)',
    2: '0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.06)',
    3: '0px 4px 6px rgba(0, 0, 0, 0.07), 0px 2px 4px rgba(0, 0, 0, 0.06)',
    4: '0px 10px 15px rgba(0, 0, 0, 0.1), 0px 4px 6px rgba(0, 0, 0, 0.05)',
    5: '0px 20px 25px rgba(0, 0, 0, 0.1), 0px 10px 10px rgba(0, 0, 0, 0.04)',
    6: '0px 25px 50px rgba(0, 0, 0, 0.15), 0px 12px 20px rgba(0, 0, 0, 0.08)',
  },
} as const;

export type Shadows = typeof shadows;