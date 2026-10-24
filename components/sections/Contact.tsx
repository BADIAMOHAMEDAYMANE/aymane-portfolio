import { Laptop, MapPin } from "lucide-react";
import { profile } from "@/data/profile";
import { GithubIcon, LinkedinIcon } from "../ui/BrandIcons";
import { Reveal } from "../ui/Reveal";
import { Section } from "../ui/Section";
import { copy, localizedProfile, type Locale } from "@/data/i18n";
import { ContactForm } from "../ContactForm";
import { CopyEmailButton } from "../CopyEmailButton";

export function Contact({ locale }: { locale: Locale }) {
  const text = copy(locale);
  const localized = localizedProfile(locale);
  const socialLinks = [
    { label: text.contact.linkedin, href: profile.linkedin, icon: <LinkedinIcon /> },
    { label: text.contact.github, href: profile.github, icon: <GithubIcon /> },
  ];

  return (
    <Section
      id="contact"
      index="06"
      eyebrow={text.contact.eyebrow}
      title={text.contact.title}
      intro={text.contact.intro}
    >
      <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        <Reveal className="self-start">
          <div className="space-y-6 rounded-xl border border-border bg-surface p-6 sm:p-8">
            <p className="text-lg leading-relaxed text-fg">{text.contact.message}</p>

            {localized.start && (
              <p className="inline-flex min-h-11 items-center gap-2 rounded-full border border-accent/40 bg-accent-soft px-4 text-sm font-medium text-accent">
                <span className="size-2 rounded-full bg-accent" aria-hidden="true" />
                {text.contact.start} {localized.start}
              </p>
            )}

            <dl className="space-y-4 border-t border-border pt-5">
              {localized.location && (
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 size-4 shrink-0 text-muted" aria-hidden="true" />
                  <div>
                    <dt className="font-mono text-xs uppercase tracking-wider text-subtle">{text.contact.location}</dt>
                    <dd className="mt-1 text-sm text-fg">{localized.location}</dd>
                  </div>
                </div>
              )}
              {localized.mobility && (
                <div className="flex items-start gap-3">
                  <Laptop className="mt-0.5 size-4 shrink-0 text-muted" aria-hidden="true" />
                  <div>
                    <dt className="font-mono text-xs uppercase tracking-wider text-subtle">{text.contact.mobility}</dt>
                    <dd className="mt-1 text-sm text-fg">{localized.mobility}</dd>
                  </div>
                </div>
              )}
            </dl>

            <div className="border-t border-border pt-5">
              <p className="font-mono text-xs uppercase tracking-wider text-subtle">{text.contact.formEmail}</p>
              <CopyEmailButton email={profile.email} locale={locale} />
            </div>

            <ul className="flex flex-wrap gap-2 border-t border-border pt-5">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-control-border px-3 text-sm text-muted transition-colors hover:border-accent hover:bg-accent-soft hover:text-fg"
                  >
                    {link.icon}
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <ContactForm locale={locale} />
        </Reveal>
      </div>
    </Section>
  );
}
