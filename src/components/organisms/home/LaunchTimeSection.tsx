'use client';

import { Logo } from '@/components/atoms/Logo';
import { CountdownDisplay } from '@/components/molecules/countdown/CountdownDisplay';
import { cn } from '@/lib/utils';

interface LaunchTimeSectionProps {
  className?: string;
}

const launchTimeData = {
  backgroundImage: 'https://api.builder.io/api/v1/image/assets/TEMP/d305669d59c352684b473312964d4f55f1c58cd0?width=3840',
  logo: {
    src: 'https://api.builder.io/api/v1/image/assets/TEMP/05998b1af7ed3dc2a2a001ce456133387cadbc66?width=264',
    alt: 'URated Logo'
  },
  title: 'URated eSPORTS',
  subtitle: 'Launches Soon',
  description: 'Be among the first to experience the future of competitive gaming. Join the revolution that\'s transforming esports forever.',
  countdown: {
    days: 7,
    hours: 12,
    minutes: 12,
    seconds: 12
  }
};

export function LaunchTimeSection({ className }: LaunchTimeSectionProps) {
  return (
    <section className={cn('relative min-h-screen', className)}>
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `radial-gradient(130.24% 64.82% at 49.3% 45.6%, #101828 0%, #000 100%), url('${launchTimeData.backgroundImage}')`
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 md:px-8 py-16 md:py-24">
        <div className="text-center max-w-4xl">
          {/* Logo */}
          <div className="mb-8">
            <Logo
              {...launchTimeData.logo}
              className="w-24 h-24 md:w-32 md:h-32 rounded-full mx-auto"
            />
          </div>

          {/* Heading */}
          <div className="mb-8 md:mb-12">
            <h2 className="font-bebas-neue text-5xl md:text-6xl lg:text-8xl xl:text-[96px] leading-none bg-gradient-to-b from-white via-white to-transparent bg-clip-text text-transparent mb-2">
              {launchTimeData.title}
            </h2>
            <h3 className="font-bebas-neue text-5xl md:text-6xl lg:text-8xl xl:text-[96px] leading-none text-urated-yellow-dark">
              {launchTimeData.subtitle}
            </h3>
            <p className="text-urated-gray-300 font-inter text-base md:text-lg lg:text-xl leading-relaxed mt-6 md:mt-8 max-w-2xl mx-auto">
              {launchTimeData.description}
            </p>
          </div>

          {/* Countdown Timer */}
          <CountdownDisplay {...launchTimeData.countdown} />
        </div>
      </div>
    </section>
  );
}
