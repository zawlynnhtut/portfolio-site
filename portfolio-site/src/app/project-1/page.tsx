export default function ProjectOne() {
  return (
    <main className="min-h-screen bg-neutral-950 px-6 py-24 text-white sm:py-32">
      <div className="mx-auto max-w-5xl space-y-20">
        <section className="space-y-6">
          <p className="text-xs uppercase tracking-[0.35em] text-neutral-500">Project 1</p>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Retail Replenishment Decision Engine
          </h1>
          <p className="max-w-3xl text-base leading-relaxed text-neutral-300 sm:text-lg">
            Designed a system that transforms sales and inventory signals into product level demand forecasts and variant level replenishment decisions.
          </p>
          <p className="text-sm leading-relaxed text-neutral-400">
            Ensure the right products are available at the right place, time, and quantity - without overstocking or frequent stockouts.
          </p>
          <p className="text-xs uppercase tracking-[0.25em] text-neutral-500">
            Portfolio simulation based on real-world retail planning workflows.
          </p>
          <div className="flex flex-wrap gap-3 text-xs">
            {[
              "Demand Forecasting",
              "Variant Level Decisioning",
              "Inventory Optimization",
              "Production-Minded Design",
            ].map((chip) => (
              <span
                key={chip}
                className="rounded-full border border-neutral-800/80 bg-neutral-950/70 px-3 py-1 text-neutral-300"
              >
                {chip}
              </span>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">The problem</h2>
          <p className="text-sm leading-relaxed text-neutral-300">
            Ensure the right products are available at the right place, time, and quantity, without overstocking or frequent stockouts.
          </p>
          <p className="text-sm leading-relaxed text-neutral-300">
            This requires not just predicting demand, but deciding what to replenish, when to do it, and how to distribute that quantity across product variants under real-world constraints.
          </p>
        </section>

        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold">How the system works</h2>
            <p className="mt-3 text-sm leading-relaxed text-neutral-300">
              The system converts raw sales and promo data into replenishment decisions through three steps: preparing reliable demand signals, forecasting short-term demand, and translating that forecast into variant level recommendations.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Analytics foundation",
                body:
                  "Prepared aligned sales and promo signals to ensure consistent inputs for forecasting and decision-making.",
                bullets: ["Clean aggregation", "Promo visibility", "Recent activity signals"],
              },
              {
                title: "Demand forecasting (product level)",
                body:
                  "Estimated short-term demand using recent sales trends, promo signals, and product activity.",
                bullets: ["Sales trends", "Promo signals", "Product activity"],
              },
              {
                title: "Allocation and recommendation (variant level)",
                body:
                  "Translated demand into replenishment decisions using variant mix, recent selling patterns, and stock constraints.",
                bullets: ["Variant mix", "Recent selling patterns", "Stock constraints"],
              },
            ].map((card) => (
              <div
                key={card.title}
                className="rounded-2xl border border-neutral-900/80 bg-neutral-950/60 p-6 space-y-4"
              >
                <h3 className="text-lg font-semibold">{card.title}</h3>
                <p className="text-sm leading-relaxed text-neutral-300">{card.body}</p>
                <ul className="space-y-1 text-sm text-neutral-400 list-disc list-inside">
                  {card.bullets.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">System overview</h2>
          <div className="rounded-[2rem] border border-neutral-900/80 bg-neutral-950/60 p-8">
            <div className="rounded-2xl border border-neutral-800/80 bg-neutral-900/40 p-6">
              <div className="mx-auto max-w-xl space-y-6">
                {[
                  {
                    title: "Sales & promo signals",
                    body: "Daily sales, promo calendars, and inventory snapshots aligned for product level context.",
                  },
                  {
                    title: "Product level forecasting",
                    body: "Short-range demand estimates per product level using recent trends and promo sensitivity.",
                  },
                  {
                    title: "Variant level allocation",
                    body: "Split forecast into variant level needs with variant mix, selling velocity, and stock limits.",
                  },
                  {
                    title: "Decision delivery",
                    body: "Surface replenishment guidance with timing, quantities, and rationale for planners.",
                  },
                ].map((step, index, arr) => (
                  <div key={step.title} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-700 bg-neutral-950 text-sm text-white">
                        {index + 1}
                      </span>
                      {index < arr.length - 1 && (
                        <span className="mt-1 h-full w-px bg-neutral-800" />
                      )}
                    </div>
                    <div className="space-y-1 text-sm">
                      <p className="font-semibold text-white">{step.title}</p>
                      <p className="text-neutral-300">{step.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <p className="mt-4 text-xs uppercase tracking-[0.25em] text-neutral-500">
              The workflow starts with sales and promo signals, generates product level demand forecasts, and translates them into variant level replenishment recommendations under stock constraints.
            </p>
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">What makes this production-minded</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {[
              "Designed for decision workflows, not just predictions",
              "Forecast aligned to replenishment windows",
              "Leakage-aware training and prediction setup",
              "Product-to-variant decision flow",
              "Stock-aware recommendations",
              "Modular pipeline structure",
            ].map((item) => (
              <div key={item} className="rounded-2xl border border-neutral-900/80 bg-neutral-950/60 p-4 text-sm text-neutral-300">
                {item}
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">What this enables</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                title: "Availability and inventory balance",
                body:
                  "Helps maintain product availability, reduce missed sales from stockouts, and avoid unnecessary overstock.",
              },
              {
                title: "Decision consistency",
                body:
                  "Provides a structured and repeatable way to decide what to replenish, when to replenish, and how much to send.",
              },
              {
                title: "Key takeaway",
                body:
                  "The value is not in predicting demand alone, but in improving how replenishment decisions are made.",
              },
            ].map((block) => (
              <div key={block.title} className="rounded-2xl border border-neutral-900/80 bg-neutral-950/60 p-4 space-y-2">
                <p className="text-sm font-semibold text-white">{block.title}</p>
                <p className="text-sm text-neutral-300">{block.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">What I focused on</h2>
          <div className="grid gap-3 md:grid-cols-3">
            {[
              "Translating models into decisions",
              "Keeping the system realistic and constraint-aware",
              "Designing for usability, not just accuracy",
            ].map((focus) => (
              <div key={focus} className="rounded-2xl border border-neutral-900/80 bg-neutral-950/60 p-4 text-sm text-neutral-300">
                {focus}
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Explore the implementation</h2>
          <div className="grid gap-4 text-sm text-neutral-300 sm:grid-cols-3">
            {[
              "Data preparation and feature engineering",
              "Demand forecasting pipeline",
              "Allocation and decision logic",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-neutral-900/80 bg-neutral-950/60 p-4"
              >
                {item}
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://github.com/zawlynnhtut/portfolio-site"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border border-neutral-700 px-4 py-2 text-sm text-neutral-200 hover:border-neutral-500 hover:text-white"
            >
              View code on GitHub
            </a>
            <a
              href="mailto:z.lynnhtut@gmail.com"
              className="rounded-md border border-white/30 px-4 py-2 text-sm text-white hover:border-white"
            >
              Request a walkthrough
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
