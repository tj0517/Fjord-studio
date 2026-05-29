'use client'

import { useEffect } from 'react'

export type Service = {
  number: string
  title: string
  description: string
  price: string
  timeline: string
  idealFor: string
  deliverables: string[]
  process: { phase: string; description: string }[]
  tags: string[]
}

export default function ServiceModal({ service, onClose }: { service: Service; onClose: () => void }) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handler)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handler)
    }
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-6 lg:p-12"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-charcoal/80 backdrop-blur-sm" aria-hidden="true" />

      {/* Card */}
      <div
        className="relative bg-white rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between px-8 lg:px-12 pt-8 lg:pt-12 pb-6">
          <div>
            <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-charcoal/30 block mb-2">
              {service.number}
            </span>
            <h3 className="font-display text-charcoal text-3xl lg:text-4xl font-bold tracking-tight">
              {service.title}
            </h3>
          </div>
          <div className="flex items-center gap-3 ml-4 shrink-0">
            <span className="text-xs text-navy/60 font-medium border border-navy/20 px-3 py-1.5 rounded-full whitespace-nowrap">
              {service.price}
            </span>
            <button
              onClick={onClose}
              aria-label="Close"
              className="w-8 h-8 rounded-full border border-silver-light flex items-center justify-center text-charcoal/40 hover:text-charcoal hover:border-charcoal/30 transition-colors text-lg leading-none"
            >
              ×
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-silver-light/60 mx-8 lg:mx-12" />

        {/* Content */}
        <div className="px-8 lg:px-12 py-8 lg:py-10 grid lg:grid-cols-2 gap-10 lg:gap-12">

          {/* Left */}
          <div>
            <p className="text-charcoal/55 text-sm leading-relaxed mb-8">{service.description}</p>
            <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-charcoal/30 block mb-4">
              What&apos;s included
            </span>
            <ul className="space-y-2.5">
              {service.deliverables.map((d) => (
                <li key={d} className="flex items-start gap-3">
                  <span className="w-1 h-1 rounded-full bg-navy mt-[7px] shrink-0" />
                  <span className="text-sm text-charcoal/70">{d}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right */}
          <div className="flex flex-col gap-8">

            <div>
              <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-charcoal/30 block mb-3">
                Who it&apos;s for
              </span>
              <p className="text-sm text-charcoal/70 leading-relaxed mb-4">{service.idealFor}</p>
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs text-charcoal/40 border border-silver-light px-3 py-1.5 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-charcoal/30 block mb-2">
                Timeline
              </span>
              <span className="font-display text-charcoal text-2xl font-bold">{service.timeline}</span>
            </div>

            <div>
              <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-charcoal/30 block mb-4">
                Process
              </span>
              <div className="space-y-4">
                {service.process.map((step, i) => (
                  <div key={step.phase} className="flex gap-4">
                    <span className="text-xs font-mono text-charcoal/25 mt-0.5 shrink-0">0{i + 1}</span>
                    <div>
                      <span className="text-sm font-semibold text-charcoal block">{step.phase}</span>
                      <span className="text-xs text-charcoal/50 leading-relaxed">{step.description}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
