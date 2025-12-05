// components/home/IndustriesSection.tsx

const industries = [
  { label: "Trading & Distribution", icon: "📦" },
  { label: "FMCG", icon: "🛒" },
  { label: "Real Estate", icon: "🏙️" },
  { label: "Hospitality & Tourism", icon: "🏨" },
  { label: "Retail", icon: "🛍️" },
  { label: "Manufacturing", icon: "🏭" },
  { label: "E-Commerce", icon: "💻" },
  { label: "Professional Services", icon: "📑" },
  { label: "Startups & SMEs", icon: "🚀" },
];

export function IndustriesSection() {
  return (
    <section
      id="industries"
      className="border-y border-neutral-100 bg-neutral-50/80 py-16"
    >
      <div className="container space-y-10">
        {/* Header */}
        <div className="max-w-2xl space-y-3">
          <span className="inline-flex items-center rounded-full bg-neutral-900 text-neutral-50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.18em]">
            Industries We Serve
          </span>
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl">
            Cross-industry expertise with strong UAE market insight.
          </h2>
          <p className="text-sm leading-relaxed text-neutral-600">
            We partner with organizations across trading, FMCG, real estate,
            hospitality, retail, manufacturing, e-commerce, professional
            services and the startup ecosystem to deliver strategic,
            research-backed consulting and digital transformation.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {industries.map((item) => (
            <div
              key={item.label}
              className="group flex items-start gap-3 rounded-2xl border border-neutral-200 bg-white/90 px-4 py-4 shadow-sm hover:shadow-md hover:-translate-y-[2px] transition-all duration-200"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-neutral-900 text-base">
                <span className="text-white">{item.icon}</span>
              </div>
              <div>
                <p className="text-sm font-semibold text-neutral-900">
                  {item.label}
                </p>
                <p className="mt-1 text-xs text-neutral-600 group-hover:text-neutral-700">
                  Advisory for strategy, operations and growth in this sector.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
