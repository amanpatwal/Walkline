"use client";

import Image from "next/image";
import { ArrowUpRight, Sparkles, ChevronRight } from "lucide-react";

export default function MegaMenu({ navItem, isOpen, onClose }) {
  if (!isOpen || !navItem) return null;

  const handleLinkClick = (e, href) => {
    onClose();
    if (href.startsWith("#")) {
      e.preventDefault();
      const targetId = href.substring(1);
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        if (window.__lenis) {
          window.__lenis.scrollTo(targetEl, { offset: -80 });
        } else {
          targetEl.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  };

  if (navItem.type === "dropdown") {
    return (
      <div
        className="absolute top-full left-1/2 -translate-x-1/2 w-80 bg-white border-2 border-black rounded-2xl shadow-[6px_6px_0px_0px_#000] p-4 animate-in fade-in slide-in-from-top-2 duration-200 z-50"
        onMouseLeave={onClose}
      >
        <div className="space-y-1">
          {navItem.items.map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              onClick={(e) => handleLinkClick(e, item.href)}
              className="group flex items-start justify-between p-3 rounded-xl hover:bg-[#F7F7F4] transition-colors"
            >
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-black uppercase text-black group-hover:text-[#3155FF] transition-colors">
                    {item.name}
                  </span>
                  {item.badge && (
                    <span className="text-[9px] font-mono font-bold px-1.5 py-0.2 rounded bg-[#F4F000] border border-black text-black">
                      {item.badge}
                    </span>
                  )}
                </div>
                <p className="text-[11px] text-[#666666] line-clamp-1 mt-0.5">
                  {item.desc}
                </p>
              </div>
              <ChevronRight className="w-3.5 h-3.5 text-[#888888] group-hover:text-black group-hover:translate-x-0.5 transition-all mt-1" />
            </a>
          ))}
        </div>
      </div>
    );
  }

  // Mega-menu for Men / Women
  return (
    <div
      className="absolute top-full left-0 right-0 w-full bg-white border-b-2 border-black shadow-[0_20px_40px_rgba(0,0,0,0.1)] py-8 px-6 sm:px-12 animate-in fade-in slide-in-from-top-2 duration-200 z-50"
      onMouseLeave={onClose}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Col 1: Categories (3 cols) */}
        <div className="lg:col-span-3 space-y-4 border-r border-black/10 pr-6">
          <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#888888] flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#F4F000]" />
            <span>Categories</span>
          </div>
          <ul className="space-y-2">
            {navItem.categories?.map((cat, idx) => (
              <li key={idx}>
                <a
                  href={cat.href}
                  onClick={(e) => handleLinkClick(e, cat.href)}
                  className="group flex items-center justify-between py-1 text-sm font-black uppercase tracking-tight text-[#111111] hover:text-[#3155FF] transition-colors"
                >
                  <span>{cat.label}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 2: Featured Series (5 cols) */}
        <div className="lg:col-span-5 space-y-4 border-r border-black/10 pr-6">
          <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#888888]">
            Verified Series Drops
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {navItem.featuredSeries?.map((series, idx) => (
              <a
                key={idx}
                href={series.href}
                onClick={(e) => handleLinkClick(e, series.href)}
                className="group p-4 rounded-2xl bg-[#F7F7F4] border-2 border-black/10 hover:border-black hover:shadow-[3px_3px_0px_0px_#000] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-1 mb-1">
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-[#F4F000] text-black border border-black">
                      {series.tag}
                    </span>
                    <span className="text-[10px] font-mono font-bold text-[#888888]">
                      {series.sizes}
                    </span>
                  </div>
                  <h4 className="text-base font-black uppercase text-black mt-2 group-hover:text-[#3155FF] transition-colors">
                    {series.name}
                  </h4>
                  <p className="text-xs text-[#555555] line-clamp-2 mt-1">
                    {series.description}
                  </p>
                </div>
                <div className="pt-3 flex items-center gap-1 text-[11px] font-black uppercase text-black group-hover:underline">
                  <span>Explore Series</span>
                  <ArrowUpRight className="w-3 h-3" />
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Col 3: Visual Spotlight Card (4 cols) */}
        <div className="lg:col-span-4">
          {navItem.featuredCard && (
            <a
              href={navItem.featuredCard.href}
              onClick={(e) => handleLinkClick(e, navItem.featuredCard.href)}
              className="group block relative rounded-2xl overflow-hidden bg-[#F7F7F4] border-2 border-black p-5 shadow-[4px_4px_0px_0px_#000] hover:shadow-[6px_6px_0px_0px_#F4F000] transition-all"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full bg-black text-[#F4F000] border border-black">
                  {navItem.featuredCard.badge}
                </span>
                <span className="text-xs font-mono font-bold text-[#888888] uppercase">
                  MADE IN INDIA
                </span>
              </div>

              <div className="relative w-full aspect-[16/10] my-2 flex items-center justify-center">
                <Image
                  src={navItem.featuredCard.image}
                  alt={navItem.featuredCard.title}
                  fill
                  className="object-contain p-2 group-hover:scale-108 transition-transform duration-300"
                />
              </div>

              <div className="pt-3 border-t border-black/10">
                <h4 className="text-lg font-black uppercase text-black group-hover:text-[#3155FF] transition-colors">
                  {navItem.featuredCard.title}
                </h4>
                <p className="text-xs font-bold text-[#555555]">
                  {navItem.featuredCard.subtitle}
                </p>
              </div>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
