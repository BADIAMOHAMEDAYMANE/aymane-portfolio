import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { lamaHealthcare } from "@/data/projects";
import { profile } from "@/data/profile";
import { Tag } from "@/components/ui/Tag";

export const metadata: Metadata = {
  title: "Credentialing & Document AI · Étude de cas",
  description:
    "Étude de cas du PFA chez Lama Healthcare : plateforme de credentialing, pipeline Document AI et évaluation réalisée sur le dataset public CORD.",
};

const architecture = [
  ["Document", "Dépôt du document par le professionnel via un lien sécurisé"],
  ["Extraction", "Modèle spécialisé : champs structurés et éléments de preuve OCR"],
  ["Vérification", "Second contrôle automatisé des champs extraits"],
  ["Validation humaine", "Relecture obligatoire avant toute sauvegarde"],
  ["Traçabilité", "Accès contrôlé par cabinet et journal d'audit"],
];

export default function LamaCredentialingCaseStudy() {
  return (
    <main className="min-h-dvh bg-bg text-fg">
      <div className="mx-auto max-w-4xl px-5 py-16 sm:px-8 sm:py-24">
        <Link href="/#projects" className="inline-flex items-center gap-2 text-sm text-muted hover:text-fg">
          <ArrowLeft className="size-4" aria-hidden="true" /> Retour aux projets
        </Link>

        <header className="mt-10 border-b border-border pb-10">
          <p className="font-mono text-xs uppercase tracking-widest text-accent">PFA · 8 semaines · Équipe de 3</p>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">{lamaHealthcare.title}</h1>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-muted">
            {lamaHealthcare.tagline} Cette expérience de projet de fin d’année (PFA) ne correspond pas au stage PFE de six mois recherché.
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
            <ol className="mt-5 grid gap-3 sm:grid-cols-5">
              {architecture.map(([title, detail], index) => (
                <li key={title} className="rounded-lg border border-border bg-surface p-4">
                  <span className="font-mono text-xs text-accent">{String(index + 1).padStart(2, "0")}</span>
                  <h3 className="mt-3 text-sm font-semibold">{title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted">{detail}</p>
                </li>
              ))}
            </ol>
            <p className="mt-4 text-sm leading-relaxed text-muted">{lamaHealthcare.solution}</p>
          </section>

          <section aria-labelledby="evaluation">
            <h2 id="evaluation" className="font-mono text-sm uppercase tracking-wider text-accent">Méthodologie d’évaluation</h2>
            <div className="mt-5 overflow-x-auto rounded-lg border border-border">
              <table className="w-full min-w-[620px] text-left text-sm">
                <thead className="bg-surface text-muted">
                  <tr><th className="px-4 py-3 font-medium">Protocole</th><th className="px-4 py-3 font-medium">Mesure</th><th className="px-4 py-3 font-medium">Contexte</th></tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr>
                    <th scope="row" className="px-4 py-3 font-medium">Comparatif de 4 modèles vision-langage</th>
                    <td className="px-4 py-3">~0,94 de rappel des champs</td>
                    <td className="px-4 py-3 text-muted">Scans propres · 180 observations par modèle</td>
                  </tr>
                  <tr>
                    <th scope="row" className="px-4 py-3 font-medium">Fine-tuning Qwen3-1.7B + LoRA</th>
                    <td className="px-4 py-3">100 % JSON valide (60/60) ; 87 % des champs corrects (124/143)</td>
                    <td className="px-4 py-3 text-muted">Dataset public CORD · jamais de données patient réelles</td>
                  </tr>
                </tbody>
              </table>
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
