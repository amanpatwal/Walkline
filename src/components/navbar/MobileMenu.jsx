"use client";

import { useEffect, useRef } from "react";
import { X, ArrowRight, Sparkles } from "lucide-react";
import gsap from "gsap";
import { NAV_LINKS, CATEGORY_LINKS, SOCIAL_LINKS } from "@/data/navigation";

export default function MobileMenu({ isOpen, onClose }) {
  const menuRef = useRef(null);

  useEffect(() => {
    if (!menuRef.current) return;

    if (isOpen) {
      document.body.style.overflow = "hidden";
      if (window.__lenis) {
        window.__lenis.stop();
      }

      const ctx = gsap.context(() => {
        gsap.to(menuRef.current, {
          y: 0,
          opacity: 1,
          duration: 0.4,
          ease: "power3.out",
        });

        gsap.from(".mobile-link-item", {
          y: 25,
          opacity: 0,
          stagger: 0.04,
          duration: 0.35,
          ease: "power2.out",
          delay: 0.1,
        });
      }, menuRef);

      return () => ctx.revert();
    } else {
      document.body.style.overflow = "";
      if (window.__lenis) {
        window.__lenis.start();
      }
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

  if (!isOpen) return null;

  return (
    <div
      ref={menuRef}
      className="fixed inset-0 z-50 bg-[#F7F7F4] text-[#111111] flex flex-col justify-between p-6 sm:p-8 overflow-y-auto"
      style={{ transform: "translateY(-100%)", opacity: 0 }}
    >
      {/* Mobile Header */}
      <div className="flex items-center justify-between pb-6 border-b-2 border-black/10">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-black tracking-tight uppercase text-black">
            WALKLINE
          </span>
          <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded-full bg-[#F4F000] border border-black">
            IND
          </span>
        </div>

        <button
          onClick={onClose}
          className="p-3 rounded-full bg-[#F4F000] border-2 border-black text-black shadow-[2px_2px_0px_0px_#000]"
          aria-label="Close Mobile Menu"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Links */}
      <div className="py-6 space-y-6">
        <div className="text-[11px] font-black uppercase tracking-[0.2em] text-[#888888]">
          Core Drops
        </div>
        <div className="space-y-2.5">
          {CATEGORY_LINKS.map((cat, idx) => (
            <div key={idx} className="mobile-link-item">
              <a
                href={cat.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(cat.href);
                }}
                className="flex items-center justify-between text-2xl font-black tracking-tight uppercase text-[#111111] hover:text-[#3155FF] py-1 transition-colors"
              >
                <span>{cat.label}</span>
                <ArrowRight className="w-5 h-5 text-black/40" />
              </a>
            </div>
          ))}
        </div>

        <div className="pt-6 border-t-2 border-black/10">
          <div className="text-[11px] font-black uppercase tracking-[0.2em] text-[#888888] mb-3">
            Quick Access
          </div>
          <div className="grid grid-cols-2 gap-2.5">
            {NAV_LINKS.map((nav, idx) => (
              <div key={idx} className="mobile-link-item">
                <a
                  href={nav.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(nav.href);
                  }}
                  className="text-sm font-black text-[#333333] hover:text-black py-1 block"
                >
                  {nav.label}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="pt-6 border-t-2 border-black/10 space-y-3">
        <div className="flex items-center justify-between">
          <div className="text-xs font-bold text-[#666666]">Connect</div>
          <div className="flex items-center gap-4">
            {SOCIAL_LINKS.map((soc, idx) => (
              <a
                key={idx}
                href={soc.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-black text-black hover:text-[#FF4F7B] transition-colors"
              >
                {soc.label}
              </a>
            ))}
          </div>
        </div>
        <div className="text-[10px] text-[#888888] font-mono">
          © {new Date().getFullYear()} WALKLINE FOOTWEAR.
        </div>
      </div>
    </div>
  );
}
