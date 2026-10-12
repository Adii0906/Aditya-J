import { site } from '@/data/site';

export function Footer() {
  const { links } = site;
  const items = [
    { label: 'GitHub', href: links.github },
    { label: 'LinkedIn', href: links.linkedin },
    ...(links.email ? [{ label: 'Email', href: `mailto:${links.email}` }] : []),
  ];

  return (
    <footer className="container-x pb-8 pt-4">
      <div className="grid gap-8 border-t border-line pt-8 sm:grid-cols-2 md:grid-cols-12">
        <div className="md:col-span-5">
          <p className="text-lg font-semibold tracking-[-0.02em] text-paper">{site.name.toUpperCase()}</p>
          <p className="label mt-1 text-mute">{site.role}</p>
        </div>

        <nav aria-label="Social" className="md:col-span-3">
          <ul className="flex flex-wrap gap-x-5 sm:flex-col">
            {items.map((i) => (
              <li key={i.label}>
                <a
                  href={i.href}
                  {...(i.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="label inline-flex min-h-10 items-center text-paper underline-offset-4 hover:underline"
                >
                  {i.label}
                  {i.href.startsWith('http') ? <span className="sr-only"> (opens in a new tab)</span> : null}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="label space-y-1.5 text-faint sm:col-span-2 md:col-span-4 md:text-right">
          <p>© 2026 {site.name}</p>
          <p>Built with React + TypeScript</p>
        </div>
      </div>
    </footer>
  );
}
