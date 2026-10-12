'use client';

import { useTheme } from '@/hooks/useTheme';
import { cn } from '@/lib/cn';

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, toggle } = useTheme();
  const next = theme === 'dark' ? 'light' : 'dark';

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={`Switch to ${next} mode`}
      title={`Switch to ${next} mode`}
      className={cn(
        'label inline-flex min-h-9 min-w-11 items-center justify-center gap-2 px-2 text-mute transition-colors hover:text-paper',
        className,
      )}
    >
      <span aria-hidden="true" className="relative inline-block h-3 w-3 rounded-full border border-current">
        <span
          className={cn(
            'absolute inset-y-0 left-0 rounded-l-full bg-current transition-[width] duration-300 ease-out-quart',
            theme === 'dark' ? 'w-1/2' : 'w-full rounded-r-full',
          )}
        />
      </span>
      <span aria-hidden="true">{theme === 'dark' ? 'Dark' : 'Light'}</span>
    </button>
  );
}
