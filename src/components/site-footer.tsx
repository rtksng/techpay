import Link from "next/link";
import LogoMark from "@/components/logo-mark";

export default function SiteFooter() {
  return (
    <footer className="footer relative z-[3] bg-techpay-bg px-5 py-10 md:px-[60px] md:py-[60px]">
      <div className="footer-inner mx-auto mb-10 flex max-w-[1100px] flex-col gap-6 md:flex-row md:items-start md:justify-between">
        <div className="footer-brand">
          <Link href="/" className="logo inline-flex items-center no-underline">
            <LogoMark />
          </Link>
          <p className="mt-3 text-[0.9rem] text-techpay-muted">
            Making computer ownership accessible for everyone.
          </p>
        </div>
        <div className="footer-links flex flex-col gap-3 md:flex-row md:gap-8">
          <Link className="text-[0.9rem] text-techpay-muted no-underline transition hover:text-techpay-heading" href="#">
            Privacy Policy
          </Link>
          <Link className="text-[0.9rem] text-techpay-muted no-underline transition hover:text-techpay-heading" href="#">
            Terms of Service
          </Link>
          <Link className="text-[0.9rem] text-techpay-muted no-underline transition hover:text-techpay-heading" href="#">
            Contact Us
          </Link>
        </div>
      </div>
      <div className="footer-bottom mx-auto max-w-[1100px] pt-6">
        <p className="text-[0.85rem] text-techpay-muted">&copy; 2026 TechPay.ai. All rights reserved.</p>
      </div>
    </footer>
  );
}
