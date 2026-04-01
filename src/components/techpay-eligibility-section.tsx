import { cn } from "@/lib/utils";
import DotBackgroundDemo from "@/components/ui/dot-background-demo";

const eligibilityBenefits = [
  "No large upfront cost",
  "Instant approval",
  "Flexible instalments",
];

export default function TechPayEligibilitySection() {
  return (
    <section
      className="relative z-3 overflow-hidden bg-[#f7f7fb] px-5 pb-24 pt-2 md:px-[60px] md:pb-28 md:pt-4"
      id="eligibility"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute left-[-8%] top-12 h-64 w-64 rounded-full bg-techpay-primary/8 blur-3xl" />
        <div className="absolute right-[-8%] top-1/3 h-72 w-72 rounded-full bg-techpay-purple/8 blur-3xl" />
        <div className="absolute -bottom-16 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-techpay-orange/6 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-[1440px]">
        <div className="relative overflow-hidden border border-slate-900/10 bg-white shadow-[0_28px_80px_rgba(15,23,42,0.08)]">
          <DotBackgroundDemo
            showLabel={false}
            className="pointer-events-none absolute inset-0 z-0 h-full min-h-0 w-full bg-white"
            patternClassName="opacity-100"
            patternStyle={{
              backgroundSize: "22px 22px, 22px 22px, 22px 22px",
              backgroundImage:
                "linear-gradient(to right, rgba(15,23,42,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,23,42,0.08) 1px, transparent 1px), radial-gradient(rgba(15,23,42,0.12) 1.15px, transparent 1.15px)",
            }}
            overlayClassName="hidden"
          />
          <div className="relative z-10 grid gap-10 px-6 py-10 md:px-10 md:py-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(280px,0.8fr)] lg:items-center lg:gap-14 lg:px-14 lg:py-14">
         
            <div
              className="pointer-events-none absolute -right-10 top-6 h-32 w-32 rounded-full bg-techpay-primary/12 blur-3xl"
              aria-hidden="true"
            />

            <div className="relative z-1">
              <p className="mb-4 inline-block text-[0.78rem] font-semibold uppercase tracking-[0.12em] text-techpay-primary">
                Own A Laptop for as Little as $10/Month.
              </p>
              <h3 className="mb-5 max-w-[24ch] font-display text-[1.55rem] font-bold leading-[1.08] tracking-[-0.04em] text-[#111111] md:text-[clamp(1.8rem,3vw,2.9rem)]">
                The cost of a computer should not stop your progress.
              </h3>
              <p className="max-w-[62ch] text-[1rem] leading-[1.8] text-slate-600 md:text-[1.05rem]">
                With TechPay.ai, you can spread payments into affordable
                monthly amounts and move forward now instead of waiting.
              </p>
            </div>

            <div className="relative z-1 border border-slate-200 bg-[#fcfbff] p-6 shadow-[0_16px_40px_rgba(15,23,42,0.05)] md:p-8">
              <ul className="space-y-4">
                {eligibilityBenefits.map((benefit, index) => (
                  <li key={benefit} className="flex items-start gap-4">
                    <span
                      className={cn(
                        "mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full",
                        index === 0 &&
                          "bg-techpay-primary/10 text-techpay-primary",
                        index === 1 &&
                          "bg-techpay-orange/10 text-techpay-orange",
                        index === 2 &&
                          "bg-techpay-purple/10 text-techpay-purple"
                      )}
                      aria-hidden="true"
                    >
                      <CheckIcon />
                    </span>
                    <span className="text-[1rem] font-semibold leading-[1.6] text-[#111111]">
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#"
                className="btn-primary btn-pill relative isolate mt-8 inline-flex overflow-hidden px-8 py-[16px] text-[1rem] font-bold text-white no-underline shadow-[0_18px_42px_rgba(237,29,95,0.24)]"
              >
                Check Your Eligibility
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CheckIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}
