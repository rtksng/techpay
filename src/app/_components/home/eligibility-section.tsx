import { cn } from "@/lib/utils";
import DotBackgroundDemo from "@/components/ui/dot-background-demo";
import { ButtonLink } from "@/components/ui/button";

const eligibilityBenefits = [
  {
    title: "No large upfront cost",
    accentClass: "border-techpay-primary/15 bg-techpay-primary/6 text-techpay-primary",
  },
  {
    title: "Instant approval",
    accentClass: "border-techpay-orange/15 bg-techpay-orange/6 text-techpay-orange",
  },
  {
    title: "Flexible instalments",
    accentClass: "border-techpay-purple/15 bg-techpay-purple/6 text-techpay-purple",
  },
] as const;

export default function TechPayEligibilitySection() {
  return (
    <section
      className="relative z-3 overflow-hidden bg-[#f7f7fb] px-5 pb-24 pt-2 md:px-[60px] md:pb-28 md:pt-4"
      id="eligibility"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute left-[-8%] top-12 h-64 w-64 rounded-full bg-techpay-primary/8 blur-3xl" />
        <div className="absolute right-[-8%] top-1/3 h-72 w-72 rounded-full bg-techpay-purple/8 blur-3xl" />
        {/* <div className="absolute -bottom-16 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-techpay-orange/6 blur-3xl" /> */}
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
          <div className="relative z-10 px-5 py-8 sm:px-6 sm:py-10 md:px-10 md:py-12 lg:px-14 lg:py-14">
            <div
              className="pointer-events-none absolute -right-10 top-6 h-32 w-32 rounded-full bg-techpay-primary/12 blur-3xl"
              aria-hidden="true"
            />

            <div className="relative z-1 mx-auto max-w-3xl text-center">
              <p className="mb-4 inline-block text-[0.78rem] font-semibold uppercase tracking-[0.12em] text-techpay-primary">
                Own A Laptop for as Little as $10/Month.
              </p>
              <h3 className="mx-auto mb-5 max-w-[24ch] font-display text-[1.45rem] font-bold leading-[1.08] tracking-[-0.04em] text-[#111111] md:text-[clamp(1.8rem,3vw,2.9rem)]">
                The cost of a computer should not stop your progress.
              </h3>
              <p className="mx-auto max-w-[62ch] text-[1rem] leading-[1.8] text-slate-600 md:text-[1.05rem]">
                With TechPay.ai, you can spread payments into affordable
                monthly amounts and move forward now instead of waiting.
              </p>
            </div>

            <div className="mx-auto mt-8 grid max-w-5xl gap-4 md:mt-10 md:grid-cols-3">
              {eligibilityBenefits.map((benefit) => (
                <article
                  key={benefit.title}
                  className="relative overflow-hidden border border-slate-200 bg-[#fcfbff] p-5 text-center shadow-[0_16px_40px_rgba(15,23,42,0.05)] md:p-6"
                >
                  <span
                    className={cn(
                      "mx-auto inline-flex h-11 w-11 items-center justify-center rounded-full border",
                      benefit.accentClass
                    )}
                    aria-hidden="true"
                  >
                    <CheckIcon />
                  </span>
                  <p className="mt-4 text-[1rem] font-semibold leading-[1.5] text-[#111111] md:text-[1.05rem]">
                    {benefit.title}
                  </p>
                </article>
              ))}
            </div>

            <div className="mt-8 text-center md:mt-10">
              <ButtonLink
                href="/coming-soon"
                className="sm:w-auto"
                fullWidth
                size="lg"
              >
                Check Your Eligibility
              </ButtonLink>
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
