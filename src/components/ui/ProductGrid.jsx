"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

/**
 * ProductGrid
 *
 * Props:
 *  products  — array from FEATURED_PRODUCTS (filtered subset)
 *  heading   — optional section heading string
 */
export default function ProductGrid({ products = [], heading }) {
  if (!products.length) return null;

  return (
    <section className="w-full bg-white px-5 sm:px-10 lg:px-16 py-14 sm:py-20">
      <div className="max-w-[1440px] mx-auto">
        {heading && (
          <div className="flex items-end justify-between mb-9 border-b border-neutral-200 pb-5">
            <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-[#000000]">
              {heading}
            </h2>
            <span className="text-[10px] uppercase tracking-[0.18em] text-[#27409A] font-bold">
              {products.length} styles
            </span>
          </div>
        )}

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {products.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.slug}`}
              className="group relative bg-white rounded-2xl overflow-hidden border border-neutral-200 hover:border-[#27409A] hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              {/* Top Image Stage */}
              <div>
                <div className="relative aspect-square bg-neutral-50 overflow-hidden flex items-center justify-center p-4">
                  <Image
                    src={product.image}
                    alt={`${product.series} — ${product.category}`}
                    fill
                    className="object-contain p-4 group-hover:scale-[1.05] transition-transform duration-500 ease-out"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 20vw"
                  />
                  {/* Badge */}
                  {product.tag && (
                    <div className="absolute top-3 left-3">
                      <span
                        className={`text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full shadow-xs ${product.badgeColor}`}
                      >
                        {product.tag}
                      </span>
                    </div>
                  )}

                  {/* Hover Reveal Strip */}
                  <div className="absolute bottom-0 inset-x-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-[#27409A]/95 backdrop-blur-sm p-2 flex items-center justify-center gap-1.5 text-white">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-white">
                      View Details & Sizing
                    </span>
                    <ArrowUpRight className="w-3 h-3 text-white" />
                  </div>
                </div>

                {/* Info */}
                <div className="p-4">
                  <div className="flex items-center justify-between text-[10px] uppercase tracking-wider text-[#27409A] font-bold mb-1">
                    <span className="truncate">{product.category}</span>
                  </div>
                  <h3 className="text-sm font-black uppercase tracking-tight text-[#000000] group-hover:text-[#27409A] transition-colors truncate">
                    {product.series}
                  </h3>
                  <p className="text-[11px] text-neutral-500 mt-1 line-clamp-1">
                    {product.tagline}
                  </p>
                  {/* Sizes */}
                  <p className="text-[10px] text-neutral-500 font-semibold mt-2">
                    {product.sizes}
                  </p>
                </div>
              </div>

              {/* Bottom Colors & CTA indicator */}
              <div className="p-4 pt-0 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  {product.colors?.slice(0, 3).map((color, idx) => (
                    <span
                      key={idx}
                      className="w-3 h-3 rounded-full border border-neutral-300"
                      style={{ backgroundColor: color }}
                      aria-label={`Colorway ${idx + 1}`}
                    />
                  ))}
                </div>

                <span className="text-[10px] font-bold uppercase tracking-wider text-[#27409A] group-hover:translate-x-0.5 transition-transform flex items-center gap-0.5">
                  Explore <ArrowUpRight className="w-3 h-3" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
