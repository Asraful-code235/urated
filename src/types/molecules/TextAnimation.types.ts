import { UIComponentProps } from '../global/ui';
import { AnimationProps, TypographyProps } from '../global';

// Base text animation props
export interface BaseTextAnimationProps extends 
  UIComponentProps, 
  AnimationProps,
  TypographyProps {
  text: string;
  duration?: number;
  delay?: number;
}

// Typewriter effect props
export interface TypewriterEffectProps extends BaseTextAnimationProps {
  speed?: number;
  cursor?: boolean;
  cursorChar?: string;
  loop?: boolean;
}

// Blur fade in props
export interface BlurFadeInProps extends BaseTextAnimationProps {
  direction?: 'up' | 'down' | 'left' | 'right';
  distance?: number;
}

// Flipping words props
export interface FlippingWordsProps extends BaseTextAnimationProps {
  words: string[];
  interval?: number;
  stagger?: number;
}

// Text reveal props
export interface TextRevealProps extends BaseTextAnimationProps {
  revealDirection?: 'left' | 'right' | 'center';
  maskColor?: string;
}

// Gradient text props
export interface GradientTextProps extends BaseTextAnimationProps {
  gradient: string;
  animated?: boolean;
}
