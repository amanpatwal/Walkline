import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { assets } from "@/data/assets";

export default function CampaignRainyDays() {
  return (
    <section
      id="campaign-rainy"
      className="relative w-full py-6 sm:py-10 bg-white overflow-hidden"
      aria-label="For Rainy Days & Street-Fit Moments — Walkline Footwear"
    >
      <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-8">
        <Link
          href="/sandals"
          className="relative w-full aspect-[21/9] sm:aspect-[21/8] lg:aspect-[21/7] max-h-[620px] min-h-[340px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-editorial-md border border-black/10 bg-[#000000] group cursor-pointer block"
        >
          <Image
            src={assets.campaigns.rainyDays}
            alt="For Rainy Days & Street-Fit Moments — Walkline Waterproof Sandals"
            fill
            sizes="(max-width: 1920px) 100vw, 1920px"
            className="object-cover object-center group-hover:scale-[1.02] transition-transform duration-700 ease-out"
          />

          {/* Bottom Right CTA */}
          <div className="absolute inset-0 flex flex-col justify-end items-end p-6 sm:p-10 lg:p-14 z-10 pointer-events-none">
            <span
              className="pointer-events-auto inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-white text-[#000000] text-xs font-bold uppercase tracking-[0.16em] hover:bg-neutral-100 transition-all duration-300 shadow-editorial-md group/btn"
            >
              <span>Shop Sandals</span>
              <ArrowRight className="w-4 h-4 text-[#27409A] group-hover/btn:translate-x-1 transition-transform" />
            </span>
          </div>
        </Link>
      </div>
    </section>
  );
}
