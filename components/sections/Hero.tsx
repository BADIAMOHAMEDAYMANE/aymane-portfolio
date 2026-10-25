import { ArrowDown, FileDown, Mail } from "lucide-react";
import Image from "next/image";
import { profile } from "@/data/profile";
import { ButtonLink } from "../ui/ButtonLink";
import { GithubIcon, LinkedinIcon } from "../ui/BrandIcons";
import { NeuralNet } from "../NeuralNet";
import { copy, localizedProfile, type Locale } from "@/data/i18n";

export function Hero({ locale }: { locale: Locale }) {
  const text = copy(locale);
  const localized = localizedProfile(locale);
  const resume = locale === "en" ? "/cv-en.pdf" : profile.resume;
  const caseStudy = locale === "en" ? "/en/projects/lama-credentialing" : "/projects/lama-credentialing";
  return (
    <section id="top" className="relative overflow-hidden pt-24 pb-16 sm:pt-28 sm:pb-20">
      <div className="bg-grid pointer-events-none absolute inset-0 -z-10" aria-hidden="true" />
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="hero-enter">
          <p className="mb-5 inline-flex min-h-11 items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-sm text-muted">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-60 motion-reduce:hidden" />
              <span className="relative inline-flex size-2 rounded-full bg-accent" />
            </span>
            {localized.status}
          </p>

          <h1 className="text-4xl font-semibold tracking-tight text-fg sm:text-5xl lg:text-[3.4rem] lg:leading-[1.05]">
            {profile.name}
          </h1>
          <p className="mt-3 font-mono text-sm text-muted sm:text-base">{localized.role}</p>

          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted sm:text-xl">{localized.tagline}</p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <ButtonLink href={resume} download={text.cvFile} variant="primary">
              <FileDown className="size-4" /> {text.cv}
            </ButtonLink>
            <ButtonLink href="#projects" variant="secondary">
              {text.hero.projects} <ArrowDown className="size-4" />
            </ButtonLink>
            <div className="flex items-center gap-1" role="group" aria-label={text.hero.socialLinks}>
              <ButtonLink
                href={profile.github}
                external
                variant="ghost"
                className="h-11 w-11 min-w-11 px-0"
                aria-label={text.githubProfile}
                title={text.githubProfile}
              >
                <GithubIcon />
              </ButtonLink>
              <ButtonLink
                href={profile.linkedin}
                external
                variant="ghost"
                className="h-11 w-11 min-w-11 px-0"
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                <LinkedinIcon />
              </ButtonLink>
              <ButtonLink
                href="#contact"
                variant="ghost"
                className="h-11 w-11 min-w-11 px-0"
                aria-label={text.hero.contact}
                title={text.hero.contact}
              >
                <Mail className="size-4" aria-hidden="true" />
              </ButtonLink>
            </div>
          </div>
          <dl className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {[
              { value: "100 %", label: text.hero.stats[0] },
              { value: "87 %", label: text.hero.stats[1] },
              { value: locale === "en" ? "~0.94" : "~0,94", label: text.hero.stats[2] },
            ].map((stat, index) => (
              <div key={stat.label} className={`rounded-lg border border-border bg-surface/80 px-4 py-3 ${index === 2 ? "col-span-2 sm:col-span-1" : ""}`}>
                <dd className="font-mono text-xl font-medium text-fg">{stat.value}</dd>
                <dt className="mt-1 text-sm leading-relaxed text-muted">{stat.label}</dt>
              </div>
            ))}
          </dl>
          <a href={`${caseStudy}#evaluation`} className="mt-3 inline-flex min-h-11 items-center text-sm font-medium text-accent underline decoration-accent/50 underline-offset-4 hover:text-fg">
            {text.hero.method}
          </a>
        </div>

        <div className="relative flex justify-center hero-enter hero-enter-delay">
          <div aria-hidden="true" className="pointer-events-none absolute inset-8 rounded-full bg-accent/10 blur-3xl" />
          <div aria-hidden="true" className="pointer-events-none absolute -right-8 top-1/2 z-0 hidden w-[90%] -translate-y-1/2 opacity-20 lg:block">
            <NeuralNet className="h-auto w-full" />
          </div>
          <div className="relative z-10 aspect-[4/5] w-full max-w-[24rem] overflow-hidden rounded-2xl border border-border-strong bg-surface shadow-2xl shadow-accent/10">
            <Image
              src="/aymane-badia.png"
              alt={text.hero.portrait}
              width={768}
              height={1024}
              sizes="(min-width: 1024px) 24rem, (min-width: 640px) 55vw, 100vw"
              className="absolute inset-0 size-full object-cover object-[center_38%]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
