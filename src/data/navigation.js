/**
 * Walkline Footwear - Navigation Data Configuration
 * Inspired by modern fashion/sneaker ecommerce visual hierarchy.
 * Preserves all verified Walkline categories, products, and contact information.
 */

import { assets } from "@/data/assets";

export const PRIMARY_NAV = [
  {
    id: "men",
    label: "Men",
    href: "#collections",
    type: "mega-menu",
    featuredSeries: [
      {
        name: "Vertex",
        tag: "LIGHTER THAN AIR",
        description: "Lightweight construction engineered for all-day comfort.",
        sizes: "UK 6×9 – 7×10",
        href: "#products",
      },
      {
        name: "Concept",
        tag: "PREMIUM RANGE",
        description: "Combines confidence and style in every step.",
        sizes: "UK 6×9 – 7×10",
        href: "#products",
      },
    ],
    categories: [
      { label: "Men's Sandals & Chappals", href: "#collections" },
      { label: "Lightweight Slides", href: "#products" },
      { label: "Daily Comfort Chappals", href: "#products" },
      { label: "All Men's Footwear", href: "#products" },
    ],
    featuredCard: {
      title: "VERTEX SERIES",
      subtitle: "Lighter Than Air Construction",
      image: assets.products.vertex,
      badge: "FEATURED",
      href: "#products",
    },
  },
  {
    id: "women",
    label: "Women",
    href: "#collections",
    type: "mega-menu",
    featuredSeries: [
      {
        name: "Noir-05",
        tag: "#NOIRFEVER",
        description: "Chunky fashion silhouette with signature coral cushion sole.",
        sizes: "UK 4×7 – 5×8",
        href: "#products",
      },
      {
        name: "Barbie-04",
        tag: "EARTHY LINE",
        description: "Bold style with everyday shock absorption cushioning.",
        sizes: "UK 4×7 – 5×8",
        href: "#products",
      },
    ],
    categories: [
      { label: "Women's Sneakers", href: "#collections" },
      { label: "Chunky Sole Sneakers", href: "#products" },
      { label: "Earthy Trainer Line", href: "#products" },
      { label: "All Women's Footwear", href: "#products" },
    ],
    featuredCard: {
      title: "NOIR-05 SNEAKER",
      subtitle: "Signature Coral Cushion Sole",
      image: assets.products.noir,
      badge: "HOT DROP",
      href: "#products",
    },
  },
  {
    id: "the-vault",
    label: "The Vault",
    href: "#products",
    type: "dropdown",
    items: [
      {
        name: "VRX Waterproof Series",
        desc: "Thin smart straps with metallic buckles",
        href: "#products",
        badge: "WATERPROOF",
      },
      {
        name: "Frooti Memory Foam",
        desc: "Kids' slip-on with cushioned memory insole",
        href: "#products",
        badge: "KIDS",
      },
      {
        name: "Archive & Drops",
        desc: "Verified Walkline releases since 2009",
        href: "#collections",
        badge: "ARCHIVE",
      },
    ],
  },
  {
    id: "about-us",
    label: "About Us",
    href: "#about",
    type: "dropdown",
    items: [
      {
        name: "Our Story",
        desc: "Crafting comfort and style since 2009",
        href: "#about",
      },
      {
        name: "Made in India Craft",
        desc: "Meticulous attention to detail in every step",
        href: "#manufacturing",
      },
      {
        name: "Material Durability",
        desc: "Commitment to long-lasting footwear",
        href: "/sustainability",
      },
      {
        name: "Contact & Inquiries",
        desc: "Plot No 362, MIE Part A, Bahadurgarh",
        href: "#contact",
      },
    ],
  },
];

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Men", href: "#collections" },
  { label: "Women", href: "#collections" },
  { label: "The Vault", href: "#products" },
  { label: "About Us", href: "#about" },
];

export const CATEGORY_LINKS = [
  {
    label: "Men's Sandals & Chappals",
    href: "#collections",
    category: "mens-sandals",
    description: "Vertex series (lighter than air) & Concept range",
    sizes: "UK 6×9 – 7×10",
  },
  {
    label: "Women's Sneakers",
    href: "#collections",
    category: "womens-sneakers",
    description: "Noir-05 with coral cushion sole & Barbie-04",
    sizes: "UK 4×7 – 5×8",
  },
  {
    label: "Kids' Footwear",
    href: "#collections",
    category: "kids-footwear",
    description: "Frooti series with memory foam insole & slip-on design",
    sizes: "8×10 / 11×1 / 2×5",
  },
  {
    label: "Fashion Sandals",
    href: "#collections",
    category: "fashion-sandals",
    description: "VRX series with metallic buckles & waterproof comfy sole",
    sizes: "UK 6×9 – 7×10",
  },
];

export const COMPANY_LINKS = [
  { label: "About Walkline", href: "#about" },
  { label: "Our Products", href: "#products" },
  { label: "Categories", href: "#collections" },
  { label: "Craft & Manufacturing", href: "#manufacturing" },
  { label: "Sustainability", href: "/sustainability" },
  { label: "Contact & Inquiries", href: "#contact" },
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
