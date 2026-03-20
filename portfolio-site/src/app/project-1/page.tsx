export default function ProjectOne() {
  const workflowCards = [
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
      title: "Replenishment logic (variant level)",
      body:
        "Translated demand into replenishment decisions using variant mix, recent selling patterns, and stock constraints.",
      bullets: ["Variant mix", "Recent selling patterns", "Stock constraints"],
    },
  ];

  const systemOverviewSteps = [
    {
      number: "1",
      title: "Sales + Promo Data",
      description:
        "Daily sales, promo calendars, and inventory snapshots aligned for product-level context.",
    },
    {
      number: "2",
      title: "Analytics Layer",
      description:
        "Clean and aggregate raw inputs into consistent, usable signals for downstream decisions.",
    },
    {
      number: "3",
      title: "Feature Engineering",
      description:
        "Create aligned features that capture demand patterns, promo effects, and recent product behavior.",
    },
    {
      number: "4",
      title: "Demand Forecast",
      description:
        "Estimate short-range demand at product level using recent trends and commercial signals.",
    },
    {
      number: "5",
      title: "Decision Layer",
      description:
        "Apply business constraints and replenishment logic to turn forecasts into practical actions.",
    },
    {
      number: "6",
      title: "Replenishment Recommendation",
      description:
        "Surface clear product-level guidance on what to replenish and in what quantity.",
    },
  ];

  return (
    <main className="min-h-screen bg-neutral-950 px-6 py-24 text-white sm:py-32">
      <div className="mx-auto max-w-5xl space-y-20">
        <section className="space-y-6">
          <p className="text-xs uppercase tracking-[0.35em] text-neutral-500">Project 1</p>

          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Retail Replenishment Decision Engine
          </h1>

          <p className="max-w-3xl text-base leading-relaxed text-neutral-300 sm:text-lg">
            Transforms sales, promo, and inventory signals into product-level demand forecasts and variant-level replenishment recommendations.
          </p>

          <p className="max-w-3xl text-sm leading-relaxed text-neutral-400">
            Built to help merchandising teams decide what to replenish, when to replenish, and how much to replenish.
          </p>

          <p className="text-xs uppercase tracking-[0.25em] text-neutral-500">
            Portfolio simulation based on real-world retail planning workflows.
          </p>

          <div className="flex flex-wrap gap-3 text-xs">
            {[
              "Demand Forecasting",
              "Variant-Level Decisioning",
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

          <p className="max-w-3xl text-sm leading-relaxed text-neutral-300">
            Ensure the right products are available at the right time and quantity,
            without overstocking or frequent stockouts.
          </p>

          <p className="max-w-3xl text-sm leading-relaxed text-neutral-300">
            This requires not just predicting demand, but deciding what to replenish,
            when to do it, and how to distribute that quantity across product variants
            under real-world constraints.
          </p>
        </section>

        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold">How the system works</h2>

            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-neutral-300">
              The system converts raw sales and promo data into replenishment decisions
              through three steps: preparing reliable demand signals, forecasting short-term
              demand, and translating that forecast into variant-level recommendations.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {workflowCards.map((card) => (
              <div
                key={card.title}
                className="space-y-4 rounded-2xl border border-neutral-900/80 bg-neutral-950/60 p-6"
              >
                <h3 className="text-lg font-semibold">{card.title}</h3>
                <p className="text-sm leading-relaxed text-neutral-300">{card.body}</p>
                <ul className="list-inside list-disc space-y-1 text-sm text-neutral-400">
                  {card.bullets.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">System overview</h2>
          <div className="rounded-[28px] border border-white/10 bg-black/20 p-6 md:p-8">
            <div className="mx-auto max-w-3xl">
              <div className="space-y-5">
                {systemOverviewSteps.map((step, index) => (
                  <div key={step.number} className="grid grid-cols-[44px_1fr] gap-4 md:gap-5">
                    <div className="flex flex-col items-center">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 text-sm font-semibold text-white">
                        {step.number}
                      </div>
                      {index < systemOverviewSteps.length - 1 && (
                        <div className="mt-1.5 h-10 w-px bg-white/15" />
                      )}
                    </div>
                    <div className="pt-0.5 text-left">
                      <h3 className="text-base font-semibold text-white md:text-lg">{step.title}</h3>
                      <p className="mt-1.5 max-w-2xl text-sm leading-relaxed text-neutral-400">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <p className="mt-8 max-w-3xl text-xs uppercase tracking-[0.25em] text-white/50">
                The workflow starts with sales and promo signals, moves through analytics and feature engineering, generates product-level demand forecasts, and turns them into replenishment recommendations through business rules.
              </p>
            </div>
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
              <div
                key={item}
                className="rounded-2xl border border-neutral-900/80 bg-neutral-950/60 p-4 text-sm text-neutral-300"
              >
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
              <div
                key={block.title}
                className="space-y-2 rounded-2xl border border-neutral-900/80 bg-neutral-950/60 p-4"
              >
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
              <div
                key={focus}
                className="rounded-2xl border border-neutral-900/80 bg-neutral-950/60 p-4 text-sm text-neutral-300"
              >
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

          </div>
        </section>
      </div>
    </main>
  );
}
