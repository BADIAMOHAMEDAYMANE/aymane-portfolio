import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { localizedFeatured, copy } from "@/data/i18n";
import { profile } from "@/data/profile";
import { Tag } from "@/components/ui/Tag";

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

const architecture = [
  ["Document", "Provider uploads a document through a secure link"],
  ["Extraction", "Specialized model returns structured fields and OCR evidence"],
  ["Verification", "A second automated check reviews extracted fields"],
  ["Human validation", "Mandatory review before any data is saved"],
  ["Auditability", "Practice-scoped access and an audit log"],
];

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
            {project.tagline} {text.pfaNote}
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
            <ol className="mt-5 grid gap-3 sm:grid-cols-5">
              {architecture.map(([title, detail], index) => (
                <li key={title} className="rounded-lg border border-border bg-surface p-4">
                  <span className="font-mono text-xs text-accent">{String(index + 1).padStart(2, "0")}</span>
                  <h3 className="mt-3 text-sm font-semibold">{title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted">{detail}</p>
                </li>
              ))}
            </ol>
            <p className="mt-4 text-sm leading-relaxed text-muted">{project.solution}</p>
          </section>

          <section aria-labelledby="evaluation">
            <h2 id="evaluation" className="font-mono text-sm uppercase tracking-wider text-accent">{text.evaluation}</h2>
            <div className="mt-5 overflow-x-auto rounded-lg border border-border">
              <table className="w-full min-w-[620px] text-left text-sm">
                <thead className="bg-surface text-muted">
                  <tr><th className="px-4 py-3 font-medium">{text.protocol}</th><th className="px-4 py-3 font-medium">{text.measure}</th><th className="px-4 py-3 font-medium">{text.contextColumn}</th></tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr>
                    <th scope="row" className="px-4 py-3 font-medium">{text.benchmark}</th>
                    <td className="px-4 py-3">{text.cleanScans}</td>
                    <td className="px-4 py-3 text-muted">{text.cleanScansContext}</td>
                  </tr>
                  <tr>
                    <th scope="row" className="px-4 py-3 font-medium">{text.fineTune}</th>
                    <td className="px-4 py-3">{text.fineTuneMeasure}</td>
                    <td className="px-4 py-3 text-muted">{text.cordContext}</td>
                  </tr>
                </tbody>
              </table>
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
