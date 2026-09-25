import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import Container from "@/ui/Container";
import ContactForm from "@/components/contact/ContactForm";
import { Mail, Phone, MapPin, Building2, Clock, Globe, ArrowRight, ShieldCheck, Factory } from "lucide-react";
import { CONTACT_CONTENT } from "@/data/contact";
import { COMPANY_INFO } from "@/data/company";
import Link from "next/link";

export const metadata = {
  title: "Contact & Inquiries — Walkline Footwear",
  description:
    "Get in touch with Walkline Footwear for product inquiries, wholesale distribution, retail dealership, and factory visits at Bahadurgarh.",
};

export default function ContactPage() {
  return (
    <main className="relative w-full bg-[#FAF7F1] min-h-screen text-[#24140D]">
      <Navbar />

      {/* Editorial Header */}
      <section className="pt-32 sm:pt-36 pb-12 sm:pb-16 bg-white border-b border-[#24140D]/10">
        <Container>
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-mono text-[#8A6E58] mb-3">
              <Link href="/" className="hover:text-[#24140D] transition-colors">
                Home
              </Link>
              <span>/</span>
              <span className="text-[#24140D] font-bold">Contact</span>
            </div>
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] px-3.5 py-1.5 rounded-full bg-[#FAF7F1] border border-[#24140D]/15 text-[#5A351F]">
              Direct Factory Desk
            </span>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-[#24140D] mt-4">
              Get In Touch With Walkline
            </h1>
            <p className="text-sm sm:text-base text-[#5A351F]/80 mt-3.5 leading-relaxed">
              Based at our integrated Bahadurgarh facility in Haryana, our trade and support team is ready to discuss wholesale distribution, dealership networks, and customer inquiries.
            </p>
          </div>
        </Container>
      </section>

      {/* Main Content Grid */}
      <section className="py-14 sm:py-20 bg-[#FAF7F1]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12">
            {/* Left Column: Verified Information Cards */}
            <div className="lg:col-span-5 space-y-6">
              {/* Primary Address Card */}
              <div className="bg-white border border-[#24140D]/10 rounded-2xl p-6 sm:p-7 shadow-editorial-sm space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-[#FAF7F1] border border-[#24140D]/10 text-[#321D12] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-[#9A6238]" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#8A6E58]">
                      Manufacturing Facility & Office
                    </span>
                    <h2 className="text-sm font-bold text-[#24140D] mt-1 leading-snug">
                      {CONTACT_CONTENT.address.full}
                    </h2>
                    <p className="text-xs text-[#5A351F]/70 mt-1">
                      Bahadurgarh Industrial Area, Haryana — India
                    </p>
                  </div>
                </div>

                <div className="h-px bg-[#24140D]/08" />

                {/* Direct Phone Support */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-[#FAF7F1] border border-[#24140D]/10 text-[#321D12] flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-[#9A6238]" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#8A6E58]">
                      Official Telephone Contact
                    </span>
                    <a
                      href={`tel:${CONTACT_CONTENT.phone.replace(/\s+/g, "")}`}
                      className="text-base font-black text-[#24140D] hover:text-[#9A6238] transition-colors mt-1 block"
                    >
                      {CONTACT_CONTENT.phone}
                    </a>
                  </div>
                </div>

                <div className="h-px bg-[#24140D]/08" />

                {/* Official Email */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-[#FAF7F1] border border-[#24140D]/10 text-[#321D12] flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-[#9A6238]" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#8A6E58]">
                      Official Electronic Mail
                    </span>
                    <a
                      href={`mailto:${CONTACT_CONTENT.email}`}
                      className="text-base font-black text-[#24140D] hover:text-[#9A6238] transition-colors mt-1 block"
                    >
                      {CONTACT_CONTENT.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Verified Brand & Facility Card */}
              <div className="bg-[#321D12] text-[#FAF7F1] rounded-2xl p-6 sm:p-7 space-y-4">
                <div className="flex items-center gap-2 text-xs font-mono text-[#C69A6B] uppercase tracking-wider">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Verified Brand</span>
                </div>
                <h3 className="text-lg font-black uppercase tracking-tight text-[#FAF7F1]">
                  Walkline Footwear
                </h3>
                <p className="text-xs text-[#FAF7F1]/80 leading-relaxed">
                  Your ultimate destination for premium footwear. Crafting comfort and style for every step since 2009.
                </p>
                <div className="pt-2 border-t border-white/10 text-[11px] text-[#C69A6B] flex items-center gap-2">
                  <Factory className="w-3.5 h-3.5 text-[#C69A6B]" />
                  <span>Manufacturing Facility: Plot No 362, MIE Part A, Bahadurgarh - 124507</span>
                </div>
              </div>
            </div>

            {/* Right Column: Trade Inquiry Form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>

      {/* Quick Category Discovery Banner */}
      <section className="py-12 bg-white border-t border-[#24140D]/10">
        <Container>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#8A6E58]">
                Browse Online
              </span>
              <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-[#24140D] mt-1">
                Explore The Complete Walkline Range
              </h3>
            </div>
            <div className="flex flex-wrap gap-2.5">
              <Link
                href="/men"
                className="text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full bg-[#FAF7F1] border border-[#24140D]/15 text-[#24140D] hover:bg-[#24140D] hover:text-[#FAF7F1] transition-colors"
              >
                Men&apos;s Sandals
              </Link>
              <Link
                href="/women"
                className="text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full bg-[#FAF7F1] border border-[#24140D]/15 text-[#24140D] hover:bg-[#24140D] hover:text-[#FAF7F1] transition-colors"
              >
                Women&apos;s Sneakers
              </Link>
              <Link
                href="/kids"
                className="text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full bg-[#FAF7F1] border border-[#24140D]/15 text-[#24140D] hover:bg-[#24140D] hover:text-[#FAF7F1] transition-colors"
              >
                Kids&apos; Footwear
              </Link>
              <Link
                href="/sandals"
                className="text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full bg-[#FAF7F1] border border-[#24140D]/15 text-[#24140D] hover:bg-[#24140D] hover:text-[#FAF7F1] transition-colors"
              >
                Fashion Sandals
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  );
}
