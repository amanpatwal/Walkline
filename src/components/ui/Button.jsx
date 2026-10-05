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
      "bg-[#27409A] text-white hover:bg-[#1E327A] shadow-sm",
    secondary:
      "bg-[#000000] text-white hover:bg-[#27409A] shadow-sm",
    caramel:
      "bg-[#27409A] text-white hover:bg-[#1E327A] shadow-sm",
    white:
      "bg-white text-[#000000] border border-black/15 hover:bg-[#27409A] hover:text-white hover:border-[#27409A] shadow-sm",
    dark:
      "bg-[#000000] text-white hover:bg-[#27409A] shadow-sm",
    outline:
      "bg-transparent text-[#27409A] border border-[#27409A] hover:bg-[#27409A] hover:text-white",
    ghost:
      "bg-transparent text-[#000000] hover:text-[#27409A] p-0 underline-offset-4 hover:underline",
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
