"use client";

import { useState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import { Field, Input, Select, TextArea } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { audienceOptions } from "@/lib/data/audiences";

type Status = "idle" | "submitting" | "success" | "error";

export function ConsultationForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string[]>>({});

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrors({});

    const formData = new FormData(e.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/consultation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();

      if (!res.ok) {
        setErrors(data.fieldErrors ?? {});
        setStatus("error");
        return;
      }

      setStatus("success");
    } catch {
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
