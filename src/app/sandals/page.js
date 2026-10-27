import { redirect } from "next/navigation";

export const metadata = {
  title: "Collections — Walkline Footwear",
  description: "Explore Walkline's complete range of footwear. Made in India since 2010.",
};

export default function SandalsPage() {
  redirect("/collections");
}
