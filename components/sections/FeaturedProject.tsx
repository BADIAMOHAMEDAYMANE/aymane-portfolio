import Image from "next/image";
import { Building2, Check, Info } from "lucide-react";
import type { FeaturedProject as FeaturedProjectType } from "@/data/projects";
import { GithubIcon } from "../ui/BrandIcons";
import { ButtonLink } from "../ui/ButtonLink";
import { Reveal } from "../ui/Reveal";
import { Tag } from "../ui/Tag";

export function FeaturedProject({ project: p }: { project: FeaturedProjectType }) {
  return (
    <Reveal>
      <article className="overflow-hidden rounded-2xl border border-border-strong bg-surface">
        {/* Header */}
        <div className="flex flex-col gap-6 border-b border-border p-6 sm:p-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-accent-soft px-2.5 py-1 font-mono text-[11px] uppercase tracking-wider text-accent">
              {p.label}
            </p>
            <h3 className="text-2xl font-semibold tracking-tight text-fg sm:text-3xl">{p.title}</h3>
            {p.context && (
              <p className="mt-2 flex items-start gap-2 font-mono text-xs text-subtle">
                <Building2 className="mt-px size-3.5 shrink-0" aria-hidden="true" />
                {p.context}
              </p>
            )}
            <p className="mt-3 text-base text-muted">{p.tagline}</p>
          </div>
          {p.github && (
            <ButtonLink href={p.github} external className="shrink-0 self-start lg:self-auto">
              <GithubIcon /> View source
            </ButtonLink>
          )}
        </div>

        {p.results.length > 0 && (
          <dl className="grid grid-cols-2 gap-px border-b border-border bg-border lg:grid-cols-4">
            {p.results.map((r) => (
              <div key={r.label} className="flex flex-col-reverse bg-surface px-6 py-5 sm:px-8">
                <dt className="mt-0.5 text-xs text-subtle">{r.label}</dt>
                <dd className="font-mono text-2xl text-fg">{r.value}</dd>
              </div>
            ))}
          </dl>
        )}

        {p.images && p.images.length > 0 && (
          <div className="border-b border-border bg-surface-2 p-4 sm:p-8">
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

        <div className="grid lg:grid-cols-2">
          {/* Problem / solution / contributions */}
          <div className="space-y-7 border-b border-border p-6 sm:p-8 lg:border-r lg:border-b-0">
            <div>
              <h4 className="mb-2 font-mono text-[11px] uppercase tracking-wider text-accent">The problem</h4>
              <p className="text-[15px] leading-relaxed text-muted">{p.problem}</p>
            </div>
            <div>
              <h4 className="mb-2 font-mono text-[11px] uppercase tracking-wider text-accent">The solution</h4>
              <p className="text-[15px] leading-relaxed text-muted">{p.solution}</p>
            </div>
            <div>
              <h4 className="mb-3 font-mono text-[11px] uppercase tracking-wider text-accent">What I built</h4>
              <ul className="space-y-2.5">
                {p.contributions.map((c) => (
                  <li key={c} className="flex gap-3 text-sm leading-relaxed text-muted">
                    <Check className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Architecture */}
          <div className="p-6 sm:p-8">
            <h4 className="mb-5 font-mono text-[11px] uppercase tracking-wider text-accent">Architecture</h4>
            <ol className="relative space-y-1">
              {p.architecture.map((a, i) => (
                <li key={a.step} className="relative flex gap-4 pb-4 last:pb-0">
                  {i < p.architecture.length - 1 && (
                    <span className="absolute top-8 left-[15px] h-[calc(100%-1.75rem)] w-px bg-border-strong" aria-hidden="true" />
                  )}
                  <span className="grid size-8 shrink-0 place-items-center rounded-md border border-border-strong bg-surface-2 font-mono text-[11px] text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="pt-1">
                    <p className="text-sm font-medium text-fg">{a.step}</p>
                    <p className="mt-0.5 text-sm leading-relaxed text-muted">{a.detail}</p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="mt-8 border-t border-border pt-6">
              <h4 className="mb-3 font-mono text-[11px] uppercase tracking-wider text-accent">Stack</h4>
              <ul className="flex flex-wrap gap-1.5">
                {p.stack.map((s) => (
                  <li key={s}>
                    <Tag>{s}</Tag>
                  </li>
                ))}
              </ul>
            </div>

            {p.note && (
              <p className="mt-6 flex items-start gap-2 rounded-md border border-dashed border-border-strong px-3 py-2 text-xs leading-relaxed text-subtle">
                <Info className="mt-px size-3.5 shrink-0" aria-hidden="true" /> {p.note}
              </p>
            )}
          </div>
        </div>
      </article>
    </Reveal>
  );
}
