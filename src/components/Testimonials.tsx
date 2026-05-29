'use client'

import { useState } from 'react'

const testimonials = [
  {
    quote: "We had the guides, the routes, and the expertise — but no way to reach international clients. Fjord Studio built the platform from scratch and had us live with 20 guides across four countries. The booking flow just works.",
    author: "Tymon J.",
    company: "Fjord Anglers",
    initials: "TJ",
    rating: 5.0,
    scores: [
    ],
  },
  {
    quote: "25 years of offshore work and we had nothing online to show for it. Now procurement teams can see exactly what we do and who we are. The site does the selling before we even get on a call.",
    author: "Ernest J.",
    company: "Sea Clouds",
    initials: "EJ",
    rating: 5.0,
    scores: [
    ],
  },
]

export default function Testimonials() {
  const [index, setIndex] = useState(0)
  const t = testimonials[index]

  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length)
  const next = () => setIndex((i) => (i + 1) % testimonials.length)

  return (
    <section data-nav-theme="light" className="bg-white py-24 lg:py-32 overflow-hidden">
      <div className="px-12 lg:px-20">
        <div className="grid lg:grid-cols-[2fr_3fr] gap-12 lg:gap-20 items-center">

          {/* Left */}
          <div>
            <span className="inline-flex items-center gap-2 text-navy text-xs font-semibold tracking-[0.2em] uppercase mb-8">
              <span className="block w-5 h-px bg-navy" />
              What Clients Say
            </span>

            <h2 className="font-display text-charcoal font-black uppercase leading-[0.9] tracking-tight text-6xl lg:text-8xl mb-10">
              Clients
              <br />About
              <br />Us
            </h2>

            {/* Arrows */}
            <div className="flex items-center gap-5 mb-10">
              <button
                onClick={prev}
                aria-label="Previous"
                className="w-10 h-10 rounded-full border border-silver-light flex items-center justify-center text-charcoal/40 hover:text-charcoal hover:border-charcoal/30 transition-colors cursor-pointer"
              >
                ←
              </button>
              <button
                onClick={next}
                aria-label="Next"
                className="w-10 h-10 rounded-full border border-silver-light flex items-center justify-center text-charcoal/40 hover:text-charcoal hover:border-charcoal/30 transition-colors cursor-pointer"
              >
                →
              </button>
              <span className="text-xs font-mono text-charcoal/25 ml-1">
                {String(index + 1).padStart(2, '0')} / {String(testimonials.length).padStart(2, '0')}
              </span>
            </div>

            {/* Author */}
            <div key={index} className="animate-[fadeUp_0.35s_ease]">
              <p className="font-display text-charcoal text-2xl font-bold">{t.author}</p>
              <p className="text-xs font-semibold tracking-[0.18em] uppercase text-charcoal/40 mt-1">{t.company}</p>
            </div>
          </div>

          {/* Right — stacked card */}
          <div className="relative">
            {/* Stack layers */}
            <div className="absolute inset-0 translate-x-4 translate-y-4 bg-navy/[0.04] rounded-2xl border border-navy/[0.06]" aria-hidden="true" />
            <div className="absolute inset-0 translate-x-2 translate-y-2 bg-navy/[0.06] rounded-2xl border border-navy/[0.08]" aria-hidden="true" />

            {/* Main card */}
            <div key={index} className="relative bg-white rounded-2xl border border-silver-light p-8 lg:p-12 shadow-sm animate-[fadeUp_0.4s_ease]">

              <p className="font-display text-charcoal text-xl lg:text-2xl font-bold leading-snug mb-12">
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="h-px bg-silver-light/60 mb-8" />

              <div className="flex flex-wrap items-end justify-between gap-6">

                {/* Company badge */}
                <div className="w-14 h-14 rounded-xl bg-offwhite border border-silver-light flex items-center justify-center shrink-0">
                  <span className="font-display text-charcoal/40 font-bold text-sm tracking-wider">{t.initials}</span>
                </div>

                {/* Scores */}
                <div className="text-right">
                  <div className="flex items-center justify-end gap-2 mb-3">
                    <span className="font-display text-charcoal text-2xl font-bold">{t.rating.toFixed(1)}</span>
                    <span className="text-amber-400 text-base tracking-tight">★★★★★</span>
                  </div>
                  <div className="space-y-1">
                    {t.scores.map((s) => (
                      <div key={s.label} className="flex items-center justify-between gap-8">
                        <span className="text-[11px] text-charcoal/40">{s.label}:</span>
                        <span className="text-[11px] font-semibold text-charcoal/70">{s.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
