export type LegalPolicyBlock =
  | {
      type: "paragraph";
      text: string;
    }
  | {
      type: "list";
      items: string[];
    }
  | {
      type: "subheading";
      title: string;
    };

export type LegalPolicy = {
  blocks?: LegalPolicyBlock[];
  title: string;
  summary?: string;
  meta?: Array<{
    label: string;
    value: string;
  }>;
  sections?: Array<{
    title: string;
    blocks: LegalPolicyBlock[];
  }>;
};

export default function LegalPolicyDocument({
  policy,
}: {
  policy: LegalPolicy;
}) {
  return (
    <article className="mx-auto max-w-[980px]">
      <header className="pb-10 md:pb-14">
        <h1 className="font-display text-[clamp(2.15rem,5vw,4.8rem)] font-bold leading-[0.98] tracking-[-0.04em] text-techpay-heading">
          {policy.title}
        </h1>
        {policy.meta?.length ? (
          <div className="mt-7 grid gap-3 border-y border-white/10 py-5 text-sm text-techpay-muted sm:grid-cols-2">
            {policy.meta.map((item) => (
              <p key={item.label}>
                <span className="font-semibold text-techpay-heading">
                  {item.label}:
                </span>{" "}
                {item.value}
              </p>
            ))}
          </div>
        ) : null}
        {policy.summary ? (
          <p className="mt-7 max-w-3xl text-base leading-8 text-techpay-muted md:text-lg md:leading-9">
            {policy.summary}
          </p>
        ) : null}
      </header>

      {policy.blocks?.length ? (
        <div className="grid gap-4 text-[0.96rem] leading-7 text-techpay-muted md:text-base md:leading-8">
          {policy.blocks.map((block, index) => (
            <LegalPolicyBlockView block={block} key={index} />
          ))}
        </div>
      ) : null}

      {policy.sections?.length ? (
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
                  <LegalPolicyBlockView
                    block={block}
                    key={`${section.title}-${index}`}
                  />
                ))}
              </div>
            </section>
          ))}
        </div>
      ) : null}
    </article>
  );
}

function LegalPolicyBlockView({ block }: { block: LegalPolicyBlock }) {
  switch (block.type) {
    case "paragraph":
      return <LegalParagraph text={block.text} />;
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
  }
}

const standaloneSubheadings = new Set([
  "Notice",
  "Choice",
  "Consent",
  "Purpose Limitation",
  "Data Minimisation",
  "Use and Disclosure Controls",
  "Onward Transfer",
  "Accuracy and Integrity",
  "Access, Correction, Completion, Updating, and Erasure",
  "Security Safeguards",
  "Retention and Disposal",
  "Accountability",
  "Responsibility",
  "Training and Awareness",
  "Exceptions",
  "Violations",
  "Contacting Us",
]);

function LegalParagraph({ text }: { text: string }) {
  const trimmedText = text.trim();

  if (/^\d+\.\d+\s+\S/.test(trimmedText) || /^[a-z]\)\s+\S/i.test(trimmedText)) {
    return (
      <h3 className="pt-3 text-lg font-semibold leading-tight text-techpay-heading md:text-xl">
        {text}
      </h3>
    );
  }

  if (/^\d+\.\s+\S/.test(trimmedText)) {
    return (
      <h2 className="pt-6 font-display text-2xl font-semibold leading-tight text-techpay-heading md:text-3xl">
        {text}
      </h2>
    );
  }

  if (standaloneSubheadings.has(trimmedText)) {
    return (
      <h3 className="pt-3 text-lg font-semibold leading-tight text-techpay-heading md:text-xl">
        {text}
      </h3>
    );
  }

  const labelMatch = /^([^:\n]{2,45}:)([\s\S]+)$/.exec(text);

  if (labelMatch) {
    return (
      <p className="whitespace-pre-line">
        <span className="font-semibold text-techpay-heading">
          {labelMatch[1]}
        </span>
        {labelMatch[2]}
      </p>
    );
  }

  return <p className="whitespace-pre-line">{text}</p>;
}
