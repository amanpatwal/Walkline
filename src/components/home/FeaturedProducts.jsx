"use client";

import { useState } from "react";
import Image from "next/image";
import { Heart, Sparkles, Plus, Check, ArrowUpRight, ShoppingBag } from "lucide-react";
import { FEATURED_PRODUCTS } from "@/data/products";
import Container from "@/ui/Container";
import SectionHeading from "@/ui/SectionHeading";
import Reveal from "@/components/animations/Reveal";

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

        {/* 3-Column Modern Streetwear Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProducts.map((product, idx) => (
            <Reveal key={product.id} animation="slideUp" delay={idx * 0.05}>
              <ProductCard product={product} />
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

function ProductCard({ product }) {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [selectedColor, setSelectedColor] = useState(product.colors?.[0] || "#111111");
  const [selectedSize, setSelectedSize] = useState(product.availableSizes?.[1] || product.availableSizes?.[0] || null);
  const [addedNotice, setAddedNotice] = useState(false);

  const handleQuickAdd = (e) => {
    e.stopPropagation();
    setAddedNotice(true);
    setTimeout(() => setAddedNotice(false), 2000);
  };

  return (
    <div className="group relative bg-white rounded-3xl p-6 sm:p-7 flex flex-col justify-between border-2 border-black shadow-[4px_4px_0px_0px_#000] hover:shadow-[6px_6px_0px_0px_#F4F000] transition-all duration-300 flex-1 h-full select-none">
      {/* Top Header: Badge, Sizes, Wishlist */}
      <div className="flex items-center justify-between gap-2 mb-2">
        <span
          className={`text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full border border-black ${
            product.badgeColor || "bg-[#F4F000] text-black"
          }`}
        >
          {product.tag}
        </span>

        <div className="flex items-center gap-2">
          <span className="text-[11px] font-mono font-bold text-[#888888]">
            {product.sizes}
          </span>
          <button
            onClick={() => setIsWishlisted(!isWishlisted)}
            className="p-1.5 rounded-full hover:bg-[#F7F7F4] transition-colors cursor-pointer"
            aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
          >
            <Heart
              className={`w-4 h-4 transition-colors ${
                isWishlisted
                  ? "fill-[#FF4F7B] text-[#FF4F7B] scale-110"
                  : "text-black/60 hover:text-black"
              }`}
            />
          </button>
        </div>
      </div>

      {/* Product Image Stage with Hover Quick-Add Reveal */}
      <div className="relative w-full aspect-[4/3] my-4 flex items-center justify-center overflow-hidden">
        <div className="relative w-full h-full transform-gpu group-hover:scale-106 transition-transform duration-500 ease-out flex items-center justify-center">
          <Image
            src={product.image}
            alt={`Walkline ${product.series} - ${product.category}`}
            fill
            className="object-contain filter drop-shadow-[0_15px_15px_rgba(0,0,0,0.12)] p-2"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>

        {/* Desktop Quick Add Slide-In */}
        <div className="absolute bottom-2 left-2 right-2 opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-300 pointer-events-none group-hover:pointer-events-auto">
          <button
            onClick={handleQuickAdd}
            className="w-full py-2.5 px-4 rounded-xl bg-[#F4F000] text-black font-black uppercase tracking-wider text-xs border-2 border-black shadow-[2px_2px_0px_0px_#000] hover:bg-black hover:text-[#F4F000] transition-colors flex items-center justify-center gap-2 cursor-pointer"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>{addedNotice ? "Added to Bag ✓" : "Quick Add"}</span>
          </button>
        </div>
      </div>

      {/* Series Title, Category & Specs */}
      <div className="pt-4 border-t-2 border-black/10 space-y-3">
        <div>
          <div className="text-[11px] font-mono font-bold text-[#888888] uppercase tracking-wider">
            {product.category}
          </div>
          <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-[#111111] group-hover:text-[#3155FF] transition-colors mt-0.5">
            {product.series}
          </h3>
          <p className="text-xs text-[#666666] font-medium line-clamp-1 mt-0.5">
            {product.tagline}
          </p>
        </div>

        {/* Colorway Swatches */}
        {product.colors && product.colors.length > 0 && (
          <div className="flex items-center gap-1.5 pt-1">
            <span className="text-[10px] font-mono font-bold text-[#888888] uppercase mr-1">
              Colorways:
            </span>
            {product.colors.map((c, cIdx) => (
              <button
                key={cIdx}
                onClick={() => setSelectedColor(c)}
                className={`w-4 h-4 rounded-full border border-black/40 transition-transform ${
                  selectedColor === c ? "scale-125 ring-2 ring-black" : "hover:scale-110"
                }`}
                style={{ backgroundColor: c }}
                aria-label={`Color option ${cIdx + 1}`}
              />
            ))}
          </div>
        )}

        {/* Quick Size Pills */}
        {product.availableSizes && (
          <div className="flex flex-wrap items-center gap-1 pt-1">
            {product.availableSizes.map((sz, sIdx) => (
              <button
                key={sIdx}
                onClick={() => setSelectedSize(sz)}
                className={`text-[10px] font-bold px-2 py-0.5 rounded border transition-colors cursor-pointer ${
                  selectedSize === sz
                    ? "bg-black text-[#F4F000] border-black"
                    : "bg-[#F7F7F4] text-[#555555] border-black/15 hover:border-black"
                }`}
              >
                {sz}
              </button>
            ))}
          </div>
        )}

        {/* Feature Bullets from Source Content */}
        <div className="space-y-1 text-xs text-[#555555] pt-1">
          {product.features.slice(0, 2).map((feature, fIdx) => (
            <div key={fIdx} className="flex items-start gap-1.5">
              <Check className="w-3.5 h-3.5 text-black shrink-0 mt-0.5" />
              <span className="leading-tight text-[11px] font-medium">{feature}</span>
            </div>
          ))}
        </div>

        {/* Action Link & Plus Button */}
        <div className="pt-2 flex items-center justify-between border-t border-black/10">
          <a
            href="#collections"
            className="text-xs font-black uppercase tracking-wider text-black group-hover:text-[#3155FF] flex items-center gap-1 cursor-pointer"
          >
            <span>Explore Line</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>

          <button
            onClick={handleQuickAdd}
            className="w-8 h-8 rounded-full bg-[#F4F000] border border-black flex items-center justify-center text-black font-black text-xs group-hover:bg-black group-hover:text-[#F4F000] transition-colors shadow-[1.5px_1.5px_0px_0px_#000] cursor-pointer"
            aria-label={`Quick add ${product.series}`}
          >
            <Plus className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
