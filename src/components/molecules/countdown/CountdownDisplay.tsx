import type { CountdownDisplayProps } from '@/types';
import { Timer } from '@/components/atoms/Timer';
import { cn } from '@/lib/utils';

export function CountdownDisplay({ 
  days, 
  hours, 
  minutes, 
  seconds, 
  className 
}: CountdownDisplayProps) {
  return (
    <div className={cn('flex justify-center items-center gap-6 md:gap-8 lg:gap-13', className)} role="timer" aria-label="Countdown timer">
      <Timer value={days} label="Days" />
      
      <div className="w-px h-8 md:h-12 bg-yellow-400/30" aria-hidden="true"></div>
      
      <Timer value={hours} label="Hours" />
      
      <div className="w-px h-8 md:h-12 bg-yellow-400/30" aria-hidden="true"></div>
      
      <Timer value={minutes} label="Minutes" />
      
      <div className="w-px h-8 md:h-12 bg-yellow-400/30" aria-hidden="true"></div>
      
      <Timer value={seconds} label="Seconds" />
    </div>
  );
}
