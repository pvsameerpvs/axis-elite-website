export function SunWaveCustomersSuppliers() {
  return (
    <section className="bg-neutral-50/80 py-14">
      <div className="container space-y-10">
        {/* SECTION HEADER */}
        <div className="space-y-2 text-center md:text-left">
          <p className="section-title">Ecosystem</p>
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl">
            Strategic customers, global suppliers and key regions we serve.
          </h2>
          <p className="text-sm text-neutral-600 max-w-2xl mx-auto md:mx-0">
            SUN WAVE INNOVATIONS LLC operates at the intersection of enterprise
            customers and leading global technology providers.
          </p>
        </div>

        {/* TWO MAIN CARDS */}
        <div className="grid gap-8 md:grid-cols-2">
          {/* KEY CUSTOMERS */}
          <div className="rounded-2xl border border-sky-100 bg-white/90 p-6 shadow-sm shadow-sky-50">
            <p className="section-title mb-2">Key Customers</p>
            <ul className="space-y-3 text-sm leading-relaxed text-neutral-700">
              <li>
                <span className="font-semibold">Large Enterprises:</span>{" "}
                Complex IT needs, secure infrastructure and advanced
                cybersecurity across sectors like finance, healthcare,
                manufacturing and retail.
              </li>
              <li>
                <span className="font-semibold">
                  Small &amp; Medium-Sized Enterprises:
                </span>{" "}
                Growing businesses seeking cost-effective, scalable web, social
                and cloud solutions.
              </li>
              <li>
                <span className="font-semibold">Startups:</span> Agile,
                innovation-driven companies needing flexible, rapid deployment
                of digital products.
              </li>
              <li>
                <span className="font-semibold">Educational Institutions:</span>{" "}
                Technology for administration, learning management and student
                engagement.
              </li>
              <li>
                <span className="font-semibold">
                  Retailers &amp; E-commerce:
                </span>{" "}
                Online sales, inventory, marketing and secure customer data
                management.
              </li>
              <li>
                <span className="font-semibold">Healthcare Providers:</span>{" "}
                Secure patient systems, data privacy and compliance-focused
                digital solutions.
              </li>
            </ul>

            {/* small chips */}
            <div className="mt-4 flex flex-wrap gap-2 text-[11px]">
              <span className="rounded-full bg-sky-50 px-3 py-1 text-sky-700 ring-1 ring-sky-100">
                Enterprise &amp; SME
              </span>
              <span className="rounded-full bg-emerald-50 px-3 py-1 text-emerald-700 ring-1 ring-emerald-100">
                Regulated Industries
              </span>
              <span className="rounded-full bg-indigo-50 px-3 py-1 text-indigo-700 ring-1 ring-indigo-100">
                Digital-Native Clients
              </span>
            </div>
          </div>

          {/* TARGET SUPPLIERS */}
          <div className="rounded-2xl border border-indigo-100 bg-white/90 p-6 shadow-sm shadow-indigo-50">
            <p className="section-title mb-2">Target Suppliers</p>
            <ul className="space-y-3 text-sm leading-relaxed text-neutral-700">
              <li>
                <span className="font-semibold">Cloud Service Providers:</span>{" "}
                AWS, Microsoft Azure, Google Cloud Platform and others for
                scalable, secure infrastructure.
              </li>
              <li>
                <span className="font-semibold">Hardware Vendors:</span> Dell,
                HP, Cisco, Lenovo and more for servers, storage, networking and
                end-user devices.
              </li>
              <li>
                <span className="font-semibold">Software Vendors:</span> Adobe,
                JetBrains, Microsoft and other providers for design,
                productivity and development tools.
              </li>
              <li>
                <span className="font-semibold">Cybersecurity Providers:</span>{" "}
                Palo Alto Networks, Symantec, CrowdStrike and others for
                advanced protection.
              </li>
              <li>
                <span className="font-semibold">
                  Data Management Solutions Providers:
                </span>{" "}
                IBM, Oracle, Snowflake and others for scalable data platforms.
              </li>
              <li>
                <span className="font-semibold">Web Hosting Services:</span>{" "}
                Global hosting and domain providers to support deployments.
              </li>
              <li>
                <span className="font-semibold">
                  Social Media Management Tools:
                </span>{" "}
                Hootsuite, Buffer, Sprout Social and similar tools for social
                orchestration.
              </li>
              <li>
                <span className="font-semibold">
                  Consulting &amp; Training Providers:
                </span>{" "}
                Training platforms and IT research firms such as Udemy and
                Gartner for skills and insight development.
              </li>
            </ul>

            {/* small chips */}
            <div className="mt-4 flex flex-wrap gap-2 text-[11px]">
              <span className="rounded-full bg-indigo-50 px-3 py-1 text-indigo-700 ring-1 ring-indigo-100">
                Tier-1 Vendors
              </span>
              <span className="rounded-full bg-violet-50 px-3 py-1 text-violet-700 ring-1 ring-violet-100">
                Cloud &amp; Security
              </span>
              <span className="rounded-full bg-slate-50 px-3 py-1 text-slate-700 ring-1 ring-slate-200">
                Training &amp; Research
              </span>
            </div>
          </div>
        </div>

        {/* REGIONS WE SERVE */}
        <div className="rounded-2xl border border-neutral-200 bg-gradient-to-r from-sky-50 via-white to-emerald-50 p-6 text-sm shadow-sm shadow-sky-50">
          <p className="section-title mb-3">Regions We Serve</p>

          <div className="grid gap-4 md:grid-cols-3">
            <div>
              <p className="font-semibold text-neutral-900">India</p>
              <p className="mt-1 text-neutral-700">
                Diverse industry coverage from startups to enterprises with
                innovative IT, cloud and digital marketing solutions.
              </p>
            </div>
            <div>
              <p className="font-semibold text-neutral-900">Singapore</p>
              <p className="mt-1 text-neutral-700">
                High-tech, business-focused market with cutting-edge cloud,
                analytics and social application services.
              </p>
            </div>
            <div>
              <p className="font-semibold text-neutral-900">Europe</p>
              <p className="mt-1 text-neutral-700">
                Multi-sector solutions with strong focus on regulatory
                compliance, infrastructure and integrated marketing.
              </p>
            </div>
          </div>

          {/* region chips */}
          <div className="mt-4 flex flex-wrap gap-2 text-[11px]">
            <span className="rounded-full bg-white px-3 py-1 text-sky-800 ring-1 ring-sky-100">
              APAC
            </span>
            <span className="rounded-full bg-white px-3 py-1 text-emerald-800 ring-1 ring-emerald-100">
              Europe
            </span>
            <span className="rounded-full bg-white px-3 py-1 text-slate-800 ring-1 ring-slate-200">
              Cross-border Delivery
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
