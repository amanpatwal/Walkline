import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { assets } from "@/data/assets";

export default function CampaignMoveDifferent() {
  return (
    <section
      className="relative w-full py-10 sm:py-16 bg-[#24140D] text-[#FAF7F1] overflow-hidden"
      aria-label="Move Different Campaign — Walkline Women's Sneaker Line"
    >
      <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-8">
        <Link
          href="/women"
          className="relative w-full aspect-[21/9] sm:aspect-[21/8] lg:aspect-[21/7] max-h-[640px] min-h-[350px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-[#171412] group cursor-pointer block"
        >
          <Image
            src={assets.campaigns.moveDifferent}
            alt="Move Different — Sporty. Stylish. Always You. Walkline Footwear"
            fill
            sizes="(max-width: 1920px) 100vw, 1920px"
            className="object-cover object-center group-hover:scale-[1.02] transition-transform duration-700 ease-out"
          />

          {/* Bottom Left / Center Negative space CTA */}
          <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-10 lg:p-14 z-10 pointer-events-none">
            <div className="max-w-md">
              <span
                className="pointer-events-auto inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-white text-[#24140D] text-xs font-bold uppercase tracking-[0.18em] hover:bg-[#F3E8D8] transition-all duration-300 shadow-xl group/btn"
              >
                <span>Move Different</span>
                <ArrowRight className="w-4 h-4 text-[#9A6238] group-hover/btn:translate-x-1 transition-transform" />
              </span>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}
