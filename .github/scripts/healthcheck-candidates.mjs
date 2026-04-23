const configuredUrl = process.env.HEALTHCHECK_URL;
const basePath = process.env.APP_BASE_PATH || "";
const normalizedBasePath = basePath
  ? `/${basePath.replace(/^\/+|\/+$/g, "")}`
  : "";
const candidates = [];

function addCandidate(url) {
  if (url && !candidates.includes(url)) {
    candidates.push(url);
  }
}

if (!configuredUrl) {
  console.error("HEALTHCHECK_URL must be set.");
  process.exit(1);
}

try {
  const configured = new URL(configuredUrl);

  addCandidate(configured.toString());
  addCandidate(new URL(`${normalizedBasePath}/health`, configured.origin).toString());
  addCandidate(
    new URL(`${normalizedBasePath}/api/health`, configured.origin).toString(),
  );
  addCandidate(new URL("/health", configured.origin).toString());
  addCandidate(new URL("/api/health", configured.origin).toString());
} catch (error) {
  console.error("HEALTHCHECK_URL must be an absolute URL.");
  process.exit(1);
}

console.log(candidates.join("\n"));
