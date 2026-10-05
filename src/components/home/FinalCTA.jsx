"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "@/ui/Container";

export default function FinalCTA() {
  return (
    <section
      className="relative w-full py-16 sm:py-24 bg-white text-[#000000] overflow-hidden"
      aria-label="Walkline Footwear Final Campaign Call to Action"
    >
      <Container>
        <div className="relative rounded-3xl bg-[#000000] text-white p-10 sm:p-16 lg:p-20 text-center overflow-hidden shadow-2xl border border-neutral-900">
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#27409A]/20 blur-[120px] pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#27409A] block">
              Walkline Footwear • Bahadurgarh
            </span>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-[-0.03em] leading-[1.08] text-white">
              Step Into Confidence.
            </h2>

            <p className="text-sm sm:text-lg text-white/80 max-w-xl mx-auto leading-relaxed font-normal">
              Designed for impact. Engineered for all-day comfort. Explore our verified footwear collections crafted with Indian pride.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-4">
              <Link
                href="/men"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-[#27409A] hover:bg-[#1E327A] text-white text-xs font-bold uppercase tracking-[0.16em] transition-all duration-300 shadow-lg cursor-pointer group"
              >
                <span>Shop Men</span>
                <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/collections"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-transparent border border-white/30 text-white text-xs font-bold uppercase tracking-[0.16em] hover:bg-white hover:text-[#000000] transition-all duration-300 cursor-pointer"
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
