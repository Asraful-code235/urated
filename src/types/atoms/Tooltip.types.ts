import { ComponentProps, ReactNode } from 'react';
import { UIComponentProps, TooltipProps as BaseTooltipProps } from '../global/ui';

// Extended tooltip props
export interface TooltipProps extends BaseTooltipProps {
  trigger: ReactNode;
  delayDuration?: number;
  skipDelayDuration?: number;
}

// Tooltip content props
export interface TooltipContentProps extends 
  ComponentProps<'div'>, 
  UIComponentProps {
  side?: 'top' | 'right' | 'bottom' | 'left';
  align?: 'start' | 'center' | 'end';
  sideOffset?: number;
  alignOffset?: number;
}

// Tooltip trigger props
export interface TooltipTriggerProps extends ComponentProps<'button'> {}

// Tooltip ref types
export type TooltipRef = HTMLDivElement;
export type TooltipTriggerRef = HTMLButtonElement;
