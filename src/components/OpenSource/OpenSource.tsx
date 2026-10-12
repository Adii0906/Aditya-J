import { openSourceStats, repos } from '@/data/openSource';
import { site } from '@/data/site';
import { ActionLink } from '../ui/ActionLink';
import { Reveal } from '../ui/RevealText';
import { Section } from '../ui/Section';

const kindLabel = { contribution: 'Contribution', package: 'Package', tool: 'Tool' } as const;

export function OpenSource() {
  const handle = site.links.githubHandle;

  return (
    <Section id="open-source" index="05" label="OPEN SOURCE">
      <div className="grid gap-12 md:grid-cols-12 md:gap-8">
        <div className="md:col-span-5">
          <p className="text-[clamp(1.75rem,4vw,3rem)] font-medium leading-[1.02] tracking-[-0.04em] text-paper">
            Code I&apos;ve shipped in the open.
          </p>

          <dl className="mt-8 grid grid-cols-3 border-y border-line">
            {openSourceStats.map((s, i) => (
              <div key={s.label} className={i ? 'border-l border-line py-4 pl-3 sm:pl-4' : 'py-4 pr-3'}>
                <dt className="label break-words text-[0.625rem] text-faint sm:text-xs">{s.label}</dt>
                <dd className="mt-2 font-mono text-2xl tracking-[-0.03em] text-paper md:text-3xl">
                  {s.value ?? '—'}
                </dd>
              </div>
            ))}
          </dl>

          <div className="mt-6">
            <ActionLink href={site.links.github} variant="ghost">
              github.com/{handle}
            </ActionLink>
          </div>
        </div>

        <div className="min-w-0 md:col-span-7">
          <Reveal>
            <figure className="border border-line bg-scrim/40 p-4">
              <figcaption className="label mb-3 flex justify-between gap-4 text-faint">
                <span>Contributions</span>
                <span>@{handle}</span>
              </figcaption>
              <div className="overflow-x-auto overscroll-x-contain">
                {/* Public, live contribution chart rendered from GitHub data. */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`https://ghchart.rshah.org/73bfc4/${handle}`}
                  alt={`GitHub contribution chart for ${handle}`}
                  loading="lazy"
                  decoding="async"
                  width={720}
                  height={112}
                  className="h-auto min-w-[640px] w-full opacity-90 gh-chart"
                />
              </div>
            </figure>
          </Reveal>

          <ul className="mt-8">
            {repos.map((r) => (
              <li key={r.name} className="rule-row">
                <div className="grid gap-1.5 py-5 sm:grid-cols-[1fr_auto] sm:gap-x-6">
                  <h3 className="min-w-0 break-words text-lg font-medium tracking-[-0.02em] text-paper">
                    {r.url ? (
                      <a
                        href={r.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline-offset-4 hover:underline"
                      >
                        {r.name} <span aria-hidden="true" className="text-mute">↗</span>
                        <span className="sr-only"> (opens in a new tab)</span>
                      </a>
                    ) : (
                      r.name
                    )}
                  </h3>
                  <p className="label text-faint sm:row-start-1 sm:col-start-2 sm:text-right">{kindLabel[r.kind]}</p>
                  <p className="text-[0.95rem] leading-relaxed text-mute sm:col-span-2">{r.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
