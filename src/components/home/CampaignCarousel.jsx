"use client";

import { useState, useEffect, useRef, useCallback, useSyncExternalStore } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { assets } from "@/data/assets";

function subscribeReducedMotion(callback) {
  const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  mediaQuery.addEventListener("change", callback);
  return () => mediaQuery.removeEventListener("change", callback);
}

function getReducedMotionSnapshot() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function getReducedMotionServerSnapshot() {
  return false;
}

const CAMPAIGN_SLIDES = [
  {
    id: "weekend-mode",
    title: "Weekend Mode",
    category: "Men's Sandals & Chappals",
    image: assets.campaigns.weekend,
    objectPosition: "center 30%",
    mobileObjectPosition: "center center",
    theme: "dark",
    href: "/men",
    ctaLabel: "Shop Men",
  },
  {
    id: "move-different",
    title: "Move Different",
    category: "Women's Sneakers // #NOIRFEVER",
    image: assets.campaigns.moveDifferent,
    objectPosition: "center center",
    mobileObjectPosition: "58% center",
    theme: "dark",
    href: "/women",
    ctaLabel: "Shop Women",
  },
  {
    id: "sporty-looks-better",
    title: "Sporty Looks Better",
    category: "Court & Lifestyle Sneakers",
    image: assets.campaigns.sporty,
    objectPosition: "center 35%",
    mobileObjectPosition: "center center",
    theme: "dark",
    href: "/women",
    ctaLabel: "Discover Court",
  },
  {
    id: "fresh-in-rotation",
    title: "Fresh In Rotation",
    category: "Curated Drops & New In",
    image: assets.campaigns.freshRotation,
    objectPosition: "center center",
    mobileObjectPosition: "center center",
    theme: "dark",
    href: "/collections",
    ctaLabel: "Explore Drop",
  },
  {
    id: "summer-lifestyle",
    title: "Summer Lifestyle",
    category: "All-Day Comfort Slides",
    image: assets.campaigns.summer,
    objectPosition: "center 38%",
    mobileObjectPosition: "50% center",
    theme: "light",
    href: "/sandals",
    ctaLabel: "Shop Sandals",
  },
  {
    id: "bounce-sole",
    title: "Bounce Sole Slippers",
    category: "Engineered Comfort Base",
    image: assets.campaigns.bounceSole,
    objectPosition: "center 35%",
    mobileObjectPosition: "center center",
    theme: "dark",
    href: "/sandals",
    ctaLabel: "Explore Bounce",
  },
  {
    id: "rainy-days",
    title: "Rainy Days",
    category: "Waterproof Series & Casuals",
    image: assets.campaigns.rainyDays,
    objectPosition: "center 35%",
    mobileObjectPosition: "center center",
    theme: "dark",
    href: "/sandals",
    ctaLabel: "Shop Waterproof",
  },
];

const AUTOPLAY_DURATION = 5000; // 5 seconds per slide

