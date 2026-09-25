"use client";

import Image from "next/image";
import Container from "@/ui/Container";
import { ShieldCheck, Sparkles, CheckCircle2, Feather, HeartHandshake, MapPin, Layers, Award } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";
import { assets } from "@/data/assets";

export default function ManufacturingSection() {
  const verifiedPillars = [
    {
      id: "comfort-certified",
      title: "All-Day Comfort Certified",
      description: "From lightweight Vertex construction (lighter than air) to Frooti memory foam insoles and cushion soles for shock absorption.",
      badge: "COMFORT SPEC",
      icon: <Feather className="w-5 h-5 text-[#9A6238]" />,
    },
    {
      id: "made-in-india",
      title: "Made in India with Pride",
      description: "Designed, engineered, and manufactured at our Bahadurgarh facility with consistent quality assured since 2009.",
      badge: "SINCE 2009",
      icon: <HeartHandshake className="w-5 h-5 text-[#9A6238]" />,
    },
    {
      id: "diverse-range",
      title: "4 Specialized Lines",
      description: "Dedicated production molds for Men's Sandals, Women's Sneakers, Kids' Footwear, and Fashion Sandals.",
      badge: "CORE PORTFOLIO",
      icon: <Sparkles className="w-5 h-5 text-[#9A6238]" />,
    },
    {
      id: "verified-address",
      title: "Bahadurgarh, Haryana",
      description: `${COMPANY_INFO.contact.address.full}`,
      badge: "FACTORY HUB",
      icon: <MapPin className="w-5 h-5 text-[#9A6238]" />,
    },
  ];

  return (
    <section
      id="manufacturing"
      className="relative w-full py-20 sm:py-28 bg-white text-[#24140D] border-y border-[#24140D]/10"
    >
      <Container>
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-14">
          <div className="lg:col-span-8">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] px-3.5 py-1.5 rounded-full bg-[#FAF7F1] border border-[#24140D]/15 text-[#5A351F]">
              Craftsmanship Standard
            </span>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-[#24140D] mt-3">
              Made In India With Pride
            </h2>
            <p className="text-sm sm:text-base text-[#5A351F]/80 mt-2.5 max-w-2xl leading-relaxed">
              Engineered for all-day comfort without compromising on style — Above & Beyond in every step since 2009.
            </p>
          </div>
          <div className="lg:col-span-4 lg:text-right">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FAF7F1] border border-[#24140D]/15 text-xs font-bold text-[#24140D]">
              <ShieldCheck className="w-4 h-4 text-[#9A6238]" />
              <span>PREMIUM QUALITY ASSURED</span>
            </div>
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {verifiedPillars.map((pillar) => (
            <div
              key={pillar.id}
              className="bg-[#FAF7F1] rounded-2xl p-6 border border-[#24140D]/08 hover:border-[#9A6238]/30 hover:shadow-editorial-sm transition-all duration-300 flex flex-col justify-between"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="p-2.5 rounded-xl bg-white border border-[#24140D]/10">
                  {pillar.icon}
                </div>
                <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-white border border-[#24140D]/10 text-[#8A6E58]">
                  {pillar.badge}
                </span>
              </div>

              <div>
                <h3 className="text-base sm:text-lg font-black uppercase text-[#24140D] leading-tight mb-2">
                  {pillar.title}
                </h3>
                <p className="text-xs text-[#5A351F]/80 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Manufacturing & Engineering Blueprint Card */}
        <div className="bg-[#FAF7F1] border border-[#24140D]/10 rounded-2xl p-6 sm:p-10 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Diagram */}
            <div className="lg:col-span-5 relative aspect-[4/3] rounded-xl overflow-hidden bg-white border border-[#24140D]/10 p-6 flex items-center justify-center">
              <Image
                src={assets.manufacturing.factoryScale}
                alt="Walkline Footwear Engineering & Quality Blueprint"
                fill
                className="object-contain p-4"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>

            {/* Right Capabilities */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#9A6238]">
                  Factory Floor Precision
                </span>
                <h3 className="text-2xl sm:text-3xl font-black uppercase text-[#24140D] mt-1">
                  Meticulous Attention To Every Stitch & Sole
                </h3>
                <p className="text-xs sm:text-sm text-[#5A351F]/80 mt-2 leading-relaxed">
                  Direct soling technology and multi-stage flex testing ensure each pair withstands rugged everyday Indian pavement conditions while remaining ultralight.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white p-4 sm:p-5 rounded-xl border border-[#24140D]/08 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-black uppercase text-[#24140D]">
                    <Layers className="w-4 h-4 text-[#9A6238]" />
                    <span>Memory Foam & Cushion Soles</span>
                  </div>
                  <p className="text-xs text-[#5A351F]/75 leading-relaxed">
                    Superior shock absorption in sneakers and soft memory foam insoles in kids footwear.
                  </p>
                </div>

                <div className="bg-white p-4 sm:p-5 rounded-xl border border-[#24140D]/08 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-black uppercase text-[#24140D]">
                    <Award className="w-4 h-4 text-[#9A6238]" />
                    <span>Waterproof & Light Build</span>
                  </div>
                  <p className="text-xs text-[#5A351F]/75 leading-relaxed">
                    Waterproof comfy-soft sandals and lightweight chappals lighter than air.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
