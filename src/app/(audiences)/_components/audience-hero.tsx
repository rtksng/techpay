import FloatingLines from "@/components/ui/FloatingLines";

export default function AudienceHero({ title }: { title: string }) {
  return (
    <section className="relative isolate overflow-hidden bg-techpay-bg">
      <div className="absolute inset-0">
        <FloatingLines
          enabledWaves={["top", "middle", "bottom"]}
          lineCount={5}
          lineDistance={5}
          bendRadius={5}
          bendStrength={-0.5}
          interactive
          parallax
        />
      </div>
      <div className="relative z-10 mx-auto flex min-h-[340px] max-w-[1440px] items-center justify-center px-4 pb-12 pt-28 sm:min-h-[420px] sm:px-6 md:min-h-[520px] md:px-8 md:pb-14 md:pt-32 lg:min-h-[620px] lg:px-[60px] lg:pb-16 lg:pt-0">
        <h1 className="max-w-5xl text-center font-display text-[clamp(2.4rem,10vw,4rem)] font-bold leading-[1.05] text-white md:text-[clamp(3.25rem,8vw,5rem)] lg:text-[80px] lg:leading-normal">
          {title}
        </h1>
      </div>
    </section>
  );
}
