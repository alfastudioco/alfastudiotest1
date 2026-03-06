export default function AlfaStudioWebsite() {
  const services = [
    "Custom Cabinetry",
    "Closets & Wardrobes",
    "Bathroom Vanities",
    "Built-In Wall Units",
    "Mudrooms & Entry Storage",
    "Millwork for Residential & Commercial Spaces",
  ];

  const projects = [
    {
      title: "Luxury Kitchen Cabinetry",
      category: "Kitchen",
      desc: "Tailored cabinetry with refined detailing, premium finishes, and a clean modern layout.",
    },
    {
      title: "Custom Master Closet",
      category: "Closet",
      desc: "Thoughtfully designed storage with a balance of function, organization, and high-end finish work.",
    },
    {
      title: "Built-In Media Wall",
      category: "Living Space",
      desc: "Custom millwork designed to integrate storage, display, and architectural presence into one feature wall.",
    },
  ];

  const materials = [
    "Painted finishes",
    "Natural wood veneer",
    "Textured laminates",
    "Integrated hardware",
  ];

  const testimonials = [
    {
      quote:
        "The final cabinetry completely elevated the space. Everything feels intentional, clean, and beautifully built.",
      author: "Residential Client",
    },
    {
      quote:
        "From design to install, the process felt organized and high-end. The detailing made all the difference.",
      author: "Interior Project Client",
    },
  ];

  const navItems = [
    ["Services", "#services"],
    ["Portfolio", "#projects"],
    ["Materials", "#materials"],
    ["About", "#about"],
    ["Contact", "#contact"],
  ] as const;

  return (
    <div className="min-h-screen bg-stone-50 text-zinc-900">
      <header className="fixed inset-x-0 top-0 z-50">
        <div className="mx-auto mt-4 flex max-w-7xl items-center justify-between rounded-full border border-white/15 bg-black/25 px-6 py-4 text-white shadow-lg backdrop-blur-md lg:px-8">
          <a
            href="#top"
            className="text-sm uppercase tracking-[0.28em] text-white/80 transition hover:text-white"
          >
            Alfa Studio
          </a>

          <nav className="hidden items-center gap-8 text-sm md:flex">
            {navItems.map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="text-white/80 transition hover:text-white"
              >
                {label}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="rounded-full border border-white/20 bg-white px-4 py-2 text-sm font-medium text-zinc-900 transition hover:bg-stone-200"
          >
            Start a Project
          </a>
        </div>
      </header>

      <main id="top">
        <section className="relative overflow-hidden bg-zinc-950 text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.18),transparent_35%),linear-gradient(135deg,rgba(255,255,255,0.06),transparent_45%),linear-gradient(180deg,#2f2e2c_0%,#191917_100%)]" />
          <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:80px_80px]" />

          <div className="relative mx-auto flex min-h-[92vh] max-w-7xl flex-col items-center justify-center px-6 pb-20 pt-36 text-center lg:px-8">
            <div className="mb-8 rounded-full border border-white/15 bg-white/5 px-5 py-2 text-xs uppercase tracking-[0.3em] text-white/75 backdrop-blur-sm">
              Luxury Cabinetry + Custom Millwork
            </div>

            <img
              src="/alfa-logo.jpg"
              alt="Alfa Studio"
              className="w-full max-w-4xl object-contain drop-shadow-[0_18px_50px_rgba(0,0,0,0.35)]"
            />

            <p className="mt-10 max-w-3xl text-lg leading-8 text-white/75 sm:text-xl">
              Custom cabinetry, closets, vanities, built-ins, and refined
              millwork for homes and interior spaces that demand a clean,
              architectural feel.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a
                href="#projects"
                className="rounded-full bg-white px-6 py-3 text-sm font-medium text-zinc-900 transition hover:bg-stone-200"
              >
                View Portfolio
              </a>
              <a
                href="#contact"
                className="rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium text-white backdrop-blur-sm transition hover:bg-white/10"
              >
                Request a Consultation
              </a>
            </div>

            <div className="mt-14 grid w-full max-w-4xl gap-4 text-left text-sm sm:grid-cols-3">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                <div className="text-2xl font-semibold text-white">Custom</div>
                <div className="mt-1 text-white/65">Made for each space</div>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                <div className="text-2xl font-semibold text-white">Premium</div>
                <div className="mt-1 text-white/65">Materials and finishes</div>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                <div className="text-2xl font-semibold text-white">Modern</div>
                <div className="mt-1 text-white/65">Clean, timeless detailing</div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="border-t border-zinc-200 bg-white">
          <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
            <div className="max-w-2xl">
              <div className="text-sm uppercase tracking-[0.25em] text-zinc-500">
                Services
              </div>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight">
                Custom woodwork crafted to elevate everyday spaces.
              </h2>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <div
                  key={service}
                  className="rounded-3xl border border-zinc-200 bg-stone-50 p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="text-lg font-medium">{service}</div>
                  <p className="mt-2 text-sm leading-6 text-zinc-600">
                    Designed and built with close attention to proportion,
                    storage, finish quality, and installation detail.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="flex items-end justify-between gap-6">
            <div className="max-w-2xl">
              <div className="text-sm uppercase tracking-[0.25em] text-zinc-500">
                Portfolio
              </div>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight">
                A clean showcase for the spaces and details that define your
                work.
              </h2>
            </div>
            <a href="#contact" className="hidden text-sm text-zinc-600 md:block">
              Start your project →
            </a>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {projects.map((project) => (
              <div
                key={project.title}
                className="overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex h-56 items-start justify-between bg-[linear-gradient(135deg,#f7f5f2,#e2ddd7)] p-6">
                  <span className="rounded-full bg-white px-3 py-1 text-xs uppercase tracking-[0.2em] text-zinc-600 shadow-sm">
                    {project.category}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-zinc-600">
                    {project.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section
          id="materials"
          className="border-y border-zinc-200 bg-zinc-950 text-white"
        >
          <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[1fr_1fr] lg:px-8">
            <div>
              <div className="text-sm uppercase tracking-[0.25em] text-zinc-400">
                Materials & Finishes
              </div>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight">
                A refined palette that supports timeless, modern interiors.
              </h2>
              <p className="mt-4 max-w-xl text-zinc-300">
                We design around finish quality, texture, durability, and the
                overall feel of the space. Each project is tailored to the
                architecture and daily use of the home.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {materials.map((item) => (
                <div
                  key={item}
                  className="rounded-3xl border border-white/10 bg-white/5 p-6"
                >
                  <div className="text-lg font-medium">{item}</div>
                  <p className="mt-2 text-sm leading-6 text-zinc-300">
                    Selected to support clean detailing, durability, and a
                    premium finished look.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="process" className="bg-white">
          <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
            <div className="max-w-2xl">
              <div className="text-sm uppercase tracking-[0.25em] text-zinc-500">
                Process
              </div>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight">
                From initial concept to final installation, every detail is
                intentional.
              </h2>
            </div>
            <div className="mt-10 grid gap-4 md:grid-cols-4">
              {[
                [
                  "01",
                  "Consultation",
                  "Discuss style, scope, measurements, and goals for the space.",
                ],
                [
                  "02",
                  "Design",
                  "Develop layouts, material direction, and shop-ready details.",
                ],
                [
                  "03",
                  "Fabrication",
                  "Craft custom pieces with careful attention to finish and fit.",
                ],
                [
                  "04",
                  "Installation",
                  "Coordinate delivery and complete the final install with precision.",
                ],
              ].map(([num, title, desc]) => (
                <div
                  key={num}
                  className="rounded-3xl border border-zinc-200 bg-stone-50 p-6 shadow-sm"
                >
                  <div className="text-sm text-zinc-400">{num}</div>
                  <div className="mt-3 text-xl font-medium">{title}</div>
                  <p className="mt-2 text-sm leading-6 text-zinc-600">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="border-t border-zinc-200 bg-stone-50">
          <div className="mx-auto grid max-w-7xl gap-8 px-6 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
            <div>
              <div className="text-sm uppercase tracking-[0.25em] text-zinc-500">
                About the Studio
              </div>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight">
                A studio approach to cabinetry, millwork, and interior detail.
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-600">
                Alfa Studio focuses on custom spaces that feel tailored,
                architectural, and highly resolved. We work across kitchens,
                closets, vanities, built-ins, mudrooms, and feature walls with an
                emphasis on proportion, usability, and finish quality.
              </p>
              <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-600">
                Our process combines design direction, shop-ready planning,
                fabrication, and final installation so clients receive a cohesive
                experience from first conversation to finished space.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
                <div className="text-2xl font-semibold">Detail-Driven</div>
                <p className="mt-2 text-sm leading-6 text-zinc-600">
                  Every line, reveal, and finish decision is considered as part of
                  the full interior.
                </p>
              </div>
              <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
                <div className="text-2xl font-semibold">Client-Focused</div>
                <p className="mt-2 text-sm leading-6 text-zinc-600">
                  Spaces are tailored around how clients live, store, entertain,
                  and move through the home.
                </p>
              </div>
              <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm sm:col-span-2">
                <div className="text-2xl font-semibold">Built to Last</div>
                <p className="mt-2 text-sm leading-6 text-zinc-600">
                  Premium materials, careful fabrication, and precise installation
                  define the finished result.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="mb-10 max-w-2xl">
            <div className="text-sm uppercase tracking-[0.25em] text-zinc-500">
              Testimonials
            </div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">
              The kind of experience a premium studio should deliver.
            </h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            {testimonials.map((item) => (
              <div
                key={item.author}
                className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm"
              >
                <p className="text-lg leading-8 text-zinc-700">
                  “{item.quote}”
                </p>
                <div className="mt-6 text-sm uppercase tracking-[0.2em] text-zinc-500">
                  {item.author}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="mb-8 rounded-[2rem] bg-zinc-950 px-8 py-10 text-white shadow-sm">
            <div className="max-w-3xl">
              <div className="text-sm uppercase tracking-[0.25em] text-zinc-400">
                Start the Conversation
              </div>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                Planning a kitchen, closet, vanity, or custom built-in?
              </h2>
              <p className="mt-4 max-w-2xl text-zinc-300">
                Share the scope, style direction, and timeline. We can tailor
                this section with your real phone number, email, project intake
                form, and social links.
              </p>
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm">
              <div className="text-sm uppercase tracking-[0.25em] text-zinc-500">
                Contact
              </div>
              <h3 className="mt-3 text-3xl font-semibold tracking-tight">
                Let’s create something custom.
              </h3>
              <p className="mt-4 max-w-xl text-zinc-600">
                Tell us a bit about the space and what you are looking to build.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <input
                  className="rounded-2xl border border-zinc-300 px-4 py-3 outline-none ring-0 placeholder:text-zinc-400"
                  placeholder="Name"
                />
                <input
                  className="rounded-2xl border border-zinc-300 px-4 py-3 outline-none ring-0 placeholder:text-zinc-400"
                  placeholder="Email"
                />
                <input
                  className="rounded-2xl border border-zinc-300 px-4 py-3 outline-none ring-0 placeholder:text-zinc-400 sm:col-span-2"
                  placeholder="Project Type"
                />
                <textarea
                  className="min-h-32 rounded-2xl border border-zinc-300 px-4 py-3 outline-none ring-0 placeholder:text-zinc-400 sm:col-span-2"
                  placeholder="Tell us about your space"
                />
              </div>
              <button className="mt-6 rounded-2xl bg-zinc-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-zinc-700">
                Send Inquiry
              </button>
            </div>

            <div className="space-y-4">
              <div className="rounded-3xl border border-zinc-200 bg-stone-50 p-6 shadow-sm">
                <div className="text-sm uppercase tracking-[0.22em] text-zinc-500">
                  Studio
                </div>
                <div className="mt-3 text-lg font-medium">Alfa Studio</div>
                <div className="mt-2 text-sm leading-6 text-zinc-600">
                  Premium cabinetry and custom millwork for kitchens, closets,
                  vanities, mudrooms, media walls, and specialty interior spaces.
                </div>
              </div>
              <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
                <div className="text-sm uppercase tracking-[0.22em] text-zinc-500">
                  Suggested Next Additions
                </div>
                <ul className="mt-3 space-y-2 text-sm leading-6 text-zinc-600">
                  <li>• Real project photography</li>
                  <li>• Finish and material gallery</li>
                  <li>• Testimonials from completed clients</li>
                  <li>• Instagram and inquiry integration</li>
                  <li>• Trade partner or designer page</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
