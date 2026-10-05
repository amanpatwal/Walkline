import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, Phone, Mail } from "lucide-react";
import { ABOUT_CONTENT } from "@/data/about";
import { COMPANY_INFO } from "@/data/company";
import { assets } from "@/data/assets";

export const metadata = {
  title: "About Us — Walkline Footwear",
  description:
    "Your ultimate destination for premium footwear. Crafting comfort and style for every step since 2009. Based in Bahadurgarh, India.",
};

export default function AboutPage() {
  return (
    <main className="relative w-full bg-white min-h-screen text-[#000000]">
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative w-full overflow-hidden pt-[72px] sm:pt-[80px] bg-[#000000]">
        <div className="relative aspect-[16/8] sm:aspect-[21/8] lg:aspect-[25/8] max-h-[580px] min-h-[220px]">
          <Image
            src={assets.campaigns.comfortMoves}
            alt="Walkline Footwear — Above & Beyond since 2009"
            fill
            priority
            className="object-cover object-center opacity-60"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
        </div>

        <div className="absolute inset-0 flex items-end pb-10 px-5 sm:px-10 lg:px-16">
          <div className="max-w-[1440px] mx-auto w-full">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-1.5 mb-5 text-[10px] uppercase tracking-[0.18em] font-bold text-neutral-400">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span className="text-neutral-600">/</span>
              <span className="text-[#27409A]">About Us</span>
            </nav>
            <p className="text-[10px] uppercase tracking-[0.22em] font-bold text-[#27409A] mb-2">
              Since {COMPANY_INFO.establishedYear}
            </p>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-white leading-[0.92]">
              Above &<br />Beyond
            </h1>
          </div>
        </div>
      </section>

      {/* ── Brand Statement ── */}
      <section className="w-full bg-neutral-50 px-5 sm:px-10 lg:px-16 py-16 sm:py-20">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
          <div>
            <p className="text-[10px] uppercase tracking-[0.22em] font-bold text-[#27409A] mb-4">
              Our Story
            </p>
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-[#000000] leading-[0.95] mb-6">
              Crafting Comfort &<br />Style Since 2009
            </h2>
            <p className="text-base text-neutral-700 leading-relaxed mb-5">
              {ABOUT_CONTENT.lead}
            </p>
            <p className="text-sm text-neutral-600 leading-relaxed">
              {ABOUT_CONTENT.statement}
            </p>
          </div>

          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-neutral-200">
            <Image
              src={assets.campaigns.weekend}
              alt="Walkline Footwear lifestyle"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute bottom-4 left-4 right-4">
              <div className="bg-white/95 backdrop-blur-sm rounded-xl px-4 py-3 inline-flex items-center gap-3 border border-neutral-200 shadow-md">
                <div className="w-8 h-8 rounded-full bg-[#27409A] flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-[9px] uppercase tracking-wider font-bold text-[#27409A]">Crafted In</p>
                  <p className="text-[11px] font-black uppercase text-[#000000]">Bahadurgarh, India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Three Pillars ── */}
      <section className="w-full bg-white px-5 sm:px-10 lg:px-16 py-14 sm:py-18">
        <div className="max-w-[1440px] mx-auto">
          <div className="mb-10 border-b border-neutral-200 pb-5">
            <p className="text-[10px] uppercase tracking-[0.22em] font-bold text-[#27409A] mb-2">
              Our Approach
            </p>
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-[#000000]">
              What We Stand For
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {ABOUT_CONTENT.pillars.map((pillar, idx) => (
              <div
                key={idx}
                className="p-7 rounded-2xl bg-neutral-50 border border-neutral-200 hover:border-[#27409A] hover:shadow-lg transition-all duration-300"
              >
                <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#27409A]">
                  0{idx + 1}
                </span>
                <h3 className="text-lg font-black uppercase tracking-tight text-[#000000] mt-3 mb-3">
                  {pillar.title}
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Dark Campaign: Made in India ── */}
      <section className="relative w-full overflow-hidden bg-[#000000]">
        <div className="relative aspect-[21/8] sm:aspect-[25/7] max-h-[440px] min-h-[180px]">
          <Image
            src={assets.campaigns.moveDifferent}
            alt="Walkline — Made in India"
            fill
            className="object-cover object-center opacity-50"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 flex items-center justify-center text-center px-5">
          <div>
            <p className="text-[10px] uppercase tracking-[0.22em] font-bold text-[#27409A] mb-3">
              {ABOUT_CONTENT.madeInIndiaClaim}
            </p>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white leading-[0.92]">
              Bahadurgarh<br />Manufacturing
            </h2>
          </div>
        </div>
      </section>

      {/* ── Contact Strip ── */}
      <section className="w-full bg-neutral-50 px-5 sm:px-10 lg:px-16 py-12 sm:py-16 border-y border-neutral-200">
        <div className="max-w-[1440px] mx-auto">
          <div className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-[#000000] mb-1">
              Get In Touch
            </h2>
            <p className="text-sm text-neutral-600">Reach out for trade enquiries, retail partnerships, or product information.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            <div className="flex items-start gap-3.5 p-5 rounded-xl bg-white border border-neutral-200">
              <MapPin className="w-5 h-5 text-[#27409A] mt-0.5 shrink-0" />
              <div>
                <p className="text-[10px] uppercase tracking-wider font-bold text-neutral-500 mb-1">Address</p>
                <p className="text-sm font-bold text-[#000000]">{COMPANY_INFO.contact.address.full}</p>
              </div>
            </div>
            <div className="flex items-start gap-3.5 p-5 rounded-xl bg-white border border-neutral-200">
              <Phone className="w-5 h-5 text-[#27409A] mt-0.5 shrink-0" />
              <div>
                <p className="text-[10px] uppercase tracking-wider font-bold text-neutral-500 mb-1">Phone</p>
                <a href={`tel:${COMPANY_INFO.contact.phone}`} className="text-sm font-bold text-[#000000] hover:text-[#27409A] transition-colors">
                  {COMPANY_INFO.contact.phone}
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3.5 p-5 rounded-xl bg-white border border-neutral-200">
              <Mail className="w-5 h-5 text-[#27409A] mt-0.5 shrink-0" />
              <div>
                <p className="text-[10px] uppercase tracking-wider font-bold text-neutral-500 mb-1">Email</p>
                <a href={`mailto:${COMPANY_INFO.contact.email}`} className="text-sm font-bold text-[#000000] hover:text-[#27409A] transition-colors">
                  {COMPANY_INFO.contact.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Explore Collections CTA ── */}
      <section className="w-full bg-white px-5 sm:px-10 lg:px-16 py-14 sm:py-20 text-center">
        <div className="max-w-2xl mx-auto">
          <p className="text-[10px] uppercase tracking-[0.22em] font-bold text-[#27409A] mb-3">
            Step Into Walkline
          </p>
          <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-[#000000] mb-4">
            Explore Collections
          </h2>
          <p className="text-sm text-neutral-600 mb-8 leading-relaxed">
            {COMPANY_INFO.tagline} Browse our full range of men&apos;s, women&apos;s and kids&apos; footwear.
          </p>
          <div className="flex flex-row items-center justify-center gap-3 flex-wrap">
            <Link
              href="/men"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-[#27409A] hover:bg-[#1E327A] text-white text-[11px] font-bold uppercase tracking-[0.12em] transition-colors shadow-md"
            >
              <span>Shop Men</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              href="/women"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg border border-neutral-300 text-[#000000] text-[11px] font-bold uppercase tracking-[0.12em] hover:border-[#27409A] hover:text-[#27409A] transition-colors"
            >
              Shop Women
            </Link>
            <Link
              href="/sandals"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg border border-neutral-300 text-[#000000] text-[11px] font-bold uppercase tracking-[0.12em] hover:border-[#27409A] hover:text-[#27409A] transition-colors"
            >
              Sandals
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
