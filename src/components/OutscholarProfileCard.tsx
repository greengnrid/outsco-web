import type { ReadonlyOutscholar } from '../data/mockData';

interface OutscholarProfileCardProps {
  readonly profile: ReadonlyOutscholar;
}

export function OutscholarProfileCard({ profile }: OutscholarProfileCardProps) {
  return (
    <div className="bg-surface-container rounded-xl p-space-lg border border-outline-variant/20 hover:border-primary/40 transition-all duration-300 group">
      <div className="flex items-center gap-space-md mb-space-md">
        <div className="w-14 h-14 rounded-full bg-primary-container/30 border-2 border-primary flex items-center justify-center text-label-lg text-on-surface font-bold">
          {profile.name.split(' ').map((n: string) => n[0]).join('').slice(0, 2)}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-space-sm">
            <h3 className="font-headline-sm text-on-surface truncate">{profile.name}</h3>
            {profile.graduationStatus === 'green' && <span className="text-lg">✅</span>}
          </div>
          <p className="text-body-sm text-on-surface-variant truncate">{profile.department}</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-space-md mb-space-md">
        <div>
          <div className="text-label-sm text-on-surface-variant/60 uppercase">TAS</div>
          <div className="font-headline-sm text-primary">{profile.tasScore}</div>
        </div>
        <div>
          <div className="text-label-sm text-on-surface-variant/60 uppercase">Prestasi</div>
          <div className="font-headline-sm text-on-surface">{profile.competitions}</div>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        <span className="px-space-sm py-1 rounded-full bg-surface-container-high text-label-sm text-on-surface-variant">
          {profile.levelName}
        </span>
        <span className="px-space-sm py-1 rounded-full bg-surface-container-high text-label-sm text-on-surface-variant">
          {profile.dominantPilar}
        </span>
      </div>
    </div>
  );
}
