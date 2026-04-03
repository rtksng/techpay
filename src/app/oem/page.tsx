import type { Metadata } from "next";
import OemPage from "@/components/oem/oem-page";

export const metadata: Metadata = {
  title: "OEM | TechPay.ai",
  description:
    "See how TechPay.ai helps OEMs expand market reach, increase ASP, gain real-time intelligence, reduce returns, and ensure brand consistency across retail.",
};

export default function Page() {
  return <OemPage />;
}
