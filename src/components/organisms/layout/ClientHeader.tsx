'use client';

import { Header } from './Header';

export function ClientHeader() {
  return (
    <Header 
      navigation={{
        logo: {
          src: 'https://api.builder.io/api/v1/image/assets/TEMP/41f4c9cb34c0efe94ba2606c1dc09622466372e9?width=72',
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
