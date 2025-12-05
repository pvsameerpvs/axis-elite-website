// components/home/CoreValuesAndServices.tsx
import Image from "next/image";

const coreValues = [
  {
    title: "Integrity",
    body: "Ethical, transparent, and responsible consulting at every step.",
  },
  {
    title: "Innovation",
    body: "Leveraging modern technologies and AI for smarter, future-ready solutions.",
  },
  {
    title: "Excellence",
    body: "High-quality output with clear KPIs and measurable results.",
  },
  {
    title: "Client Focus",
    body: "Tailored strategies designed around each client’s unique goals.",
  },
  {
    title: "Growth Mindset",
    body: "Always adapting to evolving markets and business landscapes.",
  },
];

const serviceLines = [
  "Marketing Research & Consultancies – Market feasibility, consumer behavior, competitor research & brand positioning.",
  "Advertising Research & Consultancies – Campaign effectiveness, media strategy & brand awareness studies.",
  "Project Development Consultancy – Business planning, feasibility, operational frameworks & investor presentations.",
  "Food Consultancy – Food safety, menu development, F&B business planning & hygiene consulting.",
  "Hotel Consultancy – Operations assessment, hospitality management & guest experience.",
  "Management Consultancies – Business structuring, process optimization, forecasting, KPIs & compliance.",
  "Innovation & Artificial Intelligence Research – AI strategy, automation, data analytics & digital transformation.",
  "Tourism & Recreation Consultancy – Tourism market analysis, destination development & visitor experience.",
  "Quality & Standardization Consultancy – ISO support, quality audits, process standardization & compliance frameworks.",
];

export function CoreValuesAndServices() {
  return (
    <section
      id="services"
      className="border-y border-neutral-100 bg-neutral-50/80 py-20"
    >
      <div className="container space-y-10">
        {/* Section header */}
        <div className="flex flex-col gap-3 text-center">
          <span className="mx-auto inline-flex items-center rounded-full bg-neutral-900 text-neutral-50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.18em]">
            Our Approach
          </span>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-900">
            Core values and service lines that shape every engagement.
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-neutral-600">
            From foundational principles to specialized consulting streams, we
            align strategy, operations and innovation to deliver measurable
            results for our clients.
          </p>
        </div>

        {/* MAIN GRID */}
        <div className="grid gap-10 lg:grid-cols-[0.9fr,1.1fr,1.1fr] lg:items-start">
          {/* LEFT: IMAGE BLOCK */}
          <div className="relative h-[260px] sm:h-[320px] lg:h-[360px] w-full overflow-hidden rounded-3xl shadow-md">
            <Image
              src="/services.jpg" // 👈 you can change this to any image path
              alt="Axis Elite Services"
              fill
              className="object-cover"
            />
            {/* overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
            <div className="absolute bottom-4 left-4 text-xs sm:text-sm font-medium text-white drop-shadow-lg">
              Strategy • Research • Implementation
            </div>
          </div>

          {/* CENTER: CORE VALUES */}
          <div className="space-y-4">
            <p className="inline-flex items-center rounded-full bg-white px-4 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-neutral-700 border border-neutral-200">
              Core Values
            </p>
            <h3 className="text-lg font-semibold text-neutral-900">
              The principles that guide every engagement.
            </h3>

            <div className="grid gap-4 sm:grid-cols-2">
              {coreValues.map((item) => (
                <div
                  key={item.title}
                  className="group rounded-2xl border border-neutral-200 bg-white/80 p-4 shadow-sm hover:shadow-md hover:-translate-y-[2px] transition-all duration-200"
                >
                  <p className="text-sm font-semibold text-neutral-900">
                    {item.title}
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-neutral-600">
                    {item.body}
                  </p>
                  <div className="mt-3 h-[2px] w-10 rounded-full bg-neutral-200 group-hover:bg-neutral-900 transition-colors" />
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: SERVICE LINES */}
          <div className="space-y-4">
            <p className="inline-flex items-center rounded-full bg-neutral-900 text-neutral-50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.18em]">
              Service Lines
            </p>
            <h3 className="text-lg font-semibold text-neutral-900">
              Consultancy aligned with our trade license activities.
            </h3>

            <div className="rounded-2xl border border-neutral-200 bg-white/90 p-5 shadow-sm max-h-[340px] overflow-y-auto">
              <ul className="space-y-3 text-sm leading-relaxed text-neutral-700">
                {serviceLines.map((line, idx) => (
                  <li key={idx} className="flex gap-3">
                    {/* Number pill */}
                    <span className="mt-[2px] inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-neutral-900 text-xs font-semibold text-white">
                      {idx + 1}
                    </span>
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
