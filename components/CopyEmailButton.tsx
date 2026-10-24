"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { copy, type Locale } from "@/data/i18n";

export function CopyEmailButton({ email, locale }: { email: string; locale: Locale }) {
  const text = copy(locale).contact;
  const [copyState, setCopyState] = useState<"idle" | "copied" | "error">("idle");

  async function copyAddress() {
    if (!navigator.clipboard?.writeText) {
      console.error("Clipboard API is unavailable in this context.");
      setCopyState("error");
      return;
    }

    try {
      await navigator.clipboard.writeText(email);
      setCopyState("copied");
    } catch (error) {
      console.error("Unable to copy the contact email address.", error);
      setCopyState("error");
    }
  }

  return (
    <div className="mt-2 flex flex-wrap items-center gap-2">
      <a
        href={`mailto:${email}`}
        className="inline-flex min-h-11 items-center text-sm font-medium text-fg underline decoration-border-strong underline-offset-4 transition-colors hover:text-accent"
      >
        {email}
      </a>
      <button
        type="button"
        onClick={copyAddress}
        aria-label={copyState === "copied" ? text.emailCopied : text.copyEmail}
        className="grid min-h-11 min-w-11 place-items-center rounded-lg border border-control-border text-muted transition-colors hover:border-accent hover:bg-accent-soft hover:text-fg"
      >
        {copyState === "copied" ? <Check className="size-4" aria-hidden="true" /> : <Copy className="size-4" aria-hidden="true" />}
      </button>
      <p role="status" aria-live="polite" className={`text-sm ${copyState === "error" ? "text-danger" : "text-muted"}`}>
        {copyState === "copied" ? text.emailCopied : copyState === "error" ? text.copyEmailError : ""}
      </p>
    </div>
  );
}
