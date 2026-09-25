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
    description: "The Men's collection combines confidence and style in every step. From the lightweight Vertex series that is lighter than air to the premium Concept range — our men's footwear is engineered for all-day comfort without compromising on looks. Made in India with pride.",
    features: [
      "Lightweight construction — lighter than air",
      "Sizes UK 6×9 – 7×10 available",
      "Chappals, sandals & slip-on variants",
      "Made in India — premium quality assured",
    ],
    sizes: "UK 6×9 – 7×10",
    image: assets.collections.mensSandals,
    badge: "VERTEX & CONCEPT",
    badgeBg: "bg-[#F4F000] text-black",
    accentColor: "#F4F000",
  },
  {
    id: "womens-sneakers",
    title: "WOMEN'S SNEAKERS",
    shortTitle: "WOMEN'S LINE",
    category: "Women's Sneakers",
    series: ["Noir-05", "Barbie-04"],
    description: "Our Women's line is designed for those who appreciate bold style and everyday comfort. From the trendy chunky Noir-05 with its signature coral cushion sole to the earthy Barbie-04 — each style delivers all-day wearability with a strong fashion statement. #NoirFever",
    features: [
      "Trendy chunky & fashion sneaker designs",
      "Cushion sole for superior shock absorption",
      "Sizes UK 4×7 – 5×8 available",
      "Premium quality — all-day comfort certified",
    ],
    sizes: "UK 4×7 – 5×8",
    image: assets.collections.womensSneakers,
    badge: "#NOIRFEVER",
    badgeBg: "bg-[#FF4F7B] text-white",
    accentColor: "#FF4F7B",
  },
  {
    id: "fashion-sandals",
    title: "FASHION SANDALS",
    shortTitle: "FASHION SANDALS",
    category: "Fashion Sandals",
    series: ["VRX"],
    description: "Our Fashion Sandals category is designed to add a touch of classic comfort and modern design to your wardrobe. The VRX series features thin smart straps with metallic buckles, a waterproof comfy-soft sole and a flexible, lightweight build — perfect for any occasion.",
    features: [
      "Waterproof & comfy soft construction",
      "Thin strap — smart and classy look",
      "Sizes UK 6×9 – 7×10 available",
      "Lightweight & flexible — all-day wear",
    ],
    sizes: "UK 6×9 – 7×10",
    image: assets.collections.fashionSandals,
    badge: "VRX SERIES",
    badgeBg: "bg-[#3155FF] text-white",
    accentColor: "#3155FF",
  },
  {
    id: "kids-footwear",
    title: "KIDS' FOOTWEAR",
    shortTitle: "KIDS' RANGE",
    category: "Kids' Footwear",
    series: ["Frooti"],
    description: "Because every little step matters! The Frooti series is designed with soft memory foam insoles, easy slip-on wear, and a lightweight build that keeps young feet supported throughout playtime and school runs.",
    features: [
      "Soft memory foam insole for extra comfort",
      "Easy slip-on wear — no laces needed",
      "Sizes 8×10, 11×1, and 2×5 available",
      "Lightweight & durable construction",
    ],
    sizes: "8×10 / 11×1 / 2×5",
    image: assets.collections.kidsFootwear,
    badge: "FROOTI SERIES",
    badgeBg: "bg-[#A8E63D] text-black",
    accentColor: "#A8E63D",
  },
];
