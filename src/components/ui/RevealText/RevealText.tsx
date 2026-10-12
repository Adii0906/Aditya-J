'use client';

import { motion, type Variants } from 'motion/react';
import type { ElementType, ReactNode } from 'react';

const STEP = 0.045;

const wordVariants: Variants = {
  hidden: { y: '105%' },
  show: (i: number) => ({
    y: '0%',
    transition: { duration: 0.7, ease: [0.25, 1, 0.5, 1], delay: i * STEP },
  }),
};

type RevealTextProps = {
  text: string;
  as?: ElementType;
  className?: string;
  /** Delay before the first word, seconds. */
  delay?: number;
  /** Animate on load instead of on scroll. */
  immediate?: boolean;
};

/**
 * Masked word-by-word rise. Words wrap naturally, so it is safe at 360px.
 * Use "\n" in text for intentional line breaks on wide screens.
 * Screen readers get the plain text.
 */
export function RevealText({ text, as: Tag = 'p', className, delay = 0, immediate }: RevealTextProps) {
  const lines = text.split('\n');
  let wordIndex = 0;
  const trigger = immediate
    ? { animate: 'show' as const }
    : { whileInView: 'show' as const, viewport: { once: true, amount: 0.4 } };

  return (
    <Tag className={className}>
      <span className="sr-only">{text.replace(/\n/g, ' ')}</span>
      <motion.span aria-hidden="true" className="block" initial="hidden" {...trigger}>
        {lines.map((line, li) => {
          const words = line.split(' ');
          return (
            <span key={li} className="md:block">
              {words.map((word, wi) => {
                const i = wordIndex++;
                return (
                  <span key={wi} className="inline-block overflow-hidden pb-[0.1em] -mb-[0.1em] align-top">
                    <motion.span
                      className="inline-block"
                      variants={wordVariants}
                      custom={i + delay / STEP}
                    >
                      {word}
                    </motion.span>
                    {wi < words.length - 1 || li < lines.length - 1 ? '\u00a0' : null}
                  </span>
                );
              })}
            </span>
          );
        })}
      </motion.span>
    </Tag>
  );
}

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

/** Short fade for blocks. Opacity only, so long pages stay calm. */
export function Reveal({ children, className, delay = 0 }: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, ease: 'easeOut', delay }}
    >
      {children}
    </motion.div>
  );
}
