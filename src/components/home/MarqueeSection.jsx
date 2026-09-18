"use client";

import Marquee from "@/components/animations/Marquee";

export default function MarqueeSection() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Primary Electric Yellow Marquee */}
      <Marquee
        items={[
          "WALKLINE",
          "NEW DROP",
          "100% STREET READY",
          "MADE TO MOVE",
          "FEATHERLIGHT CUSHION",
          "BRED IN INDIA",
          "AEON V2 LIVE NOW",
        ]}
        variant="yellow"
        className="py-3 sm:py-4"
      />
    </section>
  );
}
