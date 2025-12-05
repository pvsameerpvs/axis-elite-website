// components/home/PromiseSection.tsx

export function PromiseSection() {
  return (
    <section className="border-y border-neutral-100 bg-neutral-900 py-16 text-neutral-50">
      <div className="container grid gap-10 md:grid-cols-[1.2fr,0.9fr] md:items-center">
        <div className="space-y-4">
          <p className="section-title text-neutral-400">Our Promise</p>
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            We do more than advise — we deliver transformation.
          </h2>
          <p className="text-sm leading-relaxed text-neutral-200">
            At AXIS ELITE MANAGEMENT CONSULTANTS LLC, our work is designed to
            improve performance, increase efficiency, enhance brand value, and
            drive long-term business growth. Every engagement is grounded in
            clear objectives, transparent communication, and measurable
            outcomes.
          </p>
        </div>
        <div className="space-y-3 rounded-3xl border border-neutral-700 bg-neutral-900/60 p-6">
          <p className="text-sm font-semibold text-neutral-50">
            Why clients choose us:
          </p>
          <ul className="list-disc space-y-1 text-sm text-neutral-200 pl-4">
            <li>Comprehensive consultancy across 9 licensed service lines.</li>
            <li>Highly experienced professionals with sector expertise.</li>
            <li>Deep understanding of the UAE business environment.</li>
            <li>Data-driven, research-backed strategies.</li>
            <li>Custom solutions tailored to each client.</li>
            <li>Transparent communication and measurable results.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
