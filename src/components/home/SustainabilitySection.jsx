"use client";

import Image from "next/image";
import { SUSTAINABILITY_PILLARS } from "@/data/manufacturing";
import Container from "@/ui/Container";
import SectionHeading from "@/ui/SectionHeading";
import Reveal from "@/components/animations/Reveal";
import { Leaf, Recycle, Wind, Sparkles } from "lucide-react";

export default function SustainabilitySection() {
  const iconMap = [
    <Recycle key="0" className="w-5 h-5 text-[#4B7F60]" />,
    <Sparkles key="1" className="w-5 h-5 text-[#4B7F60]" />,
    <Leaf key="2" className="w-5 h-5 text-[#4B7F60]" />,
    <Wind key="3" className="w-5 h-5 text-[#4B7F60]" />,
  ];

  return (
    <section
      id="sustainability"
      className="relative w-full py-24 sm:py-32 bg-[#ECE9E2] text-[#111111] border-t border-[#111111]/10"
    >
      <Container>
        {/* Editorial Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end mb-16">
          <div className="lg:col-span-8">
            <SectionHeading
              overline="Conscious Manufacturing"
              title="BETTER BY DESIGN."
              subtitle="Optimizing raw material efficiency, product durability, and circular packaging workflows."
            />
          </div>
          <div className="lg:col-span-4 lg:text-right">
            <div className="text-xs font-mono uppercase tracking-[0.2em] text-[#6F6B65]">
              [ RESPONSIBLE FOOTWEAR ETHOS ]
            </div>
          </div>
        </div>

        {/* Highlight Banner & Schematic Graphic */}
        <div className="bg-[#121815] text-[#F5F3EF] rounded-3xl p-8 sm:p-12 lg:p-14 mb-16 border border-emerald-900/30">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-xs font-mono text-emerald-400">
                <Leaf className="w-3.5 h-3.5" />
                <span>MATERIAL LIFECYCLE FOCUS</span>
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold uppercase tracking-tight text-white leading-tight">
                Designed for Extended Lifespan & Reduced Offcut Waste
              </h3>
              <p className="text-sm sm:text-base text-[#B0AAA0] leading-relaxed max-w-xl">
                We believe true sustainability begins with product durability. By
                formulating higher-abrasion outsole compounds and utilizing computerized
                upper nesting, we significantly lower material scrap rates throughout production.
              </p>
            </div>

            <div className="lg:col-span-5 relative aspect-[4/3] rounded-2xl overflow-hidden bg-black/40 border border-white/10">
              <Image
                src="/images/sustainability/eco-materials.svg"
                alt="Walkline Sustainability Schematic"
                fill
                className="object-contain p-4"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
          </div>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SUSTAINABILITY_PILLARS.map((pillar, idx) => (
            <Reveal
              key={pillar.id}
              animation="slideUp"
              delay={idx * 0.08}
              className="bg-[#F5F3EF] border border-[#111111]/10 rounded-2xl p-6 sm:p-8 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2 rounded-lg bg-emerald-100/50">
                    {iconMap[idx % iconMap.length]}
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#6F6B65] bg-[#ECE9E2] px-2 py-0.5 rounded">
                    {pillar.metric}
                  </span>
                </div>
                <h4 className="text-lg font-bold uppercase tracking-tight text-[#111111] mb-2">
                  {pillar.title}
                </h4>
                <p className="text-xs sm:text-sm text-[#6F6B65] leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
