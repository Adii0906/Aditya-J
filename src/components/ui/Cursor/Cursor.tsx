import { cn } from '@/lib/cn';

export function Cursor({ className }: { className?: string }) {
  return (
    <span aria-hidden="true" className={cn('inline-block animate-blink', className)}>
      _
    </span>
  );
}
