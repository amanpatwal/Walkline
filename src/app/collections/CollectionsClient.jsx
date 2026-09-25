"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Plus, Sparkles, SlidersHorizontal, Check } from "lucide-react";
import { FEATURED_PRODUCTS } from "@/data/products";
import { COLLECTIONS } from "@/data/collections";
import { assets } from "@/data/assets";

const CATEGORY_TABS = [
  { id: "all", label: "All Collections", count: 6 },
  { id: "mens-sandals", label: "Men's Sandals", count: 2 },
  { id: "womens-sneakers", label: "Women's Sneakers", count: 2 },
  { id: "kids-footwear", label: "Kids' Footwear", count: 1 },
  { id: "fashion-sandals", label: "Fashion Sandals", count: 1 },
];

export default function CollectionsClient() {
  const [activeTab, setActiveTab] = useState("all");

  const filteredProducts = activeTab === "all"
    ? FEATURED_PRODUCTS
    : FEATURED_PRODUCTS.filter(p => p.categoryKey === activeTab);

  return (
    <div className="w-full">
      {/* 1. Category Filter Strip */}
      <section className="sticky top-[68px] sm:top-[76px] z-30 bg-[#FAF7F1]/95 backdrop-blur-md border-y border-[#24140D]/10 py-3.5 px-4 sm:px-8">
        <div className="max-w-[1440px] mx-auto flex items-center justify-between gap-4 overflow-x-auto no-scrollbar">
          <div className="flex items-center gap-2 shrink-0">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#8A6E58] flex items-center gap-1.5 mr-2">
              <SlidersHorizontal className="w-3.5 h-3.5" /> Filter:
            </span>
            {CATEGORY_TABS.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full transition-all duration-200 cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                    isActive
                      ? "bg-[#24140D] text-[#FAF7F1] shadow-sm"
                      : "bg-white/80 text-[#5A351F] hover:bg-white hover:text-[#24140D] border border-[#24140D]/10"
                  }`}
                >
                  <span>{tab.label}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                    isActive ? "bg-white/20 text-[#FAF7F1]" : "bg-[#24140D]/08 text-[#8A6E58]"
                  }`}>
                    {tab.count}
                  </span>
                </button>
              );
            })}
          </div>

          <span className="hidden md:block text-[11px] font-mono text-[#8A6E58] shrink-0">
            Showing {filteredProducts.length} verified {filteredProducts.length === 1 ? "style" : "styles"}
          </span>
        </div>
      </section>

      {/* 2. Filtered Products Grid */}
      <section className="w-full bg-[#FAF7F1] px-4 sm:px-8 lg:px-16 py-12 sm:py-16">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {filteredProducts.map((product) => (
              <article
                key={product.id}
                className="group relative bg-white rounded-2xl overflow-hidden border border-[#24140D]/08 hover:border-[#9A6238]/30 hover:shadow-[0_12px_36px_rgba(36,20,13,0.08)] transition-all duration-500 flex flex-col"
              >
                {/* Product Image Stage */}
                <Link
                  href={`/products/${product.slug}`}
                  className="relative aspect-square bg-[#F7F4EE] overflow-hidden block"
                >
                  <Image
                    src={product.image}
                    alt={`${product.series} — ${product.category}`}
                    fill
                    className="object-contain p-6 sm:p-8 group-hover:scale-[1.05] transition-transform duration-500"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                  {/* Badge */}
                  <div className="absolute top-3 left-3">
                    <span className={`text-[9px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-xs ${product.badgeColor}`}>
                      {product.tag}
                    </span>
                  </div>

                  {/* Quick Add Slide-up */}
                  <div className="absolute bottom-0 inset-x-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-[#24140D]/90 backdrop-blur-sm p-3 flex items-center justify-center gap-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#FAF7F1]">View Details & Sizing</span>
                  </div>
                </Link>

                {/* Details */}
                <div className="p-4 sm:p-5 flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] uppercase tracking-wider text-[#8A6E58] font-bold">
                      {product.category}
                    </span>
                    <span className="text-[10px] font-mono text-[#8A6E58]">
                      {product.sizes}
                    </span>
                  </div>

                  <Link href={`/products/${product.slug}`} className="block">
                    <h3 className="text-sm sm:text-base font-black uppercase tracking-tight text-[#24140D] group-hover:text-[#9A6238] transition-colors">
                      {product.series}
                    </h3>
                  </Link>

                  <p className="text-xs text-[#5A351F]/75 mt-1.5 line-clamp-2 leading-relaxed flex-1">
                    {product.tagline}
                  </p>

                  {/* Highlights */}
                  <div className="mt-3 pt-3 border-t border-[#24140D]/06 flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      {product.colors?.slice(0, 3).map((col, idx) => (
                        <span
                          key={idx}
                          className="w-3.5 h-3.5 rounded-full border border-[#24140D]/20"
                          style={{ backgroundColor: col }}
                          aria-label={`Color ${idx + 1}`}
                        />
                      ))}
                    </div>

                    <Link
                      href={`/products/${product.slug}`}
                      className="text-[11px] font-bold uppercase tracking-wider text-[#24140D] group-hover:text-[#9A6238] flex items-center gap-1 transition-colors"
                    >
                      <span>Explore</span>
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 3. 4 Core Pillars Asymmetric Editorial Showcase */}
      <section className="w-full bg-white px-4 sm:px-8 lg:px-16 py-16 sm:py-24 border-t border-[#24140D]/10">
        <div className="max-w-[1440px] mx-auto">
          <div className="max-w-2xl mb-12 sm:mb-16">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] px-3.5 py-1.5 rounded-full bg-[#FAF7F1] border border-[#24140D]/15 text-[#5A351F]">
              Direct From Workshop
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-[#24140D] mt-4">
              Explore By Category
            </h2>
            <p className="text-sm sm:text-base text-[#5A351F]/80 mt-3 leading-relaxed">
              Every Walkline line is engineered with specialized last geometry and sole chemistry for distinct daily use cases.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {COLLECTIONS.map((col) => {
              const route =
                col.id === "mens-sandals"
                  ? "/men"
                  : col.id === "womens-sneakers"
                  ? "/women"
                  : col.id === "kids-footwear"
                  ? "/kids"
                  : "/sandals";

              return (
                <article
                  key={col.id}
                  className="group relative bg-[#FAF7F1] rounded-2xl overflow-hidden border border-[#24140D]/10 hover:shadow-xl transition-all duration-500 flex flex-col justify-between"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#24140D]/05">
                    <Image
                      src={col.image}
                      alt={col.title}
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#24140D]/60 via-transparent to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className={`text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full ${col.badgeBg}`}>
                        {col.badge}
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <div className="text-[10px] font-mono uppercase tracking-wider text-[#FAF7F1]/80">
                        Available Sizes: {col.sizes}
                      </div>
                      <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight mt-1">
                        {col.title}
                      </h3>
                    </div>
                  </div>

                  <div className="p-6 sm:p-8 space-y-4">
                    <p className="text-xs sm:text-sm text-[#5A351F]/80 leading-relaxed">
                      {col.description}
                    </p>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {col.features.map((feat, idx) => (
                        <span
                          key={idx}
                          className="text-[10px] font-medium bg-white text-[#5A351F] border border-[#24140D]/08 px-2.5 py-1 rounded-md flex items-center gap-1"
                        >
                          <Check className="w-2.5 h-2.5 text-[#9A6238]" /> {feat}
                        </span>
                      ))}
                    </div>

                    <div className="pt-4 border-t border-[#24140D]/08 flex items-center justify-between">
                      <span className="text-xs font-mono font-bold text-[#8A6E58]">
                        Series: {col.series.join(" • ")}
                      </span>
                      <Link
                        href={route}
                        className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full bg-[#24140D] text-[#FAF7F1] hover:bg-[#5A351F] transition-colors"
                      >
                        <span>View {col.shortTitle}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Editorial Craft Assurance Banner */}
      <section className="w-full bg-[#24140D] text-[#FAF7F1] py-16 sm:py-24 px-4 sm:px-8 lg:px-16 relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#C69A6B] flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5" />
              Above & Beyond Standard
            </span>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-[#FAF7F1] leading-tight">
              Comfort Engineered For Every Walk Of Life
            </h2>
            <p className="text-sm sm:text-base text-[#FAF7F1]/75 max-w-2xl leading-relaxed">
              From our direct sole injection lines to soft memory foam inserts, each pair balances lightweight wear with lasting durability.
            </p>
          </div>
          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-end">
            <Link
              href="/manufacturing"
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-[#FAF7F1] text-[#24140D] text-xs font-bold uppercase tracking-wider hover:bg-[#C69A6B] transition-colors shadow-md"
            >
              <span>Our Manufacturing</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full border border-white/20 text-[#FAF7F1] text-xs font-bold uppercase tracking-wider hover:bg-white/10 transition-colors"
            >
              <span>Our Heritage Since 2009</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
