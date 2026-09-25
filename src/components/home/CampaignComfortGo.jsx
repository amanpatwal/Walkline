"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { assets } from "@/data/assets";

export default function CampaignComfortGo() {
  const handleScrollTo = (targetId = "products") => {
    const el = document.getElementById(targetId);
    if (el) {
      if (window.__lenis) {
        window.__lenis.scrollTo(el, { offset: -76 });
      } else {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section
      className="relative w-full py-6 sm:py-10 bg-[#FAF7F1] overflow-hidden"
      aria-label="Everyday Comfort On The Go — Walkline Footwear"
    >
      <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-8">
        <div
          className="relative w-full aspect-[21/9] sm:aspect-[21/8] lg:aspect-[21/7] max-h-[620px] min-h-[340px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-editorial-md border border-[#24140D]/10 bg-[#FAF7F1] group cursor-pointer"
          onClick={() => handleScrollTo("products")}
        >
          <Image
            src={assets.campaigns.comfortGo}
            alt="Everyday Comfort On The Go — Lightweight Feel, Cushioned Comfort, Everyday Support"
            fill
            sizes="(max-width: 1920px) 100vw, 1920px"
            className="object-cover object-center group-hover:scale-[1.02] transition-transform duration-700 ease-out"
          />

          {/* Bottom Right CTA */}
          <div className="absolute inset-0 flex flex-col justify-end items-end p-6 sm:p-10 lg:p-14 z-10 pointer-events-none">
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleScrollTo("products");
              }}
              className="pointer-events-auto inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-[#321D12]/95 backdrop-blur-sm text-[#FAF7F1] text-xs font-bold uppercase tracking-[0.15em] hover:bg-[#5A351F] transition-all duration-300 shadow-editorial-md cursor-pointer group/btn"
            >
              <span>Explore Collection</span>
              <ArrowRight className="w-4 h-4 text-[#C69A6B] group-hover/btn:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
