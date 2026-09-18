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
      <div className="absolute w-10 h-10 rounded-full bg-[#F4F000] border-2 border-black flex items-center justify-center font-black text-xs shadow-[2px_2px_0px_0px_#000]">
        <Zap className="w-5 h-5 text-black fill-black" />
      </div>
    </div>
  );
}

export function DropBadge({
  text = "NEW DROP",
  variant = "yellow",
  rotate = "-rotate-3",
  className,
}) {
  const variantStyles = {
    yellow: "bg-[#F4F000] text-black border-2 border-black shadow-[3px_3px_0px_0px_#000]",
    pink: "bg-[#FF4F7B] text-white border-2 border-black shadow-[3px_3px_0px_0px_#000]",
    blue: "bg-[#3155FF] text-white border-2 border-black shadow-[3px_3px_0px_0px_#000]",
    green: "bg-[#A8E63D] text-black border-2 border-black shadow-[3px_3px_0px_0px_#000]",
    orange: "bg-[#FF7A45] text-white border-2 border-black shadow-[3px_3px_0px_0px_#000]",
    black: "bg-black text-[#F4F000] border-2 border-black shadow-[3px_3px_0px_0px_#F4F000]",
  };

  return (
    <div
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider transition-transform hover:scale-105 select-none",
        variantStyles[variant] || variantStyles.yellow,
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
        "inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-white border border-black/20 text-[11px] font-mono font-bold text-black uppercase tracking-widest",
        className
      )}
    >
      <Star className="w-3 h-3 text-[#F4F000] fill-[#F4F000]" />
      <span>{text}</span>
    </div>
  );
}
