'use client';

import type { NavigationBarProps } from '@/types';
import { Logo } from '@/components/atoms/Logo';
import { URatedLogo } from '@/components/atoms/URatedLogo';
import { URatedLink } from '@/components/atoms/Link';
import { URatedButton } from '@/components/atoms/URatedButton';
import { cn } from '@/lib/utils';

export function NavigationMenu({ 
  logo, 
  links, 
  ctaButton, 
  className 
}: NavigationBarProps) {
  return (
    <div className={cn('container mx-auto px-8 py-3.5 flex justify-between items-center', className)}>
      {/* Logo */}
      <div className="flex items-center gap-3">
        <Logo {...logo} />
        <URatedLogo className="w-[71px] h-[23px]" />
      </div>
      
      {/* Navigation Links & CTA */}
      <div className="flex items-center gap-8 lg:gap-13">
        <nav className="hidden md:flex items-center gap-6 lg:gap-12" role="navigation" aria-label="Main navigation">
          {links.map((link, index) => (
            <URatedLink key={index} {...link} />
          ))}
        </nav>

        {ctaButton && (
          <URatedButton 
            variant="outline"
            size="md"
            className="px-4 lg:px-6 py-2.5 lg:py-3.5 text-sm lg:text-base"
            {...ctaButton}
          />
        )}
      </div>
    </div>
  );
}
