import { ArrowUpRight, FileText, Mail } from "lucide-react";
import { profile } from "@/data/profile";
import { GithubIcon, LinkedinIcon } from "../ui/BrandIcons";
import { ButtonLink } from "../ui/ButtonLink";
import { Reveal } from "../ui/Reveal";
import { Section } from "../ui/Section";
import { copy, localizedProfile, type Locale } from "@/data/i18n";

export function Contact({ locale }: { locale: Locale }) {
  const text = copy(locale);
  const localized = localizedProfile(locale);
  const channels = [
    { label: "Email", value: profile.email, href: `mailto:${profile.email}`, icon: <Mail className="size-4" />, external: false },
    { label: "LinkedIn", value: "mohamed-aymane-badia", href: profile.linkedin, icon: <LinkedinIcon />, external: true },
    { label: "GitHub", value: profile.githubUsername, href: profile.github, icon: <GithubIcon />, external: true },
  ];

  return (
    <Section
      id="contact"
      index="06"
      eyebrow={text.contact.eyebrow}
      title={text.contact.title}
      intro={text.contact.intro}
    >
      <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr] [&>*]:min-w-0">
        <Reveal className="flex flex-col justify-between gap-8 rounded-xl border border-border bg-surface p-6 sm:p-8">
          <p className="text-lg leading-relaxed text-fg">
            {text.contact.message}
          </p>
          <div className="flex flex-wrap gap-3">
            <ButtonLink href={`mailto:${profile.email}`} variant="primary">
              <Mail className="size-4" /> {text.contact.sendEmail}
            </ButtonLink>
            <ButtonLink href={locale === "en" ? "/cv-en.pdf" : profile.resume} download={text.cvFile}>
              <FileText className="size-4" /> {text.cv}
            </ButtonLink>
            {(profile.location || profile.lookingFor.start || profile.lookingFor.mobility) && (
              <p className="w-full text-sm text-muted">
                {[localized.location, localized.start && `${text.contact.start} ${localized.start}`, localized.mobility && `${text.contact.mobility}: ${localized.mobility}`].filter(Boolean).join(" · ")}
              </p>
            )}
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <ul className="divide-y divide-border overflow-hidden rounded-xl border border-border bg-surface">
            {channels.map((c) => (
              <li key={c.label}>
                <a
                  href={c.href}
                  {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="group flex items-center gap-4 px-6 py-5 transition-colors hover:bg-surface-2"
                >
                  <span className="grid size-10 shrink-0 place-items-center rounded-lg border border-border-strong text-muted group-hover:text-accent">
                    {c.icon}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-mono text-[11px] uppercase tracking-wider text-muted">{c.label}</span>
                    <span className="block truncate text-sm text-fg">{c.value}</span>
                  </span>
                  <ArrowUpRight className="size-4 shrink-0 text-subtle transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-fg" />
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}
