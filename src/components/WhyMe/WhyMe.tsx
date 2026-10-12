import { whyPoints } from '@/data/why';
import { Reveal } from '../ui/RevealText';
import { Section } from '../ui/Section';

export function WhyMe() {
  return (
    <Section id="why" index="07" label="WHY WORK WITH ME">
      <ol>
        {whyPoints.map((point, i) => (
          <li key={point} className="rule-row">
            <Reveal delay={i * 0.05}>
              <div className="group flex items-baseline gap-4 py-6 md:gap-10 md:py-8">
                <span className="label w-10 shrink-0 text-faint transition-colors group-hover:text-ember md:w-16">
                  {String(i + 1).padStart(2, '0')} /
                </span>
                <p className="min-w-0 text-[clamp(1.5rem,4.2vw,3.5rem)] font-medium leading-[1.02] tracking-[-0.04em] text-paper/60 transition-colors duration-300 group-hover:text-paper">
                  {point}
                </p>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
