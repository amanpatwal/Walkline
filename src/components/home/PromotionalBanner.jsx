"use client";

import Image from "next/image";
import { assets } from "@/data/assets";

// ─── COMFY Exclusive Series Banner — Full Viewport Width ───────────────────────
// Full-width banner featuring the COMFY Our Exclusive Series artwork (1900×328).
// No text overlaid — the banner image contains its own complete artwork.

export default function PromotionalBanner() {
  return (
    <section
      id="promotional-banner"
      className="relative w-full overflow-hidden bg-[#0A0A0A]"
      aria-label="Walkline Footwear — COMFY Our Exclusive Series"
    >
      {/* Full-bleed image — 1900×328 aspect ratio preserved */}
      <div
        className="relative w-full"
        style={{ aspectRatio: "1900 / 328" }}
      >
        <Image
          src={assets.campaigns.comfyBanner}
          alt="COMFY — Our Exclusive Series — Walkline Footwear"
          fill
          sizes="100vw"
          quality={95}
          className="object-cover object-center select-none"
        />
      </div>
    </section>
  );
}
