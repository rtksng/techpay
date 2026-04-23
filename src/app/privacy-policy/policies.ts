export type PolicyBlock =
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
    }
  | {
      type: "address";
      lines: string[];
    };

export type PrivacyPolicy = {
  market: "IN" | "MY";
  jurisdiction: string;
  title: string;
  effectiveDate: string;
  entity: string;
  summary: string;
  sections: Array<{
    title: string;
    blocks: PolicyBlock[];
  }>;
};

export const malaysiaPrivacyPolicy: PrivacyPolicy = {
  market: "MY",
  jurisdiction: "Malaysia",
  title: "Privacy Policy - TECHPAYAI SDN BHD",
  effectiveDate: "1st November 2025",
  entity: "TECHPAYAI SDN BHD (Company No. 202501047647 (1649055-K))",
  summary:
    "This Privacy Policy explains how TECHPAYAI SDN BHD collects, uses, discloses, stores, and protects personal data in connection with our services, website, and online or offline interactions in Malaysia.",
  sections: [
    {
      title: "1. Introduction",
      blocks: [
        {
          type: "paragraph",
          text:
            "This Privacy Policy applies to TECHPAYAI SDN BHD (Company No. 202501047647 (1649055-K)) and its affiliates (\"TechPay AI\", \"we\", \"our\", \"us\") and governs the collection, use, and disclosure of personal data in connection with our services, website (www.techpay.ai), and any other online or offline interaction with you (\"you\", \"your\"). This policy is designed to comply with the PDPA and other applicable laws in Malaysia.",
        },
      ],
    },
    {
      title: "2. Scope",
      blocks: [
        {
          type: "paragraph",
          text: "This Privacy Policy covers personal data collected from:",
        },
        {
          type: "list",
          items: [
            "Visitors to our website and applications.",
            "Customers, users, and prospective customers, including individuals representing corporate clients.",
            "Persons who request information, engage in transactions, subscribe to newsletters, or otherwise engage with us.",
          ],
        },
        {
          type: "paragraph",
          text:
            "The policy does not apply to personal data collected by third-party websites to which our services may link or by our business partners under separate policies.",
        },
      ],
    },
    {
      title: "3. What is Personal Data",
      blocks: [
        {
          type: "paragraph",
          text:
            "For the purposes of this policy and under the PDPA, personal data means any information that relates directly or indirectly to an individual who is identified or identifiable. This may include, but is not limited to, name, email address, telephone number, national identity number, IP address, location data, and other demographic or usage data.",
        },
      ],
    },
    {
      title: "4. Information We Collect",
      blocks: [
        {
          type: "subheading",
          title: "a) Information you provide",
        },
        {
          type: "paragraph",
          text: "We may ask you to provide personal data when you:",
        },
        {
          type: "list",
          items: [
            "Use our website or application.",
            "Request quotes, services, or support.",
            "Register an account.",
            "Subscribe to newsletters or marketing communications.",
            "Participate in surveys, webinars, or promotional offers.",
            "Contact us through forms, email, or phone.",
          ],
        },
        {
          type: "paragraph",
          text:
            "Such personal data may include your name, email address, billing or shipping address, telephone number, user ID, password, job title, company information, demographics such as age, gender and interests, payment information where applicable, national identity number where required, and any other information you choose to provide.",
        },
        {
          type: "subheading",
          title: "b) Information we collect automatically",
        },
        {
          type: "paragraph",
          text:
            "When you visit our websites or use our services we may automatically collect usage and behavioural data, such as:",
        },
        {
          type: "list",
          items: [
            "IP address, device identifiers, browser type and language.",
            "Access times, referring URL, pages viewed, and links clicked.",
            "Location data and other similar technical information.",
            "Cookies and tracking technologies.",
          ],
        },
        {
          type: "subheading",
          title: "c) Information we obtain from third-party sources",
        },
        {
          type: "paragraph",
          text:
            "We may supplement the personal data we collect from you with information from third parties such as business partners, public databases, social media platforms, or marketing providers, in order to enhance our understanding of your preferences and deliver tailored services and communications.",
        },
      ],
    },
    {
      title: "5. How We Use Personal Data",
      blocks: [
        {
          type: "paragraph",
          text: "We may use your personal data for the following purposes:",
        },
        {
          type: "list",
          items: [
            "To deliver products, services, and support you request.",
            "To process transactions and manage accounts.",
            "To send you communications relating to your transactions, services you use, updates, newsletters, promotional offers where you have consented, and other information about our business.",
            "To enable you to participate in features of our website and services, such as live chat, account management, and downloads.",
            "To personalise, analyse, and improve our website, services, marketing campaigns, content, and user experience.",
            "To profile interests where permitted and target advertising, subject to applicable consent and law.",
            "To enforce our terms of service, prevent fraud or illegal activities, and ensure security and integrity of our business and systems.",
            "To fulfil legal or regulatory obligations or exercise legal rights.",
          ],
        },
      ],
    },
    {
      title: "6. Legal Basis for Processing",
      blocks: [
        {
          type: "paragraph",
          text:
            "Under the PDPA and as applicable in Malaysia, the legal basis for processing your personal data will depend on the context and may include:",
        },
        {
          type: "list",
          items: [
            "Your consent, where required.",
            "Performance of a contract with you or taking steps at your request prior to entering a contract.",
            "Compliance with legal obligations.",
            "Legitimate interests of TechPay AI or our partners, provided your rights and freedoms are not overridden by those interests.",
          ],
        },
      ],
    },
    {
      title: "7. Retention of Your Data",
      blocks: [
        {
          type: "paragraph",
          text:
            "We will retain your personal data for as long as necessary to fulfil the purposes described above, unless a longer retention period is required or permitted by law. Once the data is no longer needed, we will securely destroy or anonymise it.",
        },
      ],
    },
    {
      title: "8. International Transfers",
      blocks: [
        {
          type: "paragraph",
          text:
            "If we transfer your personal data outside Malaysia, for example to service providers or affiliates, we will ensure appropriate safeguards are in place, such as contractual protections, to protect your data consistent with the level of protection under Malaysian law.",
        },
      ],
    },
    {
      title: "9. How We May Share Your Personal Data",
      blocks: [
        {
          type: "paragraph",
          text: "We may share your personal data with:",
        },
        {
          type: "list",
          items: [
            "Our subsidiaries, affiliates, and business partners for the purposes described above.",
            "Service providers who perform functions on our behalf, such as payment processors, analytics providers, marketing providers, and IT services, and who are contractually obligated to protect your data.",
            "Sales and marketing chain participants, such as resellers, distributors, and agents, if relevant to the product or service you use.",
            "Legal or regulatory authorities if required by law or in connection with legal claims, fraud prevention, or acquisition or sale transactions.",
          ],
        },
        {
          type: "paragraph",
          text:
            "We will not sell or rent your personal data for third-party marketing purposes without your consent.",
        },
      ],
    },
    {
      title: "10. Your Rights",
      blocks: [
        {
          type: "paragraph",
          text:
            "Under the PDPA you may have the following rights, subject to applicable conditions:",
        },
        {
          type: "list",
          items: [
            "Access: Request details of the personal data we hold about you and a copy thereof.",
            "Rectification: Request correction of inaccurate or incomplete personal data.",
            "Erasure: Request deletion of your personal data, where applicable.",
            "Restriction: Request limitation of processing of your personal data.",
            "Objection: Object to our processing of your personal data, including for marketing profiling, where legitimate interests are the basis.",
            "Data portability: Where technically feasible and applicable, request transfer of your personal data to another controller.",
            "Withdraw consent: Where processing is based on your consent, you may withdraw it without affecting processing prior to withdrawal.",
          ],
        },
        {
          type: "paragraph",
          text:
            "To exercise these rights, please contact us using the details in Section 17. Please note we may refuse or charge a reasonable fee in line with applicable law if requests are manifestly unfounded or excessive.",
        },
      ],
    },
    {
      title: "11. Selection of Communication Preferences and Opt-Out",
      blocks: [
        {
          type: "paragraph",
          text:
            "You can choose not to receive marketing communications from us by following the unsubscribe link in any marketing email, or by contacting us. Even if you opt out of marketing, we may still send you service-related messages, such as messages about your account or transactions. You may also opt out of profiling for marketing purposes.",
        },
      ],
    },
    {
      title: "12. How We Secure Your Personal Data",
      blocks: [
        {
          type: "paragraph",
          text:
            "We take appropriate technical and organisational measures to protect your personal data from unauthorised or accidental access, loss, destruction, alteration, or disclosure. These measures include encryption of sensitive data, limiting access to authorised personnel, physical access controls, contractual safeguards with our service providers, regular security assessments, and internal processes. While we strive to ensure high security, no system is completely secure and we cannot guarantee absolute security.",
        },
      ],
    },
    {
      title: "13. Children's Personal Data",
      blocks: [
        {
          type: "paragraph",
          text:
            "We do not knowingly collect personal data from children, as defined under applicable laws, through our website or services without parental or guardian consent. If we become aware that we have inadvertently collected personal data from a child without proper consent, we will take steps to delete it.",
        },
      ],
    },
    {
      title: "14. Cookies and Similar Technologies",
      blocks: [
        {
          type: "paragraph",
          text:
            "We use cookies and similar tracking technologies on our website to gather usage information, personalise content, remember your preferences, and display targeted advertising where permitted. You may disable or block cookies via your browser settings; however, some features of our website may not function correctly if cookies are disabled.",
        },
      ],
    },
    {
      title: "15. Links to Third-Party Websites and Services",
      blocks: [
        {
          type: "paragraph",
          text:
            "Our services may contain links to third-party websites, applications, or services. We are not responsible for the privacy practices or content of those third parties. We encourage you to read the privacy policy of every site you visit.",
        },
      ],
    },
    {
      title: "16. Changes to This Privacy Policy",
      blocks: [
        {
          type: "paragraph",
          text:
            "We may periodically update this Privacy Policy. If we make material changes, we will update the Effective Date at the top of this policy and/or provide additional notice as required by law. Please review this policy periodically for updates.",
        },
      ],
    },
    {
      title: "17. Contacting Us",
      blocks: [
        {
          type: "paragraph",
          text:
            "If you have questions or wish to exercise your rights under this policy, you may contact us at:",
        },
        {
          type: "address",
          lines: [
            "TECHPAYAI SDN BHD",
            "LOT 3A01A, LEVEL 3A, GLO DAMANSARA SHOPPING MALL 699, JLN DAMANSARA, TAMAN TUN DR ISMAIL, 60000 KUALA LUMPUR W.P. KUALA LUMPUR MALAYSIA",
            "Email: Contact@techpay.ai",
          ],
        },
        {
          type: "paragraph",
          text: "We will endeavour to respond to all queries within a reasonable timeframe.",
        },
      ],
    },
    {
      title: "18. Jurisdiction and Governing Law",
      blocks: [
        {
          type: "paragraph",
          text:
            "This Policy and our handling of personal data shall be governed by the laws of Malaysia, including the PDPA. Any disputes arising out of this policy shall be subject to the exclusive jurisdiction of the courts of Malaysia.",
        },
      ],
    },
  ],
};

