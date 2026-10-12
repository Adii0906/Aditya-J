// Global identity + links.
// Any value set to null is hidden in the UI until you fill it in.

export const site = {
  name: 'Aditya J.',
  shortName: 'AJ.',
  role: 'Self Grind Developer',
  focus: ['Agentic AI', 'LLMs', 'RAG'],
  intro:
    'I build AI applications and developer tools around LLMs, agentic workflows, and practical software systems.',

  location: 'Bengaluru, India',
  city: 'Bengaluru',
  education: {
    degree: 'B.E. Artificial Intelligence & Data Science',
    institute: 'CMR Institute of Technology, Bengaluru',
  },

  availability: 'Open to internships',
  openTo: ['AI engineering internships', 'Software engineering internships'],

  links: {
    github: 'https://github.com/Adii0906',
    githubHandle: 'Adii0906',
    linkedin: 'https://www.linkedin.com/in/aditya-j-458824313/',
    portfolio: 'https://adiii-dev.vercel.app/',
    // TODO: add your email address, e.g. 'you@example.com'
    email: null as string | null,
    // TODO: add your resume PDF at /public/resume.pdf. The Resume buttons switch on automatically after rebuild.
    // An external link (e.g. Google Drive) also works here.
    resume: '/resume.pdf' as string | null,
  },
  portrait: {
    src: '/images/aditya.jpg',
    alt: 'Portrait of Aditya J.',
  },
} as const;

export const navItems = [
  { id: 'about', label: 'About' },
  { id: 'work', label: 'Work' },
  { id: 'highlights', label: 'Highlights' },
  { id: 'open-source', label: 'Open Source' },
  { id: 'contact', label: 'Contact' },
] as const;

export const heroMeta = [
  { key: 'Based in', value: 'Bengaluru' },
  { key: 'Focus', value: 'AI Engineering' },
  { key: 'Stack', value: 'Python · React · LLMs' },
  { key: 'Status', value: 'Open to internships' },
] as const;
