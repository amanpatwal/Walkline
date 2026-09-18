import fs from "fs";
import path from "path";

const baseDir = path.resolve("./public/images");

const dirs = [
  "hero",
  "products",
  "collections",
  "campaign",
  "manufacturing",
  "story",
  "community",
];

dirs.forEach((d) => {
  const dirPath = path.join(baseDir, d);
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
});

// Helper for high-energy Gen-Z sneaker SVG
function generateStreetSneakerSvg({
  name,
  soleColor = "#111111",
  upperColor = "#FFFFFF",
  accentColor = "#F4F000",
  secondaryAccent = "#FF4F7B",
  badge = "GEN-01",
  edition = "STREET EDITION",
}) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 520" width="100%" height="100%" fill="none">
  <defs>
    <linearGradient id="grad-accent-${name}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${accentColor}"/>
      <stop offset="100%" stop-color="${secondaryAccent}"/>
    </linearGradient>
    <linearGradient id="grad-upper-${name}" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="${upperColor}"/>
      <stop offset="70%" stop-color="${upperColor}"/>
      <stop offset="100%" stop-color="#E2E2DC"/>
    </linearGradient>
    <filter id="street-shadow-${name}" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="20" stdDeviation="24" flood-color="#000000" flood-opacity="0.16"/>
    </filter>
  </defs>

  <!-- Dynamic Geometric Backdrop Elements -->
  <circle cx="430" cy="240" r="170" fill="${accentColor}" fill-opacity="0.14" />
  <rect x="520" y="80" width="120" height="28" rx="14" fill="${secondaryAccent}" fill-opacity="0.15" />
  <text x="580" y="98" text-anchor="middle" font-family="system-ui, sans-serif" font-size="11" font-weight="800" letter-spacing="2" fill="${secondaryAccent}">${badge}</text>

  <!-- Ground Shadow -->
  <ellipse cx="400" cy="430" rx="300" ry="22" fill="#000000" fill-opacity="0.10" filter="blur(14px)" />
  <ellipse cx="410" cy="425" rx="220" ry="12" fill="#000000" fill-opacity="0.15" filter="blur(6px)" />

  <!-- Sneaker Silhouette Group -->
  <g filter="url(#street-shadow-${name})" transform="translate(30, 25)">
    <!-- Outsole & Midsole Sculpted Ridges -->
    <path d="M 120 345 C 135 365, 175 385, 245 385 C 335 385, 415 370, 485 365 C 565 360, 645 370, 685 350 C 695 345, 690 325, 665 315 C 635 305, 545 310, 475 310 C 375 310, 265 305, 185 320 C 145 328, 115 332, 120 345 Z" fill="${soleColor}" />

    <!-- High-Traction Lug Cutouts -->
    <path d="M 150 365 L 180 375 L 210 365 L 240 375 L 270 365 L 300 375 L 330 365 L 360 375 L 390 365 L 420 375 L 450 365 L 480 375 L 510 365 L 540 375 L 570 365 L 600 375 L 630 365 L 660 355" stroke="${accentColor}" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>

    <!-- Midsole Cushion Layer -->
    <path d="M 150 325 C 190 315, 290 310, 390 313 C 470 315, 560 305, 640 315 C 655 318, 658 295, 635 275 C 605 245, 555 205, 485 185 C 445 175, 415 190, 375 200 C 335 210, 295 195, 255 215 C 205 240, 165 280, 150 325 Z" fill="url(#grad-upper-${name})" />

    <!-- Streetwear Graphic Overlay & Speed Stripe -->
    <path d="M 230 285 C 310 265, 430 255, 580 285 C 530 295, 410 290, 230 285 Z" fill="url(#grad-accent-${name})" />

    <!-- Upper Panels & Stitch Lines -->
    <path d="M 260 215 C 300 195, 340 210, 380 200 C 420 190, 450 175, 490 185 C 520 195, 550 215, 580 245 C 540 255, 470 250, 410 240 C 350 230, 290 235, 260 215 Z" fill="${soleColor}" opacity="0.85" />

    <!-- Tongue & Collar with Neon Piping -->
    <path d="M 340 200 C 355 155, 380 120, 420 110 C 455 102, 485 125, 490 175" stroke="${accentColor}" stroke-width="12" stroke-linecap="round" fill="none"/>
    <path d="M 340 200 C 355 155, 380 120, 420 110 C 455 102, 485 125, 490 175" stroke="${soleColor}" stroke-width="6" stroke-linecap="round" fill="none"/>

    <!-- Kinetic Laces -->
    <line x1="400" y1="145" x2="435" y2="210" stroke="${secondaryAccent}" stroke-width="4" stroke-linecap="round"/>
    <line x1="430" y1="155" x2="465" y2="220" stroke="${secondaryAccent}" stroke-width="4" stroke-linecap="round"/>
    <line x1="460" y1="168" x2="490" y2="230" stroke="${secondaryAccent}" stroke-width="4" stroke-linecap="round"/>

    <!-- Heel Pull Loop -->
    <path d="M 295 195 C 280 165, 295 150, 310 152 C 320 154, 315 180, 320 195" stroke="${accentColor}" stroke-width="7" stroke-linecap="round" fill="none" />
  </g>

  <!-- Editorial Typography Tags -->
  <text x="45" y="480" font-family="system-ui, sans-serif" font-size="13" font-weight="900" letter-spacing="3" fill="#111111">WALKLINE // ${name.toUpperCase()}</text>
  <text x="755" y="480" text-anchor="end" font-family="monospace" font-size="11" font-weight="700" letter-spacing="2" fill="#555555">${edition}</text>
