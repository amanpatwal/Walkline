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
    yellow: "bg-[#24140D] text-[#C69A6B] border-y border-[#321D12]",
    black: "bg-[#24140D] text-[#FAF7F1] border-y border-[#321D12]",
    white: "bg-[#FFFFFF] text-[#24140D] border-y border-[#24140D]/10",
    pink: "bg-[#9A6238] text-white border-y border-[#24140D]/10",
    blue: "bg-[#5A351F] text-white border-y border-[#24140D]/10",
    // Walkline editorial palette
    brown: "bg-[#24140D] text-[#C69A6B] border-y border-[#321D12]",
    cream: "bg-[#F3E8D8] text-[#24140D] border-y border-[#24140D]/15",
    espresso: "bg-[#321D12] text-[#FAF7F1] border-y border-[#24140D]",
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
