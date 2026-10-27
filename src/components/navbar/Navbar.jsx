"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Search, Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import MegaMenu from "./MegaMenu";
import MobileMenu from "./MobileMenu";
import SearchModal from "./SearchModal";
import { PRIMARY_NAV } from "@/data/navigation";
import { assets } from "@/data/assets";

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMenuId, setActiveMenuId] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const mobileMenuButtonRef = useRef(null);
  const closeTimerRef = useRef(null);

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
    mobileMenuButtonRef.current?.focus();
  }, []);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mega menu on ESC
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") setActiveMenuId(null);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  // Hover logic: use a cancel-on-enter / delayed-close approach
  // so the mouse can move from nav item into the megamenu without closing
  const handleNavEnter = useCallback((id) => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    setActiveMenuId(id);
  }, []);

  const handleNavLeave = useCallback(() => {
    closeTimerRef.current = setTimeout(() => {
      setActiveMenuId(null);
    }, 80); // tiny delay so mouse can travel from nav item → megamenu
  }, []);

  const handleMenuEnter = useCallback(() => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  }, []);

  const handleMenuLeave = useCallback(() => {
    closeTimerRef.current = setTimeout(() => {
      setActiveMenuId(null);
    }, 80);
  }, []);

  useEffect(() => {
    return () => {
      if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    };
  }, []);

  const activeNavItem = PRIMARY_NAV.find((item) => item.id === activeMenuId);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40">
        <nav
          className={cn(
            "relative w-full transition-all duration-300 ease-out border-b",
            isScrolled
              ? "bg-white/95 backdrop-blur-md border-neutral-200 shadow-sm"
              : "bg-white border-neutral-200/80"
          )}
          aria-label="Main Store Navigation"
        >
          <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-14 flex items-center justify-between h-[72px] sm:h-[80px]">

            {/* LEFT: Official Walkline Brand Logo */}
            <div className="flex items-center shrink-0">
              <Link
                href="/"
                className="group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#27409A] rounded"
                aria-label="Walkline Footwear — Home"
                onClick={() => setActiveMenuId(null)}
              >
                <div className="relative flex items-center">
                  <Image
                    src={assets.logo.primary}
                    alt="Walkline Footwear — Above & Beyond"
                    width={160}
                    height={44}
                    className="h-[32px] sm:h-[38px] w-auto object-contain"
                    priority
                    unoptimized
                  />
                </div>
              </Link>
            </div>

            {/* RIGHT GROUP: Navigation Links & Actions (Search + Mobile Menu) */}
            <div className="flex items-center gap-6 xl:gap-10">
              {/* DESKTOP NAV LINKS: Men, Women, Kids, Sandals, About Us */}
              <div className="hidden lg:flex items-center gap-7 xl:gap-9">
                {PRIMARY_NAV.map((item) => {
                  const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
                  const isMenuOpen = activeMenuId === item.id;

                  return (
                    <div
                      key={item.id}
                      className="relative"
                      onMouseEnter={() => handleNavEnter(item.id)}
                      onMouseLeave={handleNavLeave}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setActiveMenuId(null)}
                        className={cn(
                          "flex items-center gap-1 text-[12.5px] tracking-[0.1em] uppercase font-bold transition-colors duration-200 py-2 cursor-pointer focus:outline-none",
                          isMenuOpen || isActive
                            ? "text-[#27409A]"
                            : "text-[#000000] hover:text-[#27409A]"
                        )}
                      >
                        <span>{item.label}</span>
                      </Link>

                      {/* Active page underline */}
                      <span
                        className={cn(
                          "absolute bottom-0 left-0 h-[2px] bg-[#27409A] transition-all duration-250",
                          isMenuOpen || isActive ? "w-full" : "w-0"
                        )}
                      />

                      {/* Inline dropdown/megamenu */}
                      <MegaMenu
                        navItem={activeNavItem && activeNavItem.id === item.id ? activeNavItem : null}
                        isOpen={isMenuOpen}
                        onClose={() => setActiveMenuId(null)}
                        onMouseEnter={handleMenuEnter}
                        onMouseLeave={handleMenuLeave}
                      />
                    </div>
                  );
                })}
              </div>

              {/* ACTIONS: Search & Mobile Trigger */}
              <div className="flex items-center gap-1 sm:gap-2">
                <button
                  onClick={() => setIsSearchOpen(true)}
                  className="flex min-h-11 min-w-11 items-center justify-center rounded-full p-2.5 hover:bg-black/5 text-[#000000] hover:text-[#27409A] transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#27409A]"
                  aria-label="Open search"
                >
                  <Search className="w-[18px] h-[18px]" strokeWidth={1.75} />
                </button>

                <button
                  ref={mobileMenuButtonRef}
                  onClick={() => setIsMobileMenuOpen(true)}
                  className="lg:hidden flex min-h-11 min-w-11 items-center justify-center rounded-full bg-white border border-neutral-200 p-2.5 text-[#000000] hover:bg-neutral-100 hover:text-[#27409A] transition-all cursor-pointer shadow-sm"
                  aria-label="Open mobile navigation"
                  aria-controls="walkline-mobile-navigation"
                  aria-expanded={isMobileMenuOpen}
                >
                  <Menu className="w-[18px] h-[18px]" strokeWidth={1.75} />
                </button>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={closeMobileMenu}
        onOpenSearch={() => setIsSearchOpen(true)}
      />
    </>
  );
}
