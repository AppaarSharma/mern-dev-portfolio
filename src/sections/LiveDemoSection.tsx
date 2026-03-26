import { FiArrowUpRight } from 'react-icons/fi'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { type Project } from '../utils/portfolioData'

type LiveDemoSectionProps = {
  projects: Project[]
}

export default function LiveDemoSection({ projects }: LiveDemoSectionProps) {
  return (
    <section className="section-shell">
      <SectionHeading
        eyebrow="Live Demos"
        title="The strongest builds get a closer look."
        description="A recruiter or engineering manager should be able to understand the product shape in seconds. These cards highlight the best product narratives in the portfolio."
      />

      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        {projects.map((project, index) => (
          <Reveal key={project.id} delay={index * 0.08}>
            <article className="panel overflow-hidden rounded-[30px]">
              <div className="border-b border-[var(--border-color)] p-4">
                <img
                  src={project.demo.previewUrl}
                  alt={`${project.title} demo preview`}
                  loading="lazy"
                  width="960"
                  height="640"
                  className="w-full rounded-[24px] border border-[var(--border-color)] object-cover"
                />
              </div>

              <div className="p-5">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-xl font-semibold text-[var(--text-primary)]">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-[var(--text-muted)]">
                      {project.demo.tagline}
                    </p>
                  </div>
                  <span className="rounded-full bg-[var(--accent-soft)] px-3 py-1 text-xs uppercase tracking-[0.22em] text-[var(--accent)]">
                    Demo
                  </span>
                </div>

                <div className="mt-5 rounded-[22px] border border-[var(--border-color)] bg-[var(--accent-ghost)] p-4">
                  <p className="text-xs uppercase tracking-[0.28em] text-[var(--text-muted)]">
                    Sample access
                  </p>
                  <p className="mt-2 text-sm leading-7 text-[var(--text-secondary)]">
                    {project.demo.credentials}
                  </p>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-[var(--border-color)] px-3 py-1 text-xs uppercase tracking-[0.18em] text-[var(--text-muted)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-[var(--text-primary)] px-5 py-3 text-sm font-medium text-[var(--bg)] transition hover:opacity-90"
                >
                  Try it
                  <FiArrowUpRight />
                </a>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
