import { motion } from 'framer-motion'
import { FiMoon, FiSun } from 'react-icons/fi'
import { type ThemeMode } from '../utils/portfolioData'

type ThemeToggleProps = {
  theme: ThemeMode
  toggleTheme: () => void
  compact?: boolean
}

export function ThemeToggle({
  theme,
  toggleTheme,
  compact = false,
}: ThemeToggleProps) {
  const isNight = theme === 'night'

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="relative inline-flex h-11 items-center rounded-full border border-[var(--border-color)] bg-[var(--surface)] px-2 text-[var(--text-primary)]"
      aria-label="Toggle theme mode"
      title={isNight ? 'Switch to light mode' : 'Switch to night vision mode'}
    >
      <div className={`relative ${compact ? 'w-14' : 'w-[118px]'}`}>
        <motion.span
          className="absolute left-0 top-0 h-7 w-7 rounded-full bg-[var(--text-primary)]"
          animate={{ x: isNight ? (compact ? 28 : 68) : 0 }}
          transition={{ type: 'spring', stiffness: 350, damping: 28 }}
        />
        <span className="relative z-10 flex h-7 items-center justify-between gap-2 px-1.5">
          <span className="inline-flex h-6 w-6 items-center justify-center text-[var(--bg)]">
            <FiSun size={14} />
          </span>
          {compact ? null : (
            <span className="text-[10px] uppercase tracking-[0.24em] text-[var(--text-muted)]">
              {isNight ? 'Night' : 'Light'}
            </span>
          )}
          <span className="inline-flex h-6 w-6 items-center justify-center text-[var(--text-primary)]">
            <FiMoon size={14} />
          </span>
        </span>
      </div>
    </button>
  )
}
