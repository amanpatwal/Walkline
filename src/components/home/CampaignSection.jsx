"use client";

import Image from "next/image";
import Container from "@/ui/Container";
import Button from "@/ui/Button";
import Reveal from "@/components/animations/Reveal";
import TextReveal from "@/components/animations/TextReveal";
import { CircularStamp, DropBadge } from "@/ui/Sticker";
import { assets } from "@/data/assets";
import { COMPANY_INFO } from "@/data/company";
import { ArrowUpRight, Flame, Sparkles, ShieldCheck, Feather } from "lucide-react";

export default function CampaignSection() {
  return (
    <div className="w-full space-y-0">
      {/* 1. EDITORIAL SPLIT: IMAGE + TEXT */}
      <EditorialImageText />

      {/* 2. EDITORIAL SPLIT: TEXT + IMAGE */}
      <EditorialTextImage />

      {/* 3. FULL-WIDTH HIGH-ENERGY CAMPAIGN MANIFESTO */}
      <FullWidthCampaign />
    </div>
  );
}

// 1. IMAGE + TEXT
function EditorialImageText() {
  return (
    <section className="relative w-full py-20 sm:py-28 bg-[#FFFFFF] text-[#111111] overflow-hidden border-b-2 border-black/10">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left: Large Editorial Campaign Visual */}
          <div className="lg:col-span-6 relative">
            <Reveal animation="slideUp" delay={0.1}>
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-[#F7F7F4] border-2 border-black shadow-[6px_6px_0px_0px_#000] p-6 sm:p-8 flex items-center justify-center">
                <div className="relative w-full h-full transform-gpu hover:scale-105 transition-transform duration-500">
                  <Image
                    src={assets.campaigns.lifestyle}
                    alt="Walkline Footwear Street Culture Editorial"
                    fill
                    className="object-contain p-4"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
            </Reveal>

            {/* Overlapping Floating Pill */}
            <div className="absolute -bottom-4 right-6 z-20 hidden sm:block">
              <DropBadge
                text="VERTEX SERIES // LIGHTER THAN AIR"
                variant="yellow"
                rotate="rotate-2"
              />
            </div>
          </div>

          {/* Right: Editorial Typography */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#3155FF]">
                [ EDITORIAL 01 // COMFORT ARCHITECTURE ]
              </span>
            </div>

            <TextReveal
              as="h2"
              className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-[-0.04em] leading-[0.92] text-[#111111]"
              text="BUILT FOR MOVEMENT. LIGHTER THAN AIR."
            />

            <Reveal animation="slideUp" delay={0.15}>
              <p className="text-base sm:text-lg font-bold text-[#555555] leading-relaxed max-w-xl">
                Every pair of Walkline footwear starts with an uncompromising mission:
                delivering all-day comfort without sacrificing contemporary street aesthetics.
                From ultra-lightweight direct injection soles to plush memory foam footbeds.
              </p>
            </Reveal>

            {/* Feature Pills */}
            <Reveal animation="slideUp" delay={0.25}>
              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-[#F7F7F4] border-2 border-black space-y-1 shadow-[2px_2px_0px_0px_#000]">
                  <Feather className="w-5 h-5 text-black" />
                  <div className="text-sm font-black uppercase text-black">Featherlight Sole</div>
                  <div className="text-xs text-[#666666]">Engineered to eliminate foot fatigue during all-day wear.</div>
                </div>

                <div className="p-4 rounded-2xl bg-[#F7F7F4] border-2 border-black space-y-1 shadow-[2px_2px_0px_0px_#000]">
                  <ShieldCheck className="w-5 h-5 text-black" />
                  <div className="text-sm font-black uppercase text-black">All-Day Certified</div>
                  <div className="text-xs text-[#666666]">Ergonomic contours calibrated for natural foot stride.</div>
                </div>
              </div>
            </Reveal>

            <Reveal animation="slideUp" delay={0.3}>
              <div className="pt-2">
                <Button
                  href="#products"
                  variant="yellow"
                  size="md"
                  icon="arrow-up-right"
                  className="font-black text-xs sm:text-sm"
                >
                  Explore Lightweight Lines
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}

// 2. TEXT + IMAGE
function EditorialTextImage() {
  return (
    <section className="relative w-full py-20 sm:py-28 bg-[#F7F7F4] text-[#111111] overflow-hidden border-b-2 border-black/10">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left: Editorial Copy */}
          <div className="lg:col-span-6 space-y-6 order-2 lg:order-1">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#FF4F7B]">
                [ EDITORIAL 02 // CRAFT STANDARD ]
              </span>
            </div>

            <TextReveal
              as="h2"
              className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-[-0.04em] leading-[0.92] text-[#111111]"
              text="METICULOUS DETAIL IN EVERY STEP."
            />

            <Reveal animation="slideUp" delay={0.15}>
              <p className="text-base sm:text-lg font-bold text-[#555555] leading-relaxed max-w-xl">
                Manufactured with pride in Bahadurgarh, India. From the metallic buckle detailing
                on our waterproof VRX series to the signature coral cushion soles on the Noir-05,
                our footwear is engineered to exceed expectations every single day.
              </p>
            </Reveal>

            {/* Verified Statement Pill */}
            <Reveal animation="slideUp" delay={0.25}>
              <div className="p-5 rounded-2xl bg-white border-2 border-black shadow-[3px_3px_0px_0px_#3155FF] space-y-2">
                <div className="text-sm font-black uppercase text-black leading-snug">
                  &ldquo;{COMPANY_INFO.brandStatement}&rdquo;
                </div>
                <div className="text-xs font-mono font-bold text-[#888888]">
                  — Plot No 362, MIE Part A, Bahadurgarh
                </div>
              </div>
            </Reveal>

            <Reveal animation="slideUp" delay={0.3}>
              <div className="pt-2">
                <Button
                  href="#collections"
                  variant="outline"
                  size="md"
                  showIcon={false}
                  className="font-black text-xs sm:text-sm bg-white"
                >
                  View All Collections
                </Button>
              </div>
            </Reveal>
          </div>

          {/* Right: Large Editorial Poster */}
          <div className="lg:col-span-6 relative order-1 lg:order-2">
            {/* Top Rotating Stamp */}
            <div className="absolute -top-8 -left-4 z-20 hidden sm:block">
              <CircularStamp text="WALKLINE FOOTWEAR • SINCE 2009 • " />
            </div>

            <Reveal animation="slideUp" delay={0.1}>
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-white border-2 border-black shadow-[6px_6px_0px_0px_#000] p-6 sm:p-8 flex items-center justify-center">
                <div className="relative w-full h-full transform-gpu hover:scale-105 transition-transform duration-500">
                  <Image
                    src={assets.campaigns.streetEdition}
                    alt="Walkline Footwear Craft Poster"
                    fill
                    className="object-contain p-4"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
            </Reveal>

            {/* Bottom Badge */}
            <div className="absolute -bottom-4 left-6 z-20">
              <DropBadge
                text="NOIR-05 & BARBIE-04 // DROP SPEC"
                variant="pink"
                rotate="-rotate-1"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

// 3. FULL-WIDTH HIGH-ENERGY MANIFESTO
function FullWidthCampaign() {
  return (
    <section className="relative w-full py-24 sm:py-32 bg-[#F4F000] text-[#111111] border-b-2 border-black overflow-hidden">
      {/* Background Halftone / Dot Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#111111_1.5px,transparent_1.5px)] [background-size:24px_24px] opacity-10 pointer-events-none" />

      <Container className="relative z-10 text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="inline-block">
            <DropBadge text="WALKLINE MANIFESTO // SINCE 2009" variant="black" rotate="-rotate-1" />
          </div>

          <TextReveal
            as="h2"
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-[-0.05em] leading-[0.90] text-[#111111]"
            text="WE MAKE FOOTWEAR FOR PEOPLE WHO NEVER STAND STILL."
          />

          <Reveal animation="slideUp" delay={0.2}>
            <p className="text-base sm:text-xl font-bold text-[#111111] max-w-2xl mx-auto leading-relaxed">
              From morning college sprints to midnight street runs — Walkline
              combines lightweight construction, all-day comfort, and modern
              Indian streetwear culture.
            </p>
          </Reveal>

          {/* Metric Badges */}
          <Reveal animation="slideUp" delay={0.28}>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <div className="bg-white px-5 py-3 rounded-2xl border-2 border-black shadow-[3px_3px_0px_0px_#000] text-center">
                <div className="text-2xl font-black font-mono text-black">2009</div>
                <div className="text-[10px] font-black uppercase tracking-wider text-[#555555]">
                  Established
                </div>
              </div>

              <div className="bg-white px-5 py-3 rounded-2xl border-2 border-black shadow-[3px_3px_0px_0px_#000] text-center">
                <div className="text-2xl font-black font-mono text-black">100%</div>
                <div className="text-[10px] font-black uppercase tracking-wider text-[#555555]">
                  Built in India
                </div>
              </div>

              <div className="bg-white px-5 py-3 rounded-2xl border-2 border-black shadow-[3px_3px_0px_0px_#000] text-center">
                <div className="text-2xl font-black font-mono text-[#3155FF]">4</div>
                <div className="text-[10px] font-black uppercase tracking-wider text-[#555555]">
                  Core Categories
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal animation="slideUp" delay={0.35}>
            <div className="pt-4">
              <Button
                href="#products"
                variant="dark"
                size="lg"
                icon="arrow-up-right"
                className="font-black text-sm px-8 py-4"
              >
                Shop All Drops
              </Button>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
