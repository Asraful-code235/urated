import { ReactNode } from 'react';

// Common utility types used across the application
export interface BaseComponentProps {
  className?: string;
  children?: ReactNode;
}

export interface WithId {
  id: string;
}

export interface WithOptionalId {
  id?: string;
}

export interface WithTitle {
  title: string;
}

export interface WithDescription {
  description: string;
}

export interface WithHref {
  href: string;
}

export interface WithIcon {
  icon?: ReactNode;
}

export interface WithLoading {
  isLoading?: boolean;
}

export interface WithDisabled {
  disabled?: boolean;
}

// Animation related types
export interface AnimationProps {
  initial?: object;
  animate?: object;
  transition?: object;
  delay?: number;
}

// Form related types
export interface FormFieldProps {
  label?: string;
  placeholder?: string;
  required?: boolean;
  error?: string;
}

// Navigation types
export interface NavItem extends WithTitle, WithHref {
  children?: NavItem[];
}

// Social media types
export interface SocialLink extends WithTitle, WithHref, WithIcon {
  platform: 'discord' | 'twitch' | 'twitter' | 'youtube' | 'instagram';
}
