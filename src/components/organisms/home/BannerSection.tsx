import Image from 'next/image';
import { SocialMediaGroup } from '@/components/molecules/social/SocialMediaGroup';
import { cn } from '@/lib/utils';

interface BannerSectionProps {
  className?: string;
}

export function BannerSection({ className }: BannerSectionProps) {
  return (
    <section
      className={cn('relative w-full', className)}
      aria-labelledby="banner-heading"
    >
      {/* Desktop Layout */}
      <div className="hidden lg:block pb-[250px]">
        <div className="relative w-full max-w-[1290px] mx-auto h-[684px]">
          {/* Character Image - positioned absolutely on the left */}
          <div className="absolute left-0 top-0 w-[566px] h-[684px] z-10 animate-fade-in-left">
            <Image
              src="https://api.builder.io/api/v1/image/assets/TEMP/3822f9251f83070d6fb5c93c17c6d56ecb79bc23?width=1132"
              alt="URated gaming character illustration"
              width={566}
              height={684}
              priority
              sizes="566px"
              className="object-cover w-full h-full"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
            />
          </div>

          {/* Main Hero Card - positioned to the right */}
          <article className="absolute left-3 top-[227px] w-[1278px] h-[457px] animate-fade-in-right animation-delay-400">
            <div className="relative w-full h-full rounded-2xl border border-[#FCC800] bg-white overflow-hidden group hover:border-[#e6b400] transition-colors duration-300 ease-out">
              {/* Background Image */}
              <div className="absolute -left-[17px] -top-[122px] w-[1307px] h-[735px]">
                <Image
                  src="https://api.builder.io/api/v1/image/assets/TEMP/5cb07605df53efcebb5c0981a20a2a005cb77eaf?width=2613"
                  alt=""
                  width={1307}
                  height={735}
                  sizes="1307px"
                  className="object-cover w-full h-full transition-transform duration-500 ease-out group-hover:scale-105"
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                />
              </div>

              {/* Gradient Overlay */}
              <div className="absolute left-0 -top-[7px] w-[1278px] h-[471px] opacity-90 bg-gradient-to-r from-[rgba(17,15,15,0.85)] to-transparent" />

              {/* Content */}
              <div className="absolute left-[638px] top-[118px] w-[542px] h-[221px] flex flex-col items-start gap-8 z-10">
                <div className="flex flex-col items-start gap-0 w-full">
                  <h1
                    id="banner-heading"
                    className="text-[#F9FAFB] text-6xl font-bebas font-normal leading-normal w-full animate-slide-up"
                    style={{ textShadow: '0px 4px 12px rgba(239, 177, 0, 0.60)' }}
                  >
                    Join the URated Squad
                  </h1>
                  <p className="text-[#F9FAFB] text-xl font-inter font-normal leading-[30px] w-full animate-slide-up animation-delay-200">
                    Connect with us on, Jump into the action, share your game, and become part of the URated revolution!
                  </p>
                </div>

                {/* Social Media Icons */}
                <div className="animate-slide-up animation-delay-400">
                  <SocialMediaGroup variant="banner-desktop" />
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="block lg:hidden px-4 py-8">
        <article className="relative w-full max-w-[320px] mx-auto h-[513px] rounded-2xl border border-[#FCC800] bg-white overflow-hidden animate-fade-in-up">
          {/* Background Image */}
          <div className="absolute inset-0 w-full h-full overflow-hidden">
            <Image
              src="https://api.builder.io/api/v1/image/assets/TEMP/d0ad0e46e565721c264477bfd7fd30ef2b53c0dc?width=1962"
              alt=""
              width={1962}
              height={1200}
              sizes="320px"
              className="absolute -left-[56%] -top-[6%] w-[306%] h-[108%] object-cover"
              loading="lazy"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
            />
          </div>

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[rgba(17,15,15,0.85)] opacity-90" />

          {/* Content */}
          <div className="relative z-10 p-5 pt-8">
            <div className="flex flex-col items-start gap-1 mb-8">
              <h1 className="text-[#F9FAFB] text-[32px] font-bebas font-normal leading-normal w-full animate-slide-up"
                  style={{ textShadow: '0px 4px 12px rgba(239, 177, 0, 0.60)' }}>
                Join the URated Squad
              </h1>
              <p className="text-[#F9FAFB] text-sm font-inter font-normal leading-[20px] w-full animate-slide-up animation-delay-200">
                Connect with us on, Jump into the action, share your game, and become part of the URated revolution!
              </p>
            </div>

            {/* Social Media Icons */}
            <div className="animate-slide-up animation-delay-400">
              <SocialMediaGroup variant="banner-mobile" className="mb-8" />
            </div>
          </div>

          {/* Character Image at bottom for mobile */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-[10px] animate-bounce-gentle">
            <Image
              src="https://api.builder.io/api/v1/image/assets/TEMP/36423a042d8edc35de9c1d6db54f9b3978df734d?width=439"
              alt="URated gaming character illustration"
              width={220}
              height={265}
              sizes="220px"
              className="object-cover"
              loading="lazy"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
            />
          </div>
        </article>
      </div>
    </section>
  );
}
