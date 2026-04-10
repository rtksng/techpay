import type { CSSProperties } from "react";
import { Boxes, CircleHelp, DoorOpen, TrendingUp } from "lucide-react";
import AudienceHero from "../../_components/audience-hero";
import RetailersHeroOverlay from "./retailers-hero-overlay";
import RetailersBenefitsShowcase from "./retailers-benefits-showcase";
import RetailersBenefitsTimeline from "./retailers-benefits-timeline";
import { Grid } from "@/components/ui/features-section-demo-1";
import { cn } from "@/lib/utils";

const challenges = [
  {
    title: "Too Many Options",
    description:
      "Customers overwhelmed by extensive laptop catalogs and technical specifications.",
    accent: "primary",
    Icon: CircleHelp,
  },
  {
    title: "Walk-In Abandonment",
    description:
      "Potential buyers leave without purchasing due to decision paralysis.",
    accent: "orange",
    Icon: DoorOpen,
  },
  {
    title: "Stock Limitations",
    description:
      "Unavailable models disappoint customers and kill sales opportunities.",
    accent: "purple",
    Icon: Boxes,
  },
  {
    title: "Upselling Difficulty",
    description:
      "Sales staff struggle to articulate value of premium configurations.",
    accent: "pink",
    Icon: TrendingUp,
  },
] as const;

const salesTeamPrinciples = [
  {
    title: "Salesperson Guides",
    description:
      "Team member walks the customer through TechPay interface.",
  },
  {
    title: "Quick Process",
    description:
      "Entire experience takes only 2-3 minutes.",
  },
  {
    title: "No Technical Training",
    description:
      "Intuitive interface requires no special expertise.",
  },
  {
    title: "Builds Confidence",
    description:
      "Especially helpful for new sales staff.",
  },
] as const;

export default function RetailersPage() {
  return (
    <main className="bg-[#f7f7fb] text-[#111111]">
      <AudienceHero
        title="Turn walk-ins into high-value checkouts."
        eyebrow="Retail Growth"
        overlay={<RetailersHeroOverlay />}
      />
      <RetailersChallengesSection />
      <RetailersBenefitsSection />
      <RetailersBenefitsShowcase />
      <RetailersSalesTeamSection />
    </main>
  );
}

function RetailersChallengesSection() {
  return (
    <section
      id="retailer-challenges"
      className="relative overflow-hidden px-5 py-20 md:px-[60px] md:py-24"
    >
      {/* <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute left-0 top-0 h-56 w-56 rounded-full bg-techpay-primary/8 blur-3xl" />
        <div className="absolute right-0 top-20 h-60 w-60 rounded-full bg-techpay-orange/8 blur-3xl" />
      </div> */}

      <div className="relative mx-auto max-w-[1440px]">
        <SectionHeading
          eyebrow="PC Retail Store Challenges"
          title="The friction starts before the sale even begins."
          description="Today's laptop shoppers face overwhelming choices, leading to lost sales and frustrated customers. Your sales team struggles to guide them through complex configurations and features."
          dark={false}
          maxWidthClassName="max-w-[820px]"
        />

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {challenges.map((challenge, index) => (
            <RetailChallengeCard
              key={challenge.title}
              challenge={challenge}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function RetailersBenefitsSection() {
  return (
    <section
      id="retailer-benefits"
      className="relative overflow-hidden bg-white px-5 py-20 md:px-[60px] md:py-24"
    >
      <div className="relative mx-auto max-w-[1440px]">
        <div>
          <p className="mb-4 text-[0.78rem] font-semibold uppercase tracking-[0.16em] text-techpay-primary">
            How does the platform help retailers?
          </p>
          <h2 className="font-display text-[clamp(2rem,4.8vw,4rem)] font-bold tracking-[-0.05em] text-slate-950">
            Benefits for Retail.
          </h2>
        </div>

        <RetailersBenefitsTimeline />
      </div>
    </section>
  );
}

function RetailersSalesTeamSection() {
  return (
    <section className="relative py-14 md:py-24">
      <div className="relative mx-auto max-w-[1440px] px-5 md:px-[60px]">
        <div className="relative z-1 grid gap-10 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1fr)] lg:items-center lg:gap-14">
          <div className="max-w-[720px] lg:self-center">
            <SectionHeading
              eyebrow="Operations"
              title="Simple for retail sales teams."
              description="TechPay.ai is designed to work with your existing sales process, not against it. The platform requires minimal training and actually boosts confidence for new team members."
              dark={false}
            />
          </div>

          <div className="mt-2 grid gap-8 sm:grid-cols-2 lg:mt-0">
            {salesTeamPrinciples.map((item, index) => (
              <article
                key={item.title}
                className="scales-frame relative p-[16px] md:p-[18px]"
                style={{ "--scales-color": "rgba(124, 58, 237, 0.42)" } as CSSProperties}
              >
                <span className="scales-strip scales-strip--left" aria-hidden="true" />
                <span className="scales-strip scales-strip--right" aria-hidden="true" />
                <span className="scales-strip scales-strip--top" aria-hidden="true" />
                <span className="scales-strip scales-strip--bottom" aria-hidden="true" />

                <div className="relative z-1 overflow-hidden border border-slate-200 bg-white px-5 py-5 shadow-[0_18px_36px_rgba(15,23,42,0.08)] md:px-6 md:py-6">
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-techpay-primary">
                    Principle {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-1 font-display text-[1.45rem] font-semibold tracking-[-0.03em] text-slate-950">
                    {item.title}
                  </h3>
                  <p className="mt-2 max-w-[640px] text-sm leading-7 text-slate-600 md:text-base">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
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

function RetailChallengeCard({
  challenge,
  index,
}: {
  challenge: (typeof challenges)[number];
  index: number;
}) {
  return (
    <article className="group relative overflow-hidden border border-slate-900/7 bg-linear-to-b from-white to-[#fff7fb] p-6 shadow-[0_22px_60px_rgba(15,23,42,0.08)] transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_30px_70px_rgba(15,23,42,0.12)] md:min-h-[260px] md:p-7">
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
          challenge.accent === "primary" &&
            "from-techpay-primary via-techpay-pink to-techpay-primary/70",
          challenge.accent === "orange" &&
            "from-techpay-orange via-[#ffb36b] to-techpay-primary/60",
          challenge.accent === "purple" &&
            "from-techpay-purple via-[#be73d0] to-techpay-primary/55",
          challenge.accent === "pink" &&
            "from-techpay-pink via-techpay-primary to-techpay-purple/70"
        )}
        aria-hidden="true"
      />

      <div className="relative z-10">
        <span
          className={cn(
            "inline-flex h-14 w-14 items-center justify-center rounded-[18px] border text-slate-950",
            challenge.accent === "primary" &&
              "border-techpay-primary/14 bg-techpay-primary/10 text-techpay-primary",
            challenge.accent === "orange" &&
              "border-techpay-orange/16 bg-techpay-orange/10 text-techpay-orange",
            challenge.accent === "purple" &&
              "border-techpay-purple/16 bg-techpay-purple/10 text-techpay-purple",
            challenge.accent === "pink" &&
              "border-techpay-pink/18 bg-techpay-pink/12 text-techpay-primary"
          )}
        >
          <challenge.Icon className="h-6 w-6" />
        </span>

        <h3 className="mt-6 font-display text-[1.5rem] font-bold tracking-[-0.03em] text-slate-950">
          {challenge.title}
        </h3>
        <p className="mt-3 max-w-[58ch] text-sm leading-7 text-slate-600 md:text-base">
          {challenge.description}
        </p>
      </div>
    </article>
  );
}
