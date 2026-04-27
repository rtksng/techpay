import type { Metadata } from "next";
import LegalPolicyDocument, {
  type LegalPolicy,
} from "@/app/_components/legal/legal-policy-document";
import MarketPolicyTabs from "@/app/_components/legal/market-policy-tabs";

export const metadata: Metadata = {
  title: "Cookie Policy | TechPay.ai",
  description: "Cookie Policy for TechPay.ai in India and Malaysia.",
};

export const dynamic = "force-static";

const indiaCookiePolicy: LegalPolicy = {
  title: "Cookie Policy",
  blocks: [
    {
      type: "paragraph",
      text: "Tpay Platform Private Limited\nEffective Date: 1 November 2025",
    },
    {
      type: "paragraph",
      text: "This Cookie Policy explains how Tpay Platform Private Limited (\u201cTpay\u201d, \u201cwe\u201d, \u201cus\u201d, or \u201cour\u201d) uses cookies and other similar technologies on this website and any related online services operated by us.",
    },
    {
      type: "paragraph",
      text: "A cookie is a small text file, pixel, clear GIF, log file, web beacon, or other similar tracking or storage technology that is placed on or accessed from a user\u2019s device. Cookies and similar technologies help a website recognise a user\u2019s device and may be used for website functionality, security, analytics, preference storage, personalisation, marketing, advertising, and authentication, depending on the category of cookie and the user\u2019s consent choices.",
    },
    {
      type: "paragraph",
      text: "Why We Use Cookies: Tpay uses cookies and similar technologies to:\n- operate and secure the website and related services;\n- improve user experience;\n- remember user preferences;\n- analyze website performance and usage;\n- measure the effectiveness of content, campaigns, and communications; and\n- where permitted, support personalisation, marketing, advertising, and remarketing.",
    },
    {
      type: "paragraph",
      text: "Cookie Categories: We may use the following categories of cookies:\n- Strictly necessary cookies. These are required for the website to function properly, such as page navigation, security, session management, and authentication.\n- Preference cookies. These remember choices made by the user, such as language or region.\n- Analytics cookies. These help us understand how users interact with the website so we can improve performance and content.\n- Marketing or advertising cookies. These may be used to deliver relevant advertising, measure campaign effectiveness, or support remarketing.\n- Third-party cookies. These are set by external service providers such as analytics, video, social media, or advertising partners.",
    },
    {
      type: "paragraph",
      text: "Third-Party Technologies: Some cookies, web beacons, conversion pixels, and other tracking or storage technologies used on our website may be provided by third parties such as YouTube, LinkedIn, analytics providers, or advertising partners. These third parties may collect information about your interaction with our website and related services, including the pages you visit, links you click, time spent on pages, and other browsing activity, for the purposes described in their own privacy and cookie policies. Tpay does not control the collection or use of information by third parties to the extent such collection occurs through their own systems, and users should review the relevant third-party privacy and cookie policies for more information.",
    },
    {
      type: "paragraph",
      text: "Web Beacons And Pixels: Tpay may use web beacons, tracking pixels, and similar technologies in our website, applications, marketing emails, and newsletters to understand whether communications have been opened, links have been clicked, or content has been viewed. These technologies may operate together with cookies for measurement, analytics, and campaign-related purposes.",
    },
    {
      type: "paragraph",
      text: "Legal Basis And Consent: Strictly necessary cookies may be used without separate consent where they are required for the operation of the website or the delivery of a service requested by the user. Non-essential cookies, including analytics, marketing, and certain personalisation cookies, will be used only where permitted under applicable law and, where required, after the user has provided valid consent through our cookie banner or preference centre. Consent, where required, must be given by clear affirmative action. Pre-ticked boxes, silence, or continued browsing alone will not constitute consent for non-essential cookies. Users should also be able to manage cookie choices in a granular manner, including by category, and to withdraw or modify consent with the same ease with which it was given.",
    },
    {
      type: "paragraph",
      text: "Cookie Banner And Preferences: When you first visit our website, you may be presented with a cookie banner or similar consent tool. Through that banner, you may accept all cookies, reject non-essential cookies, or manage your preferences by category, depending on the options made available on the website. If you later wish to change your choices, you may do so through the cookie preference centre or by adjusting your browser settings. Where a browser setting is used, it may affect some website functionality and may not remove cookies already stored on your device.",
    },
    {
      type: "paragraph",
      text: "Browser And Device Settings: Most web browsers accept cookies by default, but you can usually change your browser settings to refuse cookies or to alert you when cookies are being placed. For mobile devices, these controls are usually available within the browser or device settings. If you disable certain cookies, some features of the website may not function as intended.",
    },
    {
      type: "paragraph",
      text: "Retention Of Cookies: Cookies and similar technologies may remain on your device for varying periods depending on whether they are session cookies or persistent cookies. Session cookies expire when you close your browser, while persistent cookies remain for a defined period or until deleted. Where required, we may also store a record of your cookie preferences so that your selection is remembered on future visits.",
    },
    {
      type: "paragraph",
      text: "Changes To This Policy: We may update this Cookie Policy from time to time to reflect changes in law, technology, our business practices, or the cookies and similar technologies we use. Any updated version will be posted on this page with a revised effective date.",
    },
    {
      type: "paragraph",
      text: "Contacting Us: If you have any questions about this Cookie Policy or our use of cookies and similar technologies, please contact us at: contact@techpay.ai",
    },
    {
      type: "paragraph",
      text: "Important Note: This Cookie Policy should be read together with our Privacy Policy and any cookie banner, preference centre, or consent notice displayed on the website. Where this Policy and applicable law differ, applicable law will prevail.",
    },
  ],
};

