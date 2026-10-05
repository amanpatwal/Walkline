"use client";

import Image from "next/image";
import Link from "next/link";
import { assets } from "@/data/assets";

// ─── Hero — X Lows Midnight Campaign ─────────────────────────────────────────
// Full-viewport-width, edge-to-edge campaign hero.
// midnight.jpg contains the campaign artwork, text ("Dark. Bold. Unstoppable.",
// "X LOWS MIDNIGHT"), and button artwork for "SHOP MEN" and "SHOP WOMEN".
// Interactive button links are mapped directly over the image button positions.

export default function Hero() {
  return (
    <section
      className="relative w-full overflow-hidden bg-[#000000]"
      aria-label="Walkline Footwear — X Lows Midnight Campaign"
      style={{ marginTop: "72px" }}
    >
      {/* ─── Campaign Artwork — Native 2200:852 Aspect Ratio ─── */}
      <div className="relative w-full" style={{ aspectRatio: "2200 / 852" }}>
        <Image
          src={assets.hero.midnight}
          alt="X Lows Midnight — Walkline Footwear"
          fill
          priority
          quality={95}
          className="object-cover object-center hero-image"
          sizes="100vw"
        />

        {/* Screen-reader heading for SEO & accessibility */}
        <h1 className="sr-only">
          X Lows Midnight — Walkline Footwear
        </h1>

        {/* ─── Interactive Buttons mapped to image button coordinates ─── */}
        {/* SHOP MEN: x=234..613 (10.64%..27.87%), y=497..584 (58.33%..68.54%) */}
        <Link
          href="/men"
          aria-label="Shop Men"
          className="absolute cursor-pointer transition-all duration-200 hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-[#27409A] active:scale-[0.99] rounded-sm"
          style={{
            left: "10.64%",
            top: "58.33%",
            width: "17.23%",
            height: "10.21%",
          }}
        />

        {/* SHOP WOMEN: x=632..1011 (28.73%..45.96%), y=497..584 (58.33%..68.54%) */}
        <Link
          href="/women"
          aria-label="Shop Women"
          className="absolute cursor-pointer transition-all duration-200 hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-[#27409A] active:scale-[0.99] rounded-sm"
          style={{
            left: "28.73%",
            top: "58.33%",
            width: "17.23%",
            height: "10.21%",
          }}
        />
      </div>
    </section>
  );
}
