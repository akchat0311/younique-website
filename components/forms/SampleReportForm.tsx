"use client";

import { useState } from "react";
import { CheckCircle2, Download, Loader2 } from "lucide-react";
import { Field, Input, Select } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { audienceOptions } from "@/lib/data/audiences";

type Status = "idle" | "submitting" | "success" | "error";

export function SampleReportForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string[]>>({});
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrors({});

    const formData = new FormData(e.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/sample-report", {
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

      setDownloadUrl(data.downloadUrl);
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-success-200 bg-success-50 p-6 text-center">
        <CheckCircle2 className="mx-auto h-10 w-10 text-success-600" />
        <p className="mt-3 font-semibold text-success-800">
          Check your inbox — your sample report is on its way.
        </p>
        {downloadUrl ? (
          <Button href={downloadUrl} variant="secondary" className="mt-4">
            <Download size={16} /> Download now
          </Button>
        ) : null}
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Field label="Full name" htmlFor="sr-name" error={errors.name?.[0]}>
        <Input id="sr-name" name="name" required placeholder="Your name" />
      </Field>
      <Field label="Email" htmlFor="sr-email" error={errors.email?.[0]}>
        <Input id="sr-email" name="email" type="email" required placeholder="you@example.com" />
      </Field>
      <Field label="Phone" htmlFor="sr-phone" error={errors.phone?.[0]}>
        <Input id="sr-phone" name="phone" type="tel" required placeholder="+91 98765 43210" />
      </Field>
      <Field label="This report is for" htmlFor="sr-audience" error={errors.audienceType?.[0]}>
        <Select id="sr-audience" name="audienceType" required defaultValue="">
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

      <Button type="submit" className="w-full" disabled={status === "submitting"}>
        {status === "submitting" ? (
          <>
            <Loader2 size={16} className="animate-spin" /> Sending...
          </>
        ) : (
          "Send me the sample report"
        )}
      </Button>
      <p className="text-center text-xs text-stone-500">
        We&apos;ll never share your details. Unsubscribe anytime.
      </p>
    </form>
  );
}
