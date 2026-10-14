"use client";

import { useState } from "react";
import type { ProjectCategory } from "@/data/projects";
import { ProjectCard } from "../ProjectCard";
import { Reveal } from "../ui/Reveal";
import { Section } from "../ui/Section";
import { FeaturedProject } from "./FeaturedProject";
import { copy, localizedFeatured, localizedProjects, type Locale } from "@/data/i18n";

export function Projects({ locale }: { locale: Locale }) {
  const text = copy(locale);
  const featuredProjects = localizedFeatured(locale);
  const projects = localizedProjects(locale);
  const [activeFilter, setActiveFilter] = useState<ProjectCategory | "Tous">("Tous");
  const filters: (ProjectCategory | "Tous")[] = ["Tous", "NLP", "Deep Learning", "Full-Stack", "Computer Vision"];
  const visibleProjects = projects.filter((project) => activeFilter === "Tous" || project.categories.includes(activeFilter));

  return (
    <Section
      id="projects"
      index="02"
      eyebrow={text.projects.eyebrow}
      title={text.projects.title}
      intro={text.projects.intro}
    >
      <div className="space-y-6">
        {featuredProjects.map((fp) => (
          <FeaturedProject key={fp.slug} project={fp} locale={locale} />
        ))}
      </div>
      <div className="mt-8 flex flex-wrap gap-2" role="group" aria-label={text.projects.filters}>
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            aria-pressed={activeFilter === filter}
            onClick={() => setActiveFilter(filter)}
            className={`rounded-full border px-3 py-1.5 text-sm transition-colors ${activeFilter === filter ? "border-accent bg-accent-soft text-accent" : "border-border text-muted hover:border-border-strong hover:text-fg"}`}
          >
            {filter === "Tous" ? text.projects.all : text.projects.categories[filter]}
          </button>
        ))}
      </div>
      <div className="mt-5 grid gap-6 md:grid-cols-2">
        {visibleProjects.map((p, i) => (
          <Reveal key={p.slug} delay={(i % 2) * 0.08} className="h-full">
            <ProjectCard project={p} locale={locale} />
          </Reveal>
        ))}
      </div>
      {visibleProjects.length === 0 && <p className="mt-6 text-sm text-muted">{text.projects.empty}</p>}
    </Section>
  );
}
