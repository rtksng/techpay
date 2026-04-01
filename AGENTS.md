<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes - APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Performance Rules

This repo uses Next.js 16 App Router. Treat performance as a product requirement, not a cleanup task.

### Rendering Mode

- Prefer Server Components, SSR, or static prerendering for above-the-fold and SEO-relevant content.
- Do not move whole pages, layouts, or large sections to CSR just to support a small interaction. Keep `"use client"` boundaries as small leaf islands.
- Use Client Components only when you need state, effects, event handlers, browser APIs, WebGL or canvas, or animation runtimes.
- Never make the root layout or the whole landing page client-rendered unless there is a hard requirement.
- If a route can stay static, keep it static. Be careful with `cookies()`, `headers()`, `searchParams`, and other request-time APIs because they can force dynamic rendering.
- Use streaming and `Suspense` for slow sections so the first screen can render immediately.

### JS and Hydration Budgets

- Keep the first screen mostly server-rendered HTML and CSS. Hydrate only the interactive islands.
- Heavy client libraries such as `three`, `gsap`, `lenis`, custom canvas code, and large animation timelines must be lazy loaded or triggered after first paint or when needed.
- Do not block initial render with non-critical 3D scenes, videos, analytics, or below-the-fold code.
- Avoid long main-thread tasks over 50 ms. Split setup work, defer non-critical effects, and reduce third-party script cost.
- Prefer `next/dynamic`, route-level code splitting, and viewport-triggered loading for below-the-fold experiences.

### Web Vitals Targets

- Treat these as guardrails for every change. Regressions need justification.
- `TTFB`: good `<= 0.8s`, poor `> 1.8s`
- `FCP`: good `<= 1.8s`, poor `> 3.0s`
- `LCP`: good `<= 2.5s`, poor `> 4.0s`
- `INP`: good `<= 200ms`, poor `> 500ms`
- `CLS`: good `<= 0.1`, poor `> 0.25`
- `TBT`: target `< 200ms` on mobile in Lighthouse; treat `> 600ms` as poor
- `TBT` is a lab responsiveness proxy, not a Core Web Vital. Use it to catch JavaScript and main-thread regressions in lab runs, and use `INP` for real user responsiveness.

### Asset Rules

- Use `next/image` for meaningful images. Always set dimensions or `fill` with correct `sizes` to avoid CLS.
- Only mark truly above-the-fold LCP images as `priority`.
- Use `next/font`; keep fonts self-hosted and `display: "swap"` unless there is a stronger reason not to.
- Keep hero media, gradients, and decorative effects lightweight. Provide a static fallback if advanced rendering fails or is delayed.
- Respect `prefers-reduced-motion` for animation-heavy experiences.

### Validation

- Before finishing significant UI or performance work, run `next build`.
- For landing-page changes, verify Lighthouse or Web Vitals impact in production mode, not only dev mode.
- When a performance tradeoff is necessary, note which metric is expected to worsen and why.
