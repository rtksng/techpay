"use client";

import { useEffect, useRef, useState } from "react";
import type { LucideIcon } from "lucide-react";
import {
  BarChart3,
  Globe,
  ShieldCheck,
  Store,
  TrendingUp,
} from "lucide-react";
import { cn } from "@/lib/utils";

type BenefitCardItem = {
  title: string;
  description?: string;
  Icon: LucideIcon;
};

const marketReachItems: BenefitCardItem[] = [
  {
    title: "Virtual shelf showcases every model in your portfolio",
    Icon: Globe,
  },
  {
    title: "Tier 2/3 cities access products previously out of reach",
    Icon: Globe,
  },
  {
    title: "New launches distributed to all retail partners instantly",
    Icon: Globe,
  },
  {
    title: "No geographic inventory constraint on sell-through",
    Icon: Globe,
  },
];

const aspItems: BenefitCardItem[] = [
  {
    title: "Feature-Led Upgrades",
    description:
      "Side-by-side specs show buyers why better models are worth it.",
    Icon: TrendingUp,
  },
  {
    title: "Credit-Enabled Access",
    description:
      "Embedded finance removes price barriers to premium purchases.",
    Icon: TrendingUp,
  },
  {
    title: "AI Accessories Bundling",
    description:
      "Platform surfaces relevant accessories at the right purchase moment.",
    Icon: TrendingUp,
  },
  {
    title: "Improved Revenue Per Unit",
    description:
      "ASP and attach rates rise across all participating retailers.",
    Icon: TrendingUp,
  },
];

const intelligenceItems: BenefitCardItem[] = [
  {
    title: "Live purchase analytics by product, region and retailer",
    Icon: BarChart3,
  },
  {
    title: "Consumer preference insights to refine your product mix",
    Icon: BarChart3,
  },
  {
    title: "Demand signals to inform inventory and launch planning",
    Icon: BarChart3,
  },
  {
    title: "Competitive sell-through benchmarks across the channel",
    Icon: BarChart3,
  },
];

const returnsItems: BenefitCardItem[] = [
  {
    title: "AI-Guided Product Fit",
    description:
      "Platform matches buyers to the right model — reducing misfit returns.",
    Icon: ShieldCheck,
  },
  {
    title: "Lower RMA Rates",
    description:
      "Fewer inappropriate purchases means less warranty and return processing.",
    Icon: ShieldCheck,
  },
  {
    title: "Efficient Warranty Workflow",
    description:
      "Streamlined helpdesk reduces escalation cost to your support team.",
    Icon: ShieldCheck,
  },
  {
    title: "Brand Reputation Protected",
    description:
      "Happier customers and fewer bad purchases protect brand NPS.",
    Icon: ShieldCheck,
  },
];

const brandConsistencyItems: BenefitCardItem[] = [
  {
    title: "Unified pricing enforced across all participating retailers",
    Icon: Store,
  },
  {
    title: "Consistent product messaging and feature communication",
    Icon: Store,
  },
  {
    title: "Controlled digital brand experience at every touchpoint",
    Icon: Store,
  },
  {
    title: "Premium feel maintained regardless of retailer size",
    Icon: Store,
  },
];

const panels = [
  {
    id: "expanded-market-reach",
    eyebrow: "Benefit 01",
    title: "Expanded Market Reach",
    description:
      "TechPay extends your brand reach far beyond physical shelf space. Reach Tier 2/3 markets, surface your full catalogue and accelerate new model sell-in.",
    bgClass: "bg-[#fbfbfe]",
    dark: false,
  },
  {
    id: "higher-asp-attach",
    eyebrow: "Benefit 02",
    title: "Higher ASP & Accessories Attach",
    description:
      "Guided selling drives premium choices and surfaces the right accessories. Increase revenue per transaction without any pushy sales tactics.",
    bgClass: "bg-[#fbfbfe]",
    dark: false,
  },
  {
    id: "real-time-intelligence",
    eyebrow: "Benefit 03",
    title: "Real-Time Market Intelligence",
    description:
      "TechPay captures live purchase data at every retail interaction. Understand what consumers are choosing, where, and why — in real time.",
    bgClass: "bg-[#fbfbfe]",
    dark: false,
  },
  {
    id: "reduced-returns",
    eyebrow: "Benefit 04",
    title: "Reduced Returns & Support Costs",
    description:
      "AI-guided buying means customers get the right product the first time. Fewer returns, lower RMA load and reduced after-sales support costs.",
    bgClass: "bg-[#fbfbfe]",
    dark: false,
  },
  {
    id: "brand-consistency",
    eyebrow: "Benefit 05",
    title: "Brand Consistency Across Retail",
    description:
      "TechPay ensures your brand, pricing and messaging stay consistent. Every retailer delivers the same premium product experience — at scale.",
    bgClass: "bg-[#fbfbfe]",
    dark: false,
  },
] as const;

const DESKTOP_BREAKPOINT = 1024;

