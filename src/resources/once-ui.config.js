import { home } from './content';

// IMPORTANT: Replace with your own domain address - it's used for SEO in meta tags and schema
const baseURL = 'https://demo.magic-portfolio.com';

const routes = {
  '/': true,
  '/about': true,
  '/work': true,
  '/blog': true,
  '/gallery': false,
};

const display = {
  location: true,
  time: true,
  themeSwitcher: true,
  mailchimp: true,
};

// Enable password protection on selected routes
// Set password in the .env file, refer to .env.example
const protectedRoutes = {
  '/work/betul': true,
};

// Import and set font for each variant
import { Geist } from 'next/font/google';
import { Geist_Mono } from 'next/font/google';

const heading = Geist({
  variable: '--font-heading',
  subsets: ['latin'],
  display: 'swap',
});

const body = Geist({
  variable: '--font-body',
  subsets: ['latin'],
  display: 'swap',
});

const label = Geist({
  variable: '--font-label',
  subsets: ['latin'],
  display: 'swap',
});

const code = Geist_Mono({
  variable: '--font-code',
  subsets: ['latin'],
  display: 'swap',
});

const fonts = {
  heading: heading,
  body: body,
  label: label,
  code: code,
};

// default customization applied to the HTML in the main layout.tsx
const style = {
  theme: 'dark', // dark | light | system
  neutral: 'slate', // sand | gray | slate | custom
  brand: 'indigo', // blue | indigo | violet | magenta | pink | ...
  accent: 'cyan', // blue | indigo | violet | magenta | pink | ...
  solid: 'color', // color | contrast
  solidStyle: 'plastic', // flat | plastic
  border: 'rounded', // rounded | playful | conservative
  surface: 'filled', // filled | translucent
  transition: 'all', // all | micro | macro
  scaling: '105', // 90 | 95 | 100 | 105 | 110
};

const dataStyle = {
  variant: 'gradient', // flat | gradient | outline
  mode: 'categorical', // categorical | divergent | sequential
  height: 24, // default chart height
  axis: {
    stroke: 'var(--neutral-alpha-weak)',
  },
  tick: {
    fill: 'var(--neutral-on-background-weak)',
    fontSize: 11,
    line: false,
  },
};

const effects = {
  mask: {
    cursor: true,
    x: 50,
    y: 0,
    radius: 120,
  },
  gradient: {
    display: true,
    opacity: 100,
    x: 50,
    y: 60,
    width: 100,
    height: 50,
    tilt: 0,
    colorStart: 'accent-background-strong',
    colorEnd: 'page-background',
  },
  dots: {
    display: false,
    opacity: 40,
    size: '2',
    color: 'brand-background-strong',
  },
  grid: {
    display: false,
    opacity: 100,
    color: 'neutral-alpha-medium',
    width: '0.25rem',
    height: '0.25rem',
  },
  lines: {
    display: false,
    opacity: 100,
    color: 'neutral-alpha-weak',
    size: '16',
    thickness: 1,
    angle: 45,
  },
};

const mailchimp = {
  action: 'https://url/subscribe/post?parameters',
  effects: {
    mask: {
      cursor: true,
      x: 50,
      y: 0,
      radius: 100,
    },
    gradient: {
      display: true,
      opacity: 220,
      x: 50,
      y: 50,
      width: 150,
      height: 150,
      tilt: 0,
      colorStart: 'accent-background-strong',
      colorEnd: 'static-transparent',
    },
    dots: {
      display: false,
      opacity: 20,
      size: '2',
      color: 'brand-on-background-weak',
    },
    grid: {
      display: true,
      opacity: 20,
      color: 'neutral-alpha-weak',
      width: '0.25rem',
      height: '0.25rem',
    },
    lines: {
      display: true,
      opacity: 60,
      color: 'neutral-alpha-weak',
      size: '16',
      thickness: 1,
      angle: 90,
    },
  },
};

// default schema data
const schema = {
  logo: '',
  type: 'Organization',
  name: 'Once UI',
  description: home.description,
  email: 'lorant@once-ui.com',
};

// social links
const sameAs = {
  threads: 'https://www.threads.com/@once_ui',
  linkedin: 'https://www.linkedin.com/company/once-ui/',
  discord: 'https://discord.com/invite/5EyAQ4eNdS',
};

export {
  display,
  mailchimp,
  routes,
  protectedRoutes,
  baseURL,
  fonts,
  style,
  schema,
  sameAs,
  effects,
  dataStyle,
};
