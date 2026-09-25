/**
 * Centralized Asset Mapping for Walkline Footwear
 * 
 * Source of truth for all public assets (logos, hero, products, collections, campaigns, lifestyle, etc.)
 * Warm brown / cream editorial visual system.
 */

export const assets = {
  logo: {
    // Actual uploaded Walkline brand logo (red + black, 576×299 JPEG)
    primary: "/assets/logo/walkline-brand-logo.jpeg",
    // SVG symbol fallback (W mark) for mobile favicon-size usage
    symbol: "/assets/logo/walkline-symbol.svg",
    // Intrinsic dimensions for next/image
    width: 576,
    height: 299,
  },

  hero: {
    confidence: "/assets/hero/step-into-confidence.jpg",
    soldOut: "/assets/hero/sold-out-banner.jpg",
    midnight: "/assets/hero/midnight.jpg",
    primary: "/assets/hero/step-into-confidence.jpg",
    background: "/assets/hero/hero-bg.svg",
  },

  campaigns: {
    soldOutBanner: "/assets/hero/sold-out-banner.jpg",
    weekend: "/assets/campaigns/weekend-mode.jpg",
    comfortMoves: "/assets/campaigns/everyday-comfort-moves.png",
    comfortGo: "/assets/campaigns/comfort-on-the-go.png",
    moveDifferent: "/assets/campaigns/move-different.png",
    sporty: "/assets/campaigns/sporty-looks-better.png",
    freshRotation: "/assets/campaigns/fresh-in-rotation.jpg",
    summer: "/assets/campaigns/summer-lifestyle.jpg",
    bounceSole: "/assets/campaigns/bounce-sole-slippers.jpg",
    rainyDays: "/assets/campaigns/rainy-days.jpg",
    midnight: "/assets/hero/midnight.jpg",
    lifestyle: "/assets/campaigns/weekend-mode.jpg",
    streetEdition: "/assets/campaigns/move-different.png",
  },

  products: {
    vertex: "/assets/products/product-01.svg",
    noir: "/assets/products/product-02.svg",
    barbie: "/assets/products/product-05.svg",
    vrx: "/assets/products/product-03.svg",
    frooti: "/assets/products/product-04.svg",
    concept: "/assets/products/product-06.svg",
  },

  collections: {
    mensSandals: "/assets/campaigns/weekend-mode.jpg",
    womensSneakers: "/assets/campaigns/move-different.png",
    kidsFootwear: "/assets/collections/collection-kids.svg",
    fashionSandals: "/assets/campaigns/rainy-days.jpg",
  },

  lifestyle: {
    community01: "/assets/campaigns/sporty-looks-better.png",
    community02: "/assets/campaigns/fresh-in-rotation.jpg",
    community03: "/assets/campaigns/summer-lifestyle.jpg",
  },

  story: {
    heritage: "/assets/story/brand-heritage.svg",
  },

  manufacturing: {
    factoryScale: "/assets/manufacturing/factory-scale.svg",
    craft: "/assets/manufacturing/craft.svg",
    materials: "/assets/manufacturing/materials.svg",
  },
};
