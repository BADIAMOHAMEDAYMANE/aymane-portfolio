import { Brain, Code2, Database, Wrench } from "lucide-react";
import { skillGroups } from "@/data/skills";
import { Reveal } from "../ui/Reveal";
import { Section } from "../ui/Section";

const icons = [Brain, Database, Code2, Wrench];

export function Skills() {
  return (
    <Section
      id="skills"
      index="03"
      eyebrow="Skills"
      title="Technologies I use"
      intro="Only tools I have actually used in my projects."
    >
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
