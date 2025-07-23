import type { Metadata } from 'next';
import { HeroSection } from '@/components/organisms/home/HeroSection';
import { AboutSection } from '@/components/organisms/home/AboutSection';
import { ClanMashupSection } from '@/components/organisms/home/ClanMashupSection';
import { LaunchTimeSection } from '@/components/organisms/home/LaunchTimeSection';
import { EventsSection } from '@/components/organisms/home/EventsSection';
import { BannerSection } from '@/components/organisms/home/BannerSection';

export const metadata: Metadata = {
  title: 'URated - Unleash Your Game | Gaming Platform & Esports Community',
  description: 'Join URated, where gamers and creators collide to redefine competition and community. Experience the future of competitive gaming and esports.',
  keywords: ['gaming', 'esports', 'competitive gaming', 'gaming community', 'tournaments', 'clan battles'],
  openGraph: {
    title: 'URated - Unleash Your Game',
    description: 'Join URated, where gamers and creators collide to redefine competition and community.',
    url: 'https://urated.com',
    siteName: 'URated',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'URated - Unleash Your Game',
    description: 'Join URated, where gamers and creators collide to redefine competition and community.',
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <HeroSection />
      <AboutSection />
      <ClanMashupSection />
      <LaunchTimeSection />
      <EventsSection />
      <BannerSection />
    </div>
  );
}
