import { ScrambleText } from '../ScrambleText';
import { cn } from '@/lib/cn';

/** Change this to '/' if you prefer "01 / ABOUT". */
export const LABEL_SEPARATOR = '—';

type Props = {
  index: string;
  title: string;
  className?: string;
  as?: 'p' | 'h2' | 'h3';
  id?: string;
};

export function SectionLabel({ index, title, className, as: Tag = 'p', id }: Props) {
  return (
    <Tag id={id} className={cn('label flex items-center gap-3 font-normal text-mute', className)}>
      <span aria-hidden="true" className="h-px w-6 shrink-0 bg-line-strong" />
      <ScrambleText text={`${index} ${LABEL_SEPARATOR} ${title}`} trigger="view" />
    </Tag>
  );
}
