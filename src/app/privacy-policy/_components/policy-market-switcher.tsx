"use client";

import { useSyncExternalStore, type ReactNode } from "react";
import {
  getPreferredMarket,
  type MarketCode,
} from "@/app/_components/home/market-routing";

type PolicyMarketSwitcherProps = {
  india: ReactNode;
  malaysia: ReactNode;
};

export default function PolicyMarketSwitcher({
  india,
  malaysia,
}: PolicyMarketSwitcherProps) {
  const market = useSyncExternalStore(
    subscribeToMarketPreference,
    getMarketPreferenceSnapshot,
    getServerMarketPreferenceSnapshot
  );

  const showMalaysiaPolicy = market === "MY";

  return (
    <>
      <div hidden={showMalaysiaPolicy} aria-hidden={showMalaysiaPolicy}>
        {india}
      </div>
      <div hidden={!showMalaysiaPolicy} aria-hidden={!showMalaysiaPolicy}>
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
