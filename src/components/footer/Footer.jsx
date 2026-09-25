"use client";

import Link from "next/link";
import { ArrowUp, MapPin, Phone, Mail } from "lucide-react";
import Container from "@/ui/Container";
import { COMPANY_INFO } from "@/data/company";

export default function Footer() {
  const handleScrollToTop = () => {
    if (window.__lenis) {
      window.__lenis.scrollTo(0, { duration: 0.9 });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleNavClick = (e, href) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const targetId = href.substring(1);
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        if (window.__lenis) {
          window.__lenis.scrollTo(targetEl, { offset: -76 });
        } else {
          targetEl.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  };

  return (
    <footer
      id="contact"
      className="relative w-full bg-[#24140D] text-[#FAF7F1] pt-16 sm:pt-20 pb-12 border-t border-[#321D12] overflow-hidden"
      aria-label="Walkline Footwear Footer"
    >
      <Container>
        {/* Top Brandmark Header */}
        <div className="border-b border-white/10 pb-12 sm:pb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#C69A6B] mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C69A6B]" />
              <span>Crafting Comfort & Style Since {COMPANY_INFO.establishedYear}</span>
            </div>
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-[-0.04em] text-[#FAF7F1] leading-none">
              WALKLINE
            </h2>
          </div>

          <button
            onClick={handleScrollToTop}
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#321D12] border border-white/15 text-[#FAF7F1] text-xs font-bold uppercase tracking-[0.15em] hover:bg-[#5A351F] transition-all cursor-pointer self-start md:self-auto shadow-editorial-sm"
            aria-label="Scroll back to top"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-4 h-4 text-[#C69A6B]" />
          </button>
        </div>

        {/* 4 Columns: SHOP, ABOUT, HELP, CONTACT */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-8 sm:gap-12 py-12 sm:py-16 border-b border-white/10">
          {/* Col 1: SHOP (3 cols) */}
          <div className="col-span-1 lg:col-span-3 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#C69A6B]">
              Shop
            </h3>
            <ul className="space-y-2.5 text-sm font-medium text-[#FAF7F1]/80">
              <li>
                <Link href="/men" className="hover:text-white transition-colors">
                  Men
                </Link>
              </li>
              <li>
                <Link href="/women" className="hover:text-white transition-colors">
                  Women
                </Link>
              </li>
              <li>
                <Link href="/kids" className="hover:text-white transition-colors">
                  Kids
                </Link>
              </li>
              <li>
                <Link href="/sandals" className="hover:text-white transition-colors">
                  Sandals
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 2: ABOUT (3 cols) */}
          <div className="col-span-1 lg:col-span-3 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#C69A6B]">
              About
            </h3>
            <ul className="space-y-2.5 text-sm font-medium text-[#FAF7F1]/80">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Walkline
                </Link>
              </li>
              <li>
                <Link href="/manufacturing" className="hover:text-white transition-colors">
                  Manufacturing & Craft
                </Link>
              </li>
              <li>
                <Link href="/sustainability" className="hover:text-white transition-colors">
                  Materials & Durability
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: HELP (3 cols) */}
          <div className="col-span-1 lg:col-span-3 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#C69A6B]">
              Help
            </h3>
            <ul className="space-y-2.5 text-sm font-medium text-[#FAF7F1]/80">
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Shipping Information
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Easy 30-Day Returns
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Order Inquiries & FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: CONTACT (3 cols) */}
          <div className="col-span-2 sm:col-span-1 lg:col-span-3 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#C69A6B]">
              Contact
            </h3>
            <div className="space-y-3 text-xs sm:text-sm text-[#FAF7F1]/80">
              <div className="font-bold text-white uppercase tracking-wider text-xs">
                Walkline Footwear
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#C69A6B] shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  {COMPANY_INFO.contact.address.full}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#C69A6B] shrink-0" />
                <a
                  href={`tel:${COMPANY_INFO.contact.phone.replace(/\s+/g, "")}`}
                  className="hover:text-white transition-colors font-medium"
                >
                  {COMPANY_INFO.contact.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#C69A6B] shrink-0" />
                <a
                  href={`mailto:${COMPANY_INFO.contact.email}`}
                  className="hover:text-white transition-colors font-medium break-all"
                >
                  {COMPANY_INFO.contact.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Guarantee */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#FAF7F1]/60">
          <div>
            © {new Date().getFullYear()} Walkline Footwear. All rights reserved. Made in India.
          </div>
          <div className="text-[11px] font-mono text-[#C69A6B]/80 uppercase">
            Est. {COMPANY_INFO.establishedYear} • Bahadurgarh Craft Facility
          </div>
        </div>
      </Container>
    </footer>
  );
}
