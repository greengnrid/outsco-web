import type { ReadonlyPillar } from '../data/mockData';

interface PillarCardProps {
  readonly pillar: ReadonlyPillar;
}

const pillarColors: Record<string, string> = {
  'Progress': '#6366f1',
  'Discipline': '#10b981',
  'Connection': '#f59e0b',
  'Inspiration': '#ef4444',
};

export function PillarCard({ pillar }: PillarCardProps) {
  const color = pillarColors[pillar.name] ?? '#6366f1';

  return (
    <div className="bg-surface-container rounded-xl p-space-lg border border-outline-variant/20 hover:border-primary/40 transition-all duration-300 group">
      <div className="flex items-center gap-space-md mb-space-md">
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
          style={{ backgroundColor: `${color}20` }}
        >
          <span style={{ color }}>{pillar.number}</span>
        </div>
        <div>
          <h3 className="font-headline-md text-on-surface text-lg">{pillar.name}</h3>
          <p className="text-label-md text-on-surface-variant/60 uppercase tracking-wider">Pilar {pillar.number}</p>
        </div>
      </div>

      <p className="text-body-md text-on-surface-variant mb-space-lg leading-relaxed">
        {pillar.description}
      </p>

      <div className="space-y-space-xs">
        <div className="flex justify-between items-center">
          <span className="text-label-sm text-on-surface-variant">Focus Modules</span>
          <span className="text-label-md text-primary">{pillar.focusModules.length}</span>
        </div>
        <div className="w-full h-2 bg-surface-container-high rounded-full overflow-hidden">
          <div
            className="h-full rounded-full transition-all duration-500"
            style={{ width: '100%', backgroundColor: color }}
          />
        </div>
      </div>
    </div>
  );
}