export default function CampaignCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progressKey, setProgressKey] = useState(0); // Trigger progress bar animation reset

  const prefersReducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot
  );

  // Touch tracking for swipe gestures
  const touchStartXRef = useRef(0);
  const touchStartYRef = useRef(0);
  const touchStartTimeRef = useRef(0);

  // Interaction resume timer
  const resumeTimerRef = useRef(null);

  const goToSlide = useCallback((index) => {
    setCurrentIndex((index + CAMPAIGN_SLIDES.length) % CAMPAIGN_SLIDES.length);
    setProgressKey((k) => k + 1);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % CAMPAIGN_SLIDES.length);
    setProgressKey((k) => k + 1);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + CAMPAIGN_SLIDES.length) % CAMPAIGN_SLIDES.length);
    setProgressKey((k) => k + 1);
  }, []);

  // Temporary pause on interaction
  const triggerInteractionPause = useCallback(() => {
    setIsPaused(true);
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    resumeTimerRef.current = setTimeout(() => {
      setIsPaused(false);
    }, 7000);
  }, []);

  // Autoplay loop
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % CAMPAIGN_SLIDES.length);
      setProgressKey((k) => k + 1);
    }, AUTOPLAY_DURATION);

    return () => clearInterval(timer);
  }, [isPaused]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") {
        triggerInteractionPause();
        prevSlide();
      } else if (e.key === "ArrowRight") {
        triggerInteractionPause();
        nextSlide();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, prevSlide, triggerInteractionPause]);

  // Touch handlers
  const handleTouchStart = (e) => {
    touchStartXRef.current = e.touches[0].clientX;
    touchStartYRef.current = e.touches[0].clientY;
    touchStartTimeRef.current = Date.now();
  };

  const handleTouchEnd = (e) => {
    const deltaX = touchStartXRef.current - e.changedTouches[0].clientX;
    const deltaY = touchStartYRef.current - e.changedTouches[0].clientY;
    const duration = Date.now() - touchStartTimeRef.current;

    // Detect horizontal swipes, do not interfere with vertical scroll
    if (Math.abs(deltaX) > 40 && Math.abs(deltaX) > Math.abs(deltaY) && duration < 600) {
      triggerInteractionPause();
      if (deltaX > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
  };

  const currentSlide = CAMPAIGN_SLIDES[currentIndex];
  const isLight = currentSlide.theme === "light";

  return (
    <section
      aria-label="Walkline Stories — Campaign Spotlight Carousel"
      className="relative w-full py-12 sm:py-16 lg:py-20 bg-[#FAF7F1] text-[#24140D] border-t border-[#24140D]/10 overflow-hidden"
    >
      {/* ─── Section Editorial Label ─── */}
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-14 mb-6 sm:mb-8 flex items-end justify-between">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#9A6238] block mb-1">
            Campaign Spotlight • In Rotation
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight text-[#24140D]">
            Walkline Stories
          </h2>
        </div>

        <p className="hidden md:block text-xs text-[#5A351F]/80 max-w-xs text-right font-medium">
          Cinematic movement and engineered comfort across lifestyle, court, and casual drops.
        </p>
      </div>

      {/* ─── Carousel Stage (Wide Editorial Box) ─── */}
      <div className="max-w-[1440px] mx-auto px-0 sm:px-8 lg:px-14">
        <div
          className="relative w-full h-[440px] sm:h-[520px] lg:h-[620px] max-h-[700px] sm:rounded-3xl overflow-hidden bg-[#24140D] shadow-editorial-md select-none border-y sm:border border-[#24140D]/15"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Slides Stack */}
          {CAMPAIGN_SLIDES.map((slide, index) => {
            const isActive = index === currentIndex;
            const isNext = index === (currentIndex + 1) % CAMPAIGN_SLIDES.length;

            return (
              <div
                key={slide.id}
                role="group"
                aria-roledescription="slide"
                aria-label={`${index + 1} of ${CAMPAIGN_SLIDES.length}: ${slide.title}`}
                aria-hidden={!isActive}
                className={`absolute inset-0 w-full h-full transition-all ${
                  prefersReducedMotion
                    ? "duration-500 ease-out"
                    : "duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)]"
                } ${
                  isActive
                    ? "opacity-100 scale-100 z-10 pointer-events-auto"
                    : "opacity-0 scale-[1.03] z-0 pointer-events-none"
                }`}
              >
                {/* Campaign Image */}
                <div className="relative w-full h-full">
                  <Image
                    src={slide.image}
                    alt={`${slide.title} — Walkline Footwear`}
                    fill
                    loading={index === 0 || isNext ? "eager" : "lazy"}
                    quality={92}
                    sizes="(max-width: 1440px) 100vw, 1440px"
                    className="object-cover"
                    style={{
                      objectPosition: slide.objectPosition,
                    }}
                  />

                  {/* Vignette Shadow (Edges & Bottom only) */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/25 pointer-events-none" />
                </div>

                {/* Minimal Bottom-Right CTA in clear negative space */}
                <div className="absolute bottom-6 sm:bottom-8 right-5 sm:right-8 z-20">
                  <Link
                    href={slide.href}
                    className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-md transition-all shadow-editorial-sm group ${
                      isLight
                        ? "bg-[#24140D]/90 text-[#FAF7F1] hover:bg-[#321D12]"
                        : "bg-[#FAF7F1]/90 text-[#24140D] hover:bg-[#FAF7F1] hover:shadow-editorial-md"
                    }`}
                  >
                    <span>{slide.ctaLabel}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            );
          })}

          {/* Minimal Arrow Controls (Desktop) */}
          <button
            type="button"
            onClick={() => {
              triggerInteractionPause();
              prevSlide();
            }}
            className="hidden md:flex absolute left-5 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full items-center justify-center bg-black/30 hover:bg-black/65 text-white backdrop-blur-md border border-white/20 transition-all cursor-pointer group shadow-sm"
            aria-label="Previous campaign slide"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1.5 transition-transform duration-300" />
          </button>

          <button
            type="button"
            onClick={() => {
              triggerInteractionPause();
              nextSlide();
            }}
            className="hidden md:flex absolute right-5 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full items-center justify-center bg-black/30 hover:bg-black/65 text-white backdrop-blur-md border border-white/20 transition-all cursor-pointer group shadow-sm"
            aria-label="Next campaign slide"
          >
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
          </button>

          {/* Bottom Left: Progress Indicator + Animated Bar */}
          <div className="absolute bottom-6 sm:bottom-8 left-5 sm:left-8 z-30 flex items-center gap-3.5">
            {/* Number Counter */}
            <div
              className={`flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-mono font-bold backdrop-blur-md transition-colors ${
                isLight
                  ? "bg-[#24140D]/75 text-[#FAF7F1]"
                  : "bg-black/50 text-white/95 border border-white/10"
              }`}
            >
              <span>0{currentIndex + 1}</span>
              <span className="opacity-40">/</span>
              <span className="opacity-60">0{CAMPAIGN_SLIDES.length}</span>
            </div>

            {/* Dynamic Smooth Animated Progress Bar */}
            <div
              className={`relative w-24 sm:w-32 h-1.5 rounded-full overflow-hidden backdrop-blur-xs ${
                isLight ? "bg-[#24140D]/25" : "bg-white/25"
              }`}
            >
              <div
                key={progressKey}
                className={`h-full rounded-full ${
                  isLight ? "bg-[#24140D]" : "bg-white"
                } ${
                  isPaused
                    ? "w-full opacity-60"
                    : "animate-[carouselProgress_5000ms_linear]"
                }`}
                style={{
                  animationDuration: `${AUTOPLAY_DURATION}ms`,
                }}
              />
            </div>

            {/* Dash buttons for quick jump */}
            <div className="hidden lg:flex items-center gap-1.5">
              {CAMPAIGN_SLIDES.map((slide, idx) => (
                <button
                  key={slide.id}
                  type="button"
                  onClick={() => {
                    triggerInteractionPause();
                    goToSlide(idx);
                  }}
                  className={`w-2 h-2 rounded-full transition-all cursor-pointer ${
                    idx === currentIndex
                      ? isLight
                        ? "bg-[#24140D] scale-125"
                        : "bg-white scale-125"
                      : isLight
                      ? "bg-[#24140D]/30 hover:bg-[#24140D]/60"
                      : "bg-white/30 hover:bg-white/60"
                  }`}
                  aria-label={`Jump to slide 0${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
