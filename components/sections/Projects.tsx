"use client";

import { useState } from "react";
import { featuredProjects, projects, type ProjectCategory } from "@/data/projects";
import { ProjectCard } from "../ProjectCard";
import { Reveal } from "../ui/Reveal";
import { Section } from "../ui/Section";
import { FeaturedProject } from "./FeaturedProject";

export function Projects() {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory | "Tous">("Tous");
  const filters: (ProjectCategory | "Tous")[] = ["Tous", "NLP", "Deep Learning", "Full-Stack", "Computer Vision"];
  const visibleProjects = projects.filter((project) => activeFilter === "Tous" || project.categories.includes(activeFilter));

  return (
    <Section
      id="projects"
      index="02"
      eyebrow="Projets"
      title="Projets sélectionnés"
      intro="Un projet de fin d'année (PFA, 8 semaines) chez Lama Healthcare, distinct du stage PFE recherché, suivi de projets personnels. Les résultats d'extraction du PFA sont mesurés sur le dataset public CORD."
    >
      <div className="space-y-6">
        {featuredProjects.map((fp) => (
          <FeaturedProject key={fp.slug} project={fp} />
        ))}
      </div>
      <div className="mt-8 flex flex-wrap gap-2" role="group" aria-label="Filtrer les projets par catégorie">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            aria-pressed={activeFilter === filter}
            onClick={() => setActiveFilter(filter)}
            className={`rounded-full border px-3 py-1.5 text-sm transition-colors ${activeFilter === filter ? "border-accent bg-accent-soft text-accent" : "border-border text-muted hover:border-border-strong hover:text-fg"}`}
          >
            {filter === "Tous" ? "Tous" : filter === "Full-Stack" ? "Full-stack" : filter === "Computer Vision" ? "Computer Vision" : filter}
          </button>
        ))}
      </div>
      <div className="mt-5 grid gap-6 md:grid-cols-2">
        {visibleProjects.map((p, i) => (
          <Reveal key={p.slug} delay={(i % 2) * 0.08} className="h-full">
            <ProjectCard project={p} />
          </Reveal>
        ))}
      </div>
      {visibleProjects.length === 0 && <p className="mt-6 text-sm text-muted">Aucun projet dans cette catégorie pour le moment.</p>}
    </Section>
  );
}
