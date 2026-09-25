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
        isDark ? "bg-[#1A0F08]" : "bg-[#FAF7F1]"
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
            sizes="100vw"
          />
          {/* Bottom fade to content panel */}
          <div
            className={`absolute inset-x-0 bottom-0 h-[30%] bg-gradient-to-t pointer-events-none ${
              isDark ? "from-[#1A0F08]" : "from-[#FAF7F1]"
            } to-transparent`}
          />
        </div>
      )}

      {/* ── Content Panel ── */}
      <div
        className={`px-5 sm:px-10 lg:px-16 py-8 sm:py-11 ${
          isDark ? "text-[#F3E8D8]" : "text-[#24140D]"
        }`}
      >
        <div className="max-w-[1440px] mx-auto">
          {/* Breadcrumbs */}
          {breadcrumbs && breadcrumbs.length > 0 && (
            <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 mb-5 text-[10px] uppercase tracking-[0.18em] font-bold text-[#8A6E58]">
              {breadcrumbs.map((crumb, idx) => (
                <span key={idx} className="flex items-center gap-1.5">
                  {idx > 0 && <span className="text-[#8A6E58]/50">/</span>}
                  {idx < breadcrumbs.length - 1 ? (
                    <Link href={crumb.href} className="hover:text-[#9A6238] transition-colors">
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className={isDark ? "text-[#C69A6B]" : "text-[#24140D]"}>
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
                <p className="text-[10px] uppercase tracking-[0.22em] font-bold text-[#9A6238] mb-2">
                  {eyebrow}
                </p>
              )}
              {title && (
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight leading-[0.95]">
                  {title}
                </h1>
              )}
              {description && (
                <p className={`mt-3 text-sm sm:text-base leading-relaxed max-w-sm ${
                  isDark ? "text-[#C69A6B]/90" : "text-[#5A351F]/80"
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
                        ? "bg-[#F3E8D8] text-[#24140D] hover:bg-white"
                        : "bg-[#321D12] text-[#FAF7F1] hover:bg-[#5A351F] shadow-[0_4px_14px_rgba(50,29,18,0.2)]"
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
                        ? "border-[#F3E8D8]/30 text-[#F3E8D8] hover:border-[#F3E8D8]/70"
                        : "border-[#321D12]/25 text-[#24140D] hover:border-[#321D12]/60"
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
