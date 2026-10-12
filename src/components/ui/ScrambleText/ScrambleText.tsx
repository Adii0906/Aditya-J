'use client';

import { useCallback, useEffect, useRef, useState, type ElementType } from 'react';
import { useInView } from 'motion/react';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { cn } from '@/lib/cn';

const GLYPHS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#%&/<>_=+*';
const KEEP = new Set([' ', '·', '/', '—', '[', ']', '>', '.']);

type Props = {
  text: string;
  as?: ElementType;
  className?: string;
  /** mount: plays once on load. view: once when scrolled into view. hover: on pointer enter / focus. */
  trigger?: 'mount' | 'view' | 'hover';
  delay?: number;
  duration?: number;
};

/**
 * Decodes text from random glyphs to the final string.
 * Server render and screen readers always get the real text.
 * Use on monospace text so widths never jump.
 */
export function ScrambleText({
  text,
  as: Tag = 'span',
  className,
  trigger = 'view',
  delay = 0,
  duration = 520,
}: Props) {
  const ref = useRef<HTMLElement>(null);
  const [display, setDisplay] = useState(text);
  const frame = useRef<number | null>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const reduced = useReducedMotion();
  const inView = useInView(ref, { once: true, amount: 0.6 });

  const play = useCallback(() => {
    if (reduced) return;
    if (frame.current) cancelAnimationFrame(frame.current);
    if (timer.current) clearTimeout(timer.current);
    const chars = Array.from(text);
    let start: number | null = null;

    const tick = (now: number) => {
      if (start === null) start = now;
      const t = now - start;
      const out = chars.map((ch, i) => {
        if (KEEP.has(ch)) return ch;
        if (t >= (i / chars.length) * duration) return ch;
        return GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
      });
      setDisplay(out.join(''));
      if (t < duration) {
        frame.current = requestAnimationFrame(tick);
      } else {
        setDisplay(text);
        frame.current = null;
      }
    };

    timer.current = setTimeout(() => {
      frame.current = requestAnimationFrame(tick);
    }, delay);
  }, [text, duration, delay, reduced]);

  useEffect(() => {
    if (trigger === 'mount') play();
  }, [trigger, play]);

  useEffect(() => {
    if (trigger === 'view' && inView) play();
  }, [trigger, inView, play]);

  useEffect(
    () => () => {
      if (frame.current) cancelAnimationFrame(frame.current);
      if (timer.current) clearTimeout(timer.current);
    },
    [],
  );

  const hoverProps = trigger === 'hover' ? { onMouseEnter: play, onFocus: play } : {};

  return (
    <Tag ref={ref} className={cn('relative', className)} {...hoverProps}>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">{display}</span>
    </Tag>
  );
}
