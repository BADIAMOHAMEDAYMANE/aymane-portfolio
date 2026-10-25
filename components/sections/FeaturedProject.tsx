import Image from "next/image";
import { Building2, Check, ChevronDown, Info } from "lucide-react";
import type { FeaturedProject as FeaturedProjectType } from "@/data/projects";
import { GithubIcon } from "../ui/BrandIcons";
import { ButtonLink } from "../ui/ButtonLink";
import { Reveal } from "../ui/Reveal";
import { Tag } from "../ui/Tag";
import { ArchitectureDiagram } from "../ui/ArchitectureDiagram";
import { copy, type Locale } from "@/data/i18n";

export function FeaturedProject({ project: p, locale }: { project: FeaturedProjectType; locale: Locale }) {
  const text = copy(locale);

  return (
    <Reveal>
      <article id={`project-${p.slug}`} className="overflow-hidden rounded-2xl border border-border-strong bg-surface">
        <header className="flex flex-col gap-6 border-b border-border p-6 sm:p-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="mb-3 inline-flex min-h-8 items-center rounded-full border border-border-strong px-3 font-mono text-xs uppercase tracking-wider text-subtle">
              {p.label}
            </p>
            {p.codePrivate && (
              <span className="mb-3 ml-2 inline-flex min-h-8 items-center rounded-full border border-border-strong px-3 font-mono text-xs text-muted">
                {text.featured.privateCode}
              </span>
            )}
            <h3 className="text-2xl font-semibold tracking-tight text-fg sm:text-3xl">{p.title}</h3>
            {p.context && (
              <p className="mt-2 flex items-start gap-2 text-sm text-muted">
                <Building2 className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
                {p.context}
              </p>
            )}
            <p className="mt-3 text-base leading-relaxed text-muted">{p.tagline}</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {p.caseStudy && (
              <ButtonLink href={p.caseStudy} size="sm">
                {text.experience.caseStudy}
              </ButtonLink>
            )}
            {p.github && (
              <ButtonLink href={p.github} external size="sm" aria-label={`${text.featured.viewCode} ${p.title}`}>
                <GithubIcon /> {text.featured.code}
              </ButtonLink>
            )}
          </div>
        </header>

        <div className="grid gap-px bg-border sm:grid-cols-3">
          {([
            [text.featured.summaryProblem, p.summary.problem],
            [text.featured.summaryApproach, p.summary.approach],
            [text.featured.summaryOutcome, p.summary.outcome],
          ] as const).map(([label, value]) => (
            <div key={label} className="bg-surface px-6 py-5 sm:px-8">
              <p className="font-mono text-xs uppercase tracking-wider text-subtle">{label}</p>
              <p className="mt-2 text-sm leading-relaxed text-fg">{value}</p>
            </div>
          ))}
        </div>

        {p.images && p.images.length > 0 && (
          <div className="border-t border-border bg-surface-2 p-4 sm:p-8">
            <div className="relative mx-auto aspect-[1222/921] max-w-3xl overflow-hidden rounded-lg border border-border-strong">
              <Image
                src={p.images[0].src}
                alt={p.images[0].alt}
                fill
                sizes="(min-width: 1024px) 768px, 100vw"
                className="object-cover object-top"
              />
            </div>
          </div>
        )}

        <section aria-labelledby={`${p.slug}-architecture`} className="grid gap-5 border-t border-border p-5 sm:p-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1fr)] lg:items-center">
          <div>
            <h4 id={`${p.slug}-architecture`} className="mb-3 font-mono text-xs uppercase tracking-wider text-subtle">
              {text.featured.architecture}
            </h4>
            <ArchitectureDiagram steps={p.architecture} label={`${text.featured.diagram}: ${p.title}`} />
          </div>
          <p className="text-sm leading-relaxed text-muted">{p.solution}</p>
        </section>

        <details className="group border-t border-border">
          <summary className="flex min-h-12 cursor-pointer list-none items-center justify-between gap-4 px-6 py-3 text-sm font-medium text-fg marker:text-accent hover:bg-surface-2 focus-visible:outline-offset-[-3px] sm:px-8 [&::-webkit-details-marker]:hidden">
            {text.featured.details}
            <ChevronDown className="size-4 shrink-0 text-muted transition-transform duration-200 group-open:rotate-180" aria-hidden="true" />
          </summary>
          <div className="grid lg:grid-cols-2">
            <div className="space-y-7 border-b border-border p-6 sm:p-8 lg:border-r lg:border-b-0">
              <div>
                <h4 className="mb-2 font-mono text-xs uppercase tracking-wider text-subtle">{text.featured.problem}</h4>
                <p className="text-sm leading-relaxed text-muted">{p.problem}</p>
              </div>
              <div>
                <h4 className="mb-2 font-mono text-xs uppercase tracking-wider text-subtle">{text.featured.approach}</h4>
                <p className="text-sm leading-relaxed text-muted">{p.solution}</p>
              </div>
              <div>
                <h4 className="mb-3 font-mono text-xs uppercase tracking-wider text-subtle">{text.featured.contribution}</h4>
                <ul className="space-y-2.5">
                  {p.contributions.map((contribution) => (
                    <li key={contribution} className="flex gap-3 text-sm leading-relaxed text-muted">
                      <Check className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
                      {contribution}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="p-6 sm:p-8">
              <h4 className="mb-5 font-mono text-xs uppercase tracking-wider text-subtle">{text.featured.architecture}</h4>
              <ol className="relative space-y-1">
                {p.architecture.map((step, index) => (
                  <li key={step.step} className="relative flex gap-4 pb-4 last:pb-0">
                    {index < p.architecture.length - 1 && (
                      <span className="absolute top-8 left-[15px] h-[calc(100%-1.75rem)] w-px bg-border-strong" aria-hidden="true" />
                    )}
                    <span className="grid size-8 shrink-0 place-items-center rounded-md border border-border-strong bg-surface-2 font-mono text-xs text-accent">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div className="pt-1">
                      <p className="text-sm font-medium text-fg">{step.step}</p>
                      <p className="mt-0.5 text-sm leading-relaxed text-muted">{step.detail}</p>
                    </div>
                  </li>
                ))}
              </ol>

              <div className="mt-8 border-t border-border pt-6">
                <h4 className="mb-3 font-mono text-xs uppercase tracking-wider text-subtle">{text.featured.technologies}</h4>
                <ul className="flex flex-wrap gap-1.5">
                  {p.stack.map((technology) => (
                    <li key={technology}><Tag>{technology}</Tag></li>
                  ))}
                </ul>
              </div>

              {p.note && (
                <p className="mt-6 flex items-start gap-2 rounded-md border border-dashed border-border-strong px-3 py-3 text-sm leading-relaxed text-muted">
                  <Info className="mt-0.5 size-4 shrink-0" aria-hidden="true" /> {p.note}
                </p>
              )}
            </div>
          </div>
        </details>
      </article>
    </Reveal>
  );
}
