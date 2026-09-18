"use client";

import Container from "@/ui/Container";
import Button from "@/ui/Button";
import Reveal from "@/components/animations/Reveal";
import TextReveal from "@/components/animations/TextReveal";
import { DropBadge, CircularStamp } from "@/ui/Sticker";
import { Sparkles, Zap, ArrowUpRight } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="relative w-full py-20 sm:py-28 bg-[#F7F7F4] text-[#111111] overflow-hidden">
      <Container>
        <div className="relative rounded-3xl bg-[#F4F000] border-2 border-black shadow-[8px_8px_0px_0px_#000] p-8 sm:p-14 lg:p-20 text-center overflow-hidden flex flex-col items-center">
          {/* Halftone / Dot Grid */}
          <div className="absolute inset-0 bg-[radial-gradient(#111111_1.5px,transparent_1.5px)] [background-size:20px_20px] opacity-10 pointer-events-none" />

          {/* Floating Sticker Corner */}
          <div className="absolute top-6 right-6 hidden sm:block">
            <CircularStamp text="WALKLINE FOOTWEAR • COP THE DROP • " />
          </div>

          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <div className="inline-block">
              <DropBadge text="SPRING DROP // LIMITED ALLOCATION" variant="black" rotate="-rotate-2" />
            </div>

            <TextReveal
              as="h2"
              className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-[-0.05em] leading-[0.90] text-[#111111]"
              text="DON'T JUST WALK. MOVE LOUD."
            />

            <Reveal animation="slideUp" delay={0.15}>
              <p className="text-base sm:text-xl font-bold text-[#111111] max-w-xl mx-auto leading-relaxed">
                Step into high-rebound cloud-foam cushioning, engineered lasts, and
                undisputed Indian street authority.
              </p>
            </Reveal>

            <Reveal animation="slideUp" delay={0.25}>
              <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
                <Button
                  href="#products"
                  variant="dark"
                  size="lg"
                  icon="arrow-up-right"
                  className="font-black text-sm px-8 py-4 shadow-[4px_4px_0px_0px_#FFFFFF]"
                >
                  Shop The Drop
                </Button>

                <Button
                  href="#contact"
                  variant="white"
                  size="lg"
                  showIcon={false}
                  className="font-black text-sm px-8 py-4"
                >
                  Trade & Bulk Inquiries
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
