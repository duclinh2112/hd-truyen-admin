import type { Config } from 'tailwindcss'
const sharedConfig = require('@varum-org/varum-ui/ui/tailwind.config.js')

const config: Config = {
  content: ['./src/**/*.{jsx,tsx}'],
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {
      ...sharedConfig.default.config.theme.extend,
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [sharedConfig],
}
export default config
