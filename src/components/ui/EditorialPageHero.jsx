"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

/**
 * EditorialPageHero
 *
 * Props:
 *  image        — image src string
 *  imageAlt     — alt text
 *  eyebrow      — small uppercase label above title (e.g. "WOMEN")
 *  title        — large display title
 *  description  — supporting copy paragraph
 *  ctaLabel     — primary CTA text  (optional)
 *  ctaHref      — primary CTA link  (optional)
 *  ctaSecLabel  — secondary CTA text (optional)
 *  ctaSecHref   — secondary CTA link (optional)
 *  theme        — "light" (default) | "dark"
 *  objectPosition — css object-position value (default "center")
 *  breadcrumbs  — array of { label, href } (optional)
 */
export default function EditorialPageHero({
  image,
  imageAlt = "Walkline Footwear",
  eyebrow,
  title,
  description,
  ctaLabel,
  ctaHref,
  ctaSecLabel,
  ctaSecHref,
  theme = "light",
  objectPosition = "center",
  breadcrumbs,
}) {
  const isDark = theme === "dark";

  return (
    <section
      className={`relative w-full overflow-hidden pt-[72px] sm:pt-[80px] ${
        isDark ? "bg-[#000000]" : "bg-neutral-50"
      }`}
      aria-label={`${title} — Walkline Footwear`}
    >
      {/* ── Campaign Image ── */}
      {image && (
        <div className="relative w-full aspect-[16/8] sm:aspect-[21/9] lg:aspect-[25/9] max-h-[620px] min-h-[220px] overflow-hidden">
          <Image
            src={image}
            alt={imageAlt}
            fill
            priority
            quality={90}
            className="object-cover transition-transform duration-700 hover:scale-[1.02]"
            style={{ objectPosition }}
          />
          {/* Bottom fade to content panel */}
          <div
            className={`absolute inset-x-0 bottom-0 h-[30%] bg-gradient-to-t pointer-events-none ${
              isDark ? "from-[#000000]" : "from-neutral-50"
            } to-transparent`}
          />
        </div>
      )}

      {/* ── Content Panel ── */}
      <div
        className={`px-5 sm:px-10 lg:px-16 py-8 sm:py-11 ${
          isDark ? "text-white" : "text-[#000000]"
        }`}
      >
        <div className="max-w-[1440px] mx-auto">
          {/* Breadcrumbs */}
          {breadcrumbs && breadcrumbs.length > 0 && (
            <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 mb-5 text-[10px] uppercase tracking-[0.18em] font-bold text-neutral-500">
              {breadcrumbs.map((crumb, idx) => (
                <span key={idx} className="flex items-center gap-1.5">
                  {idx > 0 && <span className="text-neutral-400">/</span>}
                  {idx < breadcrumbs.length - 1 ? (
                    <Link href={crumb.href} className="hover:text-[#27409A] transition-colors">
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className={isDark ? "text-[#27409A]" : "text-[#000000]"}>
                      {crumb.label}
                    </span>
                  )}
                </span>
              ))}
            </nav>
          )}

          <div className="flex flex-col sm:flex-row items-start justify-between gap-6">
            {/* Left: Eyebrow + Title */}
            <div className="max-w-lg">
              {eyebrow && (
                <p className="text-[10px] uppercase tracking-[0.22em] font-bold text-[#27409A] mb-2">
                  {eyebrow}
                </p>
              )}
              {title && (
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight leading-[0.95] text-[#000000]">
                  {title}
                </h1>
              )}
              {description && (
                <p className={`mt-3 text-sm sm:text-base leading-relaxed max-w-sm ${
                  isDark ? "text-neutral-300" : "text-neutral-600"
                }`}>
                  {description}
                </p>
              )}
            </div>

            {/* Right: CTAs */}
            {(ctaLabel || ctaSecLabel) && (
              <div className="flex flex-row items-center gap-3 shrink-0 self-end">
                {ctaLabel && ctaHref && (
                  <Link
                    href={ctaHref}
                    className={`group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-lg text-[11px] font-bold uppercase tracking-[0.12em] transition-all duration-300 ${
                      isDark
                        ? "bg-white text-[#000000] hover:bg-neutral-100"
                        : "bg-[#27409A] text-white hover:bg-[#1E327A] shadow-md"
                    }`}
                  >
                    <span>{ctaLabel}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                )}
                {ctaSecLabel && ctaSecHref && (
                  <Link
                    href={ctaSecHref}
                    className={`inline-flex items-center gap-2 px-5 py-3.5 rounded-lg text-[11px] font-bold uppercase tracking-[0.12em] border transition-all duration-300 ${
                      isDark
                        ? "border-white/30 text-white hover:border-white"
                        : "border-neutral-300 text-[#000000] hover:border-[#27409A] hover:text-[#27409A]"
                    }`}
                  >
                    {ctaSecLabel}
                  </Link>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
