import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { aboutHighlights } from '../utils/portfolioData'

export function AboutSection() {
  return (
    <section id="about" className="section-shell">
      <SectionHeading
        eyebrow="About Me"
        title="I build product surfaces that make complex systems feel straightforward."
        description="My sweet spot is the intersection of UI clarity, backend discipline, and performance thinking. I like workflows with real constraints: async state, role-based access, and data that has to stay understandable under pressure."
      />

      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {aboutHighlights.map((item, index) => (
          <Reveal key={item.title} delay={index * 0.08}>
            <article className="panel h-full rounded-[26px] p-6">
              <p className="text-xs uppercase tracking-[0.32em] text-[var(--accent)]">
                {item.kicker}
              </p>
              <h3 className="mt-4 text-2xl font-semibold text-[var(--text-primary)]">
                {item.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-[var(--text-muted)]">
                {item.description}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
