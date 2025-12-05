import Image from "next/image";

export function AboutAxisElite() {
  return (
    <section id="axis-elite" className="relative bg-neutral-50/60 py-20">
      <div className="container mx-auto space-y-12">
        {/* TOP: IMAGE LEFT, CONTENT RIGHT */}
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          {/* LEFT — IMAGE */}
          <div className="relative h-[320px] sm:h-[380px] lg:h-[420px] w-full rounded-3xl overflow-hidden shadow-xl">
            <Image
              src="/about.jpg"
              alt="About Axis Elite"
              fill
              className="object-cover"
              priority
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />

            {/* Label */}
            <div className="absolute bottom-4 left-4 text-white text-xs sm:text-sm font-medium drop-shadow-lg">
              Excellence • Strategy • Innovation
            </div>
          </div>

          {/* RIGHT — TEXT CONTENT */}
          <div className="space-y-6">
            <div>
              <p className="section-title">About Us</p>
              <h2 className="text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
                AXIS ELITE MANAGEMENT CONSULTANTS LLC
              </h2>
            </div>

            <p className="text-base leading-relaxed text-neutral-700">
              AXIS ELITE MANAGEMENT CONSULTANTS LLC is a multidisciplinary
              consultancy delivering innovative, research-based, and
              performance-driven solutions across diverse industries. We
              specialize in marketing research, advertising studies, project
              development, management consultancy, hotel and tourism advisory,
              food consultancy, AI innovation research, and quality &amp;
              standardization consulting.
            </p>

            <p className="text-base leading-relaxed text-neutral-700">
              Combining analytical expertise with real market experience, we
              help businesses strengthen operations, improve decision-making,
              enhance digital presence, and achieve measurable growth. Our
              mission is to{" "}
              <span className="font-semibold text-neutral-900">
                empower organizations to grow smarter, operate efficiently, and
                scale sustainably.
              </span>
            </p>

            {/* SMALL HIGHLIGHTS UNDER TEXT */}
            <div className="grid gap-4 sm:grid-cols-3 text-sm text-neutral-700">
              <div className="rounded-2xl border border-neutral-200 bg-white/70 px-4 py-3">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-neutral-500">
                  Approach
                </p>
                <p className="mt-1">
                  Data-driven, research-backed consulting with clear KPIs.
                </p>
              </div>
              <div className="rounded-2xl border border-neutral-200 bg-white/70 px-4 py-3">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-neutral-500">
                  Coverage
                </p>
                <p className="mt-1">
                  Hospitality, tourism, food, trading, real estate &amp; more.
                </p>
              </div>
              <div className="rounded-2xl border border-neutral-200 bg-white/70 px-4 py-3">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-neutral-500">
                  Focus
                </p>
                <p className="mt-1">
                  Long-term, sustainable growth for UAE-based and global
                  clients.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM CENTER — VISION & MISSION CARDS */}
        <div className="max-w-4xl mx-auto grid gap-6 md:grid-cols-2 pt-4">
          {/* VISION CARD */}
          <div className="relative rounded-2xl overflow-hidden shadow-lg">
            {/* Background Image */}
            <Image
              src="/who we are1.jpg"
              alt="Our Vision"
              fill
              className="object-cover"
            />

            {/* Overlay for readability */}
            <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />

            {/* Text Content */}
            <div className="relative p-6 text-white">
              {/* Pill Label */}
              <p
                className="inline-block mb-3 rounded-full bg-white/20 px-4 py-1
                   text-xs font-semibold border border-white/30 backdrop-blur-md"
              >
                Our Vision
              </p>

              <p className="text-sm leading-relaxed text-white/90">
                To become the UAE’s most trusted and results-focused consulting
                partner, known for delivering strategic insights, innovative
                solutions, and exceptional value across all business sectors.
              </p>
            </div>
          </div>

          {/* MISSION CARD */}
          <div className="relative rounded-2xl overflow-hidden shadow-lg">
            {/* Background Image */}
            <Image
              src="/who we are2.jpg"
              alt="Our Mission"
              fill
              className="object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />

            {/* Content */}
            <div className="relative p-6 text-white">
              <p
                className="inline-block mb-3 rounded-full bg-white/20 px-4 py-1
                   text-xs font-semibold border border-white/30 backdrop-blur-md"
              >
                Our Mission
              </p>

              <ul className="list-disc space-y-1 text-sm leading-relaxed text-white/90 pl-4">
                <li>
                  Comprehensive business & management consultancy for SMEs.
                </li>
                <li>
                  Advanced marketing & advertising research backed by data.
                </li>
                <li>AI-driven insights & innovation strategies.</li>
                <li>Tourism, hospitality & food sector project development.</li>
                <li>Quality, compliance & operational excellence advisory.</li>
                <li>
                  Long-term partnerships built on transparency & accuracy.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
