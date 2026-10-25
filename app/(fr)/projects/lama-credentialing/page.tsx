import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { lamaHealthcare } from "@/data/projects";
import { profile } from "@/data/profile";
import { Tag } from "@/components/ui/Tag";
import { ArchitectureDiagram } from "@/components/ui/ArchitectureDiagram";

export const metadata: Metadata = {
  title: "Credentialing & Document AI · Étude de cas",
  description:
    "Étude de cas du PFA chez Lama Healthcare : plateforme de credentialing, pipeline Document AI et évaluation réalisée sur le dataset public CORD.",
  ...(profile.siteUrl ? {
    alternates: {
      canonical: "/projects/lama-credentialing",
      languages: {
        fr: "/projects/lama-credentialing",
        en: "/en/projects/lama-credentialing",
      },
    },
    openGraph: { url: `${profile.siteUrl}/projects/lama-credentialing` },
  } : {}),
};

export default function LamaCredentialingCaseStudy() {
  return (
    <main className="min-h-dvh bg-bg text-fg">
      <div className="mx-auto max-w-4xl px-5 py-16 sm:px-8 sm:py-24">
        <Link href="/#projects" className="inline-flex items-center gap-2 text-sm text-muted hover:text-fg">
          <ArrowLeft className="size-4" aria-hidden="true" /> Retour aux projets
        </Link>
        <Link href="/en/projects/lama-credentialing" lang="en" className="ml-6 font-mono text-xs text-accent hover:text-fg">
          EN
        </Link>

        <header className="mt-10 border-b border-border pb-10">
          <p className="font-mono text-xs uppercase tracking-widest text-accent">PFA · 8 semaines · Équipe de 3</p>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">{lamaHealthcare.title}</h1>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-muted">
            {lamaHealthcare.tagline}
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {lamaHealthcare.stack.map((technology) => <Tag key={technology}>{technology}</Tag>)}
          </div>
        </header>

        <div className="space-y-12 py-10">
          <section aria-labelledby="context">
            <h2 id="context" className="font-mono text-sm uppercase tracking-wider text-accent">Contexte & contribution</h2>
            <p className="mt-4 leading-relaxed text-muted">{lamaHealthcare.problem}</p>
            <p className="mt-4 leading-relaxed text-muted">
              Contribution personnelle : conception et réalisation du front-end, composants réutilisables et interfaces du portail ; participation aux expérimentations d’extraction documentaire et au fine-tuning LoRA. Travail réalisé au sein d’une équipe de trois.
            </p>
          </section>

          <section aria-labelledby="architecture">
            <h2 id="architecture" className="font-mono text-sm uppercase tracking-wider text-accent">Architecture du flux documentaire</h2>
            <ArchitectureDiagram
              steps={lamaHealthcare.architecture}
              label="Flux d'architecture de la plateforme de credentialing et d'extraction documentaire"
            />
            <ol className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {lamaHealthcare.architecture.map(({ step, detail }, index) => (
                <li key={step} className="rounded-lg border border-border bg-surface p-4">
                  <span className="font-mono text-xs text-accent">{String(index + 1).padStart(2, "0")}</span>
                  <h3 className="mt-3 text-sm font-semibold">{step}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{detail}</p>
                </li>
              ))}
            </ol>
            <p className="mt-4 text-sm leading-relaxed text-muted">{lamaHealthcare.solution}</p>
          </section>

          <section aria-labelledby="evaluation">
            <h2 id="evaluation" className="font-mono text-sm uppercase tracking-wider text-accent">Méthodologie d’évaluation</h2>
            <div className="mt-5 space-y-3">
              {[
                ["Comparatif de 4 modèles vision-langage", "~0,94 de rappel des champs", "Scans propres · 180 observations par modèle"],
                ["Fine-tuning Qwen3-1.7B + LoRA", "100 % JSON valide (60/60) ; 87 % des champs corrects (124/143)", "Dataset public CORD · jamais de données patient réelles"],
                ["Fine-tuning Qwen3-1.7B + LoRA", "3,3 Go de VRAM au pic", "GPU Tesla T4"],
                ["Contrôles d'accès par rôle", "6 / 6 rôles validés", "Tests d'accès"],
              ].map(([protocol, measure, context]) => (
                <dl key={protocol + measure} className="grid gap-2 rounded-lg border border-border bg-surface p-4 sm:grid-cols-3 sm:gap-4">
                  <div><dt className="font-mono text-xs uppercase tracking-wider text-subtle">Protocole</dt><dd className="mt-1 text-sm leading-relaxed text-fg">{protocol}</dd></div>
                  <div><dt className="font-mono text-xs uppercase tracking-wider text-subtle">Mesure</dt><dd className="mt-1 text-sm leading-relaxed text-fg">{measure}</dd></div>
                  <div><dt className="font-mono text-xs uppercase tracking-wider text-subtle">Contexte</dt><dd className="mt-1 text-sm leading-relaxed text-muted">{context}</dd></div>
                </dl>
              ))}
            </div>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Ces résultats proviennent de protocoles et de jeux d’évaluation différents : le rappel d’environ 0,94 concerne les scans propres du benchmark de modèles ; la proportion de champs corrects est mesurée sur CORD après fine-tuning. Ils ne sont pas directement comparables.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Le benchmark détaillé modèle par modèle et les points de la courbe d’entraînement LoRA ne sont pas disponibles pour publication dans les informations fournies ; aucun score ou tracé individuel n’est extrapolé ici.
            </p>
          </section>

          <section aria-labelledby="decisions">
            <h2 id="decisions" className="font-mono text-sm uppercase tracking-wider text-accent">Décisions, limites & apprentissages</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 leading-relaxed text-muted">
              <li>Garder une validation humaine avant l’enregistrement : l’extraction automatique assiste le processus, elle ne remplace pas la revue.</li>
              <li>Utiliser uniquement CORD, un dataset public, pour rapporter les résultats d’extraction ; aucune donnée de santé réelle n’est publiée.</li>
              <li>La mesure de rappel sur scans propres ne représente pas nécessairement la robustesse sur des photos ou documents dégradés.</li>
              <li>Les chiffres disponibles ne suffisent pas à comparer les quatre modèles sans leurs scores individuels et un protocole complet commun.</li>
              <li>La capture du dashboard reste masquée jusqu’à confirmation explicite de l’autorisation de publication et de l’absence de données réelles.</li>
            </ul>
          </section>
        </div>

        <footer className="border-t border-border pt-6 text-sm text-muted">
          <Link href={`mailto:${profile.email}`} className="text-accent hover:text-fg">Me contacter au sujet de cette étude</Link>
        </footer>
      </div>
    </main>
  );
}
