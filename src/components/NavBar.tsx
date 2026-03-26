import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { FiArrowDownRight, FiMenu, FiX } from 'react-icons/fi'
import { cn } from '../utils/cn'
import { profile, sectionLinks, type SectionId, type ThemeMode } from '../utils/portfolioData'
import { ThemeToggle } from './ThemeToggle'

type NavBarProps = {
  activeSection: SectionId
  onNavigate: (sectionId: SectionId) => void
  theme: ThemeMode
  toggleTheme: () => void
}

export function NavBar({
  activeSection,
  onNavigate,
  theme,
  toggleTheme,
}: NavBarProps) {
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleNavigate = (sectionId: SectionId) => {
    setMobileOpen(false)
    onNavigate(sectionId)
  }

  return (
    <header className="sticky top-4 z-50 mb-6 md:mb-8">
      <nav className="panel-strong flex items-center justify-between px-4 py-3 md:px-6">
        <button
          type="button"
          className="text-left"
          onClick={() => handleNavigate('hero')}
          aria-label="Go to hero section"
        >
          <span className="block font-display text-lg font-bold tracking-tight text-[var(--text-primary)]">
            {profile.brand}
          </span>
          <span className="block text-xs uppercase tracking-[0.3em] text-[var(--text-muted)]">
            Product-minded MERN engineer
          </span>
        </button>

        <div className="hidden items-center gap-2 lg:flex">
          {sectionLinks.map(({ id, label }) => (
            <button
              key={id}
              type="button"
              onClick={() => handleNavigate(id)}
              className={cn(
                'rounded-full px-4 py-2 text-sm font-medium transition duration-200',
                activeSection === id
                  ? 'bg-[var(--accent-soft)] text-[var(--text-primary)]'
                  : 'text-[var(--text-muted)] hover:bg-[var(--accent-ghost)] hover:text-[var(--text-primary)]',
              )}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={profile.resumeUrl}
            download
            className="inline-flex items-center gap-2 rounded-full border border-[var(--border-color)] px-4 py-2 text-sm font-medium text-[var(--text-primary)] transition hover:border-[var(--accent)] hover:bg-[var(--accent-ghost)]"
          >
            Resume
            <FiArrowDownRight />
          </a>
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} compact />
          <button
            type="button"
            onClick={() => setMobileOpen((current) => !current)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border-color)] text-[var(--text-primary)]"
            aria-expanded={mobileOpen}
            aria-label="Toggle navigation"
          >
            {mobileOpen ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen ? (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            className="panel-strong mt-3 grid gap-2 p-3 lg:hidden"
          >
            {sectionLinks.map(({ id, label }) => (
              <button
                key={id}
                type="button"
                onClick={() => handleNavigate(id)}
                className={cn(
                  'rounded-2xl px-4 py-3 text-left text-sm font-medium transition',
                  activeSection === id
                    ? 'bg-[var(--accent-soft)] text-[var(--text-primary)]'
                    : 'text-[var(--text-muted)] hover:bg-[var(--accent-ghost)] hover:text-[var(--text-primary)]',
                )}
              >
                {label}
              </button>
            ))}
            <a
              href={profile.resumeUrl}
              download
              className="inline-flex items-center gap-2 rounded-2xl border border-[var(--border-color)] px-4 py-3 text-sm font-medium text-[var(--text-primary)]"
            >
              Download Resume
              <FiArrowDownRight />
            </a>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  )
}
