"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUp, MapPin, Phone, Mail } from "lucide-react";
import Container from "@/ui/Container";
import { COMPANY_INFO } from "@/data/company";
import { assets } from "@/data/assets";

export default function Footer() {
  const handleScrollToTop = () => {
    if (window.__lenis) {
      window.__lenis.scrollTo(0, { duration: 0.9 });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer
      id="contact"
      className="relative w-full bg-[#000000] text-[#FFFFFF] pt-16 sm:pt-20 pb-12 border-t border-neutral-900 overflow-hidden"
      aria-label="Walkline Footwear Footer"
    >
      <Container>
        {/* Top Brandmark Header */}
        <div className="border-b border-neutral-800 pb-10 sm:pb-14 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-4">
            <div className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#27409A] flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#27409A]" />
              <span>Crafting Comfort & Style Since {COMPANY_INFO.establishedYear}</span>
            </div>

            {/* Official Walkline Brand Logo Container */}
            <div className="bg-white px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl inline-flex items-center shadow-sm">
              <Image
                src={assets.logo.primary}
                alt="Walkline Footwear — Above & Beyond"
                width={200}
                height={55}
                className="h-[36px] sm:h-[42px] w-auto object-contain"
                unoptimized
              />
            </div>
          </div>

          <button
            onClick={handleScrollToTop}
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-neutral-900 border border-neutral-700 text-white text-xs font-bold uppercase tracking-[0.15em] hover:bg-[#27409A] hover:border-[#27409A] transition-all cursor-pointer self-start md:self-auto shadow-sm"
            aria-label="Scroll back to top"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-4 h-4 text-[#27409A] group-hover:text-white" />
          </button>
        </div>

        {/* 4 Columns: SHOP, ABOUT, HELP, CONTACT */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-8 sm:gap-12 py-12 sm:py-16 border-b border-neutral-800">
          {/* Col 1: SHOP (3 cols) */}
          <div className="col-span-1 lg:col-span-3 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#27409A]">
              Shop
            </h3>
            <ul className="space-y-2.5 text-sm font-medium text-white/80">
              <li>
                <Link href="/men" className="hover:text-[#27409A] transition-colors">
                  Men
                </Link>
              </li>
              <li>
                <Link href="/women" className="hover:text-[#27409A] transition-colors">
                  Women
                </Link>
              </li>
              <li>
                <Link href="/kids" className="hover:text-[#27409A] transition-colors">
                  Kids
                </Link>
              </li>
              <li>
                <Link href="/sandals" className="hover:text-[#27409A] transition-colors">
                  Sandals
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 2: ABOUT (3 cols) */}
          <div className="col-span-1 lg:col-span-3 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#27409A]">
              About
            </h3>
            <ul className="space-y-2.5 text-sm font-medium text-white/80">
              <li>
                <Link href="/about" className="hover:text-[#27409A] transition-colors">
                  About Walkline
                </Link>
              </li>
              <li>
                <Link href="/manufacturing" className="hover:text-[#27409A] transition-colors">
                  Manufacturing & Craft
                </Link>
              </li>
              <li>
                <Link href="/sustainability" className="hover:text-[#27409A] transition-colors">
                  Materials & Durability
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#27409A] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: HELP (3 cols) */}
          <div className="col-span-1 lg:col-span-3 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#27409A]">
              Help
            </h3>
            <ul className="space-y-2.5 text-sm font-medium text-white/80">
              <li>
                <Link href="/contact" className="hover:text-[#27409A] transition-colors">
                  Shipping Information
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#27409A] transition-colors">
                  Easy 30-Day Returns
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#27409A] transition-colors">
                  Order Inquiries & FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: CONTACT (3 cols) */}
          <div className="col-span-2 sm:col-span-1 lg:col-span-3 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#27409A]">
              Contact
            </h3>
            <div className="space-y-3 text-xs sm:text-sm text-white/80">
              <div className="font-bold text-white uppercase tracking-wider text-xs">
                Walkline Footwear
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#27409A] shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  {COMPANY_INFO.contact.address.full}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#27409A] shrink-0" />
                <a
                  href={`tel:${COMPANY_INFO.contact.phone.replace(/\s+/g, "")}`}
                  className="hover:text-[#27409A] transition-colors font-medium"
                >
                  {COMPANY_INFO.contact.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#27409A] shrink-0" />
                <a
                  href={`mailto:${COMPANY_INFO.contact.email}`}
                  className="hover:text-[#27409A] transition-colors font-medium break-all"
                >
                  {COMPANY_INFO.contact.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Guarantee */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <div>
            © {new Date().getFullYear()} Walkline Footwear. All rights reserved. Made in India.
          </div>
          <div className="text-[11px] font-semibold text-[#27409A] uppercase tracking-wider">
            Est. {COMPANY_INFO.establishedYear} • Bahadurgarh Craft Facility
          </div>
        </div>
      </Container>
    </footer>
  );
}