const malaysiaCookiePolicy: LegalPolicy = {
  title: "Cookie Policy \u2013 TECHPAYAI SDN BHD",
  meta: [
    { label: "Effective Date", value: "1st November 2025" },
  ],
  blocks: [
    {
      type: "paragraph",
      text: "Below is information about how\u00a0TECHPAYAI SDN BHD (\u201cTpay\u201d) uses cookies and other similar technology on this website.",
    },
    {
      type: "paragraph",
      text: "A cookie is a piece of text, pixels, clear GIFs, log files, web beacons, or other tracing or tracking files or similar technology that are placed on the user\u2019s device. Cookies are useful because they allow a website and its applications to recognize a user\u2019s device. They are used for a variety of purposes such as website and application analytics \u2013 counting visitors and their behaviour, targeted advertising, recording user preferences, or for authentication.",
    },
    {
      type: "paragraph",
      text: "Tpay uses cookies to:",
    },
    {
      type: "paragraph",
      text: "Enrich the user experience",
    },
    {
      type: "paragraph",
      text: "Enhance and personalize aspects of our service",
    },
    {
      type: "paragraph",
      text: "Some cookies, web beacons and other tracking and storage technologies that Tpay may use would be from third-party companies (third-party cookies), such as YouTube, LinkedIn Analytics, etc. to provide Tpay with web analytics and intelligence about Tpay\u2019s website and its applications which may or could also be used to provide measurement services and target ads. These companies use programming code to collect information about your interaction with Tpay\u2019s website and its applications, such as the pages you visit, the links you click on and how long you are on Tpay\u2019s site and application. This code is only active while you are on Tpay\u2019s website and application. For more information on how these companies collect and use information on Tpay\u2019s behalf, please refer to the corresponding privacy policies of those third-party companies.",
    },
    {
      type: "paragraph",
      text: "Tpay may also use web beacons (including conversion pixels) or other technologies for similar purposes and Tpay may include these on its sites, applications, in marketing e-mails and newsletter, to determine whether messages have been opened and links clicked on. Web beacons do not place information on your device, but they may work in conjunction with cookies to monitor website and application activity. The information provided on cookies also applies to web beacons and similar technologies. Conversion pixels are small codes located on a particular web page triggered when someone visits a page resulting in an increase in the conversion count.",
    },
    {
      type: "paragraph",
      text: "You can choose to accept or decline cookies, either by selecting accept or decline in the banner on your first visit (in the latter case we will try to set a cookie to record your preference for future visits), or by changing the settings in your web browser. Most web browsers are set to accept cookies by default, but you can usually modify your browser settings to decline cookies if you prefer. These settings are usually found within the \u2018Privacy\u2019 section. For mobile devices, these may be within the browser app settings.",
    },
    {
      type: "paragraph",
      text: "If you choose not to accept our cookies, this may/will prevent you from taking full advantage of the Tpay\u2019s website or application. If you wish to delete cookies that have already been placed on your device, you can do so by following your web browser\u2019s documentation or guidance.",
    },
    {
      type: "paragraph",
      text: "Contacting Us",
    },
    {
      type: "paragraph",
      text: "If you would like to contact us regarding our cookie statement, please email us at:\u00a0contact@techpay.ai",
    },
  ],
};

export default function CookiePolicyPage() {
  return (
    <main className="min-h-screen bg-techpay-bg px-5 pb-20 pt-32 text-techpay-text md:px-10 md:pb-28 md:pt-40 lg:px-[60px]">
      <MarketPolicyTabs
        ariaLabel="Cookie policy country"
        panelIdPrefix="cookie-policy"
        india={<LegalPolicyDocument policy={indiaCookiePolicy} />}
        malaysia={<LegalPolicyDocument policy={malaysiaCookiePolicy} />}
      />
    </main>
  );
}
