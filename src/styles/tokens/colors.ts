export const colors = {
  // Primary colors
  primary: {
    900: '#171717',
    800: '#2A2A2A',
    700: '#3D3D3D',
    600: '#505050',
    500: '#636363',
    400: '#767676',
    300: '#898989',
    200: '#9C9C9C',
    100: '#AFAFAF',
    50: '#C2C2C2',
  },

  // Neutral/Gray scale
  neutral: {
    900: '#171717',
    800: '#2A2A2A',
    700: '#3D3D3D',
    600: '#505050',
    500: '#636363',
    400: '#767676',
    300: '#898989',
    200: '#B7B7B7',
    100: '#E8E8E8',
    50: '#FAFAFA',
  },

  // Background colors
  background: {
    primary: '#FFFFFF',
    secondary: '#FAFAFA',
    tertiary: '#F7F7F7',
    quaternary: '#F1F1F1',
    footer: '#F0F0F0',
  },

  // Accent colors
  accent: {
    warning: '#FFC633',
    error: '#FF3333',
    success: '#01AB31',
    info: '#179BD7',
  },

  // Flavor palette
  flavors: {
    cookies: '#A47941',
    banana: '#9A8955', 
    strawberry: '#AA5F5B',
    chocolate: '#2A130D',
  },

  // Text colors
  text: {
    primary: '#171717',
    secondary: 'rgba(0, 0, 0, 0.6)',
    tertiary: 'rgba(0, 0, 0, 0.4)',
    inverse: '#FFFFFF',
    light: '#B7B7B7',
  },

  // Border colors
  border: {
    light: 'rgba(0, 0, 0, 0.1)',
    medium: 'rgba(0, 0, 0, 0.2)',
    dark: '#171717',
  },

  // Sale/Discount colors
  sale: {
    background: 'rgba(255, 51, 51, 0.1)',
    text: '#FF3333',
  },

  // Brand specific
  brand: {
    primary: '#171717',
    secondary: '#FFC633',
  },
} as const;

export type Colors = typeof colors;