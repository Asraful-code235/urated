import { cn } from '@/lib/utils';

interface SocialIconProps {
  src: string;
  alt: string;
  href?: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
}

const sizeClasses = {
  sm: 'w-6 h-6 lg:w-8 lg:h-8',
  md: 'w-8 h-8',
  lg: 'w-[52px] h-[52px]'
};

export function SocialIcon({ 
  src, 
  alt, 
  href, 
  size = 'md', 
  className,
  onClick 
}: SocialIconProps) {
  const iconElement = (
    <img
      src={src}
      alt={alt}
      className={cn(
        sizeClasses[size],
        'hover:scale-110 transition-transform cursor-pointer',
        className
      )}
      onClick={onClick}
    />
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {iconElement}
      </a>
    );
  }

  return iconElement;
}
