import { cn } from "@/lib/utils";

type ImpactMetric = {
  value: string;
  label: string;
  description: string;
  accentClass: string;
  borderClass: string;
  glowClass: string;
  valueClass: string;
};

const impactMetrics: ImpactMetric[] = [
  {
    value: "50+",
    label: "Stores Powered",
    description:
      "Helping local retailers serve more customers with less lost demand.",
    accentClass: "from-techpay-primary via-techpay-pink to-techpay-primary/70",
    borderClass: "border-techpay-primary/18",
    glowClass: "bg-techpay-primary/14",
    valueClass: "text-techpay-primary",
  },
  {
    value: "500+",
    label: "Families Served",
    description:
      "Supporting households on their journey to computer ownership.",
    accentClass: "from-techpay-orange via-[#ffb36b] to-techpay-primary/70",
    borderClass: "border-techpay-orange/20",
    glowClass: "bg-techpay-orange/14",
    valueClass: "text-techpay-orange",
  },
  {
    value: "2",
    label: "Countries Active",
    description:
      "Growing across markets where access, affordability, and trust matter most.",
    accentClass: "from-techpay-purple via-[#be73d0] to-techpay-primary/70",
    borderClass: "border-techpay-purple/18",
    glowClass: "bg-techpay-purple/14",
    valueClass: "text-techpay-purple",
  },
];

export default function TechPayImpactNumbersSection() {
  return (
    <section
      className="relative z-3 overflow-hidden bg-[#f7f7fb] px-5 pb-24 pt-4 md:px-[60px] md:pb-28 md:pt-6"
      id="impact-numbers"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute left-[-6%] top-8 h-64 w-64 rounded-full bg-techpay-primary/8 blur-3xl" />
        <div className="absolute right-[-8%] top-1/4 h-72 w-72 rounded-full bg-techpay-purple/8 blur-3xl" />
        <div className="absolute -bottom-16 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-techpay-orange/6 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-[1440px]">
        <div className="mb-10 max-w-[860px] md:mb-14">
          <p className="mb-4 inline-block text-[0.78rem] font-semibold uppercase tracking-[0.12em] text-techpay-primary">
            Impact Numbers
          </p>
          <h2 className="mb-[18px] font-display text-[1.85rem] font-bold leading-[1.12] tracking-[-0.03em] text-[#111111] md:text-[clamp(2rem,4vw,3.25rem)]">
            TechPay.ai is helping more people access technology through trusted
            local retail relationships.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
          {impactMetrics.map((metric) => (
            <ImpactMetricCard key={metric.label} metric={metric} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ImpactMetricCard({ metric }: { metric: ImpactMetric }) {
  return (
    <article
      className={cn(
        "group relative flex h-full min-h-[280px] flex-col overflow-hidden rounded-[28px] border bg-white p-7 shadow-[0_24px_64px_rgba(15,23,42,0.08)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_32px_80px_rgba(15,23,42,0.12)] md:p-8",
        metric.borderClass
      )}
    >
      <div
        className={cn(
          "absolute inset-x-0 top-0 h-1 bg-linear-to-r",
          metric.accentClass
        )}
        aria-hidden="true"
      />
      <div
        className={cn(
          "absolute -right-8 top-4 h-28 w-28 rounded-full blur-3xl transition duration-300 group-hover:scale-110",
          metric.glowClass
        )}
        aria-hidden="true"
      />

      <div className="relative z-1 flex h-full flex-col">
        <p
          className={cn(
            "mb-4 font-display text-[clamp(3rem,7vw,5.5rem)] font-bold leading-none tracking-[-0.05em]",
            metric.valueClass
          )}
        >
          {metric.value}
        </p>
        <h3 className="mb-4 font-display text-[1.28rem] font-bold leading-[1.12] tracking-[-0.03em] text-[#111111] md:text-[1.45rem]">
          {metric.label}
        </h3>
        <p className="grow max-w-[34ch] text-[0.98rem] leading-[1.78] text-slate-600">
          {metric.description}
        </p>
      </div>
    </article>
  );
}
