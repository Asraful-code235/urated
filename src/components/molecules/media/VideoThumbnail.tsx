'use client';

import type { VideoThumbnailProps } from '@/types';
import { URatedButton } from '@/components/atoms/URatedButton';
import { cn } from '@/lib/utils';

export function VideoThumbnail({ 
  src, 
  alt, 
  onPlay, 
  className, 
  aspectRatio = 'aspect-[4/3]' 
}: VideoThumbnailProps) {
  return (
    <div className={cn('relative border-2 border-urated-yellow rounded-lg overflow-hidden', aspectRatio, className)}>
      {/* Video Thumbnail */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('${src}')`
        }}
        role="img"
        aria-label={alt}
      />

      {/* Video Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-urated-dark-secondary/0 via-transparent to-black/60" />

      {/* Play Button */}
      <div className="absolute inset-0 flex items-center justify-center">
        <URatedButton 
          onClick={onPlay}
          variant="play"
          size="play"
        />
      </div>
    </div>
  );
}
