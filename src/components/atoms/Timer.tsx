import type { CountdownTimerProps } from '@/types';
import { cn } from '@/lib/utils';

export function Timer({ 
  value, 
  label, 
  className 
}: CountdownTimerProps) {
  return (
    <div className={cn('text-center', className)}>
      <div 
        className="text-urated-yellow-dark font-bebas-neue text-4xl md:text-6xl lg:text-8xl xl:text-[96px] leading-none mb-1"
        style={{ textShadow: "0px 4px 40px rgba(239, 177, 0, 0.60)" }}
        aria-label={`${value} ${label}`}
      >
        {value.toString().padStart(2, '0')}
      </div>
      <div className="text-urated-cream/60 font-inter text-sm md:text-base">
        {label}
      </div>
    </div>
  );
}
