import type { ReadonlyMetric } from '../data/mockData';

interface MetricCardProps {
  readonly metric: ReadonlyMetric;
}

export function MetricCard({ metric }: MetricCardProps) {
  return (
    <div className="bg-surface-container rounded-xl p-space-lg border border-outline-variant/20 hover:border-primary/40 transition-all duration-300 group">
      <div className="flex items-start justify-between mb-space-md">
        <div className="text-3xl">{metric.icon}</div>
        <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
      </div>
      <div className="font-display-hero text-on-surface text-3xl md:text-4xl mb-space-xs">
        {metric.value}
        {metric.unit && (
          <span className="text-primary text-xl md:text-2xl">{metric.unit}</span>
        )}
      </div>
      <div className="text-label-lg text-on-surface-variant uppercase tracking-wider mb-space-xs">
        {metric.label}
      </div>
    </div>
  );
}
