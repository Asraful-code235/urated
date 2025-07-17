import { ComponentProps } from 'react';
import { VariantProps } from 'class-variance-authority';
import { UIComponentProps } from '../global/ui';

// Badge variant types
export type BadgeVariant = 
  | 'default' 
  | 'secondary' 
  | 'destructive' 
  | 'outline'
  | 'success'
  | 'warning';

// Badge component props
export interface BadgeProps extends 
  ComponentProps<'div'>, 
  UIComponentProps,
  VariantProps<any> {
  variant?: BadgeVariant;
}

// Badge ref type
export type BadgeRef = HTMLDivElement;
