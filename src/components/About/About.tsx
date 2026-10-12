import { site } from '@/data/site';
import { Reveal, RevealText } from '../ui/RevealText';
import { Section } from '../ui/Section';

const info = [
  { key: 'Education', lines: [site.education.degree, site.education.institute] },
  { key: 'Current focus', lines: ['Agentic AI / LLM Applications / RAG'] },
  { key: 'Location', lines: [site.location] },
];

export function About() {
  return (
    <Section id="about" index="01" label="ABOUT">
      <RevealText
        as="p"
        text={'I build AI systems that turn ideas\ninto useful software.'}
        className="max-w-[18ch] text-[clamp(2.1rem,6.2vw,5.25rem)] font-medium leading-[0.98] tracking-[-0.045em] text-paper md:max-w-none"
      />

      <div className="mt-14 grid gap-12 md:mt-20 md:grid-cols-12 md:gap-8">
        <Reveal className="md:col-span-6 lg:col-span-5">
          <div className="space-y-5 text-base leading-relaxed text-paper/85 md:text-lg">
            <p>
              I&apos;m an engineering student studying Artificial Intelligence and Data Science in
              Bengaluru. Most of my time goes into agentic AI, LLM applications and retrieval
              (RAG) pipelines.
            </p>
            <p>
              I care just as much about the software around the model: the workflow that decides
              what runs when, the interface people actually use, and the developer tools that make
              the whole thing easier to build and debug.
            </p>
          </div>
        </Reveal>

        <Reveal className="md:col-span-5 md:col-start-8 lg:col-span-4 lg:col-start-9" delay={0.1}>
          <dl className="divide-y divide-line border-y border-line">
            {info.map((row) => (
              <div key={row.key} className="grid gap-1.5 py-4">
                <dt className="label text-faint">{row.key}</dt>
                {row.lines.map((l) => (
                  <dd key={l} className="text-[0.95rem] leading-snug text-paper">
                    {l}
                  </dd>
                ))}
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </Section>
  );
}
