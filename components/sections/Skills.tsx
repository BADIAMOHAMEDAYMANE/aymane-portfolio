import { Brain, ChevronDown, Code2, Database, Wrench } from "lucide-react";
import { coreSkills, coreSkillProjectSlugs, skillGroups } from "@/data/skills";
import { Reveal } from "../ui/Reveal";
import { Section } from "../ui/Section";
import { Tag } from "../ui/Tag";
import { copy, localizedFeatured, localizedProjects, localizedSkillGroup, type Locale } from "@/data/i18n";

const icons = [Brain, Database, Code2, Wrench];

export function Skills({ locale }: { locale: Locale }) {
  const text = copy(locale);
  const projects = [...localizedFeatured(locale), ...localizedProjects(locale)];

  return (
    <Section
      id="skills"
      index="03"
      eyebrow={text.skills.eyebrow}
      title={text.skills.title}
      intro={text.skills.intro}
    >
      <Reveal className="mb-8 rounded-xl border border-border bg-surface p-6 sm:p-7">
        <h3 className="mb-4 font-mono text-xs uppercase tracking-wider text-subtle">{text.skills.core}</h3>
        <ul className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {coreSkills.map((skill) => {
            const relatedProjects = coreSkillProjectSlugs[skill].flatMap((slug) => {
              const project = projects.find((item) => item.slug === slug);
              return project ? [project] : [];
            });
            const projectCountLabel = relatedProjects.length === 1
              ? text.skills.projectOne
              : text.skills.projectMany;

            return (
              <li key={skill}>
                <details className="group rounded-lg border border-border bg-bg open:border-border-strong">
                  <summary className="flex min-h-11 cursor-pointer list-none items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-fg hover:bg-surface-2 [&::-webkit-details-marker]:hidden">
                    <span className="min-w-0 flex-1">{skill}</span>
                    <span className="shrink-0 rounded-full border border-border-strong px-2 py-0.5 font-mono text-xs text-muted">
                      {relatedProjects.length} {projectCountLabel}
                    </span>
                    <ChevronDown className="size-4 shrink-0 text-muted transition-transform duration-200 group-open:rotate-180" aria-hidden="true" />
                  </summary>
                  <ul className="space-y-1 border-t border-border px-3 py-2">
                    {relatedProjects.map((project) => (
                      <li key={project.slug}>
                        <a
                          href={`#project-${project.slug}`}
                          className="flex min-h-11 items-center rounded-md px-2 text-sm leading-snug text-muted transition-colors hover:bg-surface-2 hover:text-fg"
                        >
                          {project.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </details>
              </li>
            );
          })}
        </ul>
      </Reveal>

      <div className="space-y-3">
        {skillGroups.map((_, index) => {
          const group = localizedSkillGroup(locale, index);
          const Icon = icons[index % icons.length];

          return (
            <Reveal key={group.title} delay={index * 0.04}>
              <details className="group rounded-xl border border-border bg-surface">
                <summary className="flex min-h-16 cursor-pointer list-none items-center gap-4 rounded-xl px-5 py-4 hover:bg-surface-2 [&::-webkit-details-marker]:hidden">
                  <span className="grid size-10 shrink-0 place-items-center rounded-lg border border-border-strong bg-surface-2 text-muted">
                    <Icon className="size-4" aria-hidden="true" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-sm font-semibold text-fg">{group.title}</span>
                    <span className="mt-0.5 block text-sm text-muted">{group.description}</span>
                  </span>
                  <ChevronDown className="size-4 shrink-0 text-muted transition-transform duration-200 group-open:rotate-180" aria-hidden="true" />
                </summary>
                <ul className="flex flex-wrap gap-2 border-t border-border px-5 py-4">
                  {group.items.map((skill) => (
                    <li key={skill}><Tag>{skill}</Tag></li>
                  ))}
                </ul>
              </details>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
