import Image from "next/image";
import {
  BotMessageSquare,
  Globe2,
  HandCoins,
  MonitorCog,
  PackageSearch,
  Store,
} from "lucide-react";
import TechPayImpactNumbersSection from "@/app/_components/home/impact-numbers-section";
import MarketAwareLinkButton from "@/app/_components/home/market-aware-link-button";
import TechPayProblemsSection from "@/app/_components/home/problems-section";
import StoreAccessPanel from "@/app/_components/home/store-access-panel";
import TechPayTestimonialsSection from "@/app/_components/home/testimonials-section";
import TechPayExperience from "@/components/techpay-experience";

const availabilityFeature = {
  iconClass: "bg-techpay-primary/10 text-techpay-primary",
  title: "Available in India & Malaysia",
  description: "More countries coming soon.",
  Icon: Globe2,
};

const storeFeature = {
  iconClass: "bg-techpay-orange/10 text-techpay-orange",
  title: "Find a Store",
  description:
    "Scan the TechPay QR or open the right dashboard for your location to start with a nearby partner store.",
  Icon: Store,
};

const publicBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

function publicAsset(path: `/${string}`) {
  return `${publicBasePath}${path}`;
}

export default function HomePage() {
  const AvailabilityIcon = availabilityFeature.Icon;
  const StoreFeatureIcon = storeFeature.Icon;

  return (
    <>
      <div className="hero-motion-bg " aria-hidden="true">
        <svg
          className="hero-motion-svg"
          viewBox="0 0 1440 920"
          preserveAspectRatio="none"
        >
          <path
            className="hero-motion-line"
            d="M 1460 182 H 1200 Q 1110 182 1110 104 V -20"
            pathLength="100"
          />
          <path
            className="hero-motion-trace hero-motion-trace--one"
            d="M 1460 182 H 1200 Q 1110 182 1110 104 V -20"
            pathLength="100"
          />

          <path
            className="hero-motion-line"
            d="M -20 182 H 144 Q 220 182 220 104 V -20"
            pathLength="100"
          />
          <path
            className="hero-motion-trace hero-motion-trace--two"
            d="M -20 182 H 144 Q 220 182 220 104 V -20"
            pathLength="100"
          />

          <path
            className="hero-motion-line"
            d="M -20 470 H 128 Q 240 470 240 582 V 786 Q 240 860 314 860 H 438 Q 510 860 510 940"
            pathLength="100"
          />
          <path
            className="hero-motion-trace hero-motion-trace--three"
            d="M -20 470 H 128 Q 240 470 240 582 V 786 Q 240 860 314 860 H 438 Q 510 860 510 940"
            pathLength="100"
          />

          <path
            className="hero-motion-line"
            d="M 980 940 V 760 Q 980 676 1064 676 H 1368 Q 1440 676 1440 604 V 520"
            pathLength="100"
          />
          <path
            className="hero-motion-trace hero-motion-trace--four"
            d="M 980 940 V 760 Q 980 676 1064 676 H 1368 Q 1440 676 1440 604 V 520"
            pathLength="100"
          />
        </svg>
      </div>

      <div className="monitor-backdrop" aria-hidden="true">
        <Image
          src={publicAsset("/parts/monitor1.png")}
          alt=""
          fill
          priority
          sizes="(max-width: 768px) 72vw, 42vw"
          className="monitor-backdrop-image"
        />
      </div>

      <div className="headphones-backdrop" aria-hidden="true">
        <Image
          src={publicAsset("/parts/pri-head2.png")}
          alt=""
          width={700}
          height={526}
          priority
          sizes="(max-width: 768px) 36vw, 18vw"
          className="headphones-backdrop-image"
        />
      </div>

      <main className="relative z-[2]">
        <section
          className="section section-hero relative flex min-h-screen flex-col justify-start px-4 pb-10 pt-[120px] text-center md:px-6 md:pb-[60px] md:pt-[120px] lg:px-8 lg:pb-20 lg:pt-[140px]"
          id="hero"
        >
          <div className="hero-laptop-stage" aria-hidden="true">
            <div className="laptop-shadow" />
            <canvas id="laptop" />
          </div>

          <div className="hero-content relative z-[3] mx-auto max-w-[22rem] px-2 sm:max-w-[30rem] md:max-w-full md:px-0">
          
            <h1 className="mb-4 font-display text-[clamp(0.6rem,6vw,2.4rem)] font-bold leading-[1.3] tracking-[-0.03em] text-techpay-heading max-w-5xl">
             The Right Laptop For You. Paid Your Way. <span className="hidden lg:inline"><br/></span> With AI Powered Guidance & Personlized Support
            </h1>
          </div>
        </section>

        <section
          className="section laptop-left relative flex min-h-[auto] items-center justify-center px-4 pb-10 pt-[20px] md:min-h-[72vh] md:px-6 md:pb-[60px] md:pt-[96px] lg:min-h-screen lg:px-8 lg:pb-20 lg:pt-[120px]"
          id="qr-section"
        >
          <div className="section-pair mx-auto grid w-full items-center gap-0 md:gap-8 xl:gap-[clamp(40px,7vw,96px)] xl:[grid-template-columns:minmax(0,1.15fr)_minmax(360px,460px)]">
            <div
              className="laptop-anchor hidden min-h-[clamp(280px,34vw,460px)] xl:block"
              aria-hidden="true"
            />
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
                      <BotMessageSquare size={22} strokeWidth={1.8} />
                    </span>
                    <span>Get Recommendations</span>
                  </span>
                </h2>
                <p className="mb-4 text-[0.95rem] leading-[1.75] tracking-[0.01em] text-techpay-muted">
                Forget generic recommendations. Our AI listens to how you actually use a computer and finds the one built for your world - not everyone else's.

                </p>
                <MarketAwareLinkButton
                  kind="recommendation"
                  label="Get Recommendations"
                  loadingLabel="Finding nearest store..."
                  size="compact"
                />
              </div>
            </div>
          </div>
        </section>

        <section
          className="section laptop-right relative flex min-h-[auto] items-center justify-center px-4 pb-10 pt-[20px] md:min-h-[72vh] md:px-6 md:pb-[60px] md:pt-[96px] lg:min-h-screen lg:px-8 lg:pb-20 lg:pt-[120px]"
          id="how-it-works"
        >
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
                    <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-techpay-purple/14 text-techpay-purple">
                      <PackageSearch size={22} strokeWidth={1.8} />
                    </span>
                    <span>Unlimited Choices</span>
                  </span>
                </h2>
                <p className="mb-4 text-[0.95rem] leading-[1.75] tracking-[0.01em] text-techpay-muted">
                Browse it online. Feel it in Store. Find your perfect device and we will deliver it to you.
                </p>
                <MarketAwareLinkButton
                  kind="catalog"
                  label="Get Your Device Today"
                  loadingLabel="Loading..."
                  size="md"
                />
              </div>
            </div>
            <div
              className="laptop-anchor hidden min-h-[clamp(280px,34vw,460px)] xl:block"
              aria-hidden="true"
            />
          </div>
        </section>

        <section
          className="section laptop-left relative flex min-h-[auto] items-center justify-center px-4 pb-10 pt-[20px] md:min-h-[72vh] md:px-6 md:pb-[60px] md:pt-[96px] lg:min-h-screen lg:px-8 lg:pb-20 lg:pt-[120px]"
          id="recommendation"
        >
          <div className="section-pair mx-auto grid w-full items-center gap-0 md:gap-8 xl:gap-[clamp(40px,7vw,96px)] xl:[grid-template-columns:minmax(0,1.15fr)_minmax(360px,460px)]">
            <div
              className="laptop-anchor hidden min-h-[clamp(280px,34vw,460px)] xl:block"
              aria-hidden="true"
            />
            <div className="scales-frame relative ml-0 mr-auto w-full p-[18px] md:p-[22px] xl:ml-auto xl:mr-0 xl:w-[min(560px,100%)]">
              <span className="scales-strip scales-strip--left" aria-hidden="true" />
              <span className="scales-strip scales-strip--right" aria-hidden="true" />
              <span className="scales-strip scales-strip--top" aria-hidden="true" />
              <span className="scales-strip scales-strip--bottom" aria-hidden="true" />
              <div className="content-block relative z-[1] w-full max-w-full overflow-hidden border border-white/10 bg-black/[0.72] px-[22px] py-7 backdrop-blur-[28px] md:px-9 md:py-9 lg:px-10 lg:py-11">
                <div className="card-accent accent-purple" />

                <h2 className="mb-[14px] font-display text-[1.6rem] font-bold leading-[1.2] tracking-[-0.02em] text-techpay-heading md:text-[1.8rem] lg:text-[1.85rem]">
                  <span className="inline-flex flex-col items-start gap-3">
                    <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-techpay-orange/12 text-techpay-orange">
                      <HandCoins size={22} strokeWidth={1.8} />
                    </span>
                    <span>Easy Installments</span>
                  </span>
                </h2>
                <p className="mb-4 text-[0.95rem] leading-[1.75] tracking-[0.01em] text-techpay-muted">
               A better computer should not feel out of reach. Our flexible payment options make it easier to bring home what you need. Get fast approvals without delays!
                </p>
                <MarketAwareLinkButton
                  kind="eligibility"
                  label="Check Eligibility"
                  loadingLabel="Loading..."
                  size="md"
                />
              </div>
            </div>
          </div>
        </section>

        <section
          className="section laptop-right relative flex min-h-[auto] items-center justify-center px-4 pb-10 pt-[20px] md:min-h-[72vh] md:px-6 md:pb-[60px] md:pt-[96px] lg:min-h-screen lg:px-8 lg:pb-20 lg:pt-[120px]"
          id="infinite-shelf"
        >
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
                      <MonitorCog size={22} strokeWidth={1.8} />
                    </span>
                    <span>Personalized IT Helpdesk</span>
                  </span>
                </h2>
                <p className="mb-4 text-[0.95rem] leading-[1.75] tracking-[0.01em] text-techpay-muted">
                From getting connected on day one to fixing everyday hiccups - we're here for it all. WiFi setup, printer installation, finding the best apps. 
                Real support, for real life.
                </p>
                <MarketAwareLinkButton
                  kind="helpdesk"
                  label="Subscribe for Support"
                  loadingLabel="Loading..."
                  size="md"
                />
              </div>
            </div>
            <div
              className="laptop-anchor hidden min-h-[clamp(280px,34vw,460px)] xl:block"
              aria-hidden="true"
            />
          </div>
        </section>

        <section
          className="section-features max-w-7xl mx-auto relative z-[3] px-5 pb-[60px] pt-[20px] md:px-[60px] md:pb-20 md:pt-[140px]"
          id="features"
        >
          <div className="features-inner mx-auto max-w-[1440px]">
            <div className="feature-card feature-card--orange relative isolate overflow-hidden border border-black px-6 py-8 md:px-8 md:py-10">
              <div className="feature-card-bg" aria-hidden="true">
                <canvas className="feature-card-dots" />
                <div className="feature-card-glow" />
              </div>

              <div className="relative z-[2] space-y-7">
                <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(280px,320px)]">
                  <div className="text-left">
                    <div
                      className={`feature-icon mb-5 flex h-16 w-16 items-center justify-center rounded-2xl ${storeFeature.iconClass}`}
                    >
                      <StoreFeatureIcon size={32} strokeWidth={1.8} />
                    </div>
                    <h3 className="mb-[10px] font-display text-[clamp(1rem,2vw,2.1rem)] font-semibold text-techpay-heading">
                      {storeFeature.title}
                    </h3>
                    <p className="max-w-[620px] text-[0.95rem] leading-[1.65] text-techpay-muted">
                      {storeFeature.description}
                    </p>
                  </div>
                  <StoreAccessPanel />
                </div>

                
              </div>
            </div>
          </div>
        </section>

        <TechPayProblemsSection />
        {/* <TechPayHowItWorksSection /> */}
        <TechPayTestimonialsSection />
        <TechPayImpactNumbersSection />
        {/* <TechPayEligibilitySection /> */}
      </main>

      <TechPayExperience />
    </>
  );
}
