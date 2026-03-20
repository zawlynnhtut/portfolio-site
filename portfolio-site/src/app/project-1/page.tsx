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
            A production-ready forecasting platform that ingests multi-channel sales, promo, and
            supply signals and returns replenishment guidance that operators can trust in weekly
            alignment rituals.
          </p>
        </header>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Overview</h2>
          <p className="text-base leading-relaxed text-neutral-300">
            Owned end-to-end product work for a net-new forecasting capability serving ~1,200
            retail locations. Defined the product surface, modeled critical data flows, and shipped
            the initial release in twelve weeks with an 18% reduction in aged inventory categories.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Business problem</h2>
          <p className="text-base leading-relaxed text-neutral-300">
            Inventory planners were chasing volatility caused by overlapping promos, seasonal
            shifts, and misaligned supplier lead times. Teams relied on backward-looking reports,
            leading to overreactions, margin leakage, and missed availability windows.
          </p>
        </section>

        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold">Data inputs</h2>
            <p className="mt-2 text-base leading-relaxed text-neutral-300">
              Built a governed layer that harmonizes commercial, operational, and external signals.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                title: "Sales telemetry",
                body:
                  "SKU-level velocity, returns, and attach rates streamed from POS and ecommerce.",
              },
              {
                title: "Promo + marketing",
                body:
                  "Forward calendar of promotions, spend tiers, and marketing flights tied to SKUs.",
              },
              {
                title: "Supply & constraints",
                body:
                  "Lead times, vendor reliability scores, capacity signals, and inventory on hand.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-neutral-900/80 bg-neutral-950/60 p-6"
              >
                <p className="text-sm font-semibold">{item.title}</p>
                <p className="mt-3 text-sm leading-relaxed text-neutral-400">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Approach</h2>
          <p className="text-base leading-relaxed text-neutral-300">
            Led discovery with planning, merchandising, and supply partners to frame the job to be
            done. Defined the target decision loop, then paired probabilistic forecasting with
            rules-based guardrails so outputs could land inside existing replenishment rituals.
          </p>
          <ul className="space-y-3 text-sm text-neutral-300">
            <li className="rounded-2xl border border-neutral-900/80 bg-neutral-950/60 p-4">
              <span className="font-medium text-white">Product framing:</span> Narrative, service
              blueprint, and success metrics vetted with VP of Merchandising.
            </li>
            <li className="rounded-2xl border border-neutral-900/80 bg-neutral-950/60 p-4">
              <span className="font-medium text-white">Model strategy:</span> Hierarchical
              forecasting with promo uplift adjustments and constrained optimization.
            </li>
            <li className="rounded-2xl border border-neutral-900/80 bg-neutral-950/60 p-4">
              <span className="font-medium text-white">Delivery surface:</span> API + lightweight UI
              that pushes replenishment recommendations and rationale.
            </li>
          </ul>
        </section>

        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold">Workflow</h2>
            <p className="mt-2 text-base leading-relaxed text-neutral-300">
              Designed a three-layer workflow so planners always know what changed and why.
            </p>
          </div>
          <div className="rounded-[2rem] border border-neutral-900/80 bg-neutral-950/70 p-8">
            <ol className="space-y-6 text-sm text-neutral-300">
              <li>
                <p className="text-xs uppercase tracking-[0.35em] text-neutral-500">01 · Signal intake</p>
                <p className="mt-2 leading-relaxed">
                  Daily ingestion jobs reconcile telemetry, promo calendars, and supplier updates,
                  generating clean feature stores.
                </p>
              </li>
              <li>
                <p className="text-xs uppercase tracking-[0.35em] text-neutral-500">02 · Scenario engine</p>
                <p className="mt-2 leading-relaxed">
                  Forecasts multiple demand paths, stress-tests them against supply, and scores each
                  plan for margin + availability.
                </p>
              </li>
              <li>
                <p className="text-xs uppercase tracking-[0.35em] text-neutral-500">03 · Decision delivery</p>
                <p className="mt-2 leading-relaxed">
                  Surfaces prioritized replenishment guidance, rationales, and action buttons inside
                  planner rituals and APIs.
                </p>
              </li>
            </ol>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Business impact</h2>
          <p className="text-base leading-relaxed text-neutral-300">
            Within the pilot footprint, the system simultaneously reduced excess stock and improved
            shelf availability during key promo windows.
          </p>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              { label: "Overstock", value: "↓ 14%", detail: "Lower aging inventory in focus categories." },
              { label: "Availability", value: "↑ 6 pts", detail: "Higher on-shelf rate during promos." },
              { label: "Cycle time", value: "−2 days", detail: "Faster plan approval each week." },
            ].map((metric) => (
              <div key={metric.label} className="rounded-2xl bg-neutral-950/70 p-6 text-center">
                <p className="text-xs uppercase tracking-[0.35em] text-neutral-500">{metric.label}</p>
                <p className="mt-3 text-3xl font-semibold tracking-tight">{metric.value}</p>
                <p className="mt-2 text-sm text-neutral-400">{metric.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">GitHub / project links</h2>
          <p className="text-base leading-relaxed text-neutral-300">
            Explore the codebase or connect to talk through implementation details and downstream impact.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://github.com/zawlynnhtut/portfolio-site"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border border-neutral-700 px-5 py-2 text-sm text-neutral-200 hover:border-neutral-500 hover:text-white"
            >
              View code on GitHub
            </a>
            <a
              href="mailto:zaw@example.com"
              className="rounded-md border border-white/25 px-5 py-2 text-sm text-white hover:border-white"
            >
              Request a walkthrough
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
