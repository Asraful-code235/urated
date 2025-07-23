// Component Props Interfaces for URated Application

export interface LogoProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
}

export interface NavigationLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  isActive?: boolean;
}

export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

export interface PlayButtonProps {
  onClick?: () => void;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export interface VideoThumbnailProps {
  src: string;
  alt: string;
  onPlay?: () => void;
  className?: string;
  aspectRatio?: string;
}

export interface EventBadgeProps {
  label: string;
  variant?: 'featured' | 'upcoming' | 'live';
  className?: string;
}

export interface EventCardProps {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  startDate: string;
  badge?: EventBadgeProps;
  onJoin?: () => void;
  className?: string;
}

export interface CountdownTimerProps {
  value: number;
  label: string;
  className?: string;
}

export interface CountdownDisplayProps {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  className?: string;
}

export interface NavigationBarProps {
  logo: LogoProps;
  links: NavigationLinkProps[];
  ctaButton?: ButtonProps;
  className?: string;
}

export interface HeroSectionProps {
  backgroundImage: string;
  logo: LogoProps;
  title: string;
  subtitle: string;
  ctaButton: ButtonProps;
  className?: string;
}

export interface AboutSectionProps {
  backgroundImage: string;
  title: string;
  description: string;
  ctaButton: ButtonProps;
  videoThumbnail: VideoThumbnailProps;
  className?: string;
}

export interface ClanMashupSectionProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
  description: string;
  ctaButton: ButtonProps;
  videoThumbnails: VideoThumbnailProps[];
  className?: string;
}

export interface LaunchTimeSectionProps {
  backgroundImage: string;
  logo: LogoProps;
  title: string;
  subtitle: string;
  description: string;
  countdown: CountdownDisplayProps;
  className?: string;
}

export interface EventsSectionProps {
  backgroundImage: string;
  title: string;
  description: string;
  events: EventCardProps[];
  seeAllButton: ButtonProps;
  className?: string;
}

export interface HeaderProps {
  navigation: NavigationBarProps;
  className?: string;
}

// Event data interface
export interface EventData {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  startDate: string;
  badge: {
    label: string;
    variant: 'featured' | 'upcoming' | 'live';
  };
}

// Page metadata interface
export interface PageMetadata {
  title: string;
  description: string;
  keywords?: string[];
  openGraph?: {
    title: string;
    description: string;
    image?: string;
    url?: string;
  };
  twitter?: {
    card: 'summary' | 'summary_large_image';
    title: string;
    description: string;
    image?: string;
  };
}
