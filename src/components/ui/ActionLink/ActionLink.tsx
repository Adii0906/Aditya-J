import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';

type Props = {
  href: string;
  children: ReactNode;
  variant?: 'primary' | 'ghost' | 'text';
  external?: boolean;
  arrow?: '→' | '↗' | null;
  className?: string;
};

export function ActionLink({ href, children, variant = 'ghost', external, arrow, className }: Props) {
  const isExternal = external ?? /^https?:\/\//.test(href);
  const glyph = arrow === undefined ? (isExternal ? '↗' : '→') : arrow;

  const styles = {
    primary: 'min-h-11 px-5 bg-paper text-ink hover:opacity-85',
    ghost: 'min-h-11 px-5 border border-line-strong text-paper hover:border-paper hover:bg-tint/[0.06]',
    text: 'min-h-11 text-paper underline-offset-4 hover:underline',
  }[variant];

  return (
    <a
      href={href}
      className={cn(
        'group/link label inline-flex items-center justify-center gap-2 transition-colors duration-200',
        styles,
        className,
      )}
      {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      <span>{children}</span>
      {glyph ? (
        <span
          aria-hidden="true"
          className={cn(
            'inline-block transition-transform duration-200 ease-out-quart',
            glyph === '→'
              ? 'group-hover/link:translate-x-1'
              : 'group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5',
          )}
        >
          {glyph}
        </span>
      ) : null}
      {isExternal ? <span className="sr-only"> (opens in a new tab)</span> : null}
    </a>
  );
}
