import type { LucideIcon } from "lucide-react";
import {
  BadgeCheck,
  Bot,
  ChartNoAxesCombined,
  CircleDollarSign,
  GraduationCap,
  Handshake,
  PackageCheck,
  QrCode,
  Trophy,
} from "lucide-react";
import OfficeFeatureGrid, {
  type FeatureSectionItem as OfficeFeatureSectionItem,
} from "@/app/about-us/_components/offices-grid";
import FeaturesSectionDemo1 from "@/components/ui/features-section-demo-1";
import { ButtonLink } from "@/components/ui/button";
import AssociateEarningsCalculator from "./associate-earnings-calculator";

const heroStats = [
  { value: "₹15,000+", label: "Monthly earning potential" },
  { value: "15,000", label: "PIN Codes targeted" },
  { value: "300+", label: "Cities across India" },
  { value: "Zero", label: "Upfront investment" },
] as const;

const benefits: Array<{
  title: string;
  description: string;
  highlight: string;
  Icon: LucideIcon;
  tone: "primary" | "purple" | "pink";
}> = [
  {
    title: "Earn on Every Sale",
    description:
      "Earn a commission on every device sold through the TechPay.ai platform. No targets. No pressure. The more you recommend, the more you earn.",
    highlight: "₹500–₹2,500 per device sold. *Conditions Apply",
    Icon: CircleDollarSign,
    tone: "primary",
  },
  {
    title: "Your Own TechPay QR",
    description:
      "Get a personalized QR code tied to your profile. Recommend to customers. Every scan is tracked. Every purchase is credited to you — automatically.",
    highlight: "Easy setup. Fast Onboarding",
    Icon: QrCode,
    tone: "pink",
  },
  {
    title: "AI Does the Heavy Lifting",
    description:
      "Our AI recommends the perfect device for each customer based on their needs. You don't need to memorise specs — just share your QR and let the platform assist in your sale.",
    highlight: "Get Smarter. Provide Unlimited choices.",
    Icon: Bot,
    tone: "purple",
  },
  {
    title: "Zero Inventory, Zero Risk",
    description:
      "You never hold stock. Devices ship directly from distributors to your customer's door. You refer & recommend — the platform supports you with everything else.",
    highlight: "Zero Investment. Zero Stock (to manage). Zero Risk",
    Icon: PackageCheck,
    tone: "pink",
  },
  {
    title: "Trusted Advisor Status",
    description:
      "Create a thriving tech business in your PIN code — earn trust, build loyal customers, and generate repeat purchases through your expertise.",
    highlight: "Grow from tech expert to tech entrepreneur",
    Icon: Trophy,
    tone: "primary",
  },
  {
    title: "EMI Financing for Your Customers",
    description:
      "TechPay.ai platform through our finance partner(s) offers your customer(s) flexible payment plans with fast approvals. Remove the biggest barrier to purchase — upfront costs — and watch your conversion rate soar.",
    highlight: "Fast approvals. No overheads for you.",
    Icon: BadgeCheck,
    tone: "primary",
  },
  {
    title: "Training & Certification",
    description:
      "Get certified as a TechPay Associate Retailer. Access sales training, product knowledge sessions, and marketing materials — all free for registered partners.",
    highlight: "TechPay Certified Associate badge",
    Icon: GraduationCap,
    tone: "purple",
  },
  {
    title: "Community of 10,000+ Peers",
    description:
      "Join a growing network of RMA and technical support professionals across India. Share tips, celebrate wins, and learn from the best in your region.",
    highlight: "WhatsApp groups by city & region",
    Icon: Handshake,
    tone: "purple",
  },
  {
    title: "Real-Time Dashboard",
    description:
      "Track every scan, every lead, every sale, and every rupee earned — securely & in real time. Complete transparency.",
    highlight: "Earn Weekly. On time, every time.",
    Icon: ChartNoAxesCombined,
    tone: "pink",
  },
];

