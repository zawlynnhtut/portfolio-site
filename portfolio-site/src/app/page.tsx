export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <section className="mx-auto flex min-h-[80vh] max-w-4xl flex-col items-center justify-center px-6 py-16 text-center sm:py-24">
        <div className="space-y-4">
          <h1 className="text-[1.9rem] font-semibold leading-tight tracking-tight text-white sm:text-[2.4rem]">
            I turn messy data into decisions that move the business
          </h1>
          <p className="text-base leading-relaxed text-neutral-300 sm:text-lg">
            Product Data Scientist with 6+ years in ML and 9+ years in analytics across telecom, retail and fintech
          </p>
          <p className="text-sm text-neutral-400">
            I build systems that help businesses decide what to sell, who to target, and when to act.
          </p>
          <p className="mx-auto max-w-2xl text-xs tracking-[0.08em] text-neutral-400 sm:text-sm">
            Built systems that improve retention, optimize inventory, and drive revenue.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="/project-1"
            className="rounded-md bg-white px-5 py-2 text-sm font-semibold text-neutral-900 transition hover:bg-neutral-200"
          >
            View case study
          </a>
          <a
            href="https://github.com/zawlynnhtut/portfolio-site"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border border-neutral-700 px-4 py-2 text-sm text-neutral-300 transition hover:border-neutral-500 hover:text-white"
            >
              View code on GitHub
            </a>
          </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-24">
        <div className="space-y-3 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">What I do</p>
          <h2 className="text-3xl font-semibold">Focus areas</h2>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {[
            { title: "Forecasting", body: "Predict demand and customer behavior" },
            { title: "Decision Systems", body: "Translate predictions into business actions" },
            { title: "Analytics", body: "Turn raw data into clear insights" },
          ].map((item) => (
            <div key={item.title} className="rounded-2xl border border-neutral-900 bg-neutral-950/70 p-6 text-center">
              <p className="text-lg font-semibold text-white">{item.title}</p>
              <p className="mt-2 text-sm text-neutral-400">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-24">
        <div className="space-y-3">
          <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">Experience</p>
          <h2 className="text-3xl font-semibold">Recent roles</h2>
        </div>
        <div className="mt-8 space-y-6">
          {[
            {
              title: "Nul Global — Senior Data Scientist",
              body: "Built end-to-end demand forecasting systems, reducing retail overstock by up to 80%.",
            },
            {
              title: "ATOM Telecom — Senior Manager (Advanced Analytics)",
              body: "Built churn prediction and recommendation systems, generating $0.2M revenue and saving $0.4M through retention optimization.",
            },
            {
              title: "Ghostcap — Analytics Manager",
              body: "Improved onboarding funnel (+20%) and automated BI reporting, reducing manual work by 65%.",
            },
          ].map((item) => (
            <div key={item.title} className="space-y-2 border-b border-neutral-900 pb-6 last:border-b-0 last:pb-0">
              <p className="text-lg font-semibold text-white">{item.title}</p>
              <p className="text-sm text-neutral-400">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-28 sm:py-32">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-3xl space-y-3">
            <p className="text-[0.8rem] uppercase tracking-[0.3em] text-neutral-500">
              Workflow
            </p>
            <h2 className="text-3xl font-semibold leading-tight sm:text-[2.1rem]">From messy signals to confident inventory calls</h2>
            <p className="text-base leading-relaxed text-neutral-400">
              The system ties together sales telemetry, promo plans, and supply constraints into an always-on workflow that feels like a product, not a reporting deck.
            </p>
          </div>
        </div>

        <div className="mt-14 grid gap-12 rounded-[2.25rem] border border-neutral-900/80 bg-neutral-950/70 p-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.35em] text-neutral-500">System diagram</p>
            <div className="rounded-2xl border border-neutral-800/80 bg-neutral-900/60 p-7">
              <div className="grid gap-5">
                <div className="grid grid-cols-3 gap-3 text-center text-xs font-semibold tracking-wider text-neutral-300">
                  <div className="rounded-lg border border-neutral-700 bg-neutral-950 px-3 py-2">
                    Sales
                  </div>
                  <div className="rounded-lg border border-neutral-700 bg-neutral-950 px-3 py-2">
                    Product
                  </div>
                  <div className="rounded-lg border border-neutral-700 bg-neutral-950 px-3 py-2">
                    Promo
                  </div>
                </div>

                <div className="text-center text-sm text-neutral-600">&darr;</div>

                <div className="rounded-xl border border-neutral-700 bg-neutral-950 px-4 py-4 text-center text-sm font-medium text-white">
                  Forecasting + decision workflow
                </div>

                <div className="text-center text-sm text-neutral-600">&darr;</div>

                <div className="rounded-xl border border-white/15 bg-white/5 px-4 py-4 text-center text-sm font-semibold text-white shadow-[0_0_30px_rgba(255,255,255,0.08)]">
                  Replenishment guidance for the business
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center gap-8">
            <div>
              <h3 className="text-lg font-semibold tracking-tight">Productized capabilities</h3>
              <p className="mt-3 text-sm leading-relaxed text-neutral-400">
                Opinionated modules expose the system like a product surface so teams can plug it into real planning cadences.
              </p>
            </div>

            <ul className="space-y-4 text-sm text-neutral-300">
              <li className="rounded-2xl border border-neutral-800/80 bg-neutral-900/40 p-5">
                <p className="font-medium text-white">Signal ingestion</p>
                <p className="mt-1 text-neutral-400">Sales, product, and promo feeds normalized with governance baked in.</p>
              </li>
              <li className="rounded-2xl border border-neutral-800/80 bg-neutral-900/40 p-5">
                <p className="font-medium text-white">Scenario forecasting</p>
                <p className="mt-1 text-neutral-400">Forward-looking demand simulation with knobs for promos or supply shifts.</p>
              </li>
              <li className="rounded-2xl border border-neutral-800/80 bg-neutral-900/40 p-5">
                <p className="font-medium text-white">Decision delivery</p>
                <p className="mt-1 text-neutral-400">APIs and playbooks that push guidance into inventory + replenishment tooling.</p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-28 sm:py-32">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="space-y-3">
            <p className="text-[0.8rem] uppercase tracking-[0.3em] text-neutral-500">System Detail</p>
            <h2 className="text-3xl font-semibold leading-tight">Inside the build</h2>
            <p className="max-w-2xl text-base leading-relaxed text-neutral-400">
              A compact stack that moves clean inputs through modeling to decision outputs.
            </p>
          </div>

          <div className="flex gap-4">
            <a
              href="https://github.com/zawlynnhtut/portfolio-site"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border border-neutral-700 px-4 py-2 text-sm text-neutral-300 hover:border-neutral-500 hover:text-white"
            >
              View code on GitHub
            </a>

            <a
              href="/project-1"
              className="rounded-md border border-neutral-700 px-4 py-2 text-sm text-neutral-300 hover:border-neutral-500 hover:text-white"
            >
              View case study
            </a>
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-neutral-900 bg-neutral-950/60 p-6">
            <h3 className="font-medium">Data foundation</h3>
            <p className="mt-3 text-sm leading-relaxed text-neutral-400">
              Clean sales, product, and promo layers modeled for downstream demand work.
            </p>
          </div>

          <div className="rounded-2xl border border-neutral-900 bg-neutral-950/60 p-6">
            <h3 className="font-medium">Demand forecasting</h3>
            <p className="mt-3 text-sm leading-relaxed text-neutral-400">
              Temporal models plus scenario logic that stay aligned with business cadence.
            </p>
          </div>

          <div className="rounded-2xl border border-neutral-900 bg-neutral-950/60 p-6">
            <h3 className="font-medium">Decision outputs</h3>
            <p className="mt-3 text-sm leading-relaxed text-neutral-400">
              Structured guidance, alerts, and playbooks that plug into planning tools.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-28 sm:py-32">
        <div className="mb-12 space-y-3">
          <p className="text-[0.8rem] uppercase tracking-[0.3em] text-neutral-500">Business Impact</p>
          <h2 className="text-3xl font-semibold leading-tight">Why this system matters</h2>
          <p className="max-w-2xl text-base leading-relaxed text-neutral-400">
            Every release is measured against inventory efficiency, service levels, and the speed of operator decisions.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl bg-neutral-950/80 p-8 ring-1 ring-neutral-900/80">
            <p className="text-[0.7rem] uppercase tracking-[0.35em] text-neutral-500">Impact</p>
            <p className="mt-4 text-2xl font-semibold tracking-tight">&darr; Overstock</p>
            <p className="mt-3 text-sm leading-relaxed text-neutral-400">Less capital trapped in slow movers.</p>
          </div>

          <div className="rounded-2xl bg-neutral-950/80 p-8 ring-1 ring-neutral-900/80">
            <p className="text-[0.7rem] uppercase tracking-[0.35em] text-neutral-500">Impact</p>
            <p className="mt-4 text-2xl font-semibold tracking-tight">&uarr; Availability</p>
            <p className="mt-3 text-sm leading-relaxed text-neutral-400">Shelves stay ready for demand spikes.</p>
          </div>

          <div className="rounded-2xl bg-neutral-950/80 p-8 ring-1 ring-neutral-900/80">
            <p className="text-[0.7rem] uppercase tracking-[0.35em] text-neutral-500">Impact</p>
            <p className="mt-4 text-2xl font-semibold tracking-tight">&uarr; Decision speed</p>
            <p className="mt-3 text-sm leading-relaxed text-neutral-400">Operators act faster with pre-built guidance.</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-24">
        <div className="mb-10 space-y-3">
          <p className="text-[0.8rem] uppercase tracking-[0.3em] text-neutral-500">Case Study Preview</p>
          <h2 className="text-3xl font-semibold leading-tight">Demand Forecasting System</h2>
          <p className="max-w-3xl text-base leading-relaxed text-neutral-400">
            A condensed look at how the workflow is applied end-to-end for a merchandising org.
          </p>
        </div>

        <div className="rounded-3xl border border-neutral-900 bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 p-10 shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
          <div className="space-y-8">
            <div className="space-y-2">
              <p className="text-[0.7rem] uppercase tracking-[0.35em] text-neutral-500">Problem</p>
              <p className="text-lg leading-relaxed text-neutral-200">
                Promo-heavy categories were oscillating between excess stock and missed sales because planning relied on backward looking spreadsheets.
              </p>
            </div>
            <div className="space-y-2">
              <p className="text-[0.7rem] uppercase tracking-[0.35em] text-neutral-500">Approach</p>
              <p className="text-lg leading-relaxed text-neutral-200">
                Built a signal ingestion layer, scenario-aware forecasts, and a decision surface that routes replenishment guidance into weekly buyer rituals.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <a
                href="/project-1"
                className="rounded-md border border-white/30 px-5 py-2 text-sm font-medium text-white hover:border-white"
              >
                View case study
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-32">
        <div className="space-y-4">
          <p className="text-[0.8rem] uppercase tracking-[0.3em] text-neutral-500">Contact</p>
          <h2 className="text-3xl font-semibold leading-tight">Let’s connect</h2>
          <p className="text-base leading-relaxed text-neutral-400">
            Quick ways to reach me about product data science work.
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <a
            href="mailto:z.lynnhtut@gmail.com"
            className="rounded-2xl border border-neutral-900 bg-neutral-950/60 px-5 py-4 text-sm text-neutral-200 hover:border-neutral-700"
          >
            Email<br />
            <span className="text-neutral-400">z.lynnhtut@gmail.com</span>
          </a>
          <a
            href="https://www.linkedin.com/in/zaw-lynn-htut-dss/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl border border-neutral-900 bg-neutral-950/60 px-5 py-4 text-sm text-neutral-200 hover:border-neutral-700"
          >
            LinkedIn<br />
            <span className="text-neutral-400">LinkedIn</span>
          </a>
          <a
            href="https://github.com/zawlynnhtut/portfolio-site"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl border border-neutral-900 bg-neutral-950/60 px-5 py-4 text-sm text-neutral-200 hover:border-neutral-700"
          >
            GitHub<br />
            <span className="text-neutral-400">View the repo</span>
          </a>
        </div>
      </section>
    </main>
  );
}
