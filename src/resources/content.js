import { Logo } from '@once-ui-system/core';

const person = {
  firstName: 'Mert',
  lastName: 'Kaya',
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: 'AI & Fullstack Engineer',
  avatar: '/images/avatar.jpg',
  email: 'mertkayacs@gmail.com',
  location: 'Europe/Istanbul', // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ['English', 'German', 'Turkish'], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the
      intersection of creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: 'GitHub',
    icon: 'github',
    link: 'https://github.com/mertkayacs',
  },
  {
    name: 'LinkedIn',
    icon: 'linkedin',
    link: 'https://www.linkedin.com/in/mertkayacs',
  },
  {
    name: 'Kaggle',
    icon: 'kaggle',
    link: 'https://www.kaggle.com/mertkayacs',
  },
  {
    name: 'LeetCode',
    icon: 'leetcode',
    link: `https://leetcode.com/u/mertkayacs/`,
  },
  {
    name: 'Email',
    icon: 'email',
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: '/',
  image: '/images/og/home.jpg',
  label: 'Home',
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Code that thinks. Ideas that endure.</>,
  featured: {
    display: true,
    title: (
      <>
        AI Engineer at : <strong className="ml-4"> Enocta </strong>
      </>
    ),
    href: '/work/building-once-ui-a-customizable-design-system',
  },
  subline: (
    <>
      Hi! I'm <strong>Mert Kaya</strong>. <em>MSc of CS</em>, AI & Fullstack
      Engineer.
      <br />
      <em>Engineering is my background — creating things is what I love.</em>
      <br />I work at the intersection of <em>code and intelligence</em>.
    </>
  ),
};
const about = {
  path: '/about',
  label: 'About',
  title: `About Me`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: 'https://cal.com/mertkayacs',
  },
  intro: {
    display: true,
    title: 'Introduction',
    description: <></>,
  },
  work: {
    display: true,
    title: 'Work Experience',
    experiences: [
      {
        company: 'KKB (Credit Bureau of Turkey)',
        timeframe: 'Mar. 2023 – Aug. 2024',
        role: 'Fullstack Engineer',
        achievements: [
          <>Worked on financial software used across the banking sector.</>,
          <>
            Built and maintained fullstack features with performance and
            reliability in mind.
          </>,
          <>
            Collaborated with product and design teams to deliver
            production-ready features.
          </>,
        ],
        images: [],
      },
      {
        company: 'AgriDL',
        timeframe: 'Sep. 2022 – Feb. 2023',
        role: 'AI & Fullstack Engineer (Contract)',
        achievements: [
          <>Developed deep learning models for smart farming applications.</>,
          <>
            Built a mobile app from scratch and integrated it with an AI
            backend.
          </>,
          <>
            Collaborated with government partners on real-world agricultural use
            cases.
          </>,
        ],
        images: [],
      },
      {
        company: 'Alictus',
        timeframe: 'Dec. 2021 – Sep. 2022',
        role: 'Fullstack Engineer',
        achievements: [
          <>
            Migrated internal tools to the cloud to improve performance and
            maintainability.
          </>,
          <>
            Worked closely with data and backend teams on core systems and
            features.
          </>,
        ],
        images: [],
      },
      {
        company: 'SimBt, BiSoft, Roar Games',
        timeframe: '2019 – 2021',
        role: 'Software Engineer (Freelance / Internship)',
        achievements: [
          <>
            Worked on various roles involving web, AI, and game development
            projects.
          </>,
          <>
            Built production-ready tools and prototypes both solo and in teams.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: 'Studies',
    institutions: [
      {
        name: 'TED University',
        description: (
          <>
            MSc in Computer Engineering / AI – GPA: 3.3 / 4.0
            <br />
            <em>Full Academic Scholarship</em>
            <br />
            <em>Focused on AI/DL/Computer Vision</em>
          </>
        ),
      },
      {
        name: 'IU International University of Applied Sciences (Berlin)',
        description: (
          <>
            MSc in Artificial Intelligence (Dropped out)
            <br />
            <em>Full Scholarship Recipient</em>
          </>
        ),
      },
      {
        name: 'TOBB University of Economics and Technology',
        description: <>BSc in Computer Engineering</>,
      },
    ],
  },

  technical: {
    display: true, // set to false to hide this section
    title: 'Technical skills',
    skills: [
      {
        title: 'Figma',
        description: (
          <>Able to prototype in Figma with Once UI with unnatural speed.</>
        ),
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: '/images/projects/project-01/cover-02.jpg',
            alt: 'Project image',
            width: 16,
            height: 9,
          },
          {
            src: '/images/projects/project-01/cover-03.jpg',
            alt: 'Project image',
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: 'Next.js',
        description: (
          <>Building next gen apps with Next.js + Once UI + Supabase.</>
        ),
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: '/images/projects/project-01/cover-04.jpg',
            alt: 'Project image',
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog = {
  path: '/blog',
  label: 'Blog',
  title: 'Writing about design and tech...',
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: '/projects',
  label: 'Projects',
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  path: '/gallery',
  label: 'Gallery',
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: '/images/gallery/horizontal-1.jpg',
      alt: 'image',
      orientation: 'horizontal',
    },
    {
      src: '/images/gallery/horizontal-2.jpg',
      alt: 'image',
      orientation: 'horizontal',
    },
    {
      src: '/images/gallery/horizontal-3.jpg',
      alt: 'image',
      orientation: 'horizontal',
    },
    {
      src: '/images/gallery/horizontal-4.jpg',
      alt: 'image',
      orientation: 'horizontal',
    },
    {
      src: '/images/gallery/vertical-1.jpg',
      alt: 'image',
      orientation: 'vertical',
    },
    {
      src: '/images/gallery/vertical-2.jpg',
      alt: 'image',
      orientation: 'vertical',
    },
    {
      src: '/images/gallery/vertical-3.jpg',
      alt: 'image',
      orientation: 'vertical',
    },
    {
      src: '/images/gallery/vertical-4.jpg',
      alt: 'image',
      orientation: 'vertical',
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