const journeySteps = [
  {
    title: "Apply Online",
    description:
      "Fill up the retailer associate form with your details. Takes 5 minutes.",
  },
  {
    title: "KYC Verification",
    description:
      "We verify your Aadhaar, PAN, and bank account. Done within 48 hours.",
  },
  {
    title: "Get Your QR",
    description:
      "Receive your personalized TechPay QR code, certificate, and welcome kit digitally.",
  },
  {
    title: "Start Referring",
    description:
      "Show your QR to customers. Guide them. Use our platform to close the deal — you get the credit.",
  },
  {
    title: "Get Paid Weekly",
    description:
      "Earnings transfer to your bank account every week. No delays. No minimums. Full transparency.",
  },
] as const;

const journeyFeatureItems: OfficeFeatureSectionItem[] = journeySteps.map(
  (step, index) => ({
    title: step.title,
    icon: (
      <span className="font-display text-xl font-bold leading-none">
        {index + 1}
      </span>
    ),
    description: <p>{step.description}</p>,
    hoverClassName:
      "bg-linear-to-t from-techpay-primary/8 via-techpay-purple/6 to-transparent",
  })
);

const cityTiers = [
  {
    label: "Tier 1 — Metros",
    count: "8",
    cities:
      "Mumbai · Delhi · Bengaluru · Chennai · Hyderabad · Kolkata · Pune · Ahmedabad",
  },
  {
    label: "Tier 2 — Major Cities",
    count: "50+",
    cities:
      "Jaipur · Surat · Lucknow · Kochi · Chandigarh · Indore · Coimbatore · Nagpur + more",
  },
  {
    label: "Tier 3 — Growing Towns",
    count: "150+",
    cities:
      "District capitals and growing towns across all states. First-mover advantage for early partners.",
  },
  {
    label: "Tier 4 — Deep India",
    count: "100+",
    cities:
      "Semi-urban and rural centres with strong RMA & computer service presence. High demand, low competition.",
  },
] as const;

const coverageFeatureItems: OfficeFeatureSectionItem[] = cityTiers.map(
  (tier) => ({
    title: tier.label,
    icon: (
      <span className="font-display text-lg font-bold leading-none">
        {tier.count}
      </span>
    ),
    description: <p>{tier.cities}</p>,
    hoverClassName:
      "bg-linear-to-t from-techpay-primary/8 via-techpay-purple/6 to-transparent",
  })
);

const toneClasses = {
  primary:
    "from-techpay-primary via-techpay-pink to-techpay-purple/75",
  purple:
    "from-techpay-purple via-techpay-primary to-techpay-pink/80",
  pink: "from-techpay-pink via-techpay-primary to-techpay-purple/80",
} as const;

const benefitCardClasses = {
  primary: {
    borderClass: "border-techpay-primary/18",
    glowClass: "bg-techpay-primary/14",
    highlightClass: "bg-techpay-primary/8 text-techpay-primary",
  },
  purple: {
    borderClass: "border-techpay-purple/18",
    glowClass: "bg-techpay-purple/14",
    highlightClass: "bg-techpay-primary/8 text-techpay-primary",
  },
  pink: {
    borderClass: "border-techpay-pink/22",
    glowClass: "bg-techpay-pink/16",
    highlightClass: "bg-techpay-primary/8 text-techpay-primary",
  },
} as const;

export default function AssociateRetailerPage() {
  return (
    <main className="bg-[#f7f7fb] text-slate-950">
      <AssociateHero />
      <BenefitsSection />
      <AssociateEarningsCalculator />
      <JourneySection />
      <CoverageSection />
      <SummaryCtaSection />
    </main>
  );
}

