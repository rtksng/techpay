import FollowingPointerDemo from "./following-pointer-demo";
import SplitText from "./split-text";
import TechPayExperience from "@/components/techpay-experience";
import {
  Building2,
  CheckCircle2,
  Globe2,
  Landmark,
  MapPinned,
  Target,
  Telescope,
} from "lucide-react";
import FeaturesSectionDemo, {
  type FeatureSectionItem,
} from "./offices-grid";
import Hyperspeed from "./hyperspeed";

const missionVision = [
  {
    label: "MISSION",
    kicker: "Purpose in action",
    heading: "Make trusted technology ownership effortless.",
    body:
      "TechPay.ai helps customers choose, finance, and own the right devices with AI-powered guidance, transparent payment paths, and dependable retail support.",
    points: [
      "Bridge affordability gaps with flexible ownership options.",
      "Simplify decisions with AI guidance built around real customer needs.",
      "Support retail partners with a smarter, more trusted buying journey.",
    ],
    accent: "from-techpay-primary via-techpay-orange to-techpay-purple",
    iconTone: "border-techpay-primary/40 bg-techpay-primary/12 text-techpay-primary",
    Icon: Target,
  },
  {
    label: "VISION",
    kicker: "Where we are going",
    heading: "Build the world's most trusted PhyGital retail network.",
    body:
      "We envision a future where every customer can access modern technology through connected stores, intelligent assistance, and transparent financing across emerging markets.",
    points: [
      "Technology access without confusion, delay, or friction.",
      "Retailers empowered with intelligent commerce tools.",
      "A scalable platform for inclusive digital growth.",
    ],
    accent: "from-techpay-purple via-techpay-primary to-techpay-orange",
    iconTone: "border-techpay-purple/40 bg-techpay-purple/12 text-techpay-purple",
    Icon: Telescope,
  },
];

const leadershipTeam = [
  {
    name: "Praveen Sahai",
    title: "Founder & CEO",
    description:
      "25+ years across Asia Pacific sales, channels, marketing, and services, bringing vision, strategy, execution, product, and AI direction.",
    image: "/members/praveen_sahai.webp",
    linkedinUrl: "https://www.linkedin.com/in/praveensahai/",
  },
  {
    name: "Ajay Mohan",
    title: "GTM Advisor & Chief Growth Officer",
    description:
      "20+ years in global go-to-market and business development, focused on strategic growth, commercial alignment, and market expansion.",
    image: "/members/ajay_mohan.webp",
    linkedinUrl: "https://www.linkedin.com/in/theajaymohan/",
  },
  {
    name: "Arunava Chakrabarty",
    title: "Chief Operating Officer",
    description:
      "Broad experience across direct and indirect sales, driving shared vision, aligned execution, and common purpose at scale.",
    image: "/members/arunava.webp",
    linkedinUrl: "https://www.linkedin.com/in/arunava-chakrabarty-2b4b77/",
  },
  {
    name: "Dilip Sundaram",
    title: "CFO",
    description:
      "25+ years across APJC, EMEA, and global finance, with Fortune 500 leadership in sales strategy, operations, cloud strategy, and transformation.",
    image: "/members/dilip_sundaram.webp",
    linkedinUrl: "https://www.linkedin.com/in/dilip-sundaram-7986671/",
  },
  {
    name: "Hemant Tathod",
    title: "Chief Business Officer, Consumer Div.",
    description:
      "Builds consumer partnerships and execution models that make technology ownership easier across retail channels.",
    image: "/members/hemant.webp",
    linkedinUrl: "https://www.linkedin.com/in/hemanttathod/",
  },
  {
    name: "Asif Bhat",
    title: "Chief AI Officer",
    description:
      "Dynamic tech entrepreneur with software development and product-building experience, scaling technology-led ventures with an execution-first mindset.",
    image: "/members/asif.webp",
    linkedinUrl: "https://www.linkedin.com/in/asifbhat/",
  },
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
    Icon: Landmark,
  },
  {
    title: "TechPay.ai Singapore",
    lines: [
      "7 Straits View, #05-01 Marina One",
      "East Tower, Singapore 018936",
    ],
    accent: "from-techpay-purple/30 to-techpay-primary/15",
    Icon: Building2,
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
    Icon: MapPinned,
  },
  {
    title: "Coming Soon",
    lines: [
      "Southeast Asia: Indonesia, Thailand, Vietnam, Philippines",
      "Northeast Asia: Japan, South Korea",
      "Oceania: Australia",
      "Middle East: UAE",
    ],
    accent: "from-white/14 to-techpay-primary/12",
    Icon: Globe2,
  },
];

const officeFeatures: FeatureSectionItem[] = officeLocations.map((office) => ({
  title: office.title,
  icon: <office.Icon className="h-6 w-6" strokeWidth={1.8} />,
  description: (
    <div className="space-y-1.5">
      {office.lines.map((line) => (
        <p key={line}>{line}</p>
      ))}
    </div>
  ),
}));

