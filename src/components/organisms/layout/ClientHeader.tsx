'use client';

import { Header } from './Header';

export function ClientHeader() {
  return (
    <Header 
      navigation={{
        logo: {
          src: '/logo.webp',
          alt: 'URated Logo'
        },
        links: [
          { href: '/', children: 'Home' },
          { href: '/about', children: 'About us' },
          { href: '/events', children: 'Events' },
          { href: '/career', children: 'Career' }
        ],
        ctaButton: {
          children: 'Watch trailer',
          onClick: () => console.log('Watch trailer clicked')
        }
      }}
    />
  );
}
