"use client";

import Link from "next/link";
import { ArrowUpRight, ArrowRight, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Button({
  children,
  href,
  onClick,
  variant = "yellow",
  size = "md",
  icon = "arrow-up-right",
  showIcon = true,
  className,
  target,
  rel,
  type = "button",
  ...props
}) {
  const baseClasses =
    "group inline-flex items-center justify-center font-extrabold tracking-tight transition-all duration-300 ease-out select-none focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-50 disabled:pointer-events-none cursor-pointer";

  const sizeClasses = {
    sm: "text-xs px-4 py-2 gap-1.5 rounded-full",
    md: "text-xs sm:text-sm px-6 py-3.5 gap-2 rounded-full",
    lg: "text-sm sm:text-base px-8 py-4 gap-2.5 rounded-full",
    iconOnly: "p-3 rounded-full",
  };

  const variantClasses = {
    yellow:
      "bg-[#F4F000] text-[#111111] hover:bg-[#111111] hover:text-[#F4F000] border-2 border-[#111111] shadow-[3px_3px_0px_0px_#111111] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none",
    dark:
      "bg-[#111111] text-[#FFFFFF] hover:bg-[#F4F000] hover:text-[#111111] border-2 border-[#111111] shadow-[3px_3px_0px_0px_#F4F000] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none",
    outline:
      "bg-transparent text-[#111111] border-2 border-[#111111] hover:bg-[#111111] hover:text-[#FFFFFF] shadow-[3px_3px_0px_0px_#111111] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none",
    pink:
      "bg-[#FF4F7B] text-white hover:bg-[#111111] hover:text-[#FF4F7B] border-2 border-[#111111] shadow-[3px_3px_0px_0px_#111111]",
    blue:
      "bg-[#3155FF] text-white hover:bg-[#111111] hover:text-[#3155FF] border-2 border-[#111111] shadow-[3px_3px_0px_0px_#111111]",
    white:
      "bg-[#FFFFFF] text-[#111111] border-2 border-[#111111] hover:bg-[#F4F000] shadow-[3px_3px_0px_0px_#111111]",
    ghost:
      "bg-transparent text-[#111111] hover:text-[#3155FF] p-0 underline-offset-4 hover:underline",
  };

  const combinedClasses = cn(
    baseClasses,
    sizeClasses[size],
    variantClasses[variant] || variantClasses.yellow,
    className
  );

  const renderIcon = () => {
    if (!showIcon) return null;
    if (icon === "arrow-up-right") {
      return (
        <ArrowUpRight className="w-4 h-4 transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      );
    }
    if (icon === "arrow-right") {
      return (
        <ArrowRight className="w-4 h-4 transition-transform duration-300 ease-out group-hover:translate-x-1" />
      );
    }
    if (icon === "sparkles") {
      return <Sparkles className="w-4 h-4" />;
    }
    return null;
  };

  if (href) {
    const isExternal = href.startsWith("http");
    return (
      <Link
        href={href}
        className={combinedClasses}
        target={target || (isExternal ? "_blank" : undefined)}
        rel={rel || (isExternal ? "noopener noreferrer" : undefined)}
        {...props}
      >
        <span>{children}</span>
        {renderIcon()}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={combinedClasses}
      {...props}
    >
      <span>{children}</span>
      {renderIcon()}
    </button>
  );
}