export default function OemBenefitsShowcase() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [progress, setProgress] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setPrefersReducedMotion(mediaQuery.matches);
    const updateViewport = () =>
      setIsDesktop(window.innerWidth >= DESKTOP_BREAKPOINT);

    updatePreference();
    updateViewport();

    if (typeof mediaQuery.addEventListener === "function") {
      mediaQuery.addEventListener("change", updatePreference);
    } else {
      mediaQuery.addListener(updatePreference);
    }

    window.addEventListener("resize", updateViewport);

    return () => {
      if (typeof mediaQuery.removeEventListener === "function") {
        mediaQuery.removeEventListener("change", updatePreference);
      } else {
        mediaQuery.removeListener(updatePreference);
      }

      window.removeEventListener("resize", updateViewport);
    };
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (prefersReducedMotion || !isDesktop) {
      return;
    }

    let frame = 0;

    const updateProgress = () => {
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const maxScroll = Math.max(section.offsetHeight - window.innerHeight, 1);
      const scrolled = Math.min(Math.max(-rect.top, 0), maxScroll);
      setProgress(scrolled / maxScroll);
    };

    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(updateProgress);
    };

    updateProgress();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [isDesktop, prefersReducedMotion]);

  const shouldPinDesktop = isDesktop && !prefersReducedMotion;
  const displayProgress = shouldPinDesktop ? progress : 0;

  return (
    <>
      <div className={cn("space-y-8 lg:hidden", !shouldPinDesktop && "lg:space-y-0")}>
        {panels.map((panel, index) => (
          <section
            key={panel.id}
            id={panel.id}
            className={cn(
              "relative overflow-hidden px-5 py-20 md:px-[60px] md:py-24",
              panel.bgClass,
              !shouldPinDesktop && "lg:px-[60px] lg:py-24"
            )}
          >
            {renderPanel(panel, index)}
          </section>
        ))}
      </div>

      <section
        ref={sectionRef}
        className={cn("relative hidden lg:block", shouldPinDesktop ? "lg:block" : "lg:hidden")}
        style={{ height: shouldPinDesktop ? `${panels.length * 100}vh` : undefined }}
      >
        <div className="sticky top-0 h-screen overflow-hidden">
          <div
            className="flex h-full will-change-transform"
            style={{
              width: `${panels.length * 100}vw`,
              transform: `translate3d(-${displayProgress * (panels.length - 1) * 100}vw, 0, 0)`,
            }}
          >
            {panels.map((panel, index) => (
              <section
                key={panel.id}
                id={panel.id}
                className={cn(
                  "h-screen w-screen shrink-0 overflow-hidden px-[60px] pt-28 pb-16",
                  panel.bgClass
                )}
              >
                {renderPanel(panel, index)}
              </section>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function renderPanel(
  panel: (typeof panels)[number],
  index: number
) {
  const items = getPanelItems(panel.id);
  return (
    <div className="relative mx-auto flex h-full max-w-[1440px] flex-col justify-center gap-10">
      <div className="max-w-[760px]">
        <SectionHeading
          eyebrow={panel.eyebrow}
          title={panel.title}
          description={panel.description}
          dark={panel.dark}
          maxWidthClassName="max-w-[760px]"
        />
      </div>

      <BenefitCardsGrid items={items} panelIndex={index} />
    </div>
  );
}

function getPanelItems(panelId: (typeof panels)[number]["id"]) {
  if (panelId === "expanded-market-reach") return marketReachItems;
  if (panelId === "higher-asp-attach") return aspItems;
  if (panelId === "real-time-intelligence") return intelligenceItems;
  if (panelId === "reduced-returns") return returnsItems;
  return brandConsistencyItems;
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
          "font-display text-[clamp(2rem,4.4vw,3rem)] font-bold leading-[1.04] tracking-[-0.05em]",
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

function BenefitCardsGrid({
  items,
  panelIndex,
}: {
  items: BenefitCardItem[];
  panelIndex: number;
}) {
  return (
    <div
      className={cn(
        "relative z-10 grid overflow-hidden border border-slate-200/80 bg-white shadow-[0_22px_60px_rgba(15,23,42,0.08)]",
        items.length === 3 ? "md:grid-cols-3" : "md:grid-cols-2 lg:grid-cols-4"
      )}
    >
      {items.map((item, index) => (
        <BenefitFeatureCard
          key={item.title}
          item={item}
          index={index}
          itemCount={items.length}
          panelIndex={panelIndex}
        />
      ))}
    </div>
  );
}

function BenefitFeatureCard({
  item,
  index,
  itemCount,
  panelIndex,
}: {
  item: BenefitCardItem;
  index: number;
  itemCount: number;
  panelIndex: number;
}) {
  const isThreeColumn = itemCount === 3;

  return (
    <div
      className={cn(
        "group/feature relative flex h-full flex-col py-10",
        isThreeColumn
          ? "md:border-r md:border-slate-200/80"
          : "lg:border-r lg:border-slate-200/80",
        isThreeColumn
          ? index === 0 && "md:border-l md:border-slate-200/80"
          : (index === 0 || index === 4) && "lg:border-l lg:border-slate-200/80",
        !isThreeColumn && index < 4 && "lg:border-b lg:border-slate-200/80"
      )}
    >
      <div
        className={cn(
          "pointer-events-none absolute inset-0 h-full w-full opacity-0 transition duration-200 group-hover/feature:opacity-100",
          panelIndex % 2 === 0
            ? "bg-linear-to-t from-techpay-primary/8 via-techpay-purple/6 to-transparent"
            : "bg-linear-to-b from-techpay-orange/10 via-techpay-primary/6 to-transparent"
        )}
        aria-hidden="true"
      />

      <div className="relative z-10 mb-4 px-8 text-techpay-primary">
        <item.Icon className="h-6 w-6" />
      </div>

      <div className="relative z-10 mb-3 px-8 text-lg font-bold text-slate-950">
        <div className="absolute inset-y-0 left-0 h-6 w-1 rounded-tr-full rounded-br-full bg-slate-300 origin-center transition-all duration-200 group-hover/feature:h-8 group-hover/feature:bg-techpay-primary" />
        <span className="inline-block transition duration-200 group-hover/feature:translate-x-2">
          {item.title}
        </span>
      </div>

      {item.description ? (
        <div className="relative z-10 px-8 text-sm leading-6 text-slate-600">
          {item.description}
        </div>
      ) : null}
    </div>
  );
}
