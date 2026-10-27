"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "@/ui/Container";

export default function FinalCTA() {
  return (
    <section
      className="relative w-full py-16 sm:py-24 lg:py-28 bg-white text-[#000000] overflow-hidden"
      aria-label="Walkline Footwear — Step Into Confidence"
    >
      <Container size="narrow">
        <div
          className="relative rounded-2xl sm:rounded-3xl text-white py-14 sm:py-16 lg:py-20 px-6 sm:px-12 lg:px-16 text-center overflow-hidden
                     border border-white/15
                     shadow-[inset_0_1px_0_0_rgba(255,255,255,0.22),0_24px_50px_-12px_rgba(24,37,92,0.35)]"
          style={{
            background:
              "radial-gradient(ellipse 90% 65% at 50% -10%, #354FA8 0%, #27409A 48%, #1C2F75 100%)",
          }}
        >
          {/* Subtle Ambient Radial Lighting for Editorial Depth */}
          <div
            aria-hidden="true"
            className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-white/[0.08] blur-[80px] pointer-events-none rounded-full"
          />
          <div
            aria-hidden="true"
            className="absolute -bottom-20 -right-20 w-[400px] h-[300px] bg-[#16255C]/60 blur-[90px] pointer-events-none rounded-full"
          />
          <div
            aria-hidden="true"
            className="absolute -bottom-20 -left-20 w-[400px] h-[300px] bg-[#1E327A]/40 blur-[90px] pointer-events-none rounded-full"
          />

          <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
            {/* 1. Refined Brand Label */}
            <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.24em] text-white/80 block mb-3.5 sm:mb-4">
              WALKLINE FOOTWEAR · BAHADURGARH
            </span>

            {/* 2. Refined Main Heading */}
            <h2 className="text-[clamp(1.85rem,4.2vw,3.25rem)] font-extrabold uppercase tracking-tight leading-[1.12] text-white max-w-xl mx-auto mb-4 sm:mb-5">
              STEP INTO CONFIDENCE.
            </h2>

            {/* 3. Polished Supporting Copy */}
            <p className="text-sm sm:text-base lg:text-[1.0625rem] text-white/85 max-w-lg sm:max-w-xl mx-auto leading-relaxed font-normal mb-8 sm:mb-10">
              Designed for impact. Engineered for all-day comfort. Explore our verified footwear collections crafted with Indian pride.
            </p>

            {/* 4. Redesigned CTA Button Pair */}
            <div className="w-full flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4">
              {/* Primary CTA — SHOP MEN */}
              <Link
                href="/men"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 sm:py-4 rounded-xl
                           bg-white text-[#0A0A0A] hover:bg-neutral-100 hover:shadow-md
                           text-xs font-bold uppercase tracking-[0.14em]
                           transition-all duration-200 cursor-pointer group active:scale-[0.98]
                           focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#27409A]"
              >
                <span>Explore Men</span>
                <ArrowRight className="w-4 h-4 text-[#0A0A0A] transition-transform duration-200 motion-safe:group-hover:translate-x-1" />
              </Link>

              {/* Secondary CTA — VIEW ALL COLLECTIONS */}
              <Link
                href="/collections"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 sm:py-4 rounded-xl
                           bg-white/[0.08] hover:bg-white/[0.16] border border-white/25 hover:border-white/50
                           text-white text-xs font-bold uppercase tracking-[0.14em]
                           transition-all duration-200 cursor-pointer active:scale-[0.98]
                           focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#27409A]"
              >
                <span>View All Collections</span>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
