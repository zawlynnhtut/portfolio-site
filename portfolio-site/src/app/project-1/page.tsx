export default function ProjectOne() {
  return (
    <main className="min-h-screen bg-neutral-950 px-6 py-24 text-white sm:py-32">
      <div className="mx-auto max-w-5xl space-y-20">
        <header className="space-y-6">
          <p className="text-xs uppercase tracking-[0.35em] text-neutral-500">
            Case Study
          </p>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Demand Forecasting System
          </h1>
          <p className="max-w-3xl text-base leading-relaxed text-neutral-300 sm:text-lg">
            Structure-only snapshot of a planning-focused forecasting build for inventory teams.
          </p>
          <p className="text-xs uppercase tracking-[0.25em] text-neutral-500">
            Portfolio simulation based on real-world retail planning workflows.
          </p>
        </header>

        {[
          { title: "Overview", body: "Shows how a planning platform turns noisy signals into steady decision support." },
          { title: "Business Problem", body: "Retail teams lacked forward views to plan inventory calmly." },
          { title: "Data Inputs", body: "Sales, promo, and supply signals are routed into a shared layer." },
          { title: "Approach", body: "Lightweight forecasting paired with decision rules for planners." },
          { title: "Workflow", body: "Intake -> scenario planning -> guidance surfaced in weekly rituals." },
          { title: "Business Impact", body: "Focuses on decision clarity by keeping demand views, playbooks, and rituals aligned." },
          { title: "Links", body: "Quick access to the repo and walkthrough options." },
        ].map((section) => (
          <section key={section.title} className="space-y-3 rounded-2xl border border-neutral-900/80 bg-neutral-950/60 p-6">
            <h2 className="text-2xl font-semibold">{section.title}</h2>
            <p className="text-sm leading-relaxed text-neutral-300">{section.body}</p>
            {section.title === "Links" && (
              <div className="flex flex-wrap gap-3 text-sm text-neutral-300">
                <a
                  href="https://github.com/zawlynnhtut/portfolio-site"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-md border border-neutral-700 px-4 py-2 hover:border-neutral-500 hover:text-white"
                >
                  View code on GitHub
                </a>
                <a
                  href="mailto:hello@example.com"
                  className="rounded-md border border-white/30 px-4 py-2 text-white hover:border-white"
                >
                  Request a walkthrough
                </a>
              </div>
            )}
          </section>
        ))}
      </div>
    </main>
  );
}
