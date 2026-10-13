"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { assets } from "@/data/assets";

// ─── Hero Carousel — 3-slide horizontal loop ──────────────────────────────────
//
// SLIDES:
//   0  midnight.jpg           — X Lows Midnight  (baked-in SHOP MEN / SHOP WOMEN)
//   1  step-into-confidence   — Step Into Confidence  (CTA: SHOP NOW → /collections)
//   2  weekend-mode.jpg       — Weekend Mode  (CTA: SHOP SANDALS → /sandals)
//
// Image composition analysis:
//   Slide 2: Text left (0–42%), model right (42–100%)
//            → CTA placed bottom-left, below the subtitle (~top:72%, left:8%)
//   Slide 3: Feet/product left (0–54%), text right (54–100%)
//            → CTA placed bottom-right, below "COMFORT.STYLE.FREEDOM." (~bottom:9%, right:4%)
//
// STRATEGY: clone-slide infinite loop
//   DOM order:  [clone-2] [real-0] [real-1] [real-2] [clone-0]
//   trackIdx:      0          1       2        3         4
//   OFFSET = 1, initial trackIdx = 1 (real slide 0)
//
// TRANSITION:  820ms  cubic-bezier(0.22, 1, 0.36, 1)
// AUTOPLAY:    5000ms per slide (pause on hover/drag/focus)

const REAL_SLIDES = [
  {
    id: "midnight",
    src: assets.hero.midnight,
    alt: "X Lows Midnight — Walkline Footwear",
    // ── Artwork already has baked-in SHOP MEN / SHOP WOMEN buttons.
    // Transparent pixel-mapped hotspots activate them — no HTML CTA needed.
    links: [
      {
        href: "/men",
        label: "Shop Men",
        style: { left: "10.64%", top: "58.33%", width: "17.23%", height: "10.21%" },
      },
      {
        href: "/women",
        label: "Shop Women",
        style: { left: "28.73%", top: "58.33%", width: "17.23%", height: "10.21%" },
      },
    ],
    cta: null,
  },
  {
    id: "confidence",
    src: assets.hero.confidence,
    alt: "Step Into Confidence — Walkline Footwear",
    links: [],
    // ── Visual identity: grey background, black/editorial monochrome, clean fashion photography.
    // CTA lives bottom-left, under the "Crafted For Comfort" subtitle in the clear grey zone.
    // Style: near-black (#111111) rectangular button — premium, minimal, editorial.
    cta: {
      label: "SHOP NOW",
      href: "/collections",
      ariaLabel: "Step Into Confidence — Shop the collection",
      position: "absolute bottom-[12%] sm:bottom-[15%] left-[7%] sm:left-[8%]",
      // Dark editorial — matches grey/black monochrome aesthetic
      buttonClass:
        "group inline-flex items-center gap-2.5 " +
        "px-5 py-2.5 sm:px-6 sm:py-3 " +
        "text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] text-white " +
        "bg-[#111111] hover:bg-[#333333] active:scale-[0.98] " +
        "rounded-[2px] " +
        "transition-all duration-300 ease-out " +
        "shadow-[0_2px_12px_rgba(0,0,0,0.25)] hover:shadow-[0_4px_20px_rgba(0,0,0,0.35)] " +
        "focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-1 focus:ring-offset-black " +
        "hover:-translate-y-[2px]",
      arrowClass: "transition-transform duration-300 group-hover:translate-x-[3px]",
    },
  },
  {
    id: "weekend",
    src: assets.campaigns.weekend,
    alt: "Step Into Weekend Mode — Walkline Footwear",
    links: [],
    // ── Visual identity: warm green/yellow outdoor, earthy lifestyle, buckle sandal.
    // CTA lives bottom-right, below "COMFORT. STYLE. FREEDOM." in the right-side clear zone.
    // Style: warm earthy brown (#5A321C) pill capsule — matches grass/outdoor/natural palette.
    cta: {
      label: "SHOP SANDALS",
      href: "/sandals",
      ariaLabel: "Step Into Weekend Mode — Shop Sandals",
      position: "absolute bottom-[9%] sm:bottom-[12%] right-[4%] sm:right-[5%]",
      // Deep olive/forest green matching the "Weekend Mode" typography with sharp edges (no rounded borders)
      buttonClass:
        "group inline-flex items-center gap-2.5 " +
        "px-5 py-2.5 sm:px-7 sm:py-3 " +
        "text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] text-white " +
        "bg-[#2F461E] hover:bg-[#3B5726] active:scale-[0.98] " +
        "rounded-none " +
        "transition-all duration-300 ease-out " +
        "shadow-[0_2px_14px_rgba(47,70,30,0.35)] hover:shadow-[0_4px_22px_rgba(47,70,30,0.5)] " +
        "focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-1 focus:ring-offset-[#2F461E] " +
        "hover:-translate-y-[2px]",
      arrowClass: "transition-transform duration-300 group-hover:translate-x-[3px]",
    },
  },
];

