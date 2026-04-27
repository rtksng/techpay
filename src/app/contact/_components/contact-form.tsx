"use client";

import { Check, ChevronDown, Send, UserRound } from "lucide-react";
import { useId, useState } from "react";
import { Button } from "@/components/ui/button";

const salutations = ["Mr.", "Ms.", "Mrs.", "Dr.", "Prof."];
const requestCategories = [
  "General enquiry",
  "Customer support",
  "Partner request",
  "Retailer enquiry",
  "Financing support",
  "Media enquiry",
];

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
          Contact Form
        </h2>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <CustomDropdown
          label="Salutation"
          name="salutation"
          options={salutations}
          placeholder="Select salutation"
        />

        <label className="grid gap-2 text-sm font-semibold text-techpay-heading">
          First name
          <input
            name="firstName"
            type="text"
            autoComplete="given-name"
            placeholder="Enter first name"
            className="h-12 border border-white/12 bg-black/35 px-4 text-sm font-normal text-techpay-text outline-none transition placeholder:text-techpay-muted/70 focus:border-techpay-primary"
          />
        </label>

        <label className="grid gap-2 text-sm font-semibold text-techpay-heading">
          Last name
          <input
            name="lastName"
            type="text"
            autoComplete="family-name"
            placeholder="Enter last name"
            className="h-12 border border-white/12 bg-black/35 px-4 text-sm font-normal text-techpay-text outline-none transition placeholder:text-techpay-muted/70 focus:border-techpay-primary"
          />
        </label>

        <label className="grid gap-2 text-sm font-semibold text-techpay-heading">
          Email
          <input
            name="email"
            type="email"
            autoComplete="email"
            placeholder="name@example.com"
            className="h-12 border border-white/12 bg-black/35 px-4 text-sm font-normal text-techpay-text outline-none transition placeholder:text-techpay-muted/70 focus:border-techpay-primary"
          />
        </label>

        <label className="grid gap-2 text-sm font-semibold text-techpay-heading">
          Mobile
          <input
            name="mobile"
            type="tel"
            autoComplete="tel"
            placeholder="Enter mobile number"
            className="h-12 border border-white/12 bg-black/35 px-4 text-sm font-normal text-techpay-text outline-none transition placeholder:text-techpay-muted/70 focus:border-techpay-primary"
          />
        </label>

        <CustomDropdown
          label="Request (subject/category)"
          name="requestCategory"
          options={requestCategories}
          placeholder="Select subject/category"
        />
      </div>

      <label className="mt-5 grid gap-2 text-sm font-semibold text-techpay-heading">
        Request (details)
        <textarea
          name="requestDetails"
          rows={7}
          placeholder="Tell us more about your request"
          className="min-h-40 resize-y border border-white/12 bg-black/35 px-4 py-3 text-sm font-normal text-techpay-text outline-none transition placeholder:text-techpay-muted/70 focus:border-techpay-primary"
        />
      </label>

      <div className="mt-7 flex flex-col gap-3 border-t border-white/10 pt-5 sm:flex-row sm:items-center sm:justify-between">
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

function CustomDropdown({
  label,
  name,
  options,
  placeholder,
}: {
  label: string;
  name: string;
  options: string[];
  placeholder: string;
}) {
  const id = useId();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const selectedLabel = value || placeholder;

  return (
    <div className="relative grid gap-2 text-sm font-semibold text-techpay-heading">
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
