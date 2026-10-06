import { ArrowDown, Mail } from "lucide-react";
import Image from "next/image";
import { profile } from "@/data/profile";
import { ButtonLink } from "../ui/ButtonLink";
import { GithubIcon, LinkedinIcon } from "../ui/BrandIcons";
import { NeuralNet } from "../NeuralNet";

const focus = ["Machine Learning", "Deep Learning", "NLP", "LLM Fine-tuning", "Computer Vision"];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="bg-grid pointer-events-none absolute inset-0 -z-10" aria-hidden="true" />
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.25fr_1fr]">
        <div>
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs text-muted">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-60 motion-reduce:hidden" />
              <span className="relative inline-flex size-2 rounded-full bg-accent" />
            </span>
            {profile.status}
          </p>

          <h1 className="text-4xl font-semibold tracking-tight text-fg sm:text-5xl lg:text-[3.4rem] lg:leading-[1.05]">
            {profile.name}
          </h1>
          <p className="mt-3 font-mono text-sm text-accent sm:text-base">{profile.role}</p>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">{profile.tagline}</p>

          <ul className="mt-6 flex flex-wrap gap-x-4 gap-y-2 font-mono text-xs text-subtle">
            {focus.map((f) => (
              <li key={f} className="before:mr-2 before:text-accent before:content-['▹']">
                {f}
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-wrap gap-3">
            <ButtonLink href="#projects" variant="primary">
              View Projects <ArrowDown className="size-4" />
            </ButtonLink>
            <ButtonLink href={profile.github} external>
              <GithubIcon /> GitHub
            </ButtonLink>
            <ButtonLink href={profile.linkedin} external>
              <LinkedinIcon /> LinkedIn
            </ButtonLink>
            <ButtonLink href="#contact" variant="ghost">
              <Mail className="size-4" /> Contact
            </ButtonLink>
          </div>
        </div>

        <div className="relative">
          <div className="rounded-2xl border border-border bg-surface/60 p-6 backdrop-blur-sm">
            <div className="mb-4 hidden items-center justify-between font-mono text-[11px] text-subtle lg:flex">
              <span>model.forward(x)</span>
              <span className="text-accent">● training</span>
            </div>
            <div className="flex items-center justify-center gap-4 lg:gap-0">
              <NeuralNet className="hidden h-auto w-1/2 lg:block" />
              <Image
                src="/aymane-badia.png"
                alt="Portrait de Mohamed Aymane Badia"
                width={768}
                height={1024}
                className="h-auto w-full max-w-xs rounded-xl object-cover lg:w-1/2 lg:max-w-none"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
