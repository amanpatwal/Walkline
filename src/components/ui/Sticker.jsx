"use client";

import { cn } from "@/lib/utils";
import { Sparkles, Zap, Star } from "lucide-react";

export function CircularStamp({
  text = "WALKLINE FOOTWEAR • STREET CULTURE • ",
  className,
}) {
  return (
    <div className={cn("relative w-28 h-28 flex items-center justify-center select-none", className)}>
      {/* Rotating SVG Circular Text */}
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full animate-spin-slow origin-center"
      >
        <path
          id="circlePath"
          d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
          fill="none"
        />
        <text className="text-[9px] font-black uppercase tracking-[2.5px] fill-black">
          <textPath href="#circlePath" startOffset="0%">
            {text}
          </textPath>
        </text>
      </svg>
      {/* Center Icon Badge */}
      <div className="absolute w-10 h-10 rounded-full bg-[#C69A6B] border border-[#24140D] flex items-center justify-center font-bold text-xs shadow-sm">
        <Zap className="w-5 h-5 text-[#24140D] fill-[#24140D]" />
      </div>
    </div>
  );
}

export function DropBadge({
  text = "NEW DROP",
  variant = "brown",
  rotate = "-rotate-1",
  className,
}) {
  const variantStyles = {
    yellow: "bg-[#C69A6B] text-[#24140D] border border-[#24140D]/20 shadow-sm",
    pink: "bg-[#9A6238] text-[#FAF7F1] border border-[#24140D]/20 shadow-sm",
    blue: "bg-[#5A351F] text-[#FAF7F1] border border-[#24140D]/20 shadow-sm",
    green: "bg-[#4A5D4E] text-[#FAF7F1] border border-[#24140D]/20 shadow-sm",
    orange: "bg-[#9A6238] text-[#FAF7F1] border border-[#24140D]/20 shadow-sm",
    black: "bg-[#24140D] text-[#FAF7F1] border border-[#321D12] shadow-sm",
    brown: "bg-[#321D12] text-[#FAF7F1] border border-[#24140D] shadow-sm",
  };

  return (
    <div
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider transition-transform hover:scale-105 select-none",
        variantStyles[variant] || variantStyles.brown,
        rotate,
        className
      )}
    >
      <Sparkles className="w-3.5 h-3.5" />
      <span>{text}</span>
    </div>
  );
}

export function StarPill({ text = "LIMITED", className }) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-white border border-[#24140D]/20 text-[11px] font-mono font-bold text-[#24140D] uppercase tracking-widest",
        className
      )}
    >
      <Star className="w-3 h-3 text-[#C69A6B] fill-[#C69A6B]" />
      <span>{text}</span>
    </div>
  );
}
