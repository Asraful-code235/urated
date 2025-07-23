'use client';

import { NewsletterForm } from '@/components/molecules/forms/NewsletterForm';
import { cn } from '@/lib/utils';

interface NewsletterSectionProps {
  className?: string;
}

const newsletterData = {
  title: 'Level Up with URated Updates',
  description: 'Drop your email to stay in the game. Get exclusive updates, launch news, and insider tips before anyone else',
  onSubmit: (email: string) => {
    console.log('Newsletter signup:', email);
  }
};

export function NewsletterSection({ className }: NewsletterSectionProps) {
  return (
    <div className={cn('w-full', className)}>
      <div className="w-full rounded-t-3xl ">
        <div className="max-w-[1372px] mx-auto flex flex-col items-center gap-6 lg:gap-18">
          {/* Newsletter Content */}
          <div className="flex flex-col items-center gap-8 lg:gap-[52px] w-full">
            <div className="flex flex-col items-center gap-2 text-center">
              <h2 className="text-5xl lg:text-6xl font-bebas font-normal leading-[56px] lg:leading-[68px] bg-gradient-to-b from-[#F9FAFB] to-[#ECFCCA] bg-clip-text text-transparent">
                {newsletterData.title}
              </h2>
              <p className="text-[#D1D5DC] text-sm lg:text-xl leading-[22px] lg:leading-[30px] max-w-[320px] lg:max-w-[598px] font-inter font-normal">
                {newsletterData.description}
              </p>
            </div>

            {/* Email Form */}
            <NewsletterForm onSubmit={newsletterData.onSubmit} />
          </div>
        </div>
      </div>
    </div>
  );
}
