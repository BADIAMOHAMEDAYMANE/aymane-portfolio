import { about, profile } from "@/data/profile";
import { Section } from "../ui/Section";
import { Reveal } from "../ui/Reveal";

export function About() {
  return (
    <Section id="about" index="01" eyebrow="À propos" title="De l'expérimentation à l'application.">
      <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
        <Reveal className="space-y-5 text-[15px] leading-relaxed text-muted sm:text-base">
          {about.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </Reveal>
        {profile.languages.length > 0 && (
          <Reveal delay={0.1} className="mt-8">
            <h3 className="mb-3 font-mono text-xs uppercase tracking-wider text-accent">Langues</h3>
            <ul className="flex flex-wrap gap-2">
              {profile.languages.map((language) => (
                <li key={language.name} className="rounded-md border border-border bg-surface px-3 py-2 text-sm text-fg">
                  {language.name} <span className="text-muted">· {language.level}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        )}
        <Reveal delay={0.1}>
          <dl className="divide-y divide-border rounded-xl border border-border bg-surface">
            {about.highlights.map((h) => (
              <div key={h.label} className="flex items-center justify-between gap-4 px-5 py-4">
                <dt className="font-mono text-xs uppercase tracking-wider text-subtle">{h.label}</dt>
                <dd className="text-right text-sm text-fg">{h.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
      <Reveal delay={0.12} className="mt-10 rounded-xl border border-border bg-surface p-6 sm:p-8">
        <p className="font-mono text-xs uppercase tracking-wider text-accent">Ce que je cherche</p>
        <p className="mt-3 text-lg font-medium text-fg">Stage PFE · {profile.lookingFor.duration}</p>
        <p className="mt-2 text-sm leading-relaxed text-muted">Missions en IA appliquée, expérimentation et mise en production de modèles.</p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {profile.lookingFor.topics.map((topic) => (
            <li key={topic} className="rounded-md border border-border-strong px-3 py-1.5 text-sm text-muted">{topic}</li>
          ))}
        </ul>
        {(profile.lookingFor.start || profile.lookingFor.mobility || profile.location) && (
          <p className="mt-4 text-sm text-muted">
            {[profile.location, profile.lookingFor.start && `Début : ${profile.lookingFor.start}`, profile.lookingFor.mobility && `Mobilité : ${profile.lookingFor.mobility}`].filter(Boolean).join(" · ")}
          </p>
        )}
      </Reveal>
    </Section>
  );
}
