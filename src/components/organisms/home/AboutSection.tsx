'use client';

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
      // Handle trailer action - could open modal, navigate to video page, etc.
    }
  },
  video: {
    src: 'https://api.builder.io/api/v1/image/assets/TEMP/261926a5925b463f9f06bcda42a3beae48c7a634?width=1610',
    alt: 'URated promotional video',
    onPlay: () => {
      console.log('About video played');
      // Handle video play action
    }
  }
};

export function AboutSection({ className }: AboutSectionProps) {
  return (
    <section className={cn('relative min-h-screen', className)}>
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `radial-gradient(65.54% 54.12% at 48.88% 56.3%, #101828 0%, #000 98.08%), url('${aboutData.backgroundImage}')`
        }}
        aria-hidden="true"
      />
      
      <div className="relative z-10 container mx-auto px-4 md:px-8 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center min-h-[600px]">
          {/* Left Content */}
          <div className="space-y-6 md:space-y-8">
            <div>
              <h2 className="font-bebas-neue text-5xl md:text-6xl lg:text-8xl xl:text-[96px] leading-none bg-gradient-to-b from-white via-white to-transparent bg-clip-text text-transparent mb-4 md:mb-6">
                {aboutData.title}
              </h2>
              <p className="text-urated-gray-300 font-inter text-base md:text-lg lg:text-xl leading-relaxed">
                {aboutData.description}
              </p>
            </div>

            <URatedButton
              onClick={aboutData.cta.action}
              className="inline-flex items-center gap-3 md:gap-4 px-5 md:px-6 py-3 md:py-3.5 text-lg md:text-xl"
            >
              <span>{aboutData.cta.text}</span>
              <svg className="w-3 h-3.5 fill-current" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path fillRule="evenodd" clipRule="evenodd" d="M0 1.59814C0 0.383629 1.19998 -0.384911 2.181 0.199793L11.2378 5.6017C12.2541 6.20768 12.2541 7.79157 11.2378 8.39841L2.18178 13.8003C1.20077 14.385 0.000784757 13.6156 0.000784757 12.402L0 1.59814Z" fill="currentColor"/>
              </svg>
            </URatedButton>
          </div>
          
          {/* Right Content - Video Preview */}
          <div className="relative mt-8 lg:mt-0">
            <VideoThumbnail {...aboutData.video} />
            {/* Decorative Border Effect */}
            <div className="absolute -inset-2 bg-gradient-to-br from-urated-dark-secondary/0 via-transparent to-black/40 rounded-lg -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
