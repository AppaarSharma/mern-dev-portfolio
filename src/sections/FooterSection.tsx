import { footerPanels, profile } from '../utils/portfolioData'

export function FooterSection() {
  return (
    <footer className="panel-strong rounded-[32px] px-6 py-8 md:px-8">
      <div className="flex flex-col gap-5 border-b border-[var(--border-color)] pb-6 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.32em] text-[var(--accent)]">Footer</p>
          <h2 className="mt-3 font-display text-2xl font-bold text-[var(--text-primary)]">
            Built to look like a product, not a placeholder.
          </h2>
        </div>
        <p className="max-w-xl text-sm leading-7 text-[var(--text-muted)]">
          Frontend optimized for static delivery. Backend kept separate for clean deployment on
          Render.
        </p>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {footerPanels.map((panel) => (
          <details key={panel.title} className="panel rounded-[24px] p-5">
            <summary className="cursor-pointer list-none text-lg font-semibold text-[var(--text-primary)]">
              {panel.title}
            </summary>
            <p className="mt-4 text-sm leading-7 text-[var(--text-muted)]">{panel.copy}</p>
          </details>
        ))}
      </div>

      <div className="mt-6 flex flex-col gap-3 text-sm text-[var(--text-muted)] md:flex-row md:items-center md:justify-between">
        <p>
          (c) {new Date().getFullYear()} {profile.name}. Crafted for product engineering roles.
        </p>
        <p>Light mode by default. Night Vision mode for after-hours demos.</p>
      </div>
    </footer>
  )
}
