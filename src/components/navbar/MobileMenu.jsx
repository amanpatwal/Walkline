"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { X, Search, ChevronDown, ShoppingBag, User, Phone, MapPin } from "lucide-react";
import { PRIMARY_NAV, CATEGORY_LINKS } from "@/data/navigation";
import { COMPANY_INFO } from "@/data/company";
import { assets } from "@/data/assets";
import { useCart } from "@/context/CartContext";

export default function MobileMenu({ isOpen, onClose, onOpenSearch, onOpenCart }) {
  const { itemCount } = useCart();
  const [openSection, setOpenSection] = useState(null);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      if (window.__lenis) window.__lenis.stop();
    } else {
      document.body.style.overflow = "";
      if (window.__lenis) window.__lenis.start();
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Reset accordion state after menu closes (separate from scroll lock)
  useEffect(() => {
    if (!isOpen) {
      const timer = setTimeout(() => setOpenSection(null), 0);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  // ESC key close
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape" && isOpen) onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose]);

  const toggleSection = (id) => {
    setOpenSection((prev) => (prev === id ? null : id));
  };

  const handleLinkClick = () => {
    onClose();
    setOpenSection(null);
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-[45] bg-[#24140D]/30 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Slide-in drawer */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Walkline Mobile Navigation"
        className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-[340px] bg-[#FAF7F1] flex flex-col overflow-hidden animate-slide-in-right"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-[#24140D]/10 shrink-0">
          <Link href="/" onClick={handleLinkClick} aria-label="Walkline — Home">
            <Image
              src={assets.logo.primary}
              alt="Walkline Footwear"
              width={110}
              height={57}
              className="h-[26px] w-auto object-contain"
              unoptimized
            />
          </Link>
          <button
            onClick={onClose}
            className="p-2.5 rounded-full bg-white border border-[#24140D]/15 text-[#24140D] hover:bg-[#F3E8D8] transition-colors cursor-pointer"
            aria-label="Close navigation"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quick search */}
        <div className="px-4 pt-4 shrink-0">
          <button
            onClick={() => { onClose(); if (onOpenSearch) onOpenSearch(); }}
            className="w-full flex items-center gap-3 p-3.5 rounded-xl bg-white border border-[#24140D]/12 text-left text-xs font-medium text-[#8A6E58] cursor-pointer hover:border-[#9A6238] transition-colors"
          >
            <Search className="w-4 h-4 text-[#24140D] shrink-0" />
            <span>Search sneakers, sandals, slippers...</span>
          </button>
        </div>

        {/* Scrollable content */}
        <div className="flex-1 overflow-y-auto px-4 py-4 space-y-1">
          {/* Accordion nav sections */}
          {PRIMARY_NAV.map((item) => (
            <div key={item.id} className="border-b border-[#24140D]/08">
              {/* Section heading — also navigates to page on tap */}
              <div className="flex items-center justify-between">
                <Link
                  href={item.href}
                  onClick={handleLinkClick}
                  className="flex-1 py-3.5 text-[17px] font-bold uppercase tracking-tight text-[#24140D] hover:text-[#9A6238] transition-colors"
                >
                  {item.label}
                </Link>
                {(item.categories || item.items) && (
                  <button
                    onClick={() => toggleSection(item.id)}
                    className="p-2 cursor-pointer text-[#8A6E58]"
                    aria-label={`Expand ${item.label} menu`}
                  >
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        openSection === item.id ? "rotate-180 text-[#24140D]" : ""
                      }`}
                    />
                  </button>
                )}
              </div>

              {/* Accordion content */}
              {openSection === item.id && (
                <div className="pb-3 pl-1 space-y-1">
                  {item.type === "mega-menu" ? (
                    <>
                      {item.featuredSeries?.map((series, sIdx) => (
                        <Link
                          key={sIdx}
                          href={series.href}
                          onClick={handleLinkClick}
                          className="flex items-center justify-between py-1.5 text-sm font-bold uppercase tracking-wide text-[#24140D] hover:text-[#9A6238] transition-colors"
                        >
                          <span>{series.name}</span>
                          <span className="text-[9px] font-mono text-[#8A6E58] bg-[#F3E8D8] px-1.5 py-0.5 rounded-full">
                            {series.tag}
                          </span>
                        </Link>
                      ))}
                      <div className="pt-1 border-t border-[#24140D]/08">
                        {item.categories?.map((cat, cIdx) => (
                          <Link
                            key={cIdx}
                            href={cat.href}
                            onClick={handleLinkClick}
                            className="block py-1.5 text-sm text-[#5A351F] hover:text-[#24140D] transition-colors"
                          >
                            {cat.label}
                          </Link>
                        ))}
                      </div>
                    </>
                  ) : (
                    item.items?.map((sub, subIdx) => (
                      <Link
                        key={subIdx}
                        href={sub.href}
                        onClick={handleLinkClick}
                        className="block py-2 text-sm text-[#24140D] hover:text-[#9A6238] transition-colors"
                      >
                        <div className="font-bold uppercase text-xs tracking-wide">{sub.name}</div>
                        {sub.desc && <div className="text-[11px] text-[#8A6E58] mt-0.5">{sub.desc}</div>}
                      </Link>
                    ))
                  )}
                </div>
              )}
            </div>
          ))}

          {/* Category pills */}
          <div className="pt-4">
            <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#8A6E58] mb-2.5 px-1">
              Explore Collections
            </div>
            <div className="grid grid-cols-2 gap-2">
              {CATEGORY_LINKS.map((cat, idx) => (
                <Link
                  key={idx}
                  href={cat.href}
                  onClick={handleLinkClick}
                  className="p-2.5 rounded-xl bg-white border border-[#24140D]/10 text-[11px] font-bold uppercase tracking-wide text-[#24140D] hover:border-[#9A6238] hover:bg-[#F3E8D8]/50 transition-colors leading-tight"
                >
                  {cat.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Cart + Account */}
          <div className="grid grid-cols-2 gap-3 pt-4 pb-2">
            <button
              onClick={() => { onClose(); if (onOpenCart) onOpenCart(); }}
              className="flex items-center justify-center gap-2 p-3 rounded-xl bg-[#321D12] text-[#FAF7F1] font-bold uppercase tracking-wider text-[11px] hover:bg-[#5A351F] transition-colors cursor-pointer"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Bag {itemCount > 0 ? `(${itemCount})` : ""}</span>
            </button>
            <Link
              href="/contact"
              onClick={handleLinkClick}
              className="flex items-center justify-center gap-2 p-3 rounded-xl bg-white text-[#24140D] font-bold uppercase tracking-wider text-[11px] border border-[#24140D]/15 hover:bg-[#F3E8D8]/50 transition-colors"
            >
              <User className="w-4 h-4" />
              <span>Contact</span>
            </Link>
          </div>
        </div>

        {/* Footer */}
        <div className="px-4 py-3 bg-[#F3E8D8]/60 border-t border-[#24140D]/10 shrink-0 space-y-1.5 text-xs text-[#5A351F]">
          <div className="flex items-center gap-2 font-bold text-[#24140D]">
            <MapPin className="w-3.5 h-3.5 text-[#9A6238] shrink-0" />
            <span>Bahadurgarh - 124507, Haryana</span>
          </div>
          <div className="flex items-center gap-2 font-bold text-[#24140D]">
            <Phone className="w-3.5 h-3.5 text-[#9A6238] shrink-0" />
            <span>{COMPANY_INFO.contact.phone}</span>
          </div>
        </div>
      </div>
    </>
  );
}
