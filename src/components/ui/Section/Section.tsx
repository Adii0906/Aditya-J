import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';
import { SectionLabel } from '../SectionLabel';

type Props = {
  id: string;
  index: string;
  label: string;
  children: ReactNode;
  className?: string;
};

/** Shared section frame: hairline + numbered label, then content. */
export function Section({ id, index, label, children, className }: Props) {
  const headingId = `${id}-label`;
  return (
    <section id={id} aria-labelledby={headingId} className={cn('container-x py-20 md:py-28', className)}>
      <div className="border-t border-line pt-5">
        <SectionLabel as="h2" id={headingId} index={index} title={label} />
      </div>
      <div className="mt-10 md:mt-14">{children}</div>
    </section>
  );
}
