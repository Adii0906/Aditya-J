import { cn } from '@/lib/cn';

type Props = {
  href: string | null;
  className?: string;
  /** Bracketed nav style: [ RESUME ↗ ] */
  bracket?: boolean;
};

/**
 * Resume button. When the PDF is not in /public yet it renders as a muted, non-interactive label
 * so the spot is visible but nothing points to a missing file.
 */
export function ResumeLink({ href, className, bracket }: Props) {
  const text = bracket ? '[ Resume ↗ ]' : 'Resume ↗';

  if (!href) {
    return (
      <span
        aria-disabled="true"
        title="Resume coming soon"
        className={cn('label inline-flex cursor-not-allowed items-center gap-2 opacity-50', className)}
      >
        {bracket ? '[ Resume ]' : 'Resume'}
        <span className="text-faint">soon</span>
      </span>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn('label inline-flex items-center transition-colors', className)}
    >
      {text}
      <span className="sr-only"> (PDF, opens in a new tab)</span>
    </a>
  );
}
