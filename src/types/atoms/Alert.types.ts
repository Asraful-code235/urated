import { ComponentProps, ReactNode } from 'react';
import { VariantProps } from 'class-variance-authority';
import { UIComponentProps, AlertVariant } from '../global/ui';

// Alert component props
export interface AlertProps extends 
  ComponentProps<'div'>, 
  UIComponentProps,
  VariantProps<any> {
  variant?: AlertVariant;
}

// Alert title props
export interface AlertTitleProps extends ComponentProps<'h5'> {}

// Alert description props  
export interface AlertDescriptionProps extends ComponentProps<'div'> {}

// Alert ref type
export type AlertRef = HTMLDivElement;
