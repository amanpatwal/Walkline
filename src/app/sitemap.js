import { ALL_PRODUCT_SLUGS } from "@/data/products";

export default function sitemap() {
  const baseUrl = "https://walklinefootwear.com";

  const staticRoutes = [
    "",
    "/men",
    "/women",
    "/kids",
    "/sandals",
    "/collections",
    "/about",
    "/contact",
    "/manufacturing",
    "/sustainability",
    "/cart",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1.0 : route.startsWith("/products") || route === "/collections" ? 0.9 : 0.8,
  }));

  const productRoutes = ALL_PRODUCT_SLUGS.map((slug) => ({
    url: `${baseUrl}/products/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  return [...staticRoutes, ...productRoutes];
}
