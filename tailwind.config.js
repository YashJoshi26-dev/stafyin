/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Stafyin brand system — derived from the logo mark (indigo arc + navy arc).
        void: '#FFFFFF',
        panel: '#F5F7FC',
        panel2: '#EBF0FA',
        line: '#DDE5F3',
        ink: '#142A4D',
        inkdim: '#5C6B85',
        // "green" token kept for backward-compat with existing className usage,
        // now mapped to the navy arc of the logo.
        green: {
          DEFAULT: '#142A4D',
          bright: '#1E3A66',
          dim: '#0C1930',
        },
        // "blue" token mapped to the indigo arc of the logo.
        blue: {
          DEFAULT: '#2F6FED',
          bright: '#4F86FF',
          dim: '#1E4FBE',
        },
      },
      fontFamily: {
        display: ['"Sora"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        soft: '0 8px 32px rgba(20,42,77,0.08)',
        lift: '0 20px 45px rgba(20,42,77,0.16)',
        glow: '0 0 0 1px rgba(47,111,237,0.25), 0 8px 30px rgba(47,111,237,0.25)',
      },
      backgroundImage: {
        'grid-pattern': 'linear-gradient(rgba(20,42,77,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(20,42,77,0.05) 1px, transparent 1px)',
      },
      backgroundSize: {
        'grid': '48px 48px',
      },
      keyframes: {
        kenburns: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.08)' },
        },
        bounceArrow: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(10px)' },
        },
      },
      animation: {
        kenburns: 'kenburns 18s ease-in-out infinite alternate',
        bounceArrow: 'bounceArrow 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
