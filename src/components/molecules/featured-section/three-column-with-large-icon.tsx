"use client"

import { Gamepad2, Users, Trophy } from 'lucide-react'

const features = [
  {
    name: 'Skill-Based Matching',
    description:
      'Advanced algorithms match you with players of similar skill levels for fair and competitive gameplay. Experience balanced matches that push your skills to the next level.',
    href: '#',
    icon: Gamepad2,
    accentColor: '#D4AF37',
  },
  {
    name: 'Clan Management',
    description:
      'Build and manage your gaming clan with comprehensive tools. Recruit members, organize events, and climb the leaderboards together as a unified team.',
    href: '#',
    icon: Users,
    accentColor: '#FF6B35',
  },
  {
    name: 'Live Tournaments',
    description:
      'Join real-time competitive tournaments with cash prizes and global recognition. Battle against the best players and prove your dominance in the arena.',
    href: '#',
    icon: Trophy,
    accentColor: '#00B7EB',
  },
]

export default function SimpleThreeColumnWithLargeIconsOnDark() {
  return (
    <div className="bg-[#1A202C] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl ">
            Game-Changing <span className="text-primary">Features</span>
          </h2>
          <p className="mt-6 text-lg/8 text-[#A0AEC0] font-[var(--font-body)]">
            Elevate your gaming experience with cutting-edge features designed for competitive players. 
            From skill-based matching to live tournaments, we've got everything you need to dominate.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col group transition-all duration-300 hover:transform hover:scale-105">
                <dt className="text-base/7 font-bold text-white ">
                  <div 
                    className="mb-6 flex size-10 items-center justify-center rounded-lg transition-all duration-300 group-hover:shadow-lg group-hover:shadow-[#00B7EB]/30"
                    style={{ 
                      backgroundColor: feature.accentColor,
                      boxShadow: `0 0 20px ${feature.accentColor}40`
                    }}
                  >
                    <feature.icon aria-hidden="true" className="size-6 text-white" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-1 flex flex-auto flex-col text-base/7 text-[#A0AEC0] font-[var(--font-body)]">
                  <p className="flex-auto">{feature.description}</p>
                  <p className="mt-6">
                    <a 
                      href={feature.href} 
                      className="text-sm/6 font-semibold text-primary hover:text-primary transition-colors duration-300"
                    >
                      Learn more <span aria-hidden="true">→</span>
                    </a>
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}