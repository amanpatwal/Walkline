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
  variant = "yellow", // yellow, black, white, pink, blue
  className,
}) {
  const marqueeRef = useRef(null);

  const variantClasses = {
    yellow: "bg-[#F4F000] text-[#111111] border-y-2 border-[#111111]",
    black: "bg-[#111111] text-[#F4F000] border-y-2 border-[#F4F000]",
    white: "bg-[#FFFFFF] text-[#111111] border-y border-black/15",
    pink: "bg-[#FF4F7B] text-white border-y-2 border-[#111111]",
    blue: "bg-[#3155FF] text-white border-y-2 border-[#111111]",
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
