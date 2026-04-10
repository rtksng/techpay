import type { Metadata } from "next";
import Link from "next/link";
import ScrollReset from "@/app/coming-soon/scroll-reset";

export const metadata: Metadata = {
  title: "Coming Soon | TechPay.ai",
  description: "This TechPay.ai experience is on the way. Check back soon for updates.",
};



export default function ComingSoonPage() {
  return (
    <main className="relative overflow-hidden bg-techpay-bg text-techpay-heading">
      <ScrollReset />
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
      >
        <div className="absolute left-[-8%] top-12 h-64 w-64 rounded-full bg-techpay-primary/12 blur-3xl" />
        <div className="absolute right-[-10%] top-1/3 h-72 w-72 rounded-full bg-techpay-purple/12 blur-3xl" />
        <div className="absolute bottom-[-8%] left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-techpay-orange/10 blur-3xl" />
      </div>

      <section className="relative mx-auto flex min-h-[calc(100vh-120px)] w-full max-w-[1200px] items-center px-5 py-24 md:px-10">
        <div className="w-full border border-white/10 bg-black/50 p-8 shadow-[0_28px_80px_rgba(0,0,0,0.38)] backdrop-blur-2xl md:p-12">
          <p className="mb-4 inline-block text-[0.8rem] font-semibold uppercase tracking-[0.16em] text-techpay-primary">
            Coming Soon
          </p>
          <h1 className="max-w-[14ch] font-display text-[clamp(2.5rem,8vw,4.5rem)] font-bold leading-[0.95] tracking-[-0.05em]">
            This page is being built right now.
          </h1>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/"
              className="btn-primary btn-pill relative isolate inline-flex justify-center overflow-hidden px-8 py-[16px] text-[1rem] font-bold text-white no-underline sm:w-auto"
            >
              Back To Home
            </Link>
            <Link
              href="/about-us"
              className="inline-flex justify-center border border-white/12 px-8 py-[16px] text-[1rem] font-semibold text-techpay-heading no-underline transition hover:border-techpay-primary/45 hover:text-techpay-primary sm:w-auto"
            >
              Learn About TechPay.ai
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
