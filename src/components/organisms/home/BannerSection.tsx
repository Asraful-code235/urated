import { SocialMediaGroup } from '@/components/molecules/social/SocialMediaGroup';
import { cn } from '@/lib/utils';

interface BannerSectionProps {
  className?: string;
}

export function BannerSection({ className }: BannerSectionProps) {
  return (
    <div className={cn('relative w-full', className)}>
      {/* Desktop Layout */}
      <div className="hidden lg:block  pb-[250px]">
        <div className="relative w-full max-w-[1290px] mx-auto h-[684px]">
          {/* Character Image - positioned absolutely on the left */}
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/3822f9251f83070d6fb5c93c17c6d56ecb79bc23?width=1132"
            alt="URated Character"
            className="absolute left-0 top-0 w-[566px] h-[684px] object-cover z-10"
          />

          {/* Main Hero Card - positioned to the right */}
          <div className="absolute left-3 top-[227px] w-[1278px] h-[457px]">
            <div className="relative w-full h-full rounded-2xl border border-[#FCC800] bg-white overflow-hidden">
              {/* Background Image */}
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/5cb07605df53efcebb5c0981a20a2a005cb77eaf?width=2613"
                alt="Gaming Background"
                className="absolute -left-[17px] -top-[122px] w-[1307px] h-[735px] object-cover"
              />

              {/* Gradient Overlay */}
              <div className="absolute left-0 -top-[7px] w-[1278px] h-[471px] opacity-90 bg-gradient-to-r from-[rgba(17,15,15,0.85)] to-transparent" />

              {/* Content */}
              <div className="absolute left-[638px] top-[118px] w-[542px] h-[221px] flex flex-col items-start gap-8 z-10">
                <div className="flex flex-col items-start gap-0 w-full">
                  <h1 className="text-[#F9FAFB] text-6xl font-bebas font-normal leading-normal w-full"
                      style={{ textShadow: '0px 4px 12px rgba(239, 177, 0, 0.60)' }}>
                    Join the URated Squad
                  </h1>
                  <p className="text-[#F9FAFB] text-xl font-inter font-normal leading-[30px] w-full">
                    Connect with us on, Jump into the action, share your game, and become part of the URated revolution!
                  </p>
                </div>

                {/* Social Media Icons */}
                <SocialMediaGroup variant="banner-desktop" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="block lg:hidden px-4 py-8">
        <div className="relative w-full max-w-[320px] mx-auto h-[513px] rounded-2xl border border-[#FCC800] bg-white overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 w-full h-full overflow-hidden">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/d0ad0e46e565721c264477bfd7fd30ef2b53c0dc?width=1962"
              alt="Gaming Background"
              className="absolute -left-[56%] -top-[6%] w-[306%] h-[108%] object-cover"
            />
          </div>

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[rgba(17,15,15,0.85)] opacity-90" />

          {/* Content */}
          <div className="relative z-10 p-5 pt-8">
            <div className="flex flex-col items-start gap-1 mb-8">
              <h1 className="text-[#F9FAFB] text-[32px] font-bebas font-normal leading-normal w-full"
                  style={{ textShadow: '0px 4px 12px rgba(239, 177, 0, 0.60)' }}>
                Join the URated Squad
              </h1>
              <p className="text-[#F9FAFB] text-sm font-inter font-normal leading-[20px] w-full">
                Connect with us on, Jump into the action, share your game, and become part of the URated revolution!
              </p>
            </div>

            {/* Social Media Icons */}
            <SocialMediaGroup variant="banner-mobile" className="mb-8" />
          </div>

          {/* Character Image at bottom for mobile */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-[10px]">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/36423a042d8edc35de9c1d6db54f9b3978df734d?width=439"
              alt="URated Character"
              className="w-[220px] h-[265px] object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
