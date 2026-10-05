"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Search, User, ShoppingBag, Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import MegaMenu from "./MegaMenu";
import MobileMenu from "./MobileMenu";
import SearchModal from "./SearchModal";
import CartDrawer from "./CartDrawer";
import { PRIMARY_NAV } from "@/data/navigation";
import { assets } from "@/data/assets";
import { useCart } from "@/context/CartContext";

export default function Navbar() {
  const pathname = usePathname();
  const { itemCount } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMenuId, setActiveMenuId] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const closeTimerRef = useRef(null);

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

            {/* CENTER: Men, Women, Kids, Sandals, About Us */}
            <div className="hidden lg:flex items-center gap-8 xl:gap-10">
              {PRIMARY_NAV.map((item) => {
                const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
                const isMenuOpen = activeMenuId === item.id;

                return (
                  // ── KEY FIX: The entire wrapper (button + dropdown) is ONE hover region ──
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

                    {/* Inline dropdown/megamenu — shares the same hover region */}
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

            {/* RIGHT: Search, Account, Bag, Mobile Trigger */}
            <div className="flex items-center gap-1 sm:gap-2">
              <button
                onClick={() => setIsSearchOpen(true)}
                className="p-2.5 rounded-full hover:bg-black/5 text-[#000000] hover:text-[#27409A] transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#27409A]"
                aria-label="Open search"
              >
                <Search className="w-[18px] h-[18px]" strokeWidth={1.75} />
              </button>

              <Link
                href="/contact"
                className="hidden sm:inline-flex p-2.5 rounded-full hover:bg-black/5 text-[#000000] hover:text-[#27409A] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#27409A]"
                aria-label="Contact & account"
              >
                <User className="w-[18px] h-[18px]" strokeWidth={1.75} />
              </Link>

              <button
                onClick={() => setIsCartOpen(true)}
                className="relative p-2.5 rounded-full hover:bg-black/5 text-[#000000] hover:text-[#27409A] transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#27409A] group"
                aria-label={`Shopping bag (${itemCount} items)`}
              >
                <ShoppingBag className="w-[18px] h-[18px]" strokeWidth={1.75} />
                {itemCount > 0 && (
                  <span className="absolute top-1 right-1 min-w-[16px] h-[16px] px-1 rounded-full bg-[#27409A] text-white text-[9px] font-bold flex items-center justify-center group-hover:scale-110 transition-transform">
                    {itemCount}
                  </span>
                )}
              </button>

              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="lg:hidden p-2.5 rounded-full bg-white border border-neutral-200 text-[#000000] hover:bg-neutral-100 hover:text-[#27409A] transition-all cursor-pointer shadow-sm"
                aria-label="Open mobile navigation"
              >
                <Menu className="w-[18px] h-[18px]" strokeWidth={1.75} />
              </button>
            </div>
          </div>
        </nav>
      </header>

      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenCart={() => setIsCartOpen(true)}
      />
    </>
  );
}
