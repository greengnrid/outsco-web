import type { ReadonlyLeaderboardRow } from '../data/mockData';

interface LeaderboardRowProps {
  readonly entry: ReadonlyLeaderboardRow;
}

export function LeaderboardRow({ entry }: LeaderboardRowProps) {
  return (
    <div className="grid grid-cols-12 gap-space-md items-center py-space-md px-space-md bg-surface-container rounded-xl border border-outline-variant/10 hover:border-primary/30 transition-all duration-200">
      <div className="col-span-1 text-label-lg text-on-surface font-bold text-center">
        {entry.rank}
      </div>

      <div className="col-span-5 flex items-center gap-space-md">
        <div className="w-10 h-10 rounded-full bg-primary-container/30 flex items-center justify-center text-label-sm text-primary font-bold flex-shrink-0">
          {entry.name.split(' ').map((n: string) => n[0]).join('').slice(0, 2)}
        </div>
        <div className="min-w-0">
          <div className="text-body-md text-on-surface font-medium truncate">{entry.name}</div>
          <div className="text-label-sm text-on-surface-variant truncate">{entry.department}</div>
        </div>
      </div>

      <div className="col-span-2 text-right">
        <span className="font-headline-sm text-primary">{entry.tasScore}</span>
      </div>

      <div className="col-span-2 text-right">
        <span className="text-body-md text-on-surface">{entry.competitions}</span>
      </div>

      <div className="col-span-2 text-right">
        <div className="flex items-center justify-end gap-space-xs">
          <div className="w-12 h-2 bg-surface-container-high rounded-full overflow-hidden">
            <div
              className="h-full rounded-full bg-tertiary"
              style={{ width: `${entry.pilarPercentage}%` }}
            />
          </div>
          <span className="text-label-sm text-on-surface-variant">{entry.pilarPercentage}%</span>
        </div>
      </div>
    </div>
  );
}
