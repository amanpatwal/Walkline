import { notFound } from "next/navigation";
import {
  getProductBySlug,
  getRelatedProducts,
  ALL_PRODUCT_SLUGS,
  FEATURED_PRODUCTS,
} from "@/data/products";
import ProductDetailClient from "./ProductDetailClient";

export async function generateStaticParams() {
  return ALL_PRODUCT_SLUGS.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: "Product Not Found | Walkline Footwear",
    };
  }

  return {
    title: `${product.series} — ${product.category} | Walkline Footwear`,
    description: product.description || product.tagline,
    openGraph: {
      title: `${product.series} | Walkline Footwear`,
      description: product.tagline,
      images: [
        {
          url: product.image?.src || product.image,
          width: 800,
          height: 800,
          alt: product.series,
        },
      ],
    },
  };
}

export default async function ProductPage({ params }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = getRelatedProducts(product, 4);

  return (
    <ProductDetailClient
      product={product}
      relatedProducts={relatedProducts}
    />
  );
}
