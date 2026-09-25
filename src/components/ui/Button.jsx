"use client";

import Link from "next/link";
import { ArrowUpRight, ArrowRight, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  icon = "arrow-right",
  showIcon = true,
  className,
  target,
  rel,
  type = "button",
  ...props
}) {
  const baseClasses =
    "group inline-flex items-center justify-center font-bold tracking-wider uppercase transition-all duration-300 ease-out select-none focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-50 disabled:pointer-events-none cursor-pointer";

  const sizeClasses = {
    sm: "text-xs px-4 py-2 gap-1.5 rounded-lg",
    md: "text-xs px-6 py-3.5 gap-2 rounded-xl",
    lg: "text-xs sm:text-sm px-8 py-4 gap-2.5 rounded-xl",
    iconOnly: "p-3 rounded-full",
  };

  const variantClasses = {
    primary:
      "bg-[#321D12] text-[#FAF7F1] hover:bg-[#5A351F] shadow-editorial-sm",
    secondary:
      "bg-transparent text-[#24140D] border border-[#24140D]/25 hover:bg-[#F3E8D8]/70 hover:border-[#24140D]",
    caramel:
      "bg-[#9A6238] text-[#FAF7F1] hover:bg-[#5A351F] shadow-editorial-sm",
    white:
      "bg-white text-[#24140D] border border-[#24140D]/12 hover:bg-[#FAF7F1] shadow-editorial-sm",
    dark:
      "bg-[#24140D] text-[#FAF7F1] hover:bg-[#321D12] shadow-editorial-md",
    outline:
      "bg-transparent text-[#FAF7F1] border border-white/20 hover:bg-white/10 hover:border-white",
    ghost:
      "bg-transparent text-[#24140D] hover:text-[#9A6238] p-0 underline-offset-4 hover:underline",
  };

  const combinedClasses = cn(
    baseClasses,
    sizeClasses[size],
    variantClasses[variant] || variantClasses.primary,
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
    if (href.startsWith("#") || href.startsWith("/")) {
      return (
        <Link href={href} className={combinedClasses} target={target} rel={rel} {...props}>
          <span>{children}</span>
          {renderIcon()}
        </Link>
      );
    }
    return (
      <a href={href} className={combinedClasses} target={target} rel={rel} {...props}>
        <span>{children}</span>
        {renderIcon()}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combinedClasses} {...props}>
      <span>{children}</span>
      {renderIcon()}
    </button>
  );
}
