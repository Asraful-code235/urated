import { ComponentProps } from 'react';
import { VariantProps } from 'class-variance-authority';
import { UIComponentProps, ButtonVariant, ButtonSize } from '../global/ui';

// Button variants configuration type
export interface ButtonVariantsConfig {
  variant: Record<ButtonVariant, string>;
  size: Record<ButtonSize, string>;
}

// Button component props
export interface ButtonProps extends 
  ComponentProps<'button'>, 
  UIComponentProps,
  VariantProps<any> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  asChild?: boolean;
}

// Button ref type
export type ButtonRef = HTMLButtonElement;
