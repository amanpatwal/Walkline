"use client";

import Image from "next/image";
import Link from "next/link";
import { assets } from "@/data/assets";

// ─── Fresh In Rotation — Full-Bleed Campaign Banner ──────────────────────────
// Full-width editorial banner using fresh-in-rotation.jpg (1897×735px).
// The image artwork contains "Fresh in Rotation", "New In", and the "SHOP NOW" button.
// The interactive link is aligned directly over the image's "SHOP NOW" button position.

export default function CampaignFreshRotation() {
  return (
    <section
      className="relative w-full overflow-hidden bg-black"
      aria-label="Fresh In Rotation — New In Walkline Footwear"
    >
      <div className="relative w-full" style={{ aspectRatio: "1897 / 735" }}>
        <Image
          src={assets.campaigns.freshRotation}
          alt="Fresh in Rotation — New In — Walkline Footwear"
          fill
          sizes="100vw"
          loading="lazy"
          quality={92}
          className="object-cover object-center"
        />

        {/* ─── Interactive SHOP NOW button aligned directly over image button ─── */}
        {/* SHOP NOW: x=1375..1628 (72.48%..85.82%), y=462..523 (62.86%..71.16%) */}
        <Link
          href="/collections"
          aria-label="Shop Now — Fresh In Rotation"
          className="absolute cursor-pointer transition-all duration-200 hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-[#27409A] active:scale-[0.99] rounded-sm"
          style={{
            left: "72.48%",
            top: "62.86%",
            width: "13.34%",
            height: "8.30%",
          }}
        />
      </div>
    </section>
  );
}
