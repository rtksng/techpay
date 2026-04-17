'use client';

import { useState } from "react";
import {
  DEFAULT_MARKET,
  getDashboardUrl,
  getPreferredMarket,
  resolveMarket,
  resolveRecommendationUrl,
} from "@/app/_components/home/market-routing";

type MarketAwareLinkButtonProps = {
  className: string;
  kind: "catalog" | "recommendation" | "eligibility" | "helpdesk";
  label: string;
  loadingLabel?: string;
};

export default function MarketAwareLinkButton({
  className,
  kind,
  label,
  loadingLabel = "Loading...",
}: MarketAwareLinkButtonProps) {
  const [isResolving, setIsResolving] = useState(false);
  const defaultMarket = getPreferredMarket(DEFAULT_MARKET);

  const defaultHref =
    getDashboardUrl(defaultMarket);

  const handleClick = async (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();

    if (isResolving) {
      return;
    }

    setIsResolving(true);

    try {
      if (kind === "catalog") {
        const market = getPreferredMarket(DEFAULT_MARKET);
        window.location.assign(getDashboardUrl(market));
        return;
      }

      const recommendation = await resolveRecommendationUrl(DEFAULT_MARKET);

      if (!recommendation.href) {
        window.location.assign(getDashboardUrl(recommendation.market));
        return;
      }

      window.location.assign(recommendation.href);
    } catch {
      const market = await resolveMarket(DEFAULT_MARKET);
      window.location.assign(getDashboardUrl(market));
    } finally {
      setIsResolving(false);
    }
  };

  return (
    <a
      href={defaultHref}
      onClick={handleClick}
      aria-busy={isResolving}
      className={className}
    >
      {isResolving ? loadingLabel : label}
    </a>
  );
}
