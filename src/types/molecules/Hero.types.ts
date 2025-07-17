import { ReactNode } from 'react';
import { UIComponentProps } from '../global/ui';
import { AnimationProps } from '../global/common';

// Hero section props
export interface HeroProps extends UIComponentProps, AnimationProps {
  title: string;
  subtitle?: string;
  description?: string;
  primaryAction?: HeroAction;
  secondaryAction?: HeroAction;
  backgroundImage?: string;
  backgroundVideo?: string;
  overlay?: boolean;
  variant?: 'default' | 'split' | 'centered' | 'minimal';
}

// Hero action button
export interface HeroAction {
  label: string;
  href?: string;
  onClick?: () => void;
  icon?: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
}

// Hero stats/metrics
export interface HeroStat {
  label: string;
  value: string | number;
  icon?: ReactNode;
  color?: string;
}

// Gaming dashboard mockup props (for URated hero)
export interface GamingDashboardProps {
  playerName?: string;
  rank?: string;
  winRate?: string;
  matches?: string;
  points?: string;
  liveMatches?: LiveMatch[];
  clanMembers?: ClanMember[];
}

// Live match data
export interface LiveMatch {
  title: string;
  status: 'live' | 'searching' | 'completed';
  statusColor?: string;
}

// Clan member data
export interface ClanMember {
  name: string;
  status: 'online' | 'away' | 'offline';
  statusColor?: string;
}
