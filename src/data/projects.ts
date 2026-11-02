// Selected work. Order in this array is the order on the page.
// repo / demo / image set to null are hidden until filled in.
// Images go in /public/projects (1600x1000 webp recommended, under 300KB).

export type Project = {
  slug: string;
  title: string;
  summary: string;
  description: string;
  stack: string[];
  workflow?: string[];
  year: string | null;
  repo: string | null;
  demo: string | null;
  image: { src: string; width: number; height: number } | null;
};

export const projects: Project[] = [
  {
    slug: 'contribly',
    title: 'Contribly',
    summary: 'Find open-source issues that fit your skills—and are genuinely worth your time.',
    description:
      'GitHub labels only tell part of the story. Contribly checks for comment claims and linked pull requests, looks at repository and maintainer activity, and reads contribution policies. It then matches the remaining issues to your skills, proficiency, and available time, with an evidence-backed verdict for each. Less time investigating dead ends; more time contributing.',
    stack: ['Next.js', 'TypeScript', 'GitHub API', 'Supabase', 'Zod'],
    year: null,
    repo: 'https://github.com/Adii0906/Contriblyy',
    demo: 'https://contriblyy-xgkj.vercel.app/',
    image: null,
  },
  {
    slug: 'snapshop',
    title: 'SnapShop',
    summary: 'Turns product pamphlets into working online stores.',
    description:
      'SnapShop takes a product or catalogue pamphlet and turns it into a structured digital store. OCR reads the pamphlet, and LLM workflows pull out the products, prices and business details so a shop can go online without typing its catalogue by hand.',
    stack: ['Next.js', 'TypeScript', 'LangChain', 'LangGraph', 'OCR', 'Mistral'],
    year: null, // TODO: project year
    repo: null, // TODO: GitHub repo URL
    demo: null, // TODO: live demo URL
    image: { src: '/projects/snapshop.png', width: 1914, height: 846 },
  },
  {
    slug: 'ml-agent',
    title: 'ML-Agent',
    summary: 'An agent that runs a dataset through a machine learning workflow.',
    description:
      'ML-Agent walks a dataset through each stage of a machine learning workflow, from exploratory analysis to predictions, with LangGraph coordinating the steps.',
    stack: ['React', 'Python', 'LangGraph', 'Groq', 'Machine Learning'],
    workflow: ['EDA', 'Preprocessing', 'Feature Selection', 'Training', 'Evaluation', 'Prediction'],
    year: null, // TODO: project year
    repo: null, // TODO: GitHub repo URL
    demo: null, // TODO: live demo URL
    image: { src: '/projects/ml-agent.png', width: 1918, height: 889 },
  },
  {
    slug: 'mewly',
    title: 'Mewly',
    summary: 'A tiny desktop cat that keeps you company while you code.',
    description:
      'Mewly is a lightweight Windows desktop pet with pixel-art animations that reacts to coding activity and IDE focus. It also includes a Pomodoro timer, system-tray controls, draggable positioning, and persistent settings.',
    stack: ['Python', 'PyQt6', 'SQLite', 'Windows'],
    year: null,
    repo: 'https://github.com/Adii0906/Mewly',
    demo: null,
    image: { src: '/projects/mewly.png', width: 1690, height: 718 },
  },
];
