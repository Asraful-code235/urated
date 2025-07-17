import { ReactNode } from 'react';
import { UIComponentProps } from '../global/ui';

// Dashboard template props
export interface DashboardTemplateProps extends UIComponentProps {
  children: ReactNode;
  sidebar: ReactNode;
  header?: ReactNode;
  breadcrumbs?: DashboardBreadcrumb[];
  user?: DashboardUser;
}

// Dashboard breadcrumb
export interface DashboardBreadcrumb {
  label: string;
  href?: string;
  icon?: ReactNode;
}

// Dashboard user info
export interface DashboardUser {
  name: string;
  email?: string;
  avatar?: string;
  role?: string;
}

// Dashboard widget props
export interface DashboardWidgetProps extends UIComponentProps {
  title: string;
  description?: string;
  icon?: ReactNode;
  value?: string | number;
  trend?: {
    value: number;
    direction: 'up' | 'down' | 'neutral';
    label?: string;
  };
  loading?: boolean;
}

// Dashboard stats props
export interface DashboardStatsProps {
  stats: DashboardStat[];
  layout?: 'grid' | 'list';
  columns?: 1 | 2 | 3 | 4;
}

// Dashboard stat item
export interface DashboardStat {
  label: string;
  value: string | number;
  icon?: ReactNode;
  trend?: {
    value: number;
    direction: 'up' | 'down' | 'neutral';
  };
  color?: string;
}
