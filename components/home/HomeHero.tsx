"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const heroImages = ["/hero1.jpg", "/hero2.jpg", "/hero3.jpg"];

export function HomeHero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden">
      {/* ---- HERO BACKGROUND IMAGES ---- */}
      <div className="absolute inset-0 z-0">
        {heroImages.map((src, i) => (
          <Image
            key={i}
            src={src}
            alt="Axis Elite Hero Image"
            fill
            className={`object-cover transition-opacity duration-[1500ms] ${
              index === i ? "opacity-100" : "opacity-0"
            }`}
            priority={i === 0}
          />
        ))}

        {/* Dark overlay for text visibility */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
      </div>

      {/* ---- HERO CONTENT ---- */}
      <div className="relative z-10 container">
        <div className="grid min-h-[90vh] items-center gap-10 md:grid-cols-[1.15fr,0.85fr] py-20">
          {/* LEFT TEXT SECTION */}
          <div className="space-y-6 text-white drop-shadow-lg">
            <Badge className="bg-white/20 text-white border-white/30">
              Axis Elite Management Consultants LLC
            </Badge>

            <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              Strategic Solutions. Digital Excellence.{" "}
              <span className="underline decoration-white/30 underline-offset-8">
                Business Growth.
              </span>
            </h1>

            <p className="max-w-xl text-base leading-relaxed text-white/90">
              AXIS ELITE delivers research-based, performance-driven consultancy
              in management, marketing, tourism, hospitality, food, AI
              innovation, and quality & standardization.
            </p>

            <div className="flex flex-wrap gap-3">
              <Button asChild>
                <Link href="#contact">Request a Consultation</Link>
              </Button>

              <Button
                variant="outline"
                asChild
                className="border-white text-black hover:bg-white hover:text-black"
              >
                <Link href="#services">View Services</Link>
              </Button>
            </div>

            {/* QUICK STATS */}
            <dl className="mt-4 grid max-w-xl gap-4 text-sm text-white/90 sm:grid-cols-3">
              <div>
                <dt className="font-semibold text-white">9+ Service Lines</dt>
                <dd>Strategy, research, AI, tourism advisory & more.</dd>
              </div>
              <div>
                <dt className="font-semibold text-white">
                  Multi-industry Experience
                </dt>
                <dd>FMCG, real estate, hospitality, retail & more.</dd>
              </div>
              <div>
                <dt className="font-semibold text-white">UAE Market Focus</dt>
                <dd>Deep regulatory & commercial expertise.</dd>
              </div>
            </dl>
          </div>

          {/* RIGHT INFO CARD */}
          <div className="relative rounded-3xl border border-white/20 bg-white/10 backdrop-blur-md p-6 shadow-xl text-bblack/909">
            <p className="inline-block mb-2 rounded-full bg-white/20 px-4 py-1 text-xs font-semibold text-white border border-white/30 backdrop-blur-md">
              Who We Serve
            </p>

            <p className="text-sm text-white/90">
              We support{" "}
              <span className="font-semibold text-white">
                SMEs, enterprises, hospitality groups, tourism operators,
                manufacturers, real estate firms, technology startups
              </span>{" "}
              through research-backed strategy & digital innovation.
            </p>

            <div className="mt-6 grid gap-4 text-sm">
              <div className="rounded-2xl border border-white/20 bg-white/20 backdrop-blur-md p-4">
                <p className="font-medium text-white">
                  SUN WAVE INNOVATIONS LLC
                </p>
                <p className="mt-1 text-white/80">
                  Our technology & digital innovation partner delivering
                  full-stack IT solutions, cloud, cybersecurity, and software
                  development across India, Singapore, and Europe.
                </p>

                <Button
                  className="mt-3 h-9 px-4 text-xs border-white text-black hover:bg-white hover:text-black"
                  variant="outline"
                  asChild
                >
                  <Link href="/sun-wave">Explore Sun Wave Innovations</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
