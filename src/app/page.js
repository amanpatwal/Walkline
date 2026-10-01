import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/hero/Hero";
import MarqueeSection from "@/components/home/MarqueeSection";
import PromotionalBanner from "@/components/home/PromotionalBanner";
import CampaignFreshRotation from "@/components/home/CampaignFreshRotation";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import CampaignWeekend from "@/components/home/CampaignWeekend";
import EditorialGrid from "@/components/home/EditorialGrid";
import BrandStory from "@/components/home/BrandStory";
import FinalCTA from "@/components/home/FinalCTA";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <main className="relative w-full bg-[#FAF7F1] min-h-screen text-[#24140D]">

      {/* 1. Navigation */}
      <Navbar />

      {/* 2. Primary Hero — "Step Into Confidence" */}
      <Hero />

      {/* Brand rhythm ticker */}
      <MarqueeSection />

      {/* Promotional Banner — "Sorry You Missed Comfy Sold Out / Fan Favourites" */}
      <PromotionalBanner />

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      {/* CORE 4-SECTION SEQUENCE                                          */}
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}

      {/* 1. Fresh in Rotation / New In — full-width editorial banner */}
      <CampaignFreshRotation />

      {/* 2. Product Carousel — full-width, 4 columns, no header */}
      <FeaturedProducts />

      {/* 3. Weekend Mode — full-bleed campaign banner, directly below products */}
      <CampaignWeekend />

      {/* 4. 4-Layer Category Grid — 2×2 MEN / WOMEN / KIDS / SANDALS */}
      <EditorialGrid />

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      {/* REMAINING CONTENT                                                */}
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}

      {/* Brand Story & Heritage Since 2009 */}
      <BrandStory />

      {/* Final Call To Action */}
      <FinalCTA />

      {/* Footer */}
      <Footer />

    </main>
  );
}
