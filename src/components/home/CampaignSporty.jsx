import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { assets } from "@/data/assets";

export default function CampaignSporty() {
  return (
    <section
      className="relative w-full py-6 sm:py-10 bg-[#FAF7F1] overflow-hidden"
      aria-label="Move Bolder — Sporty Looks Better by Walkline"
    >
      <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-8">
        <Link
          href="/women"
          className="relative w-full aspect-[21/9] sm:aspect-[21/8] lg:aspect-[21/7] max-h-[620px] min-h-[340px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-editorial-md border border-[#24140D]/10 bg-[#171412] group cursor-pointer block"
        >
          <Image
            src={assets.campaigns.sporty}
            alt="Move Bolder — Sporty Looks Better. Comfort For Every Move."
            fill
            sizes="(max-width: 1920px) 100vw, 1920px"
            className="object-cover object-center group-hover:scale-[1.02] transition-transform duration-700 ease-out"
          />

          {/* Bottom Left CTA */}
          <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-10 lg:p-14 z-10 pointer-events-none">
            <div className="max-w-md">
              <span
                className="pointer-events-auto inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-[#FAF7F1] text-[#24140D] text-xs font-bold uppercase tracking-[0.16em] hover:bg-white transition-all duration-300 shadow-editorial-md group/btn"
              >
                <span>Shop Sneakers</span>
                <ArrowRight className="w-4 h-4 text-[#9A6238] group-hover/btn:translate-x-1 transition-transform" />
              </span>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}
