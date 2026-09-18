import type { ReadonlyLeaderboardRow } from '../data/mockData';

interface PodiumCardProps {
  readonly entry: ReadonlyLeaderboardRow;
  readonly position: 'left' | 'center' | 'right';
}

export function PodiumCard({ entry, position }: PodiumCardProps) {
  const heightMap = { left: 'h-28', center: 'h-36', right: 'h-32' };
  const sizeMap = { left: 'w-16 h-16', center: 'w-20 h-20', right: 'w-16 h-16' };
  const labelMap = { left: '2nd', center: '1st', right: '3rd' };

  return (
    <div className="flex flex-col items-center">
      <div className={`${sizeMap[position]} rounded-full bg-primary-container/30 border-2 border-primary flex items-center justify-center text-label-lg text-on-surface font-bold mb-space-sm`}>
        {entry.name.split(' ').map((n: string) => n[0]).join('').slice(0, 2)}
      </div>
      <span className="font-headline-sm text-on-surface text-center mb-1">{entry.name}</span>
      <span className="text-label-sm text-on-surface-variant mb-space-md">{entry.department}</span>

      <div className={`${heightMap[position]} w-full bg-surface-container rounded-t-xl border border-outline-variant/20 border-b-0 flex flex-col items-center justify-center p-space-md`}>
        <span className="text-3xl mb-1">🏆</span>
        <span className="font-display-hero text-on-surface text-2xl">{entry.tasScore}</span>
        <span className="text-label-sm text-on-surface-variant uppercase">{labelMap[position]}</span>
      </div>
    </div>
  );
}
