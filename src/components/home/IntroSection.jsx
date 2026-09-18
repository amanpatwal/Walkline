"use client";

import Container from "@/ui/Container";
import Reveal from "@/components/animations/Reveal";
import TextReveal from "@/components/animations/TextReveal";
import { ArrowRight, Compass, ShieldCheck, Zap } from "lucide-react";

export default function IntroSection() {
  return (
    <section
      id="intro"
      className="relative w-full py-24 sm:py-32 lg:py-40 bg-[#F5F3EF] text-[#111111] overflow-hidden"
    >
      <Container>
        {/* Overline & Category Tag */}
        <Reveal animation="slideUp" delay={0.1}>
          <div className="flex items-center gap-3 mb-8">
            <span className="w-2.5 h-2.5 rounded-full bg-[#C85237]" />
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#6F6B65]">
              Philosophy // Purpose
            </span>
          </div>
        </Reveal>

        {/* Large Asymmetrical Headline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-8 space-y-4">
            <TextReveal
              as="h2"
              className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold uppercase tracking-[-0.04em] leading-[0.95] text-[#111111]"
              text="MADE TO MOVE. DESIGNED TO ENDURE."
            />
          </div>

          <div className="lg:col-span-4 lg:pt-4 space-y-6">
            <Reveal animation="slideUp" delay={0.25}>
              <p className="text-base sm:text-lg text-[#4A453F] leading-relaxed font-normal">
                Walkline redefines Indian footwear manufacturing by combining
                industrial-scale engineering with modern minimalist aesthetics.
                Every contour is crafted to support natural biomechanics across
                everyday terrain.
              </p>
            </Reveal>

            <Reveal animation="slideUp" delay={0.35}>
              <div className="pt-4 border-t border-[#111111]/10 flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-wider text-[#6F6B65]">
                  Engineered in India
                </span>
                <span className="text-xs font-mono text-[#C85237]">
                  V.01 / 2026
                </span>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Editorial Feature Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 pt-16 border-t border-[#111111]/10">
          <Reveal animation="slideUp" delay={0.15} className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-[#6F6B65]">01 // ERGONOMICS</span>
              <Compass className="w-5 h-5 text-[#C85237]" />
            </div>
            <h3 className="text-xl font-bold uppercase tracking-tight text-[#111111]">
              Anatomical Footbeds
            </h3>
            <p className="text-sm text-[#6F6B65] leading-relaxed">
              Engineered arch distribution that reduces localized foot fatigue
              during prolonged standing and urban commuting.
            </p>
          </Reveal>

          <Reveal animation="slideUp" delay={0.25} className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-[#6F6B65]">02 // CUSHION</span>
              <Zap className="w-5 h-5 text-[#C85237]" />
            </div>
            <h3 className="text-xl font-bold uppercase tracking-tight text-[#111111]">
              High-Rebound Formulations
            </h3>
            <p className="text-sm text-[#6F6B65] leading-relaxed">
              Custom-blended polymeric compounds that retain over 90% of their
              cushioning elasticity through thousands of impact cycles.
            </p>
          </Reveal>

          <Reveal animation="slideUp" delay={0.35} className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-[#6F6B65]">03 // RESILIENCE</span>
              <ShieldCheck className="w-5 h-5 text-[#C85237]" />
            </div>
            <h3 className="text-xl font-bold uppercase tracking-tight text-[#111111]">
              Direct Sole Injection
            </h3>
            <p className="text-sm text-[#6F6B65] leading-relaxed">
              Eliminating adhesive failure through molten injection bonding,
              yielding a seamless and highly durable structural connection.
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
