"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Search, X, ArrowUpRight } from "lucide-react";
import { FEATURED_PRODUCTS } from "@/data/products";

export default function SearchModal({ isOpen, onClose }) {
  const [query, setQuery] = useState("");
  const inputRef = useRef(null);

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

  const filteredProducts = query.trim()
    ? FEATURED_PRODUCTS.filter(
        (p) =>
          p.series.toLowerCase().includes(query.toLowerCase()) ||
          p.category.toLowerCase().includes(query.toLowerCase()) ||
          p.tagline.toLowerCase().includes(query.toLowerCase())
      )
    : FEATURED_PRODUCTS.slice(0, 4);

  const handleSelect = (href = "#products") => {
    handleClose();
    const el = document.getElementById("products");
    if (el) {
      if (window.__lenis) {
        window.__lenis.scrollTo(el, { offset: -80 });
      } else {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Search Walkline products"
      className="fixed inset-0 z-50 flex flex-col bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
    >
      <div
        className="w-full bg-[#FFFFFF] border-b-2 border-black p-6 sm:p-10 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="max-w-4xl mx-auto">
          {/* Search Header Bar */}
          <div className="flex items-center justify-between gap-4 pb-6 border-b-2 border-black/10">
            <div className="flex items-center gap-3.5 flex-1">
              <Search className="w-6 h-6 text-black" />
              <input
                ref={inputRef}
                type="text"
                placeholder="Search models (e.g. Noir-05, Vertex, Barbie-04, VRX...)"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full text-lg sm:text-2xl font-black uppercase tracking-tight text-black placeholder:text-[#AAAAAA] bg-transparent outline-none"
              />
            </div>
            <button
              onClick={handleClose}
              className="p-2.5 rounded-full border-2 border-black bg-[#F7F7F4] hover:bg-[#F4F000] transition-colors cursor-pointer"
              aria-label="Close search"
            >
              <X className="w-5 h-5 text-black" />
            </button>
          </div>

          {/* Quick Tags */}
          <div className="flex flex-wrap items-center gap-2 pt-4">
            <span className="text-xs font-mono font-bold uppercase text-[#888888]">
              Trending:
            </span>
            {["Noir-05", "Vertex", "Barbie-04", "VRX", "Frooti", "Concept"].map((tag) => (
              <button
                key={tag}
                onClick={() => setQuery(tag)}
                className="text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full bg-[#F7F7F4] border border-black/20 hover:border-black hover:bg-[#F4F000] transition-all cursor-pointer"
              >
                {tag}
              </button>
            ))}
          </div>

          {/* Search Results */}
          <div className="pt-8">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#888888] mb-4">
              {query ? `Results for "${query}" (${filteredProducts.length})` : "Featured Drops"}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-h-[50vh] overflow-y-auto pr-2">
              {filteredProducts.map((prod) => (
                <div
                  key={prod.id}
                  onClick={() => handleSelect(`#${prod.slug}`)}
                  className="group p-4 rounded-2xl bg-[#F7F7F4] border-2 border-black/10 hover:border-black hover:shadow-[4px_4px_0px_0px_#000] transition-all cursor-pointer flex flex-col justify-between"
                >
                  <div className="relative w-full aspect-[4/3] mb-3 flex items-center justify-center">
                    <Image
                      src={prod.image}
                      alt={prod.series}
                      fill
                      className="object-contain p-2 group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono font-bold text-[#888888] uppercase">
                      {prod.category}
                    </span>
                    <h4 className="text-base font-black uppercase text-black flex items-center justify-between">
                      <span>{prod.series}</span>
                      <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </h4>
                    <p className="text-[11px] text-[#666666] line-clamp-1 mt-0.5">
                      {prod.tagline}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1" onClick={handleClose} />
    </div>
  );
}
