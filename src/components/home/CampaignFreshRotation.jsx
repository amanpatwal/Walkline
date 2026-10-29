"use client";

import Image from "next/image";
import { assets } from "@/data/assets";

// ─── Move Different — Full-Bleed Campaign Banner ─────────────────────────────
// Full-width editorial banner using 2 (5).jpg (2200×852px).
// Image artwork: "MOVE DIFFERENT — Sporty. Stylish. Always You."
// Unlinked presentation — no anchor link or hover darkening on the image.

export default function CampaignFreshRotation() {
  return (
    <section
      className="relative w-full overflow-hidden bg-black"
      aria-label="Move Different — Walkline Footwear Collection"
    >
      <div
        className="relative block w-full overflow-hidden"
        style={{ aspectRatio: "2200 / 852" }}
      >
        <Image
          src={assets.campaigns.freshRotation}
          alt="Move Different — Sporty. Stylish. Always You. — Walkline Footwear"
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
