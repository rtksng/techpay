import { useId } from "react";
import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

export type FeaturesSectionDemoItem = {
  number: string;
  title: string;
  description: string;
  accentClass?: string;
  borderClass?: string;
  surfaceClass?: string;
  glowClass?: string;
  pattern?: number[][];
};

type FeaturesSectionDemoProps = {
  items: FeaturesSectionDemoItem[];
  className?: string;
  columnsClassName?: string;
  contentClassName?: string;
  cardClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  numberPlacement?: "inline" | "corner";
};

const fallbackPatterns = [
  [
    [7, 1],
    [8, 3],
    [10, 2],
    [11, 5],
    [13, 1],
  ],
  [
    [6, 2],
    [8, 1],
    [9, 4],
    [11, 3],
    [12, 5],
  ],
  [
    [7, 3],
    [9, 1],
    [10, 5],
    [12, 2],
    [13, 4],
  ],
  [
    [6, 1],
    [8, 4],
    [9, 2],
    [11, 5],
    [12, 3],
  ],
];

export default function FeaturesSectionDemo1({
  items,
  className,
  columnsClassName,
  contentClassName,
  cardClassName,
  titleClassName,
  descriptionClassName,
  numberPlacement = "inline",
}: FeaturesSectionDemoProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 gap-5",
        columnsClassName ?? "md:grid-cols-2 xl:grid-cols-4",
        className
      )}
    >
      {items.map((feature, index) => (
        <div
          key={`${feature.number}-${feature.title}`}
          className={cn(
            "group relative overflow-hidden border p-7 shadow-[0_24px_64px_rgba(15,23,42,0.08)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_34px_86px_rgba(15,23,42,0.12)] md:p-8",
            "bg-linear-to-b from-white to-[#fff7fb]",
            "border-techpay-primary/15",
            cardClassName,
            feature.borderClass,
            feature.surfaceClass
          )}
        >
          <div
            className={cn(
              "absolute inset-x-0 top-0 h-1 bg-linear-to-r",
              "from-techpay-primary via-techpay-pink to-techpay-purple/75",
              feature.accentClass
            )}
            aria-hidden="true"
          />
          <div
            className={cn(
              "absolute -right-8 top-0 h-28 w-28 rounded-full blur-3xl transition duration-300 group-hover:scale-110",
              "bg-techpay-primary/12",
              feature.glowClass
            )}
            aria-hidden="true"
          />
          <Grid
            size={24}
            pattern={feature.pattern ?? fallbackPatterns[index % fallbackPatterns.length]}
          />

          <div
            className={cn(
              "relative z-20 flex h-full min-h-[220px] flex-col",
              contentClassName
            )}
          >
            {numberPlacement === "corner" ? (
              <>
                <div className="mb-5 flex items-start justify-between gap-4">
                  <h3
                    className={cn(
                      "max-w-[calc(100%-6rem)] font-display text-[1.28rem] font-bold leading-[1.15] tracking-[-0.03em] text-[#111111] md:text-[1.45rem]",
                      titleClassName
                    )}
                  >
                    {feature.title}
                  </h3>
                  <span
                    className={cn(
                      "inline-flex min-w-[84px] shrink-0 items-center justify-center self-start rounded-[18px] border border-white/70 bg-linear-to-r px-3 py-2 text-right font-display text-[1.2rem] font-bold leading-none tracking-[-0.03em] text-white shadow-[0_16px_36px_rgba(15,23,42,0.14)] md:text-[1.35rem]",
                      "from-techpay-primary via-techpay-pink to-techpay-purple/75",
                      feature.accentClass
                    )}
                  >
                    {feature.number}
                  </span>
                </div>
              </>
            ) : (
              <h3
                className={cn(
                  "mb-5 font-display text-[1.28rem] font-bold leading-[1.15] tracking-[-0.03em] text-[#111111] md:text-[1.45rem]",
                  titleClassName
                )}
              >
                <span className="text-techpay-primary">{feature.number}</span>
                <span className="mx-2 text-slate-300">/</span>
                <span>{feature.title}</span>
              </h3>
            )}
            <p
              className={cn(
                "grow text-[0.94rem] leading-[1.75] text-slate-600",
                descriptionClassName
              )}
            >
              {feature.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export function Grid({
  pattern,
  size = 20,
}: {
  pattern?: number[][];
  size?: number;
}) {
  return (
    <div className="pointer-events-none absolute left-1/2 top-0 -ml-20 -mt-2 h-full w-full mask-[linear-gradient(white,transparent)]">
      <div className="absolute inset-0 bg-linear-to-r from-techpay-primary/6 via-transparent to-techpay-purple/8 mask-[radial-gradient(farthest-side_at_top,white,transparent)] opacity-100">
        <GridPattern
          width={size}
          height={size}
          x="-12"
          y="4"
          squares={pattern}
          className="absolute inset-0 h-full w-full mix-blend-overlay fill-techpay-primary/8 stroke-slate-900/8"
        />
      </div>
    </div>
  );
}

type GridPatternProps = ComponentPropsWithoutRef<"svg"> & {
  width: number;
  height: number;
  x: string | number;
  y: string | number;
  squares?: number[][];
};

export function GridPattern({
  width,
  height,
  x,
  y,
  squares,
  ...props
}: GridPatternProps) {
  const patternId = useId();

  return (
    <svg aria-hidden="true" {...props}>
      <defs>
        <pattern
          id={patternId}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path d={`M.5 ${height}V.5H${width}`} fill="none" />
        </pattern>
      </defs>
      <rect
        width="100%"
        height="100%"
        strokeWidth={0}
        fill={`url(#${patternId})`}
      />
      {squares ? (
        <svg x={x} y={y} className="overflow-visible">
          {squares.map(([squareX, squareY]) => (
            <rect
              key={`${squareX}-${squareY}`}
              strokeWidth="0"
              width={width + 1}
              height={height + 1}
              x={squareX * width}
              y={squareY * height}
            />
          ))}
        </svg>
      ) : null}
    </svg>
  );
}
