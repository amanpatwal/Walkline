"use client";

import Image from "next/image";
import Link from "next/link";
import { assets } from "@/data/assets";

// ─── Summer Campaign — Full Viewport Width ────────────────────────────────────
// "Crafted For Everyday — SUMMER" editorial campaign banner.
// Uses summer-lifestyle.jpg: male model, warm cream tones, baked-in artwork text.
// Full-bleed with no max-width, no rounded corners, no outer padding.
// Preserved from the original CampaignSummer design (dd2e396).

export default function CampaignSummerBanner() {
  return (
    <section
      id="campaign-summer"
      className="relative w-full overflow-hidden bg-white"
      aria-label="Crafted For Everyday — Summer Walkline Campaign"
    >
      <Link
        href="/collections"
        className="group relative block w-full overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-[#27409A]"
        style={{ aspectRatio: "21 / 9" }}
        aria-label="Shop Summer Sandals — Crafted For Everyday"
      >
        <Image
          src={assets.campaigns.summer}
          alt="Crafted For Everyday — Summer — Walkline Footwear"
          fill
          sizes="100vw"
          loading="lazy"
          quality={92}
          className="object-cover object-center transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.015] select-none"
        />

        {/* Subtle hover darkening overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300 pointer-events-none" />

        {/* Bottom-left "SHOP SANDALS" CTA — Walkline brand blue */}
        <div className="absolute bottom-5 sm:bottom-8 lg:bottom-10 left-5 sm:left-8 lg:left-12 z-10">
          <span className="inline-flex items-center gap-2.5 px-6 py-3 bg-[#27409A] hover:bg-[#1E327A] text-white text-[11px] font-bold uppercase tracking-[0.18em] rounded-full shadow-md transition-all duration-300 group-hover:shadow-lg">
            <span>Shop Sandals</span>
            <svg
              width="13"
              height="13"
              viewBox="0 0 12 12"
              fill="none"
              aria-hidden="true"
              className="text-white group-hover:translate-x-[5px] transition-transform duration-300"
            >
              <path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
        </div>
      </Link>
    </section>
  );
}
