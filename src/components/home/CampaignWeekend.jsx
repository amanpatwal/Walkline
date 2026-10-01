import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { assets } from "@/data/assets";

// ─── Weekend Mode Campaign — Full-Bleed Banner ───────────────────────────────
// Sits directly below the product section with zero vertical gap.
// No max-width, no padding, no outer rounded wrapper. Image touches edges.

export default function CampaignWeekend() {
  return (
    <section
      aria-label="Weekend Mode — Walkline Campaign"
      className="relative w-full overflow-hidden bg-[#24140D]"
      style={{ display: "block" }}
    >
      <Link
        href="/sandals"
        className="group relative block w-full overflow-hidden"
        style={{ aspectRatio: "21 / 8" }}
        aria-label="Explore Walkline Sandals — Step Into Weekend Mode"
      >
        {/* Campaign artwork — contains "Step Into Weekend Mode" + "COMFORT. STYLE. FREEDOM." */}
        <Image
          src={assets.campaigns.weekend}
          alt="Step Into Weekend Mode — Comfort. Style. Freedom. — Walkline Footwear"
          fill
          sizes="100vw"
          loading="lazy"
          quality={90}
          className="object-cover object-center transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.015]"
        />

        {/* Subtle bottom-right CTA — does not cover embedded artwork text */}
        <div className="absolute bottom-5 sm:bottom-8 lg:bottom-10 right-5 sm:right-8 lg:right-12 z-10">
          <span className="inline-flex items-center gap-2.5 px-6 py-3 bg-[#321D12]/95 backdrop-blur-sm text-[#FAF7F1] text-[11px] font-bold uppercase tracking-[0.18em] rounded-full shadow-editorial-md group-hover:bg-[#5A351F] transition-all duration-300">
            <span>Explore Sandals</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#C69A6B] group-hover:translate-x-[5px] transition-transform duration-300" />
          </span>
        </div>
      </Link>
    </section>
  );
}
