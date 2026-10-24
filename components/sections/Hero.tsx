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
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="bg-grid pointer-events-none absolute inset-0 -z-10" aria-hidden="true" />
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.25fr_1fr]">
        <div className="hero-enter">
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs text-muted">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-60 motion-reduce:hidden" />
              <span className="relative inline-flex size-2 rounded-full bg-accent" />
            </span>
            {localized.status}
          </p>

          <h1 className="text-4xl font-semibold tracking-tight text-fg sm:text-5xl lg:text-[3.4rem] lg:leading-[1.05]">
            {profile.name}
          </h1>
          <p className="mt-3 font-mono text-sm text-accent sm:text-base">{localized.role} · LLM fine-tuning · Document AI · Deep Learning</p>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">{localized.tagline}</p>

          <ul className="mt-6 flex flex-wrap gap-x-4 gap-y-2 font-mono text-xs text-subtle">
            {text.hero.focus.map((f) => (
              <li key={f} className="before:mr-2 before:text-accent before:content-['▹']">
                {f}
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-wrap gap-3">
            <ButtonLink href="#projects" variant="primary">
              {text.hero.projects} <ArrowDown className="size-4" />
            </ButtonLink>
            <ButtonLink href={resume} download={text.cvFile} variant="secondary">
              <FileDown className="size-4" /> {text.cv}
            </ButtonLink>
            <ButtonLink href={profile.github} external>
              <GithubIcon /> GitHub
            </ButtonLink>
            <ButtonLink href={profile.linkedin} external>
              <LinkedinIcon /> LinkedIn
            </ButtonLink>
            <ButtonLink href="#contact" variant="ghost">
              <Mail className="size-4" /> {text.hero.contact}
            </ButtonLink>
          </div>
          <dl className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {[
              { value: "100 %", label: text.hero.stats[0] },
              { value: "87 %", label: text.hero.stats[1] },
              { value: "6/6", label: text.hero.stats[2] },
              { value: locale === "en" ? "~0.94" : "~0,94", label: text.hero.stats[3] },
            ].map((stat) => (
              <div key={stat.label} className="rounded-lg border border-border bg-surface/80 px-3 py-3">
                <dd className="font-mono text-xl text-fg">{stat.value}</dd>
                <dt className="mt-1 text-xs leading-relaxed text-muted">{stat.label}</dt>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative hero-enter hero-enter-delay">
          <div className="rounded-2xl border border-border bg-surface/60 p-6 backdrop-blur-sm">
            <div className="mb-4 hidden items-center justify-between font-mono text-[11px] text-subtle lg:flex">
              <span>model.forward(x)</span>
              <span className="text-accent">● training</span>
            </div>
            <div className="flex items-center justify-center gap-4 lg:gap-0">
              <NeuralNet className="hidden h-auto w-1/2 lg:block" />
              <Image
                src="/aymane-badia.png"
                alt={text.hero.portrait}
                width={768}
                height={1024}
                className="h-auto w-full max-w-xs rounded-xl object-cover object-center ring-1 ring-border-strong lg:w-1/2 lg:max-w-none"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
