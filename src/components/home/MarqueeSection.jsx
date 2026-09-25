"use client";

import Marquee from "@/components/animations/Marquee";

export default function MarqueeSection() {
  return (
    <section className="relative w-full overflow-hidden" aria-hidden="true">
      <Marquee
        items={[
          "WALKLINE",
          "MADE IN INDIA",
          "ALL-DAY COMFORT",
          "SINCE 2009",
          "CRAFTED IN BAHADURGARH",
          "ENGINEERED MOVEMENT",
          "STEP INTO CONFIDENCE",
        ]}
        variant="brown"
        className="py-3 sm:py-4"
      />
    </section>
  );
}
