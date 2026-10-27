const tiles = [
  { x: 0, y: 0 },
  { x: 12, y: 0 },
  { x: 0, y: 10.5 },
  { x: 12, y: 10.5 },
];

const tileDelayMs = 50;

export function MenuGridIcon() {
  return (
    <svg viewBox="0 0 22 19" fill="currentColor" className="w-6 motion-safe:animate-menu-grid-in" aria-hidden>
      {tiles.map((tile, index) => (
        <rect
          key={index}
          x={tile.x}
          y={tile.y}
          width={10}
          height={8.5}
          rx={2}
          style={{ animationDelay: `${index * tileDelayMs}ms` }}
          className="origin-center transform-fill motion-safe:animate-tile-pop"
        />
      ))}
    </svg>
  );
}
