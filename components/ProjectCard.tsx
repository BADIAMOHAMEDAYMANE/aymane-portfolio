import Image from "next/image";
import { ArrowUpRight, Info } from "lucide-react";
import type { Project, ProjectCategory } from "@/data/projects";
import { GithubIcon } from "./ui/BrandIcons";
import { ButtonLink } from "./ui/ButtonLink";
import { Tag } from "./ui/Tag";

export function ProjectCard({ project }: { project: Project }) {
  const { title, tagline, problem, solution, stack, results, github, demo, images, categories, note } = project;
  const categoryLabels: Record<ProjectCategory, string> = {
    "AI / ML": "IA / ML",
    "Deep Learning": "Deep Learning",
    NLP: "NLP",
    "Full-Stack": "Full-stack",
    "Computer Vision": "Computer Vision",
  };

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
        <p className="mb-3 font-mono text-[11px] uppercase tracking-wider text-muted">{categories.map((category) => categoryLabels[category] ?? category).join(" · ")}</p>
        <h3 className="text-lg font-semibold tracking-tight text-fg">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">{tagline}</p>

        <dl className="mt-5 space-y-3 text-sm leading-relaxed">
          <div>
            <dt className="mb-0.5 font-mono text-[11px] uppercase tracking-wider text-accent">Problème</dt>
            <dd className="text-muted">{problem}</dd>
          </div>
          <div>
            <dt className="mb-0.5 font-mono text-[11px] uppercase tracking-wider text-accent">Approche</dt>
            <dd className="text-muted">{solution}</dd>
          </div>
        </dl>

        {results.length > 0 && (
          <div className="mt-5 border-t border-border pt-5">
            <div className="flex flex-wrap gap-6">
              {results.map((r) => (
                <div key={r.label}>
                  <p className="font-mono text-xl font-medium text-fg">{r.value}</p>
                  <p className="text-xs text-muted">{r.label}</p>
                </div>
              ))}
            </div>
            {project.resultContext && <p className="mt-3 text-xs leading-relaxed text-muted">{project.resultContext}</p>}
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
            <ButtonLink href={demo} external size="sm" variant="primary" aria-label={`Démo en direct : ${title}`}>
            Démo en direct <ArrowUpRight className="size-3.5" />
            </ButtonLink>
          )}
          {project.codePrivate && (
            <span className="inline-flex h-8 items-center rounded-lg border border-border px-3 text-[13px] text-muted">
              Code privé
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
