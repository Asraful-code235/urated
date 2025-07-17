import { ReactNode } from 'react';
import { UIComponentProps } from '../global/ui';
import { NavbarProps } from './Navbar.types';
import { FooterProps } from './Footer.types';

// Main layout props
export interface LayoutProps extends UIComponentProps {
  children: ReactNode;
  navbar?: NavbarProps;
  footer?: FooterProps;
  sidebar?: ReactNode;
  variant?: 'default' | 'dashboard' | 'landing' | 'minimal';
}

// Page layout props
export interface PageLayoutProps extends UIComponentProps {
  children: ReactNode;
  title?: string;
  description?: string;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
}

// Dashboard layout props
export interface DashboardLayoutProps extends UIComponentProps {
  children: ReactNode;
  sidebar: ReactNode;
  header?: ReactNode;
  sidebarCollapsed?: boolean;
  onSidebarToggle?: () => void;
}

// Container props
export interface ContainerProps extends UIComponentProps {
  children: ReactNode;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  centered?: boolean;
}
