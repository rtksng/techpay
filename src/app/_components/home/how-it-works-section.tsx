import { cn } from "@/lib/utils";
import { ButtonLink } from "@/components/ui/button";

type JourneyStep = {
  stepLabel: string;
  number: string;
  title: string;
  description: string;
  accentClass: string;
  accentLineClass: string;
  labelClass: string;
  glowClass: string;
};

const journeySteps: JourneyStep[] = [
  {
    stepLabel: "Step 1",
    number: "01",
    title: "Walk In or Buy Through QR",
    description:
      "Visit a TechPay.ai partner store near you, or start your journey through a QR code. Speak to a real person who listens first and guides you without pressure.",
    accentClass: "feature-card--pink",
    accentLineClass: "from-techpay-primary via-techpay-pink to-techpay-primary/70",
    labelClass: "text-techpay-primary",
    glowClass: "bg-techpay-primary/18",
  },
  {
    stepLabel: "Step 2",
    number: "02",
    title: "Choose Freely",
    description:
      "Browse beyond what is on the shelf. Explore the full catalogue, tell us what you need the computer for, and get recommendations that make sense for your life.",
    accentClass: "feature-card--orange",
    accentLineClass: "from-techpay-orange via-[#ffb36b] to-techpay-primary/60",
    labelClass: "text-techpay-orange",
    glowClass: "bg-techpay-orange/18",
  },
  {
    stepLabel: "Step 3",
    number: "03",
    title: "Own It Today",
    description:
      "Select a payment plan that works for your budget, get approved in 60 seconds, and take your laptop home with confidence.",
    accentClass: "feature-card--purple",
    accentLineClass: "from-techpay-purple via-[#be73d0] to-techpay-primary/60",
    labelClass: "text-techpay-purple",
    glowClass: "bg-techpay-purple/18",
  },
];

export default function TechPayHowItWorksSection() {
  return (
    <section
      className="relative z-3 overflow-hidden bg-linear-to-b from-[#120813] via-[#0d0711] to-techpay-bg px-5 pb-24 pt-16 md:px-[60px] md:pb-28 md:pt-24"
      id="journey-steps"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute left-[-6%] top-[18%] h-64 w-64 rounded-full bg-techpay-primary/10 blur-3xl" />
        <div className="absolute right-[-8%] top-[26%] h-72 w-72 rounded-full bg-techpay-purple/10 blur-3xl" />
        <div className="absolute -bottom-16 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-techpay-orange/8 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-[1440px]">
        <div className="mb-10 max-w-6xl md:mb-14">
          <p className="mb-4 inline-block text-[0.78rem] font-semibold uppercase tracking-[0.12em] text-techpay-primary">
            How It Works
          </p>
          <h2 className="mb-[18px] font-display text-[1.85rem] font-bold leading-[1.12] tracking-[-0.03em] text-white md:text-[clamp(2rem,4vw,3.35rem)]">
            From choosing the right device to taking it home, every step is
            designed to feel clear, friendly, and easy.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
          {journeySteps.map((step) => (
            <HowItWorksStepCard key={step.number} step={step} />
          ))}
        </div>

        <div className="mt-10 md:mt-12">
          <ButtonLink
            href="#qr-section"
            className="sm:w-auto"
            fullWidth
            size="lg"
          >
            Find a Store or Scan the QR
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}

function HowItWorksStepCard({ step }: { step: JourneyStep }) {
  return (
    <article
      className={cn(
        "feature-card group relative isolate flex h-full min-h-[250px] flex-col overflow-hidden border border-black px-6 py-5 md:px-8",
        step.accentClass
      )}
    >
      {/* <div
        className={cn(
          "absolute inset-x-0 top-0 z-2 h-[2px] bg-linear-to-r",
          step.accentLineClass
        )}
        aria-hidden="true"
      /> */}
      <div
        className={cn(
          "pointer-events-none absolute -right-8 top-4 z-2 h-28 w-28 rounded-full blur-3xl transition duration-300 group-hover:scale-110",
          step.glowClass
        )}
        aria-hidden="true"
      />
      <div className="feature-card-bg" aria-hidden="true">
        <canvas className="feature-card-dots" />
        <div className="feature-card-glow" />
      </div>

      <div className="relative z-2 flex h-full flex-col">
        <p
          className={cn(
            "mb-5 text-[0.76rem] font-semibold uppercase tracking-[0.22em]",
            step.labelClass
          )}
        >
          {step.stepLabel}
        </p>
        <h3 className="mb-5 max-w-[280px] font-display text-[1.35rem] font-bold leading-[1.14] tracking-[-0.03em] text-white md:text-[1.5rem]">
          {step.title}
        </h3>
        <p className="grow max-w-[320px] text-[0.96rem] leading-[1.75] text-white/72">
          {step.description}
        </p>
      </div>

      <span
        className={cn(
          "pointer-events-none absolute bottom-4 right-6 z-2 font-display text-[3.8rem] font-bold leading-none opacity-[0.08]",
          step.labelClass
        )}
        aria-hidden="true"
      >
        {step.number}
      </span>
    </article>
  );
}
