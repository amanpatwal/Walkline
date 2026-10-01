"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { assets } from "@/data/assets";

// ─── Fresh In Rotation — Full-Bleed Campaign Banner ──────────────────────────
// Sits directly above the product section with zero vertical gap.
// No max-width, no padding, no rounded wrapper. Image touches edges.

export default function CampaignFreshRotation() {
  return (
    <section
      className="relative w-full overflow-hidden bg-[#FAF7F1]"
      aria-label="Fresh In Rotation — New In Walkline Footwear"
      style={{ display: "block" }}
    >
      {/* Full-bleed image link — touches product section directly below */}
      <Link
        href="/collections"
        className="group relative block w-full overflow-hidden"
        style={{ aspectRatio: "21 / 8" }}
        aria-label="Shop New In — Fresh In Rotation"
      >
        <Image
          src={assets.campaigns.freshRotation}
          alt="Fresh in Rotation — New In — Walkline Footwear"
          fill
          sizes="100vw"
          loading="lazy"
          quality={90}
          className="object-cover object-center transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.015]"
        />

        {/* Bottom-right CTA — does not cover artwork text */}
        <div className="absolute bottom-5 sm:bottom-8 lg:bottom-10 right-5 sm:right-8 lg:right-12 z-10">
          <span className="inline-flex items-center gap-2.5 px-6 py-3 bg-[#321D12]/95 backdrop-blur-sm text-[#FAF7F1] text-[11px] font-bold uppercase tracking-[0.18em] rounded-full shadow-editorial-md group-hover:bg-[#5A351F] transition-all duration-300">
            <span>Shop Now</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#C69A6B] group-hover:translate-x-[5px] transition-transform duration-300" />
          </span>
        </div>
      </Link>
    </section>
  );
}
