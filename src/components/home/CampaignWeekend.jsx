import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { assets } from "@/data/assets";

export default function CampaignWeekend() {
  return (
    <section
      className="relative w-full py-6 sm:py-10 bg-[#FAF7F1] overflow-hidden"
      aria-label="Walkline Weekend Mode Campaign"
    >
      <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-8">
        <Link
          href="/sandals"
          className="relative w-full aspect-[21/9] sm:aspect-[21/8] lg:aspect-[21/7] max-h-[620px] min-h-[340px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-editorial-md border border-[#24140D]/10 bg-[#24140D] group cursor-pointer block"
        >
          <Image
            src={assets.campaigns.weekend}
            alt="Step Into Weekend Mode — Comfort. Style. Freedom."
            fill
            sizes="(max-width: 1920px) 100vw, 1920px"
            className="object-cover object-center group-hover:scale-[1.02] transition-transform duration-700 ease-out"
          />

          {/* Natural Negative Space CTA Overlay on the bottom right */}
          <div className="absolute inset-0 flex flex-col justify-end items-end p-6 sm:p-10 lg:p-14 z-10 pointer-events-none">
            <span
              className="pointer-events-auto inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-[#321D12]/95 backdrop-blur-sm text-[#FAF7F1] text-xs font-bold uppercase tracking-[0.15em] hover:bg-[#5A351F] transition-all duration-300 shadow-editorial-md group/btn"
            >
              <span>Explore Sandals</span>
              <ArrowRight className="w-4 h-4 text-[#C69A6B] group-hover/btn:translate-x-1 transition-transform" />
            </span>
          </div>
        </Link>
      </div>
    </section>
  );
}
