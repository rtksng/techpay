import { Grid } from "@/components/ui/features-section-demo-1";

type ProblemCard = {
  id: string;
  cardClass: string;
  number: string;
  title: string;
  body: string;
  accentClass: string;
  borderClass: string;
  surfaceClass: string;
  glowClass: string;
  pattern: number[][];
};

export default function TechPayProblemsSection() {
  const kicker = "TechPay.ai Solution";
  const heading = "One Platform Four Promises";
  const intro =
    "TechPay.ai brings together clarity, wider product choice, flexible payments, and dependable support through the local store people already trust.";

  const problems: ProblemCard[] = [
    {
      id: "choice",
      cardClass: "card-pink",
      number: "01",
      title: "Guided Confidence",
      body:
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
      id: "availability",
      cardClass: "card-orange",
      number: "02",
      title: "Infinite Shelf",
      body:
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
      id: "affordability",
      cardClass: "card-purple",
      number: "03",
      title: "Pay Your Way",
      body:
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
      id: "support",
      cardClass: "card-rose",
      number: "04",
      title: "Support for Life",
      body:
        "Your journey does not end at checkout. If you need help getting started, setting something up, or solving a problem later, TechPay.ai empowers you with real support.",
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

  return (
    <section
      className="section-problems relative z-[3] flex min-h-screen flex-col justify-center overflow-hidden bg-[#f7f7fb] pt-20 md:pt-[100px] md:pb-[50px]"
      id="problems"
    >
      <div className="problems-container mx-auto block w-full md:grid md:min-h-screen">
        <div className="px-5 md:px-[60px]">
            <div className="problems-header mb-9 max-w-[720px] md:mb-14">
              <p className="tag dark mb-4 inline-block text-[0.78rem] font-semibold uppercase tracking-[0.12em] text-techpay-primary">
                {kicker}
              </p>
              <h2 className="mb-[18px] font-display text-[1.8rem] font-bold leading-[1.2] tracking-[-0.02em] text-[#111111] md:text-[clamp(1.6rem,4vw,3.1rem)]">
                {heading}
              </h2>
              <p className="text-[1.05rem] leading-[1.7] text-[#555555]">{intro}</p>
            </div>
          </div>
        <div className="problems-stage relative mt-[18px] flex w-full min-w-0 items-center px-5 min-[1280px]:px-0 md:mt-[clamp(10px,2vw,24px)]">
          <div className="problems-lines " aria-hidden="true">
            <svg className="problems-lines-svg opacity-40!" viewBox="0 0 1440 640" preserveAspectRatio="none">
              <path className="problems-line" d="M 0 232 C 176 112, 348 112, 544 174 S 1014 304, 1440 144" />
              <path
                className="problems-line-trace problems-line-trace--pink"
                d="M 0 232 C 176 112, 348 112, 544 174 S 1014 304, 1920 144"
              />

              <path className="problems-line" d="M 0 386 C 188 286, 372 244, 576 294 S 1030 428, 1440 336" />
              <path
                className="problems-line-trace problems-line-trace--orange"
                d="M 0 386 C 188 286, 372 244, 576 294 S 1030 428, 1920 336"
              />

              <path className="problems-line" d="M 0 548 C 194 446, 430 414, 668 448 S 1064 566, 1440 470" />
              <path
                className="problems-line-trace problems-line-trace--purple"
                d="M 0 548 C 194 446, 430 414, 668 448 S 1064 566, 1920 470"
              />

              <path className="problems-line" d="M 0 618 C 204 528, 418 498, 652 522 S 1058 592, 1440 512" />
              <path
                className="problems-line-trace problems-line-trace--rose"
                d="M 0 618 C 204 528, 418 498, 652 522 S 1058 592, 1920 512"
              />
            </svg>
          </div>

            <div className="problems-track grid gap-6 md:block md:gap-0">
              {problems.map((problem) => (
                <div
                  key={problem.id}
                  className={`problem-card ${problem.cardClass} group relative left-auto top-auto flex w-full flex-col overflow-hidden border p-6 shadow-[0_24px_64px_rgba(15,23,42,0.08)] md:absolute md:left-1/2 md:top-1/2  ${problem.borderClass} ${problem.surfaceClass}`}
                >
                  <div
                    className={`absolute inset-x-0 top-0 h-1 bg-linear-to-r ${problem.accentClass}`}
                    aria-hidden="true"
                  />
                  <div
                    className={`absolute -right-8 top-0 h-28 w-24 rounded-full blur-3xl ${problem.glowClass}`}
                    aria-hidden="true"
                  />
                  <Grid size={24} pattern={problem.pattern} />

                  <div className="relative z-20 flex min-h-0 flex-1 flex-col">
                    <h3 className="mb-5 shrink-0 font-display text-[1.28rem] font-bold leading-[1.15] tracking-[-0.03em] text-[#111111] md:text-[1.45rem]">
                      <span className="text-techpay-primary">{problem.number}</span>
                      <span className="mx-2 text-slate-300">/</span>
                      <span>{problem.title}</span>
                    </h3>
                    <p className="text-[0.94rem] leading-[1.75] text-slate-600 md:min-h-0 md:flex-1 md:overflow-y-auto md:[scrollbar-gutter:stable]">
                      {problem.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }
