export type MarketCode = "IN" | "MY";

type Bounds = {
  maxLat: number;
  maxLng: number;
  minLat: number;
  minLng: number;
};

type MarketConfig = {
  dashboardApiUrl: string;
  dashboardUrl: string;
  geo: "in" | "my";
  qrHeight: number;
  qrSrc: string;
  qrWidth: number;
};

export const DEFAULT_MARKET: MarketCode = "IN";

export const MARKET_LABELS: Record<MarketCode, string> = {
  IN: "India",
  MY: "Malaysia",
};

export const MARKET_CONFIG: Record<MarketCode, MarketConfig> = {
  IN: {
    dashboardApiUrl: "https://shop.techpay.ai/in/api/dashboard",
    geo: "in",
    dashboardUrl: "https://shop.techpay.ai/in/#/dashboard",
    qrSrc: "/assets/india-qr.png",
    qrWidth: 1024,
    qrHeight: 1024,
  },
  MY: {
    dashboardApiUrl: "https://shop.techpay.ai/my/api/dashboard",
    geo: "my",
    dashboardUrl: "https://shop.techpay.ai/my/#/dashboard",
    qrSrc: "/assets/malaysia-qr.png",
    qrWidth: 1018,
    qrHeight: 1012,
  },
};

const INDIA_BOUNDS: Bounds = {
  minLat: 6,
  maxLat: 38.5,
  minLng: 68,
  maxLng: 97.5,
};

const MALAYSIA_BOUNDS: Bounds[] = [
  {
    minLat: 0.8,
    maxLat: 7.8,
    minLng: 99,
    maxLng: 105.8,
  },
  {
    minLat: 0.8,
    maxLat: 7.8,
    minLng: 108.5,
    maxLng: 119.5,
  },
];

function isInsideBounds(lat: number, lng: number, bounds: Bounds) {
  return (
    lat >= bounds.minLat &&
    lat <= bounds.maxLat &&
    lng >= bounds.minLng &&
    lng <= bounds.maxLng
  );
}

export function getMarketFromCoordinates(
  lat: number,
  lng: number
): MarketCode | null {
  if (isInsideBounds(lat, lng, INDIA_BOUNDS)) {
    return "IN";
  }

  if (MALAYSIA_BOUNDS.some((bounds) => isInsideBounds(lat, lng, bounds))) {
    return "MY";
  }

  return null;
}

export function getMarketFromBrowser(): MarketCode | null {
  if (typeof window === "undefined") {
    return null;
  }

  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone.toLowerCase();

  if (timeZone.includes("kolkata") || timeZone.includes("calcutta")) {
    return "IN";
  }

  if (timeZone.includes("kuala_lumpur")) {
    return "MY";
  }

  const languages = [window.navigator.language, ...window.navigator.languages]
    .filter(Boolean)
    .map((value) => value.toLowerCase());

  if (
    languages.some(
      (value) =>
        value === "hi" ||
        value.startsWith("hi-") ||
        value === "ta-in" ||
        value === "en-in" ||
        value.endsWith("-in")
    )
  ) {
    return "IN";
  }

  if (
    languages.some(
      (value) =>
        value === "ms" ||
        value.startsWith("ms-") ||
        value === "en-my" ||
        value.endsWith("-my")
    )
  ) {
    return "MY";
  }

  return null;
}

function getCurrentPosition() {
  return new Promise<GeolocationPosition>((resolve, reject) => {
    if (!("geolocation" in navigator)) {
      reject(new Error("Geolocation is not available in this browser."));
      return;
    }

    navigator.geolocation.getCurrentPosition(resolve, reject, {
      enableHighAccuracy: false,
      maximumAge: 300000,
      timeout: 4500,
    });
  });
}

export function getDashboardUrl(market: MarketCode) {
  return MARKET_CONFIG[market].dashboardUrl;
}

function getMarketFromValue(value?: string | null): MarketCode | null {
  if (!value) {
    return null;
  }

  const normalizedValue = value.toLowerCase();

  if (normalizedValue === "in" || normalizedValue === "india") {
    return "IN";
  }

  if (
    normalizedValue === "my" ||
    normalizedValue === "malaysia"
  ) {
    return "MY";
  }

  return null;
}