const SLIDE_DURATION_MS = 3200; // Decreased from 5000ms for brisk, dynamic banner rotation
const TRANSITION_MS = 750;
const EASING = "cubic-bezier(0.16, 1, 0.3, 1)"; // Apple / Quintic out: smooth launch with graceful deceleration

const OFFSET = 1;                           // real slides start at track position 1
const TOTAL_TRACK = REAL_SLIDES.length + 2; // 5 = clone + 3 reals + clone

// translateX % is relative to the ELEMENT'S OWN width (track = TOTAL_TRACK * 100vw).
// Per-slide shift = 100vw = (100 / TOTAL_TRACK)% of track width.
function trackOffset(trackIdx) {
  return `translateX(${(-trackIdx * 100 / TOTAL_TRACK).toFixed(8)}%)`;
}

export default function HeroCarousel() {
  const [realIdx, setRealIdx] = useState(0);
  const [trackIdx, setTrackIdx] = useState(OFFSET);
  const [animated, setAnimated] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const trackRef = useRef(null);
  const autoplayRef = useRef(null);
  const transitionLockRef = useRef(false);
  const isPausedRef = useRef(false);

  // Keep ref in sync with state so autoplay callback always sees current value
  useEffect(() => { isPausedRef.current = isPaused; }, [isPaused]);

  // Touch / drag
  const dragStartX = useRef(null);
  const isDragging = useRef(false);

  // ── Refs for next/prev so autoplay interval always uses fresh values ──────────
  const trackIdxRef = useRef(OFFSET);
  const realIdxRef = useRef(0);

  useEffect(() => { trackIdxRef.current = trackIdx; }, [trackIdx]);
  useEffect(() => { realIdxRef.current = realIdx; }, [realIdx]);

  // ── Slide navigation ─────────────────────────────────────────────────────────

  const goTo = useCallback((nextReal, nextTrack, withAnimation = true) => {
    if (transitionLockRef.current) return;
    const snapToSlide = prefersReducedMotion || !withAnimation;
    const targetTrack = snapToSlide ? nextReal + OFFSET : nextTrack;
    transitionLockRef.current = !snapToSlide;
    setAnimated(withAnimation && !prefersReducedMotion);
    setRealIdx(nextReal);
    setTrackIdx(targetTrack);
    trackIdxRef.current = targetTrack;
    realIdxRef.current = nextReal;
  }, [prefersReducedMotion]);

  const next = useCallback(() => {
    if (transitionLockRef.current) return;
    const curTrack = trackIdxRef.current;
    const curReal = realIdxRef.current;
    goTo((curReal + 1) % REAL_SLIDES.length, curTrack + 1, true);
  }, [goTo]);

  const prev = useCallback(() => {
    if (transitionLockRef.current) return;
    const curTrack = trackIdxRef.current;
    const curReal = realIdxRef.current;
    goTo((curReal - 1 + REAL_SLIDES.length) % REAL_SLIDES.length, curTrack - 1, true);
  }, [goTo]);

  const jumpTo = useCallback((idx) => {
    if (transitionLockRef.current || idx === realIdxRef.current) return;
    goTo(idx, idx + OFFSET, true);
  }, [goTo]);

  // Reset timer on manual navigation so the user gets full duration
  const restartAutoplayTimer = useCallback(() => {
    if (autoplayRef.current) clearInterval(autoplayRef.current);
    autoplayRef.current = setInterval(() => {
      if (!isPausedRef.current) next();
    }, SLIDE_DURATION_MS);
  }, [next]);

  const handleNext = useCallback(() => {
    next();
    restartAutoplayTimer();
  }, [next, restartAutoplayTimer]);

  const handlePrev = useCallback(() => {
    prev();
    restartAutoplayTimer();
  }, [prev, restartAutoplayTimer]);

  const handleJumpTo = useCallback((idx) => {
    jumpTo(idx);
    restartAutoplayTimer();
  }, [jumpTo, restartAutoplayTimer]);

  // ── Transition-end: seamless infinite-loop jump ───────────────────────────────

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    const onTransitionEnd = () => {
      transitionLockRef.current = false;

      const cur = trackIdxRef.current;
      // Landed on clone-of-0 (track pos = TOTAL_TRACK - 1 = 4)
      if (cur === REAL_SLIDES.length + OFFSET) {
        setAnimated(false);
        const jumpTo = OFFSET;
        setTrackIdx(jumpTo);
        trackIdxRef.current = jumpTo;
        // realIdx is already 0
      }
      // Landed on clone-of-2 (track pos = 0)
      else if (cur === 0) {
        setAnimated(false);
        const jumpTo = REAL_SLIDES.length - 1 + OFFSET;
        setTrackIdx(jumpTo);
        trackIdxRef.current = jumpTo;
        // realIdx is already 2
      }
    };

    el.addEventListener("transitionend", onTransitionEnd);
    return () => el.removeEventListener("transitionend", onTransitionEnd);
  }, []); // stable — only reads refs inside

  // ── Autoplay — ref-based, no stale closures ───────────────────────────────────

  useEffect(() => {
    const tick = () => {
      if (!isPausedRef.current) next();
    };
    autoplayRef.current = setInterval(tick, SLIDE_DURATION_MS);
    return () => clearInterval(autoplayRef.current);
  }, [next]); // next is stable (only uses refs)

  const pauseAutoplay = useCallback(() => setIsPaused(true), []);
  const resumeAutoplay = useCallback(() => setIsPaused(false), []);

  // ── Touch / mouse drag ────────────────────────────────────────────────────────

  const handlePointerDown = useCallback((e) => {
    dragStartX.current = e.type === "touchstart" ? e.touches[0].clientX : e.clientX;
    isDragging.current = true;
    pauseAutoplay();
  }, [pauseAutoplay]);

  const handlePointerUp = useCallback((e) => {
    if (!isDragging.current) return;
    isDragging.current = false;
    const endX = e.type === "touchend"
      ? (e.changedTouches[0]?.clientX ?? dragStartX.current)
      : e.clientX;
    const delta = dragStartX.current - endX;
    if (Math.abs(delta) > 40) {
      if (delta > 0) handleNext();
      else handlePrev();
    }
    resumeAutoplay();
  }, [handleNext, handlePrev, resumeAutoplay]);

  // ── Keyboard navigation ───────────────────────────────────────────────────────

  const handleKeyDown = useCallback((e) => {
    if (e.key === "ArrowLeft") handlePrev();
    if (e.key === "ArrowRight") handleNext();
  }, [handlePrev, handleNext]);

  // ── Reduced-motion ────────────────────────────────────────────────────────────

  const transitionStyle = animated && !prefersReducedMotion
    ? `transform ${TRANSITION_MS}ms ${EASING}`
    : "none";

  // DOM: [clone-2, real-0, real-1, real-2, clone-0]
  const trackSlides = [
    REAL_SLIDES[REAL_SLIDES.length - 1],
    ...REAL_SLIDES,
    REAL_SLIDES[0],
  ];

  return (
    <section
      className="relative w-full overflow-hidden bg-[#000000] pb-14 sm:pb-0"
      aria-label="Walkline Footwear — Hero Banner Carousel"
      aria-roledescription="carousel"
      style={{ marginTop: "72px" }}
      onMouseEnter={pauseAutoplay}
      onMouseLeave={resumeAutoplay}
      onFocus={pauseAutoplay}
      onBlur={resumeAutoplay}
      onKeyDown={handleKeyDown}
      tabIndex={-1}
    >
      {/* ─── Slide Track ──────────────────────────────────────────────────── */}
      <div
        ref={trackRef}
        className="flex"
        style={{
          width: `${TOTAL_TRACK * 100}%`,
          transform: trackOffset(trackIdx),
          transition: transitionStyle,
          willChange: "transform",
        }}
        onMouseDown={handlePointerDown}
        onMouseUp={handlePointerUp}
        onMouseLeave={(e) => { if (isDragging.current) handlePointerUp(e); }}
        onTouchStart={handlePointerDown}
        onTouchEnd={handlePointerUp}
      >
        {trackSlides.map((slide, i) => {
          // Is this the real slide at track position OFFSET (real-0)?
          const isFirstReal = i === OFFSET;
          // Is this track position currently the active view?
          const isActiveView = i === trackIdx;

          return (
            <div
              key={`${slide.id}-${i}`}
              className="relative flex-shrink-0"
              style={{ width: `${100 / TOTAL_TRACK}%` }}
              role="group"
              aria-roledescription="slide"
              aria-hidden={!isActiveView}
            >
              {/* Campaign artwork — native 2200:852 aspect ratio with overflow containment */}
              <div
                className="relative w-full overflow-hidden"
                style={{ aspectRatio: slide.id === "weekend" ? "1897 / 735" : "2200 / 852" }}
              >
                {/* Cinematic zoom/depth settle on slide entry */}
                <div
                  className={`absolute inset-0 transition-transform duration-[850ms] ease-out ${
                    isActiveView ? "scale-100" : "scale-[1.035]"
                  }`}
                >
                  <Image
                    src={slide.src}
                    alt={slide.alt}
                    fill
                    priority={isFirstReal}
                    loading={isFirstReal ? "eager" : "lazy"}
                    quality={95}
                    className={`${slide.id === "weekend" ? "object-contain" : "object-cover object-center"} select-none`}
                    sizes="100vw"
                    draggable={false}
                  />
                </div>

                {/* Screen-reader h1 on first real slide only */}
                {isFirstReal && (
                  <h1 className="sr-only">Walkline Footwear — Premium Footwear Collection</h1>
                )}

                {/* Transparent pixel-mapped hotspots over baked-in artwork buttons (Slide 1) */}
                {slide.links.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    aria-label={link.label}
                    tabIndex={isActiveView ? 0 : -1}
                    className="absolute cursor-pointer transition-all duration-200 hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-[#27409A] active:scale-[0.99] rounded-sm"
                    style={link.style}
                  />
                ))}

                {/* Campaign-specific HTML CTA overlay with smooth entrance reveal */}
                {slide.cta && (
                  <div
                    className={`${slide.cta.position} transition-all duration-600 ease-out ${
                      isActiveView
                        ? "opacity-100 translate-y-0 scale-100 delay-150"
                        : "opacity-0 translate-y-3 scale-95 pointer-events-none"
                    }`}
                    style={{ zIndex: 10 }}
                  >
                    <Link
                      href={slide.cta.href}
                      aria-label={slide.cta.ariaLabel}
                      tabIndex={isActiveView ? 0 : -1}
                      className={slide.cta.buttonClass}
                    >
                      <span>{slide.cta.label}</span>
                      <svg
                        width="11"
                        height="11"
                        viewBox="0 0 12 12"
                        fill="none"
                        aria-hidden="true"
                        className={slide.cta.arrowClass}
                      >
                        <path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* ─── Previous arrow ──────────────────────────────────────────────── */}
      <button
        onClick={handlePrev}
        aria-label="Previous slide"
        className="group absolute bottom-1 left-3 top-auto translate-y-0 sm:bottom-auto sm:left-6 sm:top-1/2 sm:-translate-y-1/2 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-black/35 backdrop-blur-md border border-white/20 text-white hover:bg-black/65 hover:border-white/50 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-white transition-all duration-200 shadow-[0_4px_16px_rgba(0,0,0,0.3)]"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          aria-hidden="true"
          className="transition-transform duration-200 group-hover:-translate-x-0.5"
        >
          <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      {/* ─── Next arrow ──────────────────────────────────────────────────── */}
      <button
        onClick={handleNext}
        aria-label="Next slide"
        className="group absolute bottom-1 right-3 top-auto translate-y-0 sm:bottom-auto sm:right-6 sm:top-1/2 sm:-translate-y-1/2 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-black/35 backdrop-blur-md border border-white/20 text-white hover:bg-black/65 hover:border-white/50 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-white transition-all duration-200 shadow-[0_4px_16px_rgba(0,0,0,0.3)]"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          aria-hidden="true"
          className="transition-transform duration-200 group-hover:translate-x-0.5"
        >
          <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      {/* ─── Dot indicators with active progress bar ─────────────────────── */}
      <div
        className="absolute bottom-1 sm:bottom-5 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2"
        role="tablist"
        aria-label="Slide indicators"
      >
        {REAL_SLIDES.map((slide, i) => {
          const isActive = i === realIdx;
          return (
            <button
              key={slide.id}
              role="tab"
              aria-selected={isActive}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => handleJumpTo(i)}
              className="group relative flex h-11 w-11 items-center justify-center focus:outline-none focus:ring-2 focus:ring-white rounded-full p-1"
            >
              <span
                className="block rounded-full overflow-hidden relative transition-all duration-300 ease-out"
                style={{
                  backgroundColor: isActive
                    ? "rgba(255, 255, 255, 0.3)"
                    : "rgba(255, 255, 255, 0.45)",
                  width: isActive ? "28px" : "8px",
                  height: "7px",
                }}
              >
                {isActive && (
                  <span
                    key={`hero-progress-${realIdx}`}
                    className="absolute inset-y-0 left-0 bg-white rounded-full"
                    style={{
                      animation: `carouselProgress ${SLIDE_DURATION_MS}ms linear forwards`,
                      animationPlayState: isPaused ? "paused" : "running",
                    }}
                  />
                )}
              </span>
            </button>
          );
        })}
      </div>
    </section>
  );
}
