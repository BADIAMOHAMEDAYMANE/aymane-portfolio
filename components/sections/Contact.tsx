import { ArrowUpRight, FileText, Mail } from "lucide-react";
import { profile } from "@/data/profile";
import { GithubIcon, LinkedinIcon } from "../ui/BrandIcons";
import { ButtonLink } from "../ui/ButtonLink";
import { Reveal } from "../ui/Reveal";
import { Section } from "../ui/Section";

export function Contact() {
  const channels = [
    { label: "Email", value: profile.email, href: `mailto:${profile.email}`, icon: <Mail className="size-4" />, external: false },
    { label: "LinkedIn", value: "mohamed-aymane-badia", href: profile.linkedin, icon: <LinkedinIcon />, external: true },
    { label: "GitHub", value: profile.githubUsername, href: profile.github, icon: <GithubIcon />, external: true },
  ];

  return (
    <Section
      id="contact"
      index="06"
      eyebrow="Contact"
      title="Échangeons"
      intro="Je recherche un stage PFE de six mois en IA, Machine Learning ou Data Science. Le PFA de 8 semaines chez Lama Healthcare est une expérience antérieure, distincte de cette recherche."
    >
      <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr] [&>*]:min-w-0">
        <Reveal className="flex flex-col justify-between gap-8 rounded-xl border border-border bg-surface p-6 sm:p-8">
          <p className="text-lg leading-relaxed text-fg">
            Pour parler d’un stage ou d’un projet, contactez-moi par email ou sur LinkedIn.
          </p>
          <div className="flex flex-wrap gap-3">
            <ButtonLink href={`mailto:${profile.email}`} variant="primary">
              <Mail className="size-4" /> Envoyer un email
            </ButtonLink>
            <ButtonLink href={profile.resume} download="Mohamed-Aymane-Badia-CV-FR.pdf">
              <FileText className="size-4" /> Télécharger mon CV
            </ButtonLink>
            {(profile.location || profile.lookingFor.start || profile.lookingFor.mobility) && (
              <p className="w-full text-sm text-muted">
                {[profile.location, profile.lookingFor.start && `Disponible à partir de ${profile.lookingFor.start}`, profile.lookingFor.mobility && `Mobilité : ${profile.lookingFor.mobility}`].filter(Boolean).join(" · ")}
              </p>
            )}
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <ul className="divide-y divide-border overflow-hidden rounded-xl border border-border bg-surface">
            {channels.map((c) => (
              <li key={c.label}>
                <a
                  href={c.href}
                  {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="group flex items-center gap-4 px-6 py-5 transition-colors hover:bg-surface-2"
                >
                  <span className="grid size-10 shrink-0 place-items-center rounded-lg border border-border-strong text-muted group-hover:text-accent">
                    {c.icon}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-mono text-[11px] uppercase tracking-wider text-muted">{c.label}</span>
                    <span className="block truncate text-sm text-fg">{c.value}</span>
                  </span>
                  <ArrowUpRight className="size-4 shrink-0 text-subtle transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-fg" />
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}
