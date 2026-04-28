"use client";

import { useId, useMemo, useState } from "react";

const tiers = [
  {
    min: 0,
    label: "Starter",
    className: "border-white/20 bg-white/10 text-white/60",
  },
  {
    min: 5000,
    label: "Silver Partner",
    className: "border-techpay-pink/55 bg-techpay-pink/15 text-techpay-pink",
  },
  {
    min: 15000,
    label: "Gold Partner",
    className: "border-techpay-pink/65 bg-techpay-pink/18 text-pink-100",
  },
  {
    min: 30000,
    label: "Platinum Partner",
    className: "border-techpay-purple/65 bg-techpay-purple/20 text-purple-200",
  },
] as const;

const currencyFormatter = new Intl.NumberFormat("en-IN");

function formatCurrency(value: number) {
  return `₹${currencyFormatter.format(value)}`;
}

export default function AssociateEarningsCalculator() {
  const [customers, setCustomers] = useState(20);
  const [conversion, setConversion] = useState(15);
  const [price, setPrice] = useState(45000);

  const estimate = useMemo(() => {
    const commissionRate =
      price < 30000 ? 0.015 : price < 60000 ? 0.02 : price < 90000 ? 0.025 : 0.03;
    const weeklySales = (customers * conversion) / 100;
    const monthlySales = Math.round(weeklySales * 4);
    const earning = Math.round(monthlySales * price * commissionRate);
    const commissionPercent = Math.round(commissionRate * 100 * 10) / 10;
    const tier = tiers.reduce(
      (current, item) => (earning >= item.min ? item : current),
      tiers[0]
    );

    return {
      commissionPercent,
      earning,
      monthlySales,
      tier,
    };
  }, [conversion, customers, price]);

  return (
    <section
      id="earnings-calculator"
      className="relative overflow-hidden bg-techpay-bg px-5 py-20 text-white md:px-[60px] md:py-24"
    >
      <EarningsGridBackground />
      <div className="relative z-10 mx-auto max-w-[960px]">
        <div className="mb-10 text-left">
          <p className="mb-4 text-xs font-bold uppercase text-techpay-primary">
            Earnings Calculator
          </p>
          <h2 className="font-display text-3xl font-bold leading-tight text-white md:text-5xl">
            How much can you earn?
          </h2>
          <p className="mt-4 text-sm leading-7 text-slate-400">
            Adjust the sliders to estimate your monthly income as a TechPay
            Associate Retailer
          </p>
        </div>

        <div className="grid gap-8  border border-white/10 bg-white/5 p-6 shadow-[0_28px_80px_rgba(0,0,0,0.28)] backdrop-blur-sm md:grid-cols-[1fr_0.9fr] md:p-9">
          <div className="grid gap-8">
            <SliderControl
              label="Customers you talk to per week"
              max={100}
              min={5}
              onChange={setCustomers}
              step={5}
              value={customers}
              valueLabel={String(customers)}
            />
            <SliderControl
              label="Conversion rate (%)"
              max={40}
              min={5}
              onChange={setConversion}
              step={5}
              value={conversion}
              valueLabel={`${conversion}%`}
            />
            <SliderControl
              label="Average device price (₹)"
              max={120000}
              min={20000}
              onChange={setPrice}
              step={5000}
              value={price}
              valueLabel={formatCurrency(price)}
            />
          </div>

          <div>
            <div className=" border border-techpay-primary/25 bg-techpay-primary/12 p-7 text-center">
              <p className="text-xs font-semibold uppercase text-white/55">
                Monthly earnings
              </p>
              <p className="mt-3 text-5xl font-bold leading-none text-techpay-primary md:text-6xl">
                {formatCurrency(estimate.earning)}
              </p>
              <p className="mt-2 text-sm text-white/45">estimated take-home</p>
              <p className="mt-6 text-sm leading-7 text-white/55">
                <strong className="text-white/75">{estimate.monthlySales}</strong>{" "}
                sales/month ×{" "}
                <strong className="text-white/75">{formatCurrency(price)}</strong>{" "}
                avg price ×{" "}
                <strong className="text-white/75">
                  {estimate.commissionPercent}%
                </strong>{" "}
                commission
              </p>
            </div>

            <div className="mt-5 flex justify-center">
              <span
                className={`inline-flex min-h-9 items-center justify-center  border px-4 py-2 text-xs font-semibold ${estimate.tier.className}`}
              >
                🏅 {estimate.tier.label} Tier
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function EarningsGridBackground() {
  const patternId = useId().replace(/:/g, "");

  return (
    <div className="pointer-events-none absolute inset-0 z-0" aria-hidden="true">
      <svg
        className="absolute inset-0 h-full w-full opacity-90 mix-blend-screen motion-reduce:opacity-55"
        preserveAspectRatio="none"
      >
        <defs>
          <pattern
            id={patternId}
            width="32"
            height="32"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 32 0 H 0 V 32"
              fill="none"
              stroke="rgba(237,29,95,0.28)"
              strokeWidth="1"
            />
            <animateTransform
              attributeName="patternTransform"
              dur="22s"
              from="0 0"
              repeatCount="indefinite"
              to="32 32"
              type="translate"
            />
          </pattern>
        </defs>
        <rect fill={`url(#${patternId})`} height="100%" width="100%" />
      </svg>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(1,1,1,0.18)_58%,rgba(1,1,1,0.74)_100%)]" />
    </div>
  );
}

function SliderControl({
  label,
  max,
  min,
  onChange,
  step,
  value,
  valueLabel,
}: {
  label: string;
  max: number;
  min: number;
  onChange: (value: number) => void;
  step: number;
  value: number;
  valueLabel: string;
}) {
  return (
    <label className="grid gap-3">
      <span className="text-xs font-semibold uppercase text-white/55">{label}</span>
      <span className="text-2xl font-bold text-white">{valueLabel}</span>
      <input
        aria-label={label}
        className="h-2 w-full cursor-pointer accent-techpay-primary"
        max={max}
        min={min}
        onChange={(event) => onChange(Number(event.target.value))}
        step={step}
        type="range"
        value={value}
      />
    </label>
  );
}
