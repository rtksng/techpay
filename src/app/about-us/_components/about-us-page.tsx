import FollowingPointerDemo from "./following-pointer-demo";
import SplitText from "./split-text";
import TechPayExperience from "@/components/techpay-experience";
import FeaturesSectionDemo, {
  type FeatureSectionItem,
} from "./offices-grid";
import Hyperspeed from "./hyperspeed";

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
  {
    name: "Praveen Sahai",
    title: "Founder & CEO",
    image: "/members/praveen_sahai.png",
  },
  {
    name: "Ajay Mohan",
    title: "GTM Advisor & Chief Growth Officer",
    image: "/members/ajay_mohan.png",
  },
  {
    name: "Arunava Chakrabarty",
    title: "Chief Operating Officer",
    image: "/members/arunava.png",
  },
  {
    name: "Dilip Sundaram",
    title: "CFO",
    image: "/members/dilip_sundaram.png",
  },
  {
    name: "Hemant Thathod",
    title: "Chief Business Officer, Consumer Div.",
    image: "/members/hemant.png",
  },
  {
    name: "Asif Bhat",
    title: "Chief AI Officer - TechPay.ai CEO & Co Founder - Getafix Technologies",
    image: "/members/asif.png",
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
      "South East Asia: Indonesia, Thailand, Vietnam, Philippines",
      "North East Asia: Japan, South Korea",
      "Oceania: Australia West",
      "Asia: UAE",
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

export default function AboutUsPageContent() {
  return (
    <>
      <main className="relative overflow-hidden text-techpay-text">
        <section className="relative left-1/2 right-1/2 w-screen -translate-x-1/2 overflow-hidden">
          <div className="absolute inset-0 opacity-10 dark:opacity-15">
            <Hyperspeed
              effectOptions={{ "distortion": "turbulentDistortion", "length": 400, "roadWidth": 10, "islandWidth": 2, "lanesPerRoad": 3, "fov": 90, "fovSpeedUp": 150, "speedUp": 2, "carLightsFade": 0.4, "totalSideLightSticks": 20, "lightPairsPerRoadWay": 40, "shoulderLinesWidthPercentage": 0.05, "brokenLinesWidthPercentage": 0.1, "brokenLinesLengthPercentage": 0.5, "lightStickWidth": [0.12, 0.5], "lightStickHeight": [1.3, 1.7], "movingAwaySpeed": [60, 80], "movingCloserSpeed": [-120, -160], "carLightsLength": [12, 80], "carLightsRadius": [0.05, 0.14], "carWidthPercentage": [0.3, 0.5], "carShiftX": [-0.8, 0.8], "carFloorSeparation": [0, 5], "colors": { "roadColor": 526344, "islandColor": 657930, "background": 0, "shoulderLines": 1250072, "brokenLines": 1250072, "leftCars": [14177983, 6770850, 12732332], "rightCars": [242627, 941733, 3294549], "sticks": 242627 } }}
            />
          </div>
         

          <div className="mx-auto min-h-screen w-full max-w-[1440px] px-4 py-14 md:px-6 md:py-18 lg:px-10 lg:py-24">
            <div className="relative z-10 flex min-h-[calc(100vh-7rem)] flex-col justify-center gap-10">
              <div className="max-w-4xl mx-auto mt-5 md:mt-0">
                <p className="mb-4 text-xl font-semibold uppercase tracking-[0.2em] text-techpay-primary">
                  About TechPay.ai
                </p>
               
              </div>
              <div className="grid gap-6 xl:gap-20 lg:grid-cols-2">
                {missionVision.map((item, index) => (
                  <article
                    key={item.label}
                    className="group relative overflow-hidden border p-7 shadow-[0_28px_80px_rgba(15,23,42,0.12)] backdrop-blur-2xl border-white/12 bg-white/7 dark:shadow-[0_24px_80px_rgba(2,6,23,0.42)] md:p-12"
                  >
                    <div
                      className={`absolute inset-x-0 top-0 h-1 ${
                        index === 0
                          ? "bg-gradient-to-r from-techpay-primary via-techpay-orange to-transparent"
                          : "bg-gradient-to-r from-techpay-purple via-techpay-primary to-transparent"
                      }`}
                    />
                    <div className="absolute -right-12 top-0 h-40 w-40 rounded-full bg-techpay-primary/12 blur-3xl dark:bg-techpay-primary/16" />
                    <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.24),transparent_52%)] dark:bg-[linear-gradient(135deg,rgba(255,255,255,0.08),transparent_55%)]" />
                    <div className="relative">
                      <span className="font-display text-2xl font-semibold tracking-[0.04em] text-slate-950 dark:text-white md:text-3xl">
                        {item.label}
                      </span>
                      <div className="mt-5 space-y-4 text-base leading-7 text-slate-700 dark:text-slate-200/82 md:text-lg md:leading-8">
                        {item.body.map((paragraph) => (
                          <p key={paragraph}>{paragraph}</p>
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
