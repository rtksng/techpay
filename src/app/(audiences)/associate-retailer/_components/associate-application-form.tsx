"use client";

import { FormEvent, ReactNode, useRef, useState } from "react";
import { CheckCircle2, PartyPopper } from "lucide-react";
import { Button } from "@/components/ui/button";

const salutationOptions = ["Select", "Mr.", "Ms.", "Mrs.", "Dr.", "Other"] as const;

const stateOptions = [
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

const yearsInBusinessOptions = [
  "Select",
  "Less than 1 year",
  "1-2 years",
  "3-5 years",
  "6-10 years",
  "More than 10 years",
] as const;

const yesNoOptions = ["Select", "Yes", "No"] as const;

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

const inputClass =
  "min-h-12 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-950 outline-none transition focus:border-techpay-primary focus:ring-4 focus:ring-techpay-primary/10";

const textareaClass =
  "min-h-[104px] w-full resize-y rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm leading-7 text-slate-950 outline-none transition focus:border-techpay-primary focus:ring-4 focus:ring-techpay-primary/10";

export default function AssociateApplicationForm() {
  const [submitted, setSubmitted] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  function scrollToForm() {
    requestAnimationFrame(() => {
      sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  function submitForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
    scrollToForm();
  }

  function editForm() {
    setSubmitted(false);
    scrollToForm();
  }

  return (
    <section
      id="apply"
      ref={sectionRef}
      className="bg-white px-5 pb-20 pt-28 md:px-[60px] md:pb-24 md:pt-36"
    >
      <div className="mx-auto max-w-[960px]">
        <p className="mb-4 text-xs font-bold uppercase text-techpay-primary">
          Associate Retailer
        </p>
        <h2 className="font-display text-3xl font-bold leading-tight text-slate-950 md:text-5xl">
          Application Form
        </h2>

        <form className="mt-10" onSubmit={submitForm} hidden={submitted}>
          <FormSection title="Personal Details">
            <FieldGrid columns={3}>
              <SelectField label="Salutation" name="salutation" options={salutationOptions} />
              <TextField label="First Name" name="firstName" />
              <TextField label="Last Name" name="lastName" />
            </FieldGrid>
            <FieldGrid columns={2}>
              <TextField label="Mobile No" name="mobileNo" type="tel" />
              <TextField label="Email Address" name="emailAddress" type="email" />
            </FieldGrid>
            <FieldGrid>
              <TextareaField label="Address" name="address" />
            </FieldGrid>
            <FieldGrid columns={3}>
              <TextField label="City" name="city" />
              <TextField label="Pin" maxLength={6} name="pin" />
              <SelectField label="State" name="state" options={stateOptions} />
            </FieldGrid>
          </FormSection>

          <FormSection title="Business Details">
            <FieldGrid>
              <TextareaField label="Tell us about you work?" name="workDetails" />
            </FieldGrid>
            <FieldGrid columns={2}>
              <TextField label="Business Name (if any)" name="businessName" />
              <SelectField
                label="Years in Business"
                name="yearsInBusiness"
                options={yearsInBusinessOptions}
              />
            </FieldGrid>
          </FormSection>

          <FormSection title="General Info">
            <FieldGrid columns={2}>
              <SelectField
                label="Is your business an authorised RMA centre?"
                name="authorisedRmaCentre"
                options={yesNoOptions}
              />
              <TextField label="OEM Brands you service ?" name="oemBrands" />
            </FieldGrid>
            <FieldGrid columns={2}>
              <SelectField
                label="Have you ever referred a laptop/PC sale?"
                name="referredLaptopPcSale"
                options={yesNoOptions}
              />
              <SelectField
                label="How did you hear about us?"
                name="heardAboutUs"
                options={heardOptions}
              />
            </FieldGrid>
          </FormSection>

          <div className="mt-8 flex justify-end">
            <Button
              className="!rounded-full !text-white [&_span]:!text-white"
              type="submit"
              variant="primary"
            >
              Submit Application
            </Button>
          </div>
        </form>

        <section
          className="mt-10 rounded-[24px] border border-slate-200 bg-white p-8 text-center shadow-[0_18px_48px_rgba(15,23,42,0.07)] md:p-12"
          hidden={!submitted}
        >
          <div className="mx-auto flex h-18 w-18 items-center justify-center rounded-full border-2 border-techpay-primary/30 bg-techpay-primary/10 text-4xl">
            <PartyPopper
              aria-hidden="true"
              className="h-9 w-9 text-techpay-primary"
            />
          </div>
          <h3 className="mt-6 font-display text-3xl font-bold text-slate-950">
            Application Received!
          </h3>
          <p className="mx-auto mt-4 max-w-[460px] text-sm leading-8 text-slate-600">
            Your associate retailer application has been received. Our partner
            team will review the details and get back within 48 hours.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button
              className="!rounded-full !text-white [&_span]:!text-white"
              onClick={editForm}
              type="button"
              variant="primary"
            >
              Edit Application
            </Button>
            <div className="flex items-center justify-center gap-2 text-sm font-semibold text-slate-600">
              <CheckCircle2 aria-hidden="true" className="h-5 w-5 text-techpay-primary" />
              <span>Form saved for review</span>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}

function FormSection({
  children,
  title,
}: {
  children: ReactNode;
  title: string;
}) {
  return (
    <section className="mb-6 rounded-[24px] border border-slate-200 bg-white p-6 shadow-[0_18px_48px_rgba(15,23,42,0.07)] md:p-8">
      <h3 className="mb-6 text-lg font-bold text-slate-950">{title}</h3>
      {children}
    </section>
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
      className={`mb-5 grid gap-4 last:mb-0 ${
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
  label,
  maxLength,
  name,
  type = "text",
}: {
  label: string;
  maxLength?: number;
  name: string;
  type?: string;
}) {
  return (
    <Field label={label}>
      <input className={inputClass} maxLength={maxLength} name={name} type={type} />
    </Field>
  );
}

function SelectField({
  label,
  name,
  options,
}: {
  label: string;
  name: string;
  options: readonly string[];
}) {
  return (
    <Field label={label}>
      <select className={inputClass} name={name}>
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </Field>
  );
}

function TextareaField({
  label,
  name,
}: {
  label: string;
  name: string;
}) {
  return (
    <Field label={label}>
      <textarea className={textareaClass} name={name} />
    </Field>
  );
}

function Field({
  children,
  label,
}: {
  children: ReactNode;
  label: string;
}) {
  return (
    <label className="grid gap-2 text-xs font-semibold text-slate-600">
      <span>{label}</span>
      {children}
    </label>
  );
}
