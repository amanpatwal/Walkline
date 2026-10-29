"use client";

/**
 * CategoryHeader
 * Compact, minimalist header for category showcase pages (Men, Women, Kids).
 * Replaces oversized lifestyle hero banners with clean, balanced typography.
 */
export default function CategoryHeader({
  eyebrow,
  title,
  description,
  count,
}) {
  return (
    <section
      className="w-full bg-white pt-10 sm:pt-14 pb-8 sm:pb-10 border-b border-neutral-200/70"
      aria-label={`${title} Category Header`}
    >
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div className="max-w-2xl">
            {eyebrow && (
              <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.22em] text-[#27409A] mb-2 sm:mb-2.5">
                {eyebrow}
              </p>
            )}
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-light uppercase tracking-wide text-[#000000] leading-snug">
              {title}
            </h1>
            {description && (
              <p className="text-xs sm:text-sm text-neutral-600 mt-2.5 leading-relaxed font-normal">
                {description}
              </p>
            )}
          </div>

          {typeof count === "number" && (
            <div className="shrink-0 self-start md:self-end">
              <span className="inline-block text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.16em] text-neutral-500 bg-neutral-100 px-3 py-1 rounded-full border border-neutral-200/70">
                {count} {count === 1 ? "Verified Style" : "Verified Styles"}
              </span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
