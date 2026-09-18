"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Container from "@/ui/Container";
import Button from "@/ui/Button";
import { CircularStamp, DropBadge } from "@/ui/Sticker";
import { ArrowDown } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";

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
      // 1. Entrance Choreography
      if (!prefersReducedMotion) {
        const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

        tl.fromTo(
          ".hero-title-line",
          { yPercent: 120, opacity: 0, rotate: 2 },
          { yPercent: 0, opacity: 1, rotate: 0, stagger: 0.1, duration: 0.9 }
        );

        tl.fromTo(
          shoeImageRef.current,
          { opacity: 0, y: 70, scale: 0.88 },
          { opacity: 1, y: 0, scale: 1, duration: 1.1, ease: "back.out(1.4)" },
          "-=0.7"
        );

        tl.fromTo(
          ".hero-pop-item",
          { opacity: 0, scale: 0.7, rotate: -10 },
          { opacity: 1, scale: 1, rotate: 0, stagger: 0.08, duration: 0.6, ease: "back.out(2)" },
          "-=0.5"
        );
      }

      // 2. Parallax Scroll Effect
      if (!prefersReducedMotion) {
        gsap.to(shoeImageRef.current, {
          y: -80,
          scale: 1.05,
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
      {/* Background Graphic Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:3rem_3rem]" />
        <div className="absolute top-1/4 right-10 w-[450px] h-[450px] rounded-full bg-[#F4F000]/25 blur-3xl" />
        <div className="absolute bottom-10 left-10 w-[350px] h-[350px] rounded-full bg-[#FF4F7B]/15 blur-3xl" />
      </div>

      <Container className="relative z-10 grow flex flex-col justify-between">
        {/* Top Campaign Bar */}
        <div className="flex items-center justify-between gap-4 mb-4">
          <div className="hero-pop-item">
            <DropBadge text="CRAFTING COMFORT & STYLE SINCE 2009" variant="yellow" rotate="-rotate-2" />
          </div>

          <div className="hidden sm:flex items-center gap-3">
            <span className="hero-pop-item text-xs font-mono font-bold text-[#666666] tracking-wider">
              [ MADE IN INDIA WITH PRIDE ]
            </span>
            <div className="hero-pop-item w-2.5 h-2.5 rounded-full bg-[#A8E63D] border border-black" />
          </div>
        </div>

        {/* Central Asymmetric Stage */}
        <div className="relative my-auto py-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Main Display Typography */}
          <div ref={headlineRef} className="lg:col-span-7 select-none space-y-4">
            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase tracking-[-0.05em] leading-[0.88] text-[#111111]">
              <span className="block overflow-hidden pb-1">
                <span className="hero-title-line block">WALK</span>
              </span>
              <span className="block overflow-hidden pb-1 text-[#111111]">
                <span className="hero-title-line block">YOUR WAY.</span>
              </span>
              <span className="block overflow-hidden pb-1 text-[#FF4F7B]">
                <span className="hero-title-line block">MOVE LOUD.</span>
              </span>
            </h1>

            <p className="hero-pop-item text-base sm:text-xl font-bold text-[#555555] max-w-lg leading-snug pt-2">
              {COMPANY_INFO.brandStatement}
            </p>

            {/* CTAs */}
            <div className="hero-pop-item flex flex-wrap items-center gap-4 pt-4">
              <Button
                href="#products"
                variant="yellow"
                size="lg"
                icon="arrow-up-right"
                className="text-sm font-black"
              >
                Explore Our Products
              </Button>

              <Button
                href="#collections"
                variant="outline"
                size="lg"
                showIcon={false}
                className="text-sm font-black"
              >
                View 4 Categories
              </Button>
            </div>
          </div>

          {/* Large Hero Footwear Visual Area */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            {/* Rotating Stamp */}
            <div
              ref={stampRef}
              className="hero-pop-item absolute -top-8 -right-4 sm:-right-8 z-20 hidden sm:block"
            >
              <CircularStamp text="WALKLINE FOOTWEAR • SINCE 2009 • " />
            </div>

            {/* Tilted Sticker Pill */}
            <div className="hero-pop-item absolute -bottom-4 left-4 z-20">
              <DropBadge text="NOIR-05 // SIGNATURE CORAL" variant="pink" rotate="rotate-3" />
            </div>

            {/* Footwear Graphic */}
            <div
              ref={shoeImageRef}
              className="relative w-full max-w-[580px] aspect-[16/11] drop-shadow-2xl will-change-transform"
            >
              <Image
                src="/images/hero/hero-shoe.svg"
                alt="Walkline Footwear Signature Series"
                fill
                priority
                className="object-contain filter drop-shadow-[0_25px_25px_rgba(0,0,0,0.18)] hover:scale-105 transition-transform duration-500 cursor-pointer"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
              />
            </div>
          </div>
        </div>

        {/* Bottom Hero Strip */}
        <div className="flex items-center justify-between pt-6 border-t-2 border-black/10 text-xs font-mono font-bold text-[#555555]">
          <div className="flex items-center gap-6">
            <span className="text-black font-black">VERTEX • NOIR-05 • FROOTI • VRX</span>
            <span className="hidden md:inline">ABOVE & BEYOND IN EVERY STEP</span>
          </div>

          <button
            onClick={handleScrollDown}
            className="flex items-center gap-2 text-black hover:text-[#3155FF] transition-colors cursor-pointer group"
            aria-label="Scroll to products"
          >
            <span className="uppercase tracking-widest text-[11px] font-black">Explore Products</span>
            <div className="p-1.5 rounded-full bg-[#F4F000] border-2 border-black group-hover:translate-y-0.5 transition-transform">
              <ArrowDown className="w-3.5 h-3.5 text-black" />
            </div>
          </button>
        </div>
      </Container>
    </section>
  );
}
