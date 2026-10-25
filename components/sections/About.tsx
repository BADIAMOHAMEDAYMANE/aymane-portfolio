import { profile } from "@/data/profile";
import { Section } from "../ui/Section";
import { Reveal } from "../ui/Reveal";
import { copy, localizedProfile, type Locale } from "@/data/i18n";

export function About({ locale }: { locale: Locale }) {
  const text = copy(locale);
  const localized = localizedProfile(locale);
  return (
    <Section id="about" index="01" eyebrow={text.about.eyebrow} title={text.about.title}>
      <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:gap-12">
        <div className="space-y-8">
          <Reveal className="space-y-5 text-[15px] leading-relaxed text-muted sm:text-base">
            {text.about.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </Reveal>
          {profile.languages.length > 0 && (
            <Reveal delay={0.1}>
              <h3 className="mb-3 font-mono text-xs uppercase tracking-wider text-accent">{text.about.languages}</h3>
              <ul className="flex flex-wrap gap-2">
                {profile.languages.map((language) => (
                  <li key={language.name} className="rounded-md border border-border bg-surface px-3 py-2 text-sm text-fg">
                    {locale === "en"
                      ? language.name === "Français" ? "French" : "English"
                      : language.name}
                    <span className="text-muted">· {language.level}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          )}
        </div>
        <Reveal delay={0.1}>
          <dl className="divide-y divide-border rounded-xl border border-border bg-surface">
            {text.about.highlights.map((h) => (
              <div key={h.label} className="flex items-center justify-between gap-4 px-5 py-4">
                <dt className="font-mono text-xs uppercase tracking-wider text-subtle">{h.label}</dt>
                <dd className="text-right text-sm text-fg">{h.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
      <Reveal delay={0.12} className="mt-10 rounded-xl border border-border bg-surface p-6 sm:p-8">
        <p className="font-mono text-xs uppercase tracking-wider text-accent">{text.about.lookingFor}</p>
        <p className="mt-3 text-lg font-medium text-fg">{text.about.internship} · {profile.lookingFor.duration}</p>
        <p className="mt-2 text-sm leading-relaxed text-muted">{text.about.missions}</p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {profile.lookingFor.topics.map((topic) => (
            <li key={topic} className="rounded-md border border-border-strong px-3 py-1.5 text-sm text-muted">{topic}</li>
          ))}
        </ul>
        {(profile.lookingFor.start || profile.lookingFor.mobility || profile.location) && (
          <p className="mt-4 text-sm text-muted">
            {[localized.location, localized.start && `${text.about.start} : ${localized.start}`, localized.mobility && `${text.about.mobility} : ${localized.mobility}`].filter(Boolean).join(" · ")}
          </p>
        )}
      </Reveal>
    </Section>
  );
}
