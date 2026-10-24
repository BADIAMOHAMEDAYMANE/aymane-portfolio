"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { ArrowUp, FileDown, Menu, Moon, Sun, X } from "lucide-react";
import { navLinks, cn } from "@/lib/utils";
import { profile } from "@/data/profile";
import { copy, type Locale } from "@/data/i18n";
import { GithubIcon } from "./ui/BrandIcons";

type Theme = "dark" | "light";

function subscribeTheme(cb: () => void) {
  const obs = new MutationObserver(cb);
  obs.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
  return () => obs.disconnect();
}
const getTheme = (): Theme => (document.documentElement.dataset.theme === "light" ? "light" : "dark");
const getServerTheme = (): Theme => "dark";

export function Navbar({ locale, languageHref }: { locale: Locale; languageHref: string }) {
  const text = copy(locale);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const theme = useSyncExternalStore(subscribeTheme, getTheme, getServerTheme);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map(({ href }) => document.querySelector(href))
      .filter((section): section is Element => section !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-20% 0px -65% 0px", threshold: [0, 0.25, 0.5, 0.75] },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    if (next === "light") document.documentElement.dataset.theme = "light";
    else delete document.documentElement.dataset.theme;
    try {
      localStorage.setItem("theme", next);
    } catch (error) {
      console.warn("Unable to save the theme preference.", error);
    }
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,border-color] duration-300",
        scrolled || open ? "border-b border-border bg-bg/80 backdrop-blur-md" : "border-b border-transparent",
      )}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-5 sm:px-8" aria-label={text.navigation.main}>
        <a href="#top" className="flex shrink-0 items-center gap-2.5 whitespace-nowrap text-sm font-semibold tracking-tight text-fg">
          <span aria-hidden="true" className="grid size-8 place-items-center rounded-md border border-border-strong bg-surface font-mono text-xs text-accent">
            {profile.initials}
          </span>
          <span className="hidden sm:inline">{profile.name}</span>
        </a>

        <ul className="hidden shrink-0 items-center gap-0.5 lg:flex">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                aria-current={active === l.href ? "location" : undefined}
                className={`flex min-h-11 items-center whitespace-nowrap rounded-md px-2 text-sm transition-colors hover:text-fg ${active === l.href ? "text-accent" : "text-muted"}`}
              >
                {text.navigation[l.key]}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-1">
          <a
            href={locale === "en" ? "/cv-en.pdf" : profile.resume}
            download={text.cvFile}
            aria-label={text.cv}
            className="inline-flex min-h-11 shrink-0 items-center gap-1.5 whitespace-nowrap rounded-md px-2 text-sm text-accent transition-colors hover:bg-accent-soft hover:text-fg sm:px-3"
          >
            <FileDown className="size-4" aria-hidden="true" />
            <span className="hidden xl:inline">{text.cv}</span>
            <span className="xl:hidden">{text.cvShort}</span>
          </a>
          <a
            href={languageHref}
            lang={locale === "en" ? "fr" : "en"}
            aria-label={text.switchTo}
            className="grid min-h-11 min-w-11 shrink-0 place-items-center rounded-md px-2 font-mono text-xs font-semibold text-accent transition-colors hover:bg-accent-soft hover:text-fg"
          >
            {locale === "en" ? "FR" : "EN"}
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={text.githubProfile}
            className="grid size-11 shrink-0 place-items-center rounded-md text-muted transition-colors hover:bg-surface-2 hover:text-fg"
          >
            <GithubIcon />
          </a>
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={`${locale === "en" ? "Switch to" : "Passer au thème"} ${theme === "dark" ? text.themeLight : text.themeDark}`}
            className="grid size-11 shrink-0 place-items-center rounded-md text-muted transition-colors hover:bg-surface-2 hover:text-fg"
          >
            {theme === "dark" ? <Sun className="size-4" /> : <Moon className="size-4" />}
          </button>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? text.closeMenu : text.openMenu}
            aria-expanded={open}
            aria-controls={open ? "mobile-menu" : undefined}
            className="grid size-11 shrink-0 place-items-center rounded-md text-fg lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div id="mobile-menu" className="h-[calc(100dvh-4rem)] border-t border-border bg-bg lg:hidden">
          <ul className="flex flex-col px-5 py-4">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  aria-current={active === l.href ? "location" : undefined}
                  className={`flex items-center justify-between border-b border-border py-4 text-lg ${active === l.href ? "text-accent" : "text-fg"}`}
                >
                  {text.navigation[l.key]}
                  <span className="font-mono text-xs text-subtle">{l.href.slice(1)}</span>
                </a>
              </li>
            ))}
            <li>
              <a
                href={locale === "en" ? "/cv-en.pdf" : profile.resume}
                download={text.cvFile}
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 py-5 text-lg text-accent"
              >
                <FileDown className="size-5" aria-hidden="true" /> {text.cv}
              </a>
            </li>
          </ul>
        </div>
      )}
      {scrolled && (
        <button
          type="button"
          onClick={() => window.scrollTo({
            top: 0,
            behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
          })}
          aria-label={text.backToTop}
          className="fixed right-5 bottom-5 z-40 grid size-11 place-items-center rounded-full border border-border-strong bg-surface text-fg shadow-lg transition-colors hover:border-accent hover:text-accent sm:right-8"
        >
          <ArrowUp className="size-4" aria-hidden="true" />
        </button>
      )}
    </header>
  );
}
