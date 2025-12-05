import Image from "next/image";

export function SiteFooter() {
  return (
    <footer className="bg-neutral-950 text-neutral-300 pt-12">
      {/* MAIN FOOTER */}
      <div className="container grid gap-10 md:grid-cols-3 pb-10">
        {/* Column 1 — Brand + Logo */}
        <div className="space-y-4">
          {/* Logo */}
          <div className="relative h-24 w-60">
            <Image
              src="/logo-b.png"
              alt="Axis Elite Logo"
              fill
              className="object-contain"
            />
          </div>

          <h3 className="text-lg font-semibold text-white">
            AXIS ELITE MANAGEMENT CONSULTANTS LLC
          </h3>

          <p className="text-sm text-neutral-400 leading-relaxed">
            Strategic Solutions. Digital Excellence. Business Growth.
          </p>

          <p className="text-xs text-neutral-500">
            Delivering research-driven consulting & innovative transformation
            across UAE and international markets.
          </p>
        </div>

        {/* Column 2 — Quick Links */}
        <div className="space-y-4">
          <h4 className="text-sm font-semibold text-white tracking-wider uppercase">
            Quick Links
          </h4>

          <ul className="space-y-2 text-sm">
            <li>
              <a href="/" className="hover:text-white transition">
                Home
              </a>
            </li>
            <li>
              <a href="#axis-elite" className="hover:text-white transition">
                About Axis Elite
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-white transition">
                Services
              </a>
            </li>
            <li>
              <a href="/sun-wave" className="hover:text-white transition">
                Sun Wave Innovations
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-white transition">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3 — Contact */}
        <div className="space-y-4">
          <h4 className="text-sm font-semibold text-white tracking-wider uppercase">
            Contact
          </h4>

          <p className="text-sm text-neutral-400">
            📍 220, 2nd Floor, Al Barsha 1, Dubai, UAE
          </p>

          <p className="text-sm">
            ✉️{" "}
            <a
              href="mailto:Mamta@sunwaveinnovations.com"
              className="hover:text-white transition"
            >
              Mamta@sunwaveinnovations.com
            </a>
          </p>

          <p className="text-sm">
            📞{" "}
            <a href="tel:+971502403684" className="hover:text-white transition">
              +971 50 240 3684
            </a>
          </p>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-neutral-800">
        <div className="container flex flex-col sm:flex-row justify-between items-center py-4 text-xs text-neutral-500">
          <p>
            © {new Date().getFullYear()} AXIS ELITE MANAGEMENT CONSULTANTS LLC.
            All rights reserved.
          </p>

          <p className="mt-2 sm:mt-0">Crafted with excellence • UAE</p>
        </div>
      </div>
    </footer>
  );
}
