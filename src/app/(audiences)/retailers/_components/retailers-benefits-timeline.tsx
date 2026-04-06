"use client";

import type { CSSProperties } from "react";
import { useEffect, useRef, useState } from "react";
import {
  BadgeDollarSign,
  Sparkles,
  Store,
  TrendingUp,
} from "lucide-react";
import { cn } from "@/lib/utils";

const benefitRail = [
  {
    number: "01",
    title: "Increased Sales",
    Icon: TrendingUp,
  },
  {
    number: "02",
    title: "Increased Ticket Size",
    Icon: Sparkles,
  },
  {
    number: "03",
    title: "Higher Walk-In Conversion",
    Icon: Store,
  },
  {
    number: "04",
    title: "Additional Income Streams",
    Icon: BadgeDollarSign,
  },
] as const;

const benefitWavePoints = [
  { left: "10%", top: "20%", labelPlacement: "bottom" },
  { left: "36%", top: "-10%", labelPlacement: "top" },
  { left: "63%", top: "20%", labelPlacement: "bottom" },
  { left: "90%", top: "-25%", labelPlacement: "top" },
] as const;

const WAVE_PATH =
  "M30 150 C 130 210, 230 210, 330 150 S 530 90, 630 150 S 830 210, 930 150 S 1070 90, 1170 150";

const LINE_DRAW_DURATION_MS = 1700;
const POINT_REVEAL_PROGRESS = [0.08, 0.34, 0.62, 0.89];
const POINT_REVEAL_DELAYS_MS = POINT_REVEAL_PROGRESS.map((progress) =>
  Math.round(LINE_DRAW_DURATION_MS * progress)
);

