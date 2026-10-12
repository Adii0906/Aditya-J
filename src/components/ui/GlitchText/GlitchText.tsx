import { cn } from '@/lib/cn';

type Props = {
  text: string;
  className?: string;
};

/** Brief RGB-split flicker on hover (of itself or a parent with the `group` class). CSS only. */
export function GlitchText({ text, className }: Props) {
  return (
    <span className={cn('glitch', className)} data-text={text}>
      {text}
    </span>
  );
}
