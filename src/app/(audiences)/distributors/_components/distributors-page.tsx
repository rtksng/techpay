import AudienceHero from "../../_components/audience-hero";
import DistributorsBenefitsShowcase from "./distributors-benefits-showcase";
import DistributorsBenefitsTimeline from "./distributors-benefits-timeline";

export default function DistributorsPage() {
  return (
    <main className="bg-[#f7f7fb] text-[#111111]">
      <AudienceHero title="How does TechPay help Distributors?" />
      <DistributorsBenefitsSection />
      <DistributorsBenefitsShowcase />
    </main>
  );
}

function DistributorsBenefitsSection() {
  return (
    <section
      id="distributor-benefits"
      className="relative overflow-hidden bg-white px-5 py-20 md:px-[60px] md:py-24"
    >
      <div className="relative mx-auto max-w-[1440px]">
        <div>
          <p className="mb-4 text-[0.78rem] font-semibold uppercase tracking-[0.16em] text-techpay-primary">
            How does the platform help Distributors?
          </p>
          <h2 className="font-display text-[clamp(2rem,4.8vw,4rem)] font-bold tracking-[-0.05em] text-slate-950">
            Benefits for Distributors.
          </h2>
        </div>

        <DistributorsBenefitsTimeline />
      </div>
    </section>
  );
}
