"use client";

import Image from "next/image";
import { ArrowUpRight, Check, Sparkles } from "lucide-react";
import { COLLECTIONS } from "@/data/collections";
import Container from "@/ui/Container";
import SectionHeading from "@/ui/SectionHeading";
import Reveal from "@/components/animations/Reveal";
import { cn } from "@/lib/utils";

export default function CollectionsSection() {
  return (
    <section
      id="collections"
      className="relative w-full py-20 sm:py-28 bg-[#FFFFFF] text-[#111111] border-y-2 border-black/10"
    >
      <Container>
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <SectionHeading
            overline="Four Core Categories // Indian Streetwear"
            title="PRODUCT CATEGORIES"
            subtitle="Explore our diverse range crafted with premium materials and meticulous attention to detail."
            tagVariant="pink"
          />
          <div className="hidden md:flex items-center gap-2 text-xs font-mono font-bold uppercase text-[#888888]">
            <Sparkles className="w-4 h-4 text-[#F4F000]" />
            <span>[ VERIFIED WALKLINE RANGES ]</span>
          </div>
        </div>

        {/* Editorial Asymmetric Grid for 4 Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
          {/* Tile 1: Men's Sandals & Chappals - Large Editorial Tile (7 cols) */}
          <div className="lg:col-span-7">
            <EditorialCategoryCard
              collection={COLLECTIONS[0]}
              aspect="aspect-[16/10]"
              isLarge
            />
          </div>

          {/* Tile 2: Women's Sneakers - Compact Editorial Tile (5 cols) */}
          <div className="lg:col-span-5">
            <EditorialCategoryCard
              collection={COLLECTIONS[1]}
              aspect="aspect-[16/10]"
            />
          </div>

          {/* Tile 3: Fashion Sandals - Compact Editorial Tile (5 cols) */}
          <div className="lg:col-span-5">
            <EditorialCategoryCard
              collection={COLLECTIONS[2]}
              aspect="aspect-[16/10]"
            />
          </div>

          {/* Tile 4: Kids' Footwear - Large Editorial Tile (7 cols) */}
          <div className="lg:col-span-7">
            <EditorialCategoryCard
              collection={COLLECTIONS[3]}
              aspect="aspect-[16/10]"
              isLarge
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

function EditorialCategoryCard({ collection, aspect = "aspect-[16/10]", isLarge = false }) {
  const handleCategoryClick = () => {
    const el = document.getElementById("products");
    if (el) {
      if (window.__lenis) {
        window.__lenis.scrollTo(el, { offset: -70 });
      } else {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <Reveal animation="slideUp" delay={0.06}>
      <div
        onClick={handleCategoryClick}
        className={cn(
          "group relative w-full rounded-3xl overflow-hidden bg-[#F7F7F4] border-2 border-black shadow-[4px_4px_0px_0px_#000] hover:shadow-[7px_7px_0px_0px_#000] flex flex-col justify-between p-6 sm:p-8 transition-all duration-300 cursor-pointer select-none",
          isLarge ? "min-h-[480px]" : "min-h-[440px]"
        )}
      >
        {/* Top Header Badge */}
        <div className="flex items-center justify-between pointer-events-none mb-4 z-10">
          <span
            className={cn(
              "text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-full border border-black shadow-[1.5px_1.5px_0px_0px_#000]",
              collection.badgeBg || "bg-[#F4F000] text-black"
            )}
          >
            {collection.badge}
          </span>

          <div className="w-10 h-10 rounded-full bg-white border-2 border-black shadow-[2px_2px_0px_0px_#000] group-hover:bg-[#F4F000] flex items-center justify-center transition-colors">
            <ArrowUpRight className="w-5 h-5 text-black" />
          </div>
        </div>

        {/* Footwear Visual Asset */}
        <div className={cn("relative w-full my-auto flex items-center justify-center py-4", aspect)}>
          <div className="relative w-full h-full transform-gpu transition-transform duration-500 ease-out group-hover:scale-108 group-hover:-translate-y-2">
            <Image
              src={collection.image}
              alt={collection.title}
              fill
              className="object-contain filter drop-shadow-[0_20px_20px_rgba(0,0,0,0.12)]"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>

        {/* Content Box */}
        <div className="bg-white/95 backdrop-blur-sm p-6 rounded-2xl border-2 border-black shadow-[2px_2px_0px_0px_#000] space-y-3 z-10 mt-4">
          <div className="flex items-baseline justify-between gap-2">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-black uppercase tracking-tight text-black group-hover:text-[#3155FF] transition-colors">
              {collection.title}
            </h3>
            <span className="text-xs font-mono font-bold text-[#888888] shrink-0">
              {collection.sizes}
            </span>
          </div>

          <p className="text-xs sm:text-sm font-bold text-[#555555] leading-relaxed line-clamp-2">
            {collection.description}
          </p>

          {/* Key Features & CTA */}
          <div className="pt-2 border-t border-black/10 flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-3 text-xs font-bold text-[#333333]">
              {collection.features.slice(0, isLarge ? 2 : 1).map((feat, idx) => (
                <div key={idx} className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-black shrink-0" />
                  <span className="truncate max-w-[200px] text-[11px]">{feat}</span>
                </div>
              ))}
            </div>

            <span className="text-xs font-black uppercase tracking-wider text-black group-hover:text-[#3155FF] flex items-center gap-1">
              <span>Explore Category</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </span>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