export const indiaPrivacyPolicy: PrivacyPolicy = {
  market: "IN",
  jurisdiction: "India",
  title: "Privacy Policy - TechPay.ai India",
  effectiveDate: "1st November 2025",
  entity: "TechPay.ai and its India affiliates",
  summary:
    "This Privacy Policy explains how TechPay.ai collects, uses, discloses, stores, and protects personal data in connection with our services, website, and online or offline interactions in India.",
  sections: [
    {
      title: "1. Introduction",
      blocks: [
        {
          type: "paragraph",
          text:
            "This Privacy Policy applies to TechPay.ai and its affiliates (\"TechPay AI\", \"we\", \"our\", \"us\") and governs the collection, use, and disclosure of personal data in connection with our services, website (www.techpay.ai), and any other online or offline interaction with you (\"you\", \"your\"). This policy is designed to align with the Digital Personal Data Protection Act, 2023, the Digital Personal Data Protection Rules, 2025, and other applicable laws in India.",
        },
      ],
    },
    {
      title: "2. Scope",
      blocks: [
        {
          type: "paragraph",
          text: "This Privacy Policy covers personal data collected from:",
        },
        {
          type: "list",
          items: [
            "Visitors to our website and applications.",
            "Customers, users, and prospective customers, including individuals representing corporate clients.",
            "Persons who request information, engage in transactions, subscribe to newsletters, or otherwise engage with us.",
          ],
        },
        {
          type: "paragraph",
          text:
            "The policy does not apply to personal data collected by third-party websites to which our services may link or by business partners that operate under separate privacy policies.",
        },
      ],
    },
    {
      title: "3. What is Personal Data",
      blocks: [
        {
          type: "paragraph",
          text:
            "For the purposes of this policy, personal data means data about an individual who is identifiable by or in relation to such data. This may include, but is not limited to, name, email address, telephone number, address, device identifiers, IP address, location data, payment information where applicable, account credentials, and usage data.",
        },
      ],
    },
    {
      title: "4. Information We Collect",
      blocks: [
        {
          type: "subheading",
          title: "a) Information you provide",
        },
        {
          type: "paragraph",
          text: "We may ask you to provide personal data when you:",
        },
        {
          type: "list",
          items: [
            "Use our website or application.",
            "Request quotes, services, or support.",
            "Register an account.",
            "Subscribe to newsletters or marketing communications.",
            "Participate in surveys, webinars, or promotional offers.",
            "Contact us through forms, email, or phone.",
          ],
        },
        {
          type: "paragraph",
          text:
            "Such personal data may include your name, email address, billing or shipping address, telephone number, user ID, password, job title, company information, demographics, payment information where applicable, identity information where required by law or for fraud prevention, and any other information you choose to provide.",
        },
        {
          type: "subheading",
          title: "b) Information we collect automatically",
        },
        {
          type: "paragraph",
          text:
            "When you visit our websites or use our services we may automatically collect usage and technical data, such as:",
        },
        {
          type: "list",
          items: [
            "IP address, device identifiers, browser type and language.",
            "Access times, referring URL, pages viewed, and links clicked.",
            "Approximate location data and other similar technical information.",
            "Cookies and tracking technologies.",
          ],
        },
        {
          type: "subheading",
          title: "c) Information we obtain from third-party sources",
        },
        {
          type: "paragraph",
          text:
            "We may supplement the personal data we collect from you with information from third parties such as business partners, public databases, social media platforms, distributors, resellers, or marketing providers, where permitted by law and where relevant to the services we provide.",
        },
      ],
    },
    {
      title: "5. How We Use Personal Data",
      blocks: [
        {
          type: "paragraph",
          text: "We may use your personal data for the following purposes:",
        },
        {
          type: "list",
          items: [
            "To deliver products, services, and support you request.",
            "To process transactions and manage accounts.",
            "To send service communications, updates, newsletters, promotional offers where permitted, and other information about our business.",
            "To enable website and service features such as live chat, account management, downloads, recommendations, and support workflows.",
            "To personalise, analyse, and improve our website, services, marketing campaigns, content, and user experience.",
            "To detect, prevent, and respond to fraud, misuse, security incidents, illegal activities, or violations of our terms.",
            "To comply with legal, regulatory, tax, accounting, audit, and reporting obligations.",
            "To establish, exercise, or defend legal claims.",
          ],
        },
      ],
    },
    {
      title: "6. Legal Basis and Consent",
      blocks: [
        {
          type: "paragraph",
          text:
            "Where required by Indian law, we process your personal data based on your consent or for certain legitimate uses permitted by law. Consent may be withdrawn at any time, but withdrawal will not affect processing completed before withdrawal and may affect our ability to provide some services.",
        },
        {
          type: "paragraph",
          text:
            "We may also process personal data where necessary to provide requested services, comply with legal obligations, respond to emergencies, prevent fraud, or perform other uses permitted under applicable law.",
        },
      ],
    },
    {
      title: "7. Retention of Your Data",
      blocks: [
        {
          type: "paragraph",
          text:
            "We will retain your personal data for as long as necessary to fulfil the purposes described above, provide services, resolve disputes, enforce agreements, comply with legal obligations, or as otherwise permitted by law. Once the data is no longer needed, we will securely delete, destroy, or anonymise it.",
        },
      ],
    },
    {
      title: "8. International Transfers",
      blocks: [
        {
          type: "paragraph",
          text:
            "If we transfer your personal data outside India, for example to service providers or affiliates, we will take reasonable steps to ensure that such transfers are handled in accordance with applicable Indian law and protected through appropriate contractual, technical, and organisational safeguards.",
        },
      ],
    },
    {
      title: "9. How We May Share Your Personal Data",
      blocks: [
        {
          type: "paragraph",
          text: "We may share your personal data with:",
        },
        {
          type: "list",
          items: [
            "Our subsidiaries, affiliates, and business partners for the purposes described above.",
            "Service providers who perform functions on our behalf, such as payment processors, analytics providers, marketing providers, customer support tools, cloud hosting providers, and IT services.",
            "Sales and marketing chain participants, such as retailers, resellers, distributors, agents, and OEM partners, if relevant to the product or service you use.",
            "Legal, regulatory, law enforcement, tax, audit, or government authorities if required by law or in connection with legal claims, fraud prevention, security, corporate restructuring, merger, acquisition, or sale transactions.",
          ],
        },
        {
          type: "paragraph",
          text:
            "We do not sell or rent your personal data for third-party marketing purposes without your consent.",
        },
      ],
    },
    {
      title: "10. Your Rights",
      blocks: [
        {
          type: "paragraph",
          text:
            "Subject to applicable law, you may have rights in relation to your personal data, including:",
        },
        {
          type: "list",
          items: [
            "Access: Request information about the personal data we process and the processing activities undertaken.",
            "Correction and updating: Request correction, completion, or updating of inaccurate or incomplete personal data.",
            "Erasure: Request deletion of personal data where applicable.",
            "Withdrawal of consent: Withdraw consent where processing is based on consent.",
            "Grievance redressal: Raise a complaint or grievance regarding our processing of your personal data.",
            "Nomination: Nominate another individual to exercise your rights in the event of death or incapacity, where applicable.",
          ],
        },
        {
          type: "paragraph",
          text:
            "To exercise these rights, please contact us using the details in Section 17. We may need to verify your identity before acting on your request and may decline requests where permitted by law.",
        },
      ],
    },
    {
      title: "11. Communication Preferences and Opt-Out",
      blocks: [
        {
          type: "paragraph",
          text:
            "You can choose not to receive marketing communications from us by following the unsubscribe link in any marketing email or by contacting us. Even if you opt out of marketing, we may still send you service-related messages, such as messages about your account, transactions, service updates, or security notices.",
        },
      ],
    },
    {
      title: "12. How We Secure Your Personal Data",
      blocks: [
        {
          type: "paragraph",
          text:
            "We take reasonable technical and organisational measures to protect your personal data from unauthorised or accidental access, loss, destruction, alteration, or disclosure. These measures may include encryption, access controls, monitoring, employee access restrictions, contractual safeguards with service providers, regular security assessments, and internal policies. While we strive to protect your data, no system is completely secure and we cannot guarantee absolute security.",
        },
      ],
    },
    {
      title: "13. Children's Personal Data",
      blocks: [
        {
          type: "paragraph",
          text:
            "We do not knowingly collect personal data from children through our website or services without appropriate parental or guardian consent where required by law. If we become aware that we have inadvertently collected personal data from a child without proper consent, we will take reasonable steps to delete it.",
        },
      ],
    },
    {
      title: "14. Cookies and Similar Technologies",
      blocks: [
        {
          type: "paragraph",
          text:
            "We use cookies and similar tracking technologies on our website to gather usage information, personalise content, remember your preferences, improve performance, and display targeted advertising where permitted. You may disable or block cookies via your browser settings; however, some features of our website may not function correctly if cookies are disabled.",
        },
      ],
    },
    {
      title: "15. Links to Third-Party Websites and Services",
      blocks: [
        {
          type: "paragraph",
          text:
            "Our services may contain links to third-party websites, applications, or services. We are not responsible for the privacy practices or content of those third parties. We encourage you to read the privacy policy of every site you visit.",
        },
      ],
    },
    {
      title: "16. Changes to This Privacy Policy",
      blocks: [
        {
          type: "paragraph",
          text:
            "We may periodically update this Privacy Policy. If we make material changes, we will update the Effective Date at the top of this policy and/or provide additional notice as required by law. Please review this policy periodically for updates.",
        },
      ],
    },
    {
      title: "17. Contacting Us",
      blocks: [
        {
          type: "paragraph",
          text:
            "If you have questions or wish to exercise your rights under this policy, you may contact us at:",
        },
        {
          type: "address",
          lines: [
            "TechPay.ai India",
            "Baron House, 29, 80 Feet Rd, S.T. Bed, 4th Block, Koramangala, Bengaluru, Karnataka 560034, India",
            "Email: Contact@techpay.ai",
          ],
        },
        {
          type: "paragraph",
          text: "We will endeavour to respond to all queries within a reasonable timeframe.",
        },
      ],
    },
    {
      title: "18. Jurisdiction and Governing Law",
      blocks: [
        {
          type: "paragraph",
          text:
            "This Policy and our handling of personal data shall be governed by the laws of India. Any disputes arising out of this policy shall be subject to the jurisdiction of the courts of India, subject to applicable law.",
        },
      ],
    },
  ],
};
