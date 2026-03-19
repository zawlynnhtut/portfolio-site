export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <section className="mx-auto flex min-h-screen max-w-5xl items-center px-6 py-24">
        <div>
          <p className="mb-4 text-sm uppercase tracking-[0.2em] text-neutral-400">
            Product Data Scientist
          </p>

          <h1 className="max-w-3xl text-4xl font-semibold leading-tight sm:text-5xl">
            I build data systems that turn messy business signals into
            forecasting and decision-ready outputs.
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-neutral-300">
            Portfolio site in progress.
          </p>
        </div>
      </section>
      <section className="mx-auto max-w-5xl px-6 py-24">
  <div className="mb-12">
    <h2 className="text-2xl font-semibold">
      From data to inventory decision
    </h2>
    <p className="mt-4 max-w-2xl text-neutral-400">
      Instead of stopping at reporting, this workflow turns sales, product, and promo signals into practical replenishment guidance.
    </p>
  </div>

<div className="grid gap-8 rounded-2xl border border-neutral-800 p-8 md:grid-cols-2">
  
  {/* Left: Diagram */}
  <div className="flex min-h-[360px] items-center justify-center rounded-xl bg-neutral-900 p-8 text-neutral-500">
    <div className="w-full max-w-md">
  <div className="grid gap-4">
    <div className="grid grid-cols-3 gap-2">
  <div className="rounded-md border border-neutral-700 bg-neutral-950 px-3 py-2 text-center text-xs text-neutral-300">
    Sales
  </div>
  <div className="rounded-md border border-neutral-700 bg-neutral-950 px-3 py-2 text-center text-xs text-neutral-300">
    Product
  </div>
  <div className="rounded-md border border-neutral-700 bg-neutral-950 px-3 py-2 text-center text-xs text-neutral-300">
    Promo
  </div>
</div>

    <div className="text-center text-neutral-600">↓</div>

    <div className="rounded-lg border border-neutral-700 bg-neutral-950 px-4 py-4 text-center text-sm font-medium text-white">
      Forecasting and decision workflow
    </div>

    <div className="text-center text-neutral-600">↓</div>

    <div className="rounded-lg border border-white/20 bg-white/5 px-4 py-4 text-center text-sm font-semibold text-white shadow-[0_0_20px_rgba(255,255,255,0.05)]">
  Replenishment guidance for the business
</div>
  </div>
</div>
  </div>

  {/* Right: Explanation (Option A) */}
  <div className="flex flex-col justify-center">
    <h3 className="text-lg font-semibold">
      What this system actually does
    </h3>

    <ul className="mt-4 space-y-3 text-neutral-400">
      <li>• Combines sales patterns, product context, and promo signals</li>
      <li>• Produces forward-looking demand signals, not just past reporting</li>
      <li>• Translates forecasts into decision-ready outputs for operations</li>
      <li>• Helps reduce overstock while protecting sales opportunities</li>
    </ul>
  </div>

</div>
</section>

{/* NEW SECTION STARTS HERE */}
<section className="mx-auto max-w-5xl px-6 py-24">
  <h2 className="text-2xl font-semibold">
    What’s inside this system
  </h2>
  <div className="mt-4 flex gap-4">
  <a
    href="#"
    className="rounded-md border border-neutral-700 px-4 py-2 text-sm text-neutral-300 hover:border-neutral-500 hover:text-white"
  >
    View code on GitHub
  </a>

  <a
    href="/project-1"
    className="rounded-md border border-neutral-700 px-4 py-2 text-sm text-neutral-300 hover:border-neutral-500 hover:text-white"
  >
    Deep dive
  </a>
</div>

  <div className="mt-8 grid gap-6 md:grid-cols-3">
    
    <div className="rounded-xl border border-neutral-800 p-6">
      <h3 className="font-medium">Data foundation</h3>
      <p className="mt-3 text-sm text-neutral-400">
        Clean and structured sales, product, and promo data prepared for modeling.
      </p>
    </div>

    <div className="rounded-xl border border-neutral-800 p-6">
      <h3 className="font-medium">Demand forecasting</h3>
      <p className="mt-3 text-sm text-neutral-400">
        Forward-looking signals that capture patterns, seasonality, and promotions.
      </p>
    </div>

    <div className="rounded-xl border border-neutral-800 p-6">
      <h3 className="font-medium">Decision outputs</h3>
      <p className="mt-3 text-sm text-neutral-400">
        Practical guidance to support replenishment and inventory decisions.
      </p>
    </div>

    

  </div>
  <div className="mt-10 grid gap-4 md:grid-cols-3">
  <div className="rounded-lg border border-neutral-800 p-4 text-center">
    <p className="text-2xl font-semibold">↓ Overstock</p>
    <p className="mt-2 text-sm text-neutral-400">
      More controlled inventory levels
    </p>
  </div>

  <div className="rounded-lg border border-neutral-800 p-4 text-center">
    <p className="text-2xl font-semibold">↑ Availability</p>
    <p className="mt-2 text-sm text-neutral-400">
      Better product availability at store level
    </p>
  </div>

  <div className="rounded-lg border border-neutral-800 p-4 text-center">
    <p className="text-2xl font-semibold">↑ Decision speed</p>
    <p className="mt-2 text-sm text-neutral-400">
      Faster, more consistent replenishment decisions
    </p>
  </div>
</div>
</section>
{/* NEW SECTION ENDS HERE */}

    </main>
  );
}
