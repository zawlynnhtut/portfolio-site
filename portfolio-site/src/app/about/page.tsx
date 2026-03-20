import Image from "next/image";
import Link from "next/link";

const ctaLinks = [
  {
    label: "Email",
    href: "mailto:z.lynnhtut@gmail.com",
  },
  {
    label: "GitHub",
    href: "https://github.com/zawlynnhtut",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/zaw-lynn-htut-dss/",
  },
];

export default function About() {
  return (
    <main className="min-h-screen bg-neutral-950 px-6 py-24 text-white sm:py-32">
      <div className="mx-auto max-w-6xl space-y-12">

        {/* HERO */}
        <header className="grid gap-10 lg:grid-cols-[1.35fr_0.65fr] lg:items-center">
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.35em] text-neutral-500">About</p>

            <div className="space-y-4">
              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
                Product Data Scientist
              </h1>

              <p className="max-w-3xl text-lg leading-relaxed text-neutral-300 sm:text-xl">
                I build decision systems that turn messy business data into clear actions.
              </p>

              <p className="max-w-3xl text-sm leading-7 text-neutral-400 sm:text-base">
                I am Zaw Lynn Htut, a product-focused data scientist with 9+ years of combined
                analytics experience, including 6+ years in data science and advanced analytics.
                My work sits at the intersection of analytics, machine learning, experimentation,
                and business decision-making across telecom, retail, and digital businesses.
              </p>
            </div>

            {/* CTA */}
            <div className="flex flex-wrap gap-3">
              {ctaLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                  className="rounded-full border border-neutral-800 bg-neutral-900 px-4 py-2 text-sm font-medium text-neutral-200 transition hover:border-neutral-700 hover:bg-neutral-800 hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* PROFILE IMAGE */}
          <div className="mx-auto w-full max-w-sm">
            <div className="overflow-hidden rounded-3xl border border-neutral-800 bg-neutral-900">
              <div className="relative aspect-[4/5] w-full">
                <Image
                  src="/profile.jpg"
                  alt="Zaw Lynn Htut"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </header>

        {/* IMPACT */}
        <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {[
            { value: "9+ yrs", label: "combined analytics experience" },
            { value: "6+ yrs", label: "data science and advanced analytics" },
            { value: "$0.2M", label: "revenue uplift from recommendation" },
            { value: "$0.4M", label: "savings from churn initiatives" },
            { value: "10%", label: "retention improvement" },
            { value: "30+", label: "projects delivered annually" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-neutral-900/80 bg-neutral-950/60 p-5"
            >
              <p className="text-2xl font-semibold text-white">{stat.value}</p>
              <p className="mt-2 text-sm text-neutral-400">{stat.label}</p>
            </div>
          ))}
        </section>

        {/* WHAT I DO */}
        <section className="rounded-3xl border border-neutral-900/80 bg-neutral-950/60 p-6 sm:p-8">
          <h2 className="text-2xl font-semibold mb-6">What I do</h2>

          <div className="grid gap-4 lg:grid-cols-3">
            {[
              {
                title: "Decision Science",
                text: "Forecasting, recommendation, segmentation, and optimization systems that help teams decide what to do next.",
              },
              {
                title: "Product Analytics",
                text: "Turning customer and operational data into insights for growth, retention, pricing, and planning.",
              },
              {
                title: "Execution",
                text: "Hands-on across SQL, Python, dashboards, experimentation, and production analytics pipelines.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-neutral-900 p-5"
              >
                <h3 className="font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm text-neutral-400">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* EXPERIENCE */}
        <section className="rounded-3xl border border-neutral-900/80 bg-neutral-950/60 p-6 sm:p-8">
          <h2 className="text-2xl font-semibold mb-6">Career snapshot</h2>

          <div className="space-y-4">
            {[
              {
                role: "Senior Data Scientist • Nul Global",
                text: "Built demand forecasting and inventory decision systems translating predictions into business actions.",
              },
              {
                role: "Senior Manager • ATOM Telecom",
                text: "Led churn, recommendation, and segmentation analytics driving revenue and retention impact.",
              },
              {
                role: "Earlier roles",
                text: "Analytics and BI across telecom, finance, and digital environments.",
              },
            ].map((item) => (
              <div
                key={item.role}
                className="rounded-2xl border border-neutral-900 p-5"
              >
                <p className="font-semibold text-white">{item.role}</p>
                <p className="mt-2 text-sm text-neutral-400">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SKILLS */}
        <section className="rounded-3xl border border-neutral-900/80 bg-neutral-950/60 p-6 sm:p-8">
          <h2 className="text-2xl font-semibold mb-6">Tools and strengths</h2>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                label: "Core tools",
                items: ["SQL", "Python", "Power BI", "Metabase"],
              },
              {
                label: "Typical work",
                items: ["Forecasting", "Experimentation", "Segmentation", "Decision support"],
              },
              {
                label: "Strengths",
                items: ["Business framing", "Messy data", "Stakeholder communication"],
              },
            ].map((group) => (
              <div key={group.label}>
                <p className="font-semibold text-white">{group.label}</p>
                <ul className="mt-2 space-y-1 text-sm text-neutral-400">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="text-center">
          <h2 className="text-2xl font-semibold">Want to see how I work?</h2>
          <p className="mt-3 text-neutral-400">
            Explore the case studies to see how I approach real business problems.
          </p>

          <div className="mt-6 flex justify-center gap-3">
            <Link
              href="/#projects"
              className="rounded-full bg-white px-4 py-2 text-sm font-medium text-black"
            >
              View Projects
            </Link>
            <Link
              href="mailto:z.lynnhtut@gmail.com"
              className="rounded-full border border-neutral-700 px-4 py-2 text-sm"
            >
              Contact Me
            </Link>
          </div>
        </section>

      </div>
    </main>
  );
}