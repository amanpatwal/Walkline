"use client";

import { ArrowUp, ArrowUpRight, Phone, Mail, MapPin } from "lucide-react";
import Container from "@/ui/Container";
import { CATEGORY_LINKS, COMPANY_LINKS, LEGAL_LINKS, SOCIAL_LINKS } from "@/data/navigation";
import { COMPANY_INFO } from "@/data/company";

export default function Footer() {
  const handleScrollToTop = () => {
    if (window.__lenis) {
      window.__lenis.scrollTo(0, { duration: 1.1 });
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
          window.__lenis.scrollTo(targetEl, { offset: -80 });
        } else {
          targetEl.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  };

  return (
    <footer
      id="contact"
      className="relative w-full bg-[#111111] text-[#F7F7F4] pt-20 pb-12 border-t-2 border-black overflow-hidden"
    >
      <Container>
        {/* Top Brandmark Header */}
        <div className="border-b-2 border-white/10 pb-16">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div>
              <div className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-[#F4F000] mb-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#F4F000]" />
                <span>CRAFTING COMFORT & STYLE SINCE {COMPANY_INFO.establishedYear}</span>
              </div>
              <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase tracking-[-0.05em] text-white leading-none">
                WALKLINE
              </h2>
            </div>

            <button
              onClick={handleScrollToTop}
              className="flex items-center gap-3 text-xs font-black uppercase tracking-wider text-black bg-[#F4F000] border-2 border-black px-6 py-3 rounded-full hover:bg-white transition-all self-start lg:self-auto cursor-pointer shadow-[3px_3px_0px_0px_#FFFFFF]"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Multi-Column Sitemap & Verified Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 py-16 border-b-2 border-white/10">
          {/* Col 1: Verified Contact Info (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-[#F4F000]">
              Contact & Inquiries
            </h3>
            <p className="text-sm font-bold text-[#A8A8A2] leading-relaxed max-w-sm">
              {COMPANY_INFO.brandStatement}
            </p>

            <div className="space-y-2.5 pt-2 text-sm text-[#D0D0C8]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#F4F000] shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.contact.address.full}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#F4F000] shrink-0" />
                <a href={`tel:${COMPANY_INFO.contact.phone.replace(/\s+/g, '')}`} className="hover:text-white font-bold">
                  {COMPANY_INFO.contact.phone}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#F4F000] shrink-0" />
                <a href={`mailto:${COMPANY_INFO.contact.email}`} className="hover:text-white font-bold">
                  {COMPANY_INFO.contact.email}
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Categories (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-white">
              Product Categories
            </h3>
            <ul className="space-y-2.5">
              {CATEGORY_LINKS.map((cat, idx) => (
                <li key={idx}>
                  <a
                    href={cat.href}
                    onClick={(e) => handleNavClick(e, cat.href)}
                    className="text-sm font-bold text-[#D0D0C8] hover:text-[#F4F000] transition-colors inline-block"
                  >
                    {cat.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Company & Pages (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-white">
              Pages
            </h3>
            <ul className="space-y-2.5">
              {COMPANY_LINKS.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-sm font-bold text-[#D0D0C8] hover:text-[#F4F000] transition-colors inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Social / Community (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-white">
              Connect
            </h3>
            <ul className="space-y-2.5">
              {SOCIAL_LINKS.map((soc, idx) => (
                <li key={idx}>
                  <a
                    href={soc.href}
                    className="text-sm font-bold text-[#D0D0C8] hover:text-white transition-colors flex items-center justify-between group"
                  >
                    <span>{soc.label}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-40 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-bold text-[#888888] gap-4">
          <div>
            © Copyright {COMPANY_INFO.brandName} 2026. All Rights Reserved.
          </div>
          <div className="flex items-center gap-6">
            {LEGAL_LINKS.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                className="hover:text-white transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