export default function RetailersBenefitsTimeline() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [hasStarted, setHasStarted] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setPrefersReducedMotion(mediaQuery.matches);

    updatePreference();

    if (typeof mediaQuery.addEventListener === "function") {
      mediaQuery.addEventListener("change", updatePreference);
      return () => mediaQuery.removeEventListener("change", updatePreference);
    }

    mediaQuery.addListener(updatePreference);
    return () => mediaQuery.removeListener(updatePreference);
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || hasStarted) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setHasStarted(true);
        observer.disconnect();
      },
      {
        threshold: 0.35,
      }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, [hasStarted]);

  const shouldAnimate = hasStarted && !prefersReducedMotion;
  const getDelayStyle = (index: number, extraDelay = 0): CSSProperties => ({
    transitionDelay: shouldAnimate
      ? `${POINT_REVEAL_DELAYS_MS[index] + extraDelay}ms`
      : "0ms",
  });

  return (
    <div ref={sectionRef}>
      <div className="mt-10 space-y-5 lg:hidden">
        {benefitRail.map((benefit, index) => {
          const isVisible = hasStarted;

          return (
            <div
              key={benefit.title}
              className={cn(
                "relative border-l border-techpay-primary/15 pl-6 last:pb-0 transition-all duration-700 ease-out",
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-5 opacity-0"
              )}
              style={getDelayStyle(index)}
            >
              <span
                className={cn(
                  "absolute left-0 top-5 h-3 w-3 -translate-x-1/2 rounded-full bg-techpay-primary shadow-[0_0_0_8px_rgba(237,29,95,0.08)] transition-all duration-500 ease-out",
                  isVisible ? "scale-100 opacity-100" : "scale-50 opacity-0"
                )}
                style={getDelayStyle(index, 40)}
              />
              <div className="flex items-center gap-4 rounded-[24px] border border-slate-200/80 bg-white/90 px-4 py-4 shadow-[0_18px_36px_rgba(15,23,42,0.06)]">
                <span className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-techpay-primary to-techpay-purple text-white shadow-[0_14px_30px_rgba(147,38,143,0.18)]">
                  <benefit.Icon className="h-6 w-6" />
                </span>
                <div>
                  <p className="text-xs font-semibold tracking-[0.18em] text-slate-400">
                    {benefit.number}
                  </p>
                  <h3 className="font-display text-[1.05rem] font-semibold tracking-[-0.03em] text-slate-700">
                    {benefit.title}
                  </h3>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="relative mt-14 hidden h-[200px] lg:block">
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2">
          <svg
            viewBox="0 0 1200 260"
            className="h-[240px] w-full"
            aria-hidden="true"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient
                id="benefit-wave-gradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#93268F" />
                <stop offset="35%" stopColor="#ED1D5F" />
                <stop offset="68%" stopColor="#F26422" />
                <stop offset="100%" stopColor="#DB82B6" />
              </linearGradient>
            </defs>
            <path
              d={WAVE_PATH}
              fill="none"
              stroke="rgba(148, 163, 184, 0.2)"
              strokeWidth="18"
              strokeLinecap="round"
            />
            <path
              d={WAVE_PATH}
              pathLength={1}
              fill="none"
              stroke="url(#benefit-wave-gradient)"
              strokeWidth="8"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{
                strokeDasharray: 1,
                strokeDashoffset: hasStarted ? 0 : 1,
                transition: prefersReducedMotion
                  ? "none"
                  : `stroke-dashoffset ${LINE_DRAW_DURATION_MS}ms cubic-bezier(0.22, 1, 0.36, 1)`,
              }}
            />
            <path
              d={WAVE_PATH}
              pathLength={1}
              fill="none"
              stroke="url(#benefit-wave-gradient)"
              strokeWidth="16"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity={0.18}
              style={{
                filter: "blur(10px)",
                strokeDasharray: 1,
                strokeDashoffset: hasStarted ? 0 : 1,
                transition: prefersReducedMotion
                  ? "none"
                  : `stroke-dashoffset ${LINE_DRAW_DURATION_MS}ms cubic-bezier(0.22, 1, 0.36, 1)`,
              }}
            />
          </svg>
        </div>

        {benefitRail.map((benefit, index) => {
          const point =
            benefitWavePoints[index] ??
            benefitWavePoints[benefitWavePoints.length - 1];
          const isTopLabel = point.labelPlacement === "top";
          const isVisible = hasStarted;
          const lineClasses = cn(
            "w-px bg-linear-to-b from-techpay-primary via-techpay-orange to-transparent transition-transform duration-500 ease-out",
            isVisible ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0",
            isTopLabel ? "origin-bottom" : "origin-top"
          );
          const iconClasses = cn(
            "relative flex h-18 w-18 items-center justify-center rounded-full bg-white shadow-[0_18px_36px_rgba(15,23,42,0.14)] ring-1 ring-techpay-primary/10 transition-all duration-500 ease-out",
            isVisible ? "scale-100 opacity-100" : "scale-75 opacity-0"
          );
          const labelClasses = cn(
            "space-y-2 transition-all duration-500 ease-out",
            isVisible
              ? "translate-y-0 opacity-100"
              : isTopLabel
                ? "translate-y-2 opacity-0"
                : "-translate-y-2 opacity-0"
          );

          return (
            <div
              key={benefit.title}
              className={cn(
                "absolute w-56 -translate-x-1/2 -translate-y-1/2 transition-all duration-700 ease-out",
                isVisible
                  ? "translate-y-0 opacity-100"
                  : isTopLabel
                    ? "translate-y-2 opacity-0"
                    : "-translate-y-2 opacity-0"
              )}
              style={{ left: point.left, top: point.top }}
            >
              <div className="flex flex-col items-center text-center">
                {isTopLabel ? (
                  <>
                    <div className={labelClasses} style={getDelayStyle(index, 120)}>
                      <p className="text-sm font-semibold tracking-[0.18em] text-slate-400">
                        {benefit.number}
                      </p>
                      <h3 className="font-display text-[1.35rem] font-semibold leading-tight tracking-[-0.04em] text-slate-700">
                        {benefit.title}
                      </h3>
                    </div>
                    <span
                      className={cn(lineClasses, "mb-4 mt-4 h-14 bg-linear-to-t")}
                      style={getDelayStyle(index, 40)}
                    />
                    <div className={iconClasses} style={getDelayStyle(index)}>
                      <div className="absolute inset-2 rounded-full bg-linear-to-br from-techpay-primary via-techpay-orange to-techpay-purple opacity-12 blur-sm" />
                      <span className="relative inline-flex h-14 w-14 items-center justify-center rounded-full bg-linear-to-br from-techpay-primary to-techpay-purple text-white shadow-[0_14px_30px_rgba(147,38,143,0.18)]">
                        <benefit.Icon className="h-6 w-6" />
                      </span>
                    </div>
                  </>
                ) : (
                  <>
                    <div className={iconClasses} style={getDelayStyle(index)}>
                      <div className="absolute inset-2 rounded-full bg-linear-to-br from-techpay-primary via-techpay-orange to-techpay-purple opacity-12 blur-sm" />
                      <span className="relative inline-flex h-14 w-14 items-center justify-center rounded-full bg-linear-to-br from-techpay-primary to-techpay-purple text-white shadow-[0_14px_30px_rgba(147,38,143,0.18)]">
                        <benefit.Icon className="h-6 w-6" />
                      </span>
                    </div>
                    <span
                      className={cn(lineClasses, "mt-4 h-14")}
                      style={getDelayStyle(index, 40)}
                    />
                    <div className={labelClasses} style={getDelayStyle(index, 120)}>
                      <p className="text-sm font-semibold tracking-[0.18em] text-slate-400">
                        {benefit.number}
                      </p>
                      <h3 className="font-display text-[1.35rem] font-semibold leading-tight tracking-[-0.04em] text-slate-700">
                        {benefit.title}
                      </h3>
                    </div>
                  </>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
