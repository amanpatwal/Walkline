/**
 * Walkline Footwear - Verified Categories & Collections Data
 * Directly maps the 4 core categories and series from the Walkline source-of-truth.
 */

import { assets } from "@/data/assets";

export const COLLECTIONS = [
  {
    id: "mens-sandals",
    title: "MEN'S SANDALS & CHAPPALS",
    shortTitle: "MEN'S COLLECTION",
    category: "Men's Sandals & Chappals",
    series: ["Vertex", "Concept"],
    description: "Combines confidence and style in every step. From the ultra-light Vertex series that is lighter than air to the premium Concept range — engineered for all-day comfort. Made in India with pride.",
    features: [
      "Lightweight construction — lighter than air",
      "Sizes UK 6×9 – 7×10 available",
      "Chappals, sandals & slip-on variants",
      "Made in India — premium quality assured",
    ],
    sizes: "UK 6×9 – 7×10",
    image: assets.campaigns.weekend,
    badge: "VERTEX & CONCEPT",
    badgeBg: "bg-[#321D12] text-[#FAF7F1]",
    accentColor: "#321D12",
  },
  {
    id: "womens-sneakers",
    title: "WOMEN'S SNEAKERS",
    shortTitle: "WOMEN'S LINE",
    category: "Women's Sneakers",
    series: ["Noir-05", "Barbie-04"],
    description: "Designed for bold style and everyday comfort. From the trendy chunky Noir-05 with signature coral cushion sole to the earthy Barbie-04 — each style delivers all-day wearability with a strong fashion statement.",
    features: [
      "Trendy chunky & fashion sneaker designs",
      "Cushion sole for superior shock absorption",
      "Sizes UK 4×7 – 5×8 available",
      "All-day comfort certified",
    ],
    sizes: "UK 4×7 – 5×8",
    image: assets.campaigns.moveDifferent,
    badge: "#NOIRFEVER",
    badgeBg: "bg-[#9A6238] text-[#FAF7F1]",
    accentColor: "#9A6238",
  },
  {
    id: "kids-footwear",
    title: "KIDS' FOOTWEAR",
    shortTitle: "KIDS' RANGE",
    category: "Kids' Footwear",
    series: ["Frooti"],
    description: "Because every little step matters! The Frooti series is designed with soft memory foam insoles, easy slip-on wear (no laces), and a lightweight build for active playtime.",
    features: [
      "Soft memory foam insole for extra comfort",
      "Easy slip-on wear — no laces needed",
      "Sizes 8×10, 11×1, and 2×5 available",
      "Lightweight & durable construction",
    ],
    sizes: "8×10 / 11×1 / 2×5",
    image: assets.products.frooti,
    badge: "FROOTI SERIES",
    badgeBg: "bg-[#8A6E58] text-[#FAF7F1]",
    accentColor: "#8A6E58",
  },
  {
    id: "fashion-sandals",
    title: "FASHION SANDALS",
    shortTitle: "FASHION SANDALS",
    category: "Fashion Sandals",
    series: ["VRX"],
    description: "Add a touch of classic comfort and modern design to your wardrobe. The VRX series features thin smart straps with metallic buckles, a waterproof comfy-soft sole and a flexible, lightweight build.",
    features: [
      "Waterproof & comfy soft construction",
      "Thin strap with metallic buckle — smart and classy look",
      "Sizes UK 6×9 – 7×10 available",
      "Lightweight & flexible — all-day wear",
    ],
    sizes: "UK 6×9 – 7×10",
    image: assets.campaigns.rainyDays,
    badge: "VRX SERIES",
    badgeBg: "bg-[#5A351F] text-[#FAF7F1]",
    accentColor: "#5A351F",
  },
];
