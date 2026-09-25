"use client";

import Image from "next/image";
import { assets } from "@/data/assets";

export default function PromotionalBanner() {
  const handleClick = () => {
    const el = document.getElementById("products");
    if (el) {
      if (window.__lenis) {
        window.__lenis.scrollTo(el, { offset: -76 });
      } else {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section
      id="promotional-banner"
      className="relative w-full bg-[#FAF7F1] py-4 sm:py-6 overflow-hidden cursor-pointer group"
      onClick={handleClick}
      aria-label="Promotional Campaign — Comfy Sold Out, Explore Fan Favourites"
    >
      <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-8">
        <div className="relative w-full aspect-[21/6] sm:aspect-[21/5] lg:aspect-[21/4] max-h-[320px] rounded-2xl overflow-hidden shadow-editorial-md border border-[#24140D]/10 bg-[#171412]">
          <Image
            src={assets.hero.soldOut}
            alt="Sorry You Missed Comfy Sold Out — Explore Our Fan Favourites Now"
            fill
            sizes="(max-width: 1920px) 100vw, 1920px"
            className="object-cover object-center group-hover:scale-[1.015] transition-transform duration-500 ease-out"
          />
          {/* Subtle click cue */}
          <div className="absolute inset-0 bg-[#24140D]/0 group-hover:bg-[#24140D]/05 transition-colors duration-300" />
        </div>
      </div>
    </section>
  );
}
