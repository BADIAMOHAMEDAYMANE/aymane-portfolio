import { Award, Briefcase, GraduationCap } from "lucide-react";
import { certifications } from "@/data/experience";
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
      <ol className="relative ml-3 space-y-6 border-l border-border-strong pl-7 sm:ml-4">
        {experiences.map((experience) => (
          <li key={experience.company + experience.period} className="relative">
            <span className="absolute -left-[31px] top-6 size-3 rounded-full bg-accent ring-4 ring-bg" aria-hidden="true" />
            <Reveal>
              <article className="rounded-xl border border-border bg-surface p-6 sm:p-7">
                <p className="mb-4 flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-subtle">
                  <Briefcase className="size-4" aria-hidden="true" /> {text.experience.work}
                </p>
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <h3 className="text-base font-semibold text-fg">{experience.role}</h3>
                  <p className="font-mono text-xs text-subtle">{experience.period}</p>
                </div>
                <p className="mt-1 text-sm text-muted">
                  {experience.company}
                  {experience.location && <span className="text-subtle"> · {experience.location}</span>}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-muted">{experience.summary}</p>
                <ul className="mt-3 space-y-1.5">
                  {experience.achievements.map((achievement) => (
                    <li key={achievement} className="flex gap-2.5 text-sm leading-relaxed text-muted">
                      <span className="mt-2 size-1 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                      {achievement}
                    </li>
                  ))}
                </ul>
                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {experience.stack.map((skill) => (
                    <li key={skill}><Tag>{skill}</Tag></li>
                  ))}
                </ul>
                {experience.caseStudy && (
                  <a href={experience.caseStudy} className="mt-5 inline-flex min-h-11 items-center text-sm font-medium text-accent underline decoration-border-strong underline-offset-4 hover:text-fg">
                    {text.experience.caseStudy}
                  </a>
                )}
              </article>
            </Reveal>
          </li>
        ))}

        {education.map((item) => (
          <li key={item.degree} className="relative">
            <span className="absolute -left-[31px] top-6 size-3 rounded-full bg-border-strong ring-4 ring-bg" aria-hidden="true" />
            <Reveal>
              <article className="rounded-xl border border-border bg-surface p-6 sm:p-7">
                <p className="mb-4 flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-subtle">
                  <GraduationCap className="size-4" aria-hidden="true" /> {text.experience.education}
                </p>
                <h3 className="text-base font-semibold leading-snug text-fg">{item.degree}</h3>
                <p className="mt-1 text-sm text-muted">{item.school}</p>
                <p className="mt-1 font-mono text-xs text-subtle">{item.period}</p>
                {item.details && <p className="mt-3 text-sm leading-relaxed text-muted">{item.details}</p>}
              </article>
            </Reveal>
          </li>
        ))}

        {certifications.map((certification) => (
          <li key={certification.name} className="relative">
            <span className="absolute -left-[31px] top-6 size-3 rounded-full bg-border-strong ring-4 ring-bg" aria-hidden="true" />
            <Reveal>
              <article className="flex flex-col gap-2 rounded-xl border border-border bg-surface p-6 sm:flex-row sm:items-center sm:justify-between sm:p-7">
                <div>
                  <p className="mb-3 flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-subtle">
                    <Award className="size-4" aria-hidden="true" /> {text.experience.certifications}
                  </p>
                  <h3 className="text-base font-semibold text-fg">{certification.name}</h3>
                  <p className="mt-1 text-sm text-muted">{certification.issuer}</p>
                </div>
                <p className="font-mono text-xs text-subtle">{certification.year}</p>
              </article>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
