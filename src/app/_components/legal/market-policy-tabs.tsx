"use client";

import { useState, useSyncExternalStore, type ReactNode } from "react";
import {
  getPreferredMarket,
  type MarketCode,
} from "@/app/_components/home/market-routing";
import { Button } from "@/components/ui/button";

type MarketPolicyTabsProps = {
  ariaLabel: string;
  india: ReactNode;
  malaysia: ReactNode;
  panelIdPrefix: string;
};

const tabs = [
  { label: "India", market: "IN" as const },
  { label: "Malaysia", market: "MY" as const },
];

export default function MarketPolicyTabs({
  ariaLabel,
  india,
  malaysia,
  panelIdPrefix,
}: MarketPolicyTabsProps) {
  const preferredMarket = useSyncExternalStore(
    subscribeToMarketPreference,
    getMarketPreferenceSnapshot,
    getServerMarketPreferenceSnapshot
  );
  const [selectedMarket, setSelectedMarket] = useState<MarketCode | null>(null);
  const activeMarket = selectedMarket ?? preferredMarket;
  const showMalaysiaPolicy = activeMarket === "MY";

  return (
    <>
      <div
        className="mx-auto mb-6 flex max-w-[980px] flex-wrap gap-2"
        role="tablist"
        aria-label={ariaLabel}
      >
        {tabs.map((tab) => {
          const selected = activeMarket === tab.market;
          const panelId = `${panelIdPrefix}-${tab.market.toLowerCase()}`;

          return (
            <Button
              key={tab.market}
              active={selected}
              aria-controls={panelId}
              aria-selected={selected}
              role="tab"
              size="market"
              type="button"
              variant="market"
              onClick={() => setSelectedMarket(tab.market)}
            >
              {tab.label}
            </Button>
          );
        })}
      </div>
      <div
        id={`${panelIdPrefix}-in`}
        role="tabpanel"
        hidden={showMalaysiaPolicy}
        aria-hidden={showMalaysiaPolicy}
      >
        {india}
      </div>
      <div
        id={`${panelIdPrefix}-my`}
        role="tabpanel"
        hidden={!showMalaysiaPolicy}
        aria-hidden={!showMalaysiaPolicy}
      >
        {malaysia}
      </div>
    </>
  );
}

function subscribeToMarketPreference() {
  return () => {};
}

function getMarketPreferenceSnapshot() {
  return getPreferredMarket("IN");
}

function getServerMarketPreferenceSnapshot(): MarketCode {
  return "IN";
}
