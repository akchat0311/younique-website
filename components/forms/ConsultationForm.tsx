"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { CheckCircle2, Loader2 } from "lucide-react";
import { Field, Input, Select, TextArea } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { audienceOptions } from "@/lib/data/audiences";

type Status = "idle" | "submitting" | "success" | "error";

const FORM_ERROR_FALLBACK =
  "Something went wrong sending your request. Please try again, or email us at hello@younique.in and we'll pick it up straight away.";

export function ConsultationForm() {
  const pathname = usePathname();
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string[]>>({});
  const [formError, setFormError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrors({});
    setFormError(null);

    const formData = new FormData(e.currentTarget);
    // Both forms appear on more than one page, so `source` alone cannot
    // say where a lead came from — see MarketingLead.sourcePage.
    const payload = { ...Object.fromEntries(formData.entries()), sourcePage: pathname };

    try {
      const res = await fetch("/api/consultation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();

      if (!res.ok) {
        setErrors(data.fieldErrors ?? {});
        // Sprint 8.13 — a 503 from the route means the lead was NOT stored.
        // Previously setStatus("error") was called and nothing rendered it,
        // so the button simply stopped spinning and the customer was left
        // guessing whether it had worked.
        setFormError(data.error ?? (data.fieldErrors ? null : FORM_ERROR_FALLBACK));
        setStatus("error");
        return;
      }

      setStatus("success");
    } catch {
      setFormError(FORM_ERROR_FALLBACK);
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-success-200 bg-success-50 p-8 text-center">
        <CheckCircle2 className="mx-auto h-12 w-12 text-success-600" />
        <p className="mt-4 text-lg font-semibold text-success-800">
          Request received.
        </p>
        <p className="mt-2 text-sm text-success-700">
          Our team will reach out within one business day to confirm a time.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Full name" htmlFor="cf-name" error={errors.name?.[0]}>
          <Input id="cf-name" name="name" required placeholder="Your name" />
        </Field>
        <Field label="Phone" htmlFor="cf-phone" error={errors.phone?.[0]}>
          <Input id="cf-phone" name="phone" type="tel" required placeholder="+91 98765 43210" />
        </Field>
      </div>
      <Field label="Email" htmlFor="cf-email" error={errors.email?.[0]}>
        <Input id="cf-email" name="email" type="email" required placeholder="you@example.com" />
      </Field>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="I am a" htmlFor="cf-audience" error={errors.audienceType?.[0]}>
          <Select id="cf-audience" name="audienceType" required defaultValue="">
            <option value="" disabled>
              Select one
            </option>
            {audienceOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </Select>
        </Field>
        <Field label="Preferred date (optional)" htmlFor="cf-date" error={errors.preferredDate?.[0]}>
          <Input id="cf-date" name="preferredDate" type="date" />
        </Field>
      </div>
      <Field label="What would you like to discuss? (optional)" htmlFor="cf-message" error={errors.message?.[0]}>
        <TextArea id="cf-message" name="message" rows={4} placeholder="A short note helps us prepare for the call." />
      </Field>

      {formError ? (
        <p
          role="alert"
          className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800"
        >
          {formError}
        </p>
      ) : null}

      <Button type="submit" size="lg" className="w-full" disabled={status === "submitting"}>
        {status === "submitting" ? (
          <>
            <Loader2 size={16} className="animate-spin" /> Submitting...
          </>
        ) : (
          "Request a Consultation"
        )}
      </Button>
      <p className="text-center text-xs text-stone-500">
        No obligation. 100% confidential.
      </p>
    </form>
  );
}
