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
    cta: "EXPLORE MEN",
    image: assets.campaigns.comfortMoves,
    objectPosition: "center 30%",
    bgTone: "bg-[#251A14]",
  },
  {
    id: "women",
    title: "WOMEN",
    href: "/women",
    cta: "EXPLORE WOMEN",
    image: assets.campaigns.moveDifferent,
    objectPosition: "center center",
    bgTone: "bg-[#1E1B18]",
  },
  {
    id: "kids",
    title: "KIDS",
    href: "/kids",
    cta: "EXPLORE KIDS",
    image: assets.products.frooti,
    isProductStage: true,
    objectPosition: "center center",
    bgTone: "bg-[#253038]",
  },
  {
    id: "collections",
    title: "COLLECTIONS",
    href: "/collections",
    cta: "EXPLORE ALL",
    image: assets.campaigns.bounceSole,
    objectPosition: "center 35%",
    bgTone: "bg-[#1F2724]",
  },
];

export default function EditorialGrid() {
  return (
    <section
      aria-label="Walkline Footwear Categories — Editorial Collection Showcase"
      className="relative w-full bg-[#000000] overflow-hidden"
    >
      {/* ─── 2x2 Zero-Gap Editorial Static Grid ─── */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0 w-full">
        {EDITORIAL_TILES.map((tile, idx) => (
          <Link
            key={tile.id}
            href={tile.href}
            className={`group relative w-full h-[42vh] sm:h-[48vh] md:h-[30vw] min-h-[320px] max-h-[460px] overflow-hidden block select-none ${tile.bgTone} ${
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
              <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-[#2B353D] via-[#222B32] to-[#181F24] flex items-center justify-center p-4 sm:p-8">
                {/* Textured radial light */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_62%,rgba(255,255,255,0.14),transparent_65%)] pointer-events-none" />

                {/* Centered Product Shoe with ground shadow */}
                <div className="relative w-full max-w-[240px] sm:max-w-[280px] aspect-[4/3] flex items-center justify-center pt-4">
                  <Image
                    src={tile.image}
                    alt={`${tile.title} — Walkline Kids Footwear`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-contain p-2 group-hover:scale-[1.03] transition-transform duration-700 ease-out drop-shadow-[0_20px_28px_rgba(0,0,0,0.55)]"
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
                  className="object-cover group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                  style={{
                    objectPosition: tile.objectPosition,
                  }}
                />
              </div>
            )}

            {/* ─── Editorial Vignettes for Pure Legibility ─── */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/60 pointer-events-none" />

            {/* ─── Top-Centered Large Category Title ─── */}
            <div className="absolute top-4 sm:top-6 inset-x-0 z-10 text-center px-4">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.7)]">
                {tile.title}
              </h2>
            </div>

            {/* ─── Bottom-Right Explore CTA ─── */}
            <div className="absolute bottom-4 sm:bottom-5 right-4 sm:right-6 z-10">
              <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold uppercase tracking-widest text-white border-b border-white/60 pb-0.5 group-hover:border-white transition-all duration-300 drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]">
                <span>{tile.cta}</span>
                <ArrowRight className="w-3.5 h-3.5 text-white group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
