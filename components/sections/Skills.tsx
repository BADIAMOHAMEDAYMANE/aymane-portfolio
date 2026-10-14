import { Brain, Code2, Database, Wrench } from "lucide-react";
import { coreSkills, skillGroups } from "@/data/skills";
import { Reveal } from "../ui/Reveal";
import { Section } from "../ui/Section";

const icons = [Brain, Database, Code2, Wrench];

export function Skills() {
  return (
    <Section
      id="skills"
      index="03"
      eyebrow="Compétences"
      title="Compétences techniques"
      intro="Une sélection de compétences mobilisées dans mes projets ; les autres outils utilisés sont regroupés ci-dessous."
    >
      <Reveal className="mb-8 rounded-xl border border-border bg-surface p-6 sm:p-7">
        <h3 className="mb-4 font-mono text-xs uppercase tracking-wider text-accent">Compétences cœur</h3>
        <ul className="flex flex-wrap gap-2">
          {coreSkills.map((skill) => (
            <li key={skill} className="rounded-md border border-border-strong bg-bg px-3 py-2 text-sm font-medium text-fg">
              {skill}
            </li>
          ))}
        </ul>
      </Reveal>
      <div className="grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2">
        {skillGroups.map((g, i) => {
          const Icon = icons[i % icons.length];
          return (
            <Reveal key={g.title} delay={i * 0.05} className="bg-surface p-6 sm:p-7">
              <div className="mb-5 flex items-center gap-3">
                <span className="grid size-9 place-items-center rounded-lg border border-border-strong bg-surface-2 text-accent">
                  <Icon className="size-4" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-sm font-semibold text-fg">{g.title}</h3>
                  <p className="text-xs text-subtle">{g.description}</p>
                </div>
              </div>
              <ul className="flex flex-wrap gap-2">
                {g.items.map((s) => (
                  <li
                    key={s}
                    className="rounded-md border border-border bg-bg px-2.5 py-1 text-[13px] text-muted transition-colors hover:border-border-strong hover:text-fg"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
