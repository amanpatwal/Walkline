"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Search, X, ArrowUpRight } from "lucide-react";
import { FEATURED_PRODUCTS } from "@/data/products";

export default function SearchModal({ isOpen, onClose }) {
  const [query, setQuery] = useState("");
  const inputRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleClose = () => {
    setQuery("");
    onClose();
  };

  if (!isOpen) return null;

  const q = query.trim().toLowerCase();
  const filteredProducts = q
    ? FEATURED_PRODUCTS.filter(
        (p) =>
          p.series.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.tagline.toLowerCase().includes(q) ||
          (p.tag && p.tag.toLowerCase().includes(q)) ||
          (p.features && p.features.some((f) => f.toLowerCase().includes(q)))
      )
    : FEATURED_PRODUCTS.slice(0, 4);

  const handleSelectProduct = (slug) => {
    handleClose();
    router.push(`/products/${slug}`);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Search Walkline products"
      className="fixed inset-0 z-50 flex flex-col bg-black/50 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={handleClose}
    >
      <div
        className="w-full bg-[#FAF7F1] border-b border-[#24140D]/15 p-6 sm:p-10 shadow-editorial-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="max-w-4xl mx-auto">
          {/* Search Header Bar */}
          <div className="flex items-center justify-between gap-4 pb-6 border-b border-[#24140D]/10">
            <div className="flex items-center gap-3.5 flex-1">
              <Search className="w-6 h-6 text-[#24140D]" />
              <input
                ref={inputRef}
                type="text"
                placeholder="Search models (e.g. Noir-05, Vertex, Barbie-04, VRX, Frooti...)"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full text-lg sm:text-2xl font-bold uppercase tracking-tight text-[#24140D] placeholder:text-[#8A6E58]/50 bg-transparent outline-none"
              />
            </div>
            <button
              onClick={handleClose}
              className="p-2.5 rounded-full border border-[#24140D]/15 bg-white hover:bg-[#F3E8D8] text-[#24140D] transition-colors cursor-pointer"
              aria-label="Close search"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Quick Tags */}
          <div className="flex flex-wrap items-center gap-2 pt-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#8A6E58]">
              Trending:
            </span>
            {["Noir-05", "Vertex", "Barbie-04", "VRX", "Frooti", "Concept"].map((tag) => (
              <button
                key={tag}
                onClick={() => setQuery(tag)}
                className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-white border border-[#24140D]/12 text-[#24140D] hover:border-[#9A6238] hover:bg-[#F3E8D8] transition-all cursor-pointer"
              >
                {tag}
              </button>
            ))}
          </div>

          {/* Search Results Preview */}
          <div className="mt-8 pt-4 border-t border-[#24140D]/08">
            <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#8A6E58] mb-4">
              {query.trim()
                ? `Search Results (${filteredProducts.length})`
                : "Curated Drops"}
            </div>

            {filteredProducts.length === 0 ? (
              <div className="py-8 text-center text-xs text-[#5A351F]">
                No styles found matching &quot;{query}&quot;. Try searching for
                sandals, sneakers, or a specific series.
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {filteredProducts.map((product) => (
                  <div
                    key={product.id}
                    onClick={() => handleSelectProduct(product.slug)}
                    className="group p-3 rounded-xl bg-white border border-[#24140D]/10 hover:border-[#9A6238] hover:shadow-editorial-sm transition-all cursor-pointer"
                  >
                    <div className="relative w-full aspect-square bg-[#FAF7F1] rounded-lg p-2 flex items-center justify-center overflow-hidden mb-2.5">
                      <Image
                        src={product.image}
                        alt={product.series}
                        fill
                        className="object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                      />
                      {product.tag && (
                        <span
                          className={`absolute top-2 left-2 text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${product.badgeColor}`}
                        >
                          {product.tag}
                        </span>
                      )}
                    </div>
                    <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-wider text-[#8A6E58]">
                      <span>{product.category}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#9A6238] opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <h4 className="text-sm font-bold uppercase tracking-tight text-[#24140D] mt-0.5 truncate">
                      {product.series}
                    </h4>
                    <p className="text-xs text-[#5A351F]/70 line-clamp-1 mt-0.5">
                      {product.tagline}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
