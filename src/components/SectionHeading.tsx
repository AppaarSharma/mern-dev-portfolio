import { cn } from '../utils/cn'
import { Reveal } from './Reveal'

type SectionHeadingProps = {
  eyebrow: string
  title: string
  description: string
  align?: 'left' | 'center'
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
}: SectionHeadingProps) {
  return (
    <Reveal className={cn(align === 'center' ? 'text-center' : 'text-left')}>
      <p className="text-xs uppercase tracking-[0.32em] text-[var(--accent)]">{eyebrow}</p>
      <h2 className="mt-4 max-w-3xl font-display text-3xl font-bold tracking-tight text-[var(--text-primary)] md:text-5xl">
        {title}
      </h2>
      <p className="mt-4 max-w-2xl text-base leading-7 text-[var(--text-muted)] md:text-lg">
        {description}
      </p>
    </Reveal>
  )
}
