"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Plus, Check, X, ArrowUpRight, ShoppingBag } from "lucide-react";
import { FEATURED_PRODUCTS } from "@/data/products";
import { useCart } from "@/context/CartContext";
import Container from "@/ui/Container";

export default function FeaturedProducts() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [quickAddProduct, setQuickAddProduct] = useState(null);

  const filterOptions = [
    { label: "All Drops", key: "All" },
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
      className="relative w-full py-16 sm:py-24 bg-[#FAF7F1] text-[#24140D]"
      aria-label="Fresh From Walkline Footwear Showcase"
    >
      <Container>
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-12 border-b border-[#24140D]/10 pb-6">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#8A6E58] block mb-2">
              New In • Fresh Rotation
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-[-0.03em] text-[#24140D]">
              Fresh From Walkline
            </h2>
            <p className="text-sm text-[#5A351F]/80 max-w-md mt-2 font-normal">
              Everyday comfort engineered with precision. Designed for impact across lifestyle, court, and streetwear.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {filterOptions.map((opt) => (
              <button
                key={opt.key}
                onClick={() => setActiveFilter(opt.key)}
                className={`text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full transition-all duration-200 cursor-pointer ${
                  activeFilter === opt.key
                    ? "bg-[#321D12] text-[#FAF7F1] shadow-editorial-sm"
                    : "bg-white/80 border border-[#24140D]/10 text-[#5A351F] hover:bg-[#F3E8D8]/70 hover:text-[#24140D]"
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        {/* 4-Column Desktop / 2-Column Mobile Product Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onQuickAdd={() => setQuickAddProduct(product)}
            />
          ))}
        </div>
      </Container>

      {/* Quick Add Modal / Bottom Sheet */}
      {quickAddProduct && (
        <QuickAddModal
          product={quickAddProduct}
          onClose={() => setQuickAddProduct(null)}
        />
      )}
    </section>
  );
}

function ProductCard({ product, onQuickAdd }) {
  return (
    <div className="group relative bg-white rounded-2xl p-3.5 sm:p-5 flex flex-col justify-between border border-[#24140D]/10 hover:border-[#9A6238]/60 hover:shadow-editorial-md transition-all duration-300">
      {/* Top Meta: Category & Tag */}
      <div>
        <div className="flex items-center justify-between gap-1 mb-2">
          <span className="text-[10px] font-bold uppercase tracking-wider text-[#8A6E58] truncate">
            {product.category}
          </span>
          <span className="text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#F3E8D8] text-[#321D12] shrink-0">
            {product.tag}
          </span>
        </div>

        {/* Product Image Area */}
        <div className="relative w-full aspect-square bg-[#FAF7F1] rounded-xl overflow-hidden my-2 flex items-center justify-center">
          <Link
            href={`/products/${product.slug}`}
            className="relative w-full h-full block"
          >
            <Image
              src={product.image}
              alt={`${product.series} — ${product.category}`}
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              className="object-contain p-3 group-hover:scale-105 transition-transform duration-500 ease-out"
            />
          </Link>

          {/* Quick Add Pill Reveal on Desktop */}
          <button
            onClick={onQuickAdd}
            className="absolute bottom-2.5 inset-x-2.5 hidden sm:flex items-center justify-center gap-1.5 py-2.5 rounded-lg bg-[#321D12]/95 backdrop-blur-sm text-[#FAF7F1] text-[11px] font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-200 cursor-pointer shadow-editorial-sm"
          >
            <Plus className="w-3.5 h-3.5 text-[#C69A6B]" />
            <span>Quick View & Select Size</span>
          </button>
        </div>

        {/* Title & Tagline */}
        <div className="mt-2.5">
          <Link href={`/products/${product.slug}`} className="block">
            <h3 className="text-base sm:text-lg font-black uppercase tracking-tight text-[#24140D] group-hover:text-[#9A6238] transition-colors truncate">
              {product.series}
            </h3>
          </Link>
          <p className="text-xs text-[#5A351F]/80 line-clamp-1 mt-0.5 font-normal">
            {product.tagline}
          </p>
        </div>
      </div>

      {/* Bottom Info & Navigation */}
      <div className="mt-4 pt-3 border-t border-[#24140D]/06 flex items-center justify-between">
        <span className="text-[11px] font-mono text-[#8A6E58]">
          {product.sizes}
        </span>

        {/* Mobile Quick Add Button */}
        <button
          onClick={onQuickAdd}
          className="sm:hidden p-2 rounded-lg bg-[#321D12] text-[#FAF7F1] hover:bg-[#5A351F] transition-colors cursor-pointer"
          aria-label={`Select size for ${product.series}`}
        >
          <Plus className="w-4 h-4 text-[#FAF7F1]" />
        </button>

        <Link
          href={`/products/${product.slug}`}
          className="hidden sm:inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-[#9A6238] hover:text-[#24140D] transition-colors cursor-pointer"
        >
          <span>Details</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}

function QuickAddModal({ product, onClose }) {
  const { addItem } = useCart();
  const [selectedSize, setSelectedSize] = useState(
    product.availableSizes?.[0] || ""
  );
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    if (!selectedSize) return;

    addItem({
      productId: product.id,
      slug: product.slug,
      name: product.series,
      category: product.category,
      image: product.image,
      size: selectedSize,
      quantity: 1,
    });

    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
      onClose();
    }, 900);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Quick Add ${product.series}`}
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/40 backdrop-blur-sm p-0 sm:p-4 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="w-full sm:max-w-lg bg-[#FAF7F1] rounded-t-3xl sm:rounded-2xl border border-[#24140D]/15 p-6 sm:p-8 shadow-editorial-lg max-h-[90vh] overflow-y-auto animate-in slide-in-from-bottom-6 sm:zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-[#24140D]/10">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#8A6E58]">
              {product.category}
            </span>
            <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-[#24140D] mt-0.5">
              {product.series}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-[#F3E8D8] text-[#24140D] transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Product Preview */}
        <div className="relative w-full aspect-[16/10] bg-white rounded-xl my-5 border border-[#24140D]/08 flex items-center justify-center overflow-hidden">
          <Image
            src={product.image}
            alt={product.series}
            fill
            className="object-contain p-4"
          />
        </div>

        {/* Features from verified data */}
        <div className="space-y-1.5 mb-5">
          {product.features?.map((feat, idx) => (
            <div key={idx} className="flex items-center gap-2 text-xs text-[#5A351F]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#9A6238] shrink-0" />
              <span>{feat}</span>
            </div>
          ))}
        </div>

        {/* Size Selection with Real Verified Sizes */}
        <div className="mb-6">
          <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#24140D] mb-2.5">
            <span>Select Available Size</span>
            <span className="text-[#8A6E58] font-mono text-[11px]">
              Range: {product.sizes}
            </span>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
            {product.availableSizes?.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider border transition-all cursor-pointer ${
                  selectedSize === size
                    ? "bg-[#321D12] text-[#FAF7F1] border-[#321D12] shadow-sm"
                    : "bg-white text-[#24140D] border-[#24140D]/15 hover:border-[#9A6238] hover:bg-[#F3E8D8]/50"
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Add to Bag Action */}
        <button
          onClick={handleAddToCart}
          disabled={isAdded || !selectedSize}
          className="w-full py-4 rounded-xl bg-[#321D12] hover:bg-[#5A351F] text-[#FAF7F1] font-bold uppercase tracking-[0.15em] text-xs transition-all flex items-center justify-center gap-2 cursor-pointer shadow-editorial-md"
        >
          {isAdded ? (
            <>
              <Check className="w-4 h-4 text-[#C69A6B]" />
              <span>Added to Bag</span>
            </>
          ) : (
            <>
              <ShoppingBag className="w-4 h-4 text-[#C69A6B]" />
              <span>Add to Bag • {selectedSize || "Select Size"}</span>
            </>
          )}
        </button>

        {/* View Full Product Details Link */}
        <div className="mt-4 text-center">
          <Link
            href={`/products/${product.slug}`}
            onClick={onClose}
            className="text-xs font-bold uppercase tracking-wider text-[#9A6238] hover:text-[#24140D] inline-flex items-center gap-1.5 transition-colors"
          >
            <span>View Full Product Details & Specs</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="text-center text-[10px] text-[#8A6E58] mt-3 uppercase tracking-wider font-semibold">
          100% Genuine Walkline Footwear • Bahadurgarh Craft Facility
        </div>
      </div>
    </div>
  );
}
