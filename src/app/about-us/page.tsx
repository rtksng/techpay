import type { Metadata } from "next";
import AboutUsPageContent from "@/app/about-us/_components/about-us-page";

export const metadata: Metadata = {
  title: "About Us | TechPay.ai",
  description: "Mission, vision, leadership team, and office locations for TechPay.ai.",
};

export default function AboutUsPage() {
  return <AboutUsPageContent />;
}
