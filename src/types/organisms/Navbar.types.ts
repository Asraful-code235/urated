import { ReactNode } from 'react';
import { UIComponentProps } from '../global/ui';
import { NavItem } from '../global/common';

// Navbar props
export interface NavbarProps extends UIComponentProps {
  navItems: NavItem[];
  logo?: ReactNode;
  ctaButton?: NavbarCTA;
  variant?: 'default' | 'floating' | 'sticky' | 'transparent';
  position?: 'top' | 'bottom';
}

// Navbar CTA button
export interface NavbarCTA {
  label: string;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
}

// Desktop navigation props
export interface DesktopNavProps {
  navItems: NavItem[];
  logo?: ReactNode;
  ctaButton?: NavbarCTA;
}

// Mobile navigation props
export interface MobileNavProps {
  navItems: NavItem[];
  logo?: ReactNode;
  ctaButton?: NavbarCTA;
}

// Menu component props
export interface MenuProps {
  setActive: (item: string | null) => void;
  children: ReactNode;
}

// Menu item props
export interface MenuItemProps {
  setActive: (item: string) => void;
  active: string | null;
  item: string;
  children?: ReactNode;
}

// Product item props (for dropdown menus)
export interface ProductItemProps {
  title: string;
  description: string;
  href: string;
  src: string;
}

// Hovered link props
export interface HoveredLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
}

// Mobile child nav items props
export interface MobileChildNavItemsProps {
  navItem: NavItem;
}
