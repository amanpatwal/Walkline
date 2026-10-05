import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/hero/Hero";
import PromotionalBanner from "@/components/home/PromotionalBanner";
import CampaignFreshRotation from "@/components/home/CampaignFreshRotation";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import EditorialGrid from "@/components/home/EditorialGrid";
import CampaignSummer from "@/components/home/CampaignSummer";

import FinalCTA from "@/components/home/FinalCTA";
import RetailPartners from "@/components/home/RetailPartners";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <main className="relative w-full bg-white min-h-screen text-[#000000]">

      {/* 1. Navigation */}
      <Navbar />

      {/* 2. IMAGE 1: X LOWS MIDNIGHT HERO — full-width, image text only, buttons aligned to artwork */}
      <Hero />

      {/* 3. IMAGE 3: FULL-WIDTH SOLD-OUT PROMOTIONAL BANNER */}
      <PromotionalBanner />

      {/* 4. IMAGE 2: FRESH IN ROTATION — full-width, placed directly after Image 3, Shop Now button aligned */}
      <CampaignFreshRotation />

      {/* 5. IMAGE 4: PRODUCT CAROUSEL — full-width, bottom text removed */}
      <FeaturedProducts />

      {/* 6. SUMMER CAMPAIGN — full-width editorial banner */}
      <CampaignSummer />

      {/* 7. 4-LAYER CATEGORY GRID — 2×2 MEN / WOMEN / KIDS / SANDALS */}
      <EditorialGrid />

      {/* Final Call To Action */}
      <FinalCTA />

      {/* 11. IMAGE 5: RETAIL PARTNERS — completely at the bottom just above footer, light font, larger logos */}
      <RetailPartners />

      {/* 12. Footer */}
      <Footer />

    </main>
  );
}
