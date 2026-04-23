import Link from "next/link";
import {
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandX,
} from "@tabler/icons-react";
import LogoMark from "@/components/logo-mark";
import { ButtonAnchor } from "@/components/ui/button";

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
    <footer className="footer relative z-[3] bg-techpay-bg px-5 py-10 md:px-[60px] md:py-[60px]">
      <div className="footer-inner mx-auto mb-10 flex max-w-[1100px] flex-col items-center gap-6 text-center md:flex-row md:items-start md:justify-between md:text-left">
        <div className="footer-brand">
          <Link href="/" className="logo inline-flex items-center no-underline">
            <LogoMark />
          </Link>
          <p className="mt-3 text-[0.9rem] text-techpay-muted">
            Making computer ownership accessible for everyone.
          </p>
        </div>
        <div className="flex flex-col items-center gap-4 md:items-end">
          <div className="footer-links flex flex-col items-center gap-3 md:flex-row md:items-start md:gap-8">
            <Link className="text-[0.9rem] text-techpay-muted no-underline transition hover:text-techpay-heading" href="/future-of-retail">
              Future of Retail
            </Link>
            <Link className="text-[0.9rem] text-techpay-muted no-underline transition hover:text-techpay-heading" href="/privacy-policy">
              Privacy Policy
            </Link>
            <Link className="text-[0.9rem] text-techpay-muted no-underline transition hover:text-techpay-heading" href="/coming-soon">
              Terms of Service
            </Link>
            <Link className="text-[0.9rem] text-techpay-muted no-underline transition hover:text-techpay-heading" href="/coming-soon">
              Contact Us
            </Link>
          </div>
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
      <div className="footer-bottom mx-auto max-w-[1100px] pt-6 text-center md:text-left">
        <p className="text-[0.85rem] text-techpay-muted">&copy; 2026 TECHPAY.ai. All rights reserved.</p>
      </div>
    </footer>
  );
}
