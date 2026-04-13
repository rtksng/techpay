'use client';

import Image from "next/image";
import { useEffect, useState } from "react";
import {
  DEFAULT_MARKET,
  getDashboardUrl,
  getMarketFromBrowser,
  MARKET_CONFIG,
  MARKET_LABELS,
  type MarketCode,
  resolveMarket,
} from "@/app/_components/home/market-routing";

export default function StoreAccessPanel() {
  const [market, setMarket] = useState<MarketCode>(DEFAULT_MARKET);
  const [isResolving, setIsResolving] = useState(false);

  useEffect(() => {
    let active = true;

    const syncMarket = async () => {
      const browserMarket = getMarketFromBrowser();

      if (active && browserMarket) {
        setMarket(browserMarket);
      }
    };

    void syncMarket();

    return () => {
      active = false;
    };
  }, []);

  const qrConfig = MARKET_CONFIG[market];
  const smartHref = getDashboardUrl(market);

  const handleSmartAccess = async (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();

    if (isResolving) {
      return;
    }

    setIsResolving(true);
    const nextMarket = await resolveMarket(market);

    setMarket(nextMarket);
    window.location.assign(getDashboardUrl(nextMarket));
  };

  return (
    <div className="mt-6 flex flex-col items-center gap-4">
      

      <a
        href={smartHref}
        onClick={handleSmartAccess}
        rel="noopener noreferrer"
        className="qr-code group block w-[min(220px,100%)] overflow-hidden rounded-[24px] border border-white/12 bg-white p-3 shadow-[0_18px_42px_rgba(0,0,0,0.28)]"
        aria-label={`Scan or click the TechPay QR code to open the ${MARKET_LABELS[market]} dashboard.`}
      >
        <Image
          src={qrConfig.qrSrc}
          alt="TechPay QR code for mobile login."
          width={qrConfig.qrWidth}
          height={qrConfig.qrHeight}
          sizes="(max-width: 768px) 180px, 220px"
          className="h-auto w-full rounded-[18px]"
        />
      </a>
      {/* <div className="flex flex-wrap justify-center gap-3">
        
        <a
          href={getDashboardUrl("IN")}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-full border border-white/12 bg-white/6 px-5 py-3 text-[0.84rem] font-semibold tracking-[0.01em] text-techpay-heading transition hover:border-techpay-primary/45 hover:bg-techpay-primary/12"
        >
          India
        </a>
        <a
          href={getDashboardUrl("MY")}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-full border border-white/12 bg-white/6 px-5 py-3 text-[0.84rem] font-semibold tracking-[0.01em] text-techpay-heading transition hover:border-techpay-orange/45 hover:bg-techpay-orange/12"
        >
          Malaysia
        </a>
      </div> */}
    </div>
  );
}
