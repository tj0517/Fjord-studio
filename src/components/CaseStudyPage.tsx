"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 } as { opacity: number; y: number },
  viewport: { once: true } as { once: boolean },
  transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] },
};

const fadeUpDelayed = (delay: number) => ({
  ...fadeUp,
  transition: { ...fadeUp.transition, delay },
});

interface Props {
  project: Project;
  nextProject: Project;
}

export default function CaseStudyPage({ project, nextProject }: Props) {
  const { caseStudy } = project;

  return (
    <>
      {/* ── 1. Hero ── */}
      <section data-nav-theme="dark" className="bg-navy-deep flex flex-col min-h-screen">
        <div className="h-28 lg:h-32 shrink-0" />

        <div className="px-12 lg:px-20 flex-1 flex flex-col justify-center pb-0">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            className="mb-8"
          >
            <Link
              href="/#work"
              className="inline-flex items-center gap-1.5 text-silver/50 hover:text-silver text-sm transition-colors duration-200"
            >
              ← Work
              <span className="text-silver/25">/</span>
              <span className="text-silver/70">{project.title}</span>
            </Link>
          </motion.div>

          {/* Category + year pills */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="text-xs font-semibold tracking-[0.18em] uppercase px-3 py-1.5 rounded-full bg-white/10 border border-white/10 text-white/70">
              {project.category}
            </span>
            <span className="text-xs font-semibold tracking-[0.18em] uppercase px-3 py-1.5 rounded-full bg-white/10 border border-white/10 text-white/70">
              {project.year}
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
            className="font-display text-white font-bold tracking-tight mb-5 leading-[1.05]"
            style={{ fontSize: "clamp(2.8rem, 6vw, 5.5rem)" }}
          >
            {project.title}
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-silver text-lg lg:text-xl max-w-2xl leading-relaxed"
          >
            {project.tagline}
          </motion.p>
        </div>

        {/* Full-width hero image flush to section bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative mt-12 h-[52vh] lg:h-[60vh] overflow-hidden"
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/30 via-transparent to-navy-deep/80" />
        </motion.div>
      </section>

      {/* ── 2. Challenge ── */}
      <section data-nav-theme="dark" className="bg-navy-deep py-24 lg:py-32">
        <div className="px-12 lg:px-20">
          <motion.span
            {...fadeUp}
            className="inline-flex items-center gap-2 text-silver/50 text-xs font-semibold tracking-[0.2em] uppercase mb-12 lg:mb-16"
          >
            <span className="block w-5 h-px bg-silver/50" />
            The Challenge
          </motion.span>

          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left: large challenge text */}
            <motion.div {...fadeUpDelayed(0.1)} className="lg:col-span-7">
              <p
                className="font-display text-white font-semibold leading-tight"
                style={{ fontSize: "clamp(1.9rem, 3.8vw, 3.2rem)" }}
              >
                {caseStudy.challenge}
              </p>
            </motion.div>

            {/* Right: vertical rule + context note */}
            <motion.div
              {...fadeUpDelayed(0.2)}
              className="lg:col-span-5 flex gap-6 items-start"
            >
              <div className="w-px bg-white/15 self-stretch shrink-0" />
              <p className="text-silver/50 text-base leading-relaxed">{project.tagline}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 3. Solution ── */}
      <section data-nav-theme="dark" className="bg-navy-dark py-24 lg:py-32">
        <div className="px-12 lg:px-20">
          <motion.span
            {...fadeUp}
            className="inline-flex items-center gap-2 text-silver/50 text-xs font-semibold tracking-[0.2em] uppercase mb-12 lg:mb-16"
          >
            <span className="block w-5 h-px bg-silver/50" />
            The Solution
          </motion.span>

          <motion.p
            {...fadeUpDelayed(0.1)}
            className="font-display text-white font-semibold leading-tight max-w-4xl mb-12"
            style={{ fontSize: "clamp(1.6rem, 2.8vw, 2.6rem)" }}
          >
            {caseStudy.solution}
          </motion.p>

          {/* Staggered tech tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, i) => (
              <motion.span
                key={tag}
                {...fadeUpDelayed(0.25 + i * 0.06)}
                className="text-silver/60 border border-white/15 rounded-full text-sm px-4 py-2"
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. Key Features ── */}
      <section data-nav-theme="light" className="bg-offwhite py-24 lg:py-32">
        <div className="px-12 lg:px-20">
          <motion.span
            {...fadeUp}
            className="inline-flex items-center gap-2 text-navy text-xs font-semibold tracking-[0.2em] uppercase mb-5"
          >
            <span className="block w-5 h-px bg-navy" />
            Features
          </motion.span>

          <motion.h2
            {...fadeUpDelayed(0.08)}
            className="font-display text-charcoal text-4xl lg:text-5xl font-bold tracking-tight mb-12 lg:mb-16"
          >
            What we built
          </motion.h2>

          <div className="grid lg:grid-cols-2 gap-px bg-silver-light/50 rounded-2xl overflow-hidden">
            {caseStudy.features.map((feature, i) => (
              <motion.div
                key={i}
                {...fadeUpDelayed(i * 0.08)}
                className="bg-offwhite p-8 lg:p-10 flex gap-6 items-start"
              >
                <span className="text-xs font-mono tracking-widest text-silver shrink-0 mt-1">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-charcoal/70 text-base leading-relaxed">{feature}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4b. Screenshots (only when populated) ── */}
      {caseStudy.screenshots.length > 0 && (
        <section data-nav-theme="light" className="bg-white py-24 lg:py-32">
          <div className="px-6 sm:px-12 lg:px-20">
            <motion.span
              {...fadeUp}
              className="inline-flex items-center gap-2 text-navy text-xs font-semibold tracking-[0.2em] uppercase mb-12 lg:mb-16"
            >
              <span className="block w-5 h-px bg-navy" />
              In the Wild
            </motion.span>

            {/* First screenshot full-width */}
            <motion.div
              {...fadeUpDelayed(0.08)}
              className="relative w-full rounded-2xl overflow-hidden mb-4"
              style={{ aspectRatio: "16/9" }}
            >
              <Image
                src={caseStudy.screenshots[0]}
                alt={`${project.title} screenshot 1`}
                fill
                className="object-cover object-top"
                sizes="100vw"
              />
            </motion.div>

            {/* Remaining screenshots in a 2-col grid */}
            {caseStudy.screenshots.length > 1 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {caseStudy.screenshots.slice(1).map((src, i) => (
                  <motion.div
                    key={i}
                    {...fadeUpDelayed(0.1 + i * 0.08)}
                    className="relative w-full rounded-2xl overflow-hidden"
                    style={{ aspectRatio: "16/9" }}
                  >
                    <Image
                      src={src}
                      alt={`${project.title} screenshot ${i + 2}`}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 640px) 100vw, 50vw"
                    />
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {/* ── 5. Results ── */}
      <section data-nav-theme="dark" className="bg-charcoal py-24 lg:py-32">
        <div className="px-12 lg:px-20">
          <motion.span
            {...fadeUp}
            className="inline-flex items-center gap-2 text-white/25 text-xs font-semibold tracking-[0.2em] uppercase mb-12 lg:mb-16"
          >
            <span className="block w-5 h-px bg-white/25" />
            Results
          </motion.span>

          <div>
            {caseStudy.results.map((result, i) => (
              <motion.div
                key={i}
                {...fadeUpDelayed(i * 0.1)}
                className="flex items-baseline gap-8 py-8 lg:py-10 border-b border-white/8 last:border-0"
              >
                <span className="text-xs font-mono tracking-widest text-white/20 shrink-0 w-6">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p
                  className="font-display text-white font-bold leading-tight"
                  style={{ fontSize: "clamp(1.6rem, 3vw, 2.8rem)" }}
                >
                  {result}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. CTA + Next Project ── */}
      <section data-nav-theme="light" className="bg-offwhite py-24 lg:py-32">
        <div className="px-12 lg:px-20">
          {/* Live CTA */}
          <div className="text-center mb-16 lg:mb-20">
            <motion.h2
              {...fadeUp}
              className="font-display text-charcoal text-4xl lg:text-5xl font-bold tracking-tight mb-8"
            >
              See it in the wild.
            </motion.h2>
            <motion.div {...fadeUpDelayed(0.1)}>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-navy text-white font-medium px-8 py-4 rounded-full hover:bg-navy-dark transition-colors duration-200"
              >
                Visit {project.title}
                <span aria-hidden="true" className="opacity-70">↗</span>
              </a>
            </motion.div>
          </div>

          {/* Divider */}
          <div className="border-b border-silver-light mb-12 lg:mb-16" />

          {/* Next project teaser */}
          <motion.div {...fadeUp}>
            <p className="text-charcoal/40 text-xs font-semibold tracking-[0.2em] uppercase mb-6">
              Next Project
            </p>
            <Link
              href={nextProject.caseStudyUrl}
              className="group block relative h-72 lg:h-96 rounded-2xl overflow-hidden"
            >
              <motion.div
                className="absolute inset-0"
                whileHover={{ scale: 1.015 }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src={nextProject.image}
                  alt={nextProject.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  sizes="100vw"
                />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute inset-0 p-8 lg:p-12 flex flex-col justify-end">
                <p className="text-white/50 text-xs font-semibold tracking-[0.18em] uppercase mb-3">
                  {nextProject.category}
                </p>
                <div className="flex items-end justify-between">
                  <h3 className="font-display text-white font-bold text-3xl lg:text-4xl tracking-tight">
                    {nextProject.title}
                  </h3>
                  <span className="text-white/60 text-2xl">↗</span>
                </div>
              </div>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
