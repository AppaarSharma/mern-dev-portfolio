import { motion } from 'framer-motion'
import { FiArrowDownRight, FiSend } from 'react-icons/fi'
import { Reveal } from '../components/Reveal'
import { profile, type SectionId } from '../utils/portfolioData'

type HeroSectionProps = {
  onNavigate: (sectionId: SectionId) => void
}

export function HeroSection({ onNavigate }: HeroSectionProps) {
  return (
    <section
      id="hero"
      className="section-shell min-h-[calc(100vh-120px)] px-6 py-10 md:px-10 md:py-12"
    >
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute left-[6%] top-[12%] h-28 w-28 rounded-full border border-[var(--border-color)]"
          animate={{ y: [0, -14, 0], x: [0, 8, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-[16%] right-[7%] h-36 w-36 rounded-full bg-[var(--accent-soft)] blur-3xl"
          animate={{ scale: [1, 1.08, 1], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 7.2, repeat: Infinity, ease: 'easeInOut' }}
        />
        <div className="absolute inset-x-0 top-1/3 h-px bg-[var(--grid-line)]" />
      </div>

      <div className="relative grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div>
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border-color)] bg-[var(--bg-soft)] px-4 py-2 text-xs uppercase tracking-[0.3em] text-[var(--text-muted)]">
              <span className="inline-flex h-2.5 w-2.5 rounded-full bg-[var(--accent)] shadow-[0_0_0_8px_var(--accent-soft)]" />
              {profile.location}
            </div>
          </Reveal>

          <Reveal delay={0.06}>
            <p className="mt-8 text-sm uppercase tracking-[0.32em] text-[var(--accent)]">
              {profile.role}
            </p>
            <h1 className="mt-5 max-w-3xl font-display text-4xl font-bold leading-[0.95] tracking-tight text-[var(--text-primary)] md:text-6xl xl:text-[5rem]">
              {profile.heroHeadline}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--text-secondary)] md:text-lg">
              {profile.heroBody}
            </p>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="mt-8 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => onNavigate('projects')}
                className="inline-flex items-center gap-2 rounded-full bg-[var(--text-primary)] px-6 py-3 font-medium text-[var(--bg)] transition hover:opacity-92"
              >
                View Projects
                <FiArrowDownRight />
              </button>
              <button
                type="button"
                onClick={() => onNavigate('contact')}
                className="inline-flex items-center gap-2 rounded-full border border-[var(--border-color)] px-6 py-3 font-medium text-[var(--text-primary)] transition hover:border-[var(--accent)] hover:bg-[var(--accent-ghost)]"
              >
                Contact Me
                <FiSend />
              </button>
              <a
                href={profile.resumeUrl}
                download
                className="inline-flex items-center rounded-full px-4 py-3 text-sm font-medium text-[var(--text-muted)] underline-offset-4 transition hover:text-[var(--text-primary)] hover:underline"
              >
                Download Resume
              </a>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {profile.heroStats.map((stat, index) => (
              <Reveal key={stat.label} delay={0.18 + index * 0.06}>
                <div className="panel rounded-[24px] p-5">
                  <p className="font-display text-3xl font-bold text-[var(--text-primary)]">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-sm font-medium text-[var(--text-primary)]">
                    {stat.label}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-[var(--text-muted)]">
                    {stat.detail}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.14} className="relative">
          <motion.div
            className="panel-strong relative mx-auto max-w-[520px] overflow-hidden rounded-[36px] p-6 md:p-8"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 7.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <div className="absolute inset-x-6 top-6 flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-[0.9fr_1.1fr]">
              <div className="relative">
                <div className="absolute inset-0 rounded-[32px] bg-[var(--accent-soft)] blur-2xl" />
                <img
                  src="/profile-avatar.svg"
                  alt="Stylized profile avatar"
                  width="720"
                  height="720"
                  className="relative z-10 w-full rounded-[28px] border border-[var(--border-color)] object-cover shadow-ambient"
                  decoding="async"
                />
              </div>

              <div className="space-y-4">
                <div className="rounded-[24px] border border-[var(--border-color)] bg-[var(--accent-ghost)] p-4">
                  <p className="font-mono text-xs uppercase tracking-[0.28em] text-[var(--accent)]">
                    value statement
                  </p>
                  <p className="mt-3 text-sm leading-7 text-[var(--text-secondary)]">
                    {profile.valueStatement}
                  </p>
                </div>

                <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-1">
                  {profile.heroSignals.map((signal) => (
                    <div
                      key={signal.label}
                      className="rounded-[22px] border border-[var(--border-color)] p-4"
                    >
                      <p className="text-xs uppercase tracking-[0.28em] text-[var(--text-muted)]">
                        {signal.label}
                      </p>
                      <p className="mt-2 text-sm font-medium text-[var(--text-primary)]">
                        {signal.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </Reveal>
      </div>
    </section>
  )
}
