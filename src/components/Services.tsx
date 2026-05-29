'use client'

import { useState } from 'react'
import ServiceModal, { type Service } from './ServiceModal'

const services: Service[] = [
  {
    number: "01",
    title: "Booking Platforms",
    description:
      "Custom booking systems with guide profiles, availability management, and payments — built from the ground up.",
    price: "€5,000+",
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
    price: "€2,000 – €4,000",
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
    price: "€1,000 – €2,500",
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

export default function Services() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section id="services" data-nav-theme="light" className="bg-white py-24 lg:py-32">
      <div className="px-12 lg:px-20">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 lg:mb-20">
          <div>
            <span className="inline-flex items-center gap-2 text-navy text-xs font-semibold tracking-[0.2em] uppercase mb-5">
              <span className="block w-5 h-px bg-navy" />
              What We Build
            </span>
            <h2 className="font-display text-charcoal text-4xl lg:text-5xl font-bold tracking-tight">
              Three things.
              <br />
              Done properly.
            </h2>
          </div>
          <p className="text-charcoal/50 text-justify max-w-sm leading-relaxed lg:text-right">
            We learn the brand, the audience, and the goals — then build a digital product that delivers on all three. No templates, no compromises. Let us build a website and spend your outdoor time where it belongs — outside.
          </p>
        </div>

        {/* Cards */}
        <div className="grid lg:grid-cols-3 gap-px bg-silver-light/50 rounded-2xl overflow-hidden">
          {services.map((service, i) => (
            <div
              key={service.number}
              className="bg-white p-8 lg:p-10 group hover:bg-offwhite transition-colors duration-200 flex flex-col"
            >
              <div className="flex items-start justify-between mb-7">
                <span className="text-silver text-xs font-mono tracking-widest">
                  {service.number}
                </span>
                <span className="text-xs text-navy/60 font-medium border border-navy/20 px-2.5 py-1 rounded-full">
                  {service.price}
                </span>
              </div>

              <h3 className="font-display text-charcoal text-2xl font-semibold mb-3 tracking-tight">
                {service.title}
              </h3>
              <p className="text-charcoal/55 text-sm leading-relaxed mb-7 flex-1">
                {service.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs text-charcoal/40 border border-silver-light px-3 py-1.5 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <button
                onClick={() => setOpen(i)}
                className="inline-flex items-center gap-2 text-sm font-medium text-navy/60 hover:text-navy transition-colors cursor-pointer self-start border-b border-navy/20 hover:border-navy pb-0.5"
              >
                View details →
              </button>
            </div>
          ))}
        </div>
      </div>

      {open !== null && (
        <ServiceModal service={services[open]} onClose={() => setOpen(null)} />
      )}
    </section>
  )
}
