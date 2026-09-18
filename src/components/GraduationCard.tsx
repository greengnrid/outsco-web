import type { ReadonlyGraduationRequirement } from '../data/mockData';

interface GraduationCardProps {
  readonly data: ReadonlyGraduationRequirement;
}

export function GraduationCard({ data }: GraduationCardProps) {
  const percentage = Math.min((data.current / data.target) * 100, 100);
  const statusColors: Record<string, string> = {
    'green': 'bg-tertiary',
    'yellow': 'bg-primary',
    'red': 'bg-error',
  };
  const statusLabels: Record<string, string> = {
    'green': 'Tercapai',
    'yellow': 'On Track',
    'red': 'Perlu Perhatian',
  };

  return (
    <div className="bg-surface-container rounded-xl p-space-lg border border-outline-variant/20">
      <div className="flex items-center justify-between mb-space-md">
        <h4 className="font-headline-sm text-on-surface">{data.title}</h4>
        <span className={`px-space-sm py-1 rounded-full text-label-sm text-white ${statusColors[data.status]}`}>
          {statusLabels[data.status]}
        </span>
      </div>

      <div className="flex items-baseline gap-space-sm mb-space-md">
        <span className="font-display-hero text-on-surface text-3xl">
          {data.current}
        </span>
        <span className="text-body-md text-on-surface-variant">
          / {data.target} {data.unit}
        </span>
      </div>

      <div className="w-full h-2 bg-surface-container-high rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full transition-all duration-500 ${statusColors[data.status]}`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
