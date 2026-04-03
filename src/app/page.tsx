import Image from "next/image";
import TechPayDifferenceSection from "@/components/techpay-difference-section";
import TechPayEligibilitySection from "@/components/techpay-eligibility-section";
import TechPayHowItWorksSection from "@/components/techpay-how-it-works-section";
import TechPayImpactNumbersSection from "@/components/techpay-impact-numbers-section";
import SiteFooter from "@/components/site-footer";
import SiteNavbar from "@/components/site-navbar";
import TechPaySolutionSection from "@/components/techpay-solution-section";
import TechPayTestimonialsSection from "@/components/techpay-testimonials-section";
import TechPayExperience from "@/components/techpay-experience";
import CurvedLoop from "@/components/ui/curved-loop";

const steps = [
  "Find a Store",
  "Get Expert Guidance",
  "Easy Instalments",
  "Support for Life",
];

const heroAudienceLinks = [
  { href: "/oem", label: "OEM" },
  { href: "#", label: "Consumer" },
  { href: "/retailers", label: "Retailer" },
];

const features = [
  {
    accentClass: "feature-card--pink",
    iconClass: "bg-techpay-primary/10 text-techpay-primary",
    title: "Available in India & Malaysia",
    description: "More countries coming soon.",
    Icon: GlobeIcon,
  },
  {
    accentClass: "feature-card--orange",
    iconClass: "bg-techpay-orange/10 text-techpay-orange",
    title: "60-Second Approval",
    description: "Get a payment decision in under a minute.",
    Icon: BoltIcon,
  },
  {
    accentClass: "feature-card--purple",
    iconClass: "bg-techpay-purple/10 text-techpay-purple",
    title: "Real Human Support",
    description: "Friendly in-store guidance and personalized help after purchase.",
    Icon: PeopleIcon,
  },
  {
    accentClass: "feature-card--purple",
    iconClass: "bg-techpay-purple/10 text-techpay-purple",
    title: "Life Time Support",
    description: "Get help after purchase too, from setup and learning to troubleshooting later on.",
    Icon: InfinityIcon,
  },
];

const problems = [
  {
    cardClass: "card-pink",
    mode: "Choice",
    title: "&ldquo;I don&apos;t know what to choose&rdquo;",
    body:
      "There are hundreds of laptops out there, and most people do not want to make an expensive mistake. You should not need to understand technical jargon to make the right decision. TechPay.ai helps you compare options in plain language, so you can choose with confidence.",
    cta: "Help Me Choose",
  },
  {
    cardClass: "card-orange",
    mode: "Availability",
    title: "&ldquo;The store might not have it&rdquo;",
    body:
      "You find the right laptop online, then discover your local store does not stock it. That usually means compromise, delay, or walking away empty-handed. With TechPay.ai, your local store gets access to a wider digital catalogue, so you are not limited to what is on display.",
    cta: "Browse Catalogue",
  },
  {
    cardClass: "card-purple",
    mode: "Affordability",
    title: "&ldquo;I can&apos;t afford it all at once&rdquo;",
    body:
      "A computer can open doors for school, work, business, and daily life, but paying the full amount upfront is not always possible. Our flexible payment plans help you take home what you need now and pay in manageable instalments.",
    cta: "Check Your Eligibility",
  },
];

