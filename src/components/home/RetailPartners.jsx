import Image from "next/image";
import { assets } from "@/data/assets";

// ─── Retail Partners — Normalized & Optically Balanced Logo Carousel ────────
// Showcases all five Walkline retail partners: DMart, Zudio, Flipkart, Amazon,
// Myntra. All logos are rendered inside equal-dimension containers with centerline
// alignment and per-brand optical sizing to balance visual weights and ink density.
// Uses pure-CSS marquee with hover/focus-pause and reduced-motion support.

const PARTNERS = [
  {
    id: "dmart",
    name: "D-Mart",
    src: assets.partners.dmart,
    width: 754,
    height: 173,
    // Optical sizing: Bag + two lines of text (D-Mart + tagline).
    // Height tuned to keep both the mark and tagline legible without overpowering the row.
    sizeClass:
      "max-h-[24px] sm:max-h-[30px] lg:max-h-[36px] max-w-[115px] sm:max-w-[140px] lg:max-w-[170px]",
  },
  {
    id: "zudio",
    name: "Zudio",
    src: assets.partners.zudio,
    width: 400,
    height: 80,
    // Optical sizing: Solid, heavy black uppercase letters with wide 5:1 ratio.
    // Slightly lower height balances its heavy ink density against the other brands.
    sizeClass:
      "max-h-[19px] sm:max-h-[24px] lg:max-h-[28px] max-w-[100px] sm:max-w-[125px] lg:max-w-[150px]",
  },
  {
    id: "flipkart",
    name: "Flipkart",
    src: assets.partners.flipkart,
    width: 4612,
    height: 1216,
    // Optical sizing: Blue shopping bag + italic "Flipkart" + "Explore Plus".
    // Trimmed of 5000×5000 canvas padding; height ensures icon and text are crisp and prominent.
    sizeClass:
      "max-h-[26px] sm:max-h-[32px] lg:max-h-[38px] max-w-[105px] sm:max-w-[130px] lg:max-w-[160px]",
  },
  {
    id: "amazon",
    name: "Amazon",
    src: assets.partners.amazon,
    width: 724,
    height: 244,
    // Optical sizing: Lowercase wordmark + curved orange smile arrow.
    // Trimmed of canvas padding; height ensures cap-height matches neighbors and smile is clear.
    sizeClass:
      "max-h-[27px] sm:max-h-[34px] lg:max-h-[40px] max-w-[90px] sm:max-w-[110px] lg:max-w-[135px]",
  },
  {
    id: "myntra",
    name: "Myntra",
    src: assets.partners.myntra,
    width: 3725,
    height: 1132,
    // Optical sizing: Ribbon "M" monogram + clean sans-serif "MYNTRA" wordmark.
    // Trimmed of canvas padding; height balances the M mark and wordmark with Amazon and Flipkart.
    sizeClass:
      "max-h-[26px] sm:max-h-[32px] lg:max-h-[38px] max-w-[95px] sm:max-w-[115px] lg:max-w-[140px]",
  },
];

function PartnerLogo({ partner, ariaHidden = false }) {
  return (
    <div
      className="flex-shrink-0 w-[160px] sm:w-[200px] lg:w-[240px] h-[60px] sm:h-[72px] lg:h-[80px] flex items-center justify-center px-3 sm:px-4 lg:px-6"
      aria-hidden={ariaHidden || undefined}
    >
      <Image
        src={partner.src}
        alt={ariaHidden ? "" : `${partner.name} — Walkline Retail Partner`}
        width={partner.width}
        height={partner.height}
        className={`w-auto h-auto ${partner.sizeClass} object-contain object-center select-none`}
        loading="eager"
      />
    </div>
  );
}

export default function RetailPartners() {
  return (
    <section
      className="relative w-full bg-white py-16 sm:py-20 lg:py-24 overflow-hidden"
      aria-label="Walkline Footwear — Our Retail Partners"
    >
      {/* ── Section Heading ──────────────────────────────────────────── */}
      <div className="text-center mb-10 sm:mb-12 lg:mb-14 px-5">
        <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.3em] text-[#27409A] mb-2.5 sm:mb-3">
          AVAILABLE ACROSS INDIA
        </p>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light uppercase tracking-wide text-[#000000] leading-snug">
          Our Retail Partners
        </h2>
      </div>

      {/* ── Logo Carousel ─────────────────────────────────────────────── */}
      <div
        className="partner-logos-track relative w-full overflow-hidden"
        role="region"
        aria-label="Retail partner logos"
      >
        {/* Soft edge fade masks to prevent abrupt edge clipping */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 w-12 sm:w-20 lg:w-28 bg-gradient-to-r from-white to-transparent z-10"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 w-12 sm:w-20 lg:w-28 bg-gradient-to-l from-white to-transparent z-10"
        />

        {/*
          Double the set in each half (10 items = 2400px on desktop) so that screens
          wider than 1200px (like 1440p and 1080p full width) have zero blank gaps,
          and translateX(-50%) creates a continuous, mathematically seamless loop.
        */}
        <div className="animate-partner-logos flex w-max items-center">
          {/* Primary set */}
          {PARTNERS.map((partner) => (
            <PartnerLogo key={`p1-${partner.id}`} partner={partner} />
          ))}
          {PARTNERS.map((partner) => (
            <PartnerLogo key={`p2-${partner.id}`} partner={partner} />
          ))}

          {/* Clone set for infinite loop (hidden from screen readers) */}
          <div aria-hidden="true" className="flex items-center">
            {PARTNERS.map((partner) => (
              <PartnerLogo key={`c1-${partner.id}`} partner={partner} ariaHidden />
            ))}
            {PARTNERS.map((partner) => (
              <PartnerLogo key={`c2-${partner.id}`} partner={partner} ariaHidden />
            ))}
          </div>
        </div>
      </div>

      {/* Subtle top & bottom hairlines for section demarcation */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 right-0 h-px bg-neutral-100"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 right-0 h-px bg-neutral-100"
      />
    </section>
  );
}