export default function AboutUsPageContent() {
  return (
    <>
      <main className="relative overflow-hidden text-techpay-text">
        <section className="relative left-1/2 right-1/2 w-screen -translate-x-1/2 overflow-hidden bg-slate-950 text-white">
          <div className="absolute inset-0 opacity-10 dark:opacity-15">
            <Hyperspeed
              effectOptions={{ "distortion": "turbulentDistortion", "length": 400, "roadWidth": 10, "islandWidth": 2, "lanesPerRoad": 3, "fov": 90, "fovSpeedUp": 150, "speedUp": 2, "carLightsFade": 0.4, "totalSideLightSticks": 20, "lightPairsPerRoadWay": 40, "shoulderLinesWidthPercentage": 0.05, "brokenLinesWidthPercentage": 0.1, "brokenLinesLengthPercentage": 0.5, "lightStickWidth": [0.12, 0.5], "lightStickHeight": [1.3, 1.7], "movingAwaySpeed": [60, 80], "movingCloserSpeed": [-120, -160], "carLightsLength": [12, 80], "carLightsRadius": [0.05, 0.14], "carWidthPercentage": [0.3, 0.5], "carShiftX": [-0.8, 0.8], "carFloorSeparation": [0, 5], "colors": { "roadColor": 526344, "islandColor": 657930, "background": 0, "shoulderLines": 1250072, "brokenLines": 1250072, "leftCars": [14177983, 6770850, 12732332], "rightCars": [242627, 941733, 3294549], "sticks": 242627 } }}
            />
          </div>
         

          <div className="mx-auto min-h-screen w-full max-w-[1440px] px-4 py-14 md:px-6 md:py-18 lg:px-10 lg:py-24">
            <div className="relative z-10 flex min-h-[calc(100vh-7rem)] flex-col justify-center gap-9">
              <div className="mx-auto max-w-5xl text-center">
                <p className="mb-4 text-sm font-semibold uppercase text-techpay-orange md:text-base">
                  About TechPay.ai
                </p>
                <h1 className="sr-only font-display text-5xl font-bold leading-[0.95] text-white md:text-7xl xl:text-8xl">
                  Mission & Vision
                </h1>
                
              </div>
              <div className="grid gap-5 lg:grid-cols-2 xl:gap-8">
                {missionVision.map((item) => (
                  <article
                    key={item.label}
                    className="group relative overflow-hidden border border-white/14 bg-white/[0.08] p-6 shadow-[0_28px_80px_rgba(0,0,0,0.26)] backdrop-blur-2xl md:p-8 xl:p-10"
                  >
                    <div
                      className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${item.accent}`}
                      aria-hidden="true"
                    />
                    <div
                      className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.16),transparent_46%)]"
                      aria-hidden="true"
                    />
                    <div className="relative flex h-full flex-col">
                      <div className="mb-7 flex items-start justify-between gap-5">
                        <div>
                          <p className="text-xs font-semibold uppercase text-white/58">
                            {item.kicker}
                          </p>
                          <h2 className="mt-2 font-display text-3xl font-bold text-white md:text-4xl">
                            {item.label}
                          </h2>
                        </div>
                        <div
                          className={`flex h-12 w-12 shrink-0 items-center justify-center border ${item.iconTone}`}
                          aria-hidden="true"
                        >
                          <item.Icon className="h-6 w-6" strokeWidth={1.8} />
                        </div>
                      </div>

                      <h3 className="max-w-xl text-2xl font-semibold leading-tight text-white md:text-3xl">
                        {item.heading}
                      </h3>
                      <p className="mt-4 text-base leading-7 text-white/72 md:text-lg md:leading-8">
                        {item.body}
                      </p>

                      <div className="mt-8 grid gap-3">
                        {item.points.map((point) => (
                          <div
                            key={point}
                            className="flex items-start gap-3 border-t border-white/10 pt-3 first:border-t-0 first:pt-0"
                          >
                            <CheckCircle2
                              className="mt-0.5 h-4 w-4 shrink-0 text-techpay-orange"
                              strokeWidth={2}
                              aria-hidden="true"
                            />
                            <span className="text-sm leading-6 text-white/78 md:text-base">
                              {point}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div className="relative mx-auto flex w-full max-w-[1440px] flex-col">
          <section className="relative left-1/2 right-1/2 w-screen -translate-x-1/2 overflow-hidden bg-white py-14 md:py-18">
            <div className="relative z-10 mx-auto w-full max-w-[1440px] px-4 md:px-6 lg:px-10">
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
                <p className="mb-8 max-w-4xl text-sm leading-6 text-slate-600 md:text-base md:leading-7">
                  TechPay.ai brings together deep expertise across finance, AI,
                  product, growth, operations, partnerships, and consumer
                  technology. Together, the team combines strategic thinking
                  with real-world execution across high-growth markets.
                </p>

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

            <div className="relative z-10 mx-auto w-full max-w-[1440px] px-4 md:px-6 lg:px-10">
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

      <TechPayExperience />
    </>
  );
}
