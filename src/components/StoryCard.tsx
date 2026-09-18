import type { ReadonlyStory } from '../data/mockData';

interface StoryCardProps {
  readonly story: ReadonlyStory;
  readonly featured?: boolean;
}

export function StoryCard({ story, featured }: StoryCardProps) {
  return (
    <article className={`bg-surface-container rounded-xl border border-outline-variant/20 hover:border-primary/40 transition-all duration-300 overflow-hidden ${
      featured ? 'col-span-1 md:col-span-2 row-span-2' : ''
    }`}>
      <div className={`${featured ? 'h-48 md:h-64' : 'h-32'} bg-gradient-to-br from-primary-container/30 to-secondary-container/20 flex items-center justify-center`}>
        <span className="text-4xl">{story.category === 'featured' ? '🏆' : '📖'}</span>
      </div>

      <div className="p-space-lg">
        <div className="flex items-center gap-space-sm mb-space-sm">
          <span className="px-space-sm py-1 rounded-full bg-primary-container/20 text-label-sm text-primary">
            {story.category}
          </span>
          <span className="text-label-sm text-on-surface-variant/60">{story.date}</span>
        </div>

        <h3 className={`font-headline-md text-on-surface mb-space-sm ${featured ? 'text-xl md:text-2xl' : 'text-lg'}`}>
          {story.title}
        </h3>

        <p className="text-body-md text-on-surface-variant mb-space-md leading-relaxed">
          {story.excerpt}
        </p>

        <div className="flex items-center gap-space-sm">
          <div className="w-8 h-8 rounded-full bg-primary-container/30 flex items-center justify-center text-label-sm text-primary font-bold">
            {story.authors[0]?.split(' ').map((n: string) => n[0]).join('').slice(0, 2)}
          </div>
          <span className="text-body-sm text-on-surface-variant">{story.authors.join(', ')}</span>
        </div>
      </div>
    </article>
  );
}
