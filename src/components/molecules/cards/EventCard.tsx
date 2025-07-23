'use client';

import type { EventCardProps } from '@/types';
import { Badge } from '@/components/atoms/Badge';
import { URatedButton } from '@/components/atoms/URatedButton';
import { cn } from '@/lib/utils';

export function EventCard({ 
  id,
  title, 
  description, 
  imageUrl, 
  imageAlt, 
  startDate, 
  badge, 
  onJoin, 
  className 
}: EventCardProps) {
  return (
    <article 
      className={cn('bg-white rounded-2xl shadow-lg overflow-hidden', className)}
      aria-labelledby={`event-title-${id}`}
    >
      <img
        src={imageUrl}
        alt={imageAlt}
        className="w-full h-48 md:h-56 object-cover"
        loading="lazy"
      />
      <div className="p-4 md:p-6">
        {badge && (
          <div className="mb-4 md:mb-5">
            <Badge {...badge} />
          </div>
        )}
        <div className="mb-4 md:mb-6">
          <h3 
            id={`event-title-${id}`}
            className="font-bebas-neue text-2xl md:text-3xl text-gray-800 mb-1"
          >
            {title}
          </h3>
          <p className="text-gray-600 text-base md:text-lg">
            {description}
          </p>
        </div>
        <URatedButton 
          onClick={onJoin}
          className="w-full py-3 md:py-3.5 text-base md:text-lg"
        >
          Join Now
        </URatedButton>
      </div>
    </article>
  );
}
