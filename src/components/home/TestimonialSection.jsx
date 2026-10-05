"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import { TESTIMONIALS, VERIFIED_TESTIMONIALS_AVAILABLE } from "@/data/testimonials";
import Container from "@/ui/Container";

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
      className="relative w-full py-20 sm:py-28 bg-white text-[#000000] overflow-hidden border-t border-black/10"
    >
      <Container>
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] px-3.5 py-1.5 rounded-full bg-neutral-100 border border-black/10 text-[#27409A]">
              Community Voices
            </span>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-[#000000] mt-3">
              Step Into Everyday Comfort
            </h2>
            <p className="text-sm sm:text-base text-black/60 mt-2 max-w-xl">
              Verified feedback from daily commuters, professionals, and families across India.
            </p>
          </div>

          {/* Slider Navigation Arrows */}
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrev}
              className="p-3 rounded-full bg-white border border-black/15 text-[#000000] hover:bg-[#000000] hover:text-white transition-all shadow-editorial-sm cursor-pointer"
              aria-label="Previous Review"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              className="p-3 rounded-full bg-white border border-black/15 text-[#000000] hover:bg-[#000000] hover:text-white transition-all shadow-editorial-sm cursor-pointer"
              aria-label="Next Review"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Editorial Carousel Card */}
        <div className="relative">
          <div className="bg-white rounded-3xl border border-black/10 p-8 sm:p-12 lg:p-14 shadow-editorial-sm transition-all duration-300">
            <div className="flex items-start justify-between gap-4 mb-6">
              <div className="flex items-center gap-1">
                {Array.from({ length: activeReview.rating || 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-[#27409A] fill-[#27409A]" />
                ))}
              </div>

              <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-neutral-100 text-[#27409A] border border-black/10">
                {activeReview.tag || "VERIFIED"}
              </span>
            </div>

            <blockquote className="text-xl sm:text-2xl md:text-3xl font-black uppercase tracking-tight text-[#000000] leading-snug mb-8">
              &ldquo;{activeReview.quote}&rdquo;
            </blockquote>

            <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-black/08">
              <div>
                <div className="text-sm sm:text-base font-black uppercase text-[#000000]">
                  {activeReview.author}{" "}
                  {activeReview.handle && (
                    <span className="text-xs font-medium text-[#27409A]">
                      ({activeReview.handle})
                    </span>
                  )}
                </div>
                <div className="text-xs text-black/50 mt-0.5">
                  {activeReview.city}, India • Verified on {activeReview.model}
                </div>
              </div>

              <div className="flex items-center gap-2">
                {TESTIMONIALS.map((_, dotIdx) => (
                  <button
                    key={dotIdx}
                    onClick={() => setCurrentIndex(dotIdx)}
                    className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                      dotIdx === currentIndex
                        ? "w-8 bg-[#27409A]"
                        : "w-2 bg-[#27409A]/20 hover:bg-[#27409A]/50"
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
