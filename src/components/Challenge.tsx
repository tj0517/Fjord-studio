"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";

const STRIPS = 4;
// Next strip fires when the current one is this fraction complete
const NEXT_AT = 0.82;
// Each strip's share of total scroll range so the last one ends at raw = 1.0
const STRIP_DURATION = 1 / ((STRIPS - 1) * NEXT_AT + 1); // ≈ 0.29

export default function Challenge() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const stripsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const onScroll = () => {
      if (!wrapperRef.current) return;

      const { top, height } = wrapperRef.current.getBoundingClientRect();
      const scrollable = height - window.innerHeight;
      const raw = Math.max(0, Math.min(1, -top / scrollable));

      stripsRef.current.forEach((strip, i) => {
        if (!strip) return;

        // Strip i starts only after strip i-1 reaches NEXT_AT of its run
        const start = i * NEXT_AT * STRIP_DURATION;
        const p = Math.max(0, Math.min(1, (raw - start) / STRIP_DURATION));

        // Diagonal leading edge — creates the trapezoid shape
        // No constant offset: at p=0 both edges are exactly 0% → full opaque rect
        const skew = 8;
        const leftY = p * (100 + skew + 4); // extra 4 ensures right edge also exits fully
        const rightY = Math.max(0, leftY - skew);

        strip.style.clipPath = `polygon(0 ${leftY}%, 100% ${rightY}%, 100% 100%, 0 100%)`;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div ref={wrapperRef} data-nav-theme="dark" style={{ height: "230vh" }}>
      <div className="sticky top-0 h-screen overflow-hidden">

        {/* ── Background photo revealed behind the strips ── */}
        <div className="absolute inset-0">
          <Image
            src="/bg.jpg"
            alt="Geirangerfjord, Norway"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
        </div>

        {/* ── Trapezoidal strips (dark overlay) ── */}
        {Array.from({ length: STRIPS }).map((_, i) => (
          <div
            key={i}
            ref={(el) => { stripsRef.current[i] = el; }}
            className="absolute inset-y-0 bg-navy-deep"
            style={{
              left: `${(i / STRIPS) * 100}%`,
              width: `${100 / STRIPS + 0.2}%`,
              willChange: "clip-path",
            }}
            aria-hidden="true"
          />
        ))}

        {/* ── Dark gradient at bottom for paragraph readability ── */}
        <div
          className="absolute bottom-0 inset-x-0 h-96 z-[5] pointer-events-none"
          style={{ background: "linear-gradient(to top, rgba(0,21,37,0.85) 0%, rgba(0,21,37,0.45) 30%, rgba(0,21,37,0.15) 65%, transparent 100%)" }}
          aria-hidden="true"
        />

        {/* ── Rotated sidenote ── */}
        <div className="absolute right-5 lg:right-8 top-1/2 -translate-y-1/2 z-20">
          <span
            className="text-white/40 text-[9px] font-semibold tracking-[0.28em] uppercase"
            style={{ writingMode: "vertical-rl", transform: "rotate(180deg)", display: "block" }}
          >
            The Challenge
          </span>
        </div>

        {/* ── Content ── */}
        <div className="relative z-10 h-full px-12 lg:px-20 flex flex-col justify-between pt-24 lg:pt-28 pb-10 lg:pb-14">

          <div className="flex-1 flex items-center">
            <h2
              className="font-display text-white font-bold leading-[1.0] tracking-tight"
              style={{ fontSize: "clamp(2.6rem, 8.5vw, 7.5rem)" }}
            >
              <span className="block">Most outdoor</span>
              <span className="block">businesses have</span>
              <span className="block text-white/50">terrible websites.</span>
            </h2>
          </div>

          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between sm:gap-8">
            <div className="flex items-center gap-4 shrink-0">
              <span className="text-white/40 text-sm font-light tabular-nums">1</span>
              <div className="w-10 h-px bg-white/25" />
              <span className="text-white/40 text-sm font-light tabular-nums">2</span>
            </div>
            <p className="text-white/60 text-base lg:text-lg leading-relaxed max-w-xs lg:max-w-sm sm:text-right">
              In a market flooded with templated solutions, brands that stand out
              require more than good design — they require intention, craft, and the
              courage to be different.
            </p>
          </div>
        </div>

        {/* ── Down arrow ── */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-white/40" aria-hidden="true">
          <svg width="20" height="34" viewBox="0 0 20 34" fill="none">
            <line x1="10" y1="0" x2="10" y2="26" stroke="currentColor" strokeWidth="1.2" />
            <path d="M3 19 L10 28 L17 19" stroke="currentColor" strokeWidth="1.2" fill="none" />
          </svg>
        </div>

      </div>
    </div>
  );
}
