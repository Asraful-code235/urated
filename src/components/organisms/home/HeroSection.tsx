'use client';

import { URatedButton } from '@/components/atoms/URatedButton';
import { Logo } from '@/components/atoms/Logo';
import { cn } from '@/lib/utils';

interface HeroSectionProps {
  className?: string;
}

const heroData = {
  backgroundImage: 'https://api.builder.io/api/v1/image/assets/TEMP/b2ad4a55e076556d5396c190965b4b58c381f9f4?width=3840',
  logo: {
    src: 'https://api.builder.io/api/v1/image/assets/TEMP/60d95e7f7362a0027d9379fcfbb8d63685eabc34?width=384',
    alt: 'URated Central Logo'
  },
  title: 'Unleash Your Game',
  subtitle: 'Join URated, where gamers and creators collide to redefine competition and community',
  cta: {
    text: 'Join the Clan',
    action: () => {
      // Handle join clan action - could navigate to signup, open modal, etc.
      console.log('Join the Clan clicked');
    }
  }
};

export function HeroSection({ className }: HeroSectionProps) {
  return (
    <section className={cn('relative min-h-screen flex flex-col', className)}>
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(165deg, rgba(255, 255, 255, 0.00) 10.42%, rgba(4, 0, 0, 0.8) 75.14%), url('${heroData.backgroundImage}')`
        }}
        aria-hidden="true"
      />

      {/* Hero Content */}
      <div className="relative z-10 flex-1 flex items-center justify-center px-8">
        <div className="text-center max-w-4xl">
          {/* Central Logo */}
          <div className="mb-6 md:mb-8">
            <Logo
              {...heroData.logo}
              className="w-32 h-32 md:w-48 md:h-48 mx-auto"
            />
          </div>

          {/* Main Heading */}
          <h1
            className="font-bebas-neue text-6xl md:text-8xl lg:text-9xl xl:text-[120px] leading-none text-white mb-4 md:mb-6"
            style={{
              WebkitTextStroke: "1px #FFF085",
              textShadow: "0px 4px 40px rgba(239, 177, 0, 0.60)"
            }}
          >
            {heroData.title}
          </h1>

          {/* Subtitle */}
          <p className="text-urated-gray-100 font-inter text-lg md:text-xl lg:text-2xl leading-relaxed mb-8 md:mb-12 max-w-xl lg:max-w-2xl mx-auto px-4">
            {heroData.subtitle}
          </p>

          {/* CTA Button */}
          <URatedButton
            onClick={heroData.cta.action}
            size="lg"
            className="px-6 py-3 md:py-3.5"
          >
            {heroData.cta.text}
          </URatedButton>
        </div>
      </div>
    </section>
  );
}
