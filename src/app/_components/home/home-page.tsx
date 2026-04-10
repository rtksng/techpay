import Image from "next/image";
import Link from "next/link";
import TechPayEligibilitySection from "@/app/_components/home/eligibility-section";
import TechPayHowItWorksSection from "@/app/_components/home/how-it-works-section";
import TechPayImpactNumbersSection from "@/app/_components/home/impact-numbers-section";
import TechPayProblemsSection from "@/app/_components/home/problems-section";
import TechPayTestimonialsSection from "@/app/_components/home/testimonials-section";
import TechPayExperience from "@/components/techpay-experience";
import CurvedLoop from "@/components/ui/curved-loop";

const steps = [
  "Find a Store",
  "Get Expert Guidance",
  "Easy Instalments",
  "Support for Life",
];

// const heroAudienceLinks = [
//   { href: "/oem", label: "OEM" },
//   { href: "/distributors", label: "Distributor" },
//   { href: "/retailers", label: "Retailer" },
// ];

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
    title: "Find a Store",
    description: "Locate your nearest TechPay.ai partner store and start your journey in person.",
    Icon: StoreIcon,
    href: "/retailers",
    ctaLabel: "Find a Store",
  },
];

export default function HomePage() {
  return (
    <>
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
          src="/parts/pri-head2.png"
          alt=""
          width={700}
          height={526}
          priority
          sizes="(max-width: 768px) 36vw, 18vw"
          className="headphones-backdrop-image"
        />
      </div>

      <main className="relative z-[2]">
        <section className="section section-hero relative flex min-h-screen flex-col justify-start px-4 pb-10 pt-[120px] text-center md:px-6 md:pb-[60px] md:pt-[120px] lg:px-8 lg:pb-20 lg:pt-[140px]" id="hero">
          <div className="hero-laptop-stage" aria-hidden="true">
            <div className="laptop-shadow" />
            <canvas id="laptop" />
          </div>

          {/* <aside
            className="fixed right-5 top-1/2 z-4 hidden w-[150px] -translate-y-1/2 flex-col items-stretch gap-2 lg:flex lg:right-8 lg:w-[165px]"
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
          </aside> */}

          <div className="hero-content relative z-[3] mx-auto max-w-[22rem] px-2 sm:max-w-[30rem] md:max-w-full md:px-0">
            <p className="tag mb-4 inline-block text-[0.78rem] font-semibold uppercase tracking-[0.12em] text-techpay-primary"> Welcome to TechPay.ai
            </p>
            <h1 className="mb-4 font-display text-[clamp(2.6rem,8vw,5rem)] font-bold leading-[1.08] tracking-[-0.03em] text-techpay-heading">
              You Deserve a Computer
            </h1>
          </div>
        </section>

        <section className="section laptop-left relative flex min-h-[auto] items-center justify-center px-4 pb-10 md:pt-[88px] pt-[20px] md:min-h-[72vh] md:px-6 md:pb-[60px] md:pt-[96px] lg:min-h-screen lg:px-8 lg:pb-20 lg:pt-[120px]" id="qr-section">
          <div className="section-pair mx-auto grid w-full items-center gap-0 md:gap-8 xl:gap-[clamp(40px,7vw,96px)] xl:[grid-template-columns:minmax(0,1.15fr)_minmax(360px,460px)]">
            <div className="laptop-anchor hidden min-h-[clamp(280px,34vw,460px)] xl:block" aria-hidden="true" />
            <div className="scales-frame relative ml-0 mr-auto w-full p-[18px] md:p-[22px] xl:ml-auto xl:mr-0 xl:w-[min(560px,100%)]">
              <span className="scales-strip scales-strip--left" aria-hidden="true" />
              <span className="scales-strip scales-strip--right" aria-hidden="true" />
              <span className="scales-strip scales-strip--top" aria-hidden="true" />
              <span className="scales-strip scales-strip--bottom" aria-hidden="true" />
              <div className="content-block relative z-[1] w-full max-w-full overflow-hidden border border-white/10 bg-black/[0.72] px-[22px] py-7 backdrop-blur-[28px] md:px-9 md:py-9 lg:px-10 lg:py-11">
                <div className="card-accent accent-pink" />

                <h2 className="mb-[14px] font-display text-[1.6rem] font-bold leading-[1.2] tracking-[-0.02em] text-techpay-heading md:text-[1.8rem] lg:text-[1.85rem]">
                  <span className="inline-flex flex-col items-start gap-3">
                    <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-techpay-primary/12 text-techpay-primary">
                      <GuidanceIcon />
                    </span>
                    <span>Get Expert Guidance</span>
                  </span>
                </h2>
                <p className="mb-4 text-[0.95rem] leading-[1.75] tracking-[0.01em] text-techpay-muted">
                  Choosing the right computer can be confusing. We help you compare options based on your needs, so you can buy with more clarity and confidence.
                </p>

              </div>
            </div>
          </div>
        </section>

        <section className="section laptop-right relative flex min-h-[auto] items-center justify-center px-4 pb-10 md:pt-[88px] pt-[20px] md:min-h-[72vh] md:px-6 md:pb-[60px] md:pt-[96px] lg:min-h-screen lg:px-8 lg:pb-20 lg:pt-[120px]" id="how-it-works">
          <div className="section-pair mx-auto grid w-full items-center gap-0 md:gap-8 xl:gap-[clamp(40px,7vw,96px)] xl:[grid-template-columns:minmax(360px,460px)_minmax(0,1.15fr)]">
            <div className="scales-frame relative ml-0 mr-auto w-full p-[18px] md:p-[22px] xl:w-[min(560px,100%)]">
              <span className="scales-strip scales-strip--left" aria-hidden="true" />
              <span className="scales-strip scales-strip--right" aria-hidden="true" />
              <span className="scales-strip scales-strip--top" aria-hidden="true" />
              <span className="scales-strip scales-strip--bottom" aria-hidden="true" />
              <div className="content-block relative z-[1] w-full max-w-full overflow-hidden border border-white/10 bg-black/[0.72] px-[22px] py-7 backdrop-blur-[28px] md:px-9 md:py-9 lg:px-10 lg:py-11">
                <div className="card-accent accent-orange" />

                <h2 className="mb-[14px] font-display text-[1.6rem] font-bold leading-[1.2] tracking-[-0.02em] text-techpay-heading md:text-[1.8rem] lg:text-[1.85rem]">
                  <span className="inline-flex flex-col items-start gap-3">
                    <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-techpay-orange/12 text-techpay-orange">
                      <InstallmentsIcon />
                    </span>
                    <span>Easy Installments</span>
                  </span>
                </h2>
                <p className="mb-4 text-[0.95rem] leading-[1.75] tracking-[0.01em] text-techpay-muted">
                  A better computer should not feel out of reach. Our flexible payment options make it easier to bring home what you need without the pressure of paying everything upfront.
                </p>
              </div>
            </div>
            <div className="laptop-anchor hidden min-h-[clamp(280px,34vw,460px)] xl:block" aria-hidden="true" />
          </div>
        </section>

        <section className="section laptop-left relative flex min-h-[auto] items-center justify-center px-4 pb-10 md:pt-[88px] pt-[20px] md:min-h-[72vh] md:px-6 md:pb-[60px] md:pt-[96px] lg:min-h-screen lg:px-8 lg:pb-20 lg:pt-[120px]" id="recommendation">
          <div className="section-pair mx-auto grid w-full items-center gap-0 md:gap-8 xl:gap-[clamp(40px,7vw,96px)] xl:[grid-template-columns:minmax(0,1.15fr)_minmax(360px,460px)]">
            <div className="laptop-anchor hidden min-h-[clamp(280px,34vw,460px)] xl:block" aria-hidden="true" />
            <div className="scales-frame relative ml-0 mr-auto w-full p-[18px] md:p-[22px] xl:ml-auto xl:mr-0 xl:w-[min(560px,100%)]">
              <span className="scales-strip scales-strip--left" aria-hidden="true" />
              <span className="scales-strip scales-strip--right" aria-hidden="true" />
              <span className="scales-strip scales-strip--top" aria-hidden="true" />
              <span className="scales-strip scales-strip--bottom" aria-hidden="true" />
              <div className="content-block relative z-[1] w-full max-w-full overflow-hidden border border-white/10 bg-black/[0.72] px-[22px] py-7 backdrop-blur-[28px] md:px-9 md:py-9 lg:px-10 lg:py-11">
                <div className="card-accent accent-purple" />

                <h2 className="mb-[14px] font-display text-[1.6rem] font-bold leading-[1.2] tracking-[-0.02em] text-techpay-heading md:text-[1.8rem] lg:text-[1.85rem]">
                  <span className="inline-flex flex-col items-start gap-3">
                    <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-techpay-purple/14 text-techpay-purple">
                      <SupportIcon />
                    </span>
                    <span>Support for Life</span>
                  </span>
                </h2>
                <p className="mb-4 text-[0.95rem] leading-[1.75] tracking-[0.01em] text-techpay-muted">
                  Your journey does not end after purchase. From setup help to everyday questions, our team is here to support you well beyond checkout.
                </p>

              </div>
            </div>
          </div>
        </section>
        <section className="section laptop-right relative flex min-h-[auto] items-center justify-center px-4 pb-10 md:pt-[88px] pt-[20px] md:min-h-[72vh] md:px-6 md:pb-[60px] md:pt-[96px] lg:min-h-screen lg:px-8 lg:pb-20 lg:pt-[120px]" id="infinite-shelf">
          <div className="section-pair mx-auto grid w-full items-center gap-0 md:gap-8 xl:gap-[clamp(40px,7vw,96px)] xl:[grid-template-columns:minmax(360px,460px)_minmax(0,1.15fr)]">
            <div className="scales-frame relative ml-0 mr-auto w-full p-[18px] md:p-[22px] xl:w-[min(560px,100%)]">
              <span className="scales-strip scales-strip--left" aria-hidden="true" />
              <span className="scales-strip scales-strip--right" aria-hidden="true" />
              <span className="scales-strip scales-strip--top" aria-hidden="true" />
              <span className="scales-strip scales-strip--bottom" aria-hidden="true" />
              <div className="content-block relative z-[1] w-full max-w-full overflow-hidden border border-white/10 bg-black/[0.72] px-[22px] py-7 backdrop-blur-[28px] md:px-9 md:py-9 lg:px-10 lg:py-11">
                <div className="card-accent accent-orange" />

                <h2 className="mb-[14px] font-display text-[1.6rem] font-bold leading-[1.2] tracking-[-0.02em] text-techpay-heading md:text-[1.8rem] lg:text-[1.85rem]">
                  <span className="inline-flex flex-col items-start gap-3">
                    <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-techpay-orange/12 text-techpay-orange">
                      <ShelfIcon />
                    </span>
                    <span>Choose Beyond the Shelf</span>
                  </span>
                </h2>
                <p className="mb-4 text-[0.95rem] leading-[1.75] tracking-[0.01em] text-techpay-muted">
                  You should not have to settle for what happens to be on the shelf. TechPay.ai gives you access to more options through your local store, so you can choose what truly fits your needs.
                </p>

              </div>
            </div>
            <div className="laptop-anchor hidden min-h-[clamp(280px,34vw,460px)] xl:block" aria-hidden="true" />
          </div>
        </section>
        <section className="section-features relative z-[3] px-5 pb-[60px] md:pt-[100px] pt-[20px] md:px-[60px] md:pb-20 md:pt-[140px]" id="features">
          <div className="features-inner mx-auto grid max-w-[1440px] gap-5 md:grid-cols-2">
            {features.map(({ accentClass, iconClass, title, description, Icon, href, ctaLabel }) => (
              <div key={title} className={`feature-card ${accentClass} relative isolate flex h-full flex-col overflow-hidden border border-black px-6 py-8 text-center md:px-8 md:py-10`}>
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
                {href && ctaLabel ? (
                  <Link
                    href={href}
                    className="relative z-[2] mt-6 inline-flex items-center justify-center self-center rounded-full border border-white/12 bg-white/6 px-5 py-2.5 text-[0.84rem] font-semibold tracking-[0.01em] text-techpay-heading transition hover:border-techpay-orange/45 hover:bg-techpay-orange/12 hover:text-white"
                  >
                    {ctaLabel}
                  </Link>
                ) : null}
              </div>
            ))}
          </div>
        </section>

        <TechPayProblemsSection />

        {/* <section className="relative z-[3] overflow-hidden bg-[#f7f7fb] pb-10">
         
          <div className="relative px-4 md:px-[60px]">
            <CurvedLoop
              marqueeText="Walk In or Buy Through QR ✦ Choose Freely ✦ Own It Today ✦ "
              speed={1.2}
              curveAmount={180}
              interactive={false}
              className="font-display text-[clamp(2.5rem,7vw,5.5rem)] tracking-[0.08em] fill-black/85"
            />
          </div>
        </section> */}
        <TechPayHowItWorksSection />
        <TechPayTestimonialsSection />
        <TechPayImpactNumbersSection />
        <TechPayEligibilitySection />
        {/* <TechPayDifferenceSection /> */}
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

function StoreIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M4 9l1.2-4h13.6L20 9" />
      <path d="M5 9h14v10a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V9z" />
      <path d="M9 20v-5h6v5" />
      <path d="M3 9h18" />
    </svg>
  );
}

function GuidanceIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 3" />
    </svg>
  );
}

function InstallmentsIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 10h18" />
      <path d="M7 15h3" />
      <path d="M13.5 14l1.5-2 1.5 2 1.5-2" />
    </svg>
  );
}

function SupportIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 12a8 8 0 0 1 16 0" />
      <rect x="3" y="12" width="4" height="6" rx="2" />
      <rect x="17" y="12" width="4" height="6" rx="2" />
      <path d="M12 20v1a2 2 0 0 1-2 2h-1" />
    </svg>
  );
}

function ShelfIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 6h16" />
      <path d="M4 12h16" />
      <path d="M4 18h16" />
      <path d="M7 6v12" />
      <path d="M13 12v6" />
      <path d="M17 6v6" />
    </svg>
  );
}
