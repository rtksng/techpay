import type { Metadata } from "next";
import AssociateApplicationForm from "../_components/associate-application-form";

export const metadata: Metadata = {
  title: "Apply to become an Associate Retailer | TechPay.ai",
  description:
    "Complete the TechPay.ai Associate Retailer application form for partner review and onboarding.",
};

export default function Page() {
  return (
    <main className="bg-white text-slate-950">
      <AssociateApplicationForm />
    </main>
  );
}
