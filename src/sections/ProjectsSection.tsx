import { AnimatePresence, motion } from 'framer-motion'
import { useDeferredValue, useState } from 'react'
import { FiChevronDown, FiExternalLink, FiGithub, FiLayers } from 'react-icons/fi'
import { ProjectFilter } from '../components/ProjectFilter'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { projects, type Project } from '../utils/portfolioData'

type ProjectsSectionProps = {
  onOpenArchitecture: (project: Project) => void
}

export function ProjectsSection({ onOpenArchitecture }: ProjectsSectionProps) {
  const [activeFilter, setActiveFilter] = useState('All')
  const [expandedProjectId, setExpandedProjectId] = useState<string | null>(projects[0]?.id ?? null)
  const deferredFilter = useDeferredValue(activeFilter)
  const filters = ['All', ...new Set(projects.flatMap((project) => project.filters))]
  const visibleProjects =
    deferredFilter === 'All'
      ? projects
      : projects.filter((project) => project.filters.includes(deferredFilter))

  return (
    <section id="projects" className="section-shell">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <SectionHeading
          eyebrow="Projects"
          title="Case studies that explain the engineering, not just the screenshots."
          description="Each card starts with the product problem and then opens into approach, tradeoffs, challenges, and what changed after shipping."
        />
        <ProjectFilter
          filters={filters}
          activeFilter={activeFilter}
          onChange={setActiveFilter}
        />
      </div>

      <div className="mt-10 grid gap-5">
        {visibleProjects.map((project, index) => {
          const expanded = expandedProjectId === project.id

          return (
            <Reveal key={project.id} delay={index * 0.05}>
              <article className="panel overflow-hidden rounded-[32px]">
                <div className="grid gap-6 p-6 lg:grid-cols-[1.1fr_0.9fr] lg:p-8">
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="rounded-full bg-[var(--accent-soft)] px-3 py-1 text-xs uppercase tracking-[0.24em] text-[var(--accent)]">
                        {project.category}
                      </span>
                      <span className="text-sm text-[var(--text-muted)]">
                        {project.statement}
                      </span>
                    </div>

                    <h3 className="mt-5 font-display text-3xl font-bold text-[var(--text-primary)]">
                      {project.title}
                    </h3>
                    <p className="mt-4 max-w-2xl text-sm leading-7 text-[var(--text-secondary)]">
                      {project.description}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-[var(--border-color)] px-3 py-1 text-xs uppercase tracking-[0.18em] text-[var(--text-muted)]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="mt-6 grid gap-3 md:grid-cols-2">
                      {project.features.map((feature) => (
                        <div
                          key={feature}
                          className="rounded-[20px] border border-[var(--border-color)] bg-[var(--accent-ghost)] px-4 py-3 text-sm text-[var(--text-secondary)]"
                        >
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="panel rounded-[28px] p-5">
                    <p className="text-xs uppercase tracking-[0.28em] text-[var(--accent)]">
                      Delivery signals
                    </p>
                    <div className="mt-5 space-y-4">
                      {project.signals.map((signal) => (
                        <div key={signal.label}>
                          <div className="flex items-center justify-between gap-3 text-sm">
                            <span className="text-[var(--text-primary)]">{signal.label}</span>
                            <span className="font-mono text-[var(--text-muted)]">
                              {signal.value}
                            </span>
                          </div>
                          <div className="mt-2 h-2 rounded-full bg-[var(--accent-ghost)]">
                            <div
                              className="h-full rounded-full bg-[var(--accent)]"
                              style={{ width: `${signal.level}%` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 flex flex-wrap gap-3">
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
                        <FiGithub />
                      </a>
                      <button
                        type="button"
                        onClick={() => onOpenArchitecture(project)}
                        className="inline-flex items-center gap-2 rounded-full border border-[var(--border-color)] px-4 py-2 text-sm font-medium text-[var(--text-primary)]"
                      >
                        Architecture
                        <FiLayers />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="border-t border-[var(--border-color)] px-6 py-5 lg:px-8">
                  <button
                    type="button"
                    onClick={() =>
                      setExpandedProjectId((currentId) =>
                        currentId === project.id ? null : project.id,
                      )
                    }
                    className="flex w-full items-center justify-between gap-4 text-left"
                    aria-expanded={expanded}
                  >
                    <div>
                      <p className="text-xs uppercase tracking-[0.28em] text-[var(--accent)]">
                        Case Study
                      </p>
                      <p className="mt-2 text-lg font-semibold text-[var(--text-primary)]">
                        Problem, approach, challenges, and learnings
                      </p>
                    </div>
                    <motion.span animate={{ rotate: expanded ? 180 : 0 }}>
                      <FiChevronDown size={22} />
                    </motion.span>
                  </button>

                  <AnimatePresence initial={false}>
                    {expanded ? (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.26 }}
                        className="overflow-hidden"
                      >
                        <div className="mt-5 grid gap-4 lg:grid-cols-4">
                          <article className="rounded-[24px] border border-[var(--border-color)] p-5">
                            <p className="text-xs uppercase tracking-[0.24em] text-[var(--accent)]">
                              Problem
                            </p>
                            <p className="mt-3 text-sm leading-7 text-[var(--text-muted)]">
                              {project.caseStudy.problem}
                            </p>
                          </article>
                          <article className="rounded-[24px] border border-[var(--border-color)] p-5">
                            <p className="text-xs uppercase tracking-[0.24em] text-[var(--accent)]">
                              Approach
                            </p>
                            <p className="mt-3 text-sm leading-7 text-[var(--text-muted)]">
                              {project.caseStudy.approach}
                            </p>
                          </article>
                          <article className="rounded-[24px] border border-[var(--border-color)] p-5">
                            <p className="text-xs uppercase tracking-[0.24em] text-[var(--accent)]">
                              Challenges
                            </p>
                            <ul className="mt-3 space-y-2 text-sm leading-7 text-[var(--text-muted)]">
                              {project.caseStudy.challenges.map((challenge) => (
                                <li key={challenge}>- {challenge}</li>
                              ))}
                            </ul>
                          </article>
                          <article className="rounded-[24px] border border-[var(--border-color)] p-5">
                            <p className="text-xs uppercase tracking-[0.24em] text-[var(--accent)]">
                              Learnings
                            </p>
                            <ul className="mt-3 space-y-2 text-sm leading-7 text-[var(--text-muted)]">
                              {project.caseStudy.learnings.map((learning) => (
                                <li key={learning}>- {learning}</li>
                              ))}
                            </ul>
                          </article>
                        </div>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </div>
              </article>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}
