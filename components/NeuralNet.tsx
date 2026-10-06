// Lightweight, static SVG of a small neural network. Animated with CSS only.
const layers = [3, 5, 5, 2];
const W = 360;
const H = 280;

function nodes() {
  return layers.map((count, li) => {
    const x = 40 + (li * (W - 80)) / (layers.length - 1);
    return Array.from({ length: count }, (_, ni) => ({
      x,
      y: H / 2 + (ni - (count - 1) / 2) * 48,
    }));
  });
}

export function NeuralNet({ className }: { className?: string }) {
  const n = nodes();
  const edges: { x1: number; y1: number; x2: number; y2: number; active: boolean }[] = [];
  n.slice(0, -1).forEach((layer, li) =>
    layer.forEach((a, ai) =>
      n[li + 1].forEach((b, bi) => edges.push({ x1: a.x, y1: a.y, x2: b.x, y2: b.y, active: (ai + bi + li) % 4 === 0 })),
    ),
  );

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className={className} role="img" aria-label="Neural network illustration">
      <g strokeWidth="1">
        {edges.map((e, i) => (
          <line
            key={i}
            x1={e.x1}
            y1={e.y1}
            x2={e.x2}
            y2={e.y2}
            stroke={e.active ? "var(--accent)" : "var(--border-strong)"}
            strokeOpacity={e.active ? 0.7 : 0.6}
            className={e.active ? "nn-edge-active" : undefined}
          />
        ))}
      </g>
      {n.flat().map((p, i) => (
        <g key={i}>
          <circle cx={p.x} cy={p.y} r="9" fill="var(--surface)" stroke="var(--border-strong)" />
          <circle
            cx={p.x}
            cy={p.y}
            r="3.5"
            fill="var(--accent)"
            className="nn-node"
            style={{ animationDelay: `${(i * 0.37) % 3}s` }}
          />
        </g>
      ))}
      <g fontFamily="var(--font-mono)" fontSize="9" fill="var(--subtle)" textAnchor="middle">
        <text x={n[0][0].x} y={H - 6}>input</text>
        <text x={n[1][0].x} y={H - 6}>hidden</text>
        <text x={n[2][0].x} y={H - 6}>hidden</text>
        <text x={n[3][0].x} y={H - 6}>output</text>
      </g>
    </svg>
  );
}
