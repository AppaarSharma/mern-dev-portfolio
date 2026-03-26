import { AnimatePresence, motion } from 'framer-motion'
import { useEffect } from 'react'
import { FiExternalLink, FiX } from 'react-icons/fi'
import { type Project } from '../utils/portfolioData'

type ProjectArchitectureModalProps = {
  project: Project
  onClose: () => void
}

export default function ProjectArchitectureModal({
  project,
  onClose,
}: ProjectArchitectureModalProps) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = originalOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [onClose])

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 px-4 py-6 backdrop-blur-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="panel-strong relative max-h-[90vh] w-full max-w-5xl overflow-y-auto p-6 md:p-8"
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 24, scale: 0.98 }}
          transition={{ duration: 0.25 }}
          onClick={(event) => event.stopPropagation()}
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.32em] text-[var(--accent)]">
                Architecture View
              </p>
              <h2 className="mt-2 font-display text-3xl font-bold text-[var(--text-primary)]">
                {project.title}
              </h2>
              <p className="mt-3 max-w-3xl text-sm leading-7 text-[var(--text-muted)]">
                {project.architecture.overview}
              </p>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border-color)] text-[var(--text-primary)]"
              aria-label="Close architecture modal"
            >
              <FiX size={18} />
            </button>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-4">
            {project.architecture.layers.map((layer, index) => (
              <div key={layer.title} className="relative">
                <article className="panel h-full rounded-[24px] p-5">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-[var(--text-primary)]">
                      {layer.title}
                    </h3>
                    <span className="font-mono text-xs text-[var(--text-muted)]">
                      0{index + 1}
                    </span>
                  </div>
                  <ul className="mt-4 space-y-3">
                    {layer.nodes.map((node) => (
                      <li
                        key={node}
                        className="rounded-2xl border border-[var(--border-color)] bg-[var(--accent-ghost)] px-3 py-2 text-sm text-[var(--text-secondary)]"
                      >
                        {node}
                      </li>
                    ))}
                  </ul>
                </article>

                {index < project.architecture.layers.length - 1 ? (
                  <div className="pointer-events-none absolute right-[-12px] top-1/2 hidden h-px w-6 -translate-y-1/2 bg-[var(--border-color)] md:block" />
                ) : null}
              </div>
            ))}
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <article className="panel rounded-[24px] p-5">
                <h3 className="text-lg font-semibold text-[var(--text-primary)]">Why it works</h3>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-[var(--text-muted)]">
                {project.architecture.notes.map((note) => (
                  <li key={note}>- {note}</li>
                ))}
              </ul>
            </article>

            <article className="panel rounded-[24px] p-5">
              <h3 className="text-lg font-semibold text-[var(--text-primary)]">
                Deployment surface
              </h3>
              <p className="mt-4 text-sm leading-7 text-[var(--text-muted)]">
                Frontend deploys independently from the API, which keeps static assets fast and
                lets backend changes ship without rebuilding the full portfolio.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[var(--text-primary)] px-4 py-2 text-sm font-medium text-[var(--bg)]"
                >
                  Live Demo
                  <FiExternalLink />
                </a>
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-[var(--border-color)] px-4 py-2 text-sm font-medium text-[var(--text-primary)]"
                >
                  GitHub
                  <FiExternalLink />
                </a>
              </div>
            </article>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
