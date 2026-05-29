"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";

export default function Work() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="work" data-nav-theme="dark" className="bg-navy-dark py-24 lg:py-32">
      <div className="px-6 sm:px-12 lg:px-20">

        {/* Header */}
        <div className="mb-12 lg:mb-16">
          <span className="inline-flex items-center gap-2 text-white/30 text-xs font-semibold tracking-[0.2em] uppercase mb-5">
            <span className="block w-5 h-px bg-white/30" />
            Featured Work
          </span>
          <h2 className="font-display text-white text-4xl lg:text-5xl font-bold tracking-tight">
            What We&apos;ve Built
          </h2>
        </div>

        {/* ── Desktop: expanding panels ── */}
        <div
          className="hidden lg:flex gap-1.5 h-[580px] rounded-2xl overflow-hidden"
          onMouseLeave={() => setHovered(null)}
        >
          {projects.map((project, i) => {
            const isHovered = hovered === i;
            const isIdle = hovered === null;

            return (
              <Link
                key={project.slug}
                href={project.caseStudyUrl}
                className="relative overflow-hidden cursor-pointer rounded-xl"
                style={{
                  flex: isHovered ? "3 0 0%" : isIdle ? "1 0 0%" : "0.55 0 0%",
                  transition: "flex 0.55s cubic-bezier(0.4, 0, 0.2, 1)",
                  minWidth: 0,
                }}
                onMouseEnter={() => setHovered(i)}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  style={{
                    transform: isHovered ? "scale(1.04)" : "scale(1)",
                    transition: "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
                  }}
                  sizes="50vw"
                />

                <div
                  className="absolute inset-0 z-10"
                  style={{
                    background: isHovered
                      ? "linear-gradient(to top, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.35) 50%, rgba(0,0,0,0.12) 100%)"
                      : "linear-gradient(to top, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.15) 60%, transparent 100%)",
                    transition: "background 0.5s ease",
                  }}
                />

                <div className="absolute inset-0 z-20 flex flex-col justify-between p-8">
                  <span
                    className="self-start text-[10px] font-semibold tracking-[0.18em] uppercase px-3 py-1.5 rounded-full bg-white/15 text-white backdrop-blur-sm"
                    style={{ opacity: isHovered ? 1 : 0.7, transition: "opacity 0.4s ease" }}
                  >
                    {project.category}
                  </span>

                  <div>
                    <h3
                      className="font-display text-white font-bold leading-tight tracking-tight whitespace-nowrap overflow-hidden text-ellipsis"
                      style={{
                        fontSize: isHovered ? "clamp(1.5rem, 2.4vw, 2rem)" : "clamp(1rem, 1.6vw, 1.4rem)",
                        transition: "font-size 0.45s cubic-bezier(0.4, 0, 0.2, 1)",
                      }}
                    >
                      {project.title}
                    </h3>

                    <div
                      style={{
                        maxHeight: isHovered ? "180px" : "0px",
                        opacity: isHovered ? 1 : 0,
                        transition: "max-height 0.45s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.35s ease",
                        overflow: "hidden",
                      }}
                    >
                      <p className="text-white/70 text-sm leading-relaxed mt-3 mb-4">{project.tagline}</p>
                      <p className="text-white/90 text-sm font-medium mb-5">→ {project.result}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex flex-wrap gap-1.5">
                          {project.tags.map((tag) => (
                            <span key={tag} className="text-[10px] text-white/50 border border-white/20 px-2.5 py-1 rounded-full">
                              {tag}
                            </span>
                          ))}
                        </div>
                        <span className="inline-flex items-center gap-2 bg-white text-navy text-xs font-semibold px-4 py-2 rounded-full shrink-0 ml-4">
                          View case study ↗
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* ── Mobile: vertical card stack ── */}
        <div className="flex flex-col gap-4 lg:hidden">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={project.caseStudyUrl}
              className="relative overflow-hidden rounded-2xl h-72 block"
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />

              <div className="absolute inset-0 flex flex-col justify-between p-6">
                <span className="self-start text-[10px] font-semibold tracking-[0.18em] uppercase px-3 py-1.5 rounded-full bg-white/15 text-white backdrop-blur-sm">
                  {project.category}
                </span>

                <div>
                  <h3 className="font-display text-white text-2xl font-bold leading-tight tracking-tight mb-2">
                    {project.title}
                  </h3>
                  <p className="text-white/65 text-sm leading-relaxed mb-4 line-clamp-2">
                    {project.tagline}
                  </p>
                  <span className="inline-flex items-center gap-2 bg-white text-navy text-xs font-semibold px-4 py-2 rounded-full">
                    View case study ↗
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
