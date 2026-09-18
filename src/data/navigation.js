/**
 * Walkline Footwear - Navigation Data Configuration
 * Preserves the 5 existing website pages while enhancing UX and fast drop access.
 */

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Products", href: "#products", isAnchor: true },
  { label: "Collections", href: "#collections", isAnchor: true },
  { label: "About", href: "#about", isAnchor: true },
  { label: "Contact", href: "#contact", isAnchor: true },
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
  { label: "Collections", href: "#collections" },
  { label: "Sustainability", href: "#sustainability" },
  { label: "Contact & Inquiries", href: "#contact" },
];

export const LEGAL_LINKS = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
  { label: "Shipping & 30-Day Returns", href: "#" },
];

// Note: Social handles are kept configurable until official client URLs are verified.
export const SOCIAL_LINKS = [
  { label: "Instagram", href: "#", configured: false },
  { label: "YouTube", href: "#", configured: false },
  { label: "Twitter / X", href: "#", configured: false },
];
