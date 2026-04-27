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
      "Get a commission on every device sold through your TechPay QR code or referral link. No targets. No pressure. The more you recommend, the more you earn.",
    highlight: "₹500–₹2,500 per device sold",
    Icon: CircleDollarSign,
    tone: "primary",
  },
  {
    title: "Your Own TechPay QR",
    description:
      "Get a personalized QR code tied to your profile. Show it to customers. Every scan is tracked. Every purchase is credited to you — automatically.",
    highlight: "Instant setup. Zero tech skills needed.",
    Icon: QrCode,
    tone: "pink",
  },
  {
    title: "AI Does the Heavy Lifting",
    description:
      "Our AI recommends the perfect device for each customer based on their needs. You don't need to memorise specs — just share your QR and let the platform do the selling.",
    highlight: "Smarter recommendations than any showroom",
    Icon: Bot,
    tone: "purple",
  },
  {
    title: "Zero Inventory, Zero Risk",
    description:
      "You never hold stock. Devices ship directly from distributors to your customer's door. Your job is to introduce and recommend — we handle everything else.",
    highlight: "No stock. No investment. No risk.",
    Icon: PackageCheck,
    tone: "pink",
  },
  {
    title: "Trusted Advisor Status",
    description:
      "Become the go-to person in your PIN code for technology purchases. Build a loyal customer base that returns for support — and buys again through you.",
    highlight: "Grow from technician to tech entrepreneur",
    Icon: Trophy,
    tone: "primary",
  },
  {
    title: "EMI Financing for Your Customers",
    description:
      "Offer your customers flexible payment plans with fast approval. Remove the biggest barrier to purchase — upfront cost — and watch your conversion rate soar.",
    highlight: "Instant approvals. No paperwork for you.",
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
      "Track every scan, every lead, every sale, and every rupee earned — in real time on your phone. Complete transparency. Weekly payouts direct to your bank.",
    highlight: "Weekly bank transfers. Always on time.",
    Icon: ChartNoAxesCombined,
    tone: "pink",
  },
];

const journeySteps = [
  {
    title: "Apply Online",
    description:
      "Fill the associate partner form with your background and business details. Takes 5 minutes.",
  },
  {
    title: "KYC Verification",
    description:
      "We verify your Aadhaar, PAN, and bank account. Usually done within 48 hours.",
  },
  {
    title: "Get Your QR",
    description:
      "Receive your personalized TechPay QR code, certificate, and welcome kit digitally.",
  },
  {
    title: "Start Referring",
    description:
      "Show your QR to customers. Guide them. Our AI and team close the deal — you get the credit.",
  },
  {
    title: "Get Paid Weekly",
    description:
      "Earnings transfer to your bank every Friday. No delays. No minimums. Full transparency.",
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
    tone: "primary",
  },
  {
    label: "Tier 2 — Major Cities",
    count: "50+",
    cities:
      "Jaipur · Surat · Lucknow · Kochi · Chandigarh · Indore · Coimbatore · Nagpur + more",
    tone: "primary",
  },
  {
    label: "Tier 3 — Growing Towns",
    count: "150+",
    cities:
      "District capitals and growing towns across all states. First-mover advantage for early partners.",
    tone: "purple",
  },
  {
    label: "Tier 4 — Deep India",
    count: "100+",
    cities:
      "Semi-urban and rural centres with strong RMA & computer service presence. High demand, low competition.",
    tone: "pink",
  },
] as const;

const testimonials = [
  {
    quote:
      "I've been doing laptop repairs in Patna for 8 years. Never thought I could make commission on new sales too. TechPay changed that. My customers ask me what to buy anyway — now I get paid for it.",
    initials: "RS",
    name: "Rajesh Singh",
    role: "RMA Technician · Patna, Bihar",
    earnings: "Earned ₹18,400 in first 2 months",
    colorClass: "bg-techpay-primary",
  },
  {
    quote:
      "I run a small IT support shop in Coimbatore. My walk-in customers always ask for laptop recommendations. Now instead of sending them to a showroom, I scan my QR — and get 2% on every device. It's passive income on top of my repair business.",
    initials: "MK",
    name: "Meena Krishnan",
    role: "IT Support · Coimbatore, TN",
    earnings: "₹23,000+ earned last month",
    colorClass: "bg-techpay-purple",
  },
  {
    quote:
      "In Meerut, people trust local technicians more than big stores. With TechPay I became the trusted source for buying too. The EMI option is a game-changer — everyone can afford it now.",
    initials: "AV",
    name: "Amit Verma",
    role: "Computer Service · Meerut, UP",
    earnings: "12 sales in first month · ₹14,200 earned",
    colorClass: "bg-techpay-pink",
  },
] as const;

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
    highlightClass: "bg-techpay-purple/8 text-techpay-purple",
  },
  pink: {
    borderClass: "border-techpay-pink/22",
    glowClass: "bg-techpay-pink/16",
    highlightClass: "bg-techpay-pink/12 text-techpay-primary",
  },
} as const;

