import { currentlyBuilding } from '@/data/building';
import { Cursor } from '../ui/Cursor';
import { Reveal } from '../ui/RevealText';
import { ScrambleText } from '../ui/ScrambleText';
import { Section } from '../ui/Section';

export function CurrentlyBuilding() {
  const b = currentlyBuilding;
  return (
    <Section id="building" index="06" label="CURRENTLY BUILDING">
      <Reveal>
        <div className="grid gap-6 border border-line bg-scrim/35 p-5 md:grid-cols-12 md:gap-8 md:p-8">
          <div className="md:col-span-7">
            <p className="label text-cyan">
              <ScrambleText text="BUILDING" trigger="view" />
              <Cursor />
            </p>
            <h3 className="mt-4 text-[clamp(2.25rem,6vw,4.5rem)] font-semibold leading-[0.95] tracking-[-0.045em] text-paper">
              {b.link ? (
                <a href={b.link} target="_blank" rel="noopener noreferrer" className="underline-offset-8 hover:underline">
                  {b.name} <span aria-hidden="true" className="text-[0.5em] text-mute">↗</span>
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              ) : (
                b.name
              )}
            </h3>
          </div>
          <div className="flex flex-col justify-end gap-4 md:col-span-5">
            <p className="text-lg leading-snug text-paper/90">{b.description}</p>
            <p className="label text-faint">Status / {b.status}</p>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
