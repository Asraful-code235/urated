export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative w-full">
        {/* Desktop Layout */}
        <div className="hidden lg:block">
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
                  <div className="flex justify-center items-center gap-8">
                    <img
                      src="https://api.builder.io/api/v1/image/assets/TEMP/58188c3e879140e2bb1b3ea4e98a1dbd9afe90d7?width=104"
                      alt="Twitch"
                      className="w-[52px] h-[52px] hover:scale-110 transition-transform cursor-pointer"
                    />
                    <img
                      src="https://api.builder.io/api/v1/image/assets/TEMP/073d964c039a12b5de50068d1fe6de244a4970aa?width=104"
                      alt="YouTube"
                      className="w-[52px] h-[52px] hover:scale-110 transition-transform cursor-pointer"
                    />
                    <img
                      src="https://api.builder.io/api/v1/image/assets/TEMP/1671275451cbe9103f71d01f31923ecc4682d225?width=104"
                      alt="TikTok"
                      className="w-[52px] h-[52px] hover:scale-110 transition-transform cursor-pointer"
                    />
                    <img
                      src="https://api.builder.io/api/v1/image/assets/TEMP/8e6488ffdcd497f9114f5d959a048a3d868cec77?width=104"
                      alt="Discord"
                      className="w-[52px] h-[52px] hover:scale-110 transition-transform cursor-pointer"
                    />
                  </div>
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
              <div className="flex justify-center items-center gap-5 mb-8">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/239788596c214b8f787bc1b6b48a0a6cc0e42f88?width=64"
                  alt="Twitch"
                  className="w-8 h-8 hover:scale-110 transition-transform cursor-pointer"
                />
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/831149c9c3dcc99c6dc23ec3b87bfb2880b2c5a3?width=64"
                  alt="YouTube"
                  className="w-8 h-8 hover:scale-110 transition-transform cursor-pointer"
                />
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/cc7ad4f300c13b26cd96a6bf6e8521dfe60b9b1a?width=64"
                  alt="TikTok"
                  className="w-8 h-8 hover:scale-110 transition-transform cursor-pointer"
                />
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/d4540af74ab22a3a6ebad3edf2fcece3d488a60a?width=64"
                  alt="Discord"
                  className="w-8 h-8 hover:scale-110 transition-transform cursor-pointer"
                />
              </div>
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

      {/* Newsletter Section */}
      <div className="w-full mt-16 lg:mt-0">
        <div className="w-full rounded-t-3xl bg-gradient-to-b from-[#101828] via-[#101828] to-[#39558E] px-5 lg:px-28 py-18 lg:py-28">
          <div className="max-w-[1372px] mx-auto flex flex-col items-center gap-6 lg:gap-18">
            {/* Newsletter Content */}
            <div className="flex flex-col items-center gap-8 lg:gap-[52px] w-full">
              <div className="flex flex-col items-center gap-2 text-center">
                <h2 className="text-5xl lg:text-6xl font-bebas font-normal leading-[56px] lg:leading-[68px] bg-gradient-to-b from-[#F9FAFB] to-[#ECFCCA] bg-clip-text text-transparent">
                  Level Up with URated Updates
                </h2>
                <p className="text-[#D1D5DC] text-sm lg:text-xl leading-[22px] lg:leading-[30px] max-w-[320px] lg:max-w-[598px] font-inter font-normal">
                  Drop your email to stay in the game. Get exclusive updates, launch news, and insider tips before anyone else
                </p>
              </div>

              {/* Email Form */}
              <div className="flex flex-col lg:flex-row w-full max-w-[320px] lg:max-w-[642px] items-center gap-4">
                <div className="flex-1 w-full">
                  <input
                    type="email"
                    placeholder="Enter a valid email address"
                    className="w-full px-5 py-[14px] rounded-lg bg-[#F9FAFB] text-[#4A5565] text-base lg:text-xl font-inter font-normal placeholder:text-[#4A5565] border-0 focus:outline-none focus:ring-2 focus:ring-[#FCC800]"
                  />
                </div>
                <button className="px-5 py-3 lg:py-[14px] bg-[#FCC800] rounded-lg text-[#1E2939] text-base lg:text-xl font-inter font-semibold hover:bg-[#e6b400] transition-colors w-full lg:w-auto">
                  Join the Elite
                </button>
              </div>
            </div>

            {/* Divider */}
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
                    <svg width="72" height="24" viewBox="0 0 72 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5.248 23.2552C3.54133 23.2552 2.24 22.7752 1.344 21.8152C0.448 20.8338 0 19.4365 0 17.6232V0.535156H3.52V17.8792C3.52 18.6472 3.66933 19.2018 3.968 19.5432C4.288 19.8845 4.736 20.0552 5.312 20.0552C5.888 20.0552 6.32533 19.8845 6.624 19.5432C6.944 19.2018 7.104 18.6472 7.104 17.8792V0.535156H10.496V17.6232C10.496 19.4365 10.048 20.8338 9.152 21.8152C8.256 22.7752 6.95467 23.2552 5.248 23.2552Z" fill="white"/>
                      <path d="M13.003 0.535156H18.219C20.0323 0.535156 21.355 0.961823 22.187 1.81516C23.019 2.64716 23.435 3.93782 23.435 5.68716V7.06316C23.435 9.38849 22.667 10.8605 21.131 11.4792V11.5432C21.9843 11.7992 22.5817 12.3218 22.923 13.1112C23.2857 13.9005 23.467 14.9565 23.467 16.2792V20.2152C23.467 20.8552 23.4883 21.3778 23.531 21.7832C23.5737 22.1672 23.6803 22.5512 23.851 22.9352H20.267C20.139 22.5725 20.0537 22.2312 20.011 21.9112C19.9683 21.5912 19.947 21.0152 19.947 20.1832V16.0872C19.947 15.0632 19.7763 14.3485 19.435 13.9432C19.115 13.5378 18.5497 13.3352 17.739 13.3352H16.523V22.9352H13.003V0.535156ZM17.803 10.1352C18.507 10.1352 19.0297 9.95382 19.371 9.59116C19.7337 9.22849 19.915 8.62049 19.915 7.76716V6.03916C19.915 5.22849 19.7657 4.64182 19.467 4.27916C19.1897 3.91649 18.7417 3.73516 18.123 3.73516H16.523V10.1352H17.803Z" fill="white"/>
                      <path d="M28.6292 0.535156H33.3973L37.0452 22.9352H33.5252L32.8853 18.4872V18.5512H28.8853L28.2453 22.9352H24.9813L28.6292 0.535156ZM32.4692 15.5112L30.9013 4.43916H30.8372L29.3013 15.5112H32.4692Z" fill="white"/>
                      <path d="M40.0363 3.73516H36.3563V0.535156H47.2363V3.73516H43.5563V22.9352H40.0363V3.73516Z" fill="white"/>
                      <path d="M48.9405 0.535156H58.5405V3.73516H52.4605V9.65516H57.2925V12.8552H52.4605V19.7352H58.5405V22.9352H48.9405V0.535156Z" fill="white"/>
                      <path d="M60.5655 0.535156H65.9415C67.6908 0.535156 69.0028 1.00449 69.8775 1.94316C70.7522 2.88182 71.1895 4.25782 71.1895 6.07116V17.3992C71.1895 19.2125 70.7522 20.5885 69.8775 21.5272C69.0028 22.4658 67.6908 22.9352 65.9415 22.9352H60.5655V0.535156ZM65.8775 19.7352C66.4535 19.7352 66.8908 19.5645 67.1895 19.2232C67.5095 18.8818 67.6695 18.3272 67.6695 17.5592V5.91116C67.6695 5.14316 67.5095 4.58849 67.1895 4.24716C66.8908 3.90582 66.4535 3.73516 65.8775 3.73516H64.0855V19.7352H65.8775Z" fill="white"/>
                    </svg>
                  </div>

                  <div className="flex justify-center items-center gap-4">
                    <img
                      src="https://api.builder.io/api/v1/image/assets/TEMP/533e37e3f962268fdf333e0f546d961f02697a61?width=48"
                      alt="Twitch"
                      className="w-6 h-6 lg:w-8 lg:h-8"
                    />
                    <img
                      src="https://api.builder.io/api/v1/image/assets/TEMP/23978047d45ce0d6411eba3646527c273f852286?width=48"
                      alt="YouTube"
                      className="w-6 h-6 lg:w-8 lg:h-8"
                    />
                    <img
                      src="https://api.builder.io/api/v1/image/assets/TEMP/3166fd1dea47b7045b0d486cd3a8b7b0fb0d8c14?width=48"
                      alt="TikTok"
                      className="w-6 h-6 lg:w-8 lg:h-8"
                    />
                    <img
                      src="https://api.builder.io/api/v1/image/assets/TEMP/e0dfefefc69b29f8976e14ff8c693156bb44d842?width=48"
                      alt="Discord"
                      className="w-6 h-6 lg:w-8 lg:h-8"
                    />
                  </div>
                </div>

                {/* Footer Links - On mobile: stacked vertically with more space */}
                <div className="flex flex-col lg:flex-row items-start gap-13 lg:gap-32 text-white w-full lg:w-auto">
                  <div className="flex flex-col gap-3">
                    <h3 className="text-xl font-satoshi font-medium mb-3">
                      Company
                    </h3>
                    <div className="flex flex-col gap-2">
                      <a href="#" className="text-base font-satoshi font-normal hover:text-[#FCC800] transition-colors">About Us</a>
                      <a href="#" className="text-base font-satoshi font-normal hover:text-[#FCC800] transition-colors">Careers</a>
                      <a href="#" className="text-base font-satoshi font-normal hover:text-[#FCC800] transition-colors">Contact Us</a>
                    </div>
                  </div>

                  <div className="flex flex-col gap-3">
                    <h3 className="text-xl font-satoshi font-medium mb-3">
                      Resources
                    </h3>
                    <div className="flex flex-col gap-2">
                      <a href="#" className="text-base font-satoshi font-normal hover:text-[#FCC800] transition-colors">Blog</a>
                      <a href="#" className="text-base font-satoshi font-normal hover:text-[#FCC800] transition-colors">Video Tutorial</a>
                      <a href="#" className="text-base font-satoshi font-normal hover:text-[#FCC800] transition-colors">Help Center</a>
                    </div>
                  </div>

                  <div className="flex flex-col gap-3">
                    <h3 className="text-xl font-satoshi font-medium mb-3">
                      Legal
                    </h3>
                    <div className="flex flex-col gap-2">
                      <a href="#" className="text-base font-satoshi font-normal hover:text-[#FCC800] transition-colors">Terms of Services</a>
                      <a href="#" className="text-base font-satoshi font-normal hover:text-[#FCC800] transition-colors">Privacy Policy</a>
                    </div>
                  </div>

                  <div className="flex flex-col gap-3">
                    <h3 className="text-xl font-satoshi font-medium mb-3">
                      Platform
                    </h3>
                    <div className="flex flex-col gap-2">
                      <a href="#" className="text-base font-satoshi font-normal hover:text-[#FCC800] transition-colors">CRM</a>
                      <a href="#" className="text-base font-satoshi font-normal hover:text-[#FCC800] transition-colors">Marketing</a>
                      <a href="#" className="text-base font-satoshi font-normal hover:text-[#FCC800] transition-colors">Forms</a>
                    </div>
                  </div>
                </div>
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
    </div>
  );
}
