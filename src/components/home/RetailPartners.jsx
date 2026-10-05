import Image from "next/image";
import { assets } from "@/data/assets";

// ─── Retail Partners — D-Mart + Zudio ────────────────────────────────────────
// "Designed for India's Top Retail Chains" section.
// Clean white background, heading: #000000, supporting UI: #27409A.
// Clean, tightly-trimmed transparent logo assets with balanced optical size and perfect alignment.

export default function RetailPartners() {
  return (
    <section
      className="relative w-full bg-white py-20 sm:py-28 lg:py-36 overflow-hidden"
      aria-label="Walkline Footwear — Retail Partners — D-Mart and Zudio"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-16 flex flex-col items-center">

        {/* Heading — Light typography with #000000 and #27409A */}
        <div className="text-center max-w-3xl mx-auto mb-20 sm:mb-28 lg:mb-36">
          <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.32em] text-[#27409A] mb-3 sm:mb-4">
            Available Across India
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light uppercase tracking-wide text-[#000000] leading-snug">
            Designed for India&apos;s
            <br className="hidden sm:block" />
            {" "}Top Retail Chains
          </h2>
        </div>

        {/* Logos Container — Fully aligned horizontally and vertically */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-12 sm:gap-16 lg:gap-24 w-full max-w-4xl">

          {/* D-Mart Logo */}
          <div className="flex items-center justify-center">
            <Image
              src={assets.logo.dmart}
              alt="D-Mart — Walkline Retail Partner"
              width={754}
              height={173}
              className="h-[54px] sm:h-[72px] lg:h-[88px] w-auto max-w-[270px] sm:max-w-[340px] lg:max-w-[400px] object-contain transition-transform duration-300 hover:scale-105"
              priority
            />
          </div>

          {/* Center Divider */}
          <div className="hidden sm:block w-px h-12 sm:h-16 lg:h-20 bg-neutral-200" />

          {/* Zudio Logo */}
          <div className="flex items-center justify-center">
            <Image
              src={assets.logo.zudio}
              alt="Zudio — Walkline Retail Partner"
              width={400}
              height={80}
              className="h-[48px] sm:h-[64px] lg:h-[78px] w-auto max-w-[260px] sm:max-w-[330px] lg:max-w-[390px] object-contain transition-transform duration-300 hover:scale-105"
              priority
            />
          </div>

        </div>

      </div>
    </section>
  );
}
