import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import FinalCTA from "@/components/home/FinalCTA";
import EditorialPageHero from "@/components/ui/EditorialPageHero";
import CollectionsClient from "./CollectionsClient";
import { assets } from "@/data/assets";

export const metadata = {
  title: "Products & Collections — Walkline Footwear",
  description:
    "Explore Walkline Footwear across four core categories — Men's Sandals & Chappals, Women's Sneakers, Kids' Footwear, and Fashion Sandals. Made in India since 2009.",
};

export default function CollectionsPage() {
  return (
    <main className="relative w-full bg-[#FAF7F1] min-h-screen text-[#24140D]">
      <Navbar />

      {/* Editorial Page Hero */}
      <EditorialPageHero
        image={assets.campaigns.comfortGo}
        imageAlt="Walkline Footwear — Complete Collections & Products"
        eyebrow="The Walkline Catalog"
        title="Products & Collections"
        description="Crafting comfort and style for every walk of life. Explore our four verified footwear categories — from ultra-light Vertex sandals to memory-foam Frooti slip-ons and signature Noir-05 sneakers."
        breadcrumb="Collections"
        primaryCtaText="Explore Styles"
        primaryCtaHref="#catalog"
        secondaryCtaText="Our Craftsmanship"
        secondaryCtaHref="/manufacturing"
        darkTheme={false}
      />

      <div id="catalog">
        <CollectionsClient />
      </div>

      <FinalCTA />
      <Footer />
    </main>
  );
}
