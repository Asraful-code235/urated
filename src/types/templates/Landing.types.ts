import { ReactNode } from 'react';
import { UIComponentProps } from '../global/ui';
import { HeroProps } from '../molecules/Hero.types';
import { FeaturedSectionProps } from '../molecules/FeaturedSection.types';

// Landing page template props
export interface LandingTemplateProps extends UIComponentProps {
  hero: HeroProps;
  sections?: LandingSection[];
  cta?: LandingCTA;
}

// Landing page section
export interface LandingSection {
  id: string;
  type: 'features' | 'testimonials' | 'pricing' | 'faq' | 'contact' | 'custom';
  props?: any;
  content?: ReactNode;
}

// Landing page CTA
export interface LandingCTA {
  title: string;
  description?: string;
  primaryAction: {
    label: string;
    href: string;
  };
  secondaryAction?: {
    label: string;
    href: string;
  };
  background?: 'default' | 'gradient' | 'image';
}

// Testimonial props
export interface TestimonialProps {
  quote: string;
  author: string;
  role?: string;
  company?: string;
  avatar?: string;
  rating?: number;
}

// Pricing tier props
export interface PricingTierProps {
  name: string;
  price: string | number;
  period?: string;
  description?: string;
  features: string[];
  highlighted?: boolean;
  ctaText?: string;
  ctaHref?: string;
}

// FAQ item props
export interface FAQItemProps {
  question: string;
  answer: string;
}
