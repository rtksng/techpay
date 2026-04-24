import type { Metadata } from "next";
import { Mail, MessageSquareText, Phone } from "lucide-react";
import ContactForm from "./_components/contact-form";

export const metadata: Metadata = {
  title: "Contact Us | TechPay.ai",
  description:
    "Contact TechPay.ai with your request, contact details, and enquiry category.",
};

export const dynamic = "force-static";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-techpay-bg px-5 pb-20 pt-32 text-techpay-text md:px-10 md:pb-28 md:pt-40 lg:px-[60px]">
      <section className="mx-auto grid max-w-[1120px] gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
        <div className="lg:sticky lg:top-32">
          <p className="mb-4 text-sm font-semibold uppercase text-techpay-primary">
            Contact Form
          </p>
          <h1 className="font-display text-5xl font-bold leading-none text-techpay-heading md:text-7xl">
            Get in touch
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-techpay-muted md:text-lg md:leading-8">
            Send your request to TechPay.ai and the right team will review the
            details.
          </p>

          <div className="mt-8 grid gap-3 text-sm text-techpay-muted">
            <div className="flex items-center gap-3 border-t border-white/10 pt-4">
              <Mail className="h-5 w-5 text-techpay-orange" strokeWidth={1.8} />
              <span>Email and contact details</span>
            </div>
            <div className="flex items-center gap-3 border-t border-white/10 pt-4">
              <MessageSquareText
                className="h-5 w-5 text-techpay-orange"
                strokeWidth={1.8}
              />
              <span>Subject/category</span>
            </div>
            <div className="flex items-center gap-3 border-t border-white/10 pt-4">
              <Phone className="h-5 w-5 text-techpay-orange" strokeWidth={1.8} />
              <span>Mobile number</span>
            </div>
          </div>
        </div>

        <ContactForm />
      </section>
    </main>
  );
}
