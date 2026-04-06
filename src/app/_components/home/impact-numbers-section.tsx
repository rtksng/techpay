import FeaturesSectionDemo1, {
  type FeaturesSectionDemoItem,
} from "@/components/ui/features-section-demo-1";

const impactMetrics: FeaturesSectionDemoItem[] = [
  {
    number: "50+",
    title: "Stores Powered",
    description:
      "Helping local retailers serve more customers with less lost demand.",
    accentClass: "from-techpay-primary via-techpay-pink to-techpay-primary/70",
    borderClass: "border-techpay-primary/18",
    surfaceClass: "bg-linear-to-b from-white to-[#fff3f7]",
    glowClass: "bg-techpay-primary/14",
    pattern: [
      [7, 1],
      [8, 3],
      [10, 2],
      [12, 4],
      [13, 1],
    ],
  },
  {
    number: "500+",
    title: "Families Served",
    description:
      "Supporting households on their journey to computer ownership.",
    accentClass: "from-techpay-orange via-[#ffb36b] to-techpay-primary/70",
    borderClass: "border-techpay-orange/20",
    surfaceClass: "bg-linear-to-b from-white to-[#fff7ef]",
    glowClass: "bg-techpay-orange/14",
    pattern: [
      [6, 2],
      [8, 1],
      [9, 4],
      [11, 3],
      [12, 5],
    ],
  },
  {
    number: "2",
    title: "Countries Active",
    description:
      "Growing across markets where access, affordability, and trust matter most.",
    accentClass: "from-techpay-purple via-[#be73d0] to-techpay-primary/70",
    borderClass: "border-techpay-purple/18",
    surfaceClass: "bg-linear-to-b from-white to-[#faf3ff]",
    glowClass: "bg-techpay-purple/14",
    pattern: [
      [7, 3],
      [9, 1],
      [10, 5],
      [12, 2],
      [13, 4],
    ],
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
        {/* <div className="absolute -bottom-16 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-techpay-orange/6 blur-3xl" /> */}
      </div>

      <div className="relative mx-auto max-w-[1440px]">
        <div className="mb-10 max-w-6xl md:mb-14">
          <p className="mb-4 inline-block text-[0.78rem] font-semibold uppercase tracking-[0.12em] text-techpay-primary">
            Impact Numbers
          </p>
          <h2 className="mb-[18px] font-display text-[1.85rem] font-bold leading-[1.12] tracking-[-0.03em] text-[#111111] md:text-[clamp(2rem,4vw,3.25rem)]">
            TechPay.ai is helping more people access technology through trusted
            local retail relationships.
          </h2>
        </div>

        <FeaturesSectionDemo1
          items={impactMetrics}
          columnsClassName="md:grid-cols-2 lg:grid-cols-3"
          cardClassName="p-5 md:p-6"
          contentClassName="min-h-[140px]!"
          titleClassName="mb-3 md:text-[1.3rem]"
          descriptionClassName="text-[0.9rem] leading-[1.6]"
        />
      </div>
    </section>
  );
}
