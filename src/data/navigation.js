/**
 * Walkline Footwear - Navigation Data Configuration
 * Clean editorial navigation structure.
 * Preserves all verified Walkline categories, products, and contact information.
 */

import { assets } from "@/data/assets";

export const PRIMARY_NAV = [
  {
    id: "men",
    label: "Men",
    href: "/men",
    type: "mega-menu",
    featuredSeries: [
      {
        name: "Vertex",
        tag: "LIGHTER THAN AIR",
        description: "Ultra-light construction engineered for all-day comfort.",
        sizes: "UK 6×9 – 7×10",
        href: "/men",
      },
      {
        name: "Concept",
        tag: "PREMIUM RANGE",
        description: "Combines confidence and everyday style in every step.",
        sizes: "UK 6×9 – 7×10",
        href: "/men",
      },
    ],
    categories: [
      { label: "New Arrivals", href: "/men" },
      { label: "Sandals & Chappals", href: "/sandals" },
      { label: "Slip-ons", href: "/men" },
      { label: "Sneakers", href: "/men" },
    ],
    featuredCard: {
      title: "VERTEX SERIES",
      subtitle: "Lighter Than Air Construction",
      image: assets.products.vertex,
      badge: "FEATURED",
      href: "/men",
    },
  },
  {
    id: "women",
    label: "Women",
    href: "/women",
    type: "mega-menu",
    featuredSeries: [
      {
        name: "Noir-05",
        tag: "#NOIRFEVER",
        description: "Chunky fashion silhouette with signature coral cushion sole.",
        sizes: "UK 4×7 – 5×8",
        href: "/women",
      },
      {
        name: "Barbie-04",
        tag: "EARTHY LINE",
        description: "Bold style with everyday shock absorption cushioning.",
        sizes: "UK 4×7 – 5×8",
        href: "/women",
      },
    ],
    categories: [
      { label: "Sneakers", href: "/women" },
      { label: "Sandals", href: "/sandals" },
      { label: "New Arrivals", href: "/women" },
    ],
    featuredCard: {
      title: "NOIR-05 SNEAKER",
      subtitle: "Signature Coral Cushion Sole",
      image: assets.products.noir,
      badge: "HOT DROP",
      href: "/women",
    },
  },
  {
    id: "kids",
    label: "Kids",
    href: "/kids",
    type: "dropdown",
    items: [
      {
        name: "Kids' Footwear",
        desc: "Engineered for active young feet with breathable materials",
        href: "/kids",
        badge: "COLLECTION",
      },
      {
        name: "Frooti Series",
        desc: "Memory foam insole & easy slip-on wear (no laces)",
        href: "/kids",
        badge: "MEMORY FOAM",
      },
    ],
    featuredCard: {
      title: "FROOTI SERIES",
      subtitle: "Extra Memory Foam Cushioning",
      image: assets.products.frooti,
      badge: "KIDS",
      href: "/kids",
    },
  },
  {
    id: "sandals",
    label: "Sandals",
    href: "/sandals",
    type: "dropdown",
    items: [
      {
        name: "Vertex & Concept Chappals",
        desc: "Lighter than air men's daily comfort footwear",
        href: "/sandals",
        badge: "POPULAR",
      },
      {
        name: "VRX Metallic Buckle Series",
        desc: "Waterproof comfy-soft sole with sleek metallic buckle",
        href: "/sandals",
        badge: "WATERPROOF",
      },
      {
        name: "Bounce Sole Slippers",
        desc: "Shock-absorbing dual-density footbed comfort",
        href: "/sandals",
        badge: "NEW",
      },
      {
        name: "Rainy Days All-Weather",
        desc: "Waterproof quick-dry comfort for monsoon and street",
        href: "/sandals",
        badge: "WEATHERPROOF",
      },
    ],
  },
  {
    id: "about-us",
    label: "About Us",
    href: "/about",
    type: "dropdown",
    items: [
      {
        name: "Our Heritage",
        desc: "Crafting comfort and style for every step since 2009",
        href: "/about",
      },
      {
        name: "Indian Craft & Scale",
        desc: "Meticulous Bahadurgarh manufacturing craftsmanship",
        href: "/manufacturing",
      },
      {
        name: "Sustainability & Materials",
        desc: "Commitment to long-lasting materials and durability",
        href: "/sustainability",
      },
      {
        name: "Contact & Inquiries",
        desc: "Plot No 362, MIE Part A, Bahadurgarh - 124507",
        href: "/contact",
      },
    ],
  },
];

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Men", href: "/men" },
  { label: "Women", href: "/women" },
  { label: "Kids", href: "/kids" },
  { label: "Sandals", href: "/sandals" },
  { label: "About Us", href: "/about" },
];

export const CATEGORY_LINKS = [
  {
    label: "Men's Sandals & Chappals",
    href: "/men",
    category: "mens-sandals",
    description: "Vertex series (lighter than air) & Concept range",
    sizes: "UK 6×9 – 7×10",
  },
  {
    label: "Women's Sneakers",
    href: "/women",
    category: "womens-sneakers",
    description: "Noir-05 with coral cushion sole & Barbie-04",
    sizes: "UK 4×7 – 5×8",
  },
  {
    label: "Kids' Footwear",
    href: "/kids",
    category: "kids-footwear",
    description: "Frooti series with memory foam insole & slip-on design",
    sizes: "8×10 / 11×1 / 2×5",
  },
  {
    label: "Fashion Sandals",
    href: "/sandals",
    category: "fashion-sandals",
    description: "VRX series with metallic buckles & waterproof comfy sole",
    sizes: "UK 6×9 – 7×10",
  },
];

export const COMPANY_LINKS = [
  { label: "About Walkline", href: "/about" },
  { label: "Our Products", href: "/collections" },
  { label: "Categories", href: "/collections" },
  { label: "Craft & Manufacturing", href: "/manufacturing" },
  { label: "Sustainability", href: "/sustainability" },
  { label: "Contact & Inquiries", href: "/contact" },
];

export const LEGAL_LINKS = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
  { label: "Shipping & 30-Day Returns", href: "#" },
];

export const SOCIAL_LINKS = [
  { label: "Instagram", href: "#", configured: false },
  { label: "YouTube", href: "#", configured: false },
  { label: "Twitter / X", href: "#", configured: false },
];
