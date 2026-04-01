import type { Metadata } from "next";
import FollowingPointerDemo from "@/components/following-pointer-demo";
import SiteFooter from "@/components/site-footer";
import SiteNavbar from "@/components/site-navbar";
import SplitText from "@/components/split-text";
import TechPayExperience from "@/components/techpay-experience";
import FeaturesSectionDemo, {
  type FeatureSectionItem,
} from "@/components/ui/features-section-demo-2";

const missionVision = [
  {
    label: "MISSION",
    body: [
      "To democratize technology by making it accessible, affordable and transformative for every person on the planet. We aim to bridge the digital divide and empower citizens with cutting-edge technological solutions that foster innovation, drive economic growth, and enhance the quality of life.",
    ],
  },
  {
    label: "VISION",
    body: [
      "To be the leading catalyst for a technologically advanced world, where every person can harness the power of technology to achieve their full potential.",
      "We envision a future where digital empowerment is universal, driving inclusive progress and creating a vibrant, innovative and prosperous society for all.",
    ],
  },
];

const leadershipTeam = [
  { name: "Praveen Sahai", title: "Founder & CEO" },
  { name: "Ajay Mohan", title: "GTM Advisor & Chief Growth Officer" },
  { name: "Arunava Chakrabarty", title: "Chief Operating Officer" },
  { name: "Dilip Sundaram", title: "CFO" },
  { name: "Hemant Thathod", title: "Chief Business Officer, Consumer Div." },
  { name: "Asif Bhat", title: "Chief AI Officer - TechPay.ai CEO & Co Founder - Getafix Technologies" },
];

const officeLocations = [
  {
    title: "TechPay.ai India",
    lines: [
      "Baron House, 29, 80 Feet Rd,",
      "S.T. Bed, 4th Block, Koramangala,",
      "Bengaluru",
      "Karnataka 560034",
    ],
    accent: "from-techpay-primary/30 to-techpay-orange/20",
  },
  {
    title: "TechPay.ai Singapore",
    lines: [
      "7 Straits View, #05-01 Marina One",
      "East Tower, Singapore 018936",
    ],
    accent: "from-techpay-purple/30 to-techpay-primary/15",
  },
  {
    title: "TechPay.ai SDN BHD Malaysia",
    lines: [
      "Lot 3A-01A, Level 3A, Glo Damansara",
      "Shopping Mall, 699, Jln Damansara",
      "Taman Tun Dr Ismail, Kuala Lumpur,",
      "WP Kuala Lumpur 6000, Malaysia",
    ],
    accent: "from-techpay-orange/30 to-techpay-primary/15",
  },
  {
    title: "Coming Soon",
    lines: [
      "Middle East Office - Dubai",
      "Australia Office - Sydney and Melbourne",
    ],
    accent: "from-white/14 to-techpay-primary/12",
  },
];

const officeFeatures: FeatureSectionItem[] = officeLocations.map((office) => ({
  title: office.title,
  description: (
    <div className="space-y-1.5">
      {office.lines.map((line) => (
        <p key={line}>{line}</p>
      ))}
    </div>
  ),
}));

export const metadata: Metadata = {
  title: "About Us | TechPay.ai",
  description: "Mission, vision, leadership team, and office locations for TechPay.ai.",
};

