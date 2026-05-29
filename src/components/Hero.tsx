"use client";

import { motion } from "framer-motion";
import HeroBadge from "./HeroBadge";
import BottomLeftCard from "./BottomLeftCard";
import BottomRightCorner from "./BottomRightCorner";

export default function Hero() {
  return (
    <div
      data-nav-theme="dark"
      className="w-full h-screen flex items-center justify-center p-3 md:p-5 lg:p-8 bg-[#f0f0f0]"
    >
      <section className="relative w-full max-w-6xl h-full rounded-[1.5rem] md:rounded-[3rem] overflow-hidden flex flex-col items-center bg-black">

        {/* Looping local video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover object-[65%] lg:object-center z-0"
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>

        {/* Gradient overlay */}
        <div className="absolute inset-0 z-[1] bg-gradient-to-b from-black/25 via-transparent to-black/35" />

        {/* Content */}
        <div className="relative z-10 w-full h-full flex flex-col items-center">

          {/* Spacer for fixed navbar */}
          <div className="h-28 lg:h-32 shrink-0" />

          {/* Text — top-left */}
          <div className="w-full flex items-start pt-8 lg:pt-12 px-9 lg:px-[3.75rem]">
          <div className="flex flex-col items-start text-left max-w-xl">
            <motion.h1
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-[80px] font-bold text-white mb-4 tracking-tight leading-[1.05]"
            >
              Built for
              <br />
              <span className="text-white/45">the Outdoors.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-sm sm:text-base md:text-lg text-white/70 leading-relaxed max-w-md"
            >
              We build booking platforms, e-commerce stores, and websites for
              fishing lodges, guiding operations, and outdoor brands.
            </motion.p>
          </div>
          </div>

          {/* Bottom glass cards */}
          <BottomLeftCard />
          <BottomRightCorner />
        </div>

      </section>
    </div>
  );
}