export default function Home() {
  return (
    <>
      <SiteNavbar isLandingPage />

      <div className="hero-motion-bg " aria-hidden="true">
        <svg className="hero-motion-svg" viewBox="0 0 1440 920" preserveAspectRatio="none">
          <path className="hero-motion-line" d="M 1460 182 H 1200 Q 1110 182 1110 104 V -20" pathLength="100" />
          <path className="hero-motion-trace hero-motion-trace--one" d="M 1460 182 H 1200 Q 1110 182 1110 104 V -20" pathLength="100" />

          <path className="hero-motion-line" d="M -20 182 H 144 Q 220 182 220 104 V -20" pathLength="100" />
          <path className="hero-motion-trace hero-motion-trace--two" d="M -20 182 H 144 Q 220 182 220 104 V -20" pathLength="100" />

          <path className="hero-motion-line" d="M -20 470 H 128 Q 240 470 240 582 V 786 Q 240 860 314 860 H 438 Q 510 860 510 940" pathLength="100" />
          <path className="hero-motion-trace hero-motion-trace--three" d="M -20 470 H 128 Q 240 470 240 582 V 786 Q 240 860 314 860 H 438 Q 510 860 510 940" pathLength="100" />

          <path className="hero-motion-line" d="M 980 940 V 760 Q 980 676 1064 676 H 1368 Q 1440 676 1440 604 V 520" pathLength="100" />
          <path className="hero-motion-trace hero-motion-trace--four" d="M 980 940 V 760 Q 980 676 1064 676 H 1368 Q 1440 676 1440 604 V 520" pathLength="100" />
        </svg>
      </div>

      <div className="monitor-backdrop" aria-hidden="true">
        <Image
          src="/parts/monitor1.png"
          alt=""
          fill
          priority
          sizes="(max-width: 768px) 72vw, 42vw"
          className="monitor-backdrop-image"
        />
      </div>

      <div className="headphones-backdrop" aria-hidden="true">
        <Image
          src="/parts/headphones.png"
          alt=""
          fill
          priority
          sizes="(max-width: 768px) 36vw, 18vw"
          className="monitor-backdrop-image"
        />
      </div>

      <div className="laptop-shadow" aria-hidden="true" />
      <canvas id="laptop" />

      <main className="relative z-[2]">
        <section className="section section-hero relative flex min-h-screen flex-col justify-start px-4 pb-10 pt-[120px] text-center md:px-6 md:pb-[60px] md:pt-[120px] lg:px-8 lg:pb-20 lg:pt-[140px]" id="hero">
          <aside
            className="fixed right-5 top-1/2 z-4 hidden w-[150px] -translate-y-1/2 flex-col items-stretch gap-2 md:flex lg:right-8 lg:w-[165px]"
            aria-label="Audience shortcuts"
          >
            
            <div className="grid gap-2">
              {heroAudienceLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="border border-white/18 bg-black/80 px-4 py-2.5 text-left text-[0.82rem] font-display font-semibold tracking-[0.01em] text-white no-underline  backdrop-blur-[28px] transition hover:-translate-x-2 hover:border-techpay-primary/45 hover:bg-black/88 hover:text-techpay-primary hover:shadow-[0_20px_44px_rgba(0,0,0,0.48),inset_0_0_0_1px_rgba(237,29,95,0.14)]"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </aside>

          <div className="hero-content invisible relative z-[3] mx-auto max-w-full px-2 md:px-0">
            <p className="tag mb-4 inline-block text-[0.78rem] font-semibold uppercase tracking-[0.12em] text-techpay-primary"> Welcome to TechPay.ai
            </p>
            <h1 className="mb-4 font-display text-[clamp(2.6rem,8vw,5rem)] font-bold leading-[1.08] tracking-[-0.03em] text-techpay-heading">
              You Deserve a Computer
            </h1>
          </div>
        </section>

        <section className="section laptop-left relative flex min-h-screen items-center justify-center px-4 pb-10 pt-[100px] md:px-6 md:pb-[60px] md:pt-[100px] lg:px-8 lg:pb-20 lg:pt-[120px]" id="qr-section">
          <div className="section-pair mx-auto grid w-full items-center gap-0 md:gap-8 lg:gap-[clamp(40px,7vw,96px)] lg:[grid-template-columns:minmax(0,1.15fr)_minmax(360px,460px)]">
            <div className="laptop-anchor hidden min-h-[clamp(280px,34vw,460px)] md:block" aria-hidden="true" />
            <div className="scales-frame relative ml-0 mr-auto w-full p-[18px] md:p-[22px] lg:ml-auto lg:mr-0 lg:w-[min(560px,100%)]">
              <span className="scales-strip scales-strip--left" aria-hidden="true" />
              <span className="scales-strip scales-strip--right" aria-hidden="true" />
              <span className="scales-strip scales-strip--top" aria-hidden="true" />
              <span className="scales-strip scales-strip--bottom" aria-hidden="true" />
              <div className="content-block relative z-[1] w-full max-w-full overflow-hidden border border-white/10 bg-black/[0.72] px-[22px] py-7 backdrop-blur-[28px] md:px-9 md:py-9 lg:px-10 lg:py-11">
                <div className="card-accent accent-pink" />
                <p className="tag mb-4 inline-block text-[0.78rem] font-semibold uppercase tracking-[0.12em] text-techpay-primary">
                  Find a Store
                </p>
                <h2 className="mb-[14px] font-display text-[1.6rem] font-bold leading-[1.2] tracking-[-0.02em] text-techpay-heading md:text-[1.8rem] lg:text-[1.85rem]">
                  Your Device, Your Way
                </h2>
                <p className="mb-4 text-[0.95rem] leading-[1.75] tracking-[0.01em] text-techpay-muted">
                  Use our recommendation engine to find the right device, then scan the QR code to locate a trusted store near you.
                </p>
                <div className="qr-wrapper mt-6 text-center">
                  <div className="qr-code inline-block cursor-pointer">
                    <Image
                      src="/assets/qrcode.png"
                      alt="QR code to find a TechPay.ai store near you"
                      width={140}
                      height={140}
                      className="block h-auto rounded-[8px]"
                    />
                  </div>
                  <p className="qr-label mt-[14px] text-[0.8rem] tracking-[0.04em] text-techpay-muted">
                    Scan to find your nearest store
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section laptop-right relative flex min-h-screen items-center justify-center px-4 pb-10 pt-[100px] md:px-6 md:pb-[60px] md:pt-[100px] lg:px-8 lg:pb-20 lg:pt-[120px]" id="how-it-works">
          <div className="section-pair mx-auto grid w-full items-center gap-0 md:gap-8 lg:gap-[clamp(40px,7vw,96px)] lg:[grid-template-columns:minmax(360px,460px)_minmax(0,1.15fr)]">
            <div className="scales-frame relative ml-0 mr-auto w-full p-[18px] md:p-[22px] lg:w-[min(560px,100%)]">
              <span className="scales-strip scales-strip--left" aria-hidden="true" />
              <span className="scales-strip scales-strip--right" aria-hidden="true" />
              <span className="scales-strip scales-strip--top" aria-hidden="true" />
              <span className="scales-strip scales-strip--bottom" aria-hidden="true" />
              <div className="content-block relative z-[1] w-full max-w-full overflow-hidden border border-white/10 bg-black/[0.72] px-[22px] py-7 backdrop-blur-[28px] md:px-9 md:py-9 lg:px-10 lg:py-11">
                <div className="card-accent accent-orange" />
                <p className="tag mb-4 inline-block text-[0.78rem] font-semibold uppercase tracking-[0.12em] text-techpay-primary">
                  Simple Process
                </p>
                <h2 className="mb-[14px] font-display text-[1.6rem] font-bold leading-[1.2] tracking-[-0.02em] text-techpay-heading md:text-[1.8rem] lg:text-[1.85rem]">
                  See How It Works
                </h2>
                <div className="steps mt-1 flex flex-col gap-5">
                  {steps.map((step, index) => (
                    <div key={step} className="step flex items-start gap-[18px] border border-transparent px-4 py-[14px] transition hover:border-white/10 hover:bg-white/[0.02]">
                      <div className="step-num min-w-10 pt-[2px] font-display text-[1.5rem] font-bold leading-none">
                        {String(index + 1).padStart(2, "0")}
                      </div>
                      <div>
                        <h3 className="mb-[3px] font-display text-[1rem] font-semibold text-techpay-heading">
                          {step}
                        </h3>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="laptop-anchor hidden min-h-[clamp(280px,34vw,460px)] md:block" aria-hidden="true" />
          </div>
        </section>

        <section className="section laptop-left relative flex min-h-screen items-center justify-center px-4 pb-10 pt-[100px] md:px-6 md:pb-[60px] md:pt-[100px] lg:px-8 lg:pb-20 lg:pt-[120px]" id="recommendation">
          <div className="section-pair mx-auto grid w-full items-center gap-0 md:gap-8 lg:gap-[clamp(40px,7vw,96px)] lg:[grid-template-columns:minmax(0,1.15fr)_minmax(360px,460px)]">
            <div className="laptop-anchor hidden min-h-[clamp(280px,34vw,460px)] md:block" aria-hidden="true" />
            <div className="scales-frame relative ml-0 mr-auto w-full p-[18px] md:p-[22px] lg:ml-auto lg:mr-0 lg:w-[min(560px,100%)]">
              <span className="scales-strip scales-strip--left" aria-hidden="true" />
              <span className="scales-strip scales-strip--right" aria-hidden="true" />
              <span className="scales-strip scales-strip--top" aria-hidden="true" />
              <span className="scales-strip scales-strip--bottom" aria-hidden="true" />
              <div className="content-block relative z-[1] w-full max-w-full overflow-hidden border border-white/10 bg-black/[0.72] px-[22px] py-7 backdrop-blur-[28px] md:px-9 md:py-9 lg:px-10 lg:py-11">
                <div className="card-accent accent-purple" />
                <p className="tag mb-4 inline-block text-[0.78rem] font-semibold uppercase tracking-[0.12em] text-techpay-primary">
                  AI-Powered
                </p>
                <h2 className="mb-[14px] font-display text-[1.6rem] font-bold leading-[1.2] tracking-[-0.02em] text-techpay-heading md:text-[1.8rem] lg:text-[1.85rem]">
                  Get Laptop Recommendation
                </h2>
                <p className="mb-4 text-[0.95rem] leading-[1.75] tracking-[0.01em] text-techpay-muted">
                  Answer a few simple questions and our AI-powered engine will find the perfect laptop for your needs, budget, and usage.
                </p>
                <a
                  href="#"
                  className="btn-primary btn-lg btn-pill relative isolate mt-3 inline-block overflow-hidden px-9 py-[18px] text-[1.05rem] font-bold text-white no-underline"
                >
                  Get Your Recommendation &rarr;
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="section-features relative z-[3] px-5 pb-[60px] pt-[100px] md:px-[60px] md:pb-20 md:pt-[140px]" id="features">
          <div className="features-inner mx-auto grid max-w-[1440px] grid-cols-1 gap-4 md:grid-cols-4 md:gap-6">
            {features.map(({ accentClass, iconClass, title, description, Icon }) => (
              <div key={title} className={`feature-card ${accentClass} relative isolate overflow-hidden border border-black px-8 py-10 text-center`}>
                <div className="feature-card-bg" aria-hidden="true">
                  <canvas className="feature-card-dots" />
                  <div className="feature-card-glow" />
                </div>
                <div className={`feature-icon relative z-[2] mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl ${iconClass}`}>
                  <Icon />
                </div>
                <h3 className="relative z-[2] mb-[10px] font-display text-[clamp(1rem,2vw,2.1rem)] font-semibold text-techpay-heading">
                  {title}
                </h3>
                <p className="relative z-[2] text-[0.95rem] leading-[1.65] text-techpay-muted">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="section-problems relative z-[3]  flex min-h-screen flex-col justify-center overflow-hidden bg-[#f7f7fb] pt-20 md:pt-[100px] md:pb-[50px]" id="problems">
          <div className="problems-container mx-auto block px-5 md:grid md:min-h-screen md:px-[60px]">
            <div className="problems-header mb-9 max-w-[720px] md:mb-14">
              <p className="tag dark mb-4 inline-block text-[0.78rem] font-semibold uppercase tracking-[0.12em] text-techpay-primary">
                The Real Challenges
              </p>
              <h2 className="mb-[18px] font-display text-[1.8rem] font-bold leading-[1.2] tracking-[-0.02em] text-[#111111] md:text-[clamp(1.6rem,4vw,3.1rem)]">
                Buying a computer can feel overwhelming. We get it.
              </h2>
              <p className="text-[1.05rem] leading-[1.7] text-[#555555]">
                For many organizations, the problem is not just wanting a computer. It is knowing what to choose, where to find it, and how to pay for it without stress.
              </p>
            </div>
            <div className="problems-stage relative mt-[18px] flex items-center md:mt-[clamp(10px,2vw,24px)]">
              <div className="problems-lines" aria-hidden="true">
                <svg className="problems-lines-svg" viewBox="0 0 1440 640" preserveAspectRatio="none">
                  <path className="problems-line" d="M 0 232 C 176 112, 348 112, 544 174 S 1014 304, 1440 144" />
                  <path className="problems-line-trace problems-line-trace--pink" d="M 0 232 C 176 112, 348 112, 544 174 S 1014 304, 1440 144" />

                  <path className="problems-line" d="M 0 386 C 188 286, 372 244, 576 294 S 1030 428, 1440 336" />
                  <path className="problems-line-trace problems-line-trace--orange" d="M 0 386 C 188 286, 372 244, 576 294 S 1030 428, 1440 336" />

                  <path className="problems-line" d="M 0 548 C 194 446, 430 414, 668 448 S 1064 566, 1440 470" />
                  <path className="problems-line-trace problems-line-trace--purple" d="M 0 548 C 194 446, 430 414, 668 448 S 1064 566, 1440 470" />
                </svg>
              </div>

              <div className="problems-track grid gap-[18px] md:block">
                {problems.map((problem) => (
                  <div
                    key={problem.mode}
                    className={`problem-card ${problem.cardClass} relative left-auto top-auto flex w-full flex-col border border-slate-900/10 bg-white px-6 py-7 md:absolute md:left-1/2 md:top-1/2 md:px-[34px] md:pb-7 md:pt-[34px]`}
                  >
                    <div className="problem-card-head mb-[18px] flex items-start justify-between gap-[18px] md:mb-[26px]">
                      <p className="problem-card-mode font-display text-[1.7rem] font-bold uppercase leading-[0.95] tracking-[-0.04em] text-[#111111] md:text-[clamp(2rem,2.2vw,2.7rem)]">
                        {problem.mode}
                      </p>
                    </div>
                    <h3
                      className="problem-card-title mb-4 font-display text-[1.04rem] font-semibold leading-[1.2] tracking-[-0.03em] text-[#161616] md:mb-[18px] md:text-[clamp(1.14rem,1.22vw,1.4rem)]"
                      dangerouslySetInnerHTML={{ __html: problem.title }}
                    />
                    <p className="problem-card-body grow text-[0.88rem] leading-[1.64] tracking-[-0.01em] text-slate-600 md:text-[0.93rem] md:leading-[1.72]">
                      {problem.body}
                    </p>
                    <div className="problem-card-footer mt-auto grid items-end gap-[10px] pt-6 [grid-template-columns:auto_1fr] md:gap-3 md:[grid-template-columns:auto_1fr_auto]">
                      <a href="#" className="btn-problem">
                        {problem.cta}
                      </a>
                      <span className="problem-card-rotate">{problem.mode}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <TechPaySolutionSection />
        <section className="relative z-[3] overflow-hidden bg-[#f7f7fb] pb-10">
         
          <div className="relative px-4 md:px-[60px]">
            <CurvedLoop
              marqueeText="Walk In or Buy Through QR ✦ Choose Freely ✦ Own It Today ✦ "
              speed={1.2}
              curveAmount={180}
              interactive={false}
              className="font-display text-[clamp(2.5rem,7vw,5.5rem)] tracking-[0.08em] fill-black/85"
            />
          </div>
        </section>
        <TechPayHowItWorksSection />
        <TechPayTestimonialsSection />
        <TechPayImpactNumbersSection />
        <TechPayEligibilitySection />
        {/* <TechPayDifferenceSection /> */}

        <SiteFooter />
      </main>

      <TechPayExperience />
    </>
  );
}

function GlobeIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}

function BoltIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
  );
}

function PeopleIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function InfinityIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M18.5 8.5c-2.2 0-3.4 1.2-5.5 4-2.1-2.8-3.3-4-5.5-4A4.5 4.5 0 0 0 3 13c0 2.49 2.01 4.5 4.5 4.5 2.2 0 3.4-1.2 5.5-4 2.1 2.8 3.3 4 5.5 4A4.5 4.5 0 0 0 23 13c0-2.49-2.01-4.5-4.5-4.5z" />
    </svg>
  );
}
