import { achievements } from '@/data/achievements';
import { Reveal } from '../ui/RevealText';
import { Section } from '../ui/Section';

export function Achievements() {
  return (
    <Section id="highlights" index="04" label="HIGHLIGHTS">
      <Reveal>
        <ul>
          {achievements.map((a, i) => {
            const inner = (
              <>
                <span className="label w-7 shrink-0 text-faint">{String(i + 1).padStart(2, '0')}</span>
                <span className="min-w-0 flex-1 text-lg font-medium leading-snug tracking-[-0.02em] text-paper transition-transform duration-300 ease-out-quart [@media(hover:hover)]:group-hover:translate-x-1.5 md:text-2xl">
                  {a.title}
                  {a.link ? <span aria-hidden="true" className="ml-2 text-mute">↗</span> : null}
                </span>
                <span className="label basis-full pl-10 text-mute sm:basis-auto sm:pl-0 sm:text-right">
                  {a.detail}
                </span>
              </>
            );
            const cls =
              'group flex flex-wrap items-baseline gap-x-3 gap-y-1 px-1 py-4 transition-colors duration-300 hover:bg-tint/[0.035] sm:flex-nowrap md:py-5';
            return (
              <li key={a.title} className="rule-row">
                {a.link ? (
                  <a href={a.link} target="_blank" rel="noopener noreferrer" className={cls}>
                    {inner}
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                ) : (
                  <div className={cls}>{inner}</div>
                )}
              </li>
            );
          })}
        </ul>
      </Reveal>
    </Section>
  );
}
