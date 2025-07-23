import { SocialIcon } from '@/components/atoms/SocialIcon';
import { cn } from '@/lib/utils';

interface SocialMediaGroupProps {
  variant?: 'banner-desktop' | 'banner-mobile' | 'footer';
  className?: string;
}

const socialLinks = {
  'banner-desktop': [
    {
      src: 'https://api.builder.io/api/v1/image/assets/TEMP/58188c3e879140e2bb1b3ea4e98a1dbd9afe90d7?width=104',
      alt: 'Twitch',
      href: '#'
    },
    {
      src: 'https://api.builder.io/api/v1/image/assets/TEMP/073d964c039a12b5de50068d1fe6de244a4970aa?width=104',
      alt: 'YouTube',
      href: '#'
    },
    {
      src: 'https://api.builder.io/api/v1/image/assets/TEMP/1671275451cbe9103f71d01f31923ecc4682d225?width=104',
      alt: 'TikTok',
      href: '#'
    },
    {
      src: 'https://api.builder.io/api/v1/image/assets/TEMP/8e6488ffdcd497f9114f5d959a048a3d868cec77?width=104',
      alt: 'Discord',
      href: '#'
    }
  ],
  'banner-mobile': [
    {
      src: 'https://api.builder.io/api/v1/image/assets/TEMP/239788596c214b8f787bc1b6b48a0a6cc0e42f88?width=64',
      alt: 'Twitch',
      href: '#'
    },
    {
      src: 'https://api.builder.io/api/v1/image/assets/TEMP/831149c9c3dcc99c6dc23ec3b87bfb2880b2c5a3?width=64',
      alt: 'YouTube',
      href: '#'
    },
    {
      src: 'https://api.builder.io/api/v1/image/assets/TEMP/cc7ad4f300c13b26cd96a6bf6e8521dfe60b9b1a?width=64',
      alt: 'TikTok',
      href: '#'
    },
    {
      src: 'https://api.builder.io/api/v1/image/assets/TEMP/d4540af74ab22a3a6ebad3edf2fcece3d488a60a?width=64',
      alt: 'Discord',
      href: '#'
    }
  ],
  'footer': [
    {
      src: 'https://api.builder.io/api/v1/image/assets/TEMP/533e37e3f962268fdf333e0f546d961f02697a61?width=48',
      alt: 'Twitch',
      href: '#'
    },
    {
      src: 'https://api.builder.io/api/v1/image/assets/TEMP/23978047d45ce0d6411eba3646527c273f852286?width=48',
      alt: 'YouTube',
      href: '#'
    },
    {
      src: 'https://api.builder.io/api/v1/image/assets/TEMP/3166fd1dea47b7045b0d486cd3a8b7b0fb0d8c14?width=48',
      alt: 'TikTok',
      href: '#'
    },
    {
      src: 'https://api.builder.io/api/v1/image/assets/TEMP/e0dfefefc69b29f8976e14ff8c693156bb44d842?width=48',
      alt: 'Discord',
      href: '#'
    }
  ]
};

const containerClasses = {
  'banner-desktop': 'flex justify-center items-center gap-8',
  'banner-mobile': 'flex justify-center items-center gap-5',
  'footer': 'flex justify-center items-center gap-4'
};

const iconSizes = {
  'banner-desktop': 'lg' as const,
  'banner-mobile': 'md' as const,
  'footer': 'sm' as const
};

export function SocialMediaGroup({ variant = 'footer', className }: SocialMediaGroupProps) {
  const links = socialLinks[variant];
  const containerClass = containerClasses[variant];
  const iconSize = iconSizes[variant];

  return (
    <div className={cn(containerClass, className)}>
      {links.map((link, index) => (
        <SocialIcon
          key={index}
          src={link.src}
          alt={link.alt}
          href={link.href}
          size={iconSize}
        />
      ))}
    </div>
  );
}
