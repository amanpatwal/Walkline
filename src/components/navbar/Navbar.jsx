"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Search, User, ShoppingBag, Menu, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import Container from "@/ui/Container";
import AnnouncementBar from "./AnnouncementBar";
import MegaMenu from "./MegaMenu";
import MobileMenu from "./MobileMenu";
import SearchModal from "./SearchModal";
import CartDrawer from "./CartDrawer";
import { PRIMARY_NAV } from "@/data/navigation";
import { COMPANY_INFO } from "@/data/company";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMenuId, setActiveMenuId] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    setActiveMenuId(null);
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

  const activeNavItem = PRIMARY_NAV.find((item) => item.id === activeMenuId);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 bg-[#FFFFFF]">
        {/* Fashion Announcement Bar */}
        <AnnouncementBar />

        {/* Comet-Inspired Navigation Surface */}
        <nav
          className={cn(
            "relative w-full transition-all duration-300 ease-out border-b",
            isScrolled
              ? "py-3 bg-white/95 backdrop-blur-md border-black/10 shadow-sm"
              : "py-4 bg-[#FFFFFF] border-black/5"
          )}
          aria-label="Main Store Navigation"
        >
          <Container className="flex items-center justify-between">
            {/* LEFT: Walkline Brandmark */}
            <div className="flex items-center gap-3">
              <Link
                href="/"
                className="group flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-black rounded-lg"
                aria-label="Walkline Footwear Homepage"
                onClick={() => setActiveMenuId(null)}
              >
                <span className="text-2xl sm:text-3xl font-black tracking-[-0.05em] uppercase text-[#111111]">
                  WALKLINE
                </span>
                <span className="hidden sm:inline-block text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#F4F000] text-black border border-black shadow-[1.5px_1.5px_0px_0px_#000]">
                  EST. {COMPANY_INFO.establishedYear}
                </span>
              </Link>
            </div>

            {/* CENTER: Men, Women, The Vault, About Us */}
            <div
              className="hidden lg:flex items-center gap-8"
              onMouseLeave={() => setActiveMenuId(null)}
            >
              {PRIMARY_NAV.map((item) => (
                <div
                  key={item.id}
                  className="relative py-2"
                  onMouseEnter={() => setActiveMenuId(item.id)}
                >
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={cn(
                      "flex items-center gap-1 text-xs uppercase tracking-wider font-extrabold transition-colors duration-200 py-1 cursor-pointer focus:outline-none",
                      activeMenuId === item.id
                        ? "text-[#3155FF]"
                        : "text-[#111111] hover:text-[#3155FF]"
                    )}
                  >
                    <span>{item.label}</span>
                    <ChevronDown
                      className={cn(
                        "w-3.5 h-3.5 transition-transform duration-200",
                        activeMenuId === item.id ? "rotate-180" : ""
                      )}
                    />
                  </a>
                  <span
                    className={cn(
                      "absolute bottom-0 left-0 h-[2px] bg-[#F4F000] transition-all duration-300",
                      activeMenuId === item.id ? "w-full" : "w-0"
                    )}
                  />
                </div>
              ))}
            </div>

            {/* RIGHT: Search, Account, Cart, Mobile Menu */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Search Trigger */}
              <button
                onClick={() => setIsSearchOpen(true)}
                className="p-2.5 rounded-full hover:bg-[#F7F7F4] text-[#111111] transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-black"
                aria-label="Open search modal"
              >
                <Search className="w-5 h-5 text-black" />
              </button>

              {/* Account Trigger */}
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "#contact")}
                className="hidden sm:inline-flex p-2.5 rounded-full hover:bg-[#F7F7F4] text-[#111111] transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-black"
                aria-label="View account & contact details"
              >
                <User className="w-5 h-5 text-black" />
              </a>

              {/* Cart / Bag Trigger with Counter */}
              <button
                onClick={() => setIsCartOpen(true)}
                className="relative p-2.5 rounded-full hover:bg-[#F7F7F4] text-[#111111] transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-black group"
                aria-label="View shopping bag"
              >
                <ShoppingBag className="w-5 h-5 text-black" />
                <span className="absolute top-1.5 right-1.5 w-4 h-4 rounded-full bg-[#F4F000] border border-black text-[10px] font-black text-black flex items-center justify-center shadow-[1px_1px_0px_0px_#000] group-hover:scale-110 transition-transform">
                  1
                </span>
              </button>

              {/* Mobile Hamburger Drawer Trigger */}
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="lg:hidden p-2.5 rounded-full bg-white border-2 border-black text-black shadow-[2px_2px_0px_0px_#000] active:translate-x-0.5 active:translate-y-0.5 transition-all cursor-pointer"
                aria-label="Open mobile menu"
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </Container>

          {/* Desktop Mega-Menu & Dropdowns */}
          <div
            onMouseEnter={() => {}}
            onMouseLeave={() => setActiveMenuId(null)}
          >
            <MegaMenu
              navItem={activeNavItem}
              isOpen={Boolean(activeNavItem)}
              onClose={() => setActiveMenuId(null)}
            />
          </div>
        </nav>
      </header>

      {/* Interactive Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />

      {/* Slide-Over Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
      />

      {/* Dedicated Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenCart={() => setIsCartOpen(true)}
      />
    </>
  );
}
