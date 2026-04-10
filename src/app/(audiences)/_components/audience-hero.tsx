import type { ReactNode } from "react";
import LineWaves from "./lightspeed";

export default function AudienceHero({
  title,
  eyebrow = "Partner Growth",
  overlay,
}: {
  title: string;
  eyebrow?: string;
  overlay?: ReactNode;
}) {
  return (
    <section className="relative isolate min-h-[100dvh] overflow-hidden bg-black">
      <div className="absolute inset-0 opacity-1.5">
          <LineWaves
            speed={0.3}
            innerLineCount={32}
            outerLineCount={36}
            warpIntensity={1}
            rotation={-45}
            edgeFadeWidth={0}
            colorCycleSpeed={1}
            brightness={0.2}
            color1="#ffffff"
            color2="#ffffff"
            color3="#ffffff"
            enableMouseInteraction
            mouseInfluence={2}
          />
        </div>
      {overlay ? (
        <div
          className="pointer-events-none absolute inset-0 overflow-hidden"
          aria-hidden="true"
        >
          {overlay}
        </div>
      ) : null}

      <div className="relative z-10 mx-auto flex min-h-[100dvh] w-full max-w-[1440px] items-center justify-center px-5 py-24 text-center sm:px-7 sm:py-28 md:px-10 md:py-32 lg:px-[60px]">
        

        <div className={`max-w-5xl ${overlay ? "lg:-translate-y-[6vh]" : ""}`}>
          <p className="mb-4 text-[0.78rem] font-semibold uppercase tracking-[0.16em] text-techpay-primary">
            {eyebrow}
          </p>
          <h1 className="font-display text-[clamp(2.3rem,8vw,4rem)] font-bold leading-[1.02] tracking-[-0.04em] text-white md:text-[clamp(3rem,6vw,4.6rem)] lg:text-[clamp(3.6rem,5vw,5.3rem)]">
            {title}
          </h1>
        </div>
      </div>
    </section>
  );
}
