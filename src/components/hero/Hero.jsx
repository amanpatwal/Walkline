"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Container from "@/ui/Container";
import Button from "@/ui/Button";
import { CircularStamp, DropBadge } from "@/ui/Sticker";
import { ArrowDown, Sparkles, CheckCircle2 } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";
import { assets } from "@/data/assets";

export default function Hero() {
  const sectionRef = useRef(null);
  const shoeImageRef = useRef(null);
  const headlineRef = useRef(null);
  const stampRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      if (!prefersReducedMotion) {
        const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

        tl.fromTo(
          ".hero-eyebrow-item",
          { opacity: 0, y: -20 },
          { opacity: 1, y: 0, duration: 0.6 }
        );

        tl.fromTo(
          ".hero-title-line",
          { yPercent: 120, opacity: 0, rotate: 1 },
          { yPercent: 0, opacity: 1, rotate: 0, stagger: 0.12, duration: 0.9 },
          "-=0.3"
        );

        tl.fromTo(
          shoeImageRef.current,
          { opacity: 0, y: 60, scale: 0.9 },
          { opacity: 1, y: 0, scale: 1, duration: 1.1, ease: "back.out(1.2)" },
          "-=0.7"
        );

        tl.fromTo(
          ".hero-pop-item",
          { opacity: 0, scale: 0.8 },
          { opacity: 1, scale: 1, stagger: 0.08, duration: 0.5, ease: "back.out(2)" },
          "-=0.5"
        );

        // Subtle Parallax on scroll
        gsap.to(shoeImageRef.current, {
          y: -60,
          scale: 1.04,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleScrollDown = () => {
    const el = document.getElementById("products");
    if (el) {
      if (window.__lenis) {
        window.__lenis.scrollTo(el, { offset: -70 });
      } else {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-[92vh] lg:min-h-screen bg-[#F7F7F4] text-[#111111] overflow-hidden pt-36 pb-12 flex flex-col justify-between"
      aria-label="Walkline Footwear Campaign Hero"
    >
      {/* Editorial Subtle Grid & Ambience */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:3rem_3rem]" />
        <div className="absolute top-1/4 right-10 w-[500px] h-[500px] rounded-full bg-[#F4F000]/20 blur-3xl" />
        <div className="absolute bottom-10 left-10 w-[400px] h-[400px] rounded-full bg-[#3155FF]/10 blur-3xl" />
      </div>

      <Container className="relative z-10 grow flex flex-col justify-between">
        {/* Top Eyebrow Strip */}
        <div className="flex items-center justify-between gap-4 mb-4">
          <div className="hero-eyebrow-item flex items-center gap-3">
            <DropBadge
              text={`CRAFTING COMFORT & STYLE SINCE ${COMPANY_INFO.establishedYear}`}
              variant="yellow"
              rotate="-rotate-1"
            />
            <span className="hidden sm:inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#666666]">
              <span className="w-2 h-2 rounded-full bg-[#A8E63D] border border-black inline-block" />
              <span>[ 100% DESIGNED & CRAFTED IN INDIA ]</span>
            </span>
          </div>

          <div className="hero-eyebrow-item hidden md:flex items-center gap-2 text-xs font-mono font-bold text-[#888888]">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#3155FF]" />
            <span>AUTHENTIC INDIAN STREETWEAR</span>
          </div>
        </div>

        {/* Central Editorial Split */}
        <div className="relative my-auto py-4 sm:py-6 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* LEFT: Headline & Story Callouts */}
          <div ref={headlineRef} className="lg:col-span-7 select-none space-y-5">
            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[7.2rem] font-black uppercase tracking-[-0.05em] leading-[0.88] text-[#111111]">
              <span className="block overflow-hidden pb-1">
                <span className="hero-title-line block">WALK</span>
              </span>
              <span className="block overflow-hidden pb-1 text-[#111111]">
                <span className="hero-title-line block">YOUR WAY.</span>
              </span>
              <span className="block overflow-hidden pb-1 text-[#111111] flex items-center gap-3">
                <span className="hero-title-line block text-[#111111]">BUILT TO</span>
                <span className="hero-title-line block text-[#3155FF]">MOVE.</span>
              </span>
            </h1>

            <p className="hero-pop-item text-base sm:text-lg md:text-xl font-bold text-[#555555] max-w-xl leading-relaxed pt-1">
              {COMPANY_INFO.brandStatement}
            </p>

            {/* CTAs */}
            <div className="hero-pop-item flex flex-wrap items-center gap-4 pt-3">
              <Button
                href="#products"
                variant="yellow"
                size="lg"
                icon="arrow-up-right"
                className="text-xs sm:text-sm font-black px-7 py-3.5 shadow-[3px_3px_0px_0px_#000]"
              >
                Explore Our Products
              </Button>

              <Button
                href="#collections"
                variant="outline"
                size="lg"
                showIcon={false}
                className="text-xs sm:text-sm font-black px-7 py-3.5 bg-white"
              >
                View 4 Categories
              </Button>
            </div>

            {/* Micro Tags */}
            <div className="hero-pop-item flex flex-wrap items-center gap-2 pt-2">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#888888]">
                Verified Lines:
              </span>
              {["Vertex", "Noir-05", "Barbie-04", "VRX", "Frooti", "Concept"].map((m) => (
                <span
                  key={m}
                  className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-md bg-white border border-black/15 text-black"
                >
                  {m}
                </span>
              ))}
            </div>
          </div>

          {/* RIGHT: Large Editorial Footwear Showcase */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            {/* Rotating Heritage Stamp */}
            <div
              ref={stampRef}
              className="hero-pop-item absolute -top-10 -right-2 sm:-right-6 z-20 hidden sm:block"
            >
              <CircularStamp text="WALKLINE FOOTWEAR • SINCE 2009 • " />
            </div>

            {/* Floating Highlight Pill */}
            <div className="hero-pop-item absolute -bottom-5 left-4 z-20">
              <DropBadge
                text="NOIR-05 // SIGNATURE CORAL SOLE"
                variant="pink"
                rotate="rotate-2"
              />
            </div>

            {/* Floating Quality Tag */}
            <div className="hero-pop-item absolute top-6 -left-4 z-20 hidden md:block">
              <div className="px-3 py-1.5 rounded-xl bg-white border-2 border-black shadow-[2px_2px_0px_0px_#000] text-[10px] font-black uppercase text-black flex items-center gap-1.5">
                <Sparkles className="w-3 h-3 text-[#F4F000]" />
                <span>ALL-DAY COMFORT</span>
              </div>
            </div>

            {/* Footwear Imagery with Glow & Object-Contain */}
            <div
              ref={shoeImageRef}
              className="relative w-full max-w-[540px] aspect-[16/12] will-change-transform"
            >
              <Image
                src={assets.hero.primary}
                alt="Walkline Footwear Signature Series"
                fill
                priority
                className="object-contain filter drop-shadow-[0_25px_30px_rgba(0,0,0,0.18)] hover:scale-105 transition-transform duration-500 cursor-pointer"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 550px"
              />
            </div>
          </div>
        </div>

        {/* Bottom Hero Strip */}
        <div className="flex items-center justify-between pt-6 border-t-2 border-black/10 text-xs font-mono font-bold text-[#555555]">
          <div className="flex items-center gap-6">
            <span className="text-black font-black uppercase tracking-wider">
              BAHADURGARH CRAFT FACILITY
            </span>
            <span className="hidden md:inline">
              FREE SHIPPING OVER 500₹ | 30-DAY RETURNS
            </span>
          </div>

          <button
            onClick={handleScrollDown}
            className="flex items-center gap-2 text-black hover:text-[#3155FF] transition-colors cursor-pointer group"
            aria-label="Scroll down to products"
          >
            <span className="uppercase tracking-widest text-[11px] font-black">
              Explore Products
            </span>
            <div className="p-1.5 rounded-full bg-[#F4F000] border-2 border-black group-hover:translate-y-0.5 transition-transform shadow-[1px_1px_0px_0px_#000]">
              <ArrowDown className="w-3.5 h-3.5 text-black" />
            </div>
          </button>
        </div>
      </Container>
    </section>
  );
}
