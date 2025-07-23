import Image from 'next/image';
import { cn } from '@/lib/utils';

interface SocialIconProps {
  src: string;
  alt: string;
  href?: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  'aria-label'?: string;
}

const sizeMap = {
  sm: { width: 24, height: 24, lgWidth: 32, lgHeight: 32 },
  md: { width: 32, height: 32, lgWidth: 32, lgHeight: 32 },
  lg: { width: 52, height: 52, lgWidth: 52, lgHeight: 52 }
};

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
  onClick,
  'aria-label': ariaLabel
}: SocialIconProps) {
  const sizeConfig = sizeMap[size];

  const iconElement = (
    <Image
      src={src}
      alt={alt}
      width={sizeConfig.width}
      height={sizeConfig.height}
      sizes="(max-width: 1024px) 24px, 32px"
      className={cn(
        sizeClasses[size],
        'hover:scale-110 active:scale-95 transition-all duration-200 ease-out cursor-pointer motion-reduce:transition-none motion-reduce:hover:scale-100 motion-reduce:active:scale-100',
        className
      )}
      onClick={onClick}
      placeholder="blur"
      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
    />
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={ariaLabel || `Visit our ${alt} page`}
        className="inline-block focus:outline-none focus:ring-2 focus:ring-urated-yellow focus:ring-offset-2 rounded-lg"
      >
        {iconElement}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      aria-label={ariaLabel || alt}
      className="inline-block focus:outline-none focus:ring-2 focus:ring-urated-yellow focus:ring-offset-2 rounded-lg"
    >
      {iconElement}
    </button>
  );
}
