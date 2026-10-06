import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-8 text-xs text-subtle sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>
          © {profile.name}
        </p>
        <p className="font-mono">Built with Next.js · Tailwind CSS · Deployed on Vercel</p>
      </div>
    </footer>
  );
}
