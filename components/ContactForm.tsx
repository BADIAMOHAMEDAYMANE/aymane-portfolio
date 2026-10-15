"use client";

import { useState, type FormEvent } from "react";
import { Send } from "lucide-react";
import type { Locale } from "@/data/i18n";
import { copy } from "@/data/i18n";

export function ContactForm({ locale }: { locale: Locale }) {
  const text = copy(locale).contact;
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState<"success" | "error" | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSending(true);
    setStatus(null);

    const form = event.currentTarget;
    const values = Object.fromEntries(new FormData(form).entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error(`Contact request failed with status ${response.status}`);
      }

      form.reset();
      setStatus("success");
    } catch (error) {
      console.error("Unable to send contact form", error);
      setStatus("error");
    } finally {
      setIsSending(false);
    }
  }

  const fieldClassName =
    "mt-2 w-full rounded-lg border border-border-strong bg-bg px-3 py-2.5 text-sm text-fg outline-none transition-colors placeholder:text-subtle focus:border-accent";

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-xl border border-border bg-surface p-6 sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="text-sm text-muted">
          {text.formName}
          <input
            name="name"
            type="text"
            autoComplete="name"
            maxLength={100}
            required
            className={fieldClassName}
          />
        </label>
        <label className="text-sm text-muted">
          {text.formEmail}
          <input
            name="email"
            type="email"
            autoComplete="email"
            maxLength={254}
            required
            className={fieldClassName}
          />
        </label>
        <label className="text-sm text-muted sm:col-span-2">
          {text.formSubject}
          <input
            name="subject"
            type="text"
            maxLength={150}
            required
            className={fieldClassName}
          />
        </label>
        <label className="text-sm text-muted sm:col-span-2">
          {text.formMessage}
          <textarea
            name="message"
            rows={5}
            maxLength={5000}
            required
            className={`${fieldClassName} resize-y`}
          />
        </label>
      </div>
      <div className="mt-5 flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={isSending}
          className="inline-flex h-10 items-center justify-center gap-2 rounded-lg bg-accent px-4 text-sm font-medium text-accent-fg transition-opacity hover:opacity-90 disabled:cursor-wait disabled:opacity-60"
        >
          <Send className="size-4" />
          {isSending ? text.formSending : text.formSubmit}
        </button>
        <p
          role="status"
          aria-live="polite"
          className={`text-sm ${status === "error" ? "text-red-400" : "text-muted"}`}
        >
          {status === "success" ? text.formSuccess : status === "error" ? text.formError : ""}
        </p>
      </div>
    </form>
  );
}
