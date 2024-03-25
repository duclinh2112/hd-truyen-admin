const sharedConfig = require('@varum-org/varum-ui/ui/tailwind.config.js')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{jsx,tsx}'],
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {
      ...sharedConfig.default.config.theme.extend,
      minHeight: {
        vh: 'calc(100vh - 60px - 44px)',
      },
      height: {
        header: 'var(--header-height)',
      },
      width: {
        sidebar: 'var(--sidebar-width)',
      },
      colors: {
        primary: 'var(--primary-color)',
        main: '#18aefa',
      },
      backgroundColor: {
        primary: 'var(--primary-color)',
        main: '#f7f7fa',
        'blue-1': '#18aefa',
      },
      boxShadow: {
        auth: '0 0 10px rgba(0, 0, 0, 0.1)',
        header: '0px 1px 10px 0px rgba(0, 0, 0, 0.1)',
        card: '0px 0px 31px rgba(44, 50, 63, 0.02)',
        'box-img': 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
      },
      margin: {
        auth: '1.875rem auto',
        main: 'var(--sidebar-width)',
      },
      padding: {
        main: 'var(--header-height)',
        'sub-menu': '7px 10px 7px 30px',
      },
      borderRadius: {
        auth: '8px 20px 20px 8px',
      },
      inset: {
        sidebar: 'var(--header-height)',
      },
      borderColor: {
        default: 'rgba(0, 0, 0, 0.1)',
        main: 'var(--primary-color)',
      },
    },
  },
  plugins: [sharedConfig],
}
