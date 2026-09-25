import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { assets } from "@/data/assets";

export default function CampaignMidnight() {
  return (
    <section
      className="relative w-full py-10 sm:py-16 bg-[#24140D] text-[#FAF7F1] overflow-hidden"
      aria-label="Walkline Midnight Edition — Dark. Bold. Unstoppable."
    >
      <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-8">
        <div className="relative w-full aspect-[21/9] sm:aspect-[21/8] lg:aspect-[21/7] max-h-[640px] min-h-[350px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-[#171412] group">
          <Image
            src={assets.campaigns.midnight}
            alt="Midnight Mode — Dark. Bold. Unstoppable. Walkline Footwear"
            fill
            sizes="(max-width: 1920px) 100vw, 1920px"
            className="object-cover object-center group-hover:scale-[1.02] transition-transform duration-700 ease-out"
          />

          {/* Dual CTAs positioned cleanly over the negative space on the left */}
          <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-10 lg:p-16 z-10 pointer-events-none">
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <Link
                href="/men"
                className="pointer-events-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-white text-[#24140D] text-xs font-bold uppercase tracking-[0.16em] hover:bg-[#F3E8D8] transition-all duration-300 shadow-xl group/btn cursor-pointer"
              >
                <span>Shop Men</span>
                <ArrowRight className="w-4 h-4 text-[#9A6238] group-hover/btn:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/women"
                className="pointer-events-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-white/90 backdrop-blur-sm text-[#24140D] text-xs font-bold uppercase tracking-[0.16em] hover:bg-white transition-all duration-300 shadow-xl group/btn cursor-pointer"
              >
                <span>Shop Women</span>
                <ArrowRight className="w-4 h-4 text-[#9A6238] group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
