import type { ReadonlyAchievement } from '../data/mockData';

interface AchievementCardProps {
  readonly achievement: ReadonlyAchievement;
}

export function AchievementCard({ achievement }: AchievementCardProps) {
  return (
    <div className="bg-surface-container rounded-xl p-space-md border border-outline-variant/20 hover:border-primary/40 transition-all duration-300">
      <div className="flex items-start gap-space-md">
        <div className="w-10 h-10 rounded-full bg-primary-container/30 flex items-center justify-center text-label-sm text-primary font-bold flex-shrink-0">
          {achievement.tier === 'gold' ? '🥇' : achievement.tier === 'silver' ? '🥈' : '🥉'}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-space-sm mb-1">
            <span className="text-label-lg text-on-surface font-medium">{achievement.title}</span>
            <span className="text-sm">{achievement.tier}</span>
          </div>
          <p className="text-body-md text-on-surface-variant">
            <span className="text-primary font-medium">{achievement.competition}</span> — {achievement.description}
          </p>
          <span className="text-label-sm text-on-surface-variant/60 mt-1 block">{achievement.team} · {achievement.location}</span>
        </div>
      </div>
    </div>
  );
}
