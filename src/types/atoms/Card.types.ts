import { ComponentProps } from 'react';
import { UIComponentProps, CardVariant } from '../global/ui';

// Card component props
export interface CardProps extends 
  ComponentProps<'div'>, 
  UIComponentProps {
  variant?: CardVariant;
}

// Card header props
export interface CardHeaderProps extends ComponentProps<'div'> {}

// Card title props
export interface CardTitleProps extends ComponentProps<'h3'> {}

// Card description props
export interface CardDescriptionProps extends ComponentProps<'p'> {}

// Card content props
export interface CardContentProps extends ComponentProps<'div'> {}

// Card footer props
export interface CardFooterProps extends ComponentProps<'div'> {}

// Card ref type
export type CardRef = HTMLDivElement;
