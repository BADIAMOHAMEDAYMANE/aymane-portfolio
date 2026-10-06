import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";

const styles: Record<Variant, string> = {
  primary: "bg-accent text-accent-fg hover:opacity-90",
  secondary: "border border-border-strong bg-surface text-fg hover:border-subtle",
  ghost: "text-muted hover:text-fg",
};

type Props = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: Variant;
  size?: "sm" | "md";
  external?: boolean;
};

export function ButtonLink({ variant = "secondary", size = "md", external, className, children, ...rest }: Props) {
  return (
    <a
      {...rest}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-[opacity,border-color,color] duration-200",
        size === "md" ? "h-10 px-4 text-sm" : "h-8 px-3 text-[13px]",
        styles[variant],
        className,
      )}
    >
      {children}
    </a>
  );
}
