import { Mail, MapPin, Building2 } from "lucide-react";
import Image from "next/image";

export function SunWaveContact() {
  return (
    <section className="relative overflow-hidden">
      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0">
        <Image
          src="/who we are2.jpg" // 👉 Replace with your image
          alt="Sun Wave Innovations Contact Background"
          fill
          className="object-cover object-center"
          priority
        />

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/50 backdrop-blur-[1px]" />
      </div>

      {/* CONTENT */}
      <div className="relative container py-16 text-sm text-neutral-200">
        <div className="mx-auto max-w-2xl rounded-2xl border border-white/20 bg-white/10 p-10 shadow-xl backdrop-blur-md">
          {/* HEADING */}
          <h3 className="text-xl font-semibold tracking-tight text-white">
            SUN WAVE INNOVATIONS LLC
          </h3>

          <p className="mt-1 text-xs text-neutral-300">
            Registered Office • Dubai, United Arab Emirates
          </p>

          {/* ADDRESS */}
          <div className="mt-6 flex items-start gap-3">
            <MapPin size={20} className="text-sky-400 shrink-0" />
            <p className="text-neutral-200">
              AL BUDOOR BUILDING, OFFICE 102
              <br />
              1st Floor, Baniyas Square, Deira, Dubai
            </p>
          </div>

          {/* EMAIL */}
          <div className="mt-4 flex items-center gap-3">
            <Mail size={20} className="text-sky-400 shrink-0" />
            <a
              href="mailto:Mamta@Sunwaveinnovations.com"
              className="font-medium text-sky-300 underline underline-offset-2 hover:text-sky-200"
            >
              Mamta@Sunwaveinnovations.com
            </a>
          </div>

          {/* COMPANY INFO */}
          <div className="mt-6 flex items-center gap-3">
            <Building2 size={20} className="text-sky-400 shrink-0" />
            <p className="text-neutral-200">
              Technology • Cloud Services • IT Infrastructure
            </p>
          </div>

          {/* BOTTOM STRIP */}
          <div className="mt-8 flex flex-wrap gap-2 text-[11px]">
            <span className="rounded-full bg-white/20 px-3 py-1 text-white ring-1 ring-white/10">
              Registered in UAE
            </span>
            <span className="rounded-full bg-white/20 px-3 py-1 text-white ring-1 ring-white/10">
              Corporate IT Solutions
            </span>
            <span className="rounded-full bg-white/20 px-3 py-1 text-white ring-1 ring-white/10">
              Global Delivery
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
