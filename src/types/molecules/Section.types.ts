import { ReactNode } from 'react';
import { UIComponentProps } from '../global/ui';
import { AnimationProps } from '../global/common';

// Base section props
export interface SectionProps extends UIComponentProps, AnimationProps {
  title?: string;
  subtitle?: string;
  description?: string;
  background?: 'default' | 'muted' | 'accent' | 'gradient';
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
}

// Launch banner props
export interface LaunchBannerProps extends UIComponentProps, AnimationProps {
  title: string;
  description?: string;
  ctaText?: string;
  ctaHref?: string;
  dismissible?: boolean;
  onDismiss?: () => void;
  variant?: 'info' | 'success' | 'warning' | 'error';
}

// Clan mashup teaser props
export interface ClanMashupTeaserProps extends UIComponentProps, AnimationProps {
  title: string;
  description?: string;
  features?: string[];
  image?: string;
  video?: string;
  ctaText?: string;
  ctaHref?: string;
  comingSoon?: boolean;
}

// Generic content section props
export interface ContentSectionProps extends SectionProps {
  content: ReactNode;
  sidebar?: ReactNode;
  layout?: 'default' | 'sidebar-left' | 'sidebar-right' | 'centered';
}
