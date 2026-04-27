"use client";

import { useRouter } from "next/navigation";
import { FormEvent, ReactNode, useRef, useState } from "react";
import { Button } from "@/components/ui/button";

const states = [
  "Select State",
  "Andhra Pradesh",
  "Bihar",
  "Delhi",
  "Gujarat",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Punjab",
  "Rajasthan",
  "Tamil Nadu",
  "Telangana",
  "Uttar Pradesh",
  "West Bengal",
  "Other",
] as const;

const cityTiers = [
  "Select your city tier",
  "Tier 1 — Metro City",
  "Tier 2 — Major City",
  "Tier 3 — Growing Town",
  "Tier 4 — Small Town / Rural",
] as const;

const heardOptions = [
  "Select",
  "WhatsApp",
  "Google Search",
  "Friend / Colleague",
  "TechPay Website",
  "Social Media",
  "RMA Association",
  "Other",
] as const;

const workTypes = [
  "Select your primary role",
  "RMA / Warranty Service Centre",
  "Independent Computer Repair Technician",
  "IT Support & AMC Provider",
  "Computer Hardware Shop",
  "Freelance Technical Support",
  "Home Service Technician",
  "Other Technical Services",
] as const;

const yearsInBusiness = [
  "Select",
  "Less than 1 year",
  "1–2 years",
  "3–5 years",
  "6–10 years",
  "More than 10 years",
] as const;

const employeeOptions = [
  "Just me",
  "2–3 people",
  "4–10 people",
  "10+ people",
] as const;

const premisesOptions = [
  "Select",
  "Own shop / office",
  "Rented shop / office",
  "Home-based",
  "Mobile / Field work only",
] as const;

const rmaOptions = [
  "Select",
  "Yes — Authorised by OEM",
  "No — Independent service",
  "Both authorised & independent work",
] as const;

const revenueOptions = [
  "Select",
  "Below ₹20,000",
  "₹20,000–₹50,000",
  "₹50,000–₹1,00,000",
  "₹1,00,000–₹5,00,000",
  "Above ₹5,00,000",
] as const;

const customerCountOptions = [
  "Select",
  "Fewer than 10",
  "10–25",
  "26–50",
  "51–100",
  "100–200",
  "More than 200",
] as const;

const customerTypes = [
  "Select",
  "Individual consumers (B2C)",
  "Small businesses (SMBs)",
  "Students",
  "Mix of all above",
  "Corporate / Enterprise",
] as const;

const purchaseAdviceOptions = ["Select", "Yes, frequently", "Sometimes", "Rarely"] as const;

const referralOptions = [
  "Select",
  "Yes, regularly",
  "Occasionally",
  "Never, but would like to",
] as const;

const whatsappGroupOptions = [
  "Select",
  "Yes, active group with 50+ members",
  "Yes, but small group",
  "No, but I stay in touch individually",
  "No",
] as const;

const socialOptions = [
  "Select",
  "Yes — Instagram / Facebook page",
  "Yes — YouTube channel",
  "WhatsApp Business only",
  "No social media",
] as const;

const accountTypes = ["Savings Account", "Current Account"] as const;

const deviceOptions = [
  "1–5 devices",
  "6–10 devices",
  "11–20 devices",
  "20+ devices",
] as const;

const kitOptions = [
  "WhatsApp (Digital)",
  "Email (Digital)",
  "Physical printed kit by post",
] as const;

const progressSteps = [
  "About You",
  "Your Business",
  "Your Customers",
  "Bank & KYC",
  "Review",
] as const;

const inputClass =
  "min-h-12 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-950 outline-none transition focus:border-techpay-primary focus:ring-4 focus:ring-techpay-primary/10";

const textareaClass =
  "min-h-[96px] w-full resize-y rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm leading-7 text-slate-950 outline-none transition focus:border-techpay-primary focus:ring-4 focus:ring-techpay-primary/10";

