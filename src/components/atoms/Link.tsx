import Link from 'next/link';
import type { NavigationLinkProps } from '@/types';
import { cn } from '@/lib/utils';

export function URatedLink({ 
  href, 
  children, 
  className, 
  isActive = false 
}: NavigationLinkProps) {
  return (
    <Link 
      href={href}
      className={cn(
        'text-urated-cream font-inter font-bold text-base hover:text-urated-yellow transition-colors',
        isActive && 'text-urated-yellow',
        className
      )}
      aria-current={isActive ? 'page' : undefined}
    >
      {children}
    </Link>
  );
}
