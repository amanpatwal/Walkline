"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShoppingBag, X, Check } from "lucide-react";
import { FEATURED_PRODUCTS } from "@/data/products";
import { useCart } from "@/context/CartContext";

// ─── Featured Products Horizontal Carousel ────────────────────────────────────
// Brand palette: #27409A (Primary Blue), #000000 (Black), #FFFFFF (White).
// Subtle neutral borders, #000000 product titles, #27409A accents/badges.

export default function FeaturedProducts() {
  const [quickAddProduct, setQuickAddProduct] = useState(null);
  const containerRef = useRef(null);
  const trackRef     = useRef(null);

  const [translateX, setTranslateX] = useState(0);
  const [canGoPrev, setCanGoPrev]   = useState(false);
  const [canGoNext, setCanGoNext]   = useState(true);

  // ── Calculate scroll bounds ───────────────────────────────────────────────
  const getMaxTranslate = useCallback(() => {
    if (!containerRef.current || !trackRef.current) return 0;
    const cWidth = containerRef.current.clientWidth;
    const tWidth = trackRef.current.scrollWidth;
    return Math.max(0, tWidth - cWidth);
  }, []);

  const refreshNav = useCallback((nextTx) => {
    const max = getMaxTranslate();
    setCanGoPrev(nextTx < -4);
    setCanGoNext(Math.abs(nextTx) < max - 4);
  }, [getMaxTranslate]);

  const stepDistance = useCallback(() => {
    if (!containerRef.current) return 320;
    const w = containerRef.current.clientWidth;
    if (w >= 1024) return w / 4;
    if (w >= 640)  return w / 2;
    return w * 0.84;
  }, []);

  const goNext = useCallback(() => {
    const max  = getMaxTranslate();
    const step = stepDistance();
    setTranslateX((prev) => {
      const next = Math.max(-max, prev - step);
      refreshNav(next);
      return next;
    });
  }, [getMaxTranslate, stepDistance, refreshNav]);

  const goPrev = useCallback(() => {
    const step = stepDistance();
    setTranslateX((prev) => {
      const next = Math.min(0, prev + step);
      refreshNav(next);
      return next;
    });
  }, [stepDistance, refreshNav]);

  // Recalculate on window resize
  useEffect(() => {
    const handleResize = () => {
      const max = getMaxTranslate();
      setTranslateX((prev) => {
        const clamped = Math.max(-max, Math.min(0, prev));
        refreshNav(clamped);
        return clamped;
      });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [getMaxTranslate, refreshNav]);

  // ── Touch swipe ───────────────────────────────────────────────────────────
  const touchStartX = useRef(0);
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const delta = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(delta) > 48) {
      if (delta > 0) goNext();
      else           goPrev();
    }
  };

  // ── Mouse drag ────────────────────────────────────────────────────────────
  const [isDragging, setIsDragging] = useState(false);
  const dragStartX    = useRef(0);
  const dragStartTx   = useRef(0);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    dragStartX.current  = e.clientX;
    dragStartTx.current = translateX;
    e.preventDefault();
  };

  const handleMouseMove = useCallback((e) => {
    if (!isDragging) return;
    const delta = e.clientX - dragStartX.current;
    const max   = getMaxTranslate();
    const next  = Math.max(-max, Math.min(0, dragStartTx.current + delta));
    setTranslateX(next);
    refreshNav(next);
  }, [isDragging, getMaxTranslate, refreshNav]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  return (
    <section
      id="products"
      aria-label="Walkline Footwear — Featured Products"
      className="relative w-full bg-white text-[#000000] overflow-hidden select-none"
    >
      {/* ─── Sliding Track ─────────────────────────────────────────────────── */}
      <div
        ref={containerRef}
        className="w-full overflow-hidden"
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        <div
          ref={trackRef}
          className="flex"
          style={{
            transform: `translateX(${translateX}px)`,
            transition: isDragging
              ? "none"
              : "transform 600ms cubic-bezier(0.16, 1, 0.3, 1)",
            willChange: "transform",
            cursor: isDragging ? "grabbing" : "grab",
          }}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleMouseDown}
        >
          {FEATURED_PRODUCTS.map((product, idx) => (
            <ProductCell
              key={product.id}
              product={product}
              isFirst={idx === 0}
              isLast={idx === FEATURED_PRODUCTS.length - 1}
              onQuickAdd={() => setQuickAddProduct(product)}
            />
          ))}
        </div>
      </div>

      {/* ─── Right-edge next button ─────── */}
      {canGoNext && (
        <button
          type="button"
          onClick={goNext}
          aria-label="View next products"
          className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 z-20
                     w-11 h-11 rounded-full
                     bg-white shadow-md border border-neutral-200
                     flex items-center justify-center
                     text-[#000000] hover:bg-[#27409A] hover:text-white hover:border-[#27409A]
                     transition-all duration-200 cursor-pointer group"
        >
          <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" />
        </button>
      )}

      {/* ─── Left-edge prev button ─────── */}
      {canGoPrev && (
        <button
          type="button"
          onClick={goPrev}
          aria-label="View previous products"
          className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 z-20
                     w-11 h-11 rounded-full
                     bg-white shadow-md border border-neutral-200
                     flex items-center justify-center
                     text-[#000000] hover:bg-[#27409A] hover:text-white hover:border-[#27409A]
                     transition-all duration-200 cursor-pointer group rotate-180"
        >
          <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" />
        </button>
      )}

      {/* ─── Quick Add Modal ───────────────────────────────────────────────── */}
      {quickAddProduct && (
        <QuickAddModal
          product={quickAddProduct}
          onClose={() => setQuickAddProduct(null)}
        />
      )}
    </section>
  );
}

// ─── Single Product Cell ──────────────────────────────────────────────────────

function ProductCell({ product, isFirst, isLast, onQuickAdd }) {
  return (
    <div
      className={`
        relative flex-shrink-0 flex flex-col
        w-[84vw] sm:w-1/2 lg:w-1/4
        bg-white
        ${!isLast ? "border-r border-neutral-200" : ""}
      `}
      draggable={false}
    >
      {/* ── RESTOCKED badge ── */}
      {product.restocked && (
        <div
          aria-label="Restocked"
          className="absolute top-0 left-0 z-10 bg-[#27409A] text-white
                     text-[9px] font-black uppercase tracking-[0.2em] px-3 py-1.5"
        >
          Restocked
        </div>
      )}

      {/* ── Product image — 3:4, dominates the panel ── */}
      <Link
        href={`/products/${product.slug}`}
        className="group relative block w-full overflow-hidden bg-neutral-50"
        style={{ aspectRatio: "3 / 4" }}
        aria-label={`View ${product.series}`}
        draggable={false}
      >
        <Image
          src={product.image}
          alt={`${product.series} — ${product.category} — Walkline Footwear`}
          fill
          sizes="(max-width: 640px) 84vw, (max-width: 1024px) 50vw, 25vw"
          loading={isFirst ? "eager" : "lazy"}
          className="object-contain p-8 sm:p-10
                     transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
                     group-hover:scale-[1.04]"
          draggable={false}
        />
      </Link>
    </div>
  );
}

// ─── Quick Add Size Modal ─────────────────────────────────────────────────────

function QuickAddModal({ product, onClose }) {
  const { addItem } = useCart();
  const [selectedSize, setSelectedSize] = useState(product.availableSizes?.[0] || "");
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    if (!selectedSize) return;
    addItem({
      productId: product.id,
      slug:      product.slug,
      name:      product.series,
      category:  product.category,
      image:     product.image,
      size:      selectedSize,
      quantity:  1,
    });
    setIsAdded(true);
    setTimeout(() => { setIsAdded(false); onClose(); }, 900);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Select size for ${product.series}`}
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/50 backdrop-blur-sm p-0 sm:p-4"
      onClick={onClose}
    >
      <div
        className="w-full sm:max-w-md bg-white rounded-t-3xl sm:rounded-2xl
                   border border-neutral-200 p-6 sm:p-8
                   shadow-xl max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between pb-4 border-b border-neutral-200 mb-5">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#27409A] block mb-0.5">
              {product.category}
            </span>
            <h3 className="text-xl font-black uppercase tracking-tight text-[#000000]">
              {product.series}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-neutral-100 text-[#000000] transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Product preview */}
        <div className="relative w-full aspect-[4/3] bg-neutral-50 rounded-xl mb-5 overflow-hidden">
          <Image src={product.image} alt={product.series} fill className="object-contain p-4" />
        </div>

        {/* Size grid */}
        <div className="mb-6">
          <p className="text-[11px] font-bold uppercase tracking-wider text-[#000000] mb-3">
            Select Size
          </p>
          <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
            {product.availableSizes?.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider border transition-all cursor-pointer ${
                  selectedSize === size
                    ? "bg-[#27409A] text-white border-[#27409A]"
                    : "bg-white text-[#000000] border-neutral-200 hover:border-[#27409A] hover:text-[#27409A]"
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Add to bag */}
        <button
          onClick={handleAddToCart}
          disabled={isAdded || !selectedSize}
          className="w-full py-4 rounded-xl bg-[#27409A] hover:bg-[#1E327A] text-white
                     font-bold uppercase tracking-[0.15em] text-xs transition-all
                     flex items-center justify-center gap-2 cursor-pointer shadow-md disabled:opacity-50"
        >
          {isAdded ? (
            <><Check className="w-4 h-4 text-white" /><span>Added to Bag</span></>
          ) : (
            <><ShoppingBag className="w-4 h-4 text-white" /><span>Add to Bag — {selectedSize || "Select Size"}</span></>
          )}
        </button>

        <div className="mt-4 text-center">
          <Link
            href={`/products/${product.slug}`}
            onClick={onClose}
            className="text-xs font-bold uppercase tracking-wider text-[#27409A] hover:text-[#000000]
                       inline-flex items-center gap-1.5 transition-colors"
          >
            <span>View Full Details</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
