'use client';

import { AnimatePresence, motion } from 'motion/react';
import { useCallback, useEffect, useRef, useState } from 'react';
import { navItems, site } from '@/data/site';
import { useActiveSection } from '@/hooks/useActiveSection';
import { cn } from '@/lib/cn';
import { ResumeLink } from '../ui/ResumeLink';
import { ScrambleText } from '../ui/ScrambleText';
import { ThemeToggle } from '../ui/ThemeToggle';

// Every section on the page, so the indicator clears on sections that are not in the nav.
const ids = ['about', 'work', 'toolkit', 'highlights', 'open-source', 'building', 'why', 'contact'] as const;

export function Navbar({ resumeHref }: { resumeHref: string | null }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const active = useActiveSection(ids);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const close = useCallback(() => {
    setOpen(false);
    toggleRef.current?.focus();
  }, []);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    firstLinkRef.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && close();
    const onResize = () => window.innerWidth >= 768 && setOpen(false);
    window.addEventListener('keydown', onKey);
    window.addEventListener('resize', onResize);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('resize', onResize);
    };
  }, [open, close]);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-300',
        scrolled || open
          ? 'border-b border-line bg-scrim/60 backdrop-blur-md'
          : 'border-b border-transparent bg-transparent',
      )}
    >
      <nav aria-label="Primary" className="container-x flex h-16 items-center justify-between gap-6">
        <a
          href="#top"
          className="font-mono text-base font-medium tracking-tight text-paper"
          aria-label={`${site.name} home`}
          onClick={() => setOpen(false)}
        >
          <ScrambleText text={site.shortName} trigger="hover" />
        </a>

        <ul className="hidden items-center gap-5 md:flex lg:gap-7">
          {navItems.map((item) => {
            const isActive = active === item.id;
            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  aria-current={isActive ? 'true' : undefined}
                  className={cn(
                    'label relative inline-flex min-h-11 items-center transition-colors',
                    isActive ? 'text-paper' : 'text-mute hover:text-paper',
                  )}
                >
                  <ScrambleText text={item.label} trigger="hover" duration={300} />
                  <span
                    aria-hidden="true"
                    className={cn(
                      'absolute -bottom-0 left-0 h-px bg-paper transition-all duration-300 ease-out-quart',
                      isActive ? 'w-full' : 'w-0',
                    )}
                  />
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <div className="hidden md:block">
            <ResumeLink
              href={resumeHref}
              bracket
              className="min-h-9 border border-line-strong px-3 text-paper hover:border-paper hover:bg-tint/[0.06]"
            />
          </div>

          <button
            ref={toggleRef}
            type="button"
            className="label -mr-2 inline-flex min-h-11 min-w-11 items-center justify-center gap-2 px-2 text-paper md:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span>{open ? 'Close' : 'Menu'}</span>
            <span aria-hidden="true" className="relative block h-2.5 w-5">
              <span
                className={cn(
                  'absolute left-0 h-px w-5 bg-paper transition-transform duration-300 ease-out-quart',
                  open ? 'top-1/2 rotate-45' : 'top-0',
                )}
              />
              <span
                className={cn(
                  'absolute left-0 h-px w-5 bg-paper transition-transform duration-300 ease-out-quart',
                  open ? 'top-1/2 -rotate-45' : 'bottom-0',
                )}
              />
            </span>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-menu"
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 bottom-0 top-16 z-40 flex flex-col overflow-y-auto bg-scrim/90 backdrop-blur-md md:hidden"
          >
            <ul className="container-x flex flex-1 flex-col justify-center gap-1 py-10">
              {navItems.map((item, i) => (
                <motion.li
                  key={item.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: 0.04 * i, ease: [0.25, 1, 0.5, 1] }}
                >
                  <a
                    ref={i === 0 ? firstLinkRef : undefined}
                    href={`#${item.id}`}
                    onClick={() => setOpen(false)}
                    className="flex min-h-14 items-baseline gap-4 border-b border-line py-3"
                  >
                    <span className="label w-6 text-faint">{String(i + 1).padStart(2, '0')}</span>
                    <span className="text-[clamp(2rem,10vw,2.75rem)] font-medium leading-none tracking-[-0.03em] text-paper">
                      {item.label}
                    </span>
                  </a>
                </motion.li>
              ))}
            </ul>

            <div className="container-x flex flex-wrap gap-3 pb-10">
              <ResumeLink
                href={resumeHref}
                className="min-h-11 bg-paper px-4 text-ink"
              />
              <a
                href={site.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="label inline-flex min-h-11 items-center border border-line-strong px-4 text-paper"
              >
                GitHub ↗
              </a>
              <a
                href={site.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="label inline-flex min-h-11 items-center border border-line-strong px-4 text-paper"
              >
                LinkedIn ↗
              </a>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
