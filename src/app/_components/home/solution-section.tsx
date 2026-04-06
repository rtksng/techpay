import FeaturesSectionDemo1, {
  type FeaturesSectionDemoItem,
} from "@/components/ui/features-section-demo-1";

const solutionPromises: FeaturesSectionDemoItem[] = [
  {
    number: "01",
    title: "Guided Confidence",
    description:
      "Choosing a computer should feel simple, not intimidating. We help match you with the right device based on how you actually use it, whether that is for schoolwork, office tasks, video calls, running a small business, or everyday family needs.",
    accentClass: "from-techpay-primary via-techpay-pink to-techpay-primary/70",
    borderClass: "border-techpay-primary/15",
    surfaceClass: "bg-linear-to-b from-white to-[#fff3f7]",
    glowClass: "bg-techpay-primary/12",
    pattern: [
      [7, 1],
      [8, 3],
      [10, 2],
      [12, 4],
      [13, 1],
    ],
  },
  {
    number: "02",
    title: "Infinite Shelf",
    description:
      "Your local store is no longer limited by what is physically in stock. With TechPay.ai, you can explore a much wider catalogue and choose the product that truly fits your needs, not just the one that happens to be available that day.",
    accentClass: "from-techpay-orange via-[#ffb36b] to-techpay-primary/65",
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
    number: "03",
    title: "Pay Your Way",
    description:
      "A better computer should not stay out of reach because of one large upfront payment. Our payment plans are designed to make ownership easier, with a fast approval process and instalments that fit real household budgets.",
    accentClass: "from-techpay-purple via-[#be73d0] to-techpay-primary/65",
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
  {
    number: "04",
    title: "Support for Life",
    description:
      "Your journey does not end at checkout. If you need help getting started, setting something up, or solving a problem later, TechPay.ai connects you with real support through your trusted local store.",
    accentClass: "from-techpay-pink via-techpay-primary to-techpay-purple/70",
    borderClass: "border-techpay-pink/25",
    surfaceClass: "bg-linear-to-b from-white to-[#fff5fb]",
    glowClass: "bg-techpay-pink/16",
    pattern: [
      [6, 1],
      [8, 4],
      [9, 2],
      [11, 5],
      [12, 3],
    ],
  },
];

export default function TechPaySolutionSection() {
  return (
    <section
      className="relative z-3 overflow-hidden bg-[#f7f7fb] px-5 pb-24 pt-8 md:px-[60px] md:pb-28 md:pt-28"
      id="solution"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-90"
        aria-hidden="true"
      >
        <div className="absolute left-[-8%] top-10 h-56 w-56 rounded-full bg-techpay-primary/8 blur-3xl" />
        <div className="absolute right-[-6%] top-1/3 h-64 w-64 rounded-full bg-techpay-orange/8 blur-3xl" />
        {/* <div className="absolute -bottom-16 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-techpay-purple/8 blur-3xl" /> */}
      </div>

      <div className="relative mx-auto max-w-[1440px]">
        <div className="mb-10 max-w-[760px] md:mb-14">
          <p className="tag dark mb-4 inline-block text-[0.78rem] font-semibold uppercase tracking-[0.12em] text-techpay-primary">
            TechPay.ai Solution
          </p>
          <h2 className="mb-[18px] font-display text-[1.8rem] font-bold leading-[1.15] tracking-[-0.03em] text-[#111111] md:text-[clamp(1.9rem,4vw,3.3rem)]">
            One Platform. Four Promises.
          </h2>
          {/* <p className="max-w-[680px] text-[1.05rem] leading-[1.7] text-[#555555]">
            TechPay.ai brings together the four things people need most when
            buying a computer: clarity, choice, flexible payments, and
            dependable support through the local store they already trust.
          </p> */}
        </div>

        <FeaturesSectionDemo1 items={solutionPromises} />
      </div>
    </section>
  );
}
