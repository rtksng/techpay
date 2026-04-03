import type { Metadata } from "next";
import DistributorsPage from "@/components/distributors/distributors-page";

export const metadata: Metadata = {
  title: "Distributors | TechPay.ai",
  description:
    "See how TechPay.ai helps distributors expand market reach, drive faster sales, scale operations, and enhance efficiency across the distribution chain.",
};

export default function Page() {
  return <DistributorsPage />;
}
