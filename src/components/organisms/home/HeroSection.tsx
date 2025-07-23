'use client';

import Image from 'next/image';
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
      console.log('Join the Clan clicked');
    }
  }
};

export function HeroSection({ className }: HeroSectionProps) {
  return (
    <main className={cn('relative min-h-screen flex flex-col', className)} role="main">
      <div className="absolute inset-0" aria-hidden="true">
        <Image
          src={heroData.backgroundImage}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
        />
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-black/30 to-black/80" />
      </div>

      <div className="relative z-10 flex-1 flex items-center justify-center px-8">
        <div className="text-center max-w-4xl animate-fade-in-up">
          <div className="mb-6 md:mb-8 animate-fade-in">
            <Logo
              {...heroData.logo}
              priority
              className="w-32 h-32 md:w-48 md:h-48 mx-auto"
            />
          </div>

          <h1
            className="font-bebas-neue text-6xl md:text-8xl lg:text-9xl xl:text-[120px] leading-none text-white mb-4 md:mb-6 animate-slide-up"
            style={{
              WebkitTextStroke: "1px #FFF085",
              textShadow: "0px 4px 40px rgba(239, 177, 0, 0.60)"
            }}
          >
            {heroData.title}
          </h1>

          {/* Subtitle */}
          <p className="text-urated-gray-100 font-inter text-lg md:text-xl lg:text-2xl leading-relaxed mb-8 md:mb-12 max-w-xl lg:max-w-2xl mx-auto px-4 animate-slide-up animation-delay-200">
            {heroData.subtitle}
          </p>
          <div className="animate-slide-up animation-delay-400">
            <URatedButton
              onClick={heroData.cta.action}
              size="lg"
              className="px-6 py-3 md:py-3.5"
              aria-label={`${heroData.cta.text} - Join the URated gaming community`}
            >
              {heroData.cta.text}
            </URatedButton>
          </div>
        </div>
      </div>
    </main>
  );
}
