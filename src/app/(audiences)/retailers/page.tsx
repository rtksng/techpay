import type { Metadata } from "next";
import RetailersPage from "./_components/retailers-page";

export const metadata: Metadata = {
  title: "Retailers | TechPay.ai",
  description:
    "See how TechPay.ai helps retail partners increase conversion, grow ticket size, unlock infinite shelf inventory, and create new revenue streams.",
};

export default function Page() {
  return <RetailersPage />;
}
