import Image from "next/image";
import { assets } from "@/data/assets";

/**
 * CategoryBanner
 * Full-width Vision to 10 Million Pairs Annually banner.
 * Placed directly below the navbar on Men, Women, and Kids category pages.
 * The banner image contains its own artwork — no text or buttons overlaid.
 */
export default function CategoryBanner() {
  return (
    <div
      className="relative w-full overflow-hidden bg-[#0A0A0A]"
      aria-label="Walkline Footwear — Vision to 10 Million Pairs Annually"
    >
      {/* Full-bleed image — preserves the 1900×328 original aspect ratio */}
      <div
        className="relative w-full"
        style={{ aspectRatio: "1900 / 328" }}
      >
        <Image
          src={assets.campaigns.visionBanner}
          alt="Vision to 10 Million Pairs Annually — Walkline Footwear"
          fill
          priority
          sizes="100vw"
          quality={95}
          className="object-cover object-center select-none"
        />
      </div>
    </div>
  );
}

