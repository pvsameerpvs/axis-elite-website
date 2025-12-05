import { SunWaveHero } from "@/components/sun-wave/SunWaveHero";
import { SunWaveKeyActivities } from "@/components/sun-wave/SunWaveKeyActivities";
import { SunWaveProductsServices } from "@/components/sun-wave/SunWaveProductsServices";
import { SunWaveCustomersSuppliers } from "@/components/sun-wave/SunWaveCustomersSuppliers";
import { SunWaveContact } from "@/components/sun-wave/SunWaveContact";

export const metadata = {
  title: "SUN WAVE INNOVATIONS LLC | Technology & IT Solutions",
};

export default function SunWavePage() {
  return (
    <div className="space-y-20">
      <SunWaveHero />
      <SunWaveKeyActivities />
      <SunWaveProductsServices />
      <SunWaveCustomersSuppliers />
      <SunWaveContact />
    </div>
  );
}
