"use client";

import Image from "next/image";
import { assets } from "@/data/assets";

// ─── Sold-Out Promotional Banner — Full Viewport Width ───────────────────────
// 1900×328px banner. No max-width, no rounded corners, no side margins.
// Clicks smooth-scroll to the product carousel.

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
      className="relative w-full overflow-hidden cursor-pointer group bg-[#000000]"
      onClick={handleClick}
      aria-label="Promotional Campaign — Comfy Sold Out, Explore Fan Favourites"
    >
      {/* Full-bleed image — 1900×328 native aspect ratio preserved */}
      <div
        className="relative w-full"
        style={{ aspectRatio: "1900 / 328" }}
      >
        <Image
          src={assets.hero.soldOut}
          alt="Sorry You Missed Comfy Sold Out — Explore Our Fan Favourites Now"
          fill
          sizes="100vw"
          className="object-cover object-center group-hover:scale-[1.012] transition-transform duration-500 ease-out"
        />
        {/* Subtle hover darkening */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 pointer-events-none" />
      </div>
    </section>
  );
}
