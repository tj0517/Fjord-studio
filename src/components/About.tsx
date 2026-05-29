export default function About() {
  return (
    <section id="about" data-nav-theme="dark" className="bg-navy-dark py-24 lg:py-32">
      <div className="px-12 lg:px-20">

        <div
          className="grid grid-cols-3 gap-3"
          style={{ gridAutoRows: "240px" }}
        >

          {/* ── 1: Tall hero card — left col, spans 2 rows ── */}
          <div className="col-span-1 row-span-2 bg-navy rounded-2xl p-8 lg:p-10 flex flex-col justify-between overflow-hidden relative">
            {/* subtle dot bg */}
            <div
              className="absolute inset-0 opacity-[0.04]"
              style={{ backgroundImage: "radial-gradient(circle, white 1.5px, transparent 1.5px)", backgroundSize: "22px 22px" }}
              aria-hidden="true"
            />
            <span className="relative text-white/30 text-[10px] font-semibold tracking-[0.22em] uppercase">
              Who We Work With
            </span>
            <div className="relative">
              <h2 className="font-display text-white text-4xl lg:text-5xl font-bold leading-[1.05] tracking-tight mb-5">
                We speak
                <br />
                <span className="text-white/35">your language.</span>
              </h2>
              <p className="text-silver/45 text-sm leading-relaxed mb-7">
                We work with people who take the outdoors seriously — rivers,
                fjords, mountains, open water. We understand what you need and
                we know how to build it.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-white text-sm font-medium border-b border-white/25 pb-1 hover:border-white/50 transition-colors"
              >
                Start a Conversation →
              </a>
            </div>
          </div>

          {/* ── 2: Wide card — cols 2–3, row 1 ── */}
          <div className="col-span-2 bg-offwhite rounded-2xl p-8 lg:p-10 flex flex-col justify-between overflow-hidden relative">
            <span className="text-navy/35 text-[10px] font-semibold tracking-[0.22em] uppercase">
              The Outdoors
            </span>
            {/* floating niche pills */}
            <div className="flex flex-wrap gap-2">
              {[
                "Fishing lodges",
                "Guiding operations",
                "Outfitters",
                "Adventure operators",
                "Outdoor gear brands",
                "Charter & boat operators",
              ].map((tag) => (
                <span
                  key={tag}
                  className="text-xs text-navy font-medium bg-white border border-navy/12 px-3.5 py-1.5 rounded-full shadow-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* ── 3: Stat card — col 2, row 2 ── */}
          <div className="bg-charcoal rounded-2xl p-8 flex flex-col justify-between">
            <span className="text-white/25 text-[10px] font-semibold tracking-[0.22em] uppercase">
              Niches served
            </span>
            <div>
              <span className="font-display text-white text-7xl font-bold leading-none block">4</span>
              <span className="text-white/30 text-xs mt-1 block">exclusively outdoor</span>
            </div>
          </div>

          {/* ── 4: Visual accent card — col 3, row 2 (olive) ── */}
          <div className="bg-olive rounded-2xl p-8 flex flex-col justify-between overflow-hidden relative">
            {/* decorative horizontal lines */}
            <div className="absolute inset-0 flex flex-col justify-center gap-3 px-8 opacity-10">
              {[90, 70, 85, 60, 75, 50].map((w, i) => (
                <div key={i} className="h-px bg-white" style={{ width: `${w}%` }} />
              ))}
            </div>
            <span className="relative text-white/30 text-[10px] font-semibold tracking-[0.22em] uppercase">
              Based in
            </span>
            <span className="relative font-display text-white text-xl font-semibold leading-tight">
              Poland —<br />
              <span className="text-white/50">Working globally.</span>
            </span>
          </div>

          {/* ── 5: Wide bottom-left — cols 1–2, row 3 ── */}
          <div className="col-span-2 bg-charcoal rounded-2xl px-8 lg:px-10 py-8 flex items-center gap-10 overflow-hidden relative">
            <div
              className="absolute right-0 top-0 w-64 h-full opacity-[0.03]"
              style={{ backgroundImage: "radial-gradient(circle, white 1.5px, transparent 1.5px)", backgroundSize: "20px 20px" }}
              aria-hidden="true"
            />
            <div className="flex-1 grid grid-cols-2 gap-x-8 gap-y-4">
              {[
                "Fishing lodges & guiding operations",
                "Outfitters & adventure operators",
                "Outdoor gear & tackle brands",
                "Charter & boat operators",
              ].map((client, i) => (
                <div key={client} className="flex items-center gap-3">
                  <span className="text-white/20 text-xs font-mono shrink-0">0{i + 1}</span>
                  <span className="text-white/70 text-sm font-medium">{client}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── 6: CTA card — col 3, row 3 ── */}
          <div className="bg-navy rounded-2xl p-8 flex flex-col justify-between relative overflow-hidden group cursor-pointer">
            <div
              className="absolute inset-0 bg-olive opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              aria-hidden="true"
            />
            <span className="relative text-white/30 text-[10px] font-semibold tracking-[0.22em] uppercase">
              Get started
            </span>
            <div className="relative">
              <p className="font-display text-white text-lg font-semibold mb-4 leading-snug">
                Ready to build<br />something serious?
              </p>
              <a
                href="#contact"
                className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-white/25 text-white text-sm hover:bg-white hover:text-navy transition-colors"
              >
                →
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
