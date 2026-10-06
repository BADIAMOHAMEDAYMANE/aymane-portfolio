import { featuredProjects, projects } from "@/data/projects";
import { ProjectCard } from "../ProjectCard";
import { Reveal } from "../ui/Reveal";
import { Section } from "../ui/Section";
import { FeaturedProject } from "./FeaturedProject";

export function Projects() {
  return (
    <Section
      id="projects"
      index="02"
      eyebrow="Projects"
      title="Selected work"
      intro="An industry project from my internship, followed by personal projects that each go from data and modelling to something you can run. Metrics come straight from each repository or report."
    >
      <div className="space-y-6">
        {featuredProjects.map((fp) => (
          <FeaturedProject key={fp.slug} project={fp} />
        ))}
      </div>
      <div className="mt-6 grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.slug} delay={(i % 2) * 0.08} className="h-full">
            <ProjectCard project={p} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
