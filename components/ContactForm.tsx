"use client";

import { useState, type FormEvent } from "react";
import { Send } from "lucide-react";
import type { Locale } from "@/data/i18n";
import { copy } from "@/data/i18n";

type FieldName = "name" | "email" | "subject" | "message";
type FieldErrors = Partial<Record<FieldName, string>>;

const fields: FieldName[] = ["name", "email", "subject", "message"];
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateField(name: FieldName, value: string, requiredMessage: string, emailMessage: string) {
  if (!value.trim()) return requiredMessage;
  if (name === "email" && !emailPattern.test(value.trim())) return emailMessage;
  return undefined;
}

export function ContactForm({ locale }: { locale: Locale }) {
  const text = copy(locale).contact;
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState<"success" | "error" | null>(null);
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});

  function clearFieldError(name: FieldName) {
    setStatus(null);
    setFieldErrors((current) => {
      if (!current[name]) return current;
      const next = { ...current };
      delete next[name];
      return next;
    });
  }

  function validateOnBlur(name: FieldName, value: string) {
    const error = validateField(name, value, text.validationRequired, text.validationEmail);
    setFieldErrors((current) => {
      if (!error && !current[name]) return current;
      const next = { ...current };
      if (error) next[name] = error;
      else delete next[name];
      return next;
    });
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus(null);

    const form = event.currentTarget;
    const formData = new FormData(form);
    const values = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      subject: String(formData.get("subject") ?? ""),
      message: String(formData.get("message") ?? ""),
      website: String(formData.get("website") ?? ""),
    };
    const nextErrors: FieldErrors = {};

    for (const field of fields) {
      const error = validateField(field, values[field], text.validationRequired, text.validationEmail);
      if (error) nextErrors[field] = error;
    }

    setFieldErrors(nextErrors);
    const firstInvalidField = fields.find((field) => nextErrors[field]);
    if (firstInvalidField) {
      const input = form.elements.namedItem(firstInvalidField);
      if (input instanceof HTMLElement) input.focus();
      return;
    }

    setIsSending(true);

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
      setFieldErrors({});
      setStatus("success");
    } catch (error) {
      console.error("Unable to send contact form", error);
      setStatus("error");
    } finally {
      setIsSending(false);
    }
  }

  const fieldClassName = (hasError: boolean) =>
    `mt-2 min-h-11 w-full rounded-lg border ${hasError ? "border-danger" : "border-control-border"} bg-bg px-3 py-2.5 text-sm text-fg transition-colors placeholder:text-subtle focus:border-accent`;

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-xl border border-border bg-surface p-6 sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="text-sm text-fg" htmlFor="contact-name">
          {text.formName}
          <input
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            maxLength={100}
            required
            aria-required="true"
            aria-invalid={Boolean(fieldErrors.name)}
            aria-describedby={fieldErrors.name ? "contact-name-error" : undefined}
            placeholder={text.placeholderName}
            onBlur={(event) => validateOnBlur("name", event.currentTarget.value)}
            onChange={() => clearFieldError("name")}
            className={fieldClassName(Boolean(fieldErrors.name))}
          />
          {fieldErrors.name && <span id="contact-name-error" className="mt-1 block text-sm text-danger">{fieldErrors.name}</span>}
        </label>
        <label className="text-sm text-fg" htmlFor="contact-email">
          {text.formEmail}
          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            maxLength={254}
            required
            aria-required="true"
            aria-invalid={Boolean(fieldErrors.email)}
            aria-describedby={fieldErrors.email ? "contact-email-error" : undefined}
            placeholder={text.placeholderEmail}
            onBlur={(event) => validateOnBlur("email", event.currentTarget.value)}
            onChange={() => clearFieldError("email")}
            className={fieldClassName(Boolean(fieldErrors.email))}
          />
          {fieldErrors.email && <span id="contact-email-error" className="mt-1 block text-sm text-danger">{fieldErrors.email}</span>}
        </label>
        <label className="text-sm text-fg sm:col-span-2" htmlFor="contact-subject">
          {text.formSubject}
          <input
            id="contact-subject"
            name="subject"
            type="text"
            maxLength={150}
            required
            aria-required="true"
            aria-invalid={Boolean(fieldErrors.subject)}
            aria-describedby={fieldErrors.subject ? "contact-subject-error" : undefined}
            placeholder={text.placeholderSubject}
            onBlur={(event) => validateOnBlur("subject", event.currentTarget.value)}
            onChange={() => clearFieldError("subject")}
            className={fieldClassName(Boolean(fieldErrors.subject))}
          />
          {fieldErrors.subject && <span id="contact-subject-error" className="mt-1 block text-sm text-danger">{fieldErrors.subject}</span>}
        </label>
        <label className="text-sm text-fg sm:col-span-2" htmlFor="contact-message">
          {text.formMessage}
          <textarea
            id="contact-message"
            name="message"
            rows={5}
            maxLength={5000}
            required
            aria-required="true"
            aria-invalid={Boolean(fieldErrors.message)}
            aria-describedby={fieldErrors.message ? "contact-message-error" : undefined}
            placeholder={text.placeholderMessage}
            onBlur={(event) => validateOnBlur("message", event.currentTarget.value)}
            onChange={() => clearFieldError("message")}
            className={`${fieldClassName(Boolean(fieldErrors.message))} resize-y`}
          />
          {fieldErrors.message && <span id="contact-message-error" className="mt-1 block text-sm text-danger">{fieldErrors.message}</span>}
        </label>
      </div>

      <div className="absolute left-[-10000px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
        <label htmlFor="contact-website">{text.formWebsite}</label>
        <input id="contact-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="mt-5 flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={isSending}
          className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-accent px-4 text-sm font-medium text-accent-fg transition-opacity hover:opacity-90 disabled:cursor-wait disabled:opacity-60"
        >
          <Send className="size-4" aria-hidden="true" />
          {isSending ? text.formSending : text.formSubmit}
        </button>
        <p
          role="status"
          aria-live="polite"
          className={`text-sm ${status === "error" ? "text-danger" : "text-muted"}`}
        >
          {status === "success" ? text.formSuccess : status === "error" ? text.formError : ""}
        </p>
      </div>
    </form>
  );
}
