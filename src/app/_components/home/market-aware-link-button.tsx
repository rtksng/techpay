'use client';

import { useState } from "react";
import {
  DEFAULT_MARKET,
  getDashboardUrl,
  resolveMarket,
  resolveRecommendationUrl,
} from "@/app/_components/home/market-routing";

type MarketAwareLinkButtonProps = {
  className: string;
  kind: "catalog" | "recommendation";
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

  const defaultHref =
    getDashboardUrl(DEFAULT_MARKET);

  const handleClick = async (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();

    if (isResolving) {
      return;
    }

    setIsResolving(true);

    try {
      if (kind === "catalog") {
        const market = await resolveMarket(DEFAULT_MARKET);
        window.location.assign(getDashboardUrl(market));
        return;
      }

      const href = await resolveRecommendationUrl(DEFAULT_MARKET);

      if (!href) {
        window.alert(
          "Please allow location access so TechPay can open recommendations for your nearest store."
        );
        return;
      }

      window.location.assign(href);
    } catch {
      window.alert(
        "Please allow location access so TechPay can open recommendations for your nearest store."
      );
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
