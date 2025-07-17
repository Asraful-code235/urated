"use client"

import { HeroBackground } from './HeroBackground';
import { HeroContent } from './HeroContent';
import { GamingDashboard } from './GamingDashboard';

export function HeroSection() {
  return (
    <div className="relative isolate overflow-hidden bg-[#1A202C]">
      <HeroBackground />
      
      <div className="mx-auto max-w-7xl px-6 pt-10 pb-24 sm:pb-32 lg:flex lg:px-8 lg:py-40">
        <HeroContent />
        <GamingDashboard />
      </div>
    </div>
  );
}

// Re-export for backward compatibility
export { HeroSection as SplitWithScreenshotOnDark };
