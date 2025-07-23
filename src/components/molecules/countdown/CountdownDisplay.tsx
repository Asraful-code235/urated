/**
 * CountdownDisplay Component
 *
 * A real-time countdown timer that counts down to a specific target date.
 * Features:
 * - Automatically updates every second
 * - Shows days, hours, minutes, and seconds
 * - Handles server-side rendering (prevents hydration mismatch)
 * - Customizable target date (defaults to August 11, 2025)
 * - Shows special message when countdown expires
 * - Accessible with ARIA labels and live regions
 * - Responsive design with hover effects
 *
 * @param targetDate - The date to count down to (default: August 11, 2025)
 * @param expiredMessage - Custom message to show when countdown expires
 * @param className - Additional CSS classes
 */
'use client';

import { useState, useEffect } from 'react';
import { Timer } from '@/components/atoms/Timer';
import { cn } from '@/lib/utils';

interface CountdownDisplayProps {
  className?: string;
  targetDate?: string;
  expiredMessage?: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

// Custom hook to handle countdown logic
function useCountdown(targetDate: string) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [isExpired, setIsExpired] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const target = new Date(targetDate).getTime();

    const updateCountdown = () => {
      const now = Date.now();
      const difference = target - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
        if (isExpired) setIsExpired(false);
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        if (!isExpired) setIsExpired(true);
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, [mounted, targetDate, isExpired]);

  return { timeLeft, isExpired, mounted };
}

export function CountdownDisplay({
  className,
  targetDate = '2025-08-11T00:00:00',
  expiredMessage = "🚀 LAUNCHED! 🚀"
}: CountdownDisplayProps) {
  const { timeLeft, isExpired, mounted } = useCountdown(targetDate);

  // Show loading state on server-side render to prevent hydration mismatch
  if (!mounted) {
    return (
      <div className={cn('flex justify-center items-center gap-6 md:gap-8 lg:gap-13', className)} role="timer" aria-label="Countdown timer loading">
        <Timer value={0} label="Days" />
        <div className="w-px h-8 md:h-12 bg-yellow-400/30" aria-hidden="true"></div>
        <Timer value={0} label="Hours" />
        <div className="w-px h-8 md:h-12 bg-yellow-400/30" aria-hidden="true"></div>
        <Timer value={0} label="Minutes" />
        <div className="w-px h-8 md:h-12 bg-yellow-400/30" aria-hidden="true"></div>
        <Timer value={0} label="Seconds" />
      </div>
    );
  }

  // Show special message when countdown expires
  if (isExpired) {
    return (
      <div
        className={cn('text-center animate-fade-in', className)}
        role="status"
        aria-label="Launch event has begun"
      >
        <div className="text-urated-yellow-dark font-bebas-neue text-4xl md:text-6xl lg:text-8xl xl:text-[96px] leading-none mb-4 animate-bounce-gentle">
          {expiredMessage}
        </div>
        <div className="text-urated-cream font-inter text-lg md:text-xl">
          The URated revolution has begun!
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn('flex justify-center items-center gap-6 md:gap-8 lg:gap-13', className)}
      role="timer"
      aria-label={`Countdown timer: ${timeLeft.days} days, ${timeLeft.hours} hours, ${timeLeft.minutes} minutes, ${timeLeft.seconds} seconds remaining until August 11th`}
      aria-live="polite"
    >
      <Timer value={timeLeft.days} label="Days" />

      <div className="w-px h-8 md:h-12 bg-yellow-400/30 animate-pulse-slow" aria-hidden="true"></div>

      <Timer value={timeLeft.hours} label="Hours" />

      <div className="w-px h-8 md:h-12 bg-yellow-400/30 animate-pulse-slow" aria-hidden="true"></div>

      <Timer value={timeLeft.minutes} label="Minutes" />

      <div className="w-px h-8 md:h-12 bg-yellow-400/30 animate-pulse-slow" aria-hidden="true"></div>

      <Timer value={timeLeft.seconds} label="Seconds" />
    </div>
  );
}
