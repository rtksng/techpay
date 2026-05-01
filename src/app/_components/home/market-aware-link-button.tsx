'use client';

import { useState } from "react";
import {
  DEFAULT_MARKET,
  getDashboardUrl,
  getPreferredMarket,
  resolveMarket,
  resolveRecommendationUrl,
} from "@/app/_components/home/market-routing";
import {
  ButtonAnchor,
  type ButtonSize,
  type ButtonVariant,
} from "@/components/ui/button";

type MarketAwareLinkButtonProps = {
  className?: string;
  fullWidth?: boolean;
  kind: "catalog" | "recommendation" | "eligibility" | "helpdesk";
  label: string;
  loadingLabel?: string;
  size?: ButtonSize;
  variant?: ButtonVariant;
};

export default function MarketAwareLinkButton({
  className,
  fullWidth,
  kind,
  label,
  loadingLabel = "Loading...",
  size = "md",
  variant = "primary",
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
        const market = await resolveMarket(DEFAULT_MARKET);
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
    <ButtonAnchor
      href={defaultHref}
      onClick={handleClick}
      className={className}
      fullWidth={fullWidth}
      isLoading={isResolving}
      loadingLabel={loadingLabel}
      size={size}
      variant={variant}
    >
      {label}
    </ButtonAnchor>
  );
}
