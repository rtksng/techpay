import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import {
  IconAdjustmentsBolt,
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconHeart,
  IconHelp,
  IconRouteAltLeft,
  IconTerminal2,
} from "@tabler/icons-react";

export type FeatureSectionItem = {
  title: string;
  description: ReactNode;
  icon?: ReactNode;
  hoverClassName?: string;
};

const defaultFeatures: FeatureSectionItem[] = [
  {
    title: "Built for developers",
    description:
      "Built for engineers, developers, dreamers, thinkers and doers.",
    icon: <IconTerminal2 className="h-6 w-6" stroke={1.8} />,
  },
  {
    title: "Ease of use",
    description:
      "It's as easy as using an Apple, and as expensive as buying one.",
    icon: <IconEaseInOut className="h-6 w-6" stroke={1.8} />,
  },
  {
    title: "Pricing like no other",
    description:
      "Our prices are best in the market. No cap, no lock, no credit card required.",
    icon: <IconCurrencyDollar className="h-6 w-6" stroke={1.8} />,
  },
  {
    title: "100% Uptime guarantee",
    description: "We just cannot be taken down by anyone.",
    icon: <IconCloud className="h-6 w-6" stroke={1.8} />,
  },
  {
    title: "Multi-tenant Architecture",
    description: "You can simply share passwords instead of buying new seats",
    icon: <IconRouteAltLeft className="h-6 w-6" stroke={1.8} />,
  },
  {
    title: "24/7 Customer Support",
    description:
      "We are available a 100% of the time. Atleast our AI Agents are.",
    icon: <IconHelp className="h-6 w-6" stroke={1.8} />,
  },
  {
    title: "Money back guarantee",
    description:
      "If you donot like EveryAI, we will convince you to like us.",
    icon: <IconAdjustmentsBolt className="h-6 w-6" stroke={1.8} />,
  },
  {
    title: "And everything else",
    description: "I just ran out of copy ideas. Accept my sincere apologies",
    icon: <IconHeart className="h-6 w-6" stroke={1.8} />,
  },
];

const fallbackIcons = [
  <IconTerminal2 key="terminal" className="h-6 w-6" stroke={1.8} />,
  <IconCloud key="cloud" className="h-6 w-6" stroke={1.8} />,
  <IconRouteAltLeft key="route" className="h-6 w-6" stroke={1.8} />,
  <IconHelp key="help" className="h-6 w-6" stroke={1.8} />,
  <IconCurrencyDollar key="currency" className="h-6 w-6" stroke={1.8} />,
  <IconEaseInOut key="ease" className="h-6 w-6" stroke={1.8} />,
  <IconAdjustmentsBolt key="adjustments" className="h-6 w-6" stroke={1.8} />,
  <IconHeart key="heart" className="h-6 w-6" stroke={1.8} />,
];

type FeaturesSectionDemoProps = {
  features?: FeatureSectionItem[];
  className?: string;
  desktopColumns?: 4 | 5;
};

export default function FeaturesSectionDemo({
  features = defaultFeatures,
  className,
  desktopColumns = 4,
}: FeaturesSectionDemoProps) {
  const desktopGridClass =
    desktopColumns === 5 ? "lg:grid-cols-5" : "lg:grid-cols-4";

  return (
    <div
      className={cn(
        "relative z-10 mx-auto grid  grid-cols-1 overflow-hidden  border border-slate-200/80 bg-white md:grid-cols-2",
        desktopGridClass,
        className
      )}
    >
      {features.map((feature, index) => (
        <Feature
          key={feature.title}
          {...feature}
          icon={feature.icon ?? fallbackIcons[index % fallbackIcons.length]}
          index={index}
          itemCount={features.length}
          desktopColumns={desktopColumns}
        />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  hoverClassName,
  index,
  itemCount,
  desktopColumns,
}: {
  title: string;
  description: ReactNode;
  icon: ReactNode;
  hoverClassName?: string;
  index: number;
  itemCount: number;
  desktopColumns: 4 | 5;
}) => {
  const isFirstDesktopColumn = index % desktopColumns === 0;
  const isFirstDesktopRow = index < desktopColumns;
  const shouldShowDesktopBottomBorder =
    desktopColumns === 4 ? index < 4 : index + desktopColumns < itemCount;
  const defaultHoverClassName = isFirstDesktopRow
    ? "bg-linear-to-t from-techpay-primary/8 via-techpay-purple/6 to-transparent"
    : "bg-linear-to-b from-techpay-orange/10 via-techpay-primary/6 to-transparent";

  return (
    <div
      className={cn(
        "group/feature relative flex h-full flex-col py-10",
        "lg:border-r lg:border-slate-200/80",
        isFirstDesktopColumn && "lg:border-l lg:border-slate-200/80",
        shouldShowDesktopBottomBorder && "lg:border-b lg:border-slate-200/80"
      )}
    >
      <div
        className={cn(
          "pointer-events-none absolute inset-0 h-full w-full opacity-0 transition duration-200 group-hover/feature:opacity-100",
          hoverClassName ?? defaultHoverClassName
        )}
        aria-hidden="true"
      />

      <div className="relative z-10 mb-4 px-8 text-techpay-primary">
        {icon}
      </div>

      <div className="relative z-10 mb-3 px-8 text-lg font-bold text-slate-950">
        <div className="absolute inset-y-0 left-0 h-6 w-1 rounded-tr-full rounded-br-full bg-slate-300 transition-all duration-200 origin-center group-hover/feature:h-8 group-hover/feature:bg-techpay-primary" />
        <span className="inline-block transition duration-200 group-hover/feature:translate-x-2">
          {title}
        </span>
      </div>

      <div className="relative z-10 px-8 text-sm leading-6 text-slate-600">
        {description}
      </div>
    </div>
  );
};
