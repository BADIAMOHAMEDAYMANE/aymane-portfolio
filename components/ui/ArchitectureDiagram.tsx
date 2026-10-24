import { useId } from "react";

type Step = { step: string; detail: string };

const nodes = [
  { x: 16, y: 34 },
  { x: 196, y: 34 },
  { x: 196, y: 178 },
  { x: 16, y: 178 },
  { x: 16, y: 322 },
  { x: 196, y: 322 },
];

export function ArchitectureDiagram({ steps, label }: { steps: Step[]; label: string }) {
  const id = useId().replace(/:/g, "");
  const titleId = `${id}-title`;
  const descriptionId = `${id}-description`;
  const arrowId = `${id}-arrow`;

  return (
    <figure className="rounded-xl border border-border bg-surface p-3 sm:p-5">
      <svg
        viewBox="0 0 360 428"
        role="img"
        aria-labelledby={titleId}
        aria-describedby={descriptionId}
        className="mx-auto block h-auto w-full max-w-sm"
      >
        <title id={titleId}>{label}</title>
        <desc id={descriptionId}>{steps.map((step) => step.step).join(" → ")}</desc>
        <defs>
          <marker
            id={arrowId}
            markerWidth="8"
            markerHeight="8"
            refX="6"
            refY="4"
            orient="auto"
            markerUnits="strokeWidth"
          >
            <path d="M0,0 L8,4 L0,8 z" fill="var(--accent)" />
          </marker>
        </defs>

        <g fill="none" markerEnd={`url(#${arrowId})`} stroke="var(--accent)" strokeWidth="2">
          <path d="M164 70 H190" />
          <path d="M270 106 V172" />
          <path d="M196 214 H170" />
          <path d="M90 250 V316" />
          <path d="M164 358 H190" />
        </g>

        {steps.slice(0, nodes.length).map(({ step }, index) => {
          const node = nodes[index];
          if (!node) return null;
          return (
            <g key={`${index}-${step}`}>
              <rect
                x={node.x}
                y={node.y}
                width="148"
                height="72"
                rx="12"
                fill="var(--surface-2)"
                stroke="var(--border-strong)"
              />
              <circle cx={node.x + 20} cy={node.y + 20} r="11" fill="var(--accent)" />
              <text
                x={node.x + 20}
                y={node.y + 24}
                fill="var(--accent-fg)"
                fontFamily="var(--font-mono), monospace"
                fontSize="11"
                fontWeight="700"
                textAnchor="middle"
              >
                {String(index + 1).padStart(2, "0")}
              </text>
              <text
                x={node.x + 74}
                y={node.y + 48}
                fill="var(--fg)"
                fontFamily="var(--font-sans), sans-serif"
                fontSize="14"
                fontWeight="600"
                textAnchor="middle"
              >
                {step}
              </text>
            </g>
          );
        })}
      </svg>
      <figcaption className="sr-only">{label}</figcaption>
    </figure>
  );
}
