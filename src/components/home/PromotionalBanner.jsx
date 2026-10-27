"use client";

import Image from "next/image";
import Link from "next/link";
import { assets } from "@/data/assets";

// ─── Comfy Promotional Banner — Full Viewport Width ──────────────────────────
// Replaces the previous "Sold Out" banner with the COMFY promotional banner.
// Full-bleed presentation matching the supplied Banner-Comfy.jpg asset.
// Aspect ratio preserved from the original 1900×328 slot dimensions.

export default function PromotionalBanner() {
  return (
    <section
      id="promotional-banner"
      className="relative w-full overflow-hidden bg-[#2B1E10]"
      aria-label="Walkline Footwear — Comfy Promotional Campaign"
    >
      <Link
        href="/collections"
        className="group relative block w-full overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-[#27409A]"
        aria-label="Explore Walkline Comfy Series"
      >
        {/* Full-bleed image — original 1900×328 aspect ratio preserved */}
        <div
          className="relative w-full"
          style={{ aspectRatio: "1900 / 328" }}
        >
          <Image
            src={assets.campaigns.comfyBanner}
            alt="Comfy — Our Exclusive Series — Walkline Footwear"
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
