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

const MARKET_STORAGE_KEY = "techpayMarket";
const STORE_ID_STORAGE_KEY_PREFIX = "techpayStoreId:";
const publicBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

function publicAsset(path: `/${string}`) {
  return `${publicBasePath}${path}`;
}

export const MARKET_LABELS: Record<MarketCode, string> = {
  IN: "India",
  MY: "Malaysia",
};

export const MARKET_CONFIG: Record<MarketCode, MarketConfig> = {
  IN: {
    dashboardApiUrl: "https://shop.techpay.ai/in/api/dashboard",
    geo: "in",
    dashboardUrl: "https://shop.techpay.ai/in/#/dashboard",
    qrSrc: publicAsset("/assets/india-qr.png"),
    qrWidth: 1024,
    qrHeight: 1024,
  },
  MY: {
    dashboardApiUrl: "https://shop.techpay.ai/my/api/dashboard",
    geo: "my",
    dashboardUrl: "https://shop.techpay.ai/my/#/dashboard",
    qrSrc: publicAsset("/assets/malaysia-qr.png"),
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

function getStoredValue(key: string, storage: Storage) {
  try {
    const value = storage.getItem(key);
    return value && value.trim().length > 0 ? value : null;
  } catch {
    return null;
  }
}

function setStoredValue(key: string, value: string) {
  if (typeof window === "undefined") {
    return;
  }

  try {
    window.sessionStorage.setItem(key, value);
  } catch {
    // Ignore storage write failures.
  }

  try {
    window.localStorage.setItem(key, value);
  } catch {
    // Ignore storage write failures.
  }
}

function getMarketFromPathname() {
  if (typeof window === "undefined") {
    return null;
  }

  const segments = window.location.pathname
    .toLowerCase()
    .split("/")
    .filter(Boolean);

  for (const segment of segments) {
    const market = getMarketFromValue(segment);

    if (market) {
      return market;
    }
  }

  return null;
}

function getPersistedMarket() {
  if (typeof window === "undefined") {
    return null;
  }

  return (
    getMarketFromValue(
      getStoredValue(MARKET_STORAGE_KEY, window.sessionStorage)
    ) ??
    getMarketFromValue(
      getStoredValue(MARKET_STORAGE_KEY, window.localStorage)
    )
  );
}

function persistMarket(market: MarketCode) {
  setStoredValue(MARKET_STORAGE_KEY, market);
}

function getStoreIdStorageKey(market: MarketCode) {
  return `${STORE_ID_STORAGE_KEY_PREFIX}${market}`;
}

function getPersistedStoreId(market: MarketCode) {
  if (typeof window === "undefined") {
    return null;
  }

  return (
    getStoredValue(getStoreIdStorageKey(market), window.sessionStorage) ??
    getStoredValue(getStoreIdStorageKey(market), window.localStorage)
  );
}

function persistStoreId(market: MarketCode, storeId: string) {
  setStoredValue(getStoreIdStorageKey(market), storeId);
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

export function getPreferredMarket(initialMarket = DEFAULT_MARKET) {
  return (
    getMarketFromCurrentUrl() ??
    getMarketFromPathname() ??
    getPersistedMarket() ??
    getMarketFromBrowser() ??
    initialMarket
  );
}

export function setPreferredMarket(market: MarketCode) {
  persistMarket(market);
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

function getKnownStoreId(market: MarketCode) {
  return getStoreIdFromCurrentUrl() ?? getPersistedStoreId(market);
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

export type RecommendationResolution =
  | {
      href: string;
      market: MarketCode;
      reason: null;
    }
  | {
      href: null;
      market: MarketCode;
      reason: "location_unavailable" | "store_unavailable";
    };

export async function resolveRecommendationUrl(
  initialMarket = DEFAULT_MARKET
) : Promise<RecommendationResolution> {
  const currentMarket = getPreferredMarket(initialMarket);
  const existingStoreId = getKnownStoreId(currentMarket);

  if (existingStoreId) {
    persistMarket(currentMarket);
    persistStoreId(currentMarket, existingStoreId);

    return {
      href: getRecommendationUrl(currentMarket, existingStoreId),
      market: currentMarket,
      reason: null,
    };
  }

  if (typeof window === "undefined" || !window.isSecureContext) {
    return {
      href: null,
      market: currentMarket,
      reason: "location_unavailable",
    };
  }

  const position = await getCurrentPosition();
  persistMarket(currentMarket);
  const storeId = await getNearestStoreIdFromCoordinates(
    currentMarket,
    position.coords.latitude,
    position.coords.longitude
  );

  if (!storeId) {
    return {
      href: null,
      market: currentMarket,
      reason: "store_unavailable",
    };
  }

  persistStoreId(currentMarket, storeId);

  return {
    href: getRecommendationUrl(currentMarket, storeId),
    market: currentMarket,
    reason: null,
  };
}

export async function resolveMarket(initialMarket = DEFAULT_MARKET) {
  const nextMarket = getPreferredMarket(initialMarket);
  persistMarket(nextMarket);
  return nextMarket;
}
