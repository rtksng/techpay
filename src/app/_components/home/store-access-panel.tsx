'use client';

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import {
  DEFAULT_MARKET,
  getDashboardUrl,
  getPreferredMarket,
  MARKET_CONFIG,
  MARKET_LABELS,
  setPreferredMarket,
  type MarketCode,
} from "@/app/_components/home/market-routing";

const MARKET_SLIDES: MarketCode[] = ["IN", "MY"];

export default function StoreAccessPanel() {
  const [activeIndex, setActiveIndex] = useState(() => {
    const preferredMarket = getPreferredMarket(DEFAULT_MARKET);
    const preferredIndex = MARKET_SLIDES.indexOf(preferredMarket);

    return preferredIndex >= 0 ? preferredIndex : 0;
  });

  const handleSelectMarket = (index: number) => {
    const nextMarket = MARKET_SLIDES[index];

    setPreferredMarket(nextMarket);
    setActiveIndex(index);
  };

  const handleMove = (direction: number) => {
    setActiveIndex((currentIndex) => {
      const nextIndex = currentIndex + direction;
      const normalizedIndex =
        (nextIndex + MARKET_SLIDES.length) % MARKET_SLIDES.length
      ;

      setPreferredMarket(MARKET_SLIDES[normalizedIndex]);
      return normalizedIndex;
    });
  };

  return (
    <div className="mt-6 flex flex-col items-center gap-4">
      <div className="relative w-[min(236px,100%)]">
        <div className="overflow-hidden rounded-[26px]">
          <div
            className="flex transition-transform duration-300 ease-out"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {MARKET_SLIDES.map((market) => {
              const qrConfig = MARKET_CONFIG[market];

              return (
                <a
                  key={market}
                  href={getDashboardUrl(market)}
                  rel="noopener noreferrer"
                  className="qr-code group block w-full shrink-0 overflow-hidden rounded-[24px] border border-white/12 bg-white p-3 shadow-[0_18px_42px_rgba(0,0,0,0.28)]"
                  aria-label={`Scan or click the TechPay QR code to open the ${MARKET_LABELS[market]} dashboard.`}
                >
                  <Image
                    src={qrConfig.qrSrc}
                    alt={`TechPay QR code for ${MARKET_LABELS[market]}.`}
                    width={qrConfig.qrWidth}
                    height={qrConfig.qrHeight}
                    sizes="(max-width: 768px) 190px, 220px"
                    className="h-auto w-full rounded-[18px]"
                  />
                </a>
              );
            })}
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={() => handleMove(-1)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/12 bg-white/8 text-techpay-heading transition hover:border-techpay-orange/35 hover:bg-white/14"
          aria-label="Show previous QR code"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>

        {MARKET_SLIDES.map((market, index) => {
          const isActive = index === activeIndex;

          return (
            <button
              key={market}
              type="button"
              onClick={() => handleSelectMarket(index)}
              className={`inline-flex min-w-[90px] items-center justify-center border px-4 py-2 text-[0.76rem] font-semibold uppercase tracking-[0.08em] transition ${
                isActive
                  ? "border-techpay-orange/45 bg-techpay-orange/12 text-techpay-heading"
                  : "border-white/12 bg-white/6 text-techpay-muted hover:border-white/20 hover:bg-white/10"
              }`}
              aria-pressed={isActive}
            >
              {MARKET_LABELS[market]}
            </button>
          );
        })}

        <button
          type="button"
          onClick={() => handleMove(1)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/12 bg-white/8 text-techpay-heading transition hover:border-techpay-orange/35 hover:bg-white/14"
          aria-label="Show next QR code"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
