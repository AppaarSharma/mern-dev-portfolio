import { motion } from 'framer-motion'

export function AmbientBackdrop() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden">
      <motion.div
        aria-hidden="true"
        className="absolute left-[-8%] top-[10%] h-72 w-72 rounded-full bg-[var(--accent-soft)] blur-3xl md:h-96 md:w-96"
        animate={{ x: [0, 32, -20, 0], y: [0, 20, -12, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        aria-hidden="true"
        className="absolute bottom-[8%] right-[-6%] h-80 w-80 rounded-full bg-[var(--accent-ghost)] blur-3xl md:h-[28rem] md:w-[28rem]"
        animate={{ x: [0, -28, 18, 0], y: [0, -30, 14, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        aria-hidden="true"
        className="absolute left-1/2 top-1/3 h-64 w-64 -translate-x-1/2 rounded-full border border-[var(--border-color)]"
        animate={{ rotate: 360 }}
        transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
      />
    </div>
  )
}
