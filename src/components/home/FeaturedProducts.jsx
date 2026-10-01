"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, X, ShoppingBag } from "lucide-react";
import { FEATURED_PRODUCTS } from "@/data/products";
import { useCart } from "@/context/CartContext";

// ─── Walkline Product Carousel ────────────────────────────────────────────────
// Full-width, no header, no outer container.
// 4 products visible on desktop. Right-edge nav button.
// Product info (name + category + price if available) lives INSIDE each panel.
// RESTOCKED badge shown only when product.restocked is truthy in product data.

export default function FeaturedProducts() {
  const [translateX, setTranslateX] = useState(0);     // px offset of track
  const [canGoNext, setCanGoNext]   = useState(true);
  const [canGoPrev, setCanGoPrev]   = useState(false);
  const [quickAddProduct, setQuickAddProduct] = useState(null);

  const containerRef = useRef(null);   // overflow:hidden wrapper
  const trackRef     = useRef(null);   // the flex row of cells

  // ── Measure cell width & boundaries ──────────────────────────────────────
  const getCellWidth = useCallback(() => {
    const firstCell = trackRef.current?.children[0];
    return firstCell ? firstCell.getBoundingClientRect().width : 0;
  }, []);

  const getMaxTranslate = useCallback(() => {
    if (!trackRef.current || !containerRef.current) return 0;
    const trackW = trackRef.current.scrollWidth;
    const containerW = containerRef.current.clientWidth;
    return Math.max(0, trackW - containerW);
  }, []);

  // Re-evaluate button visibility whenever translateX changes
  const refreshNav = useCallback((tx) => {
    setCanGoPrev(tx < 0);
    // Use setTimeout 0 so DOM has updated after a resize-triggered re-render
    setTimeout(() => setCanGoNext(Math.abs(tx) < getMaxTranslate() - 1), 0);
  }, [getMaxTranslate]);

  // Sync on mount & resize
  useEffect(() => {
    const sync = () => {
      // Clamp current offset when container resizes
      const max = getMaxTranslate();
      setTranslateX(prev => {
        const clamped = Math.max(-max, Math.min(0, prev));
        refreshNav(clamped);
        return clamped;
      });
    };
    sync();
    const ro = new ResizeObserver(sync);
    if (containerRef.current) ro.observe(containerRef.current);
    return () => ro.disconnect();
  }, [getMaxTranslate, refreshNav]);

  // ── Navigation ────────────────────────────────────────────────────────────
  const goNext = useCallback(() => {
    const cellW = getCellWidth();
    const max   = getMaxTranslate();
    setTranslateX(prev => {
      const next = Math.max(prev - cellW, -max);
      refreshNav(next);
      return next;
    });
  }, [getCellWidth, getMaxTranslate, refreshNav]);

  const goPrev = useCallback(() => {
    const cellW = getCellWidth();
    setTranslateX(prev => {
      const next = Math.min(prev + cellW, 0);
      refreshNav(next);
      return next;
    });
  }, [getCellWidth, refreshNav]);

  // ── Touch / swipe ─────────────────────────────────────────────────────────
  const touchStartX   = useRef(0);
  const touchStartTx  = useRef(0);

  const handleTouchStart = (e) => {
    touchStartX.current  = e.touches[0].clientX;
    touchStartTx.current = translateX;
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
      className="relative w-full bg-white text-[#24140D] overflow-hidden select-none"
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

      {/* ─── Right-edge next button (floats at image vertical center) ─────── */}
      {canGoNext && (
        <button
          type="button"
          onClick={goNext}
          aria-label="View next products"
          className="absolute right-3 sm:right-4 top-[42%] -translate-y-1/2 z-20
                     w-11 h-11 rounded-full
                     bg-white/95 shadow-editorial-lg border border-[#24140D]/12
                     flex items-center justify-center
                     text-[#24140D] hover:bg-[#24140D] hover:text-white
                     transition-all duration-200 cursor-pointer group"
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
        ${!isLast ? "border-r border-[#24140D]/10" : ""}
      `}
      draggable={false}
    >
      {/* ── RESTOCKED badge — only if product.restocked is truthy ── */}
      {product.restocked && (
        <div
          aria-label="Restocked"
          className="absolute top-0 left-0 z-10 bg-[#24140D] text-[#FAF7F1]
                     text-[9px] font-black uppercase tracking-[0.2em] px-3 py-1.5"
        >
          Restocked
        </div>
      )}

      {/* ── Product image — 3:4, dominates the panel ── */}
      <Link
        href={`/products/${product.slug}`}
        className="group relative block w-full overflow-hidden bg-[#F5F1EB]"
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

      {/* ── Product info row — inside the panel, at the bottom ── */}
      <div className="flex items-center justify-between gap-3 px-4 sm:px-5 py-3.5 sm:py-4 border-t border-[#24140D]/10">
        {/* Left: Name + Category */}
        <div className="min-w-0 flex-1">
          <Link
            href={`/products/${product.slug}`}
            className="block group/title"
            draggable={false}
          >
            <h3 className="text-[13px] sm:text-sm font-black uppercase tracking-tight text-[#24140D]
                           group-hover/title:text-[#9A6238] transition-colors duration-200 truncate">
              {product.series}
            </h3>
          </Link>
          <p className="text-[10px] sm:text-[11px] text-[#8A6E58] mt-0.5 truncate font-medium leading-tight">
            {product.category}
          </p>
        </div>

        {/* Right: Price (only if product data includes it) */}
        {product.price && (
          <span className="shrink-0 text-sm font-black text-[#24140D] tabular-nums">
            ₹{product.price.toLocaleString("en-IN")}
          </span>
        )}

        {/* Quick Add to Bag */}
        <button
          type="button"
          onClick={onQuickAdd}
          aria-label={`Add ${product.series} to bag`}
          className="shrink-0 p-2 rounded-full bg-[#24140D] text-[#FAF7F1]
                     hover:bg-[#9A6238] transition-colors duration-200 cursor-pointer"
        >
          <ShoppingBag className="w-3.5 h-3.5" />
        </button>
      </div>
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
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/40 backdrop-blur-sm p-0 sm:p-4"
      onClick={onClose}
    >
      <div
        className="w-full sm:max-w-md bg-white rounded-t-3xl sm:rounded-2xl
                   border border-[#24140D]/12 p-6 sm:p-8
                   shadow-editorial-lg max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between pb-4 border-b border-[#24140D]/10 mb-5">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#8A6E58] block mb-0.5">
              {product.category}
            </span>
            <h3 className="text-xl font-black uppercase tracking-tight text-[#24140D]">
              {product.series}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-[#F3E8D8] text-[#24140D] transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Product preview */}
        <div className="relative w-full aspect-[4/3] bg-[#F5F1EB] rounded-xl mb-5 overflow-hidden">
          <Image src={product.image} alt={product.series} fill className="object-contain p-4" />
        </div>

        {/* Size grid */}
        <div className="mb-6">
          <p className="text-[11px] font-bold uppercase tracking-wider text-[#24140D] mb-3">
            Select Size
          </p>
          <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
            {product.availableSizes?.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider border transition-all cursor-pointer ${
                  selectedSize === size
                    ? "bg-[#321D12] text-[#FAF7F1] border-[#321D12]"
                    : "bg-white text-[#24140D] border-[#24140D]/15 hover:border-[#9A6238]"
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
          className="w-full py-4 rounded-xl bg-[#321D12] hover:bg-[#5A351F] text-[#FAF7F1]
                     font-bold uppercase tracking-[0.15em] text-xs transition-all
                     flex items-center justify-center gap-2 cursor-pointer shadow-editorial-md"
        >
          {isAdded ? (
            <><Check className="w-4 h-4 text-[#C69A6B]" /><span>Added to Bag</span></>
          ) : (
            <><ShoppingBag className="w-4 h-4 text-[#C69A6B]" /><span>Add to Bag — {selectedSize || "Select Size"}</span></>
          )}
        </button>

        <div className="mt-4 text-center">
          <Link
            href={`/products/${product.slug}`}
            onClick={onClose}
            className="text-xs font-bold uppercase tracking-wider text-[#9A6238] hover:text-[#24140D]
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
