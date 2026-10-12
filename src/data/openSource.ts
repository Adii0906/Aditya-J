// Open source section.
// value: null renders as a dash until you add the number.

export const openSourceStats: { label: string; value: string | null }[] = [
  { label: 'Commits', value: null }, // TODO: total commits (from GitHub)
  { label: 'Contributions', value: null }, // TODO: contributions in the last year
  { label: 'Merged PRs', value: '6+' },
];

export type Repo = {
  name: string;
  kind: 'contribution' | 'package' | 'tool';
  description: string;
  url: string | null;
};

export const repos: Repo[] = [
  {
    name: 'TODO: Chrome extension name',
    kind: 'tool',
    description: 'Chrome extension with 145+ users. TODO: what it does.',
    url: null, // TODO: repo or store URL
  },
  {
    name: 'TODO: PyPI package name',
    kind: 'package',
    description: 'Python package with 1500+ downloads. TODO: what it does.',
    url: null, // TODO: PyPI or repo URL
  },
  {
    name: 'TODO: Hacktoberfest contribution repo',
    kind: 'contribution',
    description: 'TODO: what the merged PRs changed.',
    url: null, // TODO: PR or repo URL
  },
];
