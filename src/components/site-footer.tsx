import Link from "next/link";
import {
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandX,
} from "@tabler/icons-react";
import LogoMark from "@/components/logo-mark";
import { ButtonAnchor } from "@/components/ui/button";

const footerGroups = [
  {
    title: "Explore",
    links: [
      { label: "About Us", href: "/about-us" },
      { label: "Future of Retail", href: "/future-of-retail" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Partner",
    links: [
      { label: "OEM", href: "/oem" },
      { label: "Distributors", href: "/distributors" },
      { label: "Retailers", href: "/retailers" },
      { label: "Associate Retailer", href: "/associate-retailer" },
    ],
  },
  {
    title: "Policies",
    links: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Cookie Policy", href: "/cookie-policy" },
      { label: "Refund Policy", href: "/refund-policy" },
      { label: "Terms & Conditions", href: "/terms-and-conditions" },
    ],
  },
];

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/techpay-ai/",
    icon: IconBrandLinkedin,
  },
  {
    label: "X",
    href: "/coming-soon",
    icon: IconBrandX,
  },
  {
    label: "Instagram",
    href: "/coming-soon",
    icon: IconBrandInstagram,
  },
];

export default function SiteFooter() {
  return (
    <footer className="footer relative z-[3] overflow-hidden bg-techpay-bg px-5 py-12 md:px-[60px] md:py-16">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-techpay-primary/60 to-transparent"
        aria-hidden="true"
      />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_0%,rgba(237,29,95,0.12),transparent_28%),radial-gradient(circle_at_82%_12%,rgba(242,100,34,0.08),transparent_30%)]" />

      <div className="relative mx-auto max-w-[1180px]">
        <div className="grid gap-10 border-b border-white/10 pb-10 lg:grid-cols-[1.1fr_1.3fr] lg:gap-14">
          <div className="max-w-xl">
            <Link href="/" className="logo inline-flex items-center no-underline">
              <LogoMark />
            </Link>
            <h2 className="mt-6 font-display text-3xl font-bold leading-tight text-techpay-heading md:text-4xl">
              Smarter ownership starts here.
            </h2>
            <p className="mt-4 max-w-md text-sm leading-7 text-techpay-muted md:text-base">
              AI-guided recommendations, flexible payments, and after-sales
              support for a better technology buying journey.
            </p>

            
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {footerGroups.map((group) => (
              <nav key={group.title} aria-label={group.title}>
                <h3 className="mb-4 text-xs font-semibold uppercase text-techpay-heading">
                  {group.title}
                </h3>
                <div className="grid gap-3">
                  {group.links.map((link) => (
                    <Link
                      key={link.href}
                      className="group inline-flex w-fit items-center gap-2 text-sm text-techpay-muted no-underline transition hover:text-techpay-heading"
                      href={link.href}
                    >
                      <span className="h-px w-3 bg-techpay-primary/55 transition group-hover:w-5 group-hover:bg-techpay-orange" />
                      {link.label}
                    </Link>
                  ))}
                </div>
              </nav>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-5 pt-6 text-center md:flex-row md:text-left">
          <p className="text-[0.85rem] text-techpay-muted">
            &copy; 2026 TECHPAY.ai. All rights reserved.
          </p>
          <div className="flex items-center gap-3" aria-label="Social media links">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              const isExternal = social.href.startsWith("http");

              return (
                <ButtonAnchor
                  key={social.label}
                  href={social.href}
                  aria-label={`TechPay.ai on ${social.label}`}
                  rel={isExternal ? "noreferrer" : undefined}
                  size="socialIcon"
                  target={isExternal ? "_blank" : undefined}
                  variant="socialIcon"
                >
                  <Icon aria-hidden="true" size={19} stroke={1.8} />
                </ButtonAnchor>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
