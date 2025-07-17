// Theme and design system types

export type ColorVariant = 
  | 'primary' 
  | 'secondary' 
  | 'accent' 
  | 'destructive' 
  | 'muted' 
  | 'background' 
  | 'foreground';

export type SizeVariant = 'sm' | 'md' | 'lg' | 'xl';

export type SpacingVariant = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

export type BorderRadiusVariant = 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full';

// URated specific color scheme
export interface URatedColors {
  primaryBackground: string;
  accentPrimary: string;
  accentSecondary: string;
  textPrimary: string;
  textSecondary: string;
}

// Typography variants
export type FontWeight = 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold';

export type FontFamily = 'heading' | 'body' | 'mono';

export interface TypographyProps {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body' | 'caption' | 'overline';
  weight?: FontWeight;
  family?: FontFamily;
  color?: ColorVariant;
}
