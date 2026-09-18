"use client";

import Image from "next/image";
import { ArrowUpRight, Check } from "lucide-react";
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
            overline="Four Core Categories"
            title="PRODUCT CATEGORIES"
            subtitle="Explore our diverse range crafted with premium materials and meticulous attention to detail."
            tagVariant="pink"
          />
          <div className="text-xs font-mono font-bold uppercase text-[#888888] tracking-widest hidden md:block">
            [ VERIFIED RANGES ]
          </div>
        </div>

        {/* Editorial Asymmetrical Grid for the 4 Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* 1. Men's Sandals & Chappals - 7 cols */}
          <div className="lg:col-span-7">
            <CategoryCard
              collection={COLLECTIONS[0]}
              heightClass="min-h-[460px]"
            />
          </div>

          {/* 2. Women's Sneakers - 5 cols */}
          <div className="lg:col-span-5">
            <CategoryCard
              collection={COLLECTIONS[1]}
              heightClass="min-h-[460px]"
            />
          </div>

          {/* 3. Fashion Sandals - 5 cols */}
          <div className="lg:col-span-5">
            <CategoryCard
              collection={COLLECTIONS[2]}
              heightClass="min-h-[460px]"
            />
          </div>

          {/* 4. Kids' Footwear - 7 cols */}
          <div className="lg:col-span-7">
            <CategoryCard
              collection={COLLECTIONS[3]}
              heightClass="min-h-[460px]"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

function CategoryCard({ collection, heightClass = "min-h-[460px]" }) {
  return (
    <Reveal animation="slideUp" delay={0.08}>
      <div
        className={cn(
          "group relative w-full rounded-3xl overflow-hidden bg-[#F7F7F4] border-2 border-black shadow-[4px_4px_0px_0px_#000] hover:shadow-[6px_6px_0px_0px_#000] flex flex-col justify-between p-7 sm:p-9 transition-all duration-300 cursor-pointer select-none",
          heightClass
        )}
      >
        {/* Background Visual Asset */}
        <div className="relative w-full aspect-[16/9] flex items-center justify-center mb-4">
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

        {/* Top Header Badge */}
        <div className="absolute top-6 left-6 right-6 flex items-center justify-between pointer-events-none">
          <span
            className={cn(
              "text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full border border-black shadow-[1.5px_1.5px_0px_0px_#000]",
              collection.badgeBg || "bg-[#F4F000] text-black"
            )}
          >
            {collection.badge}
          </span>

          <div className="w-10 h-10 rounded-full bg-white border-2 border-black shadow-[2px_2px_0px_0px_#000] group-hover:bg-[#F4F000] flex items-center justify-center transition-colors">
            <ArrowUpRight className="w-5 h-5 text-black" />
          </div>
        </div>

        {/* Content Box */}
        <div className="bg-white/95 backdrop-blur-sm p-6 rounded-2xl border-2 border-black shadow-[2px_2px_0px_0px_#000] space-y-3">
          <div className="flex items-baseline justify-between gap-2">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-black uppercase tracking-tight text-black group-hover:text-[#3155FF] transition-colors">
              {collection.title}
            </h3>
            <span className="text-xs font-mono font-bold text-[#888888] shrink-0">
              {collection.sizes}
            </span>
          </div>

          <p className="text-xs sm:text-sm font-bold text-[#555555] leading-relaxed">
            {collection.description}
          </p>

          {/* Key Feature Bullets */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 pt-2 border-t border-black/10 text-xs font-bold text-[#333333]">
            {collection.features.slice(0, 2).map((feat, idx) => (
              <div key={idx} className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-black shrink-0" />
                <span className="truncate">{feat}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Reveal>
  );
}
