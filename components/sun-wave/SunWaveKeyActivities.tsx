import Image from "next/image";

export function SunWaveKeyActivities() {
  return (
    <section className="bg-neutral-50/80 py-14">
      <div className="container space-y-8">
        {/* TITLE */}
        <div className="space-y-3 text-center md:text-left">
          <p className="section-title">Key Activities</p>
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl">
            End-to-end IT, cloud, digital and cybersecurity capabilities.
          </h2>
        </div>

        {/* 3-COLUMN LAYOUT */}
        <div className="grid gap-8 lg:grid-cols-[1.1fr,0.9fr,1.1fr] items-start">
          {/* LEFT COLUMN – 1 to 4 */}
          <div className="space-y-4">
            <div className="rounded-2xl border border-sky-100 bg-white p-6 shadow-sm shadow-sky-50">
              <h3 className="text-sm font-semibold text-neutral-900">
                1. Cloud Services &amp; Data Centers
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-700">
                Scalable cloud solutions and robust data center services to
                ensure reliable, secure and efficient data storage and
                processing.
              </p>
            </div>

            <div className="rounded-2xl border border-sky-100 bg-white p-6 shadow-sm shadow-sky-50">
              <h3 className="text-sm font-semibold text-neutral-900">
                2. IT Products Trading (Hardware &amp; Software)
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-700">
                Supply of high-quality servers, storage, networking equipment,
                desktops, laptops, POS systems, and licensed software including
                operating systems, productivity suites, security tools, CRM, ERP
                and development platforms.
              </p>
            </div>

            <div className="rounded-2xl border border-sky-100 bg-white p-6 shadow-sm shadow-sky-50">
              <h3 className="text-sm font-semibold text-neutral-900">
                3. Social Media Applications Development &amp; Management
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-700">
                Design, build and manage social media applications to increase
                engagement, streamline communication, and support digital
                communities.
              </p>
            </div>

            <div className="rounded-2xl border border-sky-100 bg-white p-6 shadow-sm shadow-sky-50">
              <h3 className="text-sm font-semibold text-neutral-900">
                4. Marketing Services via Social Media
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-700">
                Strategy, content creation and campaign management on social
                platforms to improve visibility, lead generation and customer
                retention.
              </p>
            </div>
          </div>

          {/* CENTER – IMAGE */}
          <div className="mx-auto flex w-full max-w-sm flex-col items-center gap-4">
            <div className="relative h-64 w-full overflow-hidden rounded-3xl border border-sky-100 bg-sky-50/60 shadow-md shadow-sky-100">
              <Image
                src="/sunwave-key-activities.jpg" // 👉 put your image here
                alt="Sun Wave key activities visual"
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-sky-900/40 via-sky-900/10 to-transparent" />
            </div>
            <div className="relative h-64 w-full overflow-hidden rounded-3xl border border-sky-100 bg-sky-50/60 shadow-md shadow-sky-100">
              <Image
                src="/sunwave-key-activities1.jpg" // 👉 put your image here
                alt="Sun Wave key activities visual"
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-sky-900/40 via-sky-900/10 to-transparent" />
            </div>
            <p className="text-xs text-neutral-500 text-center">
              Visual representation of Sun Wave&apos;s cloud, infrastructure and
              cybersecurity activities.
            </p>
          </div>

          {/* RIGHT COLUMN – 5 to 8 */}
          <div className="space-y-4">
            <div className="rounded-2xl border border-sky-100 bg-white p-6 shadow-sm shadow-sky-50">
              <h3 className="text-sm font-semibold text-neutral-900">
                5. Data Classification &amp; Analysis Services
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-700">
                Organizing, integrating and analyzing data to support
                decision-making, process optimization and performance
                monitoring.
              </p>
            </div>

            <div className="rounded-2xl border border-sky-100 bg-white p-6 shadow-sm shadow-sky-50">
              <h3 className="text-sm font-semibold text-neutral-900">
                6. IT Infrastructure
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-700">
                Network design, hardware deployment and system integration to
                create resilient, secure and scalable IT environments.
              </p>
            </div>

            <div className="rounded-2xl border border-sky-100 bg-white p-6 shadow-sm shadow-sky-50">
              <h3 className="text-sm font-semibold text-neutral-900">
                7. Web Design &amp; Development
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-700">
                UX-led, responsive websites, portals and e-commerce platforms
                aligned with brand and growth objectives.
              </p>
            </div>

            <div className="rounded-2xl border border-sky-100 bg-white p-6 shadow-sm shadow-sky-50">
              <h3 className="text-sm font-semibold text-neutral-900">
                8. Cybersecurity Services
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-700">
                Threat assessments, security audits and deployment of robust
                cybersecurity tools to safeguard critical systems and data.
              </p>
            </div>
          </div>
        </div>

        {/* BOTTOM CENTER CARD – 9 */}
        <div className="mt-4 flex justify-center">
          <div className="w-full max-w-3xl rounded-2xl border border-sky-100 bg-white p-6 shadow-sm shadow-sky-50">
            <h3 className="text-sm font-semibold text-neutral-900">
              9. Software Designing &amp; Development
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-neutral-700">
              Custom enterprise applications, mobile apps and digital platforms
              with modern UI/UX, backed by ongoing maintenance and support.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
