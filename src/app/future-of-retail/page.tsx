import type { ComponentType, SVGProps } from "react";
import type { Metadata } from "next";
import Image from "next/image";
import {
  Bot,
  Boxes,
  ChartNoAxesCombined,
  CheckCircle2,
  Headset,
  Languages,
  PackageCheck,
  PanelsTopLeft,
  SearchCheck,
  ShieldCheck,
  Sparkles,
  Store,
  UsersRound,
  WalletCards,
} from "lucide-react";
import MarketAwareLinkButton from "@/app/_components/home/market-aware-link-button";
import { ButtonLink } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Future of Retail | TechPay.ai",
  description:
    "TechPay bridges both worlds - delivering the best of each in one intelligent platform.",
};

type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;
type ActionKind = "catalog" | "recommendation" | "eligibility" | "helpdesk";

const comparisonRows = [
  {
    feature: "Product Discovery",
    traditional: "Walk-in, staff help",
    ecommerce: "Search & scroll",
    phygital: "AI-guided conversation",
  },
  {
    feature: "Product Range",
    traditional: "Limited to shelf space",
    ecommerce: "Unlimited catalogue",
    phygital: "In-store + endless aisle",
  },
  {
    feature: "Personalisation",
    traditional: "Depends on staff",
    ecommerce: "Algorithm-based",
    phygital: "Real-time AI profiling",
  },
  {
    feature: "Financing",
    traditional: "In-store EMI only",
    ecommerce: "Online payment options",
    phygital: "Integrated at any touchpoint",
  },
  {
    feature: "After-sales Support",
    traditional: "Visit service centre",
    ecommerce: "Ticket / chat support",
    phygital: "Personalised IT helpdesk",
  },
  {
    feature: "Availability Check",
    traditional: "Ask a store associate",
    ecommerce: "Stock listed on site",
    phygital: "Live multi-warehouse visibility",
  },
  {
    feature: "Experience",
    traditional: "Touch & feel the product",
    ecommerce: "Images & reviews only",
    phygital: "Physical + digital enrichment",
  },
] as const;

const benefits: Array<{
  title: string;
  description: string;
  Icon: IconComponent;
  accentClass: string;
}> = [
  {
    title: "Always Connected",
    description:
      "Digital capabilities available on the shop floor - AI, live inventory, and real-time pricing at every touchpoint.",
    Icon: PanelsTopLeft,
    accentClass: "text-techpay-primary bg-techpay-primary/10 border-techpay-primary/20",
  },
  {
    title: "Every Persona Served",
    description:
      "From the tech-savvy gamer to the first-time laptop buyer - every visitor gets a tailored journey.",
    Icon: UsersRound,
    accentClass: "text-techpay-orange bg-techpay-orange/10 border-techpay-orange/20",
  },
  {
    title: "Zero Lost Sales",
    description:
      "If a product isn't on the shelf, endless aisle instantly surfaces it from the nearest warehouse.",
    Icon: PackageCheck,
    accentClass: "text-techpay-purple bg-techpay-purple/10 border-techpay-purple/20",
  },
  {
    title: "Faster Purchase Cycle",
    description:
      "AI cuts product discovery from hours to minutes, shortening the path from interest to invoice.",
    Icon: SearchCheck,
    accentClass: "text-techpay-primary bg-techpay-primary/10 border-techpay-primary/20",
  },
  {
    title: "Premium Experience",
    description:
      "Customers feel understood, not just sold to. Personalised recommendations build brand trust.",
    Icon: Sparkles,
    accentClass: "text-techpay-orange bg-techpay-orange/10 border-techpay-orange/20",
  },
  {
    title: "Data-Driven Retail",
    description:
      "Every interaction generates insights - footfall intent, popular configs, and lead quality - all in one dashboard.",
    Icon: ChartNoAxesCombined,
    accentClass: "text-techpay-purple bg-techpay-purple/10 border-techpay-purple/20",
  },
];