export default function AssociateApplicationForm() {
  const router = useRouter();
  const [activeStep, setActiveStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  function scrollToForm() {
    requestAnimationFrame(() => {
      sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  function goToStep(step: number) {
    setSubmitted(false);
    setActiveStep(step);
    scrollToForm();
  }

  function submitForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
    scrollToForm();
  }

  function showCommunity() {
    router.push("/associate-retailer/community");
  }

  function showPartnerPage() {
    router.push("/associate-retailer");
  }

  return (
    <section
      id="apply"
      ref={sectionRef}
      className="bg-white px-5 pb-20 pt-28 md:px-[60px] md:pb-24 md:pt-36"
    >
      <div className="mx-auto max-w-[900px]">
        <h2 className="font-display text-3xl font-bold leading-tight text-slate-950 md:text-5xl">
          Apply to become an Associate Retailer
        </h2>
        <p className="mt-4 text-sm leading-7 text-slate-600">
          Complete the form below. Our partner team will review your application
          and get back within 48 hours.
        </p>

        <form className="mt-10" onSubmit={submitForm}>
          <div
            className="mb-10 grid overflow-hidden rounded-2xl border border-slate-200 md:grid-cols-5"
            hidden={submitted}
          >
            {progressSteps.map((label, index) => {
              const step = index + 1;
              const isActive = activeStep === step;
              const isDone = activeStep > step;

              return (
                <Button
                  key={label}
                  className={`min-h-16 rounded-none border-b border-slate-200 px-3 py-3 text-center text-xs last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0 ${
                    isActive
                      ? "!text-white [&_span]:!text-white"
                      : isDone
                        ? "!bg-techpay-primary/8 !text-techpay-primary [&_span]:!text-current"
                        : "!bg-white !text-slate-500 hover:!bg-slate-50 [&_span]:!text-current"
                  }`}
                  onClick={() => goToStep(step)}
                  size="compact"
                  type="button"
                  variant={isActive ? "primary" : "lightIcon"}
                >
                  <span className="block text-base font-bold">{step}</span>
                  {label}
                </Button>
              );
            })}
          </div>

          <FormPanel active={activeStep === 1 && !submitted}>
            <PanelHeading
              title="Personal Information"
              description="Tell us about yourself — this is how we'll contact you and set up your account."
            />
            <FieldGrid columns={2}>
              <TextField label="First Name *" placeholder="Rajesh" />
              <TextField label="Last Name *" placeholder="Kumar" />
            </FieldGrid>
            <FieldGrid columns={2}>
              <TextField
                hint="OTP verification will be sent to this number"
                label="Mobile Number *"
                placeholder="+91 98765 43210"
                type="tel"
              />
              <TextField
                label="Email Address *"
                placeholder="rajesh@email.com"
                type="email"
              />
            </FieldGrid>
            <FieldGrid columns={3}>
              <TextField label="City *" placeholder="Bengaluru" />
              <SelectField label="State *" options={states} />
              <TextField label="PIN Code *" maxLength={6} placeholder="560001" />
            </FieldGrid>
            <FieldGrid>
              <TextareaField
                label="Full Address (Shop / Home)"
                placeholder="Shop No. 4, Electronics Market, MG Road..."
              />
            </FieldGrid>
            <FieldGrid columns={2}>
              <SelectField label="City Tier" options={cityTiers} />
              <SelectField label="How did you hear about us?" options={heardOptions} />
            </FieldGrid>
            <FormNav alignEnd>
              <Button
                className="!text-white [&_span]:!text-white"
                onClick={() => goToStep(2)}
                type="button"
                variant="primary"
              >
                Next: Your Business →
              </Button>
            </FormNav>
          </FormPanel>

          <FormPanel active={activeStep === 2 && !submitted}>
            <PanelHeading
              title="Your Business"
              description="Tell us about your current work — what you do, how long you've been doing it, and the nature of your customer relationships."
            />
            <FieldGrid columns={2}>
              <SelectField label="Type of Work *" options={workTypes} />
              <TextField label="Business Name (if any)" placeholder="Raj Computer Services" />
            </FieldGrid>
            <FieldGrid columns={3}>
              <SelectField label="Years in Business *" options={yearsInBusiness} />
              <SelectField label="No. of Employees" options={employeeOptions} />
              <SelectField label="Shop / Office Premises" options={premisesOptions} />
            </FieldGrid>
            <FieldGrid>
              <TextField
                label="OEM Brands you service *"
                placeholder="e.g. HP, Dell, Lenovo, Asus, Acer (select all that apply)"
              />
            </FieldGrid>
            <FieldGrid columns={2}>
              <SelectField label="Are you an authorised RMA centre?" options={rmaOptions} />
              <SelectField
                label="Monthly Service Revenue (approx.)"
                options={revenueOptions}
              />
            </FieldGrid>
            <FieldGrid>
              <TextareaField
                label="Brief about your business"
                placeholder="Tell us about what you do, your specialisations, and why you want to partner with TechPay..."
              />
            </FieldGrid>
            <FormNav>
              <Button
                className="!text-slate-800 [&_span]:!text-current"
                onClick={() => goToStep(1)}
                type="button"
                variant="lightIcon"
              >
                ← Back
              </Button>
              <Button
                className="!text-white [&_span]:!text-white"
                onClick={() => goToStep(3)}
                type="button"
                variant="primary"
              >
                Next: Your Customers →
              </Button>
            </FormNav>
          </FormPanel>

          <FormPanel active={activeStep === 3 && !submitted}>
            <PanelHeading
              title="Your Customer Base"
              description="Understanding your customers helps us tailor your TechPay experience — and estimate your earning potential."
            />
            <FieldGrid columns={2}>
              <SelectField label="Avg. customers per month *" options={customerCountOptions} />
              <SelectField label="Primary customer type *" options={customerTypes} />
            </FieldGrid>
            <FieldGrid columns={2}>
              <SelectField
                label="Do customers ask you for purchase advice?"
                options={purchaseAdviceOptions}
              />
              <SelectField
                label="Have you ever referred a laptop/PC sale?"
                options={referralOptions}
              />
            </FieldGrid>
            <FieldGrid>
              <TextField
                hint="We'll use this to map your territory and assign you as the preferred partner for those PIN codes"
                label="PIN Codes you serve (list up to 5)"
                placeholder="560001, 560002, 560034..."
              />
            </FieldGrid>
            <FieldGrid columns={2}>
              <SelectField
                label="Do you have a WhatsApp customer group?"
                options={whatsappGroupOptions}
              />
              <SelectField label="Social media presence?" options={socialOptions} />
            </FieldGrid>
            <FieldGrid>
              <TextareaField
                label="Any additional customer context you'd like to share"
                placeholder="E.g. 'I serve mostly college students in Pune', 'I handle 3 schools and 2 offices in my area'..."
              />
            </FieldGrid>
            <FormNav>
              <Button
                className="!text-slate-800 [&_span]:!text-current"
                onClick={() => goToStep(2)}
                type="button"
                variant="lightIcon"
              >
                ← Back
              </Button>
              <Button
                className="!text-white [&_span]:!text-white"
                onClick={() => goToStep(4)}
                type="button"
                variant="primary"
              >
                Next: Bank & KYC →
              </Button>
            </FormNav>
          </FormPanel>

          <FormPanel active={activeStep === 4 && !submitted}>
            <PanelHeading
              title="Bank Account & KYC Details"
              description="Your earnings will be transferred weekly to the bank account below. All details are encrypted and stored securely."
            />
            <div className="mb-6 flex gap-3 rounded-2xl border border-techpay-primary/20 bg-techpay-primary/8 px-4 py-4 text-sm leading-7 text-slate-700">
              <span aria-hidden="true">🔒</span>
              <span>
                Your financial information is encrypted end-to-end. TechPay is
                compliant with RBI data protection guidelines. We only use this
                information to process your weekly commission payouts.
              </span>
            </div>
            <Divider />
            <FieldGrid columns={2}>
              <TextField label="Account Holder Name *" placeholder="As per bank records" />
              <TextField label="Bank Name *" placeholder="State Bank of India" />
            </FieldGrid>
            <FieldGrid columns={2}>
              <TextField label="Account Number *" placeholder="XXXX XXXX XXXX" />
              <TextField label="IFSC Code *" placeholder="SBIN0001234" />
            </FieldGrid>
            <FieldGrid columns={2}>
              <SelectField label="Account Type" options={accountTypes} />
              <TextField
                hint="For instant payments below ₹1 lakh"
                label="UPI ID (optional)"
                placeholder="rajesh@upi"
              />
            </FieldGrid>
            <Divider />
            <FieldGrid columns={2}>
              <TextField
                hint="For KYC verification as per RBI norms"
                label="Aadhaar Number *"
                maxLength={14}
                placeholder="XXXX XXXX XXXX"
              />
              <TextField label="PAN Number *" maxLength={10} placeholder="ABCDE1234F" />
            </FieldGrid>
            <FieldGrid columns={2}>
              <TextField
                hint="Required if your annual income exceeds ₹20 lakh"
                label="GST Number (if applicable)"
                placeholder="29ABCDE1234F1Z5"
              />
              <TextField label="Date of Birth *" type="date" />
            </FieldGrid>
            <Divider />
            <ConsentText>
              I confirm that all information provided is accurate and complete. I
              authorise TechPay.ai to verify my identity and bank account details
              through official channels. I understand that false information may
              result in rejection or termination of my partnership.
            </ConsentText>
            <FormNav>
              <Button
                className="!text-slate-800 [&_span]:!text-current"
                onClick={() => goToStep(3)}
                type="button"
                variant="lightIcon"
              >
                ← Back
              </Button>
              <Button
                className="!text-white [&_span]:!text-white"
                onClick={() => goToStep(5)}
                type="button"
                variant="primary"
              >
                Review Application →
              </Button>
            </FormNav>
          </FormPanel>

          <FormPanel active={activeStep === 5 && !submitted}>
            <PanelHeading
              title="Review & Submit"
              description="Please confirm your interest and agree to the partner terms before submitting."
            />
            <FieldGrid>
              <TextareaField
                label="Your motivation — why do you want to be a TechPay Associate? *"
                minHeightClassName="min-h-[120px]"
                placeholder="Tell us in your own words why you're excited about this opportunity and how you plan to use your TechPay QR code..."
              />
            </FieldGrid>
            <FieldGrid columns={2}>
              <SelectField
                label="How many devices do you think you can sell per month?"
                options={deviceOptions}
              />
              <SelectField
                label="Preferred way to receive your QR kit"
                options={kitOptions}
              />
            </FieldGrid>
            <Divider />
            <div className="grid gap-3">
              <ConsentText>
                I agree to the TechPay Associate Retailer Partner Terms &
                Conditions. I understand I will receive a commission on verified
                sales only, and that TechPay reserves the right to modify
                commission rates with 30 days notice.
              </ConsentText>
              <ConsentText>
                I consent to receive communications from TechPay.ai including
                training materials, product updates, and community notifications
                via WhatsApp, SMS, and email.
              </ConsentText>
            </div>
            <FormNav>
              <Button
                className="!text-slate-800 [&_span]:!text-current"
                onClick={() => goToStep(4)}
                type="button"
                variant="lightIcon"
              >
                ← Back
              </Button>
              <Button className="!text-white [&_span]:!text-white" type="submit" variant="primary">
                Submit Application ✓
              </Button>
            </FormNav>
          </FormPanel>

          <section
            className="rounded-[24px] border border-slate-200 bg-white p-8 text-center shadow-[0_18px_48px_rgba(15,23,42,0.07)] md:p-12"
            hidden={!submitted}
          >
            <div className="mx-auto flex h-18 w-18 items-center justify-center rounded-full border-2 border-techpay-primary/30 bg-techpay-primary/10 text-4xl">
              🎉
            </div>
            <h3 className="mt-6 font-display text-3xl font-bold text-slate-950">
              Application Received!
            </h3>
            <p className="mx-auto mt-4 max-w-[460px] text-sm leading-8 text-slate-600">
              Welcome to the TechPay family, partner. Your application is under
              review. Our partner team will reach out within 48 hours to complete
              your onboarding.
            </p>
            <div className="mx-auto mt-8 max-w-[460px] rounded-[22px] bg-slate-50 p-6 text-left">
              <p className="text-xs font-bold uppercase text-slate-600">
                What happens next
              </p>
              <div className="mt-4 grid gap-3">
                {[
                  "Our partner team calls you within 48 hours to confirm your details",
                  "KYC verification completed (Aadhaar + PAN + bank account)",
                  "Your personalized TechPay QR code is generated and sent via WhatsApp",
                  "Onboarding call + training session scheduled (45 minutes)",
                  "You're live — start referring and earning!",
                ].map((item, index) => (
                  <div key={item} className="flex gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-techpay-primary text-xs font-bold text-white">
                      {index + 1}
                    </span>
                    <span className="text-sm leading-6 text-slate-600">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Button
                className="!text-white [&_span]:!text-white"
                onClick={showCommunity}
                type="button"
                variant="primary"
              >
                Join the Community →
              </Button>
              <Button
                className="!text-slate-800 [&_span]:!text-current"
                onClick={showPartnerPage}
                type="button"
                variant="lightIcon"
              >
                Back to Partner Page
              </Button>
            </div>
          </section>
        </form>
      </div>
    </section>
  );
}

function FormPanel({
  active,
  children,
}: {
  active: boolean;
  children: ReactNode;
}) {
  return (
    <section
      className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-[0_18px_48px_rgba(15,23,42,0.07)] md:p-9"
      hidden={!active}
    >
      {children}
    </section>
  );
}

function PanelHeading({
  description,
  title,
}: {
  description: string;
  title: string;
}) {
  return (
    <div className="mb-8">
      <h3 className="text-xl font-bold text-slate-950">{title}</h3>
      <p className="mt-2 text-sm leading-7 text-slate-600">{description}</p>
    </div>
  );
}

function FieldGrid({
  children,
  columns = 1,
}: {
  children: ReactNode;
  columns?: 1 | 2 | 3;
}) {
  return (
    <div
      className={`mb-5 grid gap-4 ${
        columns === 3
          ? "md:grid-cols-3"
          : columns === 2
            ? "md:grid-cols-2"
            : ""
      }`}
    >
      {children}
    </div>
  );
}

function TextField({
  hint,
  label,
  maxLength,
  placeholder,
  type = "text",
}: {
  hint?: string;
  label: string;
  maxLength?: number;
  placeholder?: string;
  type?: string;
}) {
  return (
    <Field label={label} hint={hint}>
      <input
        className={inputClass}
        maxLength={maxLength}
        placeholder={placeholder}
        type={type}
      />
    </Field>
  );
}

function SelectField({
  label,
  options,
}: {
  label: string;
  options: readonly string[];
}) {
  return (
    <Field label={label}>
      <select className={inputClass}>
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </Field>
  );
}

function TextareaField({
  label,
  minHeightClassName,
  placeholder,
}: {
  label: string;
  minHeightClassName?: string;
  placeholder: string;
}) {
  return (
    <Field label={label}>
      <textarea
        className={`${textareaClass} ${minHeightClassName ?? ""}`}
        placeholder={placeholder}
      />
    </Field>
  );
}

function Field({
  children,
  hint,
  label,
}: {
  children: ReactNode;
  hint?: string;
  label: string;
}) {
  return (
    <label className="grid gap-2 text-xs font-semibold text-slate-600">
      <span>{label}</span>
      {children}
      {hint ? <span className="text-xs font-normal text-slate-400">{hint}</span> : null}
    </label>
  );
}

function Divider() {
  return <hr className="my-6 border-slate-200" />;
}

function ConsentText({ children }: { children: ReactNode }) {
  return (
    <label className="flex gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4">
      <input className="mt-1 h-4 w-4 shrink-0 accent-techpay-primary" type="checkbox" />
      <span className="text-sm leading-7 text-slate-600">{children}</span>
    </label>
  );
}

function FormNav({
  alignEnd,
  children,
}: {
  alignEnd?: boolean;
  children: ReactNode;
}) {
  return (
    <div
      className={`mt-8 flex flex-col gap-3 sm:flex-row ${
        alignEnd ? "sm:justify-end" : "sm:justify-between"
      }`}
    >
      {children}
    </div>
  );
}
