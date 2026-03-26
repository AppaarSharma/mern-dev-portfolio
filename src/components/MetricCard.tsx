type MetricCardProps = {
  value: string
  label: string
  description: string
}

export function MetricCard({ value, label, description }: MetricCardProps) {
  return (
    <article className="panel rounded-[26px] p-5 md:p-6">
      <p className="font-display text-3xl font-bold text-[var(--text-primary)] md:text-4xl">
        {value}
      </p>
      <h3 className="mt-3 text-lg font-semibold text-[var(--text-primary)]">{label}</h3>
      <p className="mt-2 text-sm leading-6 text-[var(--text-muted)]">{description}</p>
    </article>
  )
}
