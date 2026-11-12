"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

// ─── Featured Products Horizontal Carousel ────────────────────────────────────
// 4 newly uploaded lifestyle images from /assets/lifestyle/
// Seamless infinite loop repeating from slide 1.

const CAROUSEL_ITEMS = [
  {
    id: "lifestyle-slide-1",
    image: "/assets/lifestyle/1 (5).jpg",
    alt: "Walkline Footwear — Insole and Buckle Craft Detail",
  },
  {
    id: "lifestyle-slide-2",
    image: "/assets/lifestyle/2 (6).jpg",
    alt: "Walkline Footwear — Comfort Sandal Perspective Angle",
  },
  {
    id: "lifestyle-slide-3",
    image: "/assets/lifestyle/3 (1).jpg",
    alt: "Walkline Footwear — Lifestyle Footwear On Foot",
  },
  {
    id: "lifestyle-slide-4",
    image: "/assets/lifestyle/4 (1).jpg",
    alt: "Walkline Footwear — Comfort Sandal Side Profile",
  },
];

const N = CAROUSEL_ITEMS.length; // 4
// Repeat across 6 blocks (24 items) for perfectly seamless infinite looping
const REPEAT_BLOCKS = 6;
const EXTENDED_ITEMS = Array(REPEAT_BLOCKS).fill(CAROUSEL_ITEMS).flat();
const INITIAL_INDEX = 2 * N; // Index 8: starts at block 2

