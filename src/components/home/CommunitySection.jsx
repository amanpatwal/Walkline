"use client";

import { ShieldCheck, Sparkles, Award, HeartHandshake } from "lucide-react";
import Container from "@/ui/Container";
import { COMPANY_INFO } from "@/data/company";

export default function CommunitySection() {
  const brandPillars = [
    {
      title: "1,00,000+ Monthly Capacity",
      subtitle: "Large-Scale Manufacturing",
      desc: "Bahadurgarh precision facility capable of delivering consistent high-volume quality.",
      icon: <Award className="w-5 h-5 text-[#27409A]" />,
    },
    {
      title: "Comfort-First Engineering",
      subtitle: "Signature Soling Tech",
      desc: "From memory foam to coral cushion soles, every step is built for impact absorption.",
      icon: <Sparkles className="w-5 h-5 text-[#27409A]" />,
    },
    {
      title: "Genuine Indian Footwear",
      subtitle: "100% Homegrown Craft",
      desc: "Designed and manufactured in India with pride, upholding high craftsmanship standards.",
      icon: <ShieldCheck className="w-5 h-5 text-[#27409A]" />,
    },
    {
      title: "Everyday Versatility",
      subtitle: "Street & Comfort Focus",
      desc: "Shoes and sandals designed to transition seamlessly from morning commute to weekend downtime.",
      icon: <HeartHandshake className="w-5 h-5 text-[#27409A]" />,
    },
  ];

  return (
    <section
      className="relative w-full py-16 sm:py-24 bg-white text-[#000000] border-t border-black/10 overflow-hidden"
      aria-label="Walkline Footwear — Step Into Your Everyday"
    >
      <Container>
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16 space-y-3">
          <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#27409A]">
            Walkline • Step Into Your Everyday
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-[-0.03em] text-[#000000]">
            Crafted For Real Life
          </h2>
          <p className="text-sm text-black/60 max-w-lg mx-auto font-normal">
            Rooted in Bahadurgarh since {COMPANY_INFO.establishedYear}. Engineered for enduring performance, modern street aesthetics, and all-day comfort.
          </p>
        </div>

        {/* 4 Brand Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {brandPillars.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-neutral-50 border border-black/08 hover:border-[#27409A]/40 hover:shadow-editorial-sm transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="p-2.5 rounded-xl bg-white w-fit border border-black/08 mb-4">
                  {item.icon}
                </div>
                <div className="text-[10px] font-bold uppercase tracking-wider text-[#27409A]">
                  {item.subtitle}
                </div>
                <h3 className="text-base font-bold uppercase tracking-tight text-[#000000] mt-1 mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-black/60 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
