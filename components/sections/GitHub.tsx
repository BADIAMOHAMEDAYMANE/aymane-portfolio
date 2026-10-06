import { ArrowUpRight } from "lucide-react";
import { profile } from "@/data/profile";
import { featuredProjects, otherRepos, projects } from "@/data/projects";
import { GithubIcon } from "../ui/BrandIcons";
import { ButtonLink } from "../ui/ButtonLink";
import { Reveal } from "../ui/Reveal";
import { Section } from "../ui/Section";

const repoName = (url: string) => url.split("/").pop() ?? url;

export function GitHub() {
  const repos = [
    ...[...featuredProjects, ...projects]
      .filter((p): p is typeof p & { github: string } => !!p.github)
      .map((p) => ({ name: repoName(p.github), description: p.tagline, stack: p.stack.slice(0, 3), url: p.github })),
    ...otherRepos,
  ];

  return (
    <Section
      id="github"
      index="05"
      eyebrow="GitHub"
      title="Code is public"
      intro="All my personal projects are open source. Browse the repositories to see the code, notebooks and documentation."
    >
      <Reveal>
        <div className="overflow-hidden rounded-xl border border-border bg-surface">
          <div className="flex flex-col gap-4 border-b border-border p-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4">
              <span className="grid size-11 place-items-center rounded-full border border-border-strong bg-surface-2">
                <GithubIcon className="size-5 text-fg" />
              </span>
              <div>
                <p className="font-medium text-fg">{profile.name}</p>
                <p className="font-mono text-xs text-subtle">@{profile.githubUsername}</p>
              </div>
            </div>
            <ButtonLink href={`${profile.github}?tab=repositories`} external variant="primary" size="sm">
              All repositories <ArrowUpRight className="size-3.5" />
            </ButtonLink>
          </div>
          <ul className="divide-y divide-border">
            {repos.map((r) => (
              <li key={r.url}>
                <a
                  href={r.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col gap-1.5 px-6 py-4 transition-colors hover:bg-surface-2 sm:flex-row sm:items-center sm:gap-6"
                >
                  <span className="font-mono text-sm text-fg group-hover:text-accent sm:w-64 sm:shrink-0">{r.name}</span>
                  <span className="flex-1 text-sm text-muted">{r.description}</span>
                  <span className="font-mono text-[11px] text-subtle sm:text-right">{r.stack.join(" · ")}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </Section>
  );
}
