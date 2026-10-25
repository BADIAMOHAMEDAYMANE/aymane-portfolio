import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";

const styles: Record<Variant, string> = {
  primary: "bg-accent text-accent-fg hover:brightness-95 active:brightness-90",
  secondary: "border border-control-border bg-surface text-fg hover:border-accent hover:bg-accent-soft active:bg-surface-2",
  ghost: "text-muted hover:bg-surface-2 hover:text-fg active:bg-surface",
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
        "inline-flex min-h-11 items-center justify-center gap-2 rounded-lg font-medium transition-[background-color,border-color,color,filter] duration-200",
        size === "md" ? "px-4 text-sm" : "px-3 text-sm",
        styles[variant],
        className,
      )}
    >
      {children}
    </a>
  );
}
