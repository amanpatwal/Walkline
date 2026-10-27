"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { X, ChevronDown, User, Search, MapPin, Phone } from "lucide-react";
import { PRIMARY_NAV } from "@/data/navigation";
import { COMPANY_INFO } from "@/data/company";
import { assets } from "@/data/assets";

const CATEGORY_LINKS = [
  { label: "Men's Footwear", href: "/men" },
  { label: "Women's Footwear", href: "/women" },
  { label: "Kids Collection", href: "/kids" },
  { label: "All Collections", href: "/collections" },
  { label: "Sustainability", href: "/sustainability" },
  { label: "Manufacturing", href: "/manufacturing" },
  { label: "About Walkline", href: "/about" },
];

export default function MobileMenu({ isOpen, onClose, onOpenSearch }) {
  const [openSection, setOpenSection] = useState(null);
  const dialogRef = useRef(null);
  const closeButtonRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;

    closeButtonRef.current?.focus();

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key !== "Tab") return;

      const focusable = dialogRef.current?.querySelectorAll(
        'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      if (!focusable?.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const toggleSection = (id) => {
    setOpenSection((prev) => (prev === id ? null : id));
  };

  const handleLinkClick = () => {
    onClose();
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Slide-in drawer */}
      <div
        id="walkline-mobile-navigation"
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-label="Walkline Mobile Navigation"
        className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-[340px] bg-white flex flex-col overflow-hidden animate-slide-in-right"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-neutral-200 shrink-0">
          <Link href="/" onClick={handleLinkClick} aria-label="Walkline — Home">
            <Image
              src={assets.logo.primary}
              alt="Walkline Footwear — Above & Beyond"
              width={140}
              height={39}
              className="h-[28px] sm:h-[32px] w-auto object-contain"
              unoptimized
            />
          </Link>
          <button
            ref={closeButtonRef}
            onClick={onClose}
            className="flex min-h-11 min-w-11 items-center justify-center rounded-full bg-neutral-100 border border-neutral-200 p-2.5 text-[#000000] hover:bg-neutral-200 hover:text-[#27409A] transition-colors cursor-pointer"
            aria-label="Close navigation"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quick search */}
        <div className="px-4 pt-4 shrink-0">
          <button
            onClick={() => { onClose(); if (onOpenSearch) onOpenSearch(); }}
            className="w-full flex items-center gap-3 p-3.5 rounded-xl bg-neutral-50 border border-neutral-200 text-left text-xs font-medium text-neutral-600 cursor-pointer hover:border-[#27409A] hover:text-[#27409A] transition-colors"
          >
            <Search className="w-4 h-4 text-[#000000] shrink-0" />
            <span>Search sneakers, sandals, slippers...</span>
          </button>
        </div>

        {/* Scrollable content */}
        <div className="flex-1 overflow-y-auto px-4 py-4 space-y-1">
          {/* Accordion nav sections */}
          {PRIMARY_NAV.map((item) => (
            <div key={item.id} className="border-b border-neutral-100">
              {/* Section heading */}
              <div className="flex items-center justify-between">
                <Link
                  href={item.href}
                  onClick={handleLinkClick}
                  className="flex-1 py-3.5 text-[16px] font-bold uppercase tracking-tight text-[#000000] hover:text-[#27409A] transition-colors"
                >
                  {item.label}
                </Link>
                {(item.categories || item.items) && (
                  <button
                    onClick={() => toggleSection(item.id)}
                    className="flex min-h-11 min-w-11 items-center justify-center rounded-full p-2 cursor-pointer text-neutral-500"
                    aria-label={`Expand ${item.label} menu`}
                  >
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        openSection === item.id ? "rotate-180 text-[#27409A]" : ""
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
                          className="flex items-center justify-between py-1.5 text-sm font-bold uppercase tracking-wide text-[#000000] hover:text-[#27409A] transition-colors"
                        >
                          <span>{series.name}</span>
                          <span className="text-[9px] font-bold text-white bg-[#27409A] px-2 py-0.5 rounded-full">
                            {series.tag}
                          </span>
                        </Link>
                      ))}
                      <div className="pt-1 border-t border-neutral-100">
                        {item.categories?.map((cat, cIdx) => (
                          <Link
                            key={cIdx}
                            href={cat.href}
                            onClick={handleLinkClick}
                            className="block py-1.5 text-sm text-neutral-700 hover:text-[#27409A] transition-colors"
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
                        className="block py-2 text-sm text-[#000000] hover:text-[#27409A] transition-colors"
                      >
                        <div className="font-bold uppercase text-xs tracking-wide">{sub.name}</div>
                        {sub.desc && <div className="text-[11px] text-neutral-500 mt-0.5">{sub.desc}</div>}
                      </Link>
                    ))
                  )}
                </div>
              )}
            </div>
          ))}

          {/* Category pills */}
          <div className="pt-4">
            <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#27409A] mb-2.5 px-1">
              Explore Collections
            </div>
            <div className="grid grid-cols-2 gap-2">
              {CATEGORY_LINKS.map((cat, idx) => (
                <Link
                  key={idx}
                  href={cat.href}
                  onClick={handleLinkClick}
                  className="flex min-h-11 items-center p-2.5 rounded-xl bg-neutral-50 border border-neutral-200 text-[11px] font-bold uppercase tracking-wide text-[#000000] hover:border-[#27409A] hover:text-[#27409A] transition-colors leading-tight"
                >
                  {cat.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact & Inquiries */}
          <div className="pt-4 pb-2">
            <Link
              href="/contact"
              onClick={handleLinkClick}
              className="flex min-h-11 items-center justify-center gap-2 p-3.5 rounded-xl bg-[#27409A] text-white font-bold uppercase tracking-wider text-[11px] hover:bg-[#1E327A] transition-colors shadow-sm"
            >
              <User className="w-4 h-4" />
              <span>Contact & Inquiries</span>
            </Link>
          </div>
        </div>

        {/* Footer */}
        <div className="px-4 py-3 bg-neutral-50 border-t border-neutral-200 shrink-0 space-y-1.5 text-xs text-neutral-600">
          <div className="flex items-center gap-2 font-bold text-[#000000]">
            <MapPin className="w-3.5 h-3.5 text-[#27409A] shrink-0" />
            <span>Bahadurgarh - 124507, Haryana</span>
          </div>
          <div className="flex items-center gap-2 font-bold text-[#000000]">
            <Phone className="w-3.5 h-3.5 text-[#27409A] shrink-0" />
            <span>{COMPANY_INFO.contact.phone}</span>
          </div>
        </div>
      </div>
    </>
  );
}
