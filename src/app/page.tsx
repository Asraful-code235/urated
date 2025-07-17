import { SimpleCenteredContactForm } from "@/components/molecules/contact/ContactForm";
import SimpleThreeColumnWithLargeIconsOnDark from "@/components/molecules/featured-section/three-column-with-large-icon";
import ClanMashupTeaserSection from "@/components/molecules/sections/clan-mashup-teaser";
import LaunchBanner from "@/components/molecules/sections/launch-banner";
import { SplitWithScreenshotOnDark } from "@/components/organisms/home/hero/HeroSection";
import { CenteredWithLogo } from "@/components/organisms/layout/footer/footer";
import { SimpleNavbarWithHoverEffects } from "@/components/organisms/layout/navbar/simple-navbar-with-hover-effect";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#1A202C] text-white">
      <SimpleNavbarWithHoverEffects />
      <SplitWithScreenshotOnDark />
      <SimpleThreeColumnWithLargeIconsOnDark />
      <ClanMashupTeaserSection />
      <LaunchBanner />
      <SimpleCenteredContactForm />
      <CenteredWithLogo />
    </div>
  );
}
