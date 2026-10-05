"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { cn } from "@/lib/utils";

export default function Marquee({
  items = [
    "WALKLINE",
    "NEW DROP",
    "100% STREET ENGINEERED",
    "MADE TO MOVE",
    "FRESH HEAT",
    "ALL-DAY COMFORT",
  ],
  speed = 25,
  direction = "left",
  variant = "brown", // brown, cream, espresso, white
  className,
}) {
  const marqueeRef = useRef(null);

  const variantClasses = {
    yellow: "bg-[#000000] text-[#27409A] border-y border-neutral-900",
    black: "bg-[#000000] text-white border-y border-neutral-900",
    white: "bg-[#FFFFFF] text-[#000000] border-y border-neutral-200",
    pink: "bg-[#27409A] text-white border-y border-[#27409A]",
    blue: "bg-[#27409A] text-white border-y border-[#1E327A]",
    // Brand palette: black background with blue accent text
    brown: "bg-[#000000] text-[#27409A] border-y border-neutral-900",
    cream: "bg-white text-[#000000] border-y border-neutral-200",
    espresso: "bg-[#000000] text-white border-y border-neutral-900",
  };

  // Duplicate items 4 times to ensure seamless infinite loop
  const displayItems = [...items, ...items, ...items, ...items];

  return (
    <div
      className={cn(
        "relative w-full overflow-hidden py-3 sm:py-4 select-none",
        variantClasses[variant] || variantClasses.yellow,
        className
      )}
    >
      <div className="flex w-max animate-marquee">
        {displayItems.map((item, idx) => (
          <div
            key={idx}
            className="flex items-center gap-4 sm:gap-6 px-4 sm:px-6 font-black text-sm sm:text-base md:text-lg uppercase tracking-tight"
          >
            <span>{item}</span>
            <span className="w-2 h-2 rounded-full bg-current opacity-60 inline-block" />
          </div>
        ))}
      </div>
    </div>
  );
}
