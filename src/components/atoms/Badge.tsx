import type { EventBadgeProps } from '@/types';
import { cn } from '@/lib/utils';

const badgeVariants = {
  featured: 'bg-white border border-gray-200 text-gray-700',
  upcoming: 'bg-blue-100 border border-blue-200 text-blue-700',
  live: 'bg-red-100 border border-red-200 text-red-700'
};

export function Badge({ 
  label, 
  variant = 'featured', 
  className 
}: EventBadgeProps) {
  return (
    <span 
      className={cn(
        'inline-block px-3 py-1 text-sm rounded',
        badgeVariants[variant],
        className
      )}
      aria-label={`Event status: ${label}`}
    >
      {label}
    </span>
  );
}
