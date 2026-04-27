import type { Metadata } from "next";
import AssociateCommunity from "../_components/associate-community";

export const metadata: Metadata = {
  title: "Associate Retailer Community | TechPay.ai",
  description:
    "Connect, share, and grow with TechPay partners across India in the Associate Retailer community.",
};

export default function Page() {
  return (
    <main className="bg-[#f7f7fb] text-slate-950">
      <AssociateCommunity />
    </main>
  );
}
