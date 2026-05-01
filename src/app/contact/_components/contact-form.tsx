"use client";

import { Check, ChevronDown, Send, UserRound } from "lucide-react";
import { useId, useState, type ReactNode } from "react";
import { Button } from "@/components/ui/button";

const salutations = ["Select", "Mr.", "Ms.", "Mrs.", "Dr.", "Prof."] as const;

const inputClass =
  "h-12 w-full min-w-0 border border-white/12 bg-black/35 px-4 text-sm font-normal text-techpay-text outline-none transition placeholder:text-techpay-muted/70 focus:border-techpay-primary";

const textareaClass =
  "min-h-32 w-full min-w-0 resize-y border border-white/12 bg-black/35 px-4 py-3 text-sm font-normal text-techpay-text outline-none transition placeholder:text-techpay-muted/70 focus:border-techpay-primary";

export default function ContactForm() {
  return (
    <form
      aria-label="Contact form"
      className="border border-white/10 bg-white/[0.06] p-5 shadow-[0_28px_80px_rgba(0,0,0,0.28)] backdrop-blur-2xl md:p-8"
    >
      <div className="mb-7 flex items-center gap-3 border-b border-white/10 pb-5">
        <span
          className="flex h-10 w-10 shrink-0 items-center justify-center border border-techpay-primary/35 bg-techpay-primary/12 text-techpay-primary"
          aria-hidden="true"
        >
          <UserRound className="h-5 w-5" strokeWidth={1.8} />
        </span>
        <h2 className="font-display text-2xl font-semibold text-techpay-heading">
          Contact Us form
        </h2>
      </div>

      <FormSection title="Personal Details">
        <FieldGrid columns={3}>
          <CustomDropdown
            label="Salutation"
            name="salutation"
            options={salutations}
            placeholder="Select"
          />
          <TextField autoComplete="given-name" label="First Name" name="firstName" />
          <TextField autoComplete="family-name" label="Last Name" name="lastName" />
        </FieldGrid>
        <FieldGrid columns={2}>
          <TextField
            autoComplete="tel"
            label="Mobile No"
            name="mobileNo"
            type="tel"
          />
          <TextField
            autoComplete="email"
            label="Email Address"
            name="emailAddress"
            type="email"
          />
        </FieldGrid>
        <FieldGrid>
          <TextareaField label="Address" name="address" />
        </FieldGrid>
        <FieldGrid columns={2}>
          <TextField label="City" name="city" />
          <TextField label="State" name="state" />
        </FieldGrid>
        <FieldGrid>
          <TextField label="Pin" maxLength={6} name="pin" />
        </FieldGrid>
      </FormSection>

      <FormSection title="Nature of Enquiry">
        <FieldGrid>
          <TextField label="Subject" name="subject" />
        </FieldGrid>
        <FieldGrid>
          <TextareaField label="Detail" name="detail" />
        </FieldGrid>
      </FormSection>

      <div className="flex flex-col gap-3   sm:flex-row sm:items-center sm:justify-between">
        <div aria-hidden="true" />
        <Button
          type="button"
          leftIcon={<Send className="h-4 w-4" strokeWidth={1.8} aria-hidden="true" />}
          size="compact"
          variant="primary"
        >
          Submit
        </Button>
      </div>
    </form>
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
    <section className="mb-7  pb-7 last:mb-0 last:border-b-0 last:pb-0">
      <h3 className="mb-5 text-sm font-semibold text-techpay-heading">{title}</h3>
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
      className={`mb-5 grid gap-5 last:mb-0 ${
        columns === 3
          ? "md:grid-cols-2 xl:grid-cols-3"
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
  autoComplete,
  label,
  maxLength,
  name,
  type = "text",
}: {
  autoComplete?: string;
  label: string;
  maxLength?: number;
  name: string;
  type?: string;
}) {
  return (
    <Field label={label}>
      <input
        autoComplete={autoComplete}
        className={inputClass}
        maxLength={maxLength}
        name={name}
        type={type}
      />
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
    <label className="grid min-w-0 gap-2 text-sm font-semibold text-techpay-heading">
      {label}
      {children}
    </label>
  );
}

function CustomDropdown({
  label,
  name,
  options,
  placeholder,
}: {
  label: string;
  name: string;
  options: readonly string[];
  placeholder: string;
}) {
  const id = useId();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const selectedLabel = value || placeholder;

  return (
    <div className="relative grid min-w-0 gap-2 text-sm font-semibold text-techpay-heading">
      <label id={`${id}-label`}>{label}</label>
      <input type="hidden" name={name} value={value} />
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-labelledby={`${id}-label ${id}-button`}
        id={`${id}-button`}
        onBlur={(event) => {
          if (!event.currentTarget.parentElement?.contains(event.relatedTarget)) {
            setOpen(false);
          }
        }}
        onClick={() => setOpen((current) => !current)}
        onKeyDown={(event) => {
          if (event.key === "Escape") {
            setOpen(false);
          }
        }}
        className="flex h-12 w-full items-center justify-between gap-3 border border-white/12 bg-black/35 px-4 text-left text-sm font-normal text-techpay-text outline-none transition hover:border-white/24 focus:border-techpay-primary"
      >
        <span className={value ? "text-techpay-text" : "text-techpay-muted/70"}>
          {selectedLabel}
        </span>
        <ChevronDown
          className={`h-4 w-4 shrink-0 text-techpay-primary transition ${
            open ? "rotate-180" : ""
          }`}
          strokeWidth={1.8}
          aria-hidden="true"
        />
      </button>

      {open ? (
        <div
          role="listbox"
          aria-labelledby={`${id}-label`}
          tabIndex={-1}
          className="absolute left-0 right-0 top-[calc(100%+0.5rem)] z-30 overflow-hidden border border-white/12 bg-[#080812] shadow-[0_22px_48px_rgba(0,0,0,0.42)]"
        >
          {options.map((option) => {
            const selected = option === value;

            return (
              <button
                key={option}
                type="button"
                role="option"
                aria-selected={selected}
                onClick={() => {
                  setValue(option);
                  setOpen(false);
                }}
                className="flex min-h-11 w-full items-center justify-between gap-3 border-b border-white/8 px-4 py-2.5 text-left text-sm font-normal text-techpay-text transition last:border-b-0 hover:bg-techpay-primary/14 focus:bg-techpay-primary/14 focus:outline-none"
              >
                <span>{option}</span>
                {selected ? (
                  <Check
                    className="h-4 w-4 shrink-0 text-techpay-orange"
                    strokeWidth={1.8}
                    aria-hidden="true"
                  />
                ) : null}
              </button>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}
