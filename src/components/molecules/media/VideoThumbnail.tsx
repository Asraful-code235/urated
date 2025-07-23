'use client';

import Image from 'next/image';
import type { VideoThumbnailProps } from '@/types';
import { URatedButton } from '@/components/atoms/URatedButton';
import { cn } from '@/lib/utils';

export function VideoThumbnail({
  src,
  alt,
  onPlay,
  className,
  aspectRatio = 'aspect-[4/3]',
  priority = false,
  width = 800,
  height = 600
}: VideoThumbnailProps & {
  priority?: boolean;
  width?: number;
  height?: number;
}) {
  return (
    <article
      className={cn(
        'relative border-2 border-urated-yellow rounded-lg overflow-hidden group cursor-pointer transition-all duration-300 ease-out hover:border-urated-yellow-dark hover:shadow-xl hover:scale-105 motion-reduce:transition-none motion-reduce:hover:scale-100',
        aspectRatio,
        className
      )}
      onClick={onPlay}
      role="button"
      tabIndex={0}
      aria-label={`Play video: ${alt}`}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onPlay?.();
        }
      }}
    >
      {/* Video Thumbnail */}
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover transition-transform duration-500 ease-out group-hover:scale-110 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
        placeholder="blur"
        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
      />

      {/* Video Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-urated-dark-secondary/0 via-transparent to-black/60 group-hover:from-urated-dark-secondary/10 transition-all duration-300 ease-out" />

      {/* Play Button */}
      <div className="absolute inset-0 flex items-center justify-center">
        <URatedButton
          onClick={(e) => {
            e.stopPropagation();
            onPlay?.();
          }}
          variant="play"
          size="play"
          aria-label={`Play video: ${alt}`}
        />
      </div>

      {/* Focus indicator */}
      <div className="absolute inset-0 rounded-lg ring-2 ring-transparent focus-within:ring-urated-yellow focus-within:ring-offset-2 pointer-events-none" />
    </article>
  );
}
