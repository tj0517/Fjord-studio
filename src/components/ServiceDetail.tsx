'use client'

import { useState } from 'react'

const services = [
  {
    number: "01",
    title: "Booking Platforms",
    description:
      "Custom booking systems with guide profiles, availability management, and payments — built from the ground up.",
    price: "€8,000 – €20,000+",
    timeline: "10–16 weeks",
    idealFor:
      "Fishing lodges, guiding operations, and outfitters who need to take bookings and manage availability online.",
    deliverables: [
      "Custom booking flow & availability calendar",
      "Guide profile pages",
      "Secure payment processing",
      "Booking confirmation & notification system",
      "Admin dashboard",
      "Mobile-optimised design",
    ],
    process: [
      { phase: "Discovery", description: "We map your current booking process and define what needs to be built." },
      { phase: "Design", description: "Full UI/UX design — from booking flow to admin views." },
      { phase: "Build", description: "Custom development, payment integration, and testing." },
      { phase: "Launch", description: "Go-live support, handover docs, and first 30 days monitoring." },
    ],
    tags: ["Custom Build", "Payments", "Availability"],
  },
  {
    number: "02",
    title: "Online Stores",
    description:
      "Shopify and custom e-commerce for outdoor gear brands and equipment sellers.",
    price: "€3,000 – €6,000",
    timeline: "4–6 weeks",
    idealFor:
      "Outdoor gear brands, tackle shops, and equipment sellers who want to sell online without the complexity.",
    deliverables: [
      "Shopify store setup & custom theme",
      "Product catalogue & collections",
      "Payment gateway integration",
      "Inventory management",
      "Mobile-optimised storefront",
      "SEO foundation",
    ],
    process: [
      { phase: "Discovery", description: "Understand your product range, pricing, and customer journey." },
      { phase: "Design", description: "Brand-aligned store design and product page layouts." },
      { phase: "Build", description: "Shopify setup, product upload, and payment configuration." },
      { phase: "Launch", description: "QA, go-live, and post-launch support." },
    ],
    tags: ["Shopify", "E-Commerce", "Product Catalogue"],
  },
  {
    number: "03",
    title: "Presence Sites",
    description:
      "Clean, fast websites that make your lodge or operation look as professional as it is.",
    price: "€1,500 – €2,500",
    timeline: "2–4 weeks",
    idealFor:
      "Lodges, guides, and operators who need a professional web presence that communicates trust and gets enquiries.",
    deliverables: [
      "Custom design (up to 5 pages)",
      "CMS for easy content updates",
      "SEO optimisation",
      "Mobile-optimised",
      "Contact & enquiry forms",
      "Google Maps & social integration",
    ],
    process: [
      { phase: "Brief", description: "One focused session to understand your business and goals." },
      { phase: "Design", description: "Full page designs for your review and feedback." },
      { phase: "Build", description: "Development, CMS setup, and content population." },
      { phase: "Launch", description: "Final QA, domain setup, and go-live." },
    ],
    tags: ["CMS", "SEO", "Mobile-Optimised"],
  },
]

export default function ServiceDetail() {
  const [active, setActive] = useState(0)
  const s = services[active]

  return (
    <section id="service-detail" data-nav-theme="dark" className="bg-navy-dark py-24 lg:py-32">
      <div className="px-12 lg:px-20">

        {/* Label */}
        <span className="inline-flex items-center gap-2 text-white/30 text-xs font-semibold tracking-[0.2em] uppercase mb-10">
          <span className="block w-5 h-px bg-white/30" />
          What We Build
        </span>

        {/* Card */}
        <div className="bg-white rounded-2xl overflow-hidden">

          {/* Tab bar */}
          <div className="flex border-b border-silver-light/60">
            {services.map((svc, i) => (
              <button
                key={svc.number}
                onClick={() => setActive(i)}
                className={`flex items-center gap-3 px-8 py-5 text-sm font-medium transition-colors cursor-pointer ${
                  active === i
                    ? 'text-navy border-b-2 border-navy -mb-px'
                    : 'text-charcoal/40 hover:text-charcoal/70'
                }`}
              >
                <span className="text-xs font-mono opacity-50">{svc.number}</span>
                {svc.title}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="p-8 lg:p-12 grid lg:grid-cols-2 gap-12">

            {/* Left */}
            <div>
              <div className="flex items-start justify-between mb-5">
                <h3 className="font-display text-charcoal text-3xl lg:text-4xl font-bold tracking-tight">
                  {s.title}
                </h3>
                <span className="text-xs text-navy/60 font-medium border border-navy/20 px-3 py-1.5 rounded-full whitespace-nowrap ml-4">
                  {s.price}
                </span>
              </div>
              <p className="text-charcoal/55 text-sm leading-relaxed mb-8">{s.description}</p>

              <div>
                <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-charcoal/30 block mb-4">
                  What&apos;s included
                </span>
                <ul className="space-y-2.5">
                  {s.deliverables.map((d) => (
                    <li key={d} className="flex items-start gap-3">
                      <span className="w-1 h-1 rounded-full bg-navy mt-2 shrink-0" />
                      <span className="text-sm text-charcoal/70">{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right */}
            <div className="flex flex-col gap-8">

              {/* Who it's for */}
              <div>
                <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-charcoal/30 block mb-3">
                  Who it&apos;s for
                </span>
                <p className="text-sm text-charcoal/70 leading-relaxed mb-4">{s.idealFor}</p>
                <div className="flex flex-wrap gap-2">
                  {s.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs text-charcoal/40 border border-silver-light px-3 py-1.5 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Timeline */}
              <div>
                <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-charcoal/30 block mb-2">
                  Timeline
                </span>
                <span className="font-display text-charcoal text-2xl font-bold">{s.timeline}</span>
              </div>

              {/* Process */}
              <div>
                <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-charcoal/30 block mb-4">
                  Process
                </span>
                <div className="space-y-4">
                  {s.process.map((step, i) => (
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
    </section>
  )
}
