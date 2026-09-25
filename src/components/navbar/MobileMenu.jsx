"use client";

import { useEffect, useState, useRef } from "react";
import { X, Search, ChevronDown, ShoppingBag, User, ArrowUpRight, Phone, Mail, MapPin } from "lucide-react";
import gsap from "gsap";
import { PRIMARY_NAV, CATEGORY_LINKS } from "@/data/navigation";
import { COMPANY_INFO } from "@/data/company";

export default function MobileMenu({ isOpen, onClose, onOpenSearch, onOpenCart }) {
  const menuRef = useRef(null);
  const [openSection, setOpenSection] = useState(null);

  useEffect(() => {
    if (!menuRef.current) return;

    if (isOpen) {
      document.body.style.overflow = "hidden";
      if (window.__lenis) window.__lenis.stop();

      const ctx = gsap.context(() => {
        gsap.to(menuRef.current, {
          x: 0,
          opacity: 1,
          duration: 0.35,
          ease: "power3.out",
        });
      }, menuRef);

      return () => ctx.revert();
    } else {
      document.body.style.overflow = "";
      if (window.__lenis) window.__lenis.start();
    }
  }, [isOpen]);

  const handleLinkClick = (href) => {
    onClose();
    if (href.startsWith("#")) {
      const targetId = href.substring(1);
      setTimeout(() => {
        const el = document.getElementById(targetId);
        if (el) {
          if (window.__lenis) {
            window.__lenis.scrollTo(el, { offset: -70 });
          } else {
            el.scrollIntoView({ behavior: "smooth" });
          }
        }
      }, 300);
    }
  };

  const toggleSection = (id) => {
    setOpenSection((prev) => (prev === id ? null : id));
  };

  if (!isOpen) return null;

  return (
    <div
      ref={menuRef}
      role="dialog"
      aria-modal="true"
      aria-label="Walkline Navigation Drawer"
      className="fixed inset-0 z-50 bg-[#FFFFFF] text-[#111111] flex flex-col justify-between overflow-y-auto"
      style={{ transform: "translateX(100%)", opacity: 0 }}
    >
      {/* Mobile Header */}
      <div className="p-5 flex items-center justify-between border-b-2 border-black/10 bg-[#F7F7F4]">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-black tracking-tight uppercase text-black">
            WALKLINE
          </span>
          <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded-full bg-[#F4F000] border border-black">
            EST. {COMPANY_INFO.establishedYear}
          </span>
        </div>

        <button
          onClick={onClose}
          className="p-2.5 rounded-full bg-white border-2 border-black text-black shadow-[2px_2px_0px_0px_#000] cursor-pointer"
          aria-label="Close navigation drawer"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Quick Search Bar */}
      <div className="px-5 pt-4">
        <button
          onClick={() => {
            onClose();
            if (onOpenSearch) onOpenSearch();
          }}
          className="w-full flex items-center gap-3 p-3.5 rounded-2xl bg-[#F7F7F4] border-2 border-black/10 text-left text-xs font-bold text-[#888888] cursor-pointer hover:border-black"
        >
          <Search className="w-4 h-4 text-black" />
          <span>Search Noir-05, Vertex, Barbie-04, VRX...</span>
        </button>
      </div>

      {/* Primary Links */}
      <div className="flex-1 px-5 py-6 space-y-2">
        {PRIMARY_NAV.map((item) => (
          <div key={item.id} className="border-b border-black/10 pb-2">
            <button
              onClick={() => toggleSection(item.id)}
              className="w-full flex items-center justify-between py-3 text-2xl font-black uppercase tracking-tight text-black cursor-pointer hover:text-[#3155FF]"
            >
              <span>{item.label}</span>
              <ChevronDown
                className={`w-5 h-5 transition-transform duration-200 ${
                  openSection === item.id ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Accordion Content */}
            {openSection === item.id && (
              <div className="py-2 pl-2 space-y-2 animate-in fade-in duration-200">
                {item.type === "mega-menu" ? (
                  <>
                    <div className="text-[10px] font-mono font-bold uppercase text-[#888888] mb-1">
                      Series & Models
                    </div>
                    {item.featuredSeries?.map((series, sIdx) => (
                      <a
                        key={sIdx}
                        href={series.href}
                        onClick={(e) => {
                          e.preventDefault();
                          handleLinkClick(series.href);
                        }}
                        className="flex items-center justify-between py-1.5 text-sm font-black uppercase text-[#333333] hover:text-[#3155FF]"
                      >
                        <span>{series.name}</span>
                        <span className="text-[10px] font-mono font-bold text-[#888888]">
                          {series.tag}
                        </span>
                      </a>
                    ))}

                    <div className="text-[10px] font-mono font-bold uppercase text-[#888888] mt-3 mb-1">
                      Categories
                    </div>
                    {item.categories?.map((cat, cIdx) => (
                      <a
                        key={cIdx}
                        href={cat.href}
                        onClick={(e) => {
                          e.preventDefault();
                          handleLinkClick(cat.href);
                        }}
                        className="block py-1 text-sm font-bold text-[#555555] hover:text-black"
                      >
                        {cat.label}
                      </a>
                    ))}
                  </>
                ) : (
                  <>
                    {item.items?.map((sub, subIdx) => (
                      <a
                        key={subIdx}
                        href={sub.href}
                        onClick={(e) => {
                          e.preventDefault();
                          handleLinkClick(sub.href);
                        }}
                        className="block py-1.5 text-sm font-bold text-[#333333] hover:text-[#3155FF]"
                      >
                        <div className="font-black uppercase">{sub.name}</div>
                        <div className="text-xs text-[#888888]">{sub.desc}</div>
                      </a>
                    ))}
                  </>
                )}
              </div>
            )}
          </div>
        ))}

        {/* 4 Core Category Pills */}
        <div className="pt-4">
          <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#888888] mb-2.5">
            Explore 4 Categories
          </div>
          <div className="grid grid-cols-2 gap-2">
            {CATEGORY_LINKS.map((cat, idx) => (
              <a
                key={idx}
                href={cat.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(cat.href);
                }}
                className="p-3 rounded-xl bg-[#F7F7F4] border border-black/15 text-xs font-black uppercase text-black hover:border-black hover:bg-[#F4F000] transition-colors"
              >
                {cat.label}
              </a>
            ))}
          </div>
        </div>

        {/* Action Row: Cart & Account */}
        <div className="grid grid-cols-2 gap-3 pt-4">
          <button
            onClick={() => {
              onClose();
              if (onOpenCart) onOpenCart();
            }}
            className="flex items-center justify-center gap-2 p-3.5 rounded-2xl bg-[#F4F000] text-black font-black uppercase text-xs border-2 border-black shadow-[2px_2px_0px_0px_#000] cursor-pointer"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>Bag (1)</span>
          </button>

          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick("#contact");
            }}
            className="flex items-center justify-center gap-2 p-3.5 rounded-2xl bg-white text-black font-black uppercase text-xs border-2 border-black shadow-[2px_2px_0px_0px_#000]"
          >
            <User className="w-4 h-4" />
            <span>Account</span>
          </a>
        </div>
      </div>

      {/* Footer Info */}
      <div className="p-5 bg-[#F7F7F4] border-t-2 border-black/10 space-y-2 text-xs text-[#666666]">
        <div className="flex items-center gap-2 text-black font-bold">
          <MapPin className="w-3.5 h-3.5 text-[#3155FF] shrink-0" />
          <span className="truncate">Bahadurgarh - 124507, India</span>
        </div>
        <div className="flex items-center gap-2 text-black font-bold">
          <Phone className="w-3.5 h-3.5 text-[#3155FF] shrink-0" />
          <span>{COMPANY_INFO.contact.phone}</span>
        </div>
        <div className="text-[10px] font-mono text-[#888888] pt-1">
          {typeof COMPANY_INFO.announcement === 'object' ? COMPANY_INFO.announcement.text : COMPANY_INFO.announcement}
        </div>
      </div>
    </div>
  );
}