function AssociateHero() {
  return (
    <section
      id="partner-page"
      className="relative isolate overflow-hidden bg-techpay-bg px-5 pb-16 pt-28 text-white sm:px-7 md:px-[60px] md:pb-24 md:pt-36"
    >
      <div className="absolute inset-0 bg-[linear-gradient(90deg,#010101_0%,rgba(1,1,1,0.9)_34%,rgba(1,1,1,0.54)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(1,1,1,0.22)_0%,rgba(1,1,1,0.05)_45%,#010101_100%)]" />
      <HeroMotionLines />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-techpay-primary to-transparent"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto  max-w-[1240px] ">
        <div>

          <h1 className="mt-7 max-w-4xl font-display text-4xl font-bold  text-white md:text-6xl lg:text-7xl">
            Turn your{" "}
            <span className="text-techpay-primary">technical expertise</span> into a thriving business.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
            You fix computers. You know your customers. Your community trusts
            you. TechPay.ai gives you a platform to match every customer with
            the right computer — turning your expertise into income.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {heroStats.map((stat) => (
              <div
                key={stat.label}
                className="border-l-2 border-techpay-primary pl-4"
              >
                <p className="text-2xl font-bold text-white">{stat.value}</p>
                <p className="mt-1 text-xs text-slate-400">{stat.label}</p>
                {stat.label === "Monthly earning potential" ? (
                  <p className="mt-2 text-xs font-semibold text-slate-400">
                    *Conditions Apply.{" "}
                    <a
                      className="text-techpay-primary underline-offset-4 transition hover:text-techpay-pink hover:underline"
                      href="#earnings-calculator"
                    >
                      View calculator
                    </a>
                  </p>
                ) : null}
              </div>
            ))}
          </div>
        </div>

        
      </div>
    </section>
  );
}

function HeroMotionLines() {
  return (
    <div
      className="pointer-events-none absolute inset-0 z-0 opacity-70"
      aria-hidden="true"
    >
      <svg
        className="hero-motion-svg"
        viewBox="0 0 1440 920"
        preserveAspectRatio="none"
      >
        <path
          className="hero-motion-line"
          d="M 1460 182 H 1200 Q 1110 182 1110 104 V -20"
          pathLength="100"
        />
        <path
          className="hero-motion-trace hero-motion-trace--one"
          d="M 1460 182 H 1200 Q 1110 182 1110 104 V -20"
          pathLength="100"
        />

        <path
          className="hero-motion-line"
          d="M -20 182 H 144 Q 220 182 220 104 V -20"
          pathLength="100"
        />
        <path
          className="hero-motion-trace hero-motion-trace--two"
          d="M -20 182 H 144 Q 220 182 220 104 V -20"
          pathLength="100"
        />

        <path
          className="hero-motion-line"
          d="M -20 470 H 128 Q 240 470 240 582 V 786 Q 240 860 314 860 H 438 Q 510 860 510 940"
          pathLength="100"
        />
        <path
          className="hero-motion-trace hero-motion-trace--three"
          d="M -20 470 H 128 Q 240 470 240 582 V 786 Q 240 860 314 860 H 438 Q 510 860 510 940"
          pathLength="100"
        />

        <path
          className="hero-motion-line"
          d="M 980 940 V 760 Q 980 676 1064 676 H 1368 Q 1440 676 1440 604 V 520"
          pathLength="100"
        />
        <path
          className="hero-motion-trace hero-motion-trace--four"
          d="M 980 940 V 760 Q 980 676 1064 676 H 1368 Q 1440 676 1440 604 V 520"
          pathLength="100"
        />
      </svg>
    </div>
  );
}

