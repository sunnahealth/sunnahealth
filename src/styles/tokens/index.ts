// Design tokens export
export { colors, type Colors } from './colors';
export { typography, type Typography } from './typography';
export { spacing, type Spacing } from './spacing';
export { borders, type Borders } from './borders';
export { shadows, type Shadows } from './shadows';

// Import for combined object
import { colors } from './colors';
import { typography } from './typography';
import { spacing } from './spacing';
import { borders } from './borders';
import { shadows } from './shadows';

// Combined design system
export const designTokens = {
  colors,
  typography,
  spacing,
  borders,
  shadows,
} as const;

export type DesignTokens = typeof designTokens;