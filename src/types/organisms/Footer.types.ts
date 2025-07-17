import { ReactNode } from 'react';
import { UIComponentProps } from '../global/ui';
import { SocialLink, NavItem } from '../global/common';

// Footer props
export interface FooterProps extends UIComponentProps {
  logo?: ReactNode;
  description?: string;
  sections?: FooterSection[];
  socials?: SocialLink[];
  copyright?: string;
  variant?: 'default' | 'minimal' | 'detailed';
}

// Footer section
export interface FooterSection {
  title: string;
  links: NavItem[];
}

// Footer column props
export interface FooterColumnProps {
  title: string;
  links: NavItem[];
}

// Footer social links props
export interface FooterSocialLinksProps {
  socials: SocialLink[];
  variant?: 'horizontal' | 'vertical';
}

// Footer newsletter props
export interface FooterNewsletterProps {
  title?: string;
  description?: string;
  placeholder?: string;
  onSubmit?: (email: string) => void | Promise<void>;
}

// Footer bottom props
export interface FooterBottomProps {
  copyright?: string;
  links?: NavItem[];
}
