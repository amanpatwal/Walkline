import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/hero/Hero";
import MarqueeSection from "@/components/home/MarqueeSection";
import PromotionalBanner from "@/components/home/PromotionalBanner";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import CollectionsSection from "@/components/home/CollectionsSection";
import CampaignWeekend from "@/components/home/CampaignWeekend";
import CampaignComfortMoves from "@/components/home/CampaignComfortMoves";
import CampaignComfortGo from "@/components/home/CampaignComfortGo";
import CampaignMoveDifferent from "@/components/home/CampaignMoveDifferent";
import CampaignSporty from "@/components/home/CampaignSporty";
import CampaignFreshRotation from "@/components/home/CampaignFreshRotation";
import CampaignMidnight from "@/components/home/CampaignMidnight";
import CampaignSummer from "@/components/home/CampaignSummer";
import CampaignBounceSole from "@/components/home/CampaignBounceSole";
import CampaignRainyDays from "@/components/home/CampaignRainyDays";
import BrandStory from "@/components/home/BrandStory";
import CommunitySection from "@/components/home/CommunitySection";
import FinalCTA from "@/components/home/FinalCTA";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <main className="relative w-full bg-[#FAF7F1] min-h-screen text-[#24140D]">
      {/* 1. Main Navigation Bar (Clean warm cream surface, no announcement strip) */}
      <Navbar />

      {/* 2. Hero Section: Full bleed Step Into Confidence */}
      <Hero />

      {/* 3. Marquee Ticker: Editorial brand rhythm */}
      <MarqueeSection />

      {/* 4. Promotional Banner: Comfy Sold Out / Fan Favourites */}
      <PromotionalBanner />

      {/* 5. Product Discovery: Fresh From Walkline (4-column grid + Quick Add) */}
      <FeaturedProducts />

      {/* 5. Editorial Category Discovery: 4 Pillars Asymmetric Grid */}
      <CollectionsSection />

      {/* 6. Editorial Campaign: Weekend Mode */}
      <CampaignWeekend />

      {/* 7. Lifestyle Feature: Everyday Comfort Moves With You */}
      <CampaignComfortMoves />

      {/* 8. Editorial Block: Comfort On The Go */}
      <CampaignComfortGo />

      {/* 9. Dark Editorial Break: Move Different */}
      <CampaignMoveDifferent />

      {/* 10. Sporty Lifestyle: Sporty Looks Better */}
      <CampaignSporty />

      {/* 11. New In Editorial Drop: Fresh In Rotation */}
      <CampaignFreshRotation />

      {/* 12. Dark Product Campaign: Midnight Mode */}
      <CampaignMidnight />

      {/* 13. Seasonal Lifestyle Banner: Summer */}
      <CampaignSummer />

      {/* 14. Product Innovation Feature: Bounce Sole Slippers */}
      <CampaignBounceSole />

      {/* 15. All-Weather Campaign: Rainy Days */}
      <CampaignRainyDays />

      {/* 16. Brand Story & Heritage Since 2009 */}
      <BrandStory />

      {/* 17. Brand Appreciation: Step Into Your Everyday */}
      <CommunitySection />

      {/* 18. Final Campaign Call to Action */}
      <FinalCTA />

      {/* 19. Multi-Column Espresso Footer */}
      <Footer />
    </main>
  );
}
