import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type ComparisonRow = {
  need: string;
  onlineOnly: string;
  techPay: string;
};

const comparisonRows: ComparisonRow[] = [
  {
    need: "Expert guidance in plain language",
    onlineOnly: "You are often left to figure it out yourself",
    techPay: "Friendly in-person support",
  },
  {
    need: "Touch and feel before you buy",
    onlineOnly: "You usually have to order first and hope for the best",
    techPay: "See it, feel it, then decide",
  },
  {
    need: "Full product catalogue",
    onlineOnly: "Large range, but no personal guidance",
    techPay: "Full digital catalogue in-store",
  },
  {
    need: "Flexible payment plans",
    onlineOnly: "Often confusing or inconsistent",
    techPay: "60-second in-store approval",
  },
  {
    need: "Trusted local relationship",
    onlineOnly: "Transactional and impersonal",
    techPay: "Your neighbourhood store",
  },
  {
    need: "Ongoing IT support",
    onlineOnly: "Limited to FAQs or chatbots",
    techPay: "Personalized helpdesk support",
  },
];

export default function TechPayDifferenceSection() {
  return (
    <section
      className="relative z-3 overflow-hidden bg-[#f7f7fb] px-5 pb-24 pt-2 md:px-[60px] md:pb-28 md:pt-6"
      id="why-techpay-different"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute left-[-6%] top-10 h-64 w-64 rounded-full bg-techpay-primary/8 blur-3xl" />
        <div className="absolute right-[-8%] top-1/3 h-72 w-72 rounded-full bg-techpay-purple/8 blur-3xl" />
        <div className="absolute -bottom-16 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-techpay-orange/6 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-[1440px]">
        <div className="mb-10 max-w-[920px] md:mb-14">
          <p className="mb-4 inline-block text-[0.78rem] font-semibold uppercase tracking-[0.12em] text-techpay-primary">
            Why TechPay.ai Feels Different
          </p>
          <h2 className="mb-[18px] font-display text-[1.85rem] font-bold leading-[1.12] tracking-[-0.03em] text-[#111111] md:text-[clamp(2rem,4vw,3.25rem)]">
            Online shopping gives you options. TechPay.ai gives you options and
            confidence.
          </h2>
        </div>

        <div className="overflow-hidden border border-slate-200 bg-white shadow-[0_28px_80px_rgba(15,23,42,0.08)]">
          <div
            className="pointer-events-none h-1 w-full bg-linear-to-r from-techpay-primary via-techpay-orange to-techpay-purple"
            aria-hidden="true"
          />

          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50/80">
                  <HeaderCell className="min-w-[240px] text-[#111111]">
                    What You Need
                  </HeaderCell>
                  <HeaderCell className="min-w-[260px] text-slate-500">
                    Online-Only Stores
                  </HeaderCell>
                  <HeaderCell className="min-w-[260px] text-techpay-primary">
                    TechPay.ai Stores
                  </HeaderCell>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, index) => (
                  <tr
                    key={row.need}
                    className={cn(
                      "border-b border-slate-200/80 align-top last:border-b-0",
                      index % 2 === 0 && "bg-white",
                      index % 2 === 1 && "bg-[#fcfbff]"
                    )}
                  >
                    <BodyCell className="font-semibold text-[#111111]">
                      {row.need}
                    </BodyCell>
                    <BodyCell className="text-slate-500">
                      {row.onlineOnly}
                    </BodyCell>
                    <BodyCell className="bg-techpay-primary/3 text-slate-700">
                      <span className="inline-flex rounded-full bg-techpay-primary/10 px-3 py-1 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-techpay-primary">
                        TechPay.ai
                      </span>
                      <span className="mt-3 block font-medium text-[#111111]">
                        {row.techPay}
                      </span>
                    </BodyCell>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <p className="mt-8 max-w-[860px] text-[1rem] leading-[1.8] text-slate-600 md:text-[1.05rem]">
          TechPay.ai brings together the best of both worlds, the choice of
          digital and the trust of local retail.
        </p>
      </div>
    </section>
  );
}

function HeaderCell({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <th
      className={cn(
        "px-5 py-5 text-left font-display text-[1rem] font-bold leading-[1.2] tracking-[-0.02em] md:px-8 md:py-6 md:text-[1.12rem]",
        className
      )}
      scope="col"
    >
      {children}
    </th>
  );
}

function BodyCell({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <td
      className={cn(
        "px-5 py-5 text-[0.95rem] leading-[1.7] md:px-8 md:py-6 md:text-[1rem]",
        className
      )}
    >
      {children}
    </td>
  );
}
