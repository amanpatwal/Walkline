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
      className="relative w-full bg-white text-[#111111] pt-14 sm:pt-16 pb-8 sm:pb-10 border-t border-[#E5E7EB] overflow-hidden"
      aria-label="Walkline Footwear Footer"
    >
      <Container>
        {/* Top Brandmark Header */}
        <div className="border-b border-[#E5E7EB] pb-8 sm:pb-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-4">
            <div className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#27409A] flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#27409A]" />
              <span>Crafting Comfort & Style Since {COMPANY_INFO.establishedYear}</span>
            </div>

            {/* Official Walkline Brand Logo Container */}
            <div className="inline-flex items-center">
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
            className="group inline-flex min-h-11 items-center gap-2.5 px-5 py-2.5 border border-[#E5E7EB] text-xs font-bold uppercase tracking-[0.15em] text-[#111111] hover:bg-[#27409A] hover:border-[#27409A] hover:text-white transition-colors cursor-pointer self-start md:self-auto"
            aria-label="Scroll back to top"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-4 h-4 text-[#27409A] group-hover:text-white" />
          </button>
        </div>

        {/* 4 Columns: SHOP, ABOUT, HELP, CONTACT */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-8 sm:gap-10 py-10 sm:py-12 border-b border-[#E5E7EB]">
          {/* Col 1: SHOP (3 cols) */}
          <div className="col-span-1 lg:col-span-3 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#27409A]">
              Shop
            </h3>
            <ul className="space-y-2.5 text-sm font-medium text-[#666666]">
              <li>
                <Link href="/men" className="inline-flex min-h-11 items-center hover:text-[#27409A] transition-colors sm:min-h-0">
                  Men
                </Link>
              </li>
              <li>
                <Link href="/women" className="inline-flex min-h-11 items-center hover:text-[#27409A] transition-colors sm:min-h-0">
                  Women
                </Link>
              </li>
              <li>
                <Link href="/kids" className="inline-flex min-h-11 items-center hover:text-[#27409A] transition-colors sm:min-h-0">
                  Kids
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 2: ABOUT (3 cols) */}
          <div className="col-span-1 lg:col-span-3 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#27409A]">
              About
            </h3>
            <ul className="space-y-2.5 text-sm font-medium text-[#666666]">
              <li>
                <Link href="/about" className="inline-flex min-h-11 items-center hover:text-[#27409A] transition-colors sm:min-h-0">
                  About Walkline
                </Link>
              </li>
              <li>
                <Link href="/manufacturing" className="inline-flex min-h-11 items-center hover:text-[#27409A] transition-colors sm:min-h-0">
                  Manufacturing & Craft
                </Link>
              </li>
              <li>
                <Link href="/sustainability" className="inline-flex min-h-11 items-center hover:text-[#27409A] transition-colors sm:min-h-0">
                  Materials & Durability
                </Link>
              </li>
              <li>
                <Link href="/contact" className="inline-flex min-h-11 items-center hover:text-[#27409A] transition-colors sm:min-h-0">
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
            <ul className="space-y-2.5 text-sm font-medium text-[#666666]">
              <li>
                <Link href="/contact" className="inline-flex min-h-11 items-center hover:text-[#27409A] transition-colors sm:min-h-0">
                  Shipping Information
                </Link>
              </li>
              <li>
                <Link href="/contact" className="inline-flex min-h-11 items-center hover:text-[#27409A] transition-colors sm:min-h-0">
                  Easy 30-Day Returns
                </Link>
              </li>
              <li>
                <Link href="/contact" className="inline-flex min-h-11 items-center hover:text-[#27409A] transition-colors sm:min-h-0">
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
            <div className="space-y-3 text-xs sm:text-sm text-[#666666]">
              <div className="font-bold text-[#111111] uppercase tracking-wider text-xs">
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
                  className="inline-flex min-h-11 items-center hover:text-[#27409A] transition-colors font-medium sm:min-h-0"
                >
                  {COMPANY_INFO.contact.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#27409A] shrink-0" />
                <a
                  href={`mailto:${COMPANY_INFO.contact.email}`}
                  className="inline-flex min-h-11 items-center hover:text-[#27409A] transition-colors font-medium break-all sm:min-h-0"
                >
                  {COMPANY_INFO.contact.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Guarantee */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#666666]">
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
