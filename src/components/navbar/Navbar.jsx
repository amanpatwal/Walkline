"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import Container from "@/ui/Container";
import AnnouncementBar from "./AnnouncementBar";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";
import { NAV_LINKS } from "@/data/navigation";
import { COMPANY_INFO } from "@/data/company";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDesktopMenuOpen, setIsDesktopMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
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

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40">
        {/* Top Announcement Bar */}
        <AnnouncementBar />

        {/* Main Navbar Surface */}
        <div
          className={cn(
            "w-full transition-all duration-300 ease-out",
            isScrolled
              ? "py-3 bg-[#F7F7F4]/95 backdrop-blur-md border-b border-black/10 shadow-sm"
              : "py-4.5 bg-[#F7F7F4] border-b border-black/5"
          )}
        >
          <Container className="flex items-center justify-between">
            {/* Brand Logo */}
            <Link
              href="/"
              className="group flex items-center gap-2 focus:outline-none"
              aria-label="Walkline Footwear Homepage"
            >
              <span className="text-2xl sm:text-3xl font-black tracking-[-0.05em] uppercase text-[#111111]">
                WALKLINE
              </span>
              <span className="hidden sm:inline-block text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#F4F000] text-black border border-black shadow-[1.5px_1.5px_0px_0px_#000]">
                EST. {COMPANY_INFO.establishedYear}
              </span>
            </Link>

            {/* Desktop Navigation Links */}
            <nav
              className="hidden lg:flex items-center gap-7 text-xs uppercase tracking-wider font-extrabold text-[#111111]"
              aria-label="Main Navigation"
            >
              {NAV_LINKS.map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="relative py-1 text-[#111111] hover:text-[#FF4F7B] transition-colors duration-200 group/link"
                >
                  <span>{link.label}</span>
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#F4F000] transition-all duration-300 group-hover/link:w-full" />
                </a>
              ))}
            </nav>

            {/* Actions & Menu Trigger */}
            <div className="flex items-center gap-2.5 sm:gap-3.5">
              <a
                href="#products"
                onClick={(e) => handleNavClick(e, "#products")}
                className="hidden md:inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider px-4 py-2 rounded-full bg-[#F4F000] text-black border-2 border-black shadow-[2px_2px_0px_0px_#000] hover:bg-black hover:text-[#F4F000] transition-all"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Our Products</span>
              </a>

              <button
                onClick={() => setIsDesktopMenuOpen(true)}
                className="hidden md:flex items-center gap-2 text-xs font-black uppercase tracking-wider px-4 py-2 rounded-full bg-white text-black border-2 border-black shadow-[2px_2px_0px_0px_#000] hover:bg-black hover:text-white transition-all cursor-pointer"
                aria-label="Open Fullscreen Menu"
              >
                <span>Menu</span>
                <Menu className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="md:hidden p-2.5 rounded-full bg-[#FFFFFF] border-2 border-black text-black shadow-[2px_2px_0px_0px_#000] active:translate-x-0.5 active:translate-y-0.5 transition-all"
                aria-label="Open Mobile Menu"
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </Container>
        </div>
      </header>

      {/* Desktop Menu Overlay */}
      <DesktopMenu
        isOpen={isDesktopMenuOpen}
        onClose={() => setIsDesktopMenuOpen(false)}
      />

      {/* Mobile Drawer Navigation */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}
