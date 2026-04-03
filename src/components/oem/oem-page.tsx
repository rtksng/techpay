import type { CSSProperties } from "react";
import type { LucideIcon } from "lucide-react";
import {
  BarChart3,
  Globe,
  ShieldCheck,
  Store,
  TrendingUp,
} from "lucide-react";
import SiteFooter from "@/components/site-footer";
import OemBenefitsShowcase from "@/components/oem/oem-benefits-showcase";
import SiteNavbar from "@/components/site-navbar";
import OemBenefitsTimeline from "@/components/oem/oem-benefits-timeline";
import { Grid } from "@/components/ui/features-section-demo-1";
import { cn } from "@/lib/utils";
import FloatingLines from "../ui/FloatingLines";

const benefits = [
  {
    title: "Expanded Market Reach",
    description:
      "TechPay extends your brand reach far beyond physical shelf space.",
    accent: "primary",
    Icon: Globe,
  },
  {
    title: "Higher ASP & Accessories Attach",
    description:
      "Guided selling drives premium choices and surfaces the right accessories.",
    accent: "orange",
    Icon: TrendingUp,
  },
  {
    title: "Real-Time Market Intelligence",
    description:
      "TechPay captures live purchase data at every retail interaction.",
    accent: "purple",
    Icon: BarChart3,
  },
  {
    title: "Reduced Return and Support Cost",
    description:
      "AI-guided buying means customers get the right product the first time.",
    accent: "pink",
    Icon: ShieldCheck,
  },
  {
    title: "Brand Consistency Across Retail",
    description:
      "Ensure consistent brand experience across all retail partners.",
    accent: "primary",
    Icon: Store,
  },
] as const;

export default function OemPage() {
  return (
    <>
      <SiteNavbar />

      <main className="bg-[#f7f7fb] text-[#111111]">
        <OemHero />
        <OemBenefitsOverviewSection />
        <OemBenefitsSection />
        <OemBenefitsShowcase />
      </main>

      <SiteFooter />
    </>
  );
}

function OemHero() {
  return (
    <section className="relative isolate">
      <FloatingLines
        enabledWaves={["top", "middle", "bottom"]}
        lineCount={5}
        lineDistance={5}
        bendRadius={5}
        bendStrength={-0.5}
        interactive={true}
        parallax={true}
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-[80px] font-display font-bold text-white max-w-5xl text-center leading-normal">
          How does TechPay help OEMs?
        </h1>
      </div>
    </section>
  );
}

function OemBenefitsOverviewSection() {
  return (
    <section
      id="oem-benefits-overview"
      className="relative overflow-hidden px-5 py-20 md:px-[60px] md:py-24"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute left-0 top-0 h-56 w-56 rounded-full bg-techpay-primary/8 blur-3xl" />
        <div className="absolute right-0 top-20 h-60 w-60 rounded-full bg-techpay-orange/8 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-[1440px]">
        <SectionHeading
          eyebrow="Benefits for OEMs"
          title="Expand reach. Increase revenue. Protect your brand."
          description="TechPay.ai gives OEMs a direct line into retail — powering guided selling, real-time intelligence, and consistent brand experiences across every store."
          dark={false}
          maxWidthClassName="max-w-[820px]"
        />

        <div className="mt-10 grid gap-5 md:grid-cols-3 lg:grid-cols-5">
          {benefits.map((benefit, index) => (
            <OemBenefitCard
              key={benefit.title}
              benefit={benefit}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function OemBenefitsSection() {
  return (
    <section
      id="oem-benefits"
      className="relative overflow-hidden bg-white px-5 py-20 md:px-[60px] md:py-24"
    >
      <div className="relative mx-auto max-w-[1440px]">
        <div>
          <p className="mb-4 text-[0.78rem] font-semibold uppercase tracking-[0.16em] text-techpay-primary">
            How does the platform help OEMs?
          </p>
          <h2 className="font-display text-[clamp(2rem,4.8vw,4rem)] font-bold tracking-[-0.05em] text-slate-950">
            Benefits for OEMs.
          </h2>
        </div>

        <OemBenefitsTimeline />
      </div>
    </section>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
  dark,
  maxWidthClassName,
}: {
  eyebrow: string;
  title: string;
  description: string;
  dark: boolean;
  maxWidthClassName?: string;
}) {
  return (
    <div className={cn("max-w-[720px]", maxWidthClassName)}>
      <p className="mb-4 text-[0.78rem] font-semibold uppercase tracking-[0.16em] text-techpay-primary">
        {eyebrow}
      </p>
      <h2
        className={cn(
          "font-display text-[clamp(2rem,4.4vw,3.7rem)] font-bold leading-[1.04] tracking-[-0.05em]",
          dark ? "text-white" : "text-slate-950"
        )}
      >
        {title}
      </h2>
      <p
        className={cn(
          "mt-5 text-sm leading-7 md:text-base",
          dark ? "text-white/72" : "text-slate-600"
        )}
      >
        {description}
      </p>
    </div>
  );
}

function OemBenefitCard({
  benefit,
  index,
}: {
  benefit: (typeof benefits)[number];
  index: number;
}) {
  return (
    <article
      className="group relative overflow-hidden border border-slate-900/7 bg-linear-to-b from-white to-[#fff7fb] p-6 shadow-[0_22px_60px_rgba(15,23,42,0.08)] transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_30px_70px_rgba(15,23,42,0.12)] md:min-h-[260px] md:p-7"
    >
      <Grid
        size={24}
        pattern={[
          [7, 1],
          [8, 3],
          [10, 2],
          [11, 5],
          [13, index + 1],
        ]}
      />

      <div
        className={cn(
          "absolute inset-x-0 top-0 h-1 bg-linear-to-r",
          benefit.accent === "primary" &&
            "from-techpay-primary via-techpay-pink to-techpay-primary/70",
          benefit.accent === "orange" &&
            "from-techpay-orange via-[#ffb36b] to-techpay-primary/60",
          benefit.accent === "purple" &&
            "from-techpay-purple via-[#be73d0] to-techpay-primary/55",
          benefit.accent === "pink" &&
            "from-techpay-pink via-techpay-primary to-techpay-purple/70"
        )}
        aria-hidden="true"
      />

      <div className="relative z-10">
        <span
          className={cn(
            "inline-flex h-14 w-14 items-center justify-center rounded-[18px] border text-slate-950",
            benefit.accent === "primary" &&
              "border-techpay-primary/14 bg-techpay-primary/10 text-techpay-primary",
            benefit.accent === "orange" &&
              "border-techpay-orange/16 bg-techpay-orange/10 text-techpay-orange",
            benefit.accent === "purple" &&
              "border-techpay-purple/16 bg-techpay-purple/10 text-techpay-purple",
            benefit.accent === "pink" &&
              "border-techpay-pink/18 bg-techpay-pink/12 text-techpay-primary"
          )}
        >
          <benefit.Icon className="h-6 w-6" />
        </span>

        <h3 className="mt-6 font-display text-[1.5rem] font-bold tracking-[-0.03em] text-slate-950">
          {benefit.title}
        </h3>
        <p className="mt-3 max-w-[58ch] text-sm leading-7 text-slate-600 md:text-base">
          {benefit.description}
        </p>
      </div>
    </article>
  );
}
