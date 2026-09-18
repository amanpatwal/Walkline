"use client";

import Image from "next/image";
import { CRAFTSMANSHIP_STEPS } from "@/data/manufacturing";
import Container from "@/ui/Container";
import SectionHeading from "@/ui/SectionHeading";
import Reveal from "@/components/animations/Reveal";

export default function CraftsmanshipSection() {
  return (
    <section
      id="craftsmanship"
      className="relative w-full py-24 sm:py-32 bg-[#F5F3EF] text-[#111111]"
    >
      <Container>
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <SectionHeading
            overline="Process & Engineering"
            title="THE MAKING OF A WALKLINE"
            subtitle="From anatomical blueprint to high-resilience final assembly."
          />
          <div className="text-xs font-mono uppercase text-[#6F6B65] tracking-widest hidden md:block">
            [ 04 PHASE WORKFLOW ]
          </div>
        </div>

        {/* Step-by-Step Editorial Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {CRAFTSMANSHIP_STEPS.map((step, idx) => (
            <Reveal
              key={step.step}
              animation="slideUp"
              delay={idx * 0.1}
              className="bg-[#ECE9E2] border border-[#111111]/10 rounded-3xl p-8 sm:p-10 flex flex-col justify-between group hover:border-[#111111]/30 transition-all duration-500"
            >
              <div>
                {/* Step Index & Phase */}
                <div className="flex items-center justify-between pb-6 border-b border-[#111111]/10 mb-6">
                  <span className="text-3xl font-extrabold font-mono text-[#C85237]">
                    {step.step}
                  </span>
                  <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#6F6B65]">
                    {step.phase}
                  </span>
                </div>

                {/* Title & Description */}
                <h3 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-[#111111] mb-3">
                  {step.title}
                </h3>
                <p className="text-sm sm:text-base text-[#6F6B65] leading-relaxed mb-6">
                  {step.description}
                </p>
              </div>

              {/* Technical Schematic / Graphic Preview */}
              <div className="space-y-4 pt-4 border-t border-[#111111]/10">
                <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden bg-[#111111]">
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="flex items-center justify-between text-xs font-mono text-[#8E8A83]">
                  <span>TECHNICAL STANDARD</span>
                  <span className="text-[#111111] font-semibold">{step.spec}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
