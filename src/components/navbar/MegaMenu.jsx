"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ChevronRight } from "lucide-react";

export default function MegaMenu({ navItem, isOpen, onClose, onMouseEnter, onMouseLeave }) {
  if (!isOpen || !navItem) return null;

  // Dropdown style (Kids, Sandals, About Us)
  if (navItem.type === "dropdown") {
    return (
      <div
        className="absolute top-[calc(100%+0px)] left-1/2 -translate-x-1/2 w-80 bg-white border border-neutral-200 rounded-xl shadow-xl py-2 z-50"
        style={{
          animation: "menuFadeIn 0.18s cubic-bezier(0.22, 0.61, 0.36, 1) forwards",
        }}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <div className="px-1">
          {navItem.items.map((item, idx) => (
            <Link
              key={idx}
              href={item.href}
              onClick={onClose}
              className="group flex items-start justify-between p-3 mx-1 rounded-lg hover:bg-neutral-50 transition-colors"
            >
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-[12px] font-bold uppercase tracking-wider text-[#000000] group-hover:text-[#27409A] transition-colors">
                    {item.name}
                  </span>
                  {item.badge && (
                    <span className="text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded-full bg-[#27409A] text-white">
                      {item.badge}
                    </span>
                  )}
                </div>
                <p className="text-[11px] text-neutral-500 line-clamp-1 mt-0.5 font-normal">
                  {item.desc}
                </p>
              </div>
              <ChevronRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-[#27409A] group-hover:translate-x-0.5 transition-all mt-0.5 shrink-0" />
            </Link>
          ))}
        </div>
      </div>
    );
  }

  // Full-width Mega-menu for Men / Women
  return (
    <div
      className="absolute top-[calc(100%+0px)] left-1/2 -translate-x-1/2 w-[min(700px,90vw)] bg-white border border-neutral-200 rounded-2xl shadow-xl p-6 z-50"
      style={{
        animation: "menuFadeIn 0.18s cubic-bezier(0.22, 0.61, 0.36, 1) forwards",
      }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="grid grid-cols-12 gap-6 items-start">
        {/* Col 1: Categories */}
        <div className="col-span-4 space-y-3 border-r border-neutral-200 pr-5">
          <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#27409A]">
            Categories
          </div>
          <ul className="space-y-1.5">
            {navItem.categories?.map((cat, idx) => (
              <li key={idx}>
                <Link
                  href={cat.href}
                  onClick={onClose}
                  className="group flex items-center justify-between py-1.5 text-[12px] font-bold uppercase tracking-wider text-[#000000] hover:text-[#27409A] transition-colors"
                >
                  <span>{cat.label}</span>
                  <ArrowUpRight className="w-3 h-3 text-[#27409A] opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 2: Featured Series */}
        <div className="col-span-5 space-y-3 border-r border-neutral-200 pr-5">
          <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#27409A]">
            Featured Footwear
          </div>
          <div className="space-y-2">
            {navItem.featuredSeries?.map((series, idx) => (
              <Link
                key={idx}
                href={series.href}
                onClick={onClose}
                className="group block p-3 rounded-xl bg-neutral-50 border border-neutral-200 hover:border-[#27409A] hover:shadow-md transition-all"
              >
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#27409A] text-white">
                    {series.tag}
                  </span>
                  <span className="text-[9px] font-semibold text-neutral-500">{series.sizes}</span>
                </div>
                <h4 className="text-[12px] font-bold uppercase tracking-wide text-[#000000] group-hover:text-[#27409A] transition-colors">
                  {series.name}
                </h4>
                <p className="text-[10px] text-neutral-600 line-clamp-1 mt-0.5">
                  {series.description}
                </p>
              </Link>
            ))}
          </div>
        </div>

        {/* Col 3: Visual Spotlight */}
        <div className="col-span-3">
          {navItem.featuredCard && (
            <Link
              href={navItem.featuredCard.href}
              onClick={onClose}
              className="group block rounded-xl overflow-hidden bg-neutral-50 border border-neutral-200 hover:border-[#27409A] hover:shadow-md transition-all p-3"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#000000] text-white">
                  {navItem.featuredCard.badge}
                </span>
                <span className="text-[9px] font-bold uppercase tracking-wider text-[#27409A]">
                  INDIA
                </span>
              </div>
              <div className="relative w-full aspect-square my-1 flex items-center justify-center bg-white rounded-lg overflow-hidden">
                <Image
                  src={navItem.featuredCard.image}
                  alt={navItem.featuredCard.title}
                  fill
                  className="object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="pt-2 border-t border-neutral-200">
                <h4 className="text-[11px] font-bold uppercase tracking-tight text-[#000000] group-hover:text-[#27409A] transition-colors">
                  {navItem.featuredCard.title}
                </h4>
                <p className="text-[9px] text-neutral-600 mt-0.5">
                  {navItem.featuredCard.subtitle}
                </p>
              </div>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
