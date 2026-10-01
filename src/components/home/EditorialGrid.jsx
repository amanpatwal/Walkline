"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { assets } from "@/data/assets";

const EDITORIAL_TILES = [
  {
    id: "men",
    title: "MEN",
    href: "/men",
    cta: "SHOP MEN",
    image: assets.campaigns.comfortMoves,
    objectPosition: "center 30%",
    bgTone: "bg-[#251A14]",
  },
  {
    id: "women",
    title: "WOMEN",
    href: "/women",
    cta: "SHOP WOMEN",
    image: assets.campaigns.moveDifferent,
    objectPosition: "center center",
    bgTone: "bg-[#1E1B18]",
  },
  {
    id: "kids",
    title: "KIDS",
    href: "/kids",
    cta: "SHOP KIDS",
    image: assets.products.frooti,
    isProductStage: true,
    objectPosition: "center center",
    bgTone: "bg-[#253038]",
  },
  {
    id: "sandals",
    title: "SANDALS",
    href: "/sandals",
    cta: "SHOP SANDALS",
    image: assets.campaigns.bounceSole,
    objectPosition: "center 35%",
    bgTone: "bg-[#1F2724]",
  },
];

export default function EditorialGrid() {
  return (
    <section
      aria-label="Walkline Footwear Categories — Editorial Collection Grid"
      className="relative w-full bg-[#24140D] overflow-hidden"
    >
      {/* ─── 2x2 Zero-Gap Editorial Grid ─── */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0 w-full">
        {EDITORIAL_TILES.map((tile, idx) => (
          <Link
            key={tile.id}
            href={tile.href}
            className={`group relative w-full h-[65vh] sm:h-[70vh] md:h-[46vw] min-h-[460px] max-h-[680px] overflow-hidden block select-none ${tile.bgTone} ${
              // subtle divider borders between cells
              idx === 0
                ? "md:border-r md:border-b border-white/10"
                : idx === 1
                ? "md:border-b border-white/10"
                : idx === 2
                ? "md:border-r border-white/10"
                : ""
            }`}
          >
            {/* ─── Artwork & Stage ─── */}
            {tile.isProductStage ? (
              // Dedicated studio stage for Kids
              <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-[#2B353D] via-[#222B32] to-[#181F24] flex items-center justify-center p-8 sm:p-14">
                {/* Textured radial light */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_62%,rgba(255,255,255,0.14),transparent_65%)] pointer-events-none" />

                {/* Centered Product Shoe with ground shadow */}
                <div className="relative w-full max-w-[400px] aspect-[4/3] flex items-center justify-center pt-8">
                  <Image
                    src={tile.image}
                    alt={`${tile.title} — Walkline Kids Footwear`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-contain p-4 group-hover:scale-[1.05] transition-transform duration-700 ease-out drop-shadow-[0_24px_36px_rgba(0,0,0,0.55)]"
                  />
                </div>
              </div>
            ) : (
              // Full-Bleed Campaign Photography
              <div className="absolute inset-0 w-full h-full overflow-hidden">
                <Image
                  src={tile.image}
                  alt={`${tile.title} — Walkline Footwear`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover group-hover:scale-[1.04] transition-transform duration-700 ease-out"
                  style={{
                    objectPosition: tile.objectPosition,
                  }}
                />
              </div>
            )}

            {/* ─── Editorial Vignettes for Pure Legibility ─── */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/60 pointer-events-none" />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-500 pointer-events-none" />

            {/* ─── Top-Centered Large Category Title (Exact Comet Styling) ─── */}
            <div className="absolute top-8 sm:top-12 inset-x-0 z-10 text-center px-4">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white group-hover:tracking-normal transition-all duration-500 drop-shadow-[0_4px_16px_rgba(0,0,0,0.7)]">
                {tile.title}
              </h2>
            </div>

            {/* ─── Bottom-Right "SHOP NOW →" CTA (Exact Reference Placement) ─── */}
            <div className="absolute bottom-6 sm:bottom-8 right-6 sm:right-8 z-10">
              <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-black uppercase tracking-widest text-white border-b-2 border-white pb-0.5 group-hover:border-[#C69A6B] group-hover:text-[#FAF7F1] transition-all duration-300 drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]">
                <span>{tile.cta}</span>
                <ArrowRight className="w-3.5 h-3.5 text-white group-hover:text-[#C69A6B] group-hover:translate-x-1.5 transition-transform duration-300" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
