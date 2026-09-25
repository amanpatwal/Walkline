"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ArrowRight } from "lucide-react";
import { assets } from "@/data/assets";

export default function Hero() {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const panelRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!containerRef.current || prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Subtle image entrance: slight scale down
      gsap.fromTo(
        imageRef.current,
        { scale: 1.04, opacity: 0.85 },
        { scale: 1, opacity: 1, duration: 1.6, ease: "power2.out" }
      );
      // CTA panel rises up
      gsap.fromTo(
        panelRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.9, delay: 0.5, ease: "power3.out" }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-[#FAF7F1] overflow-hidden pt-[72px] sm:pt-[80px]"
      aria-label="Walkline Footwear Campaign Hero — Step Into Confidence"
    >
      {/* ─── Campaign Artwork — Full Bleed, No text overlay ─── */}
      <div ref={imageRef} className="relative w-full aspect-[16/9] sm:aspect-[21/9] lg:aspect-[25/9] max-h-[700px] min-h-[260px] overflow-hidden select-none">
        <Image
          src={assets.hero.confidence}
          alt="Walkline Footwear — Step Into Confidence. Crafted for comfort, designed for impact."
          fill
          priority
          quality={95}
          className="object-cover object-[center_top] sm:object-center"
          sizes="100vw"
        />
        {/* Very light bottom vignette only — does NOT cover artwork text */}
        <div className="absolute inset-x-0 bottom-0 h-[25%] bg-gradient-to-t from-[#FAF7F1] to-transparent pointer-events-none" />
      </div>

      {/* ─── CTA Panel — sits BELOW the artwork in clear cream space ─── */}
      <div
        ref={panelRef}
        className="relative bg-[#FAF7F1] px-5 sm:px-10 lg:px-16 py-7 sm:py-9"
      >
        {/* Screen-reader h1 — artwork already contains visible heading typography */}
        <h1 className="sr-only">
          Step Into Confidence — Walkline Footwear. Crafted for comfort, designed for impact.
        </h1>

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 max-w-[1440px] mx-auto">
          {/* Tagline */}
          <div>
            <p className="text-[11px] uppercase tracking-[0.2em] font-bold text-[#9A6238] mb-1">
              Above &amp; Beyond — Est. 2009
            </p>
            <p className="text-base sm:text-lg font-bold text-[#24140D] tracking-tight max-w-md">
              Premium footwear crafted for comfort and every step.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-row items-center gap-3 shrink-0">
            <Link
              href="/men"
              className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-lg bg-[#321D12] text-[#FAF7F1] text-[11px] font-bold uppercase tracking-[0.12em] hover:bg-[#5A351F] transition-all duration-300 shadow-[0_4px_14px_rgba(50,29,18,0.25)]"
            >
              <span>Shop Men</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#C69A6B] group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/women"
              className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-lg border border-[#321D12]/25 bg-white text-[#24140D] text-[11px] font-bold uppercase tracking-[0.12em] hover:bg-[#FAF7F1] hover:border-[#321D12]/60 transition-all duration-300"
            >
              <span>Shop Women</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#9A6238] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
            </Link>

            <Link
              href="/collections"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-3.5 rounded-lg text-[11px] font-bold uppercase tracking-[0.12em] text-[#5A351F] hover:text-[#24140D] transition-colors"
            >
              All Collections
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
