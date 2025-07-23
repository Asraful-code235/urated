'use client';

import Image from 'next/image';
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
      className={cn(
        'bg-white rounded-2xl shadow-lg overflow-hidden group cursor-pointer transition-all duration-300 ease-out hover:shadow-xl hover:scale-105 hover:-translate-y-2 motion-reduce:transition-none motion-reduce:hover:scale-100 motion-reduce:hover:translate-y-0',
        className
      )}
      aria-labelledby={`event-title-${id}`}
      role="article"
    >
      <div className="relative overflow-hidden">
        <Image
          src={imageUrl}
          alt={imageAlt}
          width={400}
          height={300}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="w-full h-48 md:h-56 object-cover transition-transform duration-500 ease-out group-hover:scale-110 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
          loading="lazy"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
        />
        {/* Gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out" />
      </div>
      <div className="p-4 md:p-6">
        {badge && (
          <div className="mb-4 md:mb-5 animate-fade-in">
            <Badge {...badge} />
          </div>
        )}
        <div className="mb-4 md:mb-6">
          <h3
            id={`event-title-${id}`}
            className="font-bebas-neue text-2xl md:text-3xl text-gray-800 mb-1 group-hover:text-urated-yellow-dark transition-colors duration-200 ease-out"
          >
            {title}
          </h3>
          <p className="text-gray-600 text-base md:text-lg mb-2">
            {description}
          </p>
          {startDate && (
            <time
              className="text-sm text-gray-500 font-medium"
              dateTime={startDate}
            >
              {startDate}
            </time>
          )}
        </div>
        <URatedButton
          onClick={onJoin}
          className="w-full py-3 md:py-3.5 text-base md:text-lg"
          aria-label={`Join ${title} event`}
        >
          Join Now
        </URatedButton>
      </div>
    </article>
  );
}
