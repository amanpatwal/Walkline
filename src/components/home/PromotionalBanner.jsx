"use client";

import Image from "next/image";
import Link from "next/link";
import { assets } from "@/data/assets";

// ─── Vision Promotional Banner — Full Viewport Width ──────────────────────────
// Full-width banner featuring "VISION TO 10 MILLION PAIRS ANNUALLY" (1900×328).
// Full-bleed presentation matching 10-Millions-Pairs.jpg.

export default function PromotionalBanner() {
  return (
    <section
      id="promotional-banner"
      className="relative w-full overflow-hidden bg-[#0A0A0A]"
      aria-label="Walkline Footwear — Vision to 10 Million Pairs Annually"
    >
      <Link
        href="/collections"
        className="group relative block w-full overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-[#27409A]"
        aria-label="Explore Walkline Footwear Collection"
      >
        {/* Full-bleed image — 1900×328 aspect ratio preserved */}
        <div
          className="relative w-full"
          style={{ aspectRatio: "1900 / 328" }}
        >
          <Image
            src={assets.campaigns.visionBanner}
            alt="Vision to 10 Million Pairs Annually — Walkline Footwear"
            fill
            sizes="100vw"
            quality={95}
            className="object-cover object-center group-hover:scale-[1.012] transition-transform duration-500 ease-out select-none"
          />
          {/* Subtle hover darkening */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 pointer-events-none" />
        </div>
      </Link>
    </section>
  );
}
