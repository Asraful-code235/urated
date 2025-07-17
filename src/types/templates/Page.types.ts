import { ReactNode } from 'react';
import { Metadata } from 'next';
import { UIComponentProps } from '../global/ui';

// Base page template props
export interface PageTemplateProps extends UIComponentProps {
  children: ReactNode;
  metadata?: Metadata;
  title?: string;
  description?: string;
  breadcrumbs?: Breadcrumb[];
}

// Breadcrumb item
export interface Breadcrumb {
  label: string;
  href?: string;
  current?: boolean;
}

// Error page props
export interface ErrorPageProps {
  statusCode: number;
  title?: string;
  description?: string;
  action?: {
    label: string;
    href: string;
  };
}

// Loading page props
export interface LoadingPageProps {
  message?: string;
  progress?: number;
}
