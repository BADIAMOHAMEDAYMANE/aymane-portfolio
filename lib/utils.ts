export function cn(...classes: (string | false | null | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
] as const;

/** True when a value is still a [PLACEHOLDER]. */
export const isPlaceholder = (v?: string) => !!v && /\[[^\]]+\]/.test(v);
