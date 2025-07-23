import { SocialMediaGroup } from "@/components/molecules/social/SocialMediaGroup";
import { FooterNavigation } from "@/components/molecules/navigation/FooterNavigation";
import { cn } from "@/lib/utils";
import { NewsletterSection } from "../home/NewsletterSection";

interface FooterSectionProps {
  className?: string;
}

export function FooterSection({ className }: FooterSectionProps) {
  return (
    <div className={cn("w-full", className)}>
      <div className="w-full bg-gradient-to-b from-[#101828] via-[#101828] to-[#39558E] px-5 lg:px-28 py-18 lg:py-28">
        <div className="max-w-[1372px] mx-auto flex flex-col items-center gap-6 lg:gap-18">
          <NewsletterSection />

          <div className="w-full h-px bg-[#364153]" />

          {/* Footer */}
          <div className="w-full flex flex-col gap-6 lg:gap-8">
            <div className="flex flex-col lg:flex-row justify-between items-start gap-8">
              {/* Logo and Social */}
              <div className="flex flex-col items-start gap-6">
                <div className="flex items-center gap-3">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/ae4fb7cc3530210cd2e189663558be4cddf2d932?width=72"
                    alt="URated Logo"
                    className="w-9 h-9 rounded-full"
                  />
                  <svg
                    width="72"
                    height="24"
                    viewBox="0 0 72 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.248 23.2552C3.54133 23.2552 2.24 22.7752 1.344 21.8152C0.448 20.8338 0 19.4365 0 17.6232V0.535156H3.52V17.8792C3.52 18.6472 3.66933 19.2018 3.968 19.5432C4.288 19.8845 4.736 20.0552 5.312 20.0552C5.888 20.0552 6.32533 19.8845 6.624 19.5432C6.944 19.2018 7.104 18.6472 7.104 17.8792V0.535156H10.496V17.6232C10.496 19.4365 10.048 20.8338 9.152 21.8152C8.256 22.7752 6.95467 23.2552 5.248 23.2552Z"
                      fill="white"
                    />
                    <path
                      d="M13.003 0.535156H18.219C20.0323 0.535156 21.355 0.961823 22.187 1.81516C23.019 2.64716 23.435 3.93782 23.435 5.68716V7.06316C23.435 9.38849 22.667 10.8605 21.131 11.4792V11.5432C21.9843 11.7992 22.5817 12.3218 22.923 13.1112C23.2857 13.9005 23.467 14.9565 23.467 16.2792V20.2152C23.467 20.8552 23.4883 21.3778 23.531 21.7832C23.5737 22.1672 23.6803 22.5512 23.851 22.9352H20.267C20.139 22.5725 20.0537 22.2312 20.011 21.9112C19.9683 21.5912 19.947 21.0152 19.947 20.1832V16.0872C19.947 15.0632 19.7763 14.3485 19.435 13.9432C19.115 13.5378 18.5497 13.3352 17.739 13.3352H16.523V22.9352H13.003V0.535156ZM17.803 10.1352C18.507 10.1352 19.0297 9.95382 19.371 9.59116C19.7337 9.22849 19.915 8.62049 19.915 7.76716V6.03916C19.915 5.22849 19.7657 4.64182 19.467 4.27916C19.1897 3.91649 18.7417 3.73516 18.123 3.73516H16.523V10.1352H17.803Z"
                      fill="white"
                    />
                    <path
                      d="M28.6292 0.535156H33.3973L37.0452 22.9352H33.5252L32.8853 18.4872V18.5512H28.8853L28.2453 22.9352H24.9813L28.6292 0.535156ZM32.4692 15.5112L30.9013 4.43916H30.8372L29.3013 15.5112H32.4692Z"
                      fill="white"
                    />
                    <path
                      d="M40.0363 3.73516H36.3563V0.535156H47.2363V3.73516H43.5563V22.9352H40.0363V3.73516Z"
                      fill="white"
                    />
                    <path
                      d="M48.9405 0.535156H58.5405V3.73516H52.4605V9.65516H57.2925V12.8552H52.4605V19.7352H58.5405V22.9352H48.9405V0.535156Z"
                      fill="white"
                    />
                    <path
                      d="M60.5655 0.535156H65.9415C67.6908 0.535156 69.0028 1.00449 69.8775 1.94316C70.7522 2.88182 71.1895 4.25782 71.1895 6.07116V17.3992C71.1895 19.2125 70.7522 20.5885 69.8775 21.5272C69.0028 22.4658 67.6908 22.9352 65.9415 22.9352H60.5655V0.535156ZM65.8775 19.7352C66.4535 19.7352 66.8908 19.5645 67.1895 19.2232C67.5095 18.8818 67.6695 18.3272 67.6695 17.5592V5.91116C67.6695 5.14316 67.5095 4.58849 67.1895 4.24716C66.8908 3.90582 66.4535 3.73516 65.8775 3.73516H64.0855V19.7352H65.8775Z"
                      fill="white"
                    />
                  </svg>
                </div>

                <SocialMediaGroup variant="footer" />
              </div>

              {/* Footer Links - On mobile: stacked vertically with more space */}
              <FooterNavigation />
            </div>

            {/* Bottom Divider */}
            <div className="w-full h-px bg-[#364153]" />

            {/* Copyright */}
            <div className="text-center">
              <p className="text-white text-base font-satoshi font-normal">
                © 2025 Urated. All right reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
