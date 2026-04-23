import type { Metadata } from "next";
import PolicyMarketSwitcher from "./_components/policy-market-switcher";
import {
  indiaPrivacyPolicy,
  malaysiaPrivacyPolicy,
  type PolicyBlock,
  type PrivacyPolicy,
} from "./policies";

export const metadata: Metadata = {
  title: "Privacy Policy | TechPay.ai",
  description:
    "Privacy Policy for TechPay.ai services, shown for India by default and Malaysia when the visitor market resolves to Malaysia.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-techpay-bg px-5 pb-20 pt-32 text-techpay-text md:px-10 md:pb-28 md:pt-40 lg:px-[60px]">
      <PolicyMarketSwitcher
        india={<PolicyDocument policy={indiaPrivacyPolicy} />}
        malaysia={<PolicyDocument policy={malaysiaPrivacyPolicy} />}
      />
    </main>
  );
}

function PolicyDocument({ policy }: { policy: PrivacyPolicy }) {
  return (
    <article className="mx-auto max-w-[980px]">
      <header className="pb-10 md:pb-14">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-techpay-primary">
          {policy.jurisdiction}
        </p>
        <h1 className="font-display text-[clamp(2.15rem,5vw,4.8rem)] font-bold leading-[0.98] tracking-[-0.04em] text-techpay-heading">
          {policy.title}
        </h1>
        <div className="mt-7 grid gap-3 border-y border-white/10 py-5 text-sm text-techpay-muted sm:grid-cols-2">
          <p>
            <span className="font-semibold text-techpay-heading">Effective Date:</span>{" "}
            {policy.effectiveDate}
          </p>
          <p>
            <span className="font-semibold text-techpay-heading">Entity:</span>{" "}
            {policy.entity}
          </p>
        </div>
        <p className="mt-7 max-w-3xl text-base leading-8 text-techpay-muted md:text-lg md:leading-9">
          {policy.summary}
        </p>
      </header>

      <div className="grid gap-8 md:gap-10">
        {policy.sections.map((section) => (
          <section
            key={section.title}
            className="border-t border-white/10 pt-7 md:pt-9"
          >
            <h2 className="font-display text-[1.35rem] font-semibold leading-tight tracking-[-0.02em] text-techpay-heading md:text-[1.75rem]">
              {section.title}
            </h2>
            <div className="mt-5 grid gap-4 text-[0.96rem] leading-7 text-techpay-muted md:text-base md:leading-8">
              {section.blocks.map((block, index) => (
                <PolicyBlockView block={block} key={`${section.title}-${index}`} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </article>
  );
}

function PolicyBlockView({ block }: { block: PolicyBlock }) {
  switch (block.type) {
    case "paragraph":
      return <p>{block.text}</p>;
    case "subheading":
      return (
        <h3 className="pt-2 text-base font-semibold text-techpay-heading md:text-lg">
          {block.title}
        </h3>
      );
    case "list":
      return (
        <ul className="grid gap-3 pl-5">
          {block.items.map((item) => (
            <li className="list-disc pl-1" key={item}>
              {item}
            </li>
          ))}
        </ul>
      );
    case "address":
      return (
        <address className="not-italic text-techpay-heading">
          {block.lines.map((line) => (
            <span className="block" key={line}>
              {line}
            </span>
          ))}
        </address>
      );
  }
}
