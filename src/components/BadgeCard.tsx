import type { ReadonlyBadge } from '../data/mockData';

interface BadgeCardProps {
  readonly badge: ReadonlyBadge;
}

export function BadgeCard({ badge }: BadgeCardProps) {
  return (
    <div className={`bg-surface-container rounded-xl p-space-md border transition-all duration-300 ${
      badge.unlocked
        ? 'border-primary/30 hover:border-primary/60'
        : 'border-outline-variant/10 opacity-50'
    }`}>
      <div className="flex items-center gap-space-md">
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl ${
          badge.unlocked ? 'bg-primary-container/20' : 'bg-surface-container-high'
        }`}>
          {badge.unlocked ? badge.icon : '🔒'}
        </div>
        <div className="flex-1 min-w-0">
          <div className="text-label-lg text-on-surface font-medium">{badge.name}</div>
          <div className="text-body-sm text-on-surface-variant truncate">{badge.requirement}</div>
        </div>
      </div>
    </div>
  );
}
