import { toolkit } from '@/data/toolkit';
import { Reveal } from '../ui/RevealText';
import { ScrambleText } from '../ui/ScrambleText';
import { Section } from '../ui/Section';

export function Toolkit() {
  return (
    <Section id="toolkit" index="03" label="TOOLKIT">
      <dl>
        {toolkit.map((row, i) => (
          <Reveal key={row.group} delay={i * 0.06}>
            <div className="grid gap-3 py-6 md:grid-cols-12 md:gap-8 md:py-7 rule-row">
              <dt className="flex items-baseline gap-3 md:col-span-3">
                <span className="label text-faint">{String(i + 1).padStart(2, '0')}</span>
                <span className="text-xl font-medium tracking-[-0.02em] text-paper md:text-2xl">{row.group}</span>
              </dt>
              <dd className="md:col-span-9">
                <ul className="flex flex-wrap gap-x-2 gap-y-2">
                  {row.items.map((item) => (
                    <li key={item}>
                      <ScrambleText
                        text={item}
                        trigger="hover"
                        duration={320}
                        className="label inline-flex min-h-8 items-center border border-line px-2.5 text-paper/90 transition-colors hover:border-line-strong hover:text-paper"
                      />
                    </li>
                  ))}
                </ul>
              </dd>
            </div>
          </Reveal>
        ))}
      </dl>
    </Section>
  );
}