export default function AboutUsPage() {
  return (
    <>
      <SiteNavbar />

      <main className="relative  overflow-hidden  text-techpay-text">
        <section className="relative left-1/2 right-1/2 flex min-h-screen w-screen -translate-x-1/2 items-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/hero-bg/about-hero.webp')" }}
            aria-hidden="true"
          />
          <div
            aria-hidden="true"
          />

          <div className="relative mx-auto flex w-full max-w-[1440px] flex-col px-4 pt-28 pb-14 md:px-6 md:pt-32 md:pb-18 lg:px-8">
            <div className="max-w-5xl">
              <p className="mb-4 text-[0.82rem] font-semibold uppercase tracking-[0.2em] text-white/80">
                About TechPay.ai
              </p>
              <div className="space-y-10">
                {missionVision.map((item) => (
                  <article
                    key={item.label}
                   
                  >
                    <span className="font-display font-semibold tracking-[0.04em] text-white text-3xl">
                      {item.label}
                    </span>
                    <div className="mt-5 space-y-4 text-xl  text-white/85">
                      {item.body.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div className="relative mx-auto flex w-full max-w-[1440px] flex-col">
          <section className="relative left-1/2 right-1/2 w-screen -translate-x-1/2 overflow-hidden bg-white py-14 md:py-18">
            <div
              className="pointer-events-none absolute inset-0"
              aria-hidden="true"
            >
              <svg
                viewBox="0 0 1440 420"
                className="h-full w-full"
                preserveAspectRatio="none"
              >
                <defs>
                  <linearGradient id="leadership-curve" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#ed1d5f" stopOpacity="0.1" />
                    <stop offset="50%" stopColor="#7c3aed" stopOpacity="0.22" />
                    <stop offset="100%" stopColor="#f97316" stopOpacity="0.1" />
                  </linearGradient>
                </defs>
                <path
                  d="M0 248C178 132 339 116 491 166C622 208 724 312 867 305C1018 297 1142 149 1267 126C1328 115 1388 122 1440 143"
                  fill="none"
                  stroke="url(#leadership-curve)"
                  strokeWidth="3"
                />
                <path
                  d="M0 280C168 185 315 183 452 221C616 268 740 362 904 349C1072 336 1192 207 1310 182C1360 171 1406 171 1440 178"
                  fill="none"
                  stroke="#ed1d5f"
                  strokeOpacity="0.08"
                  strokeWidth="1.5"
                />
              </svg>
            </div>
            <div className="relative z-10 mx-auto w-full max-w-[1440px] ">
              <div>
                <p className="mb-3 text-[0.78rem] font-semibold uppercase tracking-[0.16em] text-techpay-primary">
                  Leadership
                </p>
                <SplitText
                  text="Meet The Leadership Team"
                  tag="h1"
                  splitType="words, chars"
                  textAlign="left"
                  className="mb-3 block font-display text-[clamp(2.2rem,5vw,4rem)] font-bold tracking-[-0.04em] text-slate-950"
                />
               lo

                <FollowingPointerDemo leaders={leadershipTeam} />
              </div>
            </div>
          </section>

          <section className="relative left-1/2 right-1/2 w-screen -translate-x-1/2 overflow-hidden bg-white py-14 md:py-18">
            <div
              className="pointer-events-none absolute inset-0"
              aria-hidden="true"
            >
              <svg
                viewBox="0 0 1440 420"
                className="h-full w-full"
                preserveAspectRatio="none"
              >
                <defs>
                  <linearGradient id="offices-curve" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#ed1d5f" stopOpacity="0.08" />
                    <stop offset="50%" stopColor="#7c3aed" stopOpacity="0.18" />
                    <stop offset="100%" stopColor="#f97316" stopOpacity="0.08" />
                  </linearGradient>
                </defs>
                <path
                  d="M0 268C171 177 330 157 484 193C638 229 767 331 913 324C1070 316 1187 205 1297 174C1350 159 1399 159 1440 173"
                  fill="none"
                  stroke="url(#offices-curve)"
                  strokeWidth="3"
                />
                <path
                  d="M0 305C162 229 317 225 456 253C615 285 755 365 915 356C1068 347 1192 261 1315 230C1366 217 1409 215 1440 223"
                  fill="none"
                  stroke="#ed1d5f"
                  strokeOpacity="0.07"
                  strokeWidth="1.5"
                />
              </svg>
            </div>

            <div className="relative z-10 mx-auto w-full max-w-[1440px]">
              <p className="mb-3 text-[0.78rem] font-semibold uppercase tracking-[0.16em] text-techpay-primary">
                Global Presence
              </p>
              <h2 className="mb-3 font-display text-[clamp(1.8rem,4vw,3rem)] font-bold tracking-[-0.04em] text-slate-950">
                Our Offices
              </h2>
              <p className="mb-8 max-w-3xl text-sm leading-6 text-slate-600 md:text-base">
                TechPay.ai is growing across key markets with teams in India,
                Singapore, and Malaysia, with more regional offices on the way.
              </p>

              <FeaturesSectionDemo features={officeFeatures} />
            </div>
          </section>
        </div>
      </main>

      <SiteFooter />
      <TechPayExperience />
    </>
  );
}
