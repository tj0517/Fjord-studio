"use client";

import { useState } from "react";

export default function CtaBanner() {
  const [form, setForm] = useState({ name: "", title: "", email: "" });
  const [sent, setSent] = useState(false);

  function handleSend() {
    if (form.name && form.email) setSent(true);
  }

  function set(field: keyof typeof form) {
    return (e: React.ChangeEvent<HTMLInputElement>) =>
      setForm((prev) => ({ ...prev, [field]: e.target.value }));
  }

  return (
    <section id="contact" data-nav-theme="dark" className="bg-olive py-14 lg:py-20">
      <div className="px-12 lg:px-20">
        <div className="bg-charcoal rounded-3xl px-8 sm:px-12 lg:px-16 py-12 lg:py-16">

          {/* Label row */}
          <div className="flex flex-wrap items-center gap-3 mb-10 lg:mb-14">
            <span className="font-display text-white text-base font-medium">
              Ready to build something serious?
            </span>
            <span className="text-charcoal bg-white/90 text-xs font-semibold px-3.5 py-1.5 rounded-full">
              Select clients only
            </span>
          </div>

          {/* Large body text */}
          <p className="font-display text-white text-2xl sm:text-3xl lg:text-4xl xl:text-[42px] font-semibold leading-[1.2] max-w-3xl mb-10 lg:mb-14">
            Tell us about your project. We&apos;ll tell you if we&apos;re the right fit.
          </p>

          {/* Form */}
          {sent ? (
            <p className="text-white/60 text-base">✓ We&apos;ll be in touch soon.</p>
          ) : (
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 max-w-3xl">
              <input
                type="text"
                placeholder="name"
                value={form.name}
                onChange={set("name")}
                className="flex-1 min-w-0 bg-transparent border border-white/20 text-white placeholder-white/30 text-base px-6 py-4 rounded-2xl focus:outline-none focus:border-white/50 transition-colors"
              />
              <input
                type="text"
                placeholder="business / brand"
                value={form.title}
                onChange={set("title")}
                className="flex-1 min-w-0 bg-transparent border border-white/20 text-white placeholder-white/30 text-base px-6 py-4 rounded-2xl focus:outline-none focus:border-white/50 transition-colors"
              />
              <input
                type="email"
                placeholder="email"
                value={form.email}
                onChange={set("email")}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                className="flex-1 min-w-0 bg-transparent border border-white/20 text-white placeholder-white/30 text-base px-6 py-4 rounded-2xl focus:outline-none focus:border-white/50 transition-colors"
              />
              <button
                type="button"
                onClick={handleSend}
                className="bg-white text-charcoal text-sm font-bold px-8 py-4 rounded-2xl hover:bg-offwhite transition-colors shrink-0 cursor-pointer"
              >
                Get in Touch
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
