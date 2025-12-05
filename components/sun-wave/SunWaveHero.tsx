"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

const sliderImages = [
  "/SUN WAVE INNOVATIONS1.jpg",
  "/SUN WAVE INNOVATIONS2.jpg",
  "/SUN WAVE INNOVATIONS3.jpg",
];

export function SunWaveHero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setActive((prev) => (prev + 1) % sliderImages.length),
      4500
    );
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative overflow-hidden border-b border-neutral-100">
      {/* BACKGROUND SLIDER */}
      <div className="absolute inset-0">
        {sliderImages.map((src, idx) => (
          <div
            key={src}
            className={`absolute inset-0 transition-opacity duration-[1200ms] ease-out ${
              idx === active ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={src}
              alt=""
              fill
              className="object-cover object-center"
              priority={idx === 0}
            />
          </div>
        ))}

        {/* overlay for readability */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]" />
      </div>

      {/* CONTENT */}
      <div className="relative container grid gap-10 py-16 md:grid-cols-[1.2fr,0.9fr] md:items-center text-white">
        {/* LEFT CONTENT */}
        <div className="space-y-5">
          <Badge className="bg-sky-600 text-white shadow-sm">
            SUN WAVE INNOVATIONS LLC
          </Badge>

          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Global IT Solutions, Cloud Services &amp; Digital Innovation.
          </h1>

          <p className="text-sm leading-relaxed text-neutral-200">
            SUN WAVE INNOVATIONS LLC operates on a{" "}
            <span className="font-medium text-white">B2B model</span> delivering
            a comprehensive suite of IT and digital solutions across India,
            Singapore, and Europe.
          </p>

          <p className="text-sm leading-relaxed text-neutral-200">
            We deliver secure, scalable, and future-ready technology solutions
            backed by global best practices.
          </p>

          {/* strip */}
          <div className="inline-flex flex-wrap items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-xs text-white shadow-sm">
            <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            India • Singapore • Europe
            <span className="hidden sm:inline">·</span>
            <span className="hidden sm:inline">
              Cloud • Cybersecurity • Development
            </span>
          </div>
        </div>

        {/* RIGHT GLASS CARD */}
        <div className="relative">
          <div className="space-y-4 rounded-3xl border border-white/20 bg-white/10 p-6 shadow-lg backdrop-blur-md">
            <p className="section-title text-white mb-1">Business Model</p>

            <ul className="list-disc space-y-1 text-sm leading-relaxed pl-4 text-neutral-200">
              <li>Project-Based IT Solutions</li>
              <li>Annual Subscription &amp; Managed Services</li>
              <li>Custom Software Development</li>
              <li>Cloud &amp; Cybersecurity Services</li>
              <li>IT Products Trading</li>
            </ul>

            <div className="mt-3 flex flex-wrap gap-2 text-[11px]">
              <span className="rounded-full bg-white/20 px-3 py-1 text-white ring-1 ring-white/10">
                B2B Focus
              </span>
              <span className="rounded-full bg-white/20 px-3 py-1 text-white ring-1 ring-white/10">
                Managed Services
              </span>
              <span className="rounded-full bg-white/20 px-3 py-1 text-white ring-1 ring-white/10">
                Global Delivery
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
