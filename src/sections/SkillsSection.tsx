import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { skillGroups } from '../utils/portfolioData'

export function SkillsSection() {
  return (
    <section id="skills" className="section-shell">
      <SectionHeading
        eyebrow="Skills"
        title="Tools with context, not a wall of logos."
        description="Each skill is tied to where it gets used. This keeps the section grounded in actual delivery instead of generic buzzwords."
      />

      <div className="mt-10 grid gap-5 lg:grid-cols-2">
        {skillGroups.map((group, index) => (
          <Reveal key={group.title} delay={index * 0.08}>
            <article className="panel rounded-[30px] p-6 md:p-7">
              <div className="flex items-end justify-between gap-4 border-b border-[var(--border-color)] pb-5">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-[var(--accent)]">
                    {group.kicker}
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold text-[var(--text-primary)]">
                    {group.title}
                  </h3>
                </div>
                <p className="max-w-xs text-right text-sm text-[var(--text-muted)]">
                  {group.description}
                </p>
              </div>

              <div className="mt-6 space-y-5">
                {group.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <p className="font-medium text-[var(--text-primary)]">{skill.name}</p>
                        <p className="text-sm text-[var(--text-muted)]">{skill.context}</p>
                      </div>
                      <span className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--accent)]">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="mt-3 h-2.5 rounded-full bg-[var(--accent-ghost)]">
                      <div
                        className="h-full rounded-full bg-[var(--accent)]"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
