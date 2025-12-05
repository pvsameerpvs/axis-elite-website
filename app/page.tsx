// app/page.tsx
import { HomeHero } from "@/components/home/HomeHero";
import { AboutAxisElite } from "@/components/home/AboutAxisElite";
import { CoreValuesAndServices } from "@/components/home/CoreValuesAndServices";
import { IndustriesSection } from "@/components/home/IndustriesSection";
import { PromiseSection } from "@/components/home/PromiseSection";
import { ContactSection } from "@/components/home/ContactSection";

export default function HomePage() {
  return (
    <div className="space-y-24">
      <HomeHero />
      <AboutAxisElite />
      <CoreValuesAndServices />
      <IndustriesSection />
      <PromiseSection />
      <ContactSection />
    </div>
  );
}
