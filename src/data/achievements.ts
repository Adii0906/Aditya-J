// Highlights. Keep these factual; each one should be verifiable.

export type Achievement = {
  title: string;
  detail: string;
  link?: string | null;
};

export const achievements: Achievement[] = [
  { title: 'Hacktoberfest 2025 Super Contributor', detail: '6+ merged PRs', link: null },
  { title: 'Hackathon Winner', detail: 'TODO: event name and year', link: null },
  { title: 'Top 5', detail: 'Amadeus and Contentstack hackathons', link: null },
  { title: 'Scaler Meta PyTorch OpenEnv', detail: 'Finalist', link: null },
  { title: 'SWOC', detail: 'Mentor', link: null },
  { title: 'Chrome extension', detail: '145+ users', link: null }, // TODO: Chrome Web Store URL
  { title: 'PyPI package', detail: '1500+ downloads', link: null }, // TODO: PyPI URL
];