const heroFeatures: Array<{
  title: string;
  eyebrow: string;
  description: string;
  bullets: string[];
  ctaLabel: string;
  loadingLabel: string;
  kind: ActionKind;
  Icon: IconComponent;
  accent: "primary" | "orange" | "purple" | "pink";
}> = [
  {
    eyebrow: "AI Recommendations",
    title: "Right product. First time. Every time.",
    description:
      "Our conversational AI advisor profiles each shopper - student, professional, gamer, or family - and recommends the perfect HP product in under 3 minutes. Supports 6+ Indian languages including Hindi, Tamil, and Telugu.",
    bullets: [
      "Persona-aware conversation flow",
      "Multi-language support",
      "Voice & text input",
    ],
    ctaLabel: "Try the AI Advisor",
    loadingLabel: "Try the AI Advisor",
    kind: "recommendation",
    Icon: Bot,
    accent: "primary",
  },
  {
    eyebrow: "Endless Aisle Catalog",
    title: "Sell beyond the shelf.",
    description:
      "When a product isn't in store, TechPay surfaces real-time stock from Redington and Savex warehouses instantly. Retailers never lose a sale to an empty shelf again.",
    bullets: [
      "Live dual-warehouse visibility",
      "54+ HP SKUs always available",
      "In-store & warehouse filters",
    ],
    ctaLabel: "Browse the Catalog",
    loadingLabel: "Browse the Catalog",
    kind: "catalog",
    Icon: Boxes,
    accent: "orange",
  },
  {
    eyebrow: "Financing Options",
    title: "Make every budget work.",
    description:
      "Integrated EMI and BNPL options at the point of recommendation - not just at checkout. Customers discover financing as part of the buying conversation, removing the biggest barrier to high-ticket purchases.",
    bullets: [
      "In-chat EMI discovery",
      "No-cost EMI options",
      "Seamless checkout integration",
    ],
    ctaLabel: "Check Eligibility",
    loadingLabel: "Check Eligibility",
    kind: "eligibility",
    Icon: WalletCards,
    accent: "purple",
  },
  {
    eyebrow: "Personalised IT Helpdesk",
    title: "Support that knows your setup.",
    description:
      "After purchase, customers get access to a personalised IT helpdesk that already knows their device, configuration, and usage profile. No repeating yourself. No generic scripts.",
    bullets: [
      "Profile-aware support",
      "Device-specific guidance",
      "Proactive service alerts",
    ],
    ctaLabel: "Subscribe to Support",
    loadingLabel: "Subscribe to Support",
    kind: "helpdesk",
    Icon: Headset,
    accent: "pink",
  },
];

const experienceSteps = [
  {
    label: "Physical",
    title: "Touch, feel & experience products with expert staff.",
    Icon: Store,
  },
  {
    label: "Digital",
    title: "AI guidance, live stock, financing & endless range.",
    Icon: Languages,
  },
  {
    label: "Physical + Digital",
    title: "Physical + Digital = Phygital Experience",
    Icon: ShieldCheck,
  },
] as const;

const accentClasses = {
  primary: {
    line: "from-techpay-primary via-techpay-pink to-techpay-purple",
    icon: "border-techpay-primary/20 bg-techpay-primary/10 text-techpay-primary",
    glow: "shadow-[0_22px_70px_rgba(237,29,95,0.13)]",
  },
  orange: {
    line: "from-techpay-orange via-techpay-primary to-techpay-purple",
    icon: "border-techpay-orange/20 bg-techpay-orange/10 text-techpay-orange",
    glow: "shadow-[0_22px_70px_rgba(242,100,34,0.13)]",
  },
  purple: {
    line: "from-techpay-purple via-techpay-primary to-techpay-orange",
    icon: "border-techpay-purple/20 bg-techpay-purple/10 text-techpay-purple",
    glow: "shadow-[0_22px_70px_rgba(147,38,143,0.13)]",
  },
  pink: {
    line: "from-techpay-pink via-techpay-primary to-techpay-orange",
    icon: "border-techpay-pink/20 bg-techpay-pink/10 text-techpay-pink",
    glow: "shadow-[0_22px_70px_rgba(219,130,182,0.13)]",
  },
} as const;

const publicBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

function publicAsset(path: `/${string}`) {
  return `${publicBasePath}${path}`;
}

export default function FutureOfRetailPage() {
  return (
    <main className="relative overflow-hidden bg-techpay-bg text-techpay-text">
      <FutureRetailHero />
      <PhygitalDefinitionSection />
      <ComparisonSection />
      <BenefitsSection />
      <QuoteSection />
      <HeroFeaturesSection />
      <FinalCtaSection />
    </main>
  );
}

function FutureRetailHero() {
  return (
    <section className="relative isolate flex min-h-[86svh] items-center overflow-hidden bg-black px-5 pb-16 pt-32 md:px-10 md:pb-20 md:pt-36 lg:px-[60px]">
      <div className="absolute inset-0 bg-[linear-gradient(90deg,#010101_0%,rgba(1,1,1,0.9)_34%,rgba(1,1,1,0.54)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(1,1,1,0.22)_0%,rgba(1,1,1,0.05)_45%,#010101_100%)]" />
      <HeroMotionLines />

      <div className="relative z-10 mx-auto w-full max-w-[1440px]">
        <div className="max-w-[930px]">
          <p className="mb-5 text-sm font-semibold uppercase text-techpay-primary">
            The Future of Retail
          </p>
          <h1 className="font-display text-[2.45rem] font-bold leading-[1.04] text-white sm:text-[3rem] md:text-[3.6rem] xl:text-[4.05rem] 2xl:text-[4.65rem]">
            The gap between physical stores and eCommerce is closing.
          </h1>
          <p className="mt-6 max-w-[680px] text-base leading-8 text-white/74 md:text-[1.05rem]">
            TechPay bridges both worlds - delivering the best of each in one
            intelligent platform.
          </p>
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

function PhygitalDefinitionSection() {
  return (
    <section
      id="phygital"
      className="relative bg-[#f7f7fb] px-5 py-16 text-slate-950 md:px-10 md:py-24 lg:px-[60px]"
    >
      <div className="mx-auto grid max-w-[1440px] gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(320px,0.54fr)] lg:items-center">
        <div>
          <p className="mb-4 text-sm font-semibold uppercase text-techpay-primary">
            New Retail Paradigm
          </p>
          <h2 className="max-w-3xl font-display text-[2.05rem] font-bold leading-[1.1] text-slate-950 md:text-[2.65rem] xl:text-[3rem]">
            What is a Phygital Store?
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600 md:text-[1.05rem]">
            A Phygital store blends the physical retail environment with digital
            technology to create a seamless, enriched shopping experience
            - without forcing the customer to choose between the two.
          </p>
          <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600 md:text-[1.05rem]">
            The result: customers get the human touch of physical retail and
            the convenience of digital commerce simultaneously.
          </p>
        </div>

        <div className="grid gap-3">
          {experienceSteps.map((step) => (
            <article
              key={step.label}
              className="relative overflow-hidden border border-slate-200 bg-white p-5 shadow-[0_18px_48px_rgba(15,23,42,0.08)]"
            >
              <div className="flex items-start gap-4">
                <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center border border-techpay-primary/14 bg-techpay-primary/8 text-techpay-primary">
                  <step.Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-sm font-semibold uppercase text-slate-500">
                    {step.label}
                  </p>
                  <h3 className="mt-1 font-display text-[1.15rem] font-semibold leading-snug text-slate-950 md:text-xl">
                    {step.title}
                  </h3>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ComparisonSection() {
  return (
    <section className="relative bg-white px-5 py-16 text-slate-950 md:px-10 md:py-24 lg:px-[60px]">
      <div className="mx-auto max-w-[1440px]">
        <div className="max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase text-techpay-primary">
            Traditional Store vs eCommerce vs Phygital
          </p>
          <h2 className="font-display text-[2.05rem] font-bold leading-[1.1] text-slate-950 md:text-[2.65rem] xl:text-[3rem]">
            Traditional Store vs eCommerce vs Phygital
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600">
            See how a phygital approach resolves the limitations of both
            traditional retail and online commerce.
          </p>
        </div>

        <div className="mt-10 overflow-hidden border border-slate-200 shadow-[0_24px_70px_rgba(15,23,42,0.08)]">
          <div className="overflow-x-auto">
            <div className="grid min-w-[860px] grid-cols-[1fr_1.1fr_1.1fr_1.2fr] bg-slate-950 text-sm font-semibold uppercase text-white">
              <div className="border-r border-white/10 p-4">Feature</div>
              <div className="border-r border-white/10 p-4">Traditional Store</div>
              <div className="border-r border-white/10 p-4">eCommerce</div>
              <div className="p-4 text-techpay-pink">Phygital</div>
            </div>
            <div className="min-w-[860px] divide-y divide-slate-200 bg-white">
              {comparisonRows.map((row) => (
                <div
                  key={row.feature}
                  className="grid grid-cols-[1fr_1.1fr_1.1fr_1.2fr] text-sm text-slate-700 md:text-base"
                >
                  <div className="border-r border-slate-200 p-4 font-semibold text-slate-950">
                    {row.feature}
                  </div>
                  <div className="border-r border-slate-200 p-4">{row.traditional}</div>
                  <div className="border-r border-slate-200 p-4">{row.ecommerce}</div>
                  <div className="bg-[#fff7fb] p-4 font-semibold text-slate-950">
                    {row.phygital}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function BenefitsSection() {
  return (
    <section className="relative bg-[#f7f7fb] px-5 py-16 text-slate-950 md:px-10 md:py-24 lg:px-[60px]">
      <div className="mx-auto max-w-[1440px]">
        <div className="max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase text-techpay-primary">
            Benefits of a Phygital Store
          </p>
          <h2 className="font-display text-[2.05rem] font-bold leading-[1.1] text-slate-950 md:text-[2.65rem] xl:text-[3rem]">
            Benefits of a Phygital Store
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600">
            For retailers, brands, and customers alike - the phygital model
            changes what&apos;s possible in a store.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {benefits.map((benefit) => (
            <article
              key={benefit.title}
              className="group relative min-h-[250px] overflow-hidden border border-slate-200 bg-white p-6 shadow-[0_20px_58px_rgba(15,23,42,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_72px_rgba(15,23,42,0.12)] md:p-7"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-linear-to-r from-techpay-primary via-techpay-pink to-techpay-orange" />
              <span
                className={`inline-flex h-13 w-13 items-center justify-center border ${benefit.accentClass}`}
              >
                <benefit.Icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="mt-6 font-display text-[1.35rem] font-bold leading-tight text-slate-950 md:text-2xl">
                {benefit.title}
              </h3>
              <p className="mt-3 text-base leading-7 text-slate-600">
                {benefit.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function QuoteSection() {
  return (
    <section className="relative overflow-hidden bg-techpay-bg px-5 py-16 md:px-10 md:py-24 lg:px-[60px]">
      <div className="mx-auto  max-w-[1440px]  lg:items-center">
        {/* <div className="relative aspect-[4/3] overflow-hidden border border-white/10 bg-white/5">
          <Image
            src={publicAsset("/members/praveen_sahai.png")}
            alt="Praveen Sahai"
            fill
            sizes="(max-width: 1024px) 100vw, 520px"
            className="object-cover"
          />
        </div> */}
        <figure>
          <blockquote className="font-display text-[1.85rem] font-semibold leading-[1.12] text-white">
            TechPay.ai challenges the siloed nature of retail technology by
            focusing on the customer experience as a single, continuous journey
            rather than fragmented layers. Built on principles of visibility,
            confidence, and continuity, the platform integrates AI-driven
            product recommendations, inventory transparency, embedded financing,
            and post-sale support to foster a trustworthy, unified ecosystem.
          </blockquote>
          <figcaption className="mt-8 border-l-2 border-techpay-primary pl-5">
            <p className="font-display text-xl font-semibold text-white">
              Praveen Sahai
            </p>
            <p className="text-sm text-techpay-muted">CEO, TechPay.ai</p>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

function HeroFeaturesSection() {
  return (
    <section className="relative bg-white px-5 py-16 text-slate-950 md:px-10 md:py-24 lg:px-[60px]">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.7fr)_minmax(260px,0.3fr)] lg:items-end">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase text-techpay-primary">
              TechPay&apos;s Hero Features
            </p>
            <h2 className="font-display text-[2.05rem] font-bold leading-[1.1] text-slate-950 md:text-[2.65rem] xl:text-[3rem]">
              Four capabilities that make TechPay the most complete phygital
              platform for HP retail.
            </h2>
          </div>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {heroFeatures.map((feature) => (
            <FeatureCard key={feature.eyebrow} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ feature }: { feature: (typeof heroFeatures)[number] }) {
  const classes = accentClasses[feature.accent];

  return (
    <article
      className={`relative overflow-hidden border border-slate-200 bg-[#fbfbff] p-6 transition duration-300 hover:-translate-y-1 md:p-8 ${classes.glow}`}
    >
      <div className={`absolute inset-x-0 top-0 h-1 bg-linear-to-r ${classes.line}`} />
      <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
        <span
          className={`inline-flex h-14 w-14 shrink-0 items-center justify-center border ${classes.icon}`}
        >
          <feature.Icon className="h-6 w-6" aria-hidden="true" />
        </span>
        <div>
          <p className="text-sm font-semibold uppercase text-techpay-primary">
            {feature.eyebrow}
          </p>
          <h3 className="mt-2 font-display text-[1.55rem] font-bold leading-tight text-slate-950 md:text-[1.85rem]">
            {feature.title}
          </h3>
          <p className="mt-4 text-base leading-8 text-slate-600">
            {feature.description}
          </p>
        </div>
      </div>

      <ul className="mt-7 grid gap-3">
        {feature.bullets.map((bullet) => (
          <li key={bullet} className="flex gap-3 text-sm leading-6 text-slate-700">
            <CheckCircle2
              className="mt-0.5 h-5 w-5 shrink-0 text-techpay-primary"
              aria-hidden="true"
            />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>

      <MarketAwareLinkButton
        kind={feature.kind}
        label={feature.ctaLabel}
        loadingLabel={feature.loadingLabel}
        className="mt-8"
        size="md"
      />
    </article>
  );
}

function FinalCtaSection() {
  return (
    <section className="relative overflow-hidden bg-techpay-bg px-5 py-16 md:px-10 md:py-24 lg:px-[60px]">
      <div className="absolute inset-0 opacity-25" aria-hidden="true">
        <Image
          src={publicAsset("/assets/inner-image-laptop2.jpg")}
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-top"
        />
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(90deg,#010101_0%,rgba(1,1,1,0.88)_54%,rgba(1,1,1,0.68)_100%)]" />

      <div className="relative z-10 mx-auto max-w-[1440px]">
        <div className="max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase text-techpay-primary">
            Experience All Four Features Today
          </p>
          <h2 className="font-display text-[2.05rem] font-bold leading-[1.1] text-white md:text-[2.65rem] xl:text-[3rem]">
            Start with the AI advisor, browse the endless aisle, explore
            financing, and discover personalised support - all in one platform.
          </h2>
          <div className="mt-9 flex">
            <ButtonLink
              href="/coming-soon"
              size="md"
              variant="secondary"
            >
              Contact Us
            </ButtonLink>
          </div>
        </div>

        <div className="mt-10 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          {heroFeatures.map((feature) => (
            <div
              key={feature.eyebrow}
              className="border border-white/10 bg-white/6 p-5 text-white backdrop-blur-xl"
            >
              <feature.Icon
                className="h-6 w-6 text-techpay-primary"
                aria-hidden="true"
              />
              <p className="mt-4 font-display text-[1.1rem] font-semibold md:text-xl">
                {feature.eyebrow}
              </p>
              <p className="mt-3 text-sm leading-6 text-white/68">
                {feature.title}
              </p>
              <p className="mt-4 text-sm font-semibold text-techpay-primary">
                {feature.ctaLabel}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