function getCurrentHashParams() {
  if (typeof window === "undefined") {
    return new URLSearchParams();
  }

  const queryIndex = window.location.hash.indexOf("?");

  if (queryIndex === -1) {
    return new URLSearchParams();
  }

  return new URLSearchParams(window.location.hash.slice(queryIndex + 1));
}

function getFirstDefinedParam(
  params: URLSearchParams,
  keys: string[]
) {
  for (const key of keys) {
    const value = params.get(key);

    if (value) {
      return value;
    }
  }

  return null;
}

export function getMarketFromCurrentUrl() {
  if (typeof window === "undefined") {
    return null;
  }

  const searchParams = new URLSearchParams(window.location.search);
  const hashParams = getCurrentHashParams();

  return (
    getMarketFromValue(getFirstDefinedParam(searchParams, ["geo", "market"])) ??
    getMarketFromValue(getFirstDefinedParam(hashParams, ["geo", "market"]))
  );
}

export function getStoreIdFromCurrentUrl() {
  if (typeof window === "undefined") {
    return null;
  }

  const params = new URLSearchParams(window.location.search);
  const hashParams = getCurrentHashParams();

  return (
    getFirstDefinedParam(params, ["store_id", "storeId", "id"]) ||
    getFirstDefinedParam(hashParams, ["store_id", "storeId", "id"])
  );
}

export function getRecommendationUrl(
  market: MarketCode,
  storeId?: string | null
) {
  const { geo } = MARKET_CONFIG[market];
  const url = new URL(`https://shop.techpay.ai/${geo}/recoAI/`);
  url.searchParams.set("geo", geo);

  if (storeId) {
    url.searchParams.set("store_id", storeId);
  }

  return url.toString();
}

type DashboardApiResponse = {
  store?: {
    _id?: string | null;
  } | null;
};

async function getNearestStoreIdFromCoordinates(
  market: MarketCode,
  latitude: number,
  longitude: number
) {
  const url = new URL(MARKET_CONFIG[market].dashboardApiUrl);
  url.searchParams.set("latitude", String(latitude));
  url.searchParams.set("longitude", String(longitude));

  const response = await fetch(url.toString(), {
    cache: "no-store",
    mode: "cors",
  });

  if (!response.ok) {
    throw new Error(`Dashboard lookup failed with status ${response.status}.`);
  }

  const data = (await response.json()) as DashboardApiResponse;
  const storeId = data.store?._id;

  return typeof storeId === "string" && storeId.length > 0 ? storeId : null;
}

export async function resolveRecommendationUrl(
  initialMarket = DEFAULT_MARKET
) {
  const existingStoreId = getStoreIdFromCurrentUrl();
  const currentMarket = getMarketFromCurrentUrl() ?? getMarketFromBrowser();

  if (existingStoreId) {
    return getRecommendationUrl(
      currentMarket ?? initialMarket,
      existingStoreId
    );
  }

  const position = await getCurrentPosition();
  const detectedMarket =
    getMarketFromCoordinates(
      position.coords.latitude,
      position.coords.longitude
    ) ??
    currentMarket ??
    initialMarket;
  const storeId = await getNearestStoreIdFromCoordinates(
    detectedMarket,
    position.coords.latitude,
    position.coords.longitude
  );

  return storeId
    ? getRecommendationUrl(detectedMarket, storeId)
    : null;
}

export async function resolveMarket(initialMarket = DEFAULT_MARKET) {
  let nextMarket = getMarketFromBrowser() ?? initialMarket;

  try {
    const position = await getCurrentPosition();
    const detectedMarket = getMarketFromCoordinates(
      position.coords.latitude,
      position.coords.longitude
    );

    if (detectedMarket) {
      nextMarket = detectedMarket;
    }
  } catch {
    // Fall back to browser/default market if geolocation is unavailable.
  }

  return nextMarket;
}