export default function AssociateRetailerPage() {
  return (
    <main className="bg-[#f7f7fb] text-slate-950">
      <AssociateHero />
      <AssociateSectionNav />
      <BenefitsSection />
      <AssociateEarningsCalculator />
      <JourneySection />
      <CoverageSection />
      <TestimonialsSection />
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
            You fix computers. You know customers. You are trusted in your
            community. TechPay.ai gives you a QR code and a platform to sell the
            right laptop to every customer — and earn on every sale.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {heroStats.map((stat) => (
              <div
                key={stat.label}
                className="border-l-2 border-techpay-primary pl-4"
              >
                <p className="text-2xl font-bold text-white">{stat.value}</p>
                <p className="mt-1 text-xs text-slate-400">{stat.label}</p>
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

function AssociateSectionNav() {
  return (
    <nav
      aria-label="Associate retailer sections"
      className="relative z-10 border-b border-slate-200 bg-white px-5 py-4 md:px-[60px]"
    >
      <div className="mx-auto flex max-w-[1240px] flex-wrap items-center gap-3">
        <LocalAnchor href="/associate-retailer/apply">Apply Now</LocalAnchor>
        <LocalAnchor href="/associate-retailer/community">Community</LocalAnchor>
     
      </div>
    </nav>
  );
}

function LocalAnchor({
  children,
  emphasis,
  href,
}: {
  children: React.ReactNode;
  emphasis?: boolean;
  href: string;
}) {
  return (
    <ButtonLink
      className={
        emphasis
          ? "!text-white [&_span]:!text-white"
          : "!bg-slate-50 !text-slate-700 hover:!text-slate-950 [&_span]:!text-current"
      }
      href={href}
      size={emphasis ? "compact" : "market"}
      variant={emphasis ? "primary" : "lightIcon"}
    >
      {children}
    </ButtonLink>
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
          description="You already have the trust of your local customers. We add the AI recommendations, flexible financing, and logistics. You just make the introduction — and earn every time."
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
          description="We're recruiting Associate Retailers across T1 through T4 cities. You know your city. We'll give you the platform."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {cityTiers.map((tier) => (
            <article
              key={tier.label}
              className="relative overflow-hidden rounded-[22px] border border-slate-200 bg-white p-6 text-center shadow-[0_18px_48px_rgba(15,23,42,0.06)]"
            >
              <div
                className={`absolute inset-x-0 bottom-0 h-1 ${
                  tier.tone === "primary"
                    ? "bg-techpay-primary"
                    : tier.tone === "purple"
                        ? "bg-techpay-purple"
                        : "bg-techpay-pink"
                }`}
              />
              <p
                className={`text-xs font-bold uppercase ${
                  tier.tone === "primary"
                    ? "text-techpay-primary"
                    : tier.tone === "purple"
                        ? "text-techpay-purple"
                        : "text-techpay-primary"
                }`}
              >
                {tier.label}
              </p>
              <h3 className="mt-3 text-4xl font-bold text-slate-950">
                {tier.count}
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                {tier.cities}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-sm leading-7 text-slate-600">
            Target:{" "}
            <strong className="text-slate-950">
              15,000 PIN Codes · 300+ Cities · 10,000+ Associate Retailers
            </strong>
          </p>
          <ButtonLink
            className="mt-5 !text-white [&_span]:!text-white"
            href="/associate-retailer/apply"
            size="md"
            variant="primary"
          >
            Check availability in your city →
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  return (
    <section className="bg-[#f7f7fb] px-5 py-20 md:px-[60px] md:py-24">
      <div className="mx-auto max-w-[1240px]">
        <SectionHeading
          eyebrow="Early Partner Stories"
          title={
            <>
              People just like you are
              <br />
              already earning.
            </>
          }
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="rounded-[22px] border border-slate-200 bg-white p-6 shadow-[0_18px_48px_rgba(15,23,42,0.07)]"
            >
              <p className="text-sm italic leading-8 text-slate-600">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="mt-6 flex items-center gap-3">
                <span
                  className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white ${testimonial.colorClass}`}
                >
                  {testimonial.initials}
                </span>
                <div>
                  <h3 className="text-sm font-bold text-slate-950">
                    {testimonial.name}
                  </h3>
                  <p className="mt-1 text-xs text-slate-500">
                    {testimonial.role}
                  </p>
                </div>
              </div>
              <p className="mt-5 rounded-xl bg-techpay-primary/8 px-4 py-3 text-sm font-semibold text-techpay-primary">
                {testimonial.earnings}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <ButtonLink
            className="!text-white [&_span]:!text-white"
            href="/associate-retailer/apply"
            size="md"
            variant="primary"
          >
            Join them — Apply now →
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