function BenefitsSection() {
  return (
    <section
      id="why-join"
      className="relative overflow-hidden bg-[#f7f7fb] px-5 py-20 md:px-[60px] md:py-24"
    >
      <div className="mx-auto max-w-[1240px]">
        <SectionHeading
          eyebrow="Why Associate Retailers Win"
          title={
            <>
              Your skills. Our platform.
              <br />
              Your earnings.
            </>
          }
        />

        <FeaturesSectionDemo1
          className="mt-12"
          columnsClassName="md:grid-cols-2 xl:grid-cols-3"
          contentClassName="min-h-[260px]"
          iconPlacement="top"
          items={benefits.map((benefit, index) => {
            const Icon = benefit.Icon;
            const classes = benefitCardClasses[benefit.tone];

            return {
              title: benefit.title,
              description: benefit.description,
              highlight: benefit.highlight,
              icon: <Icon className="h-6 w-6" aria-hidden="true" />,
              accentClass: toneClasses[benefit.tone],
              borderClass: classes.borderClass,
              glowClass: classes.glowClass,
              highlightClass: classes.highlightClass,
              pattern: [
                [7, 1],
                [8, 3],
                [10, 2],
                [11, 5],
                [13, index + 1],
              ],
            };
          })}
          numberPlacement="corner"
        />
      </div>
    </section>
  );
}

function JourneySection() {
  return (
    <section className="bg-white px-5 py-20 md:px-[60px] md:py-24">
      <div className="mx-auto max-w-[1240px]">
        <SectionHeading
          eyebrow="Simple 5-Step Journey"
          title={
            <>
              From sign-up to first payout
              <br />
              in under a week.
            </>
          }
        />

        <OfficeFeatureGrid
          className="mt-12"
          desktopColumns={5}
          features={journeyFeatureItems}
        />
      </div>
    </section>
  );
}

function CoverageSection() {
  return (
    <section className="bg-slate-100 px-5 py-20 md:px-[60px] md:py-24">
      <div className="mx-auto max-w-[1240px]">
        <SectionHeading
          eyebrow="National Coverage"
          title={
            <>
              From metros to mandis —
              <br />
              we&apos;re building everywhere.
            </>
          }
          description="We're recruiting Associate Retailers across T1 through T4 cities. Partner with Us. Growth with Us."
        />

        <OfficeFeatureGrid
          className="mt-12"
          desktopColumns={4}
          features={coverageFeatureItems}
        />
      </div>
    </section>
  );
}

function SummaryCtaSection() {
  return (
    <section className="relative isolate overflow-hidden bg-techpay-bg px-5 py-16 text-white md:px-[60px] md:py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(237,29,95,0.2),transparent_32%),linear-gradient(135deg,#010101_0%,#160718_58%,#010101_100%)]" />
      <HeroMotionLines />
      <div className="relative z-10 mx-auto flex max-w-[1240px] flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div className="max-w-3xl">
          <p className="mb-4 text-xs font-bold uppercase text-techpay-primary">
            Ready to start
          </p>
          <h2 className="font-display text-3xl font-bold leading-tight text-white md:text-5xl">
            Bring TechPay.ai to your city.
          </h2>
          <p className="mt-5 max-w-2xl text-sm leading-8 text-slate-300 md:text-base">
            Apply to start earning as an Associate Retailer, or join the
            community to connect with the TechPay network first.
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row md:justify-end">
          <ButtonLink
            className="!rounded-full !text-white [&_span]:!text-white"
            href="/associate-retailer/apply"
            size="lg"
            variant="primary"
          >
            Apply Now
          </ButtonLink>
          <ButtonLink
            className="!rounded-full !border-white/20 !bg-white/8 !text-white hover:!border-techpay-primary/45 hover:!bg-white/12 [&_span]:!text-white"
            href="/associate-retailer/community"
            size="lg"
            variant="secondary"
          >
            Join the Community
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}

function SectionHeading({
  description,
  eyebrow,
  title,
}: {
  description?: string;
  eyebrow: string;
  title: React.ReactNode;
}) {
  return (
    <div className="max-w-[780px] text-left">
      <p className="mb-4 text-xs font-bold uppercase text-techpay-primary">
        {eyebrow}
      </p>
      <h2 className="font-display text-3xl font-bold leading-tight text-slate-950 md:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-sm leading-8 text-slate-600 md:text-base">
          {description}
        </p>
      ) : null}
    </div>
  );
}
