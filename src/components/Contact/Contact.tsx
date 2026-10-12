import { site } from '@/data/site';
import { ActionLink } from '../ui/ActionLink';
import { Reveal, RevealText } from '../ui/RevealText';
import { Section } from '../ui/Section';

export function Contact() {
  const { links } = site;
  return (
    <Section id="contact" index="08" label="CONTACT" className="pb-16 md:pb-20">
      <RevealText
        as="p"
        text={"LET'S BUILD\nSOMETHING."}
        className="text-[clamp(3rem,11.5vw,10rem)] font-semibold leading-[0.88] tracking-[-0.055em] text-paper"
      />

      <div className="mt-12 grid gap-12 md:mt-16 md:grid-cols-12 md:gap-8">
        <Reveal className="md:col-span-6">
          <p className="max-w-[32rem] text-lg leading-relaxed text-paper/85 md:text-xl">
            Looking for an AI engineering internship where I can work on real products, systems and
            intelligent workflows.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {links.email ? (
              <ActionLink href={`mailto:${links.email}`} variant="primary" external={false} arrow="→">
                Email me
              </ActionLink>
            ) : null}
            <ActionLink href={links.linkedin} variant={links.email ? 'ghost' : 'primary'}>
              LinkedIn
            </ActionLink>
            <ActionLink href={links.github} variant="ghost">
              GitHub
            </ActionLink>
          </div>
        </Reveal>

        <Reveal className="md:col-span-4 md:col-start-9" delay={0.1}>
          <p className="label text-faint">Open to</p>
          <ul className="mt-3 border-t border-line">
            {site.openTo.map((o) => (
              <li key={o} className="label border-b border-line py-3 text-paper">
                {o}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}
