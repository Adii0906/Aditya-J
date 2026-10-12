'use client';

import { useEffect, useState } from 'react';

/** Returns the id of the section crossing the middle of the viewport. `resetId` (e.g. the hero) clears it. */
export function useActiveSection(ids: readonly string[], resetId = 'top') {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const els = [resetId, ...ids]
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (!els.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id === resetId ? null : entry.target.id);
        }
      },
      { rootMargin: '-45% 0px -50% 0px' },
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [ids, resetId]);

  return active;
}
