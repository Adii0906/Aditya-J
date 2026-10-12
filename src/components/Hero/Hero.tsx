'use client';

import { motion } from 'motion/react';
import { heroMeta, site } from '@/data/site';
import { ActionLink } from '../ui/ActionLink';
import { Cursor } from '../ui/Cursor';
import { ResumeLink } from '../ui/ResumeLink';
import { RevealText } from '../ui/RevealText';
import { ScrambleText } from '../ui/ScrambleText';

const fade = (delay: number) => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.6, ease: 'easeOut' as const, delay },
});

export function Hero({ resumeHref }: { resumeHref: string | null }) {
  const { links } = site;

  return (
    <section
      id="top"
      aria-label="Introduction"
      className="container-x flex min-h-[100svh] flex-col justify-between pb-8 pt-24 md:pb-10 md:pt-28"
    >
      <motion.div {...fade(0)}>
        <p className="label inline-flex items-center gap-2 text-paper">
          <span aria-hidden="true" className="relative inline-flex h-1.5 w-1.5">
            <span className="absolute inset-0 animate-ping rounded-full bg-cyan opacity-60 motion-reduce:hidden" />
            <span className="relative h-1.5 w-1.5 rounded-full bg-cyan" />
          </span>
          <ScrambleText text="[ AVAILABLE FOR INTERNSHIPS ]" trigger="mount" duration={700} />
        </p>
      </motion.div>

      <div className="grid items-end gap-12 py-10 md:py-14 lg:grid-cols-12 lg:gap-8">
        <div className="min-w-0 lg:col-span-8">
          <p className="label mb-5 text-mute md:mb-7">
            <ScrambleText text="> SELF GRIND DEVELOPER" trigger="mount" delay={150} />
            <Cursor className="ml-0.5 text-paper" />
          </p>

          <RevealText
            as="h1"
            text={site.name.toUpperCase()}
            immediate
            delay={0.1}
            className="whitespace-nowrap text-[clamp(3.25rem,19vw,9.5rem)] font-semibold leading-[0.88] tracking-[-0.03em] text-paper lg:text-[clamp(5rem,12.5vw,11.5rem)]"
          />

          <motion.div {...fade(0.45)} className="mt-8 md:mt-10">
            <div className="min-w-0">
              <p className="text-[clamp(1.5rem,3.2vw,2.25rem)] font-medium leading-[1.05] tracking-[-0.03em] text-paper">
                {site.role}
              </p>
              <p className="label mt-3 text-mute">{site.focus.join(' · ')}</p>
            </div>
          </motion.div>

          <motion.div {...fade(0.6)} className="mt-8">
            <p className="max-w-[36rem] text-base leading-relaxed text-paper/85 md:text-lg">{site.intro}</p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <ActionLink href="#work" variant="primary" arrow="→">
                View my work
              </ActionLink>
              <ResumeLink
                href={resumeHref}
                className="min-h-11 gap-2 border border-line-strong px-5 text-paper hover:border-paper hover:bg-tint/[0.06]"
              />
            </div>

            <ul className="mt-5 flex flex-wrap gap-x-6" aria-label="Profiles">
              <li>
                <ActionLink href={links.github} variant="text" className="text-mute hover:text-paper">
                  GitHub
                </ActionLink>
              </li>
              <li>
                <ActionLink href={links.linkedin} variant="text" className="text-mute hover:text-paper">
                  LinkedIn
                </ActionLink>
              </li>
            </ul>
          </motion.div>
        </div>

      </div>

      <motion.dl
        {...fade(0.8)}
        className="grid grid-cols-2 gap-x-4 gap-y-5 border-t border-line pt-5 md:grid-cols-4"
      >
        {heroMeta.map((m) => (
          <div key={m.key} className="min-w-0">
            <dt className="label text-faint">{m.key} /</dt>
            <dd className="label mt-1.5 break-words text-paper">{m.value}</dd>
          </div>
        ))}
      </motion.dl>
    </section>
  );
}
