"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu, X, Phone, Mail, Building2, Globe2 } from "lucide-react";

// AXIS ELITE NAV
const axisNavItems = [
  { href: "/", label: "Home" },
  { href: "/#axis-elite", label: "Axis Elite" },
  { href: "/#services", label: "Services" },
  { href: "/#industries", label: "Industries" },
  { href: "/#contact", label: "Contact" },
];

// SUN WAVE NAV (each goes to a section on /sun-wave)
const sunWaveNavItems = [
  { href: "/sun-wave", label: "Home" },
  { href: "/sun-wave#activities", label: "Key Activities" },
  { href: "/sun-wave#services", label: "Products & Services" },
  { href: "/sun-wave#customers", label: "Customers & Suppliers" },
  { href: "/sun-wave#contact", label: "Contact" },
];

// track which section in view
function useActiveSection(sectionIds: string[]) {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const options: IntersectionObserverInit = {
      root: null,
      rootMargin: "0px 0px -65% 0px",
      threshold: 0,
    };

    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          setActive(id);
        }
      }, options);

      observer.observe(el);
      observers.push(observer);
    });

    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, [sectionIds]);

  return active;
}

export function SiteHeader() {
  const pathname = usePathname();
  const isSunWave = pathname.startsWith("/sun-wave");

  // ✅ real React state (you removed this earlier by mistake)
  const [open, setOpen] = useState(false);

  // choose nav + sections based on current page
  const navItems = isSunWave ? sunWaveNavItems : axisNavItems;

  const activeSection = useActiveSection(
    isSunWave
      ? ["sunwave-hero", "activities", "services", "customers", "contact"]
      : ["axis-elite", "services", "industries", "contact"]
  );

  // brand config (logo + text)
  const brand = isSunWave
    ? {
        logoSrc: "/sunwave.png", // change to your actual Sun Wave logo path
        logoAlt: "Sun Wave Innovations logo",
        // nameTop: "Sun Wave Innovations",
        // nameBottom: "Technology & IT Solutions",
      }
    : {
        logoSrc: "/logo.png",
        logoAlt: "Axis Elite logo",
        nameTop: "Axis Elite",
        nameBottom: "Management Consultants",
      };

  // CTA button config
  const cta = isSunWave
    ? { href: "/", label: "Axis Elite" }
    : { href: "/sun-wave", label: "Sun Wave Innovations" };

  const isActive = (href: string) => {
    // AXIS PAGE LOGIC
    if (!isSunWave) {
      if (href === "/") {
        return pathname === "/" && !activeSection;
      }
      if (href === "/#axis-elite") return activeSection === "axis-elite";
      if (href === "/#services") return activeSection === "services";
      if (href === "/#industries") return activeSection === "industries";
      if (href === "/#contact") return activeSection === "contact";
      return false;
    }

    // SUN WAVE PAGE LOGIC
    if (href === "/sun-wave") {
      return pathname.startsWith("/sun-wave") && !activeSection;
    }
    if (href === "/sun-wave#activities") return activeSection === "activities";
    if (href === "/sun-wave#services") return activeSection === "services";
    if (href === "/sun-wave#customers") return activeSection === "customers";
    if (href === "/sun-wave#contact") return activeSection === "contact";

    return false;
  };

  return (
    <>
      {/* TOP BAR */}
      <header className="fixed inset-x-0 top-0 z-40 border-b border-neutral-200 bg-white/80 backdrop-blur-xl shadow-sm">
        <div className="container flex h-20 sm:h-24 items-center justify-between gap-4">
          {/* LOGO + BRAND */}
          <Link
            href={isSunWave ? "/sun-wave" : "/"}
            className="flex items-center gap-3"
          >
            <div
              className="
                relative 
                h-12 w-16
                sm:h-14 sm:w-20
                lg:h-16 lg:w-24
              "
            >
              <Image
                src={brand.logoSrc}
                alt={brand.logoAlt}
                fill
                sizes="120px"
                className="object-contain"
              />
            </div>

            <div className="leading-tight">
              <p
                className="
                  text-[11px] sm:text-[13px] lg:text-[14px]
                  font-medium tracking-[0.3em] uppercase text-neutral-500
                "
              >
                {brand.nameTop}
              </p>

              <p
                className="
                  text-sm sm:text-base lg:text-[13px]
                  font-semibold text-neutral-900
                "
              >
                {brand.nameBottom}
              </p>
            </div>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href + item.label}
                href={item.href}
                className={cn(
                  "relative text-[11px] font-medium uppercase tracking-[0.18em] text-neutral-500 transition-colors hover:text-neutral-900",
                  isActive(item.href) &&
                    "text-neutral-900 after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:rounded-full after:bg-neutral-900"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* RIGHT SIDE: CTA + MOBILE MENU BUTTON */}
          <div className="flex items-center gap-3">
            <Button
              size="sm"
              variant="outline"
              asChild
              className="hidden rounded-full px-5 text-xs font-semibold sm:inline-flex"
            >
              <Link href={cta.href}>{cta.label}</Link>
            </Button>

            {/* Mobile menu toggle */}
            <button
              type="button"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-700 shadow-sm md:hidden"
              onClick={() => setOpen(true)}
              aria-label="Open navigation menu"
            >
              <Menu className="h-4 w-4" />
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE SIDEBAR OVERLAY + DRAWER */}
      {/* ✅ use `open` (boolean), not `open()` */}
      {open && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />

          {/* Sidebar Drawer */}
          <div className="absolute inset-y-0 right-0 flex w-72 max-w-[80%] flex-col border-l border-neutral-200 bg-white shadow-xl">
            {/* Header inside drawer */}
            <div className="flex items-center justify-between border-b border-neutral-200 px-4 py-3">
              <div className="flex items-center gap-2">
                <div className="relative h-8 w-8 overflow-hidden rounded-full border border-neutral-200 bg-white shadow-sm">
                  <Image
                    src={brand.logoSrc}
                    alt={brand.logoAlt}
                    fill
                    sizes="32px"
                    className="object-contain"
                  />
                </div>
                <div className="leading-tight">
                  <p className="text-[10px] font-medium tracking-[0.2em] uppercase text-neutral-500">
                    {brand.nameTop}
                  </p>
                  <p className="text-xs font-semibold text-neutral-900">
                    {brand.nameBottom}
                  </p>
                </div>
              </div>
              <button
                type="button"
                className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-700 shadow-sm"
                onClick={() => setOpen(false)}
                aria-label="Close navigation menu"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Nav items */}
            <div className="flex-1 overflow-y-auto px-4 py-4">
              <nav className="space-y-1">
                {navItems.map((item) => (
                  <Link
                    key={item.href + item.label}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "flex items-center justify-between rounded-xl px-3 py-2 text-[11px] font-medium uppercase tracking-[0.18em] text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900 transition-colors",
                      isActive(item.href) && "bg-neutral-900 text-white"
                    )}
                  >
                    <span>{item.label}</span>
                  </Link>
                ))}
              </nav>

              <div className="my-4 h-px w-full bg-neutral-200" />

              {/* Contact quick info */}
              <div className="space-y-2 text-xs text-neutral-700">
                <p className="flex items-center gap-2">
                  <Building2 className="h-3 w-3 text-neutral-500" />
                  <span>Al Barsha 1, Dubai, UAE</span>
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="h-3 w-3 text-neutral-500" />
                  <a
                    href="mailto:Mamta@sunwaveinnovations.com"
                    className="underline underline-offset-2"
                  >
                    Mamta@sunwaveinnovations.com
                  </a>
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="h-3 w-3 text-neutral-500" />
                  <a
                    href="tel:+971502403684"
                    className="underline underline-offset-2"
                  >
                    +971 50 240 3684
                  </a>
                </p>
                <p className="flex items-center gap-2">
                  <Globe2 className="h-3 w-3 text-neutral-500" />
                  <span>UAE • India • Singapore • Europe</span>
                </p>
              </div>
            </div>

            {/* Bottom CTA inside drawer */}
            <div className="border-t border-neutral-200 px-4 py-3">
              <Button
                size="sm"
                variant="outline"
                asChild
                className=" rounded-full px-5 text-xs font-semibold sm:inline-flex w-full rounded-full text-xs font-semibold"
              >
                <Link href={cta.href}>{cta.label}</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
