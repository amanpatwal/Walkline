"use client";

import Image from "next/image";
import Container from "@/ui/Container";
import Button from "@/ui/Button";
import Reveal from "@/components/animations/Reveal";
import TextReveal from "@/components/animations/TextReveal";
import { CircularStamp, DropBadge } from "@/ui/Sticker";
import { Sparkles, Zap, Flame } from "lucide-react";

export default function CampaignSection() {
  return (
    <section className="relative w-full py-24 sm:py-32 bg-[#F4F000] text-[#111111] border-b-2 border-black overflow-hidden">
      {/* Background Halftone / Dot Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#111111_1.5px,transparent_1.5px)] [background-size:24px_24px] opacity-10 pointer-events-none" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Campaign Typography Block */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-3">
              <DropBadge text="WALKLINE MANIFESTO // 01" variant="black" rotate="-rotate-1" />
            </div>

            <TextReveal
              as="h2"
              className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-[-0.05em] leading-[0.90] text-[#111111]"
              text="WE MAKE SHOES FOR PEOPLE WHO NEVER STAND STILL."
            />

            <Reveal animation="slideUp" delay={0.2}>
              <p className="text-base sm:text-xl font-bold text-[#111111] max-w-xl leading-snug">
                From morning college sprints to midnight street runs, Walkline
                pairs ultra-responsive direct injection soles with bold 90s retro
                streetwear silhouettes.
              </p>
            </Reveal>

            {/* Campaign Metrics Pills */}
            <Reveal animation="slideUp" delay={0.3}>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4">
                <div className="bg-white p-4 rounded-2xl border-2 border-black shadow-[3px_3px_0px_0px_#000]">
                  <div className="text-2xl sm:text-3xl font-black font-mono text-black">240g</div>
                  <div className="text-[11px] font-black uppercase tracking-wider text-[#555555]">Featherlight Sole</div>
                </div>

                <div className="bg-white p-4 rounded-2xl border-2 border-black shadow-[3px_3px_0px_0px_#000]">
                  <div className="text-2xl sm:text-3xl font-black font-mono text-black">100%</div>
                  <div className="text-[11px] font-black uppercase tracking-wider text-[#555555]">Built in India</div>
                </div>

                <div className="bg-white p-4 rounded-2xl border-2 border-black shadow-[3px_3px_0px_0px_#000] col-span-2 sm:col-span-1">
                  <div className="text-2xl sm:text-3xl font-black font-mono text-[#FF4F7B]">24/7</div>
                  <div className="text-[11px] font-black uppercase tracking-wider text-[#555555]">All-Terrain Drip</div>
                </div>
              </div>
            </Reveal>

            <Reveal animation="slideUp" delay={0.35}>
              <div className="pt-2">
                <Button
                  href="#products"
                  variant="dark"
                  size="lg"
                  icon="arrow-up-right"
                  className="font-black text-sm"
                >
                  Explore All Models
                </Button>
              </div>
            </Reveal>
          </div>

          {/* Right Visual Poster Stage */}
          <div className="lg:col-span-5 relative">
            {/* Top Rotating Stamp */}
            <div className="absolute -top-8 -left-6 z-20 hidden sm:block">
              <CircularStamp text="WALKLINE ORIGINALS • BUILT FOR MOVEMENT • " />
            </div>

            {/* Poster Card */}
            <Reveal animation="slideUp" delay={0.15}>
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-white border-2 border-black shadow-[6px_6px_0px_0px_#000] p-6 flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-black bg-[#A8E63D] px-2.5 py-0.5 rounded-full border border-black">
                    CAMPAIGN // 2026
                  </span>
                  <Flame className="w-5 h-5 text-[#FF4F7B]" />
                </div>

                <div className="relative w-full h-[65%] my-auto">
                  <Image
                    src="/images/campaign/lifestyle-campaign.svg"
                    alt="Walkline Streetwear Campaign Poster"
                    fill
                    className="object-contain"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                </div>

                <div className="border-t-2 border-black pt-3 flex items-center justify-between text-xs font-black uppercase">
                  <span>SERIES // AEON V2</span>
                  <span className="text-[#3155FF]">STREET EDITION</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
