import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import FinalCTA from "@/components/home/FinalCTA";
import EditorialPageHero from "@/components/ui/EditorialPageHero";
import ProductGrid from "@/components/ui/ProductGrid";
import Image from "next/image";
import Link from "next/link";
import { FEATURED_PRODUCTS } from "@/data/products";
import { assets } from "@/data/assets";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Men's Footwear — Walkline Footwear",
  description:
    "Explore Walkline men's footwear — Vertex sandals, Concept chappals, slip-ons and sneakers. Crafted for all-day comfort since 2009.",
};

const mensProducts = FEATURED_PRODUCTS.filter((p) =>
  ["mens-sandals"].includes(p.categoryKey)
);

const allMensProducts = FEATURED_PRODUCTS.filter((p) =>
  ["mens-sandals", "fashion-sandals"].includes(p.categoryKey)
);

const MENS_CATEGORIES = [
  {
    label: "Sandals & Chappals",
    desc: "Vertex & Concept — lighter than air",
    image: assets.campaigns.weekend,
    href: "/sandals",
  },
  {
    label: "Fashion Sandals",
    desc: "VRX metallic buckle series",
    image: assets.campaigns.rainyDays,
    href: "/sandals",
  },
  {
    label: "Slip-ons",
    desc: "Easy on, easy off everyday comfort",
    image: assets.campaigns.comfortGo,
    href: "/men",
  },
  {
    label: "New Arrivals",
    desc: "Fresh drops from Walkline",
    image: assets.campaigns.freshRotation,
    href: "/men",
  },
];

export default function MenPage() {
  return (
    <main className="relative w-full bg-[#FAF7F1] min-h-screen text-[#24140D]">
      <Navbar />

      {/* Hero */}
      <EditorialPageHero
        image={assets.campaigns.weekend}
        imageAlt="Walkline Men's Footwear — Weekend Mode campaign"
        eyebrow="Men's Collection"
        title="Step Into Every Day"
        description="Crafted for the man who moves. Premium sandals, slip-ons and chappals engineered for all-day comfort since 2009."
        ctaLabel="Shop Sandals"
        ctaHref="/sandals"
        ctaSecLabel="All Men's"
        ctaSecHref="/collections"
        theme="light"
        objectPosition="center"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Men", href: "/men" },
        ]}
      />

      {/* Category Grid */}
      <section className="w-full bg-white px-5 sm:px-10 lg:px-16 py-14 sm:py-18">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex items-end justify-between mb-8 border-b border-[#24140D]/10 pb-5">
            <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-[#24140D]">
              Shop by Category
            </h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {MENS_CATEGORIES.map((cat, idx) => (
              <Link
                key={idx}
                href={cat.href}
                className="group relative rounded-xl overflow-hidden aspect-[3/4] bg-[#F7F4EE] block"
              >
                <Image
                  src={cat.image}
                  alt={cat.label}
                  fill
                  className="object-cover group-hover:scale-[1.04] transition-transform duration-600"
                  sizes="(max-width: 640px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#24140D]/70 via-[#24140D]/10 to-transparent" />
                <div className="absolute bottom-0 inset-x-0 p-4">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-[#C69A6B]">{cat.desc}</p>
                  <h3 className="text-sm font-black uppercase tracking-tight text-white mt-0.5">{cat.label}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <ProductGrid
        products={allMensProducts}
        heading="Featured Men's Styles"
      />

      {/* Editorial Campaign Break */}
      <section className="relative w-full bg-[#1A0F08] overflow-hidden">
        <div className="relative aspect-[21/8] sm:aspect-[25/8] max-h-[480px] min-h-[200px]">
          <Image
            src={assets.campaigns.bounceSole}
            alt="Bounce Sole — Walkline's shock-absorbing dual-density footbed"
            fill
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A0F08]/80 via-[#1A0F08]/30 to-transparent" />
          <div className="absolute inset-0 flex items-center px-8 sm:px-16 lg:px-24">
            <div className="max-w-sm">
              <p className="text-[10px] uppercase tracking-[0.22em] font-bold text-[#C69A6B] mb-2">
                Innovation
              </p>
              <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-[#FAF7F1] leading-[0.95] mb-4">
                Bounce Sole Technology
              </h2>
              <p className="text-sm text-[#C69A6B]/80 mb-6 leading-relaxed">
                Shock-absorbing dual-density footbed. Feel the difference with every step.
              </p>
              <Link
                href="/sandals"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#FAF7F1] text-[#24140D] text-[11px] font-bold uppercase tracking-wider hover:bg-white transition-colors"
              >
                Explore Slippers
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Comfort Feature */}
      <section className="w-full bg-[#FAF7F1] px-5 sm:px-10 lg:px-16 py-14 sm:py-20">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
            <Image
              src={assets.campaigns.comfortMoves}
              alt="Walkline — Everyday comfort moves with you"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="max-w-md">
            <p className="text-[10px] uppercase tracking-[0.22em] font-bold text-[#9A6238] mb-3">
              Everyday Comfort
            </p>
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-[#24140D] leading-[0.95] mb-4">
              Moves With You
            </h2>
            <p className="text-sm text-[#5A351F]/80 leading-relaxed mb-6">
              The Vertex series was built for the man who is always moving. Ultra-light construction, all-day cushioning — crafted in Bahadurgarh with Indian pride.
            </p>
            <ul className="space-y-2 mb-7">
              {["Lighter than air lightweight build", "All-day comfort certified", "Made in India with pride"].map((feat, idx) => (
                <li key={idx} className="flex items-center gap-2.5 text-sm text-[#24140D]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#9A6238] shrink-0" />
                  {feat}
                </li>
              ))}
            </ul>
            <Link
              href="/sandals"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-[#321D12] text-[#FAF7F1] text-[11px] font-bold uppercase tracking-[0.12em] hover:bg-[#5A351F] transition-colors"
            >
              Shop Vertex
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      <FinalCTA />
      <Footer />
    </main>
  );
}
