/**
 * Walkline Footwear - Verified Product & Series Data
 * 
 * NOTE: Modeled directly on verified series and categories from Walkline's
 * source content. Prices are not verified and are intentionally omitted.
 * Descriptions are editorial copy based on verified product features.
 */

import { assets } from "@/data/assets";

export const FEATURED_PRODUCTS = [
  {
    id: "noir-05",
    series: "Noir-05",
    category: "Women's Sneakers",
    categoryKey: "womens-sneakers",
    tagline: "Signature coral cushion sole & bold silhouette",
    tag: "#NOIRFEVER",
    badgeColor: "bg-[#9A6238] text-[#FAF7F1]",
    sizes: "UK 4×7 – 5×8",
    availableSizes: ["UK 4", "UK 5", "UK 6", "UK 7", "UK 8"],
    features: [
      "Trendy chunky & fashion sneaker design",
      "Signature coral cushion sole for superior shock absorption",
      "All-day comfort certified",
    ],
    description:
      "The Noir-05 is Walkline's statement women's sneaker — built around a signature coral cushion sole that delivers all-day shock absorption without sacrificing bold street style. A chunky silhouette with a premium finish makes the Noir-05 equally at home on campus, commutes, and casual outings. Part of the #NOIRFEVER drop.",
    specifications: [
      { label: "Upper", value: "Premium knit fabric with structured sidewall" },
      { label: "Sole", value: "Signature coral cushion EVA sole" },
      { label: "Closure", value: "Lace-up with reinforced eyelets" },
      { label: "Sizes Available", value: "UK 4 – UK 8" },
      { label: "Origin", value: "Made in India • Bahadurgarh Craft Facility" },
    ],
    colors: ["#FAF7F1", "#9A6238", "#24140D"],
    image: assets.products.noir,
    images: [assets.products.noir],
    slug: "noir-05",
  },
  {
    id: "vertex",
    series: "Vertex",
    category: "Men's Sandals & Chappals",
    categoryKey: "mens-sandals",
    tagline: "Lightweight construction — lighter than air",
    tag: "LIGHTER THAN AIR",
    badgeColor: "bg-[#321D12] text-[#FAF7F1]",
    sizes: "UK 6×9 – 7×10",
    availableSizes: ["UK 6", "UK 7", "UK 8", "UK 9", "UK 10"],
    features: [
      "Engineered for all-day comfort without compromising looks",
      "Lighter than air lightweight construction",
      "Made in India with pride",
    ],
    description:
      "The Vertex is Walkline's flagship men's chappal — engineered around an ultra-lightweight sole construction that feels lighter than air underfoot. Designed for India's warm climate and long walking days, the Vertex delivers effortless all-day comfort whether you're commuting, running errands, or relaxing at home.",
    specifications: [
      { label: "Construction", value: "Ultra-lightweight EVA base" },
      { label: "Strap", value: "Durable woven strap with secure fit" },
      { label: "Footbed", value: "Cushioned ergonomic footbed" },
      { label: "Sizes Available", value: "UK 6 – UK 10" },
      { label: "Origin", value: "Made in India • Bahadurgarh Craft Facility" },
    ],
    colors: ["#24140D", "#C69A6B", "#FAF7F1"],
    image: assets.products.vertex,
    images: [assets.products.vertex],
    slug: "vertex",
  },
  {
    id: "barbie-04",
    series: "Barbie-04",
    category: "Women's Sneakers",
    categoryKey: "womens-sneakers",
    tagline: "Earthy tones with everyday wearability",
    tag: "EARTHY LINE",
    badgeColor: "bg-[#C69A6B] text-[#24140D]",
    sizes: "UK 4×7 – 5×8",
    availableSizes: ["UK 4", "UK 5", "UK 6", "UK 7", "UK 8"],
    features: [
      "Bold style with everyday comfort",
      "Cushion sole for shock absorption",
      "Sizes UK 4×7 – 5×8 available",
    ],
    description:
      "The Barbie-04 Earthy Line is Walkline's everyday women's sneaker dressed in warm earth tones. Featuring a cushioned sole for all-day shock absorption, the Barbie-04 is designed for women who want bold aesthetics paired with real comfort on every kind of day.",
    specifications: [
      { label: "Upper", value: "Breathable fabric upper with earthy colorway" },
      { label: "Sole", value: "Cushion shock-absorbing sole" },
      { label: "Closure", value: "Lace-up" },
      { label: "Sizes Available", value: "UK 4 – UK 8" },
      { label: "Origin", value: "Made in India • Bahadurgarh Craft Facility" },
    ],
    colors: ["#FAF7F0", "#C69A6B", "#321D12"],
    image: assets.products.barbie,
    images: [assets.products.barbie],
    slug: "barbie-04",
  },
  {
    id: "vrx",
    series: "VRX",
    category: "Fashion Sandals",
    categoryKey: "fashion-sandals",
    tagline: "Thin smart straps with metallic buckles",
    tag: "WATERPROOF",
    badgeColor: "bg-[#5A351F] text-[#FAF7F1]",
    sizes: "UK 6×9 – 7×10",
    availableSizes: ["UK 6", "UK 7", "UK 8", "UK 9", "UK 10"],
    features: [
      "Waterproof comfy-soft construction",
      "Thin strap with metallic buckle — smart and classy look",
      "Flexible & lightweight build for any occasion",
    ],
    description:
      "The VRX Metallic Buckle Series is Walkline's fashion-forward sandal — combining waterproof comfy-soft sole construction with smart thin straps and premium metallic buckles. Whether you're heading to a function or a casual outing, the VRX delivers a classy look with flexible all-day wearability.",
    specifications: [
      { label: "Construction", value: "Waterproof comfy-soft base sole" },
      { label: "Straps", value: "Thin fashion straps with metallic buckle" },
      { label: "Build", value: "Flexible lightweight EVA footbed" },
      { label: "Sizes Available", value: "UK 6 – UK 10" },
      { label: "Origin", value: "Made in India • Bahadurgarh Craft Facility" },
    ],
    colors: ["#5A351F", "#24140D", "#FAF7F1"],
    image: assets.products.vrx,
    images: [assets.products.vrx],
    slug: "vrx",
  },
  {
    id: "frooti",
    series: "Frooti",
    category: "Kids' Footwear",
    categoryKey: "kids-footwear",
    tagline: "Memory foam insole & easy slip-on wear",
    tag: "MEMORY FOAM",
    badgeColor: "bg-[#8A6E58] text-[#FAF7F1]",
    sizes: "8×10 / 11×1 / 2×5",
    availableSizes: ["Size 8-10", "Size 11-1", "Size 2-5"],
    features: [
      "Memory foam insole for superior extra cushioning",
      "Easy slip-on design — no laces needed",
      "Lightweight, breathable knit upper for toddlers to juniors",
    ],
    description:
      "The Frooti Series is Walkline's dedicated kids' footwear range — designed from the ground up for growing active feet. An extra-thick memory foam insole delivers exceptional cushioning with every step, while the hassle-free slip-on design means no more tying laces. Lightweight breathable knit uppers keep young feet cool on long active days.",
    specifications: [
      { label: "Insole", value: "Extra memory foam cushion insole" },
      { label: "Upper", value: "Breathable lightweight knit" },
      { label: "Closure", value: "Easy slip-on (no laces)" },
      { label: "Sizes Available", value: "8–10 (Toddler) / 11–1 (Junior) / 2–5 (Youth)" },
      { label: "Origin", value: "Made in India • Bahadurgarh Craft Facility" },
    ],
    colors: ["#8A6E58", "#FAF7F1", "#321D12"],
    image: assets.products.frooti,
    images: [assets.products.frooti],
    slug: "frooti",
  },
  {
    id: "concept",
    series: "Concept",
    category: "Men's Sandals & Chappals",
    categoryKey: "mens-sandals",
    tagline: "Premium comfort range with versatile fit",
    tag: "PREMIUM RANGE",
    badgeColor: "bg-[#24140D] text-[#FAF7F1]",
    sizes: "UK 6×9 – 7×10",
    availableSizes: ["UK 6", "UK 7", "UK 8", "UK 9", "UK 10"],
    features: [
      "Combines confidence and style in every step",
      "Engineered for all-day comfort",
      "Made in India with pride",
    ],
    description:
      "The Concept Series is Walkline's premium men's chappal range — crafted for the man who values both confidence and everyday ease. A refined silhouette with a cushioned footbed combines style with sustained comfort across long walking days. Available across a full range of men's sizes.",
    specifications: [
      { label: "Construction", value: "Premium cushioned EVA sole" },
      { label: "Strap", value: "Reinforced comfortable strap" },
      { label: "Footbed", value: "Ergonomic cushion footbed" },
      { label: "Sizes Available", value: "UK 6 – UK 10" },
      { label: "Origin", value: "Made in India • Bahadurgarh Craft Facility" },
    ],
    colors: ["#321D12", "#C69A6B", "#FAF7F1"],
    image: assets.products.concept,
    images: [assets.products.concept],
    slug: "concept",
  },
];

/**
 * Get a product by its slug
 */
export function getProductBySlug(slug) {
  return FEATURED_PRODUCTS.find((p) => p.slug === slug) || null;
}

/**
 * Get related products (same category, excluding self), max 4
 */
export function getRelatedProducts(currentProduct, limit = 4) {
  return FEATURED_PRODUCTS.filter(
    (p) => p.categoryKey === currentProduct.categoryKey && p.id !== currentProduct.id
  ).slice(0, limit);
}

/**
 * All valid product slugs (for generateStaticParams)
 */
export const ALL_PRODUCT_SLUGS = FEATURED_PRODUCTS.map((p) => p.slug);
