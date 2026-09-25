"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "@/ui/Container";

export default function FinalCTA() {

  return (
    <section
      className="relative w-full py-16 sm:py-24 bg-[#FAF7F1] text-[#24140D] overflow-hidden"
      aria-label="Walkline Footwear Final Campaign Call to Action"
    >
      <Container>
        <div className="relative rounded-3xl bg-[#24140D] text-[#FAF7F1] p-10 sm:p-16 lg:p-20 text-center overflow-hidden shadow-2xl border border-[#321D12]">
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#9A6238]/15 blur-[120px] pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#C69A6B] block">
              Walkline Footwear • Bahadurgarh
            </span>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-[-0.03em] leading-[1.08] text-[#FAF7F1]">
              Step Into Confidence.
            </h2>

            <p className="text-sm sm:text-lg text-[#F3E8D8]/80 max-w-xl mx-auto leading-relaxed font-normal">
              Designed for impact. Engineered for all-day comfort. Explore our verified footwear collections crafted with Indian pride.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-4">
              <Link
                href="/men"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-white text-[#24140D] text-xs font-bold uppercase tracking-[0.16em] hover:bg-[#F3E8D8] transition-all duration-300 shadow-lg cursor-pointer group"
              >
                <span>Shop Men</span>
                <ArrowRight className="w-4 h-4 text-[#9A6238] group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/collections"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-transparent border border-white/20 text-[#FAF7F1] text-xs font-bold uppercase tracking-[0.16em] hover:bg-white/10 hover:border-white transition-all duration-300 cursor-pointer"
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
