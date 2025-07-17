import { ReactNode } from 'react';
import { UIComponentProps } from '../global/ui';
import { AnimationProps, WithIcon, WithTitle, WithDescription } from '../global/common';

// Featured section props
export interface FeaturedSectionProps extends UIComponentProps, AnimationProps {
  title: string;
  subtitle?: string;
  description?: string;
  features: Feature[];
  layout?: 'grid' | 'list' | 'carousel';
  columns?: 1 | 2 | 3 | 4;
}

// Individual feature item
export interface Feature extends WithTitle, WithDescription, WithIcon {
  href?: string;
  badge?: string;
  image?: string;
  stats?: FeatureStat[];
}

// Feature statistics
export interface FeatureStat {
  label: string;
  value: string | number;
  unit?: string;
  trend?: 'up' | 'down' | 'neutral';
}

// Three column with large icon specific props
export interface ThreeColumnFeatureProps extends UIComponentProps, AnimationProps {
  features: LargeIconFeature[];
  title?: string;
  subtitle?: string;
}

// Large icon feature item
export interface LargeIconFeature extends WithTitle, WithDescription {
  icon: ReactNode;
  iconColor?: string;
  iconBackground?: string;
}
