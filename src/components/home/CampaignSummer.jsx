import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { assets } from "@/data/assets";

// ─── Summer Campaign — Full Viewport Width ───────────────────────────────────
// "Custom / Crafted For Everyday — Summer" campaign section.
// No max-width, no rounded wrapper, no outer padding. Touches viewport edges.

export default function CampaignSummer() {
  return (
    <section
      className="relative w-full overflow-hidden bg-white"
      aria-label="Crafted For Everyday — Summer Walkline Campaign"
    >
      <Link
        href="/sandals"
        className="group relative block w-full overflow-hidden"
        style={{ aspectRatio: "21 / 9" }}
        aria-label="Shop Summer Sandals — Crafted For Everyday"
      >
        <Image
          src={assets.campaigns.summer}
          alt="Custom / Crafted For Everyday — Summer — Walkline Footwear"
          fill
          sizes="100vw"
          loading="lazy"
          quality={90}
          className="object-cover object-center transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.015]"
        />

        {/* Bottom-left CTA — Deep espresso mocha #2D231E matching SUMMER typography & sandals, sharp rectangular corners */}
        <div className="absolute bottom-5 sm:bottom-8 lg:bottom-12 left-6 sm:left-10 lg:left-[9.5%] z-10">
          <span className="inline-flex items-center gap-2.5 px-6 py-3 bg-[#2D231E] group-hover:bg-[#3E312A] text-white text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] rounded-none shadow-[0_2px_14px_rgba(45,35,30,0.35)] group-hover:shadow-[0_4px_22px_rgba(45,35,30,0.5)] transition-all duration-300 group-hover:-translate-y-[2px]">
            <span>Shop Sandals</span>
            <ArrowRight className="w-3.5 h-3.5 text-white group-hover:translate-x-[4px] transition-transform duration-300" />
          </span>
        </div>
      </Link>
    </section>
  );
}
