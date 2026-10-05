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
      icon: <Sparkles className="w-5 h-5 text-[#27409A]" />,
    },
    {
      title: "Made in India Pride",
      desc: "Designed and manufactured in Bahadurgarh, India with premium quality assured.",
      icon: <Award className="w-5 h-5 text-[#27409A]" />,
    },
    {
      title: "Everyday Durability",
      desc: "Resilient soling compounds engineered to move with you across all seasons.",
      icon: <Compass className="w-5 h-5 text-[#27409A]" />,
    },
  ];

  return (
    <section
      id="about"
      className="relative w-full py-20 sm:py-28 bg-white text-[#000000] border-t border-neutral-200 overflow-hidden"
      aria-label="Walkline Brand Story & Heritage"
    >
      <Container>
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#27409A]/10 text-[#27409A] text-[11px] font-bold uppercase tracking-[0.2em]">
            <span>Established {COMPANY_INFO.establishedYear} • Bahadurgarh, India</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-[-0.03em] text-[#000000] leading-[1.08]">
            Your Ultimate Destination For Premium Footwear.
          </h2>

          <p className="text-base sm:text-xl text-[#27409A] font-semibold max-w-2xl mx-auto leading-relaxed">
            &ldquo;Crafting comfort and style for every step since 2009.&rdquo;
          </p>

          <p className="text-xs sm:text-sm text-neutral-600 max-w-xl mx-auto leading-relaxed">
            At Walkline Footwear, we bridge modern street culture with ergonomic Indian footwear engineering. Every silhouette is built to deliver effortless confidence from dawn to dusk.
          </p>

          <div className="pt-2">
            <Link
              href="/about"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-[#27409A] text-white text-xs font-bold uppercase tracking-[0.18em] hover:bg-[#1E327A] transition-all duration-300 shadow-md cursor-pointer group"
            >
              <span>About Walkline</span>
              <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* 3 Pillars in Clean White Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-5xl mx-auto">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white border border-neutral-200 shadow-sm space-y-3 text-left hover:border-[#27409A] transition-colors"
            >
              <div className="p-2.5 rounded-xl bg-neutral-50 w-fit border border-neutral-200">
                {pillar.icon}
              </div>
              <h3 className="text-base font-bold uppercase tracking-tight text-[#000000]">
                {pillar.title}
              </h3>
              <p className="text-xs sm:text-[13px] text-neutral-600 leading-relaxed">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
