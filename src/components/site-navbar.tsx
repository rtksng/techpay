import Link from "next/link";
import LogoMark from "@/components/logo-mark";

const sharedMenuLinks = [
  // { href: "#hero", absoluteHref: "/#hero", label: "Home" },
  { href: "/about-us", absoluteHref: "/about-us", label: "About Us" },
  { href: "/retailers", absoluteHref: "/retailers", label: "Retailers" },
  { href: "/distributors", absoluteHref: "/distributors", label: "Distributors" },
  { href: "/oem", absoluteHref: "/oem", label: "OEM" },
  // { href: "#how-it-works", absoluteHref: "/#how-it-works", label: "How It Works" },
  // { href: "#features", absoluteHref: "/#features", label: "Features" },
  // { href: "#recommendation", absoluteHref: "/#recommendation", label: "Recommendation" },
  // { href: "#qr-section", absoluteHref: "/#qr-section", label: "Find a Store" },
];

export default function SiteNavbar({ isLandingPage = false }: { isLandingPage?: boolean }) {
  const homeHref = isLandingPage ? "#hero" : "/";
  const links = sharedMenuLinks.map((link) => ({
    ...link,
    resolvedHref: isLandingPage ? link.href : link.absoluteHref,
  }));

  return (
    <>
      <nav className="navbar fixed left-3 right-3 top-3 z-100 mx-auto w-auto rounded-full border border-white/10 bg-black/20 px-4 py-3 backdrop-blur-3xl md:left-6 md:right-6 md:top-[18px] md:px-[26px] md:py-[14px]">
        <div className="nav-inner mx-auto flex max-w-full items-center justify-between">
          <Link href={homeHref} className="logo inline-flex items-center no-underline">
            <LogoMark priority={isLandingPage} />
          </Link>
          <button
            className="menu-toggle inline-flex cursor-pointer items-center gap-2.5 rounded-full border-0 bg-white/4 px-[14px] py-[10px] text-techpay-heading transition hover:bg-white/8 md:gap-[14px] md:px-[18px]"
            type="button"
            aria-expanded="false"
            aria-controls="menu-overlay"
            aria-label="Open navigation menu"
          >
            <span className="menu-toggle-icon flex flex-col gap-[5px]" aria-hidden="true">
              <span className="block h-[2px] w-[22px] rounded-full bg-current" />
              <span className="block h-[2px] w-[22px] rounded-full bg-current" />
            </span>
          </button>
        </div>
      </nav>

      <div
        className="menu-overlay fixed inset-0 z-140 invisible pointer-events-none opacity-0 backdrop-blur-2xl"
        id="menu-overlay"
        aria-hidden="true"
      >
        <div className="menu-overlay-inner mx-auto flex min-h-screen w-full max-w-[1200px] flex-col px-5 pb-9 pt-[22px] md:px-10 md:pb-12 md:pt-7">
          <div className="menu-overlay-header flex items-center justify-between">
            <Link href={homeHref} className="logo menu-logo inline-flex items-center no-underline">
              <LogoMark />
            </Link>
            <button
              className="menu-close cursor-pointer border-0 bg-transparent text-[0.9rem] font-semibold uppercase tracking-[0.08em] text-techpay-heading"
              type="button"
              aria-label="Close navigation menu"
            >
              Close
            </button>
          </div>
          <div className="menu-overlay-content grid flex-1 content-center gap-[22px] md:gap-7">
            <p className="menu-kicker text-[0.8rem] font-semibold uppercase tracking-[0.16em] text-techpay-primary">
              Navigation
            </p>
            <div className="menu-links grid gap-[14px]">
              {links.map((link) => (
                <Link
                  key={link.label}
                  className="w-fit text-[clamp(2.2rem,12vw,3.6rem)] font-extrabold leading-[0.98] tracking-[-0.05em] text-techpay-heading no-underline transition hover:text-techpay-primary md:text-[clamp(2.6rem,7vw,5.8rem)]"
                  href={link.resolvedHref}
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <p className="menu-meta max-w-[520px] text-[0.95rem] leading-[1.8] text-techpay-muted md:text-[1rem]">
              Flexible payments. Real human support. Smarter laptop recommendations.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
