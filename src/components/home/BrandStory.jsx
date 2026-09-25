"use client";

import Link from "next/link";
import { ArrowRight, Award, Compass, Sparkles } from "lucide-react";
import Container from "@/ui/Container";
import { COMPANY_INFO } from "@/data/company";

export default function BrandStory() {
  const pillars = [
    {
      title: "Comfort & Fit",
      desc: "Engineered with signature cushion soles and memory foam insoles for all-day freedom.",
      icon: <Sparkles className="w-5 h-5 text-[#9A6238]" />,
    },
    {
      title: "Made in India Pride",
      desc: "Designed and manufactured in Bahadurgarh, India with premium quality assured.",
      icon: <Award className="w-5 h-5 text-[#9A6238]" />,
    },
    {
      title: "Everyday Durability",
      desc: "Resilient soling compounds engineered to move with you across all seasons.",
      icon: <Compass className="w-5 h-5 text-[#9A6238]" />,
    },
  ];

  return (
    <section
      id="about"
      className="relative w-full py-20 sm:py-28 bg-[#FAF7F1] text-[#24140D] border-t border-[#24140D]/10 overflow-hidden"
      aria-label="Walkline Brand Story & Heritage"
    >
      <Container>
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F3E8D8] text-[#321D12] text-[11px] font-bold uppercase tracking-[0.2em]">
            <span>Established {COMPANY_INFO.establishedYear} • Bahadurgarh, India</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-[-0.03em] text-[#24140D] leading-[1.08]">
            Your Ultimate Destination For Premium Footwear.
          </h2>

          <p className="text-base sm:text-xl text-[#5A351F]/90 font-medium max-w-2xl mx-auto leading-relaxed">
            &ldquo;Crafting comfort and style for every step since 2009.&rdquo;
          </p>

          <p className="text-xs sm:text-sm text-[#8A6E58] max-w-xl mx-auto leading-relaxed">
            At Walkline Footwear, we bridge modern street culture with ergonomic Indian footwear engineering. Every silhouette is built to deliver effortless confidence from dawn to dusk.
          </p>

          <div className="pt-2">
            <Link
              href="/about"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-[#321D12] text-[#FAF7F1] text-xs font-bold uppercase tracking-[0.18em] hover:bg-[#5A351F] transition-all duration-300 shadow-editorial-md cursor-pointer group"
            >
              <span>About Walkline</span>
              <ArrowRight className="w-4 h-4 text-[#C69A6B] group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* 3 Pillars in Warm Cream Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-5xl mx-auto">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white border border-[#24140D]/10 shadow-editorial-sm space-y-3 text-left hover:border-[#9A6238]/50 transition-colors"
            >
              <div className="p-2.5 rounded-xl bg-[#FAF7F1] w-fit border border-[#24140D]/08">
                {pillar.icon}
              </div>
              <h3 className="text-base font-bold uppercase tracking-tight text-[#24140D]">
                {pillar.title}
              </h3>
              <p className="text-xs sm:text-[13px] text-[#5A351F]/80 leading-relaxed">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
