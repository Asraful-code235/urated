import type { LogoProps } from '@/types';
import { cn } from '@/lib/utils';

export function Logo({ src, alt, className, width = 36, height = 36 }: LogoProps) {
  return (
    <img 
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={cn('rounded-full', className)}
      loading="eager"
    />
  );
}
