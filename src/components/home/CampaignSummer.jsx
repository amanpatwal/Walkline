"use client";

import Image from "next/image";
import Link from "next/link";
import { assets } from "@/data/assets";

// ─── Comfy Promotional Banner — Full Viewport Width ──────────────────────────
// Official supplied 1900×328px banner featuring the COMFY exclusive footwear series.
// Preserves original artwork and aspect ratio across desktop, tablet, and mobile.

export default function CampaignSummer() {
  return (
    <section
      id="comfy-banner"
      className="relative w-full overflow-hidden bg-[#000000]"
      aria-label="Walkline Footwear — Comfy Exclusive Series"
    >
      <Link
        href="/collections"
        className="group relative block w-full overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-[#27409A]"
        aria-label="Explore Walkline Comfy Series Footwear"
      >
        <div
          className="relative w-full"
          style={{ aspectRatio: "1900 / 328" }}
        >
          <Image
            src={assets.campaigns.comfyBanner}
            alt="Walkline Footwear — Comfy Our Exclusive Series"
            fill
            sizes="100vw"
            quality={95}
            className="object-cover object-center group-hover:scale-[1.01] transition-transform duration-500 ease-out"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300 pointer-events-none" />
        </div>
      </Link>
    </section>
  );
}
