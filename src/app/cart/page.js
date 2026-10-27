import { redirect } from "next/navigation";

export const metadata = {
  title: "Collections — Walkline Footwear",
  description: "Explore Walkline Footwear collections crafted for comfort and durability.",
};

export default function CartPage() {
  redirect("/collections");
}
