'use client';

import { URatedButton } from '@/components/atoms/URatedButton';
import { VideoThumbnail } from '@/components/molecules/media/VideoThumbnail';
import { cn } from '@/lib/utils';

interface ClanMashupSectionProps {
  className?: string;
}

const clanMashupData = {
  backgroundImage: 'https://api.builder.io/api/v1/image/assets/TEMP/3fba5dd12ff573602f7dcbfef33ad1408e615a40?width=3840',
  title: 'Clan Mashup:',
  subtitle: 'Epic Battles Await',
  description: 'Get ready for Clan Mashup, where rival clans collide in explosive showdowns. Team up, strategize, and dominate. Trailer dropping soon—stay locked in!',
  cta: {
    text: 'Join the Battle',
    action: () => {
      console.log('Join battle clicked');
      // Handle join battle action
    }
  },
  videos: [
    {
      src: 'https://api.builder.io/api/v1/image/assets/TEMP/cc195a3e4d775e89ae02ed914ebfebbebc46e303?width=1278',
      alt: 'Clan Mashup gameplay video 1',
      onPlay: () => console.log('Video 1 played')
    },
    {
      src: 'https://api.builder.io/api/v1/image/assets/TEMP/b93bbdff3ae616a893d14823b4bd4481f0f1dd90?width=1278',
      alt: 'Clan Mashup gameplay video 2',
      onPlay: () => console.log('Video 2 played')
    },
    {
      src: 'https://api.builder.io/api/v1/image/assets/TEMP/bf21de93e239d3be9e5e08ea2fdda0656bb593e8?width=1278',
      alt: 'Clan Mashup gameplay video 3',
      onPlay: () => console.log('Video 3 played')
    }
  ]
};

export function ClanMashupSection({ className }: ClanMashupSectionProps) {
  return (
    <section className={cn('relative min-h-screen', className)}>
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `radial-gradient(37.26% 60.28% at 50.83% 9.68%, rgba(16, 24, 40, 0.50) 0%, rgba(0, 0, 0, 0.50) 75.97%), url('${clanMashupData.backgroundImage}')`
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 container mx-auto px-4 md:px-8 py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          {/* Content */}
          <div className="mb-12 md:mb-18">
            <div className="max-w-3xl mb-8">
              <h2 className="font-bebas-neue text-5xl md:text-6xl lg:text-8xl xl:text-[96px] leading-none bg-gradient-to-b from-white via-white to-transparent bg-clip-text text-transparent mb-4 md:mb-6">
                <span className="text-white">{clanMashupData.title} </span>
                <span className="text-urated-yellow-dark">{clanMashupData.subtitle}</span>
              </h2>
              <p className="text-urated-gray-300 font-inter text-base md:text-lg lg:text-xl leading-relaxed mb-6 md:mb-8">
                {clanMashupData.description}
              </p>
              <URatedButton
                onClick={clanMashupData.cta.action}
                className="px-6 py-3 md:py-3.5 text-lg md:text-xl"
              >
                {clanMashupData.cta.text}
              </URatedButton>
            </div>
          </div>

          {/* Video Thumbnails */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {clanMashupData.videos.map((thumbnail, index) => (
              <div 
                key={index}
                className={cn(
                  'relative group cursor-pointer',
                  index === 2 && 'md:col-span-2 lg:col-span-1'
                )}
              >
                <VideoThumbnail 
                  {...thumbnail}
                  aspectRatio="aspect-[3/2]"
                  className="border border-urated-yellow"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors rounded-lg" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
