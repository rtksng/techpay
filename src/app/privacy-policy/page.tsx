import type { Metadata } from "next";
import LegalPolicyDocument, {
  type LegalPolicy,
} from "@/app/_components/legal/legal-policy-document";
import MarketPolicyTabs from "@/app/_components/legal/market-policy-tabs";

export const metadata: Metadata = {
  title: "Privacy Policy | TechPay.ai",
  description: "Privacy and Data Protection Policy for TechPay.ai in India and Malaysia.",
};

export const dynamic = "force-static";

const indiaPrivacyPolicy: LegalPolicy = {
  title: "Privacy and Data Protection Policy",
  blocks: [
    {
      type: "paragraph",
      text: "Tpay Platform Private Limited",
    },
    {
      type: "paragraph",
      text: "1. Introduction",
    },
    {
      type: "paragraph",
      text: "This Privacy and Data Protection Policy (\u201cPolicy\u201d) sets out the principles and controls adopted by Tpay Platform Private Limited (\u201cTpay\u201d, \u201cCompany\u201d, \u201cit\u201d) in relation to the collection, use, storage, disclosure, transfer, retention, and deletion of personal data in the course of its business operations. This Policy is intended to reflect Tpay\u2019s commitment to lawful, fair, and transparent processing of personal data and to support compliance with applicable data protection laws, including the Digital Personal Data Protection Act, 2023, as may be amended from time to time.",
    },
    {
      type: "paragraph",
      text: "For the purposes of this Policy, references to \u201cpersonal data\u201d include personal information and personally identifiable information relating to an identified or identifiable natural person, whether collected directly or indirectly, and processed in digital form or subsequently digitised in the course of business operations.",
    },
    {
      type: "paragraph",
      text: "Throughout this Policy, \u201cTpay\u201d refers to Tpay Platform Private Limited and, where the context requires, includes its employees, personnel, and authorised representatives who process personal data on its behalf. Tpay recognises that responsible handling of personal data is essential to maintaining the trust of its employees, clients, business partners, applicants, vendors, and other individuals whose personal data may be shared with or processed by Tpay in the course of its activities.",
    },
    {
      type: "paragraph",
      text: "2. Purpose",
    },
    {
      type: "paragraph",
      text: "This Policy is intended to:",
    },
    {
      type: "paragraph",
      text: "implement privacy-by-design principles in the design, development, operation, and review of Tpay\u2019s systems, products, services, and internal processes ;",
    },
    {
      type: "paragraph",
      text: "establish a common framework for the lawful collection, use, storage, transfer, retention, and deletion of personal data;",
    },
    {
      type: "paragraph",
      text: "define internal responsibilities and controls for protecting personal data and responding to data principal requests, complaints, and grievances; and",
    },
    {
      type: "paragraph",
      text: "support Tpay\u2019s compliance with applicable legal, regulatory, and contractual obligations relating to privacy and data protection.",
    },
    {
      type: "paragraph",
      text: "3. Scope",
    },
    {
      type: "paragraph",
      text: "This Policy applies to:",
    },
    {
      type: "paragraph",
      text: "Tpay\u2019s information and records that contain personal data;",
    },
    {
      type: "paragraph",
      text: "Tpay\u2019s information systems, platforms, applications, devices, and storage environments used to process personal data;",
    },
    {
      type: "paragraph",
      text: "all employees, directors, officers, interns, consultants, contractual personnel, temporary staff, and other individuals engaged by Tpay; and",
    },
    {
      type: "paragraph",
      text: "third-party staff, service providers, contractors, or processors handling personal data on behalf of or in connection with Tpay.",
    },
    {
      type: "paragraph",
      text: "This Policy applies to the collection, storage, processing, use, disclosure, transfer, retention, archival, and deletion of personal data relating to clients, prospective clients, business partners, employees, former employees, applicants for employment, third-party personnel, service providers, and other individuals whose personal data may be processed in connection with Tpay\u2019s business operations.",
    },
    {
      type: "paragraph",
      text: "Personal data may be collected through websites, mobile or web-based interfaces, account onboarding processes, service delivery processes, employment and recruitment processes, correspondence, contractual interactions, support channels, and other lawful business touchpoints.",
    },
    {
      type: "paragraph",
      text: "4. Privacy and Data Protection Requirements",
    },
    {
      type: "paragraph",
      text: "The collection, storage, processing, transfer, use, retention, and deletion of personal data by Tpay shall be governed by the following principles and controls.",
    },
    {
      type: "paragraph",
      text: "4.1 Fair and Lawful Processing of Personal Data",
    },
    {
      type: "paragraph",
      text: "Tpay shall process personal data in a lawful, fair, and transparent manner and in accordance with applicable law. In furtherance of this requirement, the following controls shall apply:",
    },
    {
      type: "paragraph",
      text: "Notice",
    },
    {
      type: "paragraph",
      text: "Tpay shall provide data principals with a timely, clear, and understandable privacy notice describing, to the extent applicable under law:",
    },
    {
      type: "paragraph",
      text: "the categories or description of personal data being collected and processed;",
    },
    {
      type: "paragraph",
      text: "the specific purposes for which such personal data is being processed;",
    },
    {
      type: "paragraph",
      text: "the manner in which data principals may exercise their rights in relation to such personal data;",
    },
    {
      type: "paragraph",
      text: "the manner in which consent may be withdrawn, where processing is based on consent;",
    },
    {
      type: "paragraph",
      text: "the process for raising grievances or complaints; and",
    },
    {
      type: "paragraph",
      text: "the contact details of the person or office authorised to respond to questions, requests, or complaints relating to personal data.",
    },
    {
      type: "paragraph",
      text: "Choice",
    },
    {
      type: "paragraph",
      text: "Except where otherwise permitted or required by applicable law, Tpay shall not disclose personal data to third parties for their independent use without providing the relevant data principal an appropriate opportunity to make an informed choice regarding such disclosure.",
    },
    {
      type: "paragraph",
      text: "Consent",
    },
    {
      type: "paragraph",
      text: "Where consent is required under applicable law, Tpay shall process personal data only on the basis of valid consent obtained from the data principal or a person lawfully authorised to provide such consent. Such consent shall, to the extent required by law, be free, specific, informed, unconditional, and unambiguous, and shall be evidenced through a clear affirmative action.",
    },
    {
      type: "paragraph",
      text: "Where applicable, Tpay shall also provide data principals with a simple and accessible mechanism to withdraw consent. Withdrawal of consent shall be given effect in accordance with applicable law, subject to lawful grounds for continued retention or processing.",
    },
    {
      type: "paragraph",
      text: "4.2 Limitations on Collection, Use, and Disclosure of Personal Data",
    },
    {
      type: "paragraph",
      text: "The following controls shall govern purpose limitation, data minimisation, and onward disclosure or transfer of personal data.",
    },
    {
      type: "paragraph",
      text: "Purpose Limitation",
    },
    {
      type: "paragraph",
      text: "Tpay shall collect personal data only for specific, lawful, and legitimate business purposes [page:1]. Personal data collected by Tpay shall be relevant, proportionate, and not excessive in relation to the purposes for which it is collected and processed.",
    },
    {
      type: "paragraph",
      text: "Tpay shall process personal data in a manner consistent with the purposes communicated to the data principal at the time of collection, unless otherwise permitted or required by applicable law or the data principal has subsequently consented to a new or additional use.",
    },
    {
      type: "paragraph",
      text: "Personal data collected from data principals in the course of business shall not be sold, rented, or leased by Tpay [page:1].",
    },
    {
      type: "paragraph",
      text: "Data Minimisation",
    },
    {
      type: "paragraph",
      text: "Tpay shall take all legally required and commercially reasonable steps to ensure that personal data processed by it is adequate, relevant, and limited to what is necessary for the purposes for which such data is processed.",
    },
    {
      type: "paragraph",
      text: "Use and Disclosure Controls",
    },
    {
      type: "paragraph",
      text: "Tpay shall use and disclose personal data only on a need-to-know basis and only where such use or disclosure is necessary for a lawful business purpose, required to perform contractual obligations, required by law, or otherwise permitted under applicable law.",
    },
    {
      type: "paragraph",
      text: "Onward Transfer",
    },
    {
      type: "paragraph",
      text: "Where personal data is disclosed to a third party, processed by a service provider, transferred across borders, or made accessible from another jurisdiction, Tpay shall implement appropriate safeguards, including contractual protections and such technical, organisational, or legal measures as may be reasonably necessary to ensure adequate protection of the personal data so transferred or disclosed.",
    },
    {
      type: "paragraph",
      text: "4.3 Management of Personal Data",
    },
    {
      type: "paragraph",
      text: "The following controls shall apply to the management, integrity, security, retention, and deletion of personal data.",
    },
    {
      type: "paragraph",
      text: "Accuracy and Integrity",
    },
    {
      type: "paragraph",
      text: "Tpay shall take all legally required and commercially reasonable steps to ensure that personal data is reliable for its intended use and, to the extent necessary for the relevant processing purpose, accurate, complete, and kept up to date.",
    },
    {
      type: "paragraph",
      text: "Where personal data is found to be inaccurate, incomplete, or outdated, Tpay shall take appropriate steps to correct, complete, update, or erase such personal data, as applicable and in accordance with law.",
    },
    {
      type: "paragraph",
      text: "Access, Correction, Completion, Updating, and Erasure",
    },
    {
      type: "paragraph",
      text: "Tpay shall maintain reasonable processes and communication channels to enable data principals, subject to applicable law, to:",
    },
    {
      type: "paragraph",
      text: "seek information regarding the personal data processed by Tpay;",
    },
    {
      type: "paragraph",
      text: "request correction, completion, or updating of inaccurate or incomplete personal data; and",
    },
    {
      type: "paragraph",
      text: "request erasure of personal data that is no longer necessary for the purpose for which it was processed, or where consent has been withdrawn, unless retention is required by law or otherwise permitted under applicable law.",
    },
    {
      type: "paragraph",
      text: "Security Safeguards",
    },
    {
      type: "paragraph",
      text: "Tpay shall implement legally required and commercially reasonable technical, organisational, physical, and administrative safeguards proportionate to the nature, volume, sensitivity, and risk associated with the personal data being processed, in order to protect such personal data against personal data breaches, loss, misuse, unauthorised access, unauthorised disclosure, alteration, destruction, or other unlawful processing.",
    },
    {
      type: "paragraph",
      text: "Where personal data is sensitive or otherwise requires heightened protection under applicable law, Tpay shall ensure that enhanced safeguards are applied as appropriate.",
    },
    {
      type: "paragraph",
      text: "Personal Data Breach Response",
    },
    {
      type: "paragraph",
      text: "Tpay shall maintain internal procedures for identifying, assessing, escalating, containing, investigating, documenting, and responding to actual or suspected personal data breaches. Where required by applicable law, Tpay shall notify affected individuals and competent authorities or regulators in the prescribed manner and within applicable timelines.",
    },
    {
      type: "paragraph",
      text: "Retention and Deletion",
    },
    {
      type: "paragraph",
      text: "Tpay shall retain personal data in a form that permits identification of data principals only for as long as necessary to fulfil the purpose for which the personal data was collected and processed, or for such longer period as may be required under applicable law, regulation, court order, contractual obligation, or legitimate recordkeeping requirement.",
    },
    {
      type: "paragraph",
      text: "Where the purpose for processing has been fulfilled and retention is no longer necessary, or where consent has been withdrawn and no other lawful basis for retention applies, Tpay shall delete or erase the relevant personal data in accordance with applicable law and its internal retention and deletion procedures.",
    },
    {
      type: "paragraph",
      text: "Personal data may be retained for longer periods solely for lawful archival, research, statistical, or historical purposes where permitted by applicable law and subject to the implementation of appropriate safeguards.",
    },
    {
      type: "paragraph",
      text: "4.4 Accountability, Compliance, Exceptions, and Violations",
    },
    {
      type: "paragraph",
      text: "The following controls shall govern accountability for and enforcement of this Policy.",
    },
    {
      type: "paragraph",
      text: "Accountability",
    },
    {
      type: "paragraph",
      text: "The Director shall be responsible for overall oversight of compliance with this Policy and shall ensure that appropriate internal measures are implemented to demonstrate compliance with applicable privacy and data protection requirements. The Director may designate one or more individuals, officers, or functions within the organisation to support compliance, operational implementation, oversight, and response management under this Policy.",
    },
    {
      type: "paragraph",
      text: "Where applicable law requires appointment of a Data Protection Officer or a designated point of contact, Tpay shall make such appointment and publish the relevant contact details in the manner required by law.",
    },
    {
      type: "paragraph",
      text: "Data Principal Requests, Complaints, and Dispute Resolution",
    },
    {
      type: "paragraph",
      text: "The Director, or the person designated for this purpose, shall establish appropriate points of contact and communication channels to:",
    },
    {
      type: "paragraph",
      text: "receive and respond to access, correction, completion, updating, or erasure requests;",
    },
    {
      type: "paragraph",
      text: "receive and investigate privacy or data protection-related grievances and complaints; and",
    },
    {
      type: "paragraph",
      text: "provide a fair and reasonable process for the handling, tracking, and resolution of such requests and complaints.",
    },
    {
      type: "paragraph",
      text: "Tpay shall communicate the progress and status of requests or complaints to the relevant data principal within a reasonable period. Where required by applicable law, Tpay shall inform the data principal of available escalation mechanisms, including the right to approach the appropriate statutory authority or board after exhausting the grievance process made available by Tpay.",
    },
    {
      type: "paragraph",
      text: "Compliance",
    },
    {
      type: "paragraph",
      text: "The Director shall be responsible for implementing and enforcing this Policy, issuing supplementary privacy-related standards, procedures, or guidelines where necessary, and coordinating privacy compliance functions, including any role to be discharged as a Data Protection Officer where mandated by law.",
    },
    {
      type: "paragraph",
      text: "All persons covered by this Policy shall comply with its requirements and with any associated procedures, standards, or controls issued by Tpay. Failure to comply with this Policy may result in disciplinary action, including suspension, restriction or withdrawal of system access, reassignment of responsibilities, or more severe action up to and including termination of employment or engagement, subject to applicable law.",
    },
    {
      type: "paragraph",
      text: "Exceptions",
    },
    {
      type: "paragraph",
      text: "Any exception to this Policy must be documented and approved by the Director or such authorised person as may be designated by Tpay.",
    },
    {
      type: "paragraph",
      text: "Violations",
    },
    {
      type: "paragraph",
      text: "Any employee or individual subject to this Policy who knowingly violates or attempts to violate this Policy, circumvents applicable controls, or engages in unlawful processing of personal data shall be subject to disciplinary action, up to and including separation from Tpay, subject to applicable employment and other applicable laws. Where unlawful activity, fraud, security compromise, or deliberate bypass of controls is suspected, Tpay may report the matter to law enforcement agencies or other competent authorities, as appropriate and in accordance with law.",
    },
    {
      type: "paragraph",
      text: "5. Waivers",
    },
    {
      type: "paragraph",
      text: "At the time of issuance of this Policy, there are no authorised waivers or standing exceptions. Any request for waiver or exception shall be submitted to the Director for review and decision. Where a waiver or exception is approved, the Director may require corresponding updates to policy records, internal controls, or related documentation.",
    },
    {
      type: "paragraph",
      text: "6. Grievance Redressal and Contact Information",
    },
    {
      type: "paragraph",
      text: "Any grievance, complaint, query, request, or comment concerning this Policy or the processing of personal data by Tpay may be submitted in writing to the following contact email address:",
    },
    {
      type: "paragraph",
      text: "privacy@techpay.ai",
    },
    {
      type: "paragraph",
      text: "Tpay shall seek to acknowledge and address grievances and related queries as expeditiously as reasonably possible and in accordance with applicable law. If a data principal is not satisfied with the response provided through Tpay\u2019s grievance process, the data principal may avail such statutory remedies as may be available under applicable law, including escalation to the competent authority or board where so provided.",
    },
    {
      type: "paragraph",
      text: "7. Document Information",
    },
    {
      type: "paragraph",
      text: "Document Version History",
    },
    {
      type: "paragraph",
      text: "8. Internal Implementation Notes",
    },
    {
      type: "paragraph",
      text: "This Policy will be read together with Tpay\u2019s internal data retention schedule, information security policies, incident response procedures, employee confidentiality obligations, contractual data processing terms, and any privacy notice, consent wording, cookie notice, or product-specific data handling documentation issued by Tpay from time to time. Where any applicable law imposes additional or more specific obligations than those set out in this Policy, such legal requirements shall prevail to the extent of the inconsistency.",
    },
  ],
};

