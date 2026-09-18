"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

export default function MetricCard({
  number,
  label,
  subtext,
  badge,
  className,
  theme = "dark",
}) {
  const cardRef = useRef(null);
  const numberRef = useRef(null);
  const isDark = theme === "dark";

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion || !cardRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(cardRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 88%",
          toggleActions: "play none none reverse",
        },
      });
    }, cardRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={cardRef}
      className={cn(
        "relative p-6 sm:p-8 rounded-2xl flex flex-col justify-between transition-all duration-300 border group",
        isDark
          ? "bg-[#161514] border-white/10 hover:border-white/20 text-[#F5F3EF]"
          : "bg-[#ECE9E2] border-[#111111]/10 hover:border-[#111111]/20 text-[#111111]",
        className
      )}
    >
      <div className="flex items-start justify-between gap-4 mb-6">
        <span
          className={cn(
            "text-xs font-semibold uppercase tracking-[0.2em]",
            isDark ? "text-[#8E8A83]" : "text-[#6F6B65]"
          )}
        >
          {label}
        </span>
        {badge && (
          <span
            className={cn(
              "text-[10px] uppercase font-mono px-2 py-0.5 rounded border tracking-wider",
              isDark
                ? "text-[#C85237] border-[#C85237]/30 bg-[#C85237]/10"
                : "text-[#C85237] border-[#C85237]/30 bg-[#C85237]/10"
            )}
          >
            {badge}
          </span>
        )}
      </div>

      <div className="space-y-2">
        <div
          ref={numberRef}
          className={cn(
            "text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-sans leading-none",
            isDark ? "text-white" : "text-[#111111]"
          )}
        >
          {number}
        </div>
        {subtext && (
          <p
            className={cn(
              "text-xs sm:text-sm leading-relaxed mt-2",
              isDark ? "text-[#9E9990]" : "text-[#6F6B65]"
            )}
          >
            {subtext}
          </p>
        )}
      </div>
    </div>
  );
}
