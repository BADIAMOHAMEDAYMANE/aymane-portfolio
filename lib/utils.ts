export function cn(...classes: (string | false | null | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

export const navLinks = [
  { href: "#about", key: "about" },
  { href: "#projects", key: "projects" },
  { href: "#skills", key: "skills" },
  { href: "#experience", key: "experience" },
  { href: "#github", key: "github" },
  { href: "#contact", key: "contact" },
] as const;
