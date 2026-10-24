import { ArrowUpRight } from "lucide-react";
import { profile } from "@/data/profile";
import { GithubIcon } from "../ui/BrandIcons";
import { ButtonLink } from "../ui/ButtonLink";
import { Reveal } from "../ui/Reveal";
import { Section } from "../ui/Section";
import { copy, type Locale } from "@/data/i18n";

export function GitHub({ locale }: { locale: Locale }) {
  const text = copy(locale);

  return (
    <Section
      id="github"
      index="05"
      eyebrow={text.github.eyebrow}
      title={text.github.title}
      intro={text.github.intro}
    >
      <Reveal>
        <div className="flex flex-col gap-5 rounded-xl border border-border bg-surface p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <div className="flex items-center gap-4">
            <span className="grid size-12 shrink-0 place-items-center rounded-full border border-border-strong bg-surface-2">
              <GithubIcon className="size-5 text-fg" />
            </span>
            <div>
              <p className="font-medium text-fg">{profile.name}</p>
              <p className="font-mono text-sm text-muted">@{profile.githubUsername}</p>
            </div>
          </div>
          <ButtonLink href={`${profile.github}?tab=repositories`} external variant="primary">
            {text.github.allRepos} <ArrowUpRight className="size-4" aria-hidden="true" />
          </ButtonLink>
        </div>
      </Reveal>
    </Section>
  );
}
