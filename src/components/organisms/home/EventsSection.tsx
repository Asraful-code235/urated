'use client';

import type { EventData } from '@/types';
import { EventCard } from '@/components/molecules/cards/EventCard';
import { URatedButton } from '@/components/atoms/URatedButton';
import { cn } from '@/lib/utils';

interface EventsSectionProps {
  className?: string;
}

// Sample event data
const eventsData: EventData[] = [
  {
    id: 'clan-clash-kickoff',
    title: 'Clan Clash Kickoff',
    description: 'Starts from August 2025',
    imageUrl: 'https://api.builder.io/api/v1/image/assets/TEMP/3a5bff1f50e0569899284d696a655d2fea23004a?width=951',
    imageAlt: 'Clan Clash Kickoff event',
    startDate: 'August 2025',
    badge: { label: 'Featured', variant: 'featured' }
  },
  {
    id: 'launch-party-live',
    title: 'Launch Party Live',
    description: 'Starts from September 2025',
    imageUrl: 'https://api.builder.io/api/v1/image/assets/TEMP/59e829511b65ed1f09f48aed4be9c2c0a4d49d31?width=951',
    imageAlt: 'Launch Party Live event',
    startDate: 'September 2025',
    badge: { label: 'Featured', variant: 'featured' }
  },
  {
    id: 'streamer-showdown',
    title: 'Streamer Showdown',
    description: 'Starts from November 2025',
    imageUrl: 'https://api.builder.io/api/v1/image/assets/TEMP/07227ee677a8afdff867732f70c6bdfe76e22a9f?width=951',
    imageAlt: 'Streamer Showdown event',
    startDate: 'November 2025',
    badge: { label: 'Featured', variant: 'featured' }
  },
  {
    id: 'battleforge-beta-bash',
    title: 'BattleForge Beta Bash',
    description: 'Starts from November 2025',
    imageUrl: 'https://api.builder.io/api/v1/image/assets/TEMP/83445363abd3fc6097dc0eb1a53e1798a1dc20ec?width=951',
    imageAlt: 'BattleForge Beta Bash event',
    startDate: 'November 2025',
    badge: { label: 'Featured', variant: 'featured' }
  },
  {
    id: 'creator-clash-night',
    title: 'Creator Clash Night',
    description: 'Starts from December 2025',
    imageUrl: 'https://api.builder.io/api/v1/image/assets/TEMP/1e9392aa2e74ee1715a98984ac4b9996b8139636?width=951',
    imageAlt: 'Creator Clash Night event',
    startDate: 'December 2025',
    badge: { label: 'Featured', variant: 'featured' }
  },
  {
    id: 'clan-rumble-qualifiers',
    title: 'Clan Rumble Qualifiers',
    description: 'Starts from December 2025',
    imageUrl: 'https://api.builder.io/api/v1/image/assets/TEMP/1a0369ce0d3c6d0decd2212fb94971522570dd00?width=951',
    imageAlt: 'Clan Rumble Qualifiers event',
    startDate: 'December 2025',
    badge: { label: 'Featured', variant: 'featured' }
  }
];

const eventsSectionData = {
  backgroundImage: 'https://api.builder.io/api/v1/image/assets/TEMP/b5a5c15f33afb327361f8f48778f958b9c6086d1?width=6428',
  title: 'Epic Events Await',
  description: 'Jump into URated\'s electrifying events! From intense tournaments to exclusive streams, join the community and make your mark. Check out what\'s coming!',
  seeAllAction: () => {
    console.log('See all events clicked');
    // Handle see all events action
  }
};

export function EventsSection({ className }: EventsSectionProps) {
  return (
    <section className={cn('relative min-h-screen', className)}>
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `radial-gradient(130.24% 64.82% at 49.3% 45.6%, #101828 0%, #000 100%), url('${eventsSectionData.backgroundImage}')`
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 container mx-auto px-4 md:px-8 py-16 md:py-24">
        {/* Header */}
        <div className="text-center mb-12 md:mb-18">
          <h2 className="font-bebas-neue text-5xl md:text-6xl lg:text-8xl xl:text-[96px] leading-none bg-gradient-to-b from-white via-white to-transparent bg-clip-text text-transparent mb-4 md:mb-6">
            <span className="text-white">Epic Events </span>
            <span className="text-urated-yellow-dark">Await</span>
          </h2>
          <p className="text-urated-gray-300 font-inter text-base md:text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto">
            {eventsSectionData.description}
          </p>
        </div>

        {/* Events Grid */}
        <div className="space-y-6 md:space-y-8 max-w-6xl mx-auto">
          {/* Row 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {eventsData.slice(0, 3).map((event, index) => (
              <EventCard 
                key={event.id}
                {...event}
                className={index === 2 ? 'md:col-span-2 lg:col-span-1' : ''}
              />
            ))}
          </div>

          {/* Row 2 */}
          {eventsData.length > 3 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {eventsData.slice(3, 6).map((event, index) => (
                <EventCard
                  key={event.id}
                  {...event}
                  className={index === 2 ? 'md:col-span-2 lg:col-span-1' : ''}
                />
              ))}
            </div>
          )}
        </div>

        {/* See All Events Button */}
        <div className="text-center mt-12 md:mt-18">
          <URatedButton
            variant="outline"
            onClick={eventsSectionData.seeAllAction}
            className="px-6 py-3 md:py-3.5 text-base md:text-lg"
          >
            See All Events
          </URatedButton>
        </div>
      </div>
    </section>
  );
}
