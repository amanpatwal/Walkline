"use client";

import { useEffect, useRef } from "react";
import { X, ArrowRight, ArrowUpRight, Sparkles, Zap } from "lucide-react";
import gsap from "gsap";
import { CATEGORY_LINKS, COMPANY_LINKS, SOCIAL_LINKS } from "@/data/navigation";
import Container from "@/ui/Container";

export default function DesktopMenu({ isOpen, onClose }) {
  const overlayRef = useRef(null);

  useEffect(() => {
    if (!overlayRef.current) return;

    if (isOpen) {
      document.body.style.overflow = "hidden";
      if (window.__lenis) {
        window.__lenis.stop();
      }

      const ctx = gsap.context(() => {
        const tl = gsap.timeline();

        tl.to(overlayRef.current, {
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
          duration: 0.55,
          ease: "power4.inOut",
        });

        tl.from(
          ".menu-cat-item",
          {
            y: 40,
            opacity: 0,
            stagger: 0.05,
            duration: 0.45,
            ease: "power3.out",
          },
          "-=0.2"
        );
      }, overlayRef);

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
            window.__lenis.scrollTo(el, { offset: -80 });
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
      ref={overlayRef}
      className="fixed inset-0 z-50 bg-[#F7F7F4] text-[#111111] flex flex-col justify-between overflow-y-auto"
      style={{ clipPath: "polygon(0 0, 100% 0, 100% 0%, 0 0%)" }}
    >
      {/* Top Bar Header */}
      <div className="border-b-2 border-black/10 py-6 bg-white">
        <Container className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-2xl font-black tracking-tight uppercase text-black">
              WALKLINE
            </span>
            <span className="text-xs font-black px-2.5 py-0.5 rounded-full bg-[#F4F000] text-black border border-black shadow-[1.5px_1.5px_0px_0px_#000]">
              EXPLORE
            </span>
          </div>

          <button
            onClick={onClose}
            className="group flex items-center gap-2 text-xs uppercase tracking-wider font-extrabold text-black px-5 py-2 rounded-full bg-[#F4F000] border-2 border-black shadow-[2px_2px_0px_0px_#000] hover:bg-black hover:text-white transition-all cursor-pointer"
            aria-label="Close menu"
          >
            <span>Close</span>
            <X className="w-4 h-4 transition-transform group-hover:rotate-90 duration-300" />
          </button>
        </Container>
      </div>

      {/* Main Grid Content */}
      <Container className="py-12 md:py-16 grow flex items-center">
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Main Category Links */}
          <div className="lg:col-span-7 space-y-4">
            <div className="text-xs uppercase tracking-[0.25em] text-[#888888] font-black mb-4">
              Core Collections // Street Ready
            </div>
            {CATEGORY_LINKS.map((cat, idx) => (
              <div key={idx} className="menu-cat-item group">
                <a
                  href={cat.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(cat.href);
                  }}
                  className="flex items-baseline justify-between py-3 border-b-2 border-black/10 group-hover:border-[#111111] transition-all duration-300 cursor-pointer"
                >
                  <div className="flex items-baseline gap-4">
                    <span className="text-xs font-mono font-bold text-[#888888] group-hover:text-black">
                      0{idx + 1}
                    </span>
                    <span className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight uppercase group-hover:text-[#3155FF] group-hover:translate-x-2 transition-all duration-300">
                      {cat.label}
                    </span>
                  </div>
                  <ArrowRight className="w-6 h-6 text-black/30 group-hover:text-black group-hover:translate-x-2 transition-all" />
                </a>
              </div>
            ))}
          </div>

          {/* Secondary Columns */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-8 lg:pl-12 border-t lg:border-t-0 lg:border-l-2 border-black/10 pt-8 lg:pt-0">
            <div className="space-y-4">
              <div className="text-xs uppercase tracking-[0.25em] text-[#888888] font-black">
                Brand & Culture
              </div>
              <ul className="space-y-3">
                {COMPANY_LINKS.map((link, idx) => (
                  <li key={idx}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleLinkClick(link.href);
                      }}
                      className="text-sm font-bold text-[#333333] hover:text-[#3155FF] transition-colors flex items-center gap-1.5 cursor-pointer"
                    >
                      <ArrowUpRight className="w-4 h-4 opacity-50" />
                      <span>{link.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <div className="text-xs uppercase tracking-[0.25em] text-[#888888] font-black">
                Follow The Heat
              </div>
              <ul className="space-y-3">
                {SOCIAL_LINKS.map((soc, idx) => (
                  <li key={idx}>
                    <a
                      href={soc.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-bold text-[#333333] hover:text-black transition-colors flex items-center justify-between group"
                    >
                      <span>{soc.label}</span>
                      <ArrowUpRight className="w-4 h-4 opacity-40 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>

      {/* Menu Footer */}
      <div className="border-t-2 border-black/10 py-6 bg-white">
        <Container className="flex flex-col sm:flex-row items-center justify-between text-xs font-bold text-[#666666] gap-4">
          <div>© {new Date().getFullYear()} WALKLINE FOOTWEAR. MADE TO MOVE.</div>
          <div className="font-mono text-black">BRED FOR STREETS // CRAFTED IN INDIA</div>
        </Container>
      </div>
    </div>
  );
}