</svg>`;
}

// Helper for Editorial Campaign & Community SVGs
function generateCampaignSvg({ title, tag, bg = "#F4F000", textColor = "#111111" }) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="100%" height="100%" fill="none">
  <rect width="800" height="600" fill="${bg}"/>
  
  <!-- Halftone / Dot Grid -->
  <g opacity="0.08" fill="${textColor}">
    ${Array.from({ length: 16 }).map((_, i) =>
      Array.from({ length: 12 }).map((_, j) => `<circle cx="${i * 50 + 25}" cy="${j * 50 + 25}" r="3"/>`).join("")
    ).join("")}
  </g>

  <!-- Bold Typography & Shapes -->
  <rect x="60" y="60" width="120" height="32" rx="16" fill="${textColor}"/>
  <text x="120" y="81" text-anchor="middle" font-family="system-ui, sans-serif" font-size="12" font-weight="900" letter-spacing="2" fill="${bg}">${tag}</text>

  <!-- Large Stylized Sneaker Icon Silhouette -->
  <g transform="translate(100, 140)">
    <path d="M 80 260 C 140 280, 240 280, 360 260 C 460 240, 520 250, 560 230 C 530 180, 460 130, 380 110 C 320 95, 270 120, 210 160 C 160 195, 110 230, 80 260 Z" fill="${textColor}"/>
    <circle cx="340" cy="180" r="40" fill="${bg}"/>
    <text x="340" y="186" text-anchor="middle" font-family="system-ui, sans-serif" font-size="16" font-weight="900" fill="${textColor}">WL</text>
  </g>

  <text x="60" y="520" font-family="system-ui, sans-serif" font-size="36" font-weight="900" letter-spacing="-1" fill="${textColor}">${title.toUpperCase()}</text>
  <text x="60" y="555" font-family="system-ui, sans-serif" font-size="14" font-weight="700" letter-spacing="3" fill="${textColor}" opacity="0.7">WALKLINE FOOTWEAR // 2026</text>
</svg>`;
}

// 1. Hero Sneaker
fs.writeFileSync(
  path.join(baseDir, "hero/hero-shoe.svg"),
  generateStreetSneakerSvg({
    name: "AEON V2 KINETIC",
    soleColor: "#111111",
    upperColor: "#FFFFFF",
    accentColor: "#F4F000",
    secondaryAccent: "#FF4F7B",
    badge: "NEW DROP // 01",
    edition: "STREET SERIES",
  })
);

// 2. Collection Tiles
fs.writeFileSync(
  path.join(baseDir, "collections/collection-men.svg"),
  generateStreetSneakerSvg({
    name: "Men Streetwear",
    soleColor: "#111111",
    upperColor: "#ECEAE4",
    accentColor: "#F4F000",
    secondaryAccent: "#3155FF",
    badge: "SIGNATURE",
  })
);
fs.writeFileSync(
  path.join(baseDir, "collections/collection-women.svg"),
  generateStreetSneakerSvg({
    name: "Women Sculpt",
    soleColor: "#222222",
    upperColor: "#FAF7F2",
    accentColor: "#FF4F7B",
    secondaryAccent: "#FF7A45",
    badge: "TRENDING",
  })
);
fs.writeFileSync(
  path.join(baseDir, "collections/collection-sports.svg"),
  generateStreetSneakerSvg({
    name: "Street Active",
    soleColor: "#0E0E0E",
    upperColor: "#FFFFFF",
    accentColor: "#3155FF",
    secondaryAccent: "#A8E63D",
    badge: "HIGH-TRACTION",
  })
);
fs.writeFileSync(
  path.join(baseDir, "collections/collection-kids.svg"),
  generateStreetSneakerSvg({
    name: "Kids Play",
    soleColor: "#2A2A2A",
    upperColor: "#F5F3ED",
    accentColor: "#A8E63D",
    secondaryAccent: "#F4F000",
    badge: "FLEX-FIT",
  })
);

