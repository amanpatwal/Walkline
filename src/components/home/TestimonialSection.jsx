"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import { TESTIMONIALS, VERIFIED_TESTIMONIALS_AVAILABLE } from "@/data/testimonials";
import Container from "@/ui/Container";
import SectionHeading from "@/ui/SectionHeading";

export default function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Source-of-truth guard: If no verified testimonials exist, do not display fabricated reviews
  if (!VERIFIED_TESTIMONIALS_AVAILABLE || !TESTIMONIALS || TESTIMONIALS.length === 0) {
    return null;
  }

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const activeReview = TESTIMONIALS[currentIndex];

  return (
    <section
      id="testimonials"
      className="relative w-full py-20 sm:py-28 bg-[#F7F7F4] text-[#111111] overflow-hidden"
    >
      <Container>
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeading
            overline="Community Feedback // Verified Drops"
            title="STREET TESTED & APPROVED"
            subtitle="Verified feedback from daily commuters, sneaker lovers, and streetwear stylists across India."
            tagVariant="green"
          />

          {/* Slider Navigation Arrows */}
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrev}
              className="p-3 rounded-full bg-white border-2 border-black text-black hover:bg-[#F4F000] transition-all shadow-[2px_2px_0px_0px_#000] cursor-pointer"
              aria-label="Previous Review"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="p-3 rounded-full bg-white border-2 border-black text-black hover:bg-[#F4F000] transition-all shadow-[2px_2px_0px_0px_#000] cursor-pointer"
              aria-label="Next Review"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Editorial Carousel Card */}
        <div className="relative">
          <div className="bg-white rounded-3xl border-2 border-black p-8 sm:p-12 lg:p-14 shadow-[6px_6px_0px_0px_#000] transition-all duration-300">
            <div className="flex items-start justify-between gap-4 mb-6">
              <div className="flex items-center gap-1">
                {Array.from({ length: activeReview.rating || 5 }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-[#F4F000] fill-[#F4F000]" />
                ))}
              </div>

              <span className="text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-full bg-[#F4F000] text-black border border-black shadow-[1.5px_1.5px_0px_0px_#000]">
                {activeReview.tag || "VERIFIED"}
              </span>
            </div>

            <blockquote className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black uppercase tracking-tight text-black leading-snug mb-8">
              &ldquo;{activeReview.quote}&rdquo;
            </blockquote>

            <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t-2 border-black/10">
              <div>
                <div className="text-base font-black uppercase text-black">
                  {activeReview.author}{" "}
                  {activeReview.handle && (
                    <span className="text-xs font-mono font-bold text-[#888888]">
                      ({activeReview.handle})
                    </span>
                  )}
                </div>
                <div className="text-xs font-bold text-[#666666]">
                  {activeReview.city}, India • Verified on {activeReview.model}
                </div>
              </div>

              <div className="flex items-center gap-2">
                {TESTIMONIALS.map((_, dotIdx) => (
                  <button
                    key={dotIdx}
                    onClick={() => setCurrentIndex(dotIdx)}
                    className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                      dotIdx === currentIndex
                        ? "w-8 bg-[#111111]"
                        : "w-2.5 bg-black/20 hover:bg-black/50"
                    }`}
                    aria-label={`Go to slide ${dotIdx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
