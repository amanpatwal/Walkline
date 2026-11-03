"use client";

import Image from "next/image";
import { Check } from "lucide-react";

/**
 * ProductCard
 * Fully static catalogue card for Walkline category pages.
 * No links, no buttons, no click handlers — purely informational.
 */
export function ProductCard({ product }) {
  if (!product) return null;

  // Show up to 3 verified feature highlights from existing product data
  const highlights = product.features?.slice(0, 3) ?? [];

  return (
    <article
      className="bg-white rounded-2xl overflow-hidden border border-neutral-200 flex flex-col h-full"
      aria-label={`${product.series} — ${product.category}`}
    >
      {/* Product Image Stage */}
      <div
        className="relative w-full bg-[#F5F6F8] overflow-hidden"
        style={{ aspectRatio: "4/3" }}
      >
        <Image
          src={product.image}
          alt={`${product.series} — ${product.category} — Walkline Footwear`}
          fill
          className="object-contain p-5 sm:p-7 select-none"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          draggable={false}
        />

        {/* Feature badge — top-left */}
        {product.tag && (
          <div className="absolute top-3 left-3 z-10 pointer-events-none">
            <span
              className={`text-[9px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${
                product.badgeColor || "bg-[#27409A] text-white"
              }`}
            >
              {product.tag}
            </span>
          </div>
        )}
      </div>

      {/* Card Body */}
      <div className="p-5 sm:p-6 flex flex-col gap-3">

        {/* Category label + size range */}
        <div className="flex items-center justify-between gap-2">
          <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#27409A] truncate">
            {product.category}
          </span>
          {product.sizes && (
            <span className="text-[10px] font-medium text-neutral-400 shrink-0 tabular-nums">
              {product.sizes}
            </span>
          )}
        </div>

        {/* Series / product name — plain, non-interactive */}
        <h2 className="text-lg sm:text-xl font-semibold uppercase tracking-tight text-[#0A0A0A] leading-none">
          {product.series}
        </h2>

        {/* Tagline / short description */}
        <p className="text-[13px] text-neutral-500 leading-relaxed line-clamp-2">
          {product.tagline || product.description}
        </p>

        {/* Feature highlights — verified data only */}
        {highlights.length > 0 && (
          <ul className="space-y-1.5 mt-0.5">
            {highlights.map((feat, i) => (
              <li
                key={i}
                className="flex items-start gap-2 text-[11px] text-neutral-600 leading-snug"
              >
                <Check
                  className="w-3 h-3 text-[#27409A] shrink-0 mt-0.5"
                  aria-hidden="true"
                />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </article>
  );
}

/**
 * ProductGrid
 * Responsive showcase grid for category pages.
 */
export default function ProductGrid({ products = [] }) {
  if (!products.length) return null;

  const containerClasses =
    products.length === 1
      ? "max-w-[500px] mx-auto"
      : products.length === 2
      ? "max-w-[960px] mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8"
      : "max-w-[1400px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8";

  return (
    <section
      className="w-full bg-white px-5 sm:px-8 lg:px-12 py-10 sm:py-16"
      aria-label="Product Showcase"
    >
      <div className={containerClasses}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
