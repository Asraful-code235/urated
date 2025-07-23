'use client';

import Image from 'next/image';
import { URatedButton } from '@/components/atoms/URatedButton';
import { VideoThumbnail } from '@/components/molecules/media/VideoThumbnail';
import { cn } from '@/lib/utils';

interface AboutSectionProps {
  className?: string;
}

const aboutData = {
  backgroundImage: 'https://api.builder.io/api/v1/image/assets/TEMP/419bf44107905e65d231d9cd64cfa065494569e8?width=3840',
  title: 'Who we are',
  description: 'URated is where gamers rise, clans collide, and creators ignite. We\'re building a platform to amplify your skills, fuel epic rivalries, and forge unbreakable communities. Born from the heart of gaming, URated empowers every player to own their legacy. Ready to dominate? The game starts here.',
  cta: {
    text: 'Watch trailer',
    action: () => {
      console.log('About trailer clicked');
    }
  },
  video: {
    src: 'https://api.builder.io/api/v1/image/assets/TEMP/261926a5925b463f9f06bcda42a3beae48c7a634?width=1610',
    alt: 'URated promotional video',
    onPlay: () => {
      console.log('About video played');
    }
  }
};

export function AboutSection({ className }: AboutSectionProps) {
  return (
    <section
      className={cn('relative min-h-screen', className)}
      aria-labelledby="about-heading"
    >
      <div className="absolute inset-0" aria-hidden="true">
        <Image
          src={aboutData.backgroundImage}
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
          loading="lazy"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
        />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-black/80 to-black/95" />
      </div>
      
      <div className="relative z-10 container mx-auto px-4 md:px-8 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center min-h-[600px]">
          <div className="space-y-6 md:space-y-8 animate-fade-in-left">
            <div>
              <h2
                id="about-heading"
                className="font-bebas-neue text-5xl md:text-6xl lg:text-8xl xl:text-[96px] leading-none bg-gradient-to-b from-white via-white to-transparent bg-clip-text text-transparent mb-4 md:mb-6 animate-slide-up"
              >
                {aboutData.title}
              </h2>
              <p className="text-urated-gray-300 font-inter text-base md:text-lg lg:text-xl leading-relaxed animate-slide-up animation-delay-200">
                {aboutData.description}
              </p>
            </div>

            <div className="animate-slide-up animation-delay-400">
              <URatedButton
                onClick={aboutData.cta.action}
                className="inline-flex items-center gap-3 md:gap-4 px-5 md:px-6 py-3 md:py-3.5 text-lg md:text-xl"
                aria-label={`${aboutData.cta.text} - Watch URated promotional video`}
              >
                <span>{aboutData.cta.text}</span>
                <svg className="w-3 ml-2 h-3.5 fill-current transition-transform duration-200 ease-out group-hover:translate-x-1" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path fillRule="evenodd" clipRule="evenodd" d="M0 1.59814C0 0.383629 1.19998 -0.384911 2.181 0.199793L11.2378 5.6017C12.2541 6.20768 12.2541 7.79157 11.2378 8.39841L2.18178 13.8003C1.20077 14.385 0.000784757 13.6156 0.000784757 12.402L0 1.59814Z" fill="currentColor"/>
                </svg>
              </URatedButton>
            </div>
          </div>

          <div className="relative mt-8 lg:mt-0 animate-fade-in-right">
            <VideoThumbnail
              {...aboutData.video}
              priority={false}
              width={800}
              height={600}
            />
            <div className="absolute -inset-2 bg-gradient-to-br from-urated-dark-secondary/0 via-transparent to-black/40 rounded-lg -z-10 animate-pulse-slow" />
          </div>
        </div>
      </div>
    </section>
  );
}
