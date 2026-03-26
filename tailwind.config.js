/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"DM Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        ambient: '0 24px 80px rgba(15, 23, 42, 0.16)',
        glow: '0 0 0 1px rgba(120, 255, 166, 0.14), 0 0 40px rgba(120, 255, 166, 0.15)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(120, 255, 166, 0.1)' },
          '50%': { boxShadow: '0 0 0 14px rgba(120, 255, 166, 0)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        pulseGlow: 'pulseGlow 3.2s ease-out infinite',
      },
    },
  },
  plugins: [],
}
