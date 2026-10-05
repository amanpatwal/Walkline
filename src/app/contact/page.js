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
    <main className="relative w-full bg-white min-h-screen text-[#000000]">
      <Navbar />

      {/* Editorial Header */}
      <section className="pt-32 sm:pt-36 pb-12 sm:pb-16 bg-white border-b border-neutral-200">
        <Container>
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-xs text-neutral-500 mb-3">
              <Link href="/" className="hover:text-[#27409A] transition-colors">
                Home
              </Link>
              <span>/</span>
              <span className="text-[#000000] font-bold">Contact</span>
            </div>
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] px-3.5 py-1.5 rounded-full bg-neutral-100 border border-neutral-200 text-[#27409A]">
              Direct Factory Desk
            </span>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-[#000000] mt-4">
              Get In Touch With Walkline
            </h1>
            <p className="text-sm sm:text-base text-neutral-600 mt-3.5 leading-relaxed">
              Based at our integrated Bahadurgarh facility in Haryana, our trade and support team is ready to discuss wholesale distribution, dealership networks, and customer inquiries.
            </p>
          </div>
        </Container>
      </section>

      {/* Main Content Grid */}
      <section className="py-14 sm:py-20 bg-neutral-50">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12">
            {/* Left Column: Verified Information Cards */}
            <div className="lg:col-span-5 space-y-6">
              {/* Primary Address Card */}
              <div className="bg-white border border-neutral-200 rounded-2xl p-6 sm:p-7 shadow-sm space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-neutral-50 border border-neutral-200 text-[#000000] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-[#27409A]" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#27409A]">
                      Manufacturing Facility & Office
                    </span>
                    <h2 className="text-sm font-bold text-[#000000] mt-1 leading-snug">
                      {CONTACT_CONTENT.address.full}
                    </h2>
                    <p className="text-xs text-neutral-500 mt-1">
                      Bahadurgarh Industrial Area, Haryana — India
                    </p>
                  </div>
                </div>

                <div className="h-px bg-neutral-100" />

                {/* Direct Phone Support */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-neutral-50 border border-neutral-200 text-[#000000] flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-[#27409A]" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#27409A]">
                      Official Telephone Contact
                    </span>
                    <a
                      href={`tel:${CONTACT_CONTENT.phone.replace(/\s+/g, "")}`}
                      className="text-base font-black text-[#000000] hover:text-[#27409A] transition-colors mt-1 block"
                    >
                      {CONTACT_CONTENT.phone}
                    </a>
                  </div>
                </div>

                <div className="h-px bg-neutral-100" />

                {/* Official Email */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-neutral-50 border border-neutral-200 text-[#000000] flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-[#27409A]" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#27409A]">
                      Official Electronic Mail
                    </span>
                    <a
                      href={`mailto:${CONTACT_CONTENT.email}`}
                      className="text-base font-black text-[#000000] hover:text-[#27409A] transition-colors mt-1 block"
                    >
                      {CONTACT_CONTENT.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Verified Brand & Facility Card */}
              <div className="bg-[#000000] text-white rounded-2xl p-6 sm:p-7 space-y-4">
                <div className="flex items-center gap-2 text-xs uppercase tracking-wider font-bold text-[#27409A]">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Verified Brand</span>
                </div>
                <h3 className="text-lg font-black uppercase tracking-tight text-white">
                  Walkline Footwear
                </h3>
                <p className="text-xs text-white/80 leading-relaxed">
                  Your ultimate destination for premium footwear. Crafting comfort and style for every step since 2009.
                </p>
                <div className="pt-2 border-t border-white/10 text-[11px] text-neutral-300 flex items-center gap-2">
                  <Factory className="w-3.5 h-3.5 text-[#27409A]" />
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
      <section className="py-12 bg-white border-t border-neutral-200">
        <Container>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#27409A]">
                Browse Online
              </span>
              <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-[#000000] mt-1">
                Explore The Complete Walkline Range
              </h3>
            </div>
            <div className="flex flex-wrap gap-2.5">
              <Link
                href="/men"
                className="text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full bg-neutral-100 border border-neutral-200 text-[#000000] hover:bg-[#27409A] hover:text-white hover:border-[#27409A] transition-colors"
              >
                Men&apos;s Sandals
              </Link>
              <Link
                href="/women"
                className="text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full bg-neutral-100 border border-neutral-200 text-[#000000] hover:bg-[#27409A] hover:text-white hover:border-[#27409A] transition-colors"
              >
                Women&apos;s Sneakers
              </Link>
              <Link
                href="/kids"
                className="text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full bg-neutral-100 border border-neutral-200 text-[#000000] hover:bg-[#27409A] hover:text-white hover:border-[#27409A] transition-colors"
              >
                Kids&apos; Footwear
              </Link>
              <Link
                href="/sandals"
                className="text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full bg-neutral-100 border border-neutral-200 text-[#000000] hover:bg-[#27409A] hover:text-white hover:border-[#27409A] transition-colors"
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
