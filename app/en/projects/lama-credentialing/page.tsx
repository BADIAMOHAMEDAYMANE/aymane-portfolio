import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { localizedFeatured, copy } from "@/data/i18n";
import { profile } from "@/data/profile";
import { Tag } from "@/components/ui/Tag";
import { ArchitectureDiagram } from "@/components/ui/ArchitectureDiagram";

export const metadata: Metadata = {
  title: "Credentialing & Document AI · Case Study",
  description:
    "Case study of the Lama Healthcare PFA: credentialing platform, Document AI pipeline and evaluation on the public CORD dataset.",
  ...(profile.siteUrl ? {
    alternates: {
      canonical: "/en/projects/lama-credentialing",
      languages: {
        fr: "/projects/lama-credentialing",
        en: "/en/projects/lama-credentialing",
      },
    },
    openGraph: { url: `${profile.siteUrl}/en/projects/lama-credentialing` },
  } : {}),
};

export default function EnglishLamaCredentialingCaseStudy() {
  const text = copy("en").caseStudy;
  const project = localizedFeatured("en")[0];

  return (
    <main className="min-h-dvh bg-bg text-fg">
      <div className="mx-auto max-w-4xl px-5 py-16 sm:px-8 sm:py-24">
        <div className="flex items-center justify-between">
          <Link href="/en#projects" className="inline-flex items-center gap-2 text-sm text-muted hover:text-fg">
            <ArrowLeft className="size-4" aria-hidden="true" /> {text.back}
          </Link>
          <Link href="/projects/lama-credentialing" lang="fr" className="font-mono text-xs text-accent hover:text-fg">
            FR
          </Link>
        </div>

        <header className="mt-10 border-b border-border pb-10">
          <p className="font-mono text-xs uppercase tracking-widest text-accent">{text.label}</p>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">{project.title}</h1>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-muted">
            {project.tagline}
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {project.stack.map((technology) => <Tag key={technology}>{technology}</Tag>)}
          </div>
        </header>

        <div className="space-y-12 py-10">
          <section aria-labelledby="context">
            <h2 id="context" className="font-mono text-sm uppercase tracking-wider text-accent">{text.context}</h2>
            <p className="mt-4 leading-relaxed text-muted">{project.problem}</p>
            <p className="mt-4 leading-relaxed text-muted">{text.contributionText}</p>
          </section>

          <section aria-labelledby="architecture">
            <h2 id="architecture" className="font-mono text-sm uppercase tracking-wider text-accent">{text.architecture}</h2>
            <ArchitectureDiagram steps={project.architecture} label={`${text.architecture}: ${project.title}`} />
            <ol className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {project.architecture.map(({ step, detail }, index) => (
                <li key={step} className="rounded-lg border border-border bg-surface p-4">
                  <span className="font-mono text-xs text-accent">{String(index + 1).padStart(2, "0")}</span>
                  <h3 className="mt-3 text-sm font-semibold">{step}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{detail}</p>
                </li>
              ))}
            </ol>
            <p className="mt-4 text-sm leading-relaxed text-muted">{project.solution}</p>
          </section>

          <section aria-labelledby="evaluation">
            <h2 id="evaluation" className="font-mono text-sm uppercase tracking-wider text-accent">{text.evaluation}</h2>
            <div className="mt-5 space-y-3">
              {[
                [text.benchmark, text.cleanScans, text.cleanScansContext],
                [text.fineTune, text.fineTuneMeasure, text.cordContext],
                [text.vram, text.vramMeasure, text.vramContext],
                [text.roles, text.rolesMeasure, text.rolesContext],
              ].map(([protocol, measure, context]) => (
                <dl key={`${protocol}-${measure}`} className="grid gap-2 rounded-lg border border-border bg-surface p-4 sm:grid-cols-3 sm:gap-4">
                  <div><dt className="font-mono text-xs uppercase tracking-wider text-subtle">{text.protocol}</dt><dd className="mt-1 text-sm leading-relaxed text-fg">{protocol}</dd></div>
                  <div><dt className="font-mono text-xs uppercase tracking-wider text-subtle">{text.measure}</dt><dd className="mt-1 text-sm leading-relaxed text-fg">{measure}</dd></div>
                  <div><dt className="font-mono text-xs uppercase tracking-wider text-subtle">{text.contextColumn}</dt><dd className="mt-1 text-sm leading-relaxed text-muted">{context}</dd></div>
                </dl>
              ))}
            </div>
            <p className="mt-3 text-sm leading-relaxed text-muted">{text.evaluationExplanation}</p>
            <p className="mt-3 text-sm leading-relaxed text-muted">{text.unavailable}</p>
          </section>

          <section aria-labelledby="decisions">
            <h2 id="decisions" className="font-mono text-sm uppercase tracking-wider text-accent">{text.decisions}</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 leading-relaxed text-muted">
              {text.lessons.map((lesson) => <li key={lesson}>{lesson}</li>)}
            </ul>
          </section>
        </div>

        <footer className="border-t border-border pt-6 text-sm text-muted">
          <Link href={`mailto:${profile.email}`} className="text-accent hover:text-fg">{text.contact}</Link>
        </footer>
      </div>
    </main>
  );
}
