import Link from "next/link";
import type { CSSProperties } from "react";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  BadgeDollarSign,
  Boxes,
  Check,
  ChevronRight,
  CircleHelp,
  CreditCard,
  DoorOpen,
  LaptopMinimal,
  Shield,
  Sparkles,
  Store,
  TrendingUp,
  Users,
} from "lucide-react";
import SiteFooter from "@/components/site-footer";
import RetailersBenefitsShowcase from "@/components/retailers/retailers-benefits-showcase";
import SiteNavbar from "@/components/site-navbar";
import RetailersBenefitsTimeline from "@/components/retailers/retailers-benefits-timeline";
import { Grid } from "@/components/ui/features-section-demo-1";
import { cn } from "@/lib/utils";
import FloatingLines from "../ui/FloatingLines";

const notchStyle = {
  clipPath:
    "polygon(0 0, calc(100% - 46px) 0, 100% 46px, 100% 100%, 0 100%)",
};

type IconCard = {
  title: string;
  description: string;
  Icon: LucideIcon;
};

const heroSignals = [
  "Guided recommendations inside the store",
  "Wider catalogue without adding floor stock",
  "60-second approvals for budget-fit plans",
  "Revenue add-ons surfaced at the right moment",
];

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

const salesBullets = [
  "Confused shoppers become confident buyers",
  "More walk-ins convert into paying customers",
  "Guided buying experience happens inside the store",
  "Higher store revenue without extra marketing",
];

const ticketCards = [
  {
    title: "Clear Comparisons",
    description:
      "Side-by-side feature matrices show tangible differences between models.",
  },
  {
    title: "Value Communication",
    description:
      "Platform explains why better specs matter for specific use cases.",
  },
  {
    title: "Natural Upgrades",
    description:
      "Customers choose premium options when they understand the benefits.",
  },
  {
    title: "Higher Revenue",
    description:
      "Average order value increases across all transactions.",
  },
];

const conversionSteps = [
  "Sell PCs even if they are not physically available in store",
  "Access a wider product catalogue instantly through the platform",
  "Fulfil orders through trusted supply partners without adding friction",
  "Give the customer a smooth home-delivery path with full confidence",
];

const revenueStreams: IconCard[] = [
  {
    title: "Financing Commissions",
    description:
      "Earn referral fees when customers choose payment plans.",
    Icon: CreditCard,
  },
  {
    title: "Extended Warranty",
    description:
      "Upsell protection plans with demonstrated value.",
    Icon: Shield,
  },
  {
    title: "Accessories Bundles",
    description:
      "Recommended accessories increase total transaction value.",
    Icon: LaptopMinimal,
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
      "Entire experience takes only 2–3 minutes.",
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

const proofPoints = [
  { label: "Customer guidance", value: "Structured conversations, not guesswork" },
  { label: "Infinite shelf", value: "Sell beyond floor stock" },
  { label: "Finance decision", value: "Fast approvals in 60 seconds" },
  { label: "Extra revenue", value: "Plans, bundles, and protection" },
];

export default function RetailersPage() {
  return (
    <>
      <SiteNavbar />

      <main className="bg-[#f7f7fb] text-[#111111]">
        <RetailersHero />
        <RetailersChallengesSection />
        <RetailersBenefitsSection />
        <RetailersBenefitsShowcase />
        <RetailersSalesTeamSection />
      </main>

      <SiteFooter />
    </>
  );
}

function RetailersHero() {
  return (
    <section className="relative isolate ">
      <FloatingLines
        enabledWaves={["top", "middle", "bottom"]}
        // Array - specify line count per wave; Number - same count for all waves
        lineCount={5}
        // Array - specify line distance per wave; Number - same distance for all waves
        lineDistance={5}
        bendRadius={5}
        bendStrength={-0.5}
        interactive={true}
        parallax={true}
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-[80px] font-display font-bold text-white max-w-5xl text-center leading-normal">
          Turn walk-ins into high-value checkouts.
        </h1>
      </div>
    </section>
  );
}

function RetailersChallengesSection() {
  return (
    <section
      id="retailer-challenges"
      className="relative overflow-hidden px-5 py-20 md:px-[60px] md:py-24"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute left-0 top-0 h-56 w-56 rounded-full bg-techpay-primary/8 blur-3xl" />
        <div className="absolute right-0 top-20 h-60 w-60 rounded-full bg-techpay-orange/8 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-[1440px]">
        <SectionHeading
          eyebrow="PC Retail Store Challenges"
          title="The friction starts before the sale even begins."
          description="Today's laptop shoppers face overwhelming choices, leading to lost sales and frustrated customers. Your sales team struggles to guide them through complex configurations and features
"
          dark={false}
          maxWidthClassName="max-w-[820px]"
        />

        <div className="mt-10 grid gap-5 md:grid-cols-4">
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
      <div className="relative mx-auto  max-w-[1440px] ">
        <div className="">
          <p className="mb-4 text-[0.78rem] font-semibold uppercase tracking-[0.16em] text-techpay-primary">
            How does the platform help retailers?
          </p>
          <h2 className=" font-display text-[clamp(2rem,4.8vw,4rem)] font-bold tracking-[-0.05em] text-slate-950">
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
    <section className="relative  md:py-24">
      <div className="relative mx-auto max-w-[1440px]">
        <div className="relative w-full p-[18px] md:p-[22px]">
       

          <div className="relative z-1  ">
            <div className="max-w-[720px]">
              <SectionHeading
                eyebrow="Operations"
                title="Simple for retail sales teams."
                description="TechPay.ai is designed to work with your existing sales process, not against it. The platform requires minimal training and actually boosts confidence for new team members."
                dark={false}
              />
            </div>

            <div className="mt-10 grid gap-12 lg:grid-cols-2">
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

                  <div className="relative z-1 overflow-hidden  border border-slate-200 bg-white px-5 py-5 shadow-[0_18px_36px_rgba(15,23,42,0.08)] md:px-6 md:py-6">
                    <div >
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
                  </div>
                </article>
              ))}
            </div>
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
    <article
      className="group relative overflow-hidden  border border-slate-900/7 bg-linear-to-b from-white to-[#fff7fb] p-6 shadow-[0_22px_60px_rgba(15,23,42,0.08)] transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_30px_70px_rgba(15,23,42,0.12)] md:min-h-[260px] md:p-7"
    // style={notchStyle}
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

function FloatingSignalCard({
  title,
  description,
  accentClass,
}: {
  title: string;
  description: string;
  accentClass: string;
}) {
  return (
    <div className="overflow-hidden rounded-[22px] border border-white/8 bg-white/[0.04]">
      <div className={cn("h-1 w-full bg-linear-to-r", accentClass)} />
      <div className="px-4 py-4">
        <p className="font-display text-[1rem] font-semibold tracking-[-0.02em] text-white">
          {title}
        </p>
        <p className="mt-2 text-sm leading-6 text-white/70">{description}</p>
      </div>
    </div>
  );
}

function StatChip({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-[20px] border border-slate-200 bg-white px-4 py-4 shadow-[0_14px_32px_rgba(15,23,42,0.04)]">
      <p className="font-display text-[1rem] font-semibold tracking-[-0.02em] text-slate-950">
        {title}
      </p>
      <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
    </div>
  );
}
