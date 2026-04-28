"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useState } from "react";
import LogoMark from "@/components/logo-mark";

const aboutLink = {
  href: "/about-us",
  absoluteHref: "/about-us",
  label: "About Us",
} as const;

const futureRetailLink = {
  href: "/future-of-retail",
  absoluteHref: "/future-of-retail",
  label: "Future of Retail",
} as const;

const contactLink = {
  href: "/contact",
  absoluteHref: "/contact",
  label: "Contact",
} as const;

const mainMenuLinkClassName =
  "menu-nav-enter w-fit text-3xl font-extrabold leading-[1] text-techpay-heading no-underline transition hover:text-techpay-primary sm:text-4xl md:text-5xl";

const partnerTriggerClassName =
  "menu-partner-trigger group flex w-full max-w-full cursor-pointer items-center gap-3 rounded-xl border-0 bg-transparent py-1 text-left text-3xl font-extrabold leading-[1] text-techpay-heading transition hover:text-techpay-primary sm:text-4xl md:gap-4 md:text-5xl";

const partnerChildLinks = [
  { href: "/oem", absoluteHref: "/oem", label: "OEM" },
  { href: "/distributors", absoluteHref: "/distributors", label: "Distributors" },
  { href: "/retailers", absoluteHref: "/retailers", label: "Retailers" },
  {
    href: "/associate-retailer",
    absoluteHref: "/associate-retailer",
    label: "Associate Retailer",
  },
] as const;

const partnerPathPrefixes = [
  "/oem",
  "/distributors",
  "/retailers",
  "/associate-retailer",
] as const;

function pathIsUnderPartner(pathname: string) {
  return partnerPathPrefixes.some((p) => pathname === p || pathname.startsWith(`${p}/`));
}

export default function SiteNavbar({ isLandingPage }: { isLandingPage?: boolean }) {
  const pathname = usePathname();
  const partnerPanelId = useId();
  const onLandingPage = isLandingPage ?? pathname === "/";
  const homeHref = onLandingPage ? "#hero" : "/";
  const aboutResolvedHref = onLandingPage ? aboutLink.href : aboutLink.absoluteHref;
  const futureRetailResolvedHref = onLandingPage
    ? futureRetailLink.href
    : futureRetailLink.absoluteHref;
  const contactResolvedHref = onLandingPage ? contactLink.href : contactLink.absoluteHref;
  const partnerChildren = partnerChildLinks.map((link) => ({
    ...link,
    resolvedHref: onLandingPage ? link.href : link.absoluteHref,
  }));
  const [partnerOpen, setPartnerOpen] = useState(() => pathIsUnderPartner(pathname));

  useEffect(() => {
    if (pathIsUnderPartner(pathname)) {
      let cancelled = false;

      queueMicrotask(() => {
        if (!cancelled) {
          setPartnerOpen(true);
        }
      });

      return () => {
        cancelled = true;
      };
    }
  }, [pathname]);

  return (
    <>
      <nav className="navbar fixed left-2 right-2 top-2 z-100 mx-auto w-auto rounded-full border border-white/10 bg-black/40 px-3 py-2.5 backdrop-blur-3xl sm:left-3 sm:right-3 sm:top-3 sm:px-4 sm:py-3 md:left-6 md:right-6 md:top-[18px] md:px-[26px] md:py-[14px]">
        <div className="nav-inner mx-auto flex max-w-full items-center justify-between">
          <Link href={homeHref} className="logo inline-flex items-center no-underline">
            <LogoMark eager />
          </Link>
          <button
            className="menu-toggle inline-flex cursor-pointer items-center gap-2 rounded-full border-0 bg-white/4 px-3 py-2.5 text-techpay-heading transition hover:bg-white/8 md:gap-[14px] md:px-[18px] md:py-[10px]"
            type="button"
            aria-expanded="false"
            aria-controls="menu-overlay"
            aria-label="Open navigation menu"
          >
            MENU
            <span className="menu-toggle-icon flex flex-col gap-[5px]" aria-hidden="true">
              <span className="block h-[2px] w-[22px] rounded-full bg-current" />
              <span className="block h-[2px] w-[22px] rounded-full bg-current" />
            </span>
          </button>
        </div>
      </nav>

      <div
        className="menu-overlay fixed inset-0 z-140 invisible pointer-events-none overflow-hidden opacity-0 backdrop-blur-2xl"
        id="menu-overlay"
        aria-hidden="true"
      >
        <div className="menu-overlay-inner mx-auto flex min-h-[100dvh] w-full max-w-[1200px] flex-col overflow-y-auto px-4 pb-8 pt-4 sm:px-5 sm:pb-9 sm:pt-[22px] md:px-10 md:pb-12 md:pt-7">
          <div className="menu-overlay-header flex items-center justify-between">
            <Link href={homeHref} className="logo menu-logo inline-flex items-center no-underline">
              <LogoMark />
            </Link>
            <button
              className="menu-close cursor-pointer border-0 bg-transparent text-[0.82rem] font-semibold uppercase tracking-[0.08em] text-techpay-heading sm:text-[0.9rem]"
              type="button"
              aria-label="Close navigation menu"
            >
              Close
            </button>
          </div>
          <div className="menu-overlay-content grid flex-1 content-center gap-5 py-10 sm:gap-[22px] md:gap-7">
            
            <div className="menu-links grid gap-[14px] sm:gap-[18px]">
              <Link
                className={mainMenuLinkClassName}
                href={aboutResolvedHref}
              >
                {aboutLink.label}
              </Link>
              <Link
                className={mainMenuLinkClassName}
                href={futureRetailResolvedHref}
              >
                {futureRetailLink.label}
              </Link>
              <Link
                className={mainMenuLinkClassName}
                href={contactResolvedHref}
              >
                {contactLink.label}
              </Link>

              <div className="menu-nav-enter menu-partner-root grid gap-0">
                <button
                  type="button"
                  className={partnerTriggerClassName}
                  aria-expanded={partnerOpen}
                  aria-controls={partnerPanelId}
                  id={`${partnerPanelId}-trigger`}
                  onClick={() => setPartnerOpen((open) => !open)}
                >
                  <span className="min-w-0 flex-1">Partner</span>
                  <span
                    className="menu-partner-chevron inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/12 bg-white/5 text-techpay-heading transition duration-300 ease-out group-hover:border-white/18 group-hover:bg-white/8 md:h-10 md:w-10"
                    aria-hidden
                  >
                    <svg
                      className="h-4 w-4 transition-transform duration-300 ease-out md:h-[18px] md:w-[18px]"
                      style={{ transform: partnerOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </span>
                </button>

                <div
                  id={partnerPanelId}
                  role="region"
                  aria-labelledby={`${partnerPanelId}-trigger`}
                  className={`menu-partner-panel ${partnerOpen ? "menu-partner-panel-open" : ""}`}
                >
                  <div className="menu-partner-panel-inner">
                    <nav className="menu-partner-sublinks flex flex-col gap-3 pt-3 sm:gap-3.5 sm:pt-4 md:gap-4 md:pt-5" aria-label="Partner audiences">
                      {partnerChildren.map((link) => (
                        <Link
                          key={link.label}
                          className="menu-partner-sublink w-fit text-xl! font-medium leading-[1.05] text-techpay-heading no-underline transition hover:text-techpay-primary sm:text-2xl! "
                          href={link.resolvedHref}
                        >
                          {link.label}
                        </Link>
                      ))}
                    </nav>
                  </div>
                </div>
              </div>
            </div>
           
          </div>
        </div>
      </div>
    </>
  );
}
