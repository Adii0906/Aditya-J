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
        text={'I follow the weird idea\nuntil it works.'}
        className="max-w-[18ch] text-[clamp(2.1rem,6.2vw,5.25rem)] font-medium leading-[0.98] tracking-[-0.045em] text-paper md:max-w-none"
      />

      <div className="mt-14 grid gap-12 md:mt-20 md:grid-cols-12 md:gap-8">
        <Reveal className="md:col-span-6 lg:col-span-5">
          <div className="space-y-5 text-base leading-relaxed text-paper/85 md:text-lg">
            <p>
              I&apos;m a self-driven developer with a few oddly specific ideas always in the queue.
              I like trying unfamiliar tools and tech stacks, building the weird version first,
              then breaking, debugging, and figuring it out until it works. My{' '}
              <a
                href={site.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-paper underline decoration-line-strong underline-offset-4 hover:decoration-paper"
              >
                GitHub
              </a>{' '}
              is the trail: practical projects, unconventional experiments, and plenty learned by
              building instead of following another tutorial.
            </p>
            <p>
              I build agentic AI applications with Python, LangChain, LangGraph, and FastAPI—from
              agents and multi-step workflows to REST APIs and backend systems. The frameworks are
              tools; solid software engineering makes them useful.
            </p>
            <p>
              I take ideas past the prototype.{' '}
              <a
                href="https://devstreak-website.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-paper underline decoration-line-strong underline-offset-4 hover:decoration-paper"
              >
                DevStreak
              </a>{' '}
              is a developer app I&apos;ve put in friends&apos; hands to test.{' '}
              <a
                href="https://contriblyy-xgkj.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-paper underline decoration-line-strong underline-offset-4 hover:decoration-paper"
              >
                Contribly
              </a>{' '}
              checks whether open-source issues are truly available and worth pursuing. I like
              making things people can actually use.
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
