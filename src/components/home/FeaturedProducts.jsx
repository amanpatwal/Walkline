"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Sparkles, Plus, Check } from "lucide-react";
import { FEATURED_PRODUCTS } from "@/data/products";
import Container from "@/ui/Container";
import SectionHeading from "@/ui/SectionHeading";
import Reveal from "@/components/animations/Reveal";
import { DropBadge } from "@/ui/Sticker";

export default function FeaturedProducts() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filterOptions = [
    { label: "All Series", key: "All" },
    { label: "Men's Sandals", key: "mens-sandals" },
    { label: "Women's Sneakers", key: "womens-sneakers" },
    { label: "Kids' Footwear", key: "kids-footwear" },
    { label: "Fashion Sandals", key: "fashion-sandals" },
  ];

  const filteredProducts =
    activeFilter === "All"
      ? FEATURED_PRODUCTS
      : FEATURED_PRODUCTS.filter((p) => p.categoryKey === activeFilter);

  return (
    <section
      id="products"
      className="relative w-full py-20 sm:py-28 bg-[#F7F7F4] text-[#111111]"
    >
      <Container>
        {/* Header with Verified Product Intro */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
          <SectionHeading
            overline="Our Products // Series Showcase"
            title="FEATURED SERIES"
            subtitle="Crafted with premium materials and meticulous attention to detail — Above & Beyond in every step."
            tagVariant="yellow"
          />

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-2xl sm:rounded-full bg-white border-2 border-black shadow-[3px_3px_0px_0px_#000] self-start lg:self-auto">
            {filterOptions.map((opt) => (
              <button
                key={opt.key}
                onClick={() => setActiveFilter(opt.key)}
                className={`text-xs font-black uppercase tracking-wider px-4 py-2 rounded-full transition-all duration-200 cursor-pointer ${
                  activeFilter === opt.key
                    ? "bg-[#F4F000] text-black border border-black shadow-[1.5px_1.5px_0px_0px_#000]"
                    : "text-[#555555] hover:text-black"
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        {/* 3-Column Streetwear Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProducts.map((product, idx) => (
            <Reveal key={product.id} animation="slideUp" delay={idx * 0.06}>
              <div className="group relative bg-white rounded-3xl p-6 sm:p-7 flex flex-col justify-between border-2 border-black shadow-[4px_4px_0px_0px_#000] hover:shadow-[6px_6px_0px_0px_#F4F000] transition-all duration-300 flex-1 h-full select-none cursor-pointer">
                {/* Top Badge & Size Range */}
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span
                    className={`text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full border border-black ${
                      product.badgeColor || "bg-[#F4F000] text-black"
                    }`}
                  >
                    {product.tag}
                  </span>

                  <span className="text-[11px] font-mono font-bold text-[#888888]">
                    {product.sizes}
                  </span>
                </div>

                {/* Footwear Imagery */}
                <div className="relative w-full aspect-[4/3] my-4 flex items-center justify-center overflow-hidden">
                  <div className="relative w-full h-full transform-gpu group-hover:scale-108 transition-transform duration-500 ease-out">
                    <Image
                      src={product.image}
                      alt={`Walkline ${product.series} - ${product.category}`}
                      fill
                      className="object-contain filter drop-shadow-[0_15px_15px_rgba(0,0,0,0.12)]"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                </div>

                {/* Series Title & Features */}
                <div className="pt-4 border-t-2 border-black/10 space-y-3">
                  <div>
                    <div className="text-[11px] font-mono font-bold text-[#888888] uppercase tracking-wider">
                      {product.category}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-[#111111] group-hover:text-[#3155FF] transition-colors mt-0.5">
                      {product.series}
                    </h3>
                  </div>

                  {/* Feature Bullets from Source Content */}
                  <div className="space-y-1.5 text-xs text-[#555555]">
                    {product.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-1.5">
                        <Check className="w-3.5 h-3.5 text-black shrink-0 mt-0.5" />
                        <span className="leading-tight">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Action Link */}
                  <div className="pt-2 flex items-center justify-between border-t border-black/10">
                    <span className="text-xs font-black uppercase tracking-wider text-black group-hover:text-[#3155FF] flex items-center gap-1">
                      <span>Learn More</span>
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>

                    <div className="w-8 h-8 rounded-full bg-[#F4F000] border border-black flex items-center justify-center text-black font-black text-xs group-hover:bg-black group-hover:text-[#F4F000] transition-colors shadow-[1.5px_1.5px_0px_0px_#000]">
                      <Plus className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Bottom Banner Strip */}
        <div className="mt-14 text-center">
          <Reveal animation="slideUp" delay={0.15}>
            <div className="inline-flex flex-wrap items-center justify-center gap-3 px-6 py-3.5 rounded-2xl bg-white border-2 border-black shadow-[3px_3px_0px_0px_#000] text-xs font-black text-black">
              <Sparkles className="w-4 h-4 text-[#FF4F7B]" />
              <span>FREE SHIPPING ON ORDERS OVER 500₹ | EASY 30-DAY RETURNS</span>
              <a
                href="#contact"
                className="underline decoration-2 text-[#3155FF] hover:text-black ml-1"
              >
                CONTACT US →
              </a>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
