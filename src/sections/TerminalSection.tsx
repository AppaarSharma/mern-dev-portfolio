import { useState, type FormEvent } from 'react'
import { FiCommand } from 'react-icons/fi'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { profile, type SectionId, type ThemeMode } from '../utils/portfolioData'

type TerminalSectionProps = {
  onNavigate: (sectionId: SectionId) => void
  onToggleTheme: () => void
  theme: ThemeMode
}

type TerminalLine = {
  id: number
  content: string
  tone?: 'muted' | 'accent'
}

const helpText = [
  'help      list available commands',
  'projects  jump to case studies',
  'impact    open the build impact section',
  'about     open the about section',
  'contact   open the contact section',
  'theme     toggle light / night vision',
  'resume    download the resume',
  'clear     clear terminal history',
]

export default function TerminalSection({
  onNavigate,
  onToggleTheme,
  theme,
}: TerminalSectionProps) {
  const [history, setHistory] = useState<TerminalLine[]>([
    { id: 0, content: 'devgrid terminal ready. type "help" to explore.', tone: 'accent' },
  ])
  const [command, setCommand] = useState('')

  const appendLines = (lines: TerminalLine[]) => {
    setHistory((currentHistory) => [...currentHistory, ...lines])
  }

  const runCommand = (rawInput: string) => {
    const normalized = rawInput.trim().toLowerCase()

    if (!normalized) {
      return
    }

    if (normalized === 'clear') {
      setHistory([{ id: Date.now(), content: 'terminal cleared.', tone: 'muted' }])
      return
    }

    const nextLines: TerminalLine[] = [{ id: Date.now(), content: `> ${normalized}` }]

    switch (normalized) {
      case 'help':
        appendLines([
          ...nextLines,
          ...helpText.map((line, index) => ({
            id: Date.now() + index + 1,
            content: line,
            tone: 'muted' as const,
          })),
        ])
        break
      case 'projects':
        onNavigate('projects')
        appendLines([
          ...nextLines,
          {
            id: Date.now() + 2,
            content: 'Opening project case studies: SignalStack, QueuePilot, CacheCanvas, AtlasDocs.',
            tone: 'accent',
          },
        ])
        break
      case 'impact':
        onNavigate('impact')
        appendLines([
          ...nextLines,
          {
            id: Date.now() + 2,
            content: 'Impact section opened. Focus: shipped projects, technical constraints, delivery outcomes.',
            tone: 'accent',
          },
        ])
        break
      case 'about':
        onNavigate('about')
        appendLines([
          ...nextLines,
          {
            id: Date.now() + 2,
            content: 'About section opened. Focus: product systems, performance, and scale-minded engineering.',
            tone: 'accent',
          },
        ])
        break
      case 'contact':
        onNavigate('contact')
        appendLines([
          ...nextLines,
          {
            id: Date.now() + 2,
            content: `Contact section opened. Email route: ${profile.email}`,
            tone: 'accent',
          },
        ])
        break
      case 'theme':
        onToggleTheme()
        appendLines([
          ...nextLines,
          {
            id: Date.now() + 2,
            content: `Theme switched to ${theme === 'light' ? 'Night Vision' : 'Light'} mode.`,
            tone: 'accent',
          },
        ])
        break
      case 'resume':
        window.open(profile.resumeUrl, '_blank', 'noopener,noreferrer')
        appendLines([
          ...nextLines,
          {
            id: Date.now() + 2,
            content: 'Resume download triggered.',
            tone: 'accent',
          },
        ])
        break
      default:
        appendLines([
          ...nextLines,
          {
            id: Date.now() + 2,
            content: `Unknown command: ${normalized}. Type "help" for the command list.`,
            tone: 'muted',
          },
        ])
        break
    }
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    runCommand(command)
    setCommand('')
  }

  return (
    <section className="section-shell">
      <SectionHeading
        eyebrow="Terminal Lab"
        title="A small interactive layer that feels native to developer tooling."
        description="This is intentionally lightweight. It adds personality, exposes key sections quickly, and keeps the experience aligned with the product-engineering angle."
      />

      <Reveal className="mt-10">
        <div className="overflow-hidden rounded-[32px] border border-[var(--border-color)] bg-[#050806] text-[#a3f2bc] shadow-glow">
          <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-white/5">
                <FiCommand />
              </span>
              <div>
                <p className="font-mono text-sm uppercase tracking-[0.28em] text-[#b7ffd0]">
                  Command Deck
                </p>
                <p className="text-sm text-[#6cb685]">Commands: help, projects, impact, contact</p>
              </div>
            </div>
            <span className="font-mono text-xs uppercase tracking-[0.24em] text-[#6cb685]">
              {theme === 'night' ? 'night vision' : 'light mode'}
            </span>
          </div>

          <div className="space-y-3 px-5 py-5 font-mono text-sm">
            {history.map((line) => (
              <p
                key={line.id}
                className={
                  line.tone === 'accent'
                    ? 'text-[#d8ffe4]'
                    : line.tone === 'muted'
                      ? 'text-[#79b48e]'
                      : 'text-[#98efb6]'
                }
              >
                {line.content}
              </p>
            ))}
          </div>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-3 border-t border-white/10 px-5 py-4 md:flex-row md:items-center"
          >
            <label className="font-mono text-sm text-[#6cb685]" htmlFor="terminal-command">
              ~/portfolio $
            </label>
            <input
              id="terminal-command"
              value={command}
              onChange={(event) => setCommand(event.target.value)}
              placeholder="type a command"
              className="w-full bg-transparent text-[#d8ffe4] outline-none placeholder:text-[#5f8f6f]"
              autoComplete="off"
              spellCheck={false}
            />
            <button
              type="submit"
              className="rounded-full border border-white/15 px-4 py-2 text-xs uppercase tracking-[0.24em] text-[#d8ffe4]"
            >
              Run
            </button>
          </form>
        </div>
      </Reveal>
    </section>
  )
}