// 3. Featured Drops / Products
fs.writeFileSync(
  path.join(baseDir, "products/product-01.svg"),
  generateStreetSneakerSvg({
    name: "AEON V2 CHALK",
    soleColor: "#111111",
    upperColor: "#FFFFFF",
    accentColor: "#F4F000",
    secondaryAccent: "#111111",
    badge: "NEW DROP",
  })
);
fs.writeFileSync(
  path.join(baseDir, "products/product-02.svg"),
  generateStreetSneakerSvg({
    name: "SONIC SURGE 01",
    soleColor: "#161616",
    upperColor: "#FAF7F0",
    accentColor: "#FF4F7B",
    secondaryAccent: "#3155FF",
    badge: "HOT SELLER",
  })
);
fs.writeFileSync(
  path.join(baseDir, "products/product-03.svg"),
  generateStreetSneakerSvg({
    name: "NOMAD GLIDE RETRO",
    soleColor: "#000000",
    upperColor: "#FFFFFF",
    accentColor: "#3155FF",
    secondaryAccent: "#F4F000",
    badge: "LIMITED",
  })
);
fs.writeFileSync(
  path.join(baseDir, "products/product-04.svg"),
  generateStreetSneakerSvg({
    name: "KINETIC LOW MINT",
    soleColor: "#1C1C1C",
    upperColor: "#F2F4F0",
    accentColor: "#A8E63D",
    secondaryAccent: "#111111",
    badge: "ESSENTIAL",
  })
);
fs.writeFileSync(
  path.join(baseDir, "products/product-05.svg"),
  generateStreetSneakerSvg({
    name: "RETRO COURT 90",
    soleColor: "#2B2825",
    upperColor: "#FFFFFF",
    accentColor: "#FF7A45",
    secondaryAccent: "#F4F000",
    badge: "CLASSIC",
  })
);
fs.writeFileSync(
  path.join(baseDir, "products/product-06.svg"),
  generateStreetSneakerSvg({
    name: "ORBIT SLIP SLATE",
    soleColor: "#1A1A1A",
    upperColor: "#ECEAE4",
    accentColor: "#F4F000",
    secondaryAccent: "#FF4F7B",
    badge: "COMFORT",
  })
);

// 4. Campaign & Story Artworks
fs.writeFileSync(
  path.join(baseDir, "campaign/lifestyle-campaign.svg"),
  generateCampaignSvg({
    title: "KEEP MOVING",
    tag: "CAMPAIGN // 2026",
    bg: "#F4F000",
    textColor: "#111111",
  })
);
fs.writeFileSync(
  path.join(baseDir, "story/brand-heritage.svg"),
  generateCampaignSvg({
    title: "BUILT IN INDIA",
    tag: "STREET CULTURE",
    bg: "#111111",
    textColor: "#F4F000",
  })
);

// 5. Community & Lookbook
fs.writeFileSync(
  path.join(baseDir, "community/community-01.svg"),
  generateCampaignSvg({ title: "BOMBAY STREETS", tag: "#WALKLINE", bg: "#FF4F7B", textColor: "#FFFFFF" })
);
fs.writeFileSync(
  path.join(baseDir, "community/community-02.svg"),
  generateCampaignSvg({ title: "DELHI SNEAKERHEADS", tag: "#WALKLINE", bg: "#3155FF", textColor: "#FFFFFF" })
);
fs.writeFileSync(
  path.join(baseDir, "community/community-03.svg"),
  generateCampaignSvg({ title: "BANGALORE NIGHTS", tag: "#WALKLINE", bg: "#A8E63D", textColor: "#111111" })
);

console.log("Successfully generated all Gen-Z street sneaker placeholders!");
