import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

type Props = {
  id: string;
  index?: string;
  eyebrow: string;
  title: string;
  intro?: string;
  className?: string;
  children: React.ReactNode;
};

export function Section({ id, index, eyebrow, title, intro, className, children }: Props) {
  return (
    <section id={id} className={cn("border-t border-border py-20 sm:py-28", className)}>
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <header className="mb-12 max-w-2xl">
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.18em] text-accent">
              {index && <span className="text-subtle">{index} / </span>}
              {eyebrow}
            </p>
            <h2 className="text-2xl font-semibold tracking-tight text-fg sm:text-3xl">{title}</h2>
            {intro && <p className="mt-4 text-[15px] leading-relaxed text-muted">{intro}</p>}
          </header>
        </Reveal>
        {children}
      </div>
    </section>
  );
}
