import { ComponentProps } from 'react';
import { UIComponentProps } from '../global/ui';
import { SizeVariant } from '../global/theme';

// Avatar component props
export interface AvatarProps extends 
  ComponentProps<'span'>, 
  UIComponentProps {
  size?: SizeVariant;
}

// Avatar image props
export interface AvatarImageProps extends ComponentProps<'img'> {
  src: string;
  alt: string;
}

// Avatar fallback props
export interface AvatarFallbackProps extends ComponentProps<'span'> {}

// Avatar ref type
export type AvatarRef = HTMLSpanElement;
