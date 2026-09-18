"use client";

import Image from "next/image";
import Container from "@/ui/Container";
import SectionHeading from "@/ui/SectionHeading";
import Reveal from "@/components/animations/Reveal";
import { ShieldCheck, Sparkles, CheckCircle2, Feather, HeartHandshake, MapPin } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";

export default function ManufacturingSection() {
  const verifiedPillars = [
    {
      id: "comfort-certified",
      title: "All-Day Comfort Certified",
      description: "From lightweight Vertex construction (lighter than air) to Frooti memory foam insoles and cushion soles for shock absorption.",
      badge: "SOURCE VERIFIED",
      icon: <Feather className="w-5 h-5 text-black" />,
      accent: "shadow-[4px_4px_0px_0px_#F4F000]",
    },
    {
      id: "made-in-india",
      title: "Made in India with Pride",
      description: "Designed, engineered, and manufactured in India with premium quality assured across men's, women's, and kids' footwear.",
      badge: "SINCE 2009",
      icon: <HeartHandshake className="w-5 h-5 text-black" />,
      accent: "shadow-[4px_4px_0px_0px_#FF4F7B]",
    },
    {
      id: "diverse-range",
      title: "4 Core Categories",
      description: "Specialized lines spanning Men's Sandals & Chappals, Women's Sneakers, Kids' Footwear, and Fashion Sandals.",
      badge: "DIVERSE PORTFOLIO",
      icon: <Sparkles className="w-5 h-5 text-black" />,
      accent: "shadow-[4px_4px_0px_0px_#3155FF]",
    },
    {
      id: "verified-address",
      title: "Bahadurgarh, India",
      description: `${COMPANY_INFO.contact.address.full}`,
      badge: "VERIFIED ADDRESS",
      icon: <MapPin className="w-5 h-5 text-black" />,
      accent: "shadow-[4px_4px_0px_0px_#A8E63D]",
    },
  ];

  return (
    <section
      id="manufacturing"
      className="relative w-full py-20 sm:py-28 bg-[#FFFFFF] text-[#111111] border-y-2 border-black/10"
    >
      <Container>
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-14">
          <div className="lg:col-span-8">
            <SectionHeading
              overline="Verified Craft // Quality Standard"
              title="MADE IN INDIA WITH PRIDE."
              subtitle="Engineered for all-day comfort without compromising on looks — Above & Beyond in every step."
              tagVariant="yellow"
            />
          </div>
          <div className="lg:col-span-4 lg:text-right">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F7F7F4] border-2 border-black shadow-[2px_2px_0px_0px_#000] text-xs font-black text-black">
              <ShieldCheck className="w-4 h-4 text-[#3155FF]" />
              <span>PREMIUM QUALITY ASSURED</span>
            </div>
          </div>
        </div>

        {/* Verified Craft & Infrastructure Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {verifiedPillars.map((pillar, idx) => (
            <Reveal key={pillar.id} animation="slideUp" delay={idx * 0.08}>
              <div
                className={`bg-[#F7F7F4] rounded-3xl p-6 sm:p-7 border-2 border-black ${pillar.accent} flex flex-col justify-between h-full transition-transform hover:-translate-y-1`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2 rounded-xl bg-white border border-black">
                    {pillar.icon}
                  </div>
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-white border border-black text-[#111111]">
                    {pillar.badge}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-black uppercase text-[#111111] leading-tight mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-xs font-bold text-[#555555] leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Manufacturing & Craft Overview */}
        <div className="bg-[#F7F7F4] border-2 border-black rounded-3xl p-8 sm:p-12 shadow-[5px_5px_0px_0px_#000]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Diagram */}
            <div className="lg:col-span-5 relative aspect-[4/3] rounded-2xl overflow-hidden bg-white border-2 border-black p-4">
              <Image
                src="/images/manufacturing/factory-scale.svg"
                alt="Walkline Footwear Engineering & Quality Blueprint"
                fill
                className="object-contain p-2"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>

            {/* Right Verified Capabilities */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs font-black uppercase tracking-[0.2em] text-[#3155FF]">
                  Footwear Engineering
                </span>
                <h3 className="text-2xl sm:text-3xl font-black uppercase text-black mt-1">
                  Meticulous Attention to Detail in Every Step
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-2xl border-2 border-black space-y-1">
                  <div className="flex items-center gap-2 text-xs font-black uppercase text-black">
                    <CheckCircle2 className="w-4 h-4 text-[#F4F000] fill-black" />
                    <span>Memory Foam & Cushion Soles</span>
                  </div>
                  <p className="text-xs text-[#666666] leading-relaxed">
                    Superior shock absorption in sneakers and soft memory foam insoles in kids footwear.
                  </p>
                </div>

                <div className="bg-white p-4 rounded-2xl border-2 border-black space-y-1">
                  <div className="flex items-center gap-2 text-xs font-black uppercase text-black">
                    <CheckCircle2 className="w-4 h-4 text-[#F4F000] fill-black" />
                    <span>Waterproof & Light Build</span>
                  </div>
                  <p className="text-xs text-[#666666] leading-relaxed">
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
