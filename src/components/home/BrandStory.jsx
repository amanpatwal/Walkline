"use client";

import Image from "next/image";
import Container from "@/ui/Container";
import SectionHeading from "@/ui/SectionHeading";
import Reveal from "@/components/animations/Reveal";
import { DropBadge } from "@/ui/Sticker";
import { ABOUT_CONTENT } from "@/data/about";
import { COMPANY_INFO } from "@/data/company";

export default function BrandStory() {
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
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-white border-2 border-black shadow-[5px_5px_0px_0px_#000] p-6">
                <Image
                  src="/images/story/brand-heritage.svg"
                  alt="Walkline Footwear Heritage Since 2009"
                  fill
                  className="object-contain p-4"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </Reveal>

            {/* Overlapping Badge Pill */}
            <div className="absolute -bottom-4 right-6 bg-[#F4F000] border-2 border-black rounded-2xl p-4 shadow-[3px_3px_0px_0px_#000] hidden sm:block">
              <div className="text-[10px] font-black uppercase tracking-wider text-black">
                ESTABLISHED 2009
              </div>
              <div className="text-sm font-black text-[#111111]">
                Made in India with Pride
              </div>
            </div>
          </div>

          {/* Right Editorial Copy from Source */}
          <div className="lg:col-span-6 space-y-6">
            <SectionHeading
              overline="Brand Heritage // Since 2009"
              title={ABOUT_CONTENT.heading}
              subtitle={ABOUT_CONTENT.lead}
              tagVariant="blue"
            />

            <Reveal animation="slideUp" delay={0.18}>
              <div className="space-y-4 text-sm sm:text-base font-bold text-[#555555] leading-relaxed">
                <p>
                  {ABOUT_CONTENT.statement}
                </p>
              </div>
            </Reveal>

            {/* Callout Quote Box */}
            <Reveal animation="slideUp" delay={0.25}>
              <div className="p-6 rounded-2xl bg-white border-2 border-black shadow-[3px_3px_0px_0px_#FF4F7B] space-y-2">
                <div className="text-lg font-black uppercase text-black leading-snug">
                  &ldquo;Above & Beyond in every step.&rdquo;
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
