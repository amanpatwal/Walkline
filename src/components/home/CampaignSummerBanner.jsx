"use client";

import Image from "next/image";
import { assets } from "@/data/assets";

// ─── Step Into Confidence — Full-Bleed Campaign Banner ────────────────────────
// Full-width editorial banner using step-into-confidence.jpg (2200×852px).
// Image artwork: "STEP INTO CONFIDENCE — Crafted For Comfort. Designed For Impact. Shoes that move with you."
// Unlinked presentation — no anchor link or button overlay on the image.

export default function CampaignSummerBanner() {
  return (
    <section
      id="campaign-summer"
      className="relative w-full overflow-hidden bg-white"
      aria-label="Step Into Confidence — Walkline Footwear Campaign"
    >
      <div
        className="relative block w-full overflow-hidden"
        style={{ aspectRatio: "2200 / 852" }}
      >
        <Image
          src={assets.campaigns.confidence}
          alt="Step Into Confidence — Crafted For Comfort. Designed For Impact. — Walkline Footwear"
          fill
          sizes="100vw"
          loading="lazy"
          quality={92}
          className="object-cover object-center select-none"
        />
      </div>
    </section>
  );
}
