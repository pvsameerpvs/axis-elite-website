// components/home/ContactSection.tsx
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="relative border-t border-neutral-100 overflow-hidden"
    >
      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/contact.jpg" // 👈 put your image in /public/contact.jpg
          alt="Contact Axis Elite & Sun Wave"
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* CONTENT */}
      <div className="container py-16 space-y-10 text-neutral-50">
        {/* HEADER */}
        <div className="max-w-2xl space-y-3">
          <span className="inline-flex items-center rounded-full bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-neutral-100 border border-white/20">
            Contact Us
          </span>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">
            Let&apos;s discuss your next project or transformation journey.
          </h2>
          <p className="text-sm leading-relaxed text-neutral-200">
            Share your requirements and our team will connect with you to
            discuss tailored consulting and technology solutions across Axis
            Elite Management Consultants LLC and Sun Wave Innovations LLC.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-[1.1fr,0.9fr] md:items-start">
          {/* FORM */}
          <form className="space-y-5 rounded-2xl border border-white/15 bg-black/40 p-6 shadow-xl backdrop-blur-md">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-1 text-sm">
                <label className="font-medium text-neutral-50">Full Name</label>
                <input
                  className="h-10 w-full rounded-md border border-white/20 bg-black/40 px-3 text-sm text-neutral-50 outline-none ring-neutral-200 focus:border-white focus:ring-1"
                  placeholder="Enter your name"
                />
              </div>
              <div className="space-y-1 text-sm">
                <label className="font-medium text-neutral-50">
                  Company Name
                </label>
                <input
                  className="h-10 w-full rounded-md border border-white/20 bg-black/40 px-3 text-sm text-neutral-50 outline-none ring-neutral-200 focus:border-white focus:ring-1"
                  placeholder="Your organization"
                />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-1 text-sm">
                <label className="font-medium text-neutral-50">
                  Email Address
                </label>
                <input
                  type="email"
                  className="h-10 w-full rounded-md border border-white/20 bg-black/40 px-3 text-sm text-neutral-50 outline-none ring-neutral-200 focus:border-white focus:ring-1"
                  placeholder="you@example.com"
                />
              </div>
              <div className="space-y-1 text-sm">
                <label className="font-medium text-neutral-50">
                  Phone Number
                </label>
                <input
                  className="h-10 w-full rounded-md border border-white/20 bg-black/40 px-3 text-sm text-neutral-50 outline-none ring-neutral-200 focus:border-white focus:ring-1"
                  placeholder="+971 ..."
                />
              </div>
            </div>

            <div className="space-y-1 text-sm">
              <label className="font-medium text-neutral-50">
                Service Interest
              </label>
              <select className="h-10 w-full rounded-md border border-white/20 bg-black/40 px-3 text-sm text-neutral-50 outline-none ring-neutral-200 focus:border-white focus:ring-1">
                <option>General Inquiry</option>
                <option>Management Consultancy</option>
                <option>Marketing &amp; Advertising Research</option>
                <option>Hotel, Tourism &amp; Recreation</option>
                <option>Food Consultancy</option>
                <option>AI &amp; Innovation</option>
                <option>Quality &amp; Standardization</option>
                <option>IT &amp; Digital Solutions (Sun Wave)</option>
              </select>
            </div>

            <div className="space-y-1 text-sm">
              <label className="font-medium text-neutral-50">
                Project / Requirement Details
              </label>
              <textarea
                rows={4}
                className="w-full rounded-md border border-white/20 bg-black/40 px-3 py-2 text-sm text-neutral-50 outline-none ring-neutral-200 focus:border-white focus:ring-1"
                placeholder="Tell us briefly about your project, challenges or goals."
              />
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <Button type="submit" className="w-full sm:w-auto">
                Submit Inquiry
              </Button>
              <p className="text-[11px] text-neutral-300">
                We aim to respond within{" "}
                <span className="font-medium text-neutral-100">
                  1–2 business days.
                </span>
              </p>
            </div>
          </form>

          {/* CONTACT INFO */}
          <div className="space-y-5 rounded-2xl border border-white/15 bg-black/35 p-6 text-sm shadow-xl backdrop-blur-md">
            {/* Axis Elite */}
            <div className="space-y-2">
              <p className="inline-flex items-center rounded-full bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-neutral-200 border border-white/10">
                Axis Elite Office
              </p>
              <p className="font-medium text-neutral-50">
                AXIS ELITE MANAGEMENT CONSULTANTS LLC
              </p>
              <p className="mt-1 text-neutral-200 flex gap-2">
                <span>📍</span>
                <span>220, 2nd Floor, Al Barsha 1, Dubai, UAE</span>
              </p>
              <p className="mt-1 text-neutral-200 flex gap-2">
                <span>✉️</span>
                <a
                  href="mailto:Mamta@sunwaveinnovations.com"
                  className="font-medium underline underline-offset-2"
                >
                  Mamta@sunwaveinnovations.com
                </a>
              </p>
              <p className="text-neutral-200 flex gap-2">
                <span>📞</span>
                <a
                  href="tel:+971502403684"
                  className="font-medium underline underline-offset-2"
                >
                  +971 50 240 3684
                </a>
              </p>
            </div>

            <div className="h-px w-full bg-white/10" />

            {/* Sun Wave */}
            <div className="space-y-2">
              <p className="inline-flex items-center rounded-full bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-neutral-200 border border-white/10">
                Sun Wave Innovations LLC
              </p>
              <p className="font-medium text-neutral-50">
                SUN WAVE INNOVATIONS LLC
              </p>
              <p className="mt-1 text-neutral-200 flex gap-2">
                <span>📍</span>
                <span>
                  AL BUDOOR BUILDING OFFICE 102, 1st FLOOR, BANIYAS SQUARE,
                  DEIRA
                </span>
              </p>
              <p className="mt-1 text-neutral-200 flex gap-2">
                <span>✉️</span>
                <a
                  href="mailto:Mamta@Sunwaveinnovations.com"
                  className="font-medium underline underline-offset-2"
                >
                  Mamta@Sunwaveinnovations.com
                </a>
              </p>
            </div>

            {/* Note */}
            <div className="mt-3 rounded-xl border border-white/15 bg-black/40 px-4 py-3 text-xs text-neutral-200">
              <p className="font-semibold text-neutral-50 mb-1">
                Prefer a faster conversation?
              </p>
              <p>
                Share your project details and we can coordinate a call,
                in-person meeting or virtual strategy session at your
                convenience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
