export default function ProjectOne() {
  const whatItDoes = [
    {
      title: "Forecast demand",
      body: "Estimates near-term product demand using sales patterns and promo context.",
    },
    {
      title: "Apply decision rules",
      body: "Checks stock position, lead time, and priority rules before action is taken.",
    },
    {
      title: "Recommend replenishment",
      body: "Produces clear guidance on what to replenish, when, and in what quantity.",
    },
  ];

  const systemOverviewSteps = [
    {
      title: "Sales + Promo Data",
      body: "Sales history, promo plans, and stock signals brought into one view.",
    },
    {
      title: "Analytics Layer",
      body: "Raw inputs cleaned and structured for consistent downstream use.",
    },
    {
      title: "Feature Engineering",
      body: "Recent trends, promo effects, and product behavior turned into model inputs.",
    },
    {
      title: "Demand Forecast",
      body: "Future demand estimated at product level over the planning horizon.",
    },
    {
      title: "Decision Layer",
      body: "Business rules applied to convert demand into practical actions.",
    },
    {
      title: "Replenishment Recommendation",
      body: "Final guidance surfaced for review by planners and buyers.",
    },
  ];

  const keyComponents = [
    {
      title: "Analytics Foundation",
      body: "Prepares clean sales, product, and promo inputs so downstream modeling starts from a reliable base.",
    },
    {
      title: "Feature Engineering",
      body: "Transforms raw signals into inputs that improve forecast quality.",
    },
    {
      title: "Demand Forecasting",
      body: "Estimates product-level demand using recent performance and promo context.",
    },
    {
      title: "Decision Logic",
      body: "Applies stock position, lead time, and priority rules to determine practical replenishment actions.",
    },
    {
      title: "Replenishment Output",
      body: "Converts forecast results into recommended buy quantities teams can review and execute.",
    },
  ];

  const outputCards = [
    {
      title: "Forecast table",
      body: "Shows expected demand by product over the planning window.",
    },
    {
      title: "Replenishment recommendation",
      body: "Summarizes suggested quantities and timing for replenishment.",
    },
    {
      title: "Variant decision view",
      body: "Highlights which variants need action first based on business priority.",
    },
  ];

  const impactCards = [
    {
      title: "Lower overstock risk",
      body: "Helps avoid overbuying by aligning replenishment more closely to demand.",
    },
    {
      title: "Better availability",
      body: "Improves in-stock performance for products with stronger demand.",
    },
    {
      title: "Faster planning decisions",
      body: "Gives teams ready-to-review guidance instead of starting from manual spreadsheets.",
    },
  ];

  return (
    <main className="min-h-screen bg-neutral-950 px-6 py-24 text-white sm:py-32">
      <div className="mx-auto max-w-5xl space-y-20">
        <section className="space-y-6">
          <p className="text-xs uppercase tracking-[0.35em] text-neutral-500">Project 1</p>

          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Forecasting and Replenishment Decision System
          </h1>

          <p className="max-w-3xl text-base leading-relaxed text-neutral-300 sm:text-lg">
            A retail decision system designed to reduce overstock risk and prevent missed sales when demand visibility is weak.
          </p>

          <p className="max-w-3xl text-sm leading-relaxed text-neutral-400">
            It forecasts product-level demand and converts those signals into replenishment guidance that planners can act on.
          </p>

          <p className="text-xs uppercase tracking-[0.25em] text-neutral-500">
            Portfolio simulation designed to reflect real retail planning workflows
          </p>

          <div className="flex flex-wrap gap-3 text-xs">
            {[
              "Demand Forecasting",
              "Replenishment Logic",
              "Inventory Decisions",
              "Product Data Science",
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
          <h2 className="text-2xl font-semibold">Business problem</h2>
          <p className="max-w-3xl text-sm leading-relaxed text-neutral-300">
            Retail teams often face overstock and missed sales because demand signals are fragmented across spreadsheets and backward-looking reports.
          </p>
          <p className="max-w-3xl text-sm leading-relaxed text-neutral-300">
            The challenge is deciding what to replenish, when to move inventory, and how much to send with enough confidence to support weekly planning.
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">What this system does</h2>
          <div className="grid gap-4 sm:grid-cols-3">
            {whatItDoes.map((item) => (
              <div
                key={item.title}
                className="space-y-2 rounded-2xl border border-neutral-900/80 bg-neutral-950/60 p-5"
              >
                <p className="text-sm font-semibold text-white">{item.title}</p>
                <p className="text-sm text-neutral-300">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">System overview</h2>

          <div className="rounded-[28px] border border-white/10 bg-black/20 p-6 md:p-8">
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {systemOverviewSteps.map((step, index) => (
                <div
                  key={step.title}
                  className="rounded-2xl border border-neutral-800/80 bg-neutral-950/60 p-5"
                >
                  <p className="text-[0.7rem] uppercase tracking-[0.25em] text-neutral-500">
                    Step {index + 1}
                  </p>
                  <h3 className="mt-2 text-sm font-semibold text-white">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-400">{step.body}</p>
                </div>
              ))}
            </div>

            <p className="mt-8 max-w-3xl text-xs uppercase tracking-[0.22em] text-white/50">
              Sales and promo signals move through analytics and feature engineering, then into demand forecasting, decision logic, and replenishment guidance.
            </p>
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Key components</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {keyComponents.map((item) => (
              <div
                key={item.title}
                className="space-y-2 rounded-2xl border border-neutral-900/80 bg-neutral-950/60 p-5"
              >
                <p className="text-sm font-semibold text-white">{item.title}</p>
                <p className="text-sm text-neutral-300">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Outputs</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {outputCards.map((item) => (
              <div
                key={item.title}
                className="space-y-2 rounded-2xl border border-neutral-900/80 bg-neutral-950/60 p-5"
              >
                <p className="text-sm font-semibold text-white">{item.title}</p>
                <p className="text-sm text-neutral-300">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Business impact</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {impactCards.map((item) => (
              <div
                key={item.title}
                className="space-y-2 rounded-2xl border border-neutral-900/80 bg-neutral-950/60 p-5"
              >
                <p className="text-sm font-semibold text-white">{item.title}</p>
                <p className="text-sm text-neutral-300">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Public code version</h2>
          <p className="max-w-3xl text-sm leading-relaxed text-neutral-300">
            A simplified public-safe version of the forecasting workflow will be prepared for GitHub next.
          </p>
        </section>
      </div>
    </main>
  );
}