export default function FeaturedProducts() {
  const containerRef = useRef(null);
  const trackRef = useRef(null);

  const [currentIndex, setCurrentIndex] = useState(INITIAL_INDEX);
  const [animated, setAnimated] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [containerWidth, setContainerWidth] = useState(1200);

  const isPausedRef = useRef(false);
  useEffect(() => {
    isPausedRef.current = isPaused;
  }, [isPaused]);

  const indexRef = useRef(INITIAL_INDEX);
  useEffect(() => {
    indexRef.current = currentIndex;
  }, [currentIndex]);

  const transitionLockRef = useRef(false);
  const autoplayTimerRef = useRef(null);

  // Responsive cards per view: 4 on desktop, 2 on tablet, 1 on mobile
  const getCardsPerView = useCallback((width) => {
    if (width >= 1024) return 4;
    if (width >= 640) return 2;
    return 1;
  }, []);

  const cardsPerView = getCardsPerView(containerWidth);
  const cardWidth = containerWidth > 0 ? containerWidth / cardsPerView : 300;

  // Track container width via ResizeObserver
  useEffect(() => {
    if (!containerRef.current) return;
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.clientWidth);
      }
    };
    updateWidth();

    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        if (entry.contentRect.width > 0) {
          setContainerWidth(entry.contentRect.width);
        }
      }
    });

    resizeObserver.observe(containerRef.current);
    return () => resizeObserver.disconnect();
  }, []);

  // Check reduced motion
  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Move slide
  const moveTo = useCallback(
    (targetIdx, withAnimation = true) => {
      if (transitionLockRef.current) return;
      if (prefersReducedMotion || !withAnimation) {
        setAnimated(false);
        setCurrentIndex(targetIdx);
        indexRef.current = targetIdx;
      } else {
        transitionLockRef.current = true;
        setAnimated(true);
        setCurrentIndex(targetIdx);
        indexRef.current = targetIdx;
        // Safety unlock in case transitionend event is missed
        setTimeout(() => {
          transitionLockRef.current = false;
        }, 650);
      }
    },
    [prefersReducedMotion]
  );

  const goNext = useCallback(() => {
    if (transitionLockRef.current) return;
    moveTo(indexRef.current + 1, true);
  }, [moveTo]);

  const goPrev = useCallback(() => {
    if (transitionLockRef.current) return;
    moveTo(indexRef.current - 1, true);
  }, [moveTo]);

  // Restart autoplay timer on user interaction
  const resetAutoplayTimer = useCallback(() => {
    if (autoplayTimerRef.current) clearInterval(autoplayTimerRef.current);
    autoplayTimerRef.current = setInterval(() => {
      if (!isPausedRef.current) {
        goNext();
      }
    }, 3500);
  }, [goNext]);

  const handleNext = useCallback(() => {
    goNext();
    resetAutoplayTimer();
  }, [goNext, resetAutoplayTimer]);

  const handlePrev = useCallback(() => {
    goPrev();
    resetAutoplayTimer();
  }, [goPrev, resetAutoplayTimer]);

  // Infinite loop boundary jump on transitionend
  useEffect(() => {
    const trackEl = trackRef.current;
    if (!trackEl) return;

    const onTransitionEnd = () => {
      transitionLockRef.current = false;
      const cur = indexRef.current;

      // Reached past block 3 (cur >= 4 * N) -> snap seamlessly backward by 2 blocks (2 * N items)
      if (cur >= 4 * N) {
        setAnimated(false);
        const resetIdx = cur - 2 * N;
        setCurrentIndex(resetIdx);
        indexRef.current = resetIdx;
      }
      // Reached before block 2 (cur < 2 * N) -> snap seamlessly forward by 2 blocks (2 * N items)
      else if (cur < 2 * N) {
        setAnimated(false);
        const resetIdx = cur + 2 * N;
        setCurrentIndex(resetIdx);
        indexRef.current = resetIdx;
      }
    };

    trackEl.addEventListener("transitionend", onTransitionEnd);
    return () => trackEl.removeEventListener("transitionend", onTransitionEnd);
  }, []);

  // Autoplay setup
  useEffect(() => {
    resetAutoplayTimer();
    return () => {
      if (autoplayTimerRef.current) clearInterval(autoplayTimerRef.current);
    };
  }, [resetAutoplayTimer]);

  // Pause when browser tab is inactive / not visible
  useEffect(() => {
    const handleVisibility = () => {
      if (document.hidden) {
        setIsPaused(true);
      } else {
        setIsPaused(false);
      }
    };
    document.addEventListener("visibilitychange", handleVisibility);
    return () => document.removeEventListener("visibilitychange", handleVisibility);
  }, []);

  // Touch and drag swipe
  const dragStartX = useRef(0);
  const isDragging = useRef(false);

  const handleTouchStart = (e) => {
    setIsPaused(true);
    dragStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const delta = dragStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(delta) > 40) {
      if (delta > 0) handleNext();
      else handlePrev();
    }
    setIsPaused(false);
  };

  const handleMouseDown = (e) => {
    setIsPaused(true);
    isDragging.current = true;
    dragStartX.current = e.clientX;
    e.preventDefault();
  };

  const handleMouseUp = (e) => {
    if (!isDragging.current) return;
    isDragging.current = false;
    const delta = dragStartX.current - e.clientX;
    if (Math.abs(delta) > 40) {
      if (delta > 0) handleNext();
      else handlePrev();
    }
    setIsPaused(false);
  };

  const translateX = -currentIndex * cardWidth;
  const transitionStyle = animated && !prefersReducedMotion
    ? "transform 600ms cubic-bezier(0.16, 1, 0.3, 1)"
    : "none";

  return (
    <section
      id="products"
      aria-label="Walkline Footwear — Featured Products Showcase"
      className="relative w-full bg-white text-[#000000] overflow-hidden select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* ─── Sliding Track ─────────────────────────────────────────────────── */}
      <div
        ref={containerRef}
        className="w-full overflow-hidden"
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        <div
          ref={trackRef}
          className="flex"
          style={{
            transform: `translateX(${translateX}px)`,
            transition: transitionStyle,
            willChange: "transform",
            cursor: "grab",
          }}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleMouseDown}
        >
          {EXTENDED_ITEMS.map((item, idx) => (
            <ProductCell
              key={`${item.id}-${idx}`}
              item={item}
              cardWidth={cardWidth}
            />
          ))}
        </div>
      </div>

      {/* ─── Next button (Right) ─────── */}
      <button
        type="button"
        onClick={handleNext}
        aria-label="View next products"
        className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 z-20
                   w-11 h-11 rounded-full
                   bg-white/95 backdrop-blur-sm shadow-lg border border-neutral-200
                   flex items-center justify-center
                   text-[#000000] hover:bg-[#27409A] hover:text-white hover:border-[#27409A]
                   transition-all duration-200 cursor-pointer group active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#27409A]"
      >
        <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" />
      </button>

      {/* ─── Prev button (Left) ─────── */}
      <button
        type="button"
        onClick={handlePrev}
        aria-label="View previous products"
        className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 z-20
                   w-11 h-11 rounded-full
                   bg-white/95 backdrop-blur-sm shadow-lg border border-neutral-200
                   flex items-center justify-center
                   text-[#000000] hover:bg-[#27409A] hover:text-white hover:border-[#27409A]
                   transition-all duration-200 cursor-pointer group active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#27409A] rotate-180"
      >
        <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" />
      </button>

    </section>
  );
}

// ─── Single Product Cell ──────────────────────────────────────────────────────

function ProductCell({ item, cardWidth }) {
  return (
    <div
      className="relative flex-shrink-0 flex flex-col bg-white border-r border-neutral-200"
      style={{ width: `${cardWidth}px` }}
      draggable={false}
    >
      {/* ── Lifestyle product image — unlinked full-panel presentation ── */}
      <div
        className="group relative block w-full overflow-hidden bg-white"
        style={{ aspectRatio: "4 / 4.5" }}
        draggable={false}
      >
        <Image
          src={item.image}
          alt={item.alt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          loading="lazy"
          className="object-cover transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
                     group-hover:scale-[1.04]"
          draggable={false}
        />
      </div>
    </div>
  );
}
