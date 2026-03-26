import { startTransition } from 'react'
import { cn } from '../utils/cn'

type ProjectFilterProps = {
  filters: string[]
  activeFilter: string
  onChange: (filter: string) => void
}

export function ProjectFilter({
  filters,
  activeFilter,
  onChange,
}: ProjectFilterProps) {
  return (
    <div className="flex flex-wrap gap-3">
      {filters.map((filter) => (
        <button
          key={filter}
          type="button"
          onClick={() => startTransition(() => onChange(filter))}
          className={cn(
            'rounded-full border px-4 py-2 text-sm font-medium transition duration-200',
            activeFilter === filter
              ? 'border-transparent bg-[var(--text-primary)] text-[var(--bg)]'
              : 'border-[var(--border-color)] text-[var(--text-muted)] hover:border-[var(--accent)] hover:text-[var(--text-primary)]',
          )}
        >
          {filter}
        </button>
      ))}
    </div>
  )
}
