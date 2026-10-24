import Image from "next/image";
import { ArrowUpRight, ChevronDown, Info } from "lucide-react";
import type { Project, ProjectCategory } from "@/data/projects";
import { GithubIcon } from "./ui/BrandIcons";
import { ButtonLink } from "./ui/ButtonLink";
import { Tag } from "./ui/Tag";
import { copy, type Locale } from "@/data/i18n";

export function ProjectCard({ project, locale }: { project: Project; locale: Locale }) {
  const text = copy(locale);
  const { title, tagline, problem, solution, stack, results, github, demo, images, categories, note } = project;
  const categoryLabels: Record<ProjectCategory, string> = {
    "AI / ML": text.projects.categories["AI / ML"],
    "Deep Learning": text.projects.categories["Deep Learning"],
    NLP: text.projects.categories.NLP,
    "Full-Stack": text.projects.categories["Full-Stack"],
    "Computer Vision": text.projects.categories["Computer Vision"],
  };
  const visibleStack = stack.slice(0, 4);
  const remainingStack = stack.length - visibleStack.length;

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-xl border border-border bg-surface transition-[border-color,box-shadow,transform] duration-300 hover:border-border-strong hover:shadow-lg motion-safe:hover:-translate-y-1">
      <div className="flex flex-1 flex-col p-6">
        <p className="mb-3 font-mono text-xs uppercase tracking-wider text-subtle">
          {categories.map((category) => categoryLabels[category] ?? category).join(" · ")}
        </p>
        <h3 className="text-lg font-semibold tracking-tight text-fg">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">{tagline}</p>

        {images && images.length > 0 && (
          <div className="mt-5 grid grid-cols-3 gap-2">
            {images.slice(0, 3).map((image) => (
              <div key={image.src} className="relative aspect-[4/3] overflow-hidden rounded-md border border-border-strong bg-[#0a0a0b] p-1.5">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(min-width: 1024px) 160px, 30vw"
                  className="object-contain brightness-95"
                />
                <span className="pointer-events-none absolute inset-1.5 rounded-sm bg-black/[0.04] mix-blend-multiply" aria-hidden="true" />
              </div>
            ))}
          </div>
        )}

        <ul className="mt-5 flex flex-wrap gap-1.5" aria-label={text.projects.technologies}>
          {visibleStack.map((technology) => (
            <li key={technology}><Tag>{technology}</Tag></li>
          ))}
          {remainingStack > 0 && (
            <li>
              <Tag>+{remainingStack}<span className="sr-only"> {text.projects.moreTechnologies}</span></Tag>
            </li>
          )}
        </ul>

        <details className="group mt-5 border-t border-border pt-2">
          <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-4 text-sm font-medium text-fg marker:text-accent hover:text-accent [&::-webkit-details-marker]:hidden">
            {text.projects.details}
            <ChevronDown className="size-4 shrink-0 text-muted transition-transform duration-200 group-open:rotate-180" aria-hidden="true" />
          </summary>
          <div className="space-y-4 pb-2 pt-2 text-sm leading-relaxed">
            <div>
              <h4 className="mb-1 font-mono text-xs uppercase tracking-wider text-subtle">{text.projects.problem}</h4>
              <p className="text-muted">{problem}</p>
            </div>
            <div>
              <h4 className="mb-1 font-mono text-xs uppercase tracking-wider text-subtle">{text.projects.approach}</h4>
              <p className="text-muted">{solution}</p>
            </div>
            {results.length > 0 && (
              <dl className="grid grid-cols-2 gap-3 border-t border-border pt-4">
                {results.map((result) => (
                  <div key={result.label}>
                    <dt className="text-sm text-muted">{result.label}</dt>
                    <dd className="font-mono text-lg text-fg">{result.value}</dd>
                  </div>
                ))}
              </dl>
            )}
            {project.resultContext && <p className="text-sm text-muted">{project.resultContext}</p>}
            <ul className="flex flex-wrap gap-1.5 border-t border-border pt-4" aria-label={text.projects.technologies}>
              {stack.map((technology) => (
                <li key={technology}><Tag>{technology}</Tag></li>
              ))}
            </ul>
            {note && (
              <p className="flex items-start gap-2 rounded-md border border-dashed border-border-strong px-3 py-3 text-sm text-muted">
                <Info className="mt-0.5 size-4 shrink-0" aria-hidden="true" /> {note}
              </p>
            )}
          </div>
        </details>

        <div className="mt-auto flex flex-wrap gap-2 pt-5">
          {github && (
            <ButtonLink href={github} external size="sm" aria-label={`${title} · ${text.projects.code} on GitHub`}>
              <GithubIcon className="size-4" /> {text.projects.code}
            </ButtonLink>
          )}
          {demo && (
            <ButtonLink href={demo} external size="sm" variant="primary" aria-label={`${text.projects.demoLabel}${title}`}>
              {text.projects.liveDemo} <ArrowUpRight className="size-4" />
            </ButtonLink>
          )}
          {project.codePrivate && (
            <span className="inline-flex min-h-11 items-center rounded-lg border border-border px-3 text-sm text-muted">
              {text.projects.privateCode}
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
