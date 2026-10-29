"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

/**
 * ProductCard
 * A clean, premium showcase card for Walkline footwear products.
 * Conforms to the reference design: white background, light-grey borders,
 * rounded corners, uncropped contain image, verified series details,
 * and an Explore link leading to the product's detail page.
 */
export function ProductCard({ product }) {
  if (!product) return null;

  return (
    <article className="group relative bg-white rounded-2xl overflow-hidden border border-neutral-200/90 hover:border-[#27409A]/60 hover:shadow-[0_12px_32px_rgba(0,0,0,0.06)] transition-all duration-300 flex flex-col h-full">
      {/* Product Image Stage */}
      <Link
        href={`/products/${product.slug}`}
        className="relative aspect-square w-full bg-[#F8F9FA] overflow-hidden flex items-center justify-center p-6 sm:p-8 block focus:outline-none"
        aria-label={`View ${product.series} — ${product.category}`}
      >
        <Image
          src={product.image}
          alt={`${product.series} — ${product.category} — Walkline Footwear`}
          fill
          className="object-contain p-4 sm:p-6 group-hover:scale-[1.04] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] select-none"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />

        {/* Small badge in top-left */}
        {product.tag && (
          <div className="absolute top-3.5 left-3.5 z-10 pointer-events-none">
            <span
              className={`text-[9px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-xs ${
                product.badgeColor || "bg-[#27409A] text-white"
              }`}
            >
              {product.tag}
            </span>
          </div>
        )}
      </Link>

      {/* Card Details */}
      <div className="p-5 sm:p-6 flex flex-col flex-1">
        {/* Category & Sizes Row */}
        <div className="flex items-center justify-between gap-2 mb-1.5">
          <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.14em] text-[#27409A] truncate">
            {product.category}
          </span>
          {product.sizes && (
            <span className="text-[10px] sm:text-[11px] font-medium text-neutral-500 shrink-0">
              {product.sizes}
            </span>
          )}
        </div>

        {/* Product / Series Title */}
        <Link
          href={`/products/${product.slug}`}
          className="block focus:outline-none focus-visible:underline"
        >
          <h2 className="text-base sm:text-lg font-medium uppercase tracking-tight text-[#000000] group-hover:text-[#27409A] transition-colors leading-snug">
            {product.series}
          </h2>
        </Link>

        {/* Short verified description / tagline */}
        <p className="text-xs sm:text-[13px] text-neutral-600 mt-2 line-clamp-2 leading-relaxed flex-1 font-normal">
          {product.tagline || product.description}
        </p>

        {/* Bottom Bar: Available colors & Explore link */}
        <div className="mt-4 pt-3.5 border-t border-neutral-100 flex items-center justify-between">
          {/* Color indicators */}
          <div className="flex items-center gap-1.5">
            {product.colors && product.colors.length > 0 ? (
              product.colors.slice(0, 3).map((color, idx) => (
                <span
                  key={idx}
                  className="w-3.5 h-3.5 rounded-full border border-neutral-300"
                  style={{ backgroundColor: color }}
                  aria-label={`Colorway ${idx + 1}`}
                />
              ))
            ) : (
              <span className="text-[10px] text-neutral-400 font-medium">Standard</span>
            )}
          </div>

          {/* Explore Link */}
          <Link
            href={`/products/${product.slug}`}
            className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.14em] text-[#000000] group-hover:text-[#27409A] transition-colors focus:outline-none"
            aria-label={`Explore ${product.series}`}
          >
            <span>Explore</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </div>
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

  // Responsive container width and grid layout:
  // 1 card (Kids): Centered single showcase card
  // 2 cards (Women): Centered 2-column grid
  // 3+ cards (Men): 3-column grid
  const containerClasses =
    products.length === 1
      ? "max-w-[440px] mx-auto"
      : products.length === 2
      ? "max-w-[920px] mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8"
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
