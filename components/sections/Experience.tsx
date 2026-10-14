import { ArrowUpRight, Award, Briefcase, GraduationCap } from "lucide-react";
import { certifications } from "@/data/experience";
import { cn } from "@/lib/utils";
import { Reveal } from "../ui/Reveal";
import { Section } from "../ui/Section";
import { Tag } from "../ui/Tag";
import { copy, localizedEducation, localizedExperience, type Locale } from "@/data/i18n";

export function Experience({ locale }: { locale: Locale }) {
  const text = copy(locale);
  const experiences = localizedExperience(locale);
  const education = localizedEducation(locale);
  return (
    <Section id="experience" index="04" eyebrow={text.experience.eyebrow} title={text.experience.title}>
      <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr]">
        {/* Experience timeline */}
        <div>
          <h3 className="mb-6 flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-subtle">
            <Briefcase className="size-3.5" /> {text.experience.work}
          </h3>
          <ol className="space-y-6">
            {experiences.map((e) => (
              <Reveal key={e.company + e.period}>
                <li
                  className={cn(
                    "rounded-xl border border-border bg-surface p-6",
                  )}
                >
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                    <h4 className="text-base font-semibold text-fg">
                      {e.role}
                    </h4>
                    <p className="font-mono text-xs text-subtle">{e.period}</p>
                  </div>
                  <p className="mt-1 text-sm text-accent">
                    {e.company}
                    {e.location && <span className="text-subtle"> · {e.location}</span>}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-muted">{e.summary}</p>
                  <ul className="mt-3 space-y-1.5">
                    {e.achievements.map((a) => (
                      <li key={a} className="flex gap-2.5 text-sm leading-relaxed text-muted">
                        <span className="mt-2 size-1 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                        {a}
                      </li>
                    ))}
                  </ul>
                  <ul className="mt-4 flex flex-wrap gap-1.5">
                    {e.stack.map((s) => (
                      <li key={s}>
                        <Tag>{s}</Tag>
                      </li>
                    ))}
                  </ul>
                  {e.caseStudy && (
                    <a
                      href={e.caseStudy}
                      className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-fg"
                    >
                      {text.experience.caseStudy} <ArrowUpRight className="size-4" aria-hidden="true" />
                    </a>
                  )}
                </li>
              </Reveal>
            ))}
          </ol>
        </div>

        {/* Education + certifications */}
        <div className="space-y-10">
          <div>
            <h3 className="mb-6 flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-subtle">
              <GraduationCap className="size-3.5" /> {text.experience.education}
            </h3>
            <ul className="space-y-4">
              {education.map((ed) => (
                <Reveal key={ed.degree}>
                  <li className="rounded-xl border border-border bg-surface p-6">
                    <h4 className="text-base font-semibold leading-snug text-fg">{ed.degree}</h4>
                    <p className="mt-1 text-sm text-accent">
                      {ed.school}
                    </p>
                    <p className="mt-1 font-mono text-xs text-subtle">{ed.period}</p>
                    {ed.details && <p className="mt-3 text-sm leading-relaxed text-muted">{ed.details}</p>}
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>

          {certifications.length > 0 && (
            <div>
              <h3 className="mb-6 flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-subtle">
                <Award className="size-3.5" /> {text.experience.certifications}
              </h3>
              <ul className="divide-y divide-border rounded-xl border border-border bg-surface">
                {certifications.map((c) => (
                  <li key={c.name} className="flex items-center justify-between gap-4 px-5 py-4 text-sm">
                    <span className="text-fg">
                      {c.name} <span className="text-subtle">· {c.issuer}</span>
                    </span>
                    <span className="font-mono text-xs text-subtle">{c.year}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </Section>
  );
}