const malaysiaPrivacyPolicy: LegalPolicy = {
  title: "Privacy Policy \u2013 TechPay TECHPAYAI SDN BHD",
  meta: [
    { label: "Effective Date", value: "1st November 2025" },
  ],
  blocks: [
    {
      type: "paragraph",
      text: "1. Introduction",
    },
    {
      type: "paragraph",
      text: "This Privacy Policy applies to TECHPAYAI SDN BHD (Company No. 202501047647 (1649055-K)) and its affiliates (\u201cTechPay AI\u201d, \u201cwe\u201d, \u201cour\u201d, \u201cus\u201d) and governs the collection, use, and disclosure of personal data in connection with our services, website (www.techpay.ai), and any other online or offline interaction with you (\u201cyou\u201d, \u201cyour\u201d). This policy is designed to comply with the PDPA and other applicable laws in Malaysia.",
    },
    {
      type: "paragraph",
      text: "2. Scope",
    },
    {
      type: "paragraph",
      text: "This Privacy Policy covers personal data collected from:",
    },
    {
      type: "paragraph",
      text: "Visitors to our website and applications;",
    },
    {
      type: "paragraph",
      text: "Customers, users, and prospective customers (including individuals representing corporate clients);",
    },
    {
      type: "paragraph",
      text: "Persons who request information, engage in transactions, subscribe to newsletters, or otherwise engage with us.",
    },
    {
      type: "paragraph",
      text: "The policy does not apply to personal data collected by third-party websites to which our services may link or by our business partners under separate policies.",
    },
    {
      type: "paragraph",
      text: "3. What is \u201cPersonal Data\u201d",
    },
    {
      type: "paragraph",
      text: "For the purposes of this policy and under the PDPA, \u201cpersonal data\u201d means any information that relates directly or indirectly to an individual who is identified or identifiable. This may include, but is not limited to, name, email address, telephone number, national identity number, IP address, location data, and other demographic or usage data.",
    },
    {
      type: "paragraph",
      text: "4. Information We Collect",
    },
    {
      type: "paragraph",
      text: "a) Information you provide",
    },
    {
      type: "paragraph",
      text: "We may ask you to provide personal data when you:",
    },
    {
      type: "paragraph",
      text: "Use our website or application;",
    },
    {
      type: "paragraph",
      text: "Request quotes, services or support;",
    },
    {
      type: "paragraph",
      text: "Register an account;",
    },
    {
      type: "paragraph",
      text: "Subscribe to newsletters or marketing communications;",
    },
    {
      type: "paragraph",
      text: "Participate in surveys, webinars or promotional offers;",
    },
    {
      type: "paragraph",
      text: "Contact us through forms, email or phone.",
    },
    {
      type: "paragraph",
      text: "Such personal data may include your name, email address, billing/shipping address, telephone number, user ID, password, job title, company information, demographics (such as age, gender, interests), payment information (where applicable), national identity number (where required) and any other information you choose to provide.",
    },
    {
      type: "paragraph",
      text: "b) Information we collect automatically",
    },
    {
      type: "paragraph",
      text: "When you visit our websites or use our services we may automatically collect usage and behavioural data, such as:",
    },
    {
      type: "paragraph",
      text: "IP address, device identifiers, browser type and language;",
    },
    {
      type: "paragraph",
      text: "Access times, referring URL, pages viewed, links clicked;",
    },
    {
      type: "paragraph",
      text: "Location data and other similar technical information;",
    },
    {
      type: "paragraph",
      text: "Cookies and tracking technologies.",
    },
    {
      type: "paragraph",
      text: "c) Information we obtain from third-party sources",
    },
    {
      type: "paragraph",
      text: "We may supplement the personal data we collect from you with information from third parties such as business partners, public databases, social media platforms or marketing providers, in order to enhance our understanding of your preferences and deliver tailored services and communications.",
    },
    {
      type: "paragraph",
      text: "5. How We Use Personal Data",
    },
    {
      type: "paragraph",
      text: "We may use your personal data for the following purposes:",
    },
    {
      type: "paragraph",
      text: "To deliver products, services and support you request;",
    },
    {
      type: "paragraph",
      text: "To process transactions and manage accounts;",
    },
    {
      type: "paragraph",
      text: "To send you communications relating to your transactions, services you use, updates, newsletters, promotional offers (where you have consented) and other information about our business;",
    },
    {
      type: "paragraph",
      text: "To enable you to participate in features of our website and services (such as live chat, account management, downloads);",
    },
    {
      type: "paragraph",
      text: "To personalise, analyse and improve our website, services, marketing campaigns, content, and user experience;",
    },
    {
      type: "paragraph",
      text: "To profile interests (where permitted) and target advertising, subject to applicable consent and law;",
    },
    {
      type: "paragraph",
      text: "To enforce our terms of service, prevent fraud or illegal activities, ensure security and integrity of our business and systems;",
    },
    {
      type: "paragraph",
      text: "To fulfil legal or regulatory obligations or exercise legal rights.",
    },
    {
      type: "paragraph",
      text: "6. Legal Basis for Processing",
    },
    {
      type: "paragraph",
      text: "Under the PDPA and as applicable in Malaysia, the legal basis for processing your personal data will depend on the context and may include:",
    },
    {
      type: "paragraph",
      text: "Your consent (where required);",
    },
    {
      type: "paragraph",
      text: "Performance of a contract with you or taking steps at your request prior to entering a contract;",
    },
    {
      type: "paragraph",
      text: "Compliance with legal obligations;",
    },
    {
      type: "paragraph",
      text: "Legitimate interests of TechPay AI or our partners, provided your rights and freedoms are not overridden by those interests.",
    },
    {
      type: "paragraph",
      text: "7. Retention of Your Data",
    },
    {
      type: "paragraph",
      text: "We will retain your personal data for as long as necessary to fulfil the purposes described above, unless a longer retention period is required or permitted by law. Once the data is no longer needed, we will securely destroy or anonymise it.",
    },
    {
      type: "paragraph",
      text: "8. International Transfers",
    },
    {
      type: "paragraph",
      text: "If we transfer your personal data outside Malaysia (for example to service providers or affiliates), we will ensure appropriate safeguards are in place, such as contractual protections, to protect your data consistent with the level of protection under Malaysian law.",
    },
    {
      type: "paragraph",
      text: "9. How We May Share Your Personal Data",
    },
    {
      type: "paragraph",
      text: "We may share your personal data with:",
    },
    {
      type: "paragraph",
      text: "Our subsidiaries, affiliates and business partners for the purposes described above;",
    },
    {
      type: "paragraph",
      text: "Service providers who perform functions on our behalf (e.g., payment processors, analytics providers, marketing, IT services) and who are contractually obligated to protect your data;",
    },
    {
      type: "paragraph",
      text: "Sales and marketing chain participants (resellers, distributors, agents) if relevant to the product/service you use;",
    },
    {
      type: "paragraph",
      text: "Legal or regulatory authorities if required by law or in connection with legal claims, fraud prevention or acquisition/sale transactions.",
    },
    {
      type: "paragraph",
      text: "We will not sell or rent your personal data for third-party marketing purposes without your consent.",
    },
    {
      type: "paragraph",
      text: "10. Your Rights",
    },
    {
      type: "paragraph",
      text: "Under the PDPA you may have the following rights (subject to applicable conditions):",
    },
    {
      type: "paragraph",
      text: "Access: Request details of the personal data we hold about you and a copy thereof;",
    },
    {
      type: "paragraph",
      text: "Rectification: Request correction of inaccurate or incomplete personal data;",
    },
    {
      type: "paragraph",
      text: "Erasure: Request deletion of your personal data, where applicable;",
    },
    {
      type: "paragraph",
      text: "Restriction: Request limitation of processing of your personal data;",
    },
    {
      type: "paragraph",
      text: "Objection: Object to our processing of your personal data (including for marketing profiling) where legitimate interests are the basis;",
    },
    {
      type: "paragraph",
      text: "Data portability: Where technically feasible and applicable, request transfer of your personal data to another controller;",
    },
    {
      type: "paragraph",
      text: "Withdraw consent: Where processing is based on your consent, you may withdraw it (without affecting processing prior to withdrawal).",
    },
    {
      type: "paragraph",
      text: "To exercise these rights, please contact us (see Section 13). Please note we may refuse or charge a reasonable fee in line with applicable law if requests are manifestly unfounded or excessive.",
    },
    {
      type: "paragraph",
      text: "11. Selection of Communication Preferences & Opt-Out",
    },
    {
      type: "paragraph",
      text: "You can choose not to receive marketing communications from us by following the \u201cunsubscribe\u201d link in any marketing email, or by contacting us. Even if you opt-out of marketing, we may still send you service-related messages (e.g., about your account, transactions). You may also opt-out of profiling for marketing purposes.",
    },
    {
      type: "paragraph",
      text: "12. How We Secure Your Personal Data",
    },
    {
      type: "paragraph",
      text: "We take appropriate technical and organisational measures to protect your personal data from unauthorised or accidental access, loss, destruction, alteration or disclosure. These measures include encryption of sensitive data, limiting access to authorised personnel, physical access controls, contractual safeguards with our service providers, regular security assessments and internal processes. While we strive to ensure high security, no system is completely secure and we cannot guarantee absolute security.",
    },
    {
      type: "paragraph",
      text: "13. Children\u2019s Personal Data",
    },
    {
      type: "paragraph",
      text: "We do not knowingly collect personal data from children (as defined under applicable laws) through our website or services without parental or guardian consent. If we become aware that we have inadvertently collected personal data from a child without proper consent, we will take steps to delete it.",
    },
    {
      type: "paragraph",
      text: "14. Cookies and Similar Technologies",
    },
    {
      type: "paragraph",
      text: "We use cookies and similar tracking technologies on our website to gather usage information, personalise content, remember your preferences and display targeted advertising (where permitted). You may disable or block cookies via your browser settings; however, note that some features of our website may not function correctly if cookies are disabled.",
    },
    {
      type: "paragraph",
      text: "15. Links to Third-Party Websites and Services",
    },
    {
      type: "paragraph",
      text: "Our services may contain links to third-party websites, applications or services. We are not responsible for the privacy practices or content of those third parties. We encourage you to read the privacy policy of every site you visit.",
    },
    {
      type: "paragraph",
      text: "16. Changes to This Privacy Policy",
    },
    {
      type: "paragraph",
      text: "We may periodically update this Privacy Policy. If we make material changes, we will update the \u201cEffective Date\u201d at the top of this policy and/or provide additional notice as required by law. Please review this policy periodically for updates.",
    },
    {
      type: "paragraph",
      text: "17. Contacting Us",
    },
    {
      type: "paragraph",
      text: "If you have questions or wish to exercise your rights under this policy, you may contact us at:",
    },
    {
      type: "paragraph",
      text: "TECHPAYAI SDN BHD",
    },
    {
      type: "paragraph",
      text: "Address: LOT 3A01A, LEVEL 3A, GLO DAMANSARA SHOPPING MALL 699, JLN DAMANSARA, TAMAN TUN DR ISMAIL, 60000 KUALA LUMPUR W.P. KUALA LUMPUR MALAYSIA",
    },
    {
      type: "paragraph",
      text: "Email: Contact@techpay.ai",
    },
    {
      type: "paragraph",
      text: "We will endeavour to respond to all queries within a reasonable timeframe.",
    },
    {
      type: "paragraph",
      text: "18. Jurisdiction & Governing Law",
    },
    {
      type: "paragraph",
      text: "This Policy and our handling of personal data shall be governed by the laws of Malaysia, including the PDPA. Any disputes arising out of this policy shall be subject to the exclusive jurisdiction of the courts of Malaysia.",
    },
  ],
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-techpay-bg px-5 pb-20 pt-32 text-techpay-text md:px-10 md:pb-28 md:pt-40 lg:px-[60px]">
      <MarketPolicyTabs
        ariaLabel="Privacy policy country"
        panelIdPrefix="privacy-policy"
        india={<LegalPolicyDocument policy={indiaPrivacyPolicy} />}
        malaysia={<LegalPolicyDocument policy={malaysiaPrivacyPolicy} />}
      />
    </main>
  );
}
