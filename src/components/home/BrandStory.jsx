"use client";

import Image from "next/image";
import Container from "@/ui/Container";
import SectionHeading from "@/ui/SectionHeading";
import Reveal from "@/components/animations/Reveal";
import { DropBadge } from "@/ui/Sticker";
import { ABOUT_CONTENT } from "@/data/about";
import { COMPANY_INFO } from "@/data/company";
import { SUSTAINABILITY_CONTENT } from "@/data/sustainability";
import { assets } from "@/data/assets";
import { HeartHandshake, ShieldCheck, Feather, MapPin } from "lucide-react";

export default function BrandStory() {
  const pillars = [
    {
      title: "Comfort & Fit",
      desc: "Engineered for all-day wearability with cushion sole shock absorption and memory foam insoles.",
      icon: <Feather className="w-5 h-5 text-black" />,
    },
    {
      title: "Made in India",
      desc: "Designed and manufactured in India with premium quality assured across all ranges.",
      icon: <HeartHandshake className="w-5 h-5 text-black" />,
    },
    {
      title: "Durable Construction",
      desc: "Waterproof and resilient soling compounds engineered to extend footwear life cycle.",
      icon: <ShieldCheck className="w-5 h-5 text-black" />,
    },
  ];

  return (
    <section
      id="about"
      className="relative w-full py-20 sm:py-28 bg-[#F7F7F4] text-[#111111]"
    >
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Visual Artwork */}
          <div className="lg:col-span-6 relative">
            <Reveal animation="slideUp" delay={0.1}>
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-white border-2 border-black shadow-[6px_6px_0px_0px_#000] p-6 sm:p-8 flex items-center justify-center">
                <Image
                  src={assets.story.heritage}
                  alt="Walkline Footwear Heritage Since 2009"
                  fill
                  className="object-contain p-4"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </Reveal>

            {/* Overlapping Badge Pill */}
            <div className="absolute -bottom-5 right-6 bg-[#F4F000] border-2 border-black rounded-2xl p-4 shadow-[3px_3px_0px_0px_#000] hidden sm:block z-10">
              <div className="text-[10px] font-black uppercase tracking-wider text-black">
                ESTABLISHED {COMPANY_INFO.establishedYear}
              </div>
              <div className="text-sm font-black text-[#111111] flex items-center gap-1.5 mt-0.5">
                <MapPin className="w-3.5 h-3.5 text-black" />
                <span>Bahadurgarh, India</span>
              </div>
            </div>
          </div>

          {/* Right Editorial Copy from Verified Source */}
          <div className="lg:col-span-6 space-y-6">
            <SectionHeading
              overline={`Brand Heritage // Since ${COMPANY_INFO.establishedYear}`}
              title={ABOUT_CONTENT.heading}
              subtitle={ABOUT_CONTENT.lead}
              tagVariant="blue"
            />

            <Reveal animation="slideUp" delay={0.15}>
              <div className="space-y-4 text-sm sm:text-base font-bold text-[#555555] leading-relaxed">
                <p>{ABOUT_CONTENT.statement}</p>
              </div>
            </Reveal>

            {/* Verified Pillars */}
            <Reveal animation="slideUp" delay={0.22}>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                {pillars.map((pil, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-white border-2 border-black space-y-1.5 shadow-[2px_2px_0px_0px_#000]"
                  >
                    <div className="p-1.5 rounded-lg bg-[#F7F7F4] w-fit border border-black/10">
                      {pil.icon}
                    </div>
                    <div className="text-xs font-black uppercase text-black">
                      {pil.title}
                    </div>
                    <div className="text-[11px] text-[#666666] leading-tight">
                      {pil.desc}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* Callout Quote Box */}
            <Reveal animation="slideUp" delay={0.28}>
              <div className="p-6 rounded-2xl bg-white border-2 border-black shadow-[3px_3px_0px_0px_#FF4F7B] space-y-1.5">
                <div className="text-base sm:text-lg font-black uppercase text-black leading-snug">
                  &ldquo;{COMPANY_INFO.tagline}&rdquo;
                </div>
                <div className="text-xs font-mono font-bold text-[#888888]">
                  — {COMPANY_INFO.brandName} Philosophy
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
