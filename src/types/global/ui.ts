import { ReactNode } from 'react';
import { VariantProps } from 'class-variance-authority';

// UI component base types
export interface UIComponentProps {
  className?: string;
  children?: ReactNode;
  'data-testid'?: string;
}

// Button variant types (will be used by Button component)
export type ButtonVariant = 
  | 'default' 
  | 'destructive' 
  | 'outline' 
  | 'secondary' 
  | 'ghost' 
  | 'link';

export type ButtonSize = 'default' | 'sm' | 'lg' | 'icon';

// Alert variant types
export type AlertVariant = 'default' | 'destructive';

// Card variant types
export type CardVariant = 'default' | 'elevated' | 'outlined';

// Input variant types
export type InputVariant = 'default' | 'filled' | 'outlined';

// Modal/Dialog types
export interface ModalProps extends UIComponentProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  title?: string;
  description?: string;
}

// Tooltip types
export interface TooltipProps extends UIComponentProps {
  content: ReactNode;
  side?: 'top' | 'right' | 'bottom' | 'left';
  align?: 'start' | 'center' | 'end';
}

// Loading states
export type LoadingState = 'idle' | 'loading' | 'success' | 'error';

// Generic variant props type for CVA components
export type CVAVariantProps<T> = VariantProps<T>;
