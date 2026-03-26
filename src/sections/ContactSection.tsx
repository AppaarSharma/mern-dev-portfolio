import { AnimatePresence, motion } from 'framer-motion'
import { useState, type FormEvent } from 'react'
import { FiCheckCircle, FiCopy, FiGithub, FiLinkedin, FiMail, FiSend } from 'react-icons/fi'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { useCopyToClipboard } from '../hooks/useCopyToClipboard'
import { submitContactForm, type ContactFormPayload } from '../utils/api'
import { profile } from '../utils/portfolioData'

const initialFormState: ContactFormPayload = {
  name: '',
  email: '',
  company: '',
  message: '',
  website: '',
}

type FormErrors = Partial<Record<keyof ContactFormPayload, string>>

export function ContactSection() {
  const [formData, setFormData] = useState(initialFormState)
  const [formErrors, setFormErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [serverMessage, setServerMessage] = useState('')
  const { copiedText, copy } = useCopyToClipboard()

  const validate = () => {
    const nextErrors: FormErrors = {}

    if (formData.name.trim().length < 2) {
      nextErrors.name = 'Enter a name with at least 2 characters.'
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      nextErrors.email = 'Enter a valid email address.'
    }

    if (formData.message.trim().length < 24) {
      nextErrors.message = 'Write a message with at least 24 characters.'
    }

    return nextErrors
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const nextErrors = validate()
    setFormErrors(nextErrors)
    setServerMessage('')

    if (Object.keys(nextErrors).length > 0) {
      return
    }

    try {
      setIsSubmitting(true)
      await submitContactForm(formData)
      setFormData(initialFormState)
      setIsSuccess(true)
      setServerMessage('Message delivered. I will get back to you shortly.')
      window.setTimeout(() => setIsSuccess(false), 2400)
    } catch (error) {
      setServerMessage(
        error instanceof Error ? error.message : 'Something went wrong. Please try again.',
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="section-shell">
      <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <SectionHeading
            eyebrow="Contact"
            title="Let's build something sharp, fast, and useful."
            description="If you're hiring for product engineering, internal tools, or performance-heavy frontend work, send a brief and I'll reply with a practical plan."
          />

          <div className="mt-8 grid gap-4">
            <Reveal>
              <article className="panel rounded-[26px] p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-[var(--accent)]">
                      Email
                    </p>
                    <p className="mt-3 text-lg font-semibold text-[var(--text-primary)]">
                      {profile.email}
                    </p>
                    <p className="mt-2 text-sm text-[var(--text-muted)]">
                      Best for role discussions, freelance inquiries, and product ideas.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => copy(profile.email)}
                    className="inline-flex items-center gap-2 rounded-full border border-[var(--border-color)] px-4 py-2 text-sm font-medium text-[var(--text-primary)]"
                  >
                    <FiCopy />
                    {copiedText === profile.email ? 'Copied' : 'Copy'}
                  </button>
                </div>
              </article>
            </Reveal>

            <div className="grid gap-4 sm:grid-cols-2">
              <Reveal delay={0.08}>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="panel flex items-center gap-4 rounded-[26px] p-5 transition hover:-translate-y-1"
                >
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--accent-soft)] text-[var(--text-primary)]">
                    <FiGithub size={22} />
                  </span>
                  <div>
                    <h3 className="font-semibold text-[var(--text-primary)]">GitHub</h3>
                    <p className="text-sm text-[var(--text-muted)]">Code, commits, and build notes</p>
                  </div>
                </a>
              </Reveal>

              <Reveal delay={0.14}>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="panel flex items-center gap-4 rounded-[26px] p-5 transition hover:-translate-y-1"
                >
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--accent-soft)] text-[var(--text-primary)]">
                    <FiLinkedin size={22} />
                  </span>
                  <div>
                    <h3 className="font-semibold text-[var(--text-primary)]">LinkedIn</h3>
                    <p className="text-sm text-[var(--text-muted)]">
                      Product engineering and hiring conversations
                    </p>
                  </div>
                </a>
              </Reveal>
            </div>
          </div>
        </div>

        <Reveal delay={0.12}>
          <form className="panel-strong rounded-[30px] p-6 md:p-8" onSubmit={handleSubmit}>
            <div className="flex items-center justify-between gap-4">
              <div>
                <h3 className="text-2xl font-semibold text-[var(--text-primary)]">
                  Start the conversation
                </h3>
                <p className="mt-2 text-sm text-[var(--text-muted)]">
                  Short brief, timeline, and what you need built or improved.
                </p>
              </div>
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--accent-soft)] text-[var(--text-primary)]">
                <FiMail size={20} />
              </span>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              <div className="md:col-span-1">
                <label className="text-sm font-medium text-[var(--text-primary)]" htmlFor="name">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(event) =>
                    setFormData((current) => ({ ...current, name: event.target.value }))
                  }
                  className="mt-2 w-full rounded-2xl border border-[var(--border-color)] bg-transparent px-4 py-3 text-[var(--text-primary)] outline-none transition focus:border-[var(--accent)]"
                  placeholder="Your name"
                />
                {formErrors.name ? (
                  <p className="mt-2 text-sm text-rose-500">{formErrors.name}</p>
                ) : null}
              </div>

              <div className="md:col-span-1">
                <label className="text-sm font-medium text-[var(--text-primary)]" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(event) =>
                    setFormData((current) => ({ ...current, email: event.target.value }))
                  }
                  className="mt-2 w-full rounded-2xl border border-[var(--border-color)] bg-transparent px-4 py-3 text-[var(--text-primary)] outline-none transition focus:border-[var(--accent)]"
                  placeholder="name@company.com"
                />
                {formErrors.email ? (
                  <p className="mt-2 text-sm text-rose-500">{formErrors.email}</p>
                ) : null}
              </div>

              <div className="md:col-span-2">
                <label
                  className="text-sm font-medium text-[var(--text-primary)]"
                  htmlFor="company"
                >
                  Company / Team
                </label>
                <input
                  id="company"
                  type="text"
                  value={formData.company}
                  onChange={(event) =>
                    setFormData((current) => ({ ...current, company: event.target.value }))
                  }
                  className="mt-2 w-full rounded-2xl border border-[var(--border-color)] bg-transparent px-4 py-3 text-[var(--text-primary)] outline-none transition focus:border-[var(--accent)]"
                  placeholder="Optional"
                />
              </div>

              <div className="hidden">
                <label htmlFor="website">Website</label>
                <input
                  id="website"
                  type="text"
                  autoComplete="off"
                  tabIndex={-1}
                  value={formData.website}
                  onChange={(event) =>
                    setFormData((current) => ({ ...current, website: event.target.value }))
                  }
                />
              </div>

              <div className="md:col-span-2">
                <label
                  className="text-sm font-medium text-[var(--text-primary)]"
                  htmlFor="message"
                >
                  Project brief
                </label>
                <textarea
                  id="message"
                  rows={6}
                  value={formData.message}
                  onChange={(event) =>
                    setFormData((current) => ({ ...current, message: event.target.value }))
                  }
                  className="mt-2 w-full rounded-2xl border border-[var(--border-color)] bg-transparent px-4 py-3 text-[var(--text-primary)] outline-none transition focus:border-[var(--accent)]"
                  placeholder="What are you building, what's blocked, and what kind of support do you need?"
                />
                {formErrors.message ? (
                  <p className="mt-2 text-sm text-rose-500">{formErrors.message}</p>
                ) : null}
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--text-primary)] px-6 py-3 font-medium text-[var(--bg)] transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting ? 'Sending...' : 'Send message'}
                <FiSend />
              </button>

              <AnimatePresence mode="wait">
                {serverMessage ? (
                  <motion.p
                    key={serverMessage}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-sm text-[var(--text-muted)]"
                  >
                    {serverMessage}
                  </motion.p>
                ) : null}
              </AnimatePresence>
            </div>

            <AnimatePresence>
              {isSuccess ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.92 }}
                  className="mt-5 flex items-center gap-3 rounded-2xl border border-emerald-500/20 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-600"
                >
                  <FiCheckCircle size={18} />
                  Message sent successfully.
                </motion.div>
              ) : null}
            </AnimatePresence>
          </form>
        </Reveal>
      </div>
    </section>
  )
}
