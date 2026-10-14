import { profile } from "@/data/profile";
import { copy, type Locale } from "@/data/i18n";

export function Footer({ locale }: { locale: Locale }) {
  const text = copy(locale);
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-8 text-xs text-subtle sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>
          © {profile.name}
        </p>
        <p className="font-mono">{text.footer}</p>
      </div>
    </footer>
  );
}
