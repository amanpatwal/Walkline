import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/hero/Hero";
import MarqueeSection from "@/components/home/MarqueeSection";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import CollectionsSection from "@/components/home/CollectionsSection";
import CampaignSection from "@/components/home/CampaignSection";
import BrandStory from "@/components/home/BrandStory";
import ManufacturingSection from "@/components/home/ManufacturingSection";
import TestimonialSection from "@/components/home/TestimonialSection";
import CommunitySection from "@/components/home/CommunitySection";
import FinalCTA from "@/components/home/FinalCTA";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <main className="relative w-full bg-[#F7F7F4] min-h-screen text-[#111111]">
      {/* Light Navigation Bar */}
      <Navbar />

      {/* Campaign Drop Hero */}
      <Hero />

      {/* Electric Yellow Infinite Marquee */}
      <MarqueeSection />

      {/* Featured Products / The Heat List */}
      <FeaturedProducts />

      {/* Asymmetrical Collections Tiles */}
      <CollectionsSection />

      {/* Lifestyle Campaign Statement ("KEEP MOVING") */}
      <CampaignSection />

      {/* Brand Origins & Street Culture */}
      <BrandStory />

      {/* Indian Manufacturing Scale & Stats */}
      <ManufacturingSection />

      {/* Customer Review Carousel */}
      <TestimonialSection />

      {/* Community Lookbook & Social Proof */}
      <CommunitySection />

      {/* Bold Closing CTA */}
      <FinalCTA />

      {/* Contrast Footer */}
      <Footer />
    </main>
  );
}
