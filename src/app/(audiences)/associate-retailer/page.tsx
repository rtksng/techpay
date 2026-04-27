import type { Metadata } from "next";
import AssociateRetailerPage from "./_components/associate-retailer-page";

export const metadata: Metadata = {
  title: "TechPay.ai — Associate Retailer Program",
  description:
    "TechPay.ai gives trusted technical experts a QR code and platform to sell the right laptop to every customer and earn on every sale.",
};

export default function Page() {
  return <AssociateRetailerPage />;
}
