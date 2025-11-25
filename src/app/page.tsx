import HeroSection from "@/components/hero-section";
import FAQMonochrome from "@/components/faq-monochrome";
import { PricingSection } from "@/components/pricing-section";
import { landingPageData } from "@/data/landing-page";
import { StickyFooter } from "@/components/sticky-footer";
import { FeaturesSection } from "@/components/features-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <PricingSection
        description="Whether you're just starting out or growing fast, our flexible pricing has you covered — with no hidden costs."
        heading="Plans that Scale with You"
        plans={landingPageData.pricing}
      />
      <FAQMonochrome />
      <StickyFooter />
    </>
  );
}
