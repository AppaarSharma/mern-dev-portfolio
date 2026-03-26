import { FiActivity, FiLayers, FiZap } from 'react-icons/fi'
import { MetricCard } from '../components/MetricCard'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { impactScenarios, impactStats } from '../utils/portfolioData'

const impactIcons = [FiLayers, FiActivity, FiZap]

export function ImpactSection() {
  return (
    <section id="impact" className="section-shell">
      <SectionHeading
        eyebrow="What I've Built"
        title="Proof of work over job-title padding."
        description="Instead of an experience timeline, this section shows the kind of systems I've already designed, shipped, and improved across product-style builds."
      />

      <div className="mt-10 grid gap-4 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-1">
          {impactStats.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 0.08}>
              <MetricCard {...stat} />
            </Reveal>
          ))}
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {impactScenarios.map((scenario, index) => {
            const Icon = impactIcons[index % impactIcons.length]

            return (
              <Reveal key={scenario.title} delay={0.08 + index * 0.08}>
                <article className="panel h-full rounded-[26px] p-6">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--accent-soft)] text-[var(--text-primary)]">
                    <Icon size={22} />
                  </span>
                  <h3 className="mt-5 text-xl font-semibold text-[var(--text-primary)]">
                    {scenario.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[var(--text-muted)]">
                    {scenario.description}
                  </p>
                  <p className="mt-4 text-xs uppercase tracking-[0.3em] text-[var(--accent)]">
                    {scenario.detail}
                  </p>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
