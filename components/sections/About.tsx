import { about } from "@/data/profile";
import { Section } from "../ui/Section";
import { Reveal } from "../ui/Reveal";

export function About() {
  return (
    <Section id="about" index="01" eyebrow="About" title="Building AI that leaves the notebook.">
      <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
        <Reveal className="space-y-5 text-[15px] leading-relaxed text-muted sm:text-base">
          {about.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </Reveal>
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
    </Section>
  );
}
