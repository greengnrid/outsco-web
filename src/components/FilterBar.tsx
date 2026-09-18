interface FilterBarProps {
  readonly categories: readonly string[];
  readonly activeCategory: string;
  readonly onCategoryChange: (category: string) => void;
  readonly searchQuery?: string;
  readonly onSearchChange?: (query: string) => void;
}

export function FilterBar({ categories, activeCategory, onCategoryChange, searchQuery, onSearchChange }: FilterBarProps) {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-space-md">
      <div className="flex flex-wrap gap-space-sm">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => onCategoryChange(cat)}
            className={`px-space-md py-space-xs rounded-full text-label-md transition-all duration-200 ${
              activeCategory === cat
                ? 'bg-primary text-white'
                : 'bg-surface-container-high text-on-surface-variant hover:bg-surface-container-highest hover:text-on-surface'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {onSearchChange && (
        <div className="relative w-full sm:w-64">
          <input
            type="text"
            value={searchQuery ?? ''}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Cari..."
            className="w-full bg-surface-container border border-outline-variant/20 rounded-lg px-space-md py-space-sm text-body-md text-on-surface placeholder-on-surface-variant/50 focus:outline-none focus:border-primary transition-colors"
          />
          <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-on-surface-variant/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      )}
    </div>
  );
}
