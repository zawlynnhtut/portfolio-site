export default function About() {
  return (
    <main className="min-h-screen bg-neutral-950 px-6 py-24 text-white sm:py-32">
      <div className="mx-auto max-w-5xl space-y-12">
        <header className="space-y-4">
          <p className="text-xs uppercase tracking-[0.35em] text-neutral-500">About</p>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">Product Data Scientist</h1>
          <p className="max-w-3xl text-base leading-relaxed text-neutral-300">
            I build forecasting and decision systems that help operators move faster with more signal and less noise.
          </p>
        </header>

        <section className="space-y-3 rounded-2xl border border-neutral-900/80 bg-neutral-950/60 p-6">
          <h2 className="text-2xl font-semibold">Experience summary</h2>
          <p className="text-sm leading-relaxed text-neutral-300">
            Led data products across merchandising, supply chain, and planning teams—pairing analytics with product habits.
          </p>
        </section>

        <section className="space-y-3 rounded-2xl border border-neutral-900/80 bg-neutral-950/60 p-6">
          <h2 className="text-2xl font-semibold">Skills</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              { label: "Data", items: ["SQL modeling", "dbt", "data contracts"] },
              { label: "ML", items: ["forecasting", "feature design", "model monitoring"] },
              { label: "Product", items: ["roadmapping", "ritual design", "stakeholder alignment"] },
            ].map((group) => (
              <div key={group.label} className="space-y-2 text-sm text-neutral-300">
                <p className="font-semibold text-white">{group.label}</p>
                <ul className="space-y-1 text-neutral-400">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
