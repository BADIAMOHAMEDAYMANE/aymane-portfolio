import Image from "next/image";
import { ArrowUpRight, Info } from "lucide-react";
import type { Project } from "@/data/projects";
import { GithubIcon } from "./ui/BrandIcons";
import { ButtonLink } from "./ui/ButtonLink";
import { Tag } from "./ui/Tag";

export function ProjectCard({ project }: { project: Project }) {
  const { title, tagline, problem, solution, stack, results, github, demo, images, categories, note } = project;

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-surface transition-colors duration-300 hover:border-border-strong">
      {images && images.length > 0 && (
        <div className="grid grid-cols-3 gap-px border-b border-border bg-border">
          {images.slice(0, 3).map((img) => (
            <div key={img.src} className="relative aspect-[4/3] bg-surface-2">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(min-width: 1024px) 180px, 33vw"
                className="object-cover object-top"
              />
            </div>
          ))}
        </div>
      )}

      <div className="flex flex-1 flex-col p-6">
        <p className="mb-3 font-mono text-[11px] uppercase tracking-wider text-subtle">{categories.join(" · ")}</p>
        <h3 className="text-lg font-semibold tracking-tight text-fg">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">{tagline}</p>

        <dl className="mt-5 space-y-3 text-sm leading-relaxed">
          <div>
            <dt className="mb-0.5 font-mono text-[11px] uppercase tracking-wider text-accent">Problem</dt>
            <dd className="text-muted">{problem}</dd>
          </div>
          <div>
            <dt className="mb-0.5 font-mono text-[11px] uppercase tracking-wider text-accent">Solution</dt>
            <dd className="text-muted">{solution}</dd>
          </div>
        </dl>

        {results.length > 0 && (
          <div className="mt-5 flex flex-wrap gap-6 border-t border-border pt-5">
            {results.map((r) => (
              <div key={r.label}>
                <p className="font-mono text-xl font-medium text-fg">{r.value}</p>
                <p className="text-xs text-subtle">{r.label}</p>
              </div>
            ))}
          </div>
        )}

        <ul className="mt-5 flex flex-wrap gap-1.5" aria-label="Technologies">
          {stack.map((s) => (
            <li key={s}>
              <Tag>{s}</Tag>
            </li>
          ))}
        </ul>

        {note && (
          <p className="mt-4 flex items-start gap-2 rounded-md border border-dashed border-border-strong px-3 py-2 text-xs text-subtle">
            <Info className="mt-px size-3.5 shrink-0" /> {note}
          </p>
        )}

        <div className="mt-auto flex flex-wrap gap-2 pt-6">
          {github && (
            <ButtonLink href={github} external size="sm" aria-label={`${title} on GitHub`}>
              <GithubIcon className="size-3.5" /> Code
            </ButtonLink>
          )}
          {demo && (
            <ButtonLink href={demo} external size="sm" variant="primary" aria-label={`${title} live demo`}>
              Live Demo <ArrowUpRight className="size-3.5" />
            </ButtonLink>
          )}
        </div>
      </div>
    </article>
  );
}
