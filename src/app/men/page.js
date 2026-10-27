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
    "Explore Walkline men's footwear — Vertex sandals, Concept chappals, slip-ons and sneakers. Crafted for all-day comfort since 2010.",
};

const allMensProducts = FEATURED_PRODUCTS.filter((p) =>
  ["mens-sandals", "fashion-sandals"].includes(p.categoryKey)
);

const MENS_CATEGORIES = [
  {
    label: "Sandals & Chappals",
    desc: "Vertex & Concept — lighter than air",
    image: assets.campaigns.weekend,
  },
  {
    label: "Fashion Sandals",
    desc: "VRX metallic buckle series",
    image: assets.campaigns.rainyDays,
  },
  {
    label: "Slip-ons",
    desc: "Easy on, easy off everyday comfort",
    image: assets.campaigns.comfortGo,
  },
  {
    label: "New Arrivals",
    desc: "Fresh drops from Walkline",
    image: assets.campaigns.freshRotation,
  },
];

export default function MenPage() {
  return (
    <main className="relative w-full bg-white min-h-screen text-[#000000]">
      <Navbar />

      {/* Hero */}
      <EditorialPageHero
        image={assets.campaigns.weekend}
        imageAlt="Walkline Men's Footwear — Weekend Mode campaign"
        eyebrow="Men's Collection"
        title="Step Into Every Day"
        description="Crafted for the man who moves. Premium sandals, slip-ons and chappals engineered for all-day comfort since 2010."
        ctaLabel="Explore Styles"
        ctaHref="#styles"
        ctaSecLabel="All Collections"
        ctaSecHref="/collections"
        theme="light"
        objectPosition="center"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Men", href: "/men" },
        ]}
      />

      {/* Static Category Showcase — Clean non-storefront range display */}
      <section className="w-full bg-white px-5 sm:px-10 lg:px-16 py-14 sm:py-18">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex items-end justify-between mb-8 border-b border-black/10 pb-5">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#27409A] block mb-1">
                Footwear Range
              </span>
              <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-[#000000]">
                Men&apos;s Categories
              </h2>
            </div>
            <span className="text-xs text-neutral-500 font-medium">Static Showcase</span>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {MENS_CATEGORIES.map((cat, idx) => (
              <div
                key={idx}
                className="relative rounded-xl overflow-hidden aspect-[3/4] bg-neutral-100 select-none border border-neutral-200"
              >
                <Image
                  src={cat.image}
                  alt={cat.label}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 inset-x-0 p-4">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-white/80">{cat.desc}</p>
                  <h3 className="text-sm font-black uppercase tracking-tight text-white mt-0.5">{cat.label}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <div id="styles">
        <ProductGrid
          products={allMensProducts}
          heading="Featured Men's Styles"
        />
      </div>

      {/* Editorial Campaign Break */}
      <section className="relative w-full bg-[#000000] overflow-hidden">
        <div className="relative aspect-[21/8] sm:aspect-[25/8] max-h-[480px] min-h-[200px]">
          <Image
            src={assets.campaigns.bounceSole}
            alt="Bounce Sole — Walkline's shock-absorbing dual-density footbed"
            fill
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-transparent" />
          <div className="absolute inset-0 flex items-center px-8 sm:px-16 lg:px-24">
            <div className="max-w-sm">
              <p className="text-[10px] uppercase tracking-[0.22em] font-bold text-[#27409A] mb-2">
                Innovation
              </p>
              <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-white leading-[0.95] mb-4">
                Bounce Sole Technology
              </h2>
              <p className="text-sm text-white/70 mb-6 leading-relaxed">
                Shock-absorbing dual-density footbed. Feel the difference with every step.
              </p>
              <Link
                href="/collections"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white text-[#000000] text-[11px] font-bold uppercase tracking-wider hover:bg-neutral-100 transition-colors"
              >
                <span>Explore Slippers</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Comfort Feature */}
      <section className="w-full bg-white px-5 sm:px-10 lg:px-16 py-14 sm:py-20">
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
            <p className="text-[10px] uppercase tracking-[0.22em] font-bold text-[#27409A] mb-3">
              Everyday Comfort
            </p>
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-[#000000] leading-[0.95] mb-4">
              Moves With You
            </h2>
            <p className="text-sm text-black/60 leading-relaxed mb-6">
              The Vertex series was built for the man who is always moving. Ultra-light construction, all-day cushioning — crafted in Bahadurgarh with Indian pride.
            </p>
            <ul className="space-y-2 mb-7">
              {["Lighter than air lightweight build", "All-day comfort certified", "Made in India with pride"].map((feat, idx) => (
                <li key={idx} className="flex items-center gap-2.5 text-sm text-[#000000]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#27409A] shrink-0" />
                  {feat}
                </li>
              ))}
            </ul>
            <Link
              href="/collections"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-[#000000] text-white text-[11px] font-bold uppercase tracking-[0.12em] hover:bg-[#27409A] transition-colors"
            >
              <span>Explore Vertex</span>
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
