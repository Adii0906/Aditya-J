import Image from 'next/image';
import { site } from '@/data/site';
import { cn } from '@/lib/cn';

type Props = {
  variant: 'full' | 'thumb';
  className?: string;
};

const Tick = ({ className }: { className: string }) => (
  <span aria-hidden="true" className={cn('absolute h-2.5 w-2.5 border-paper/70', className)} />
);

/**
 * Hero photo. `full` is the desktop column, `thumb` sits beside the role line on mobile/tablet.
 * Until site.portrait.src is set, a quiet frame shows where the photo goes.
 */
export function Portrait({ variant, className }: Props) {
  const { src, alt } = site.portrait;
  const full = variant === 'full';

  return (
    <figure className={cn('min-w-0', className)}>
      <div className="relative">
        <div className="relative aspect-[4/5] w-full overflow-hidden border border-line bg-scrim/40">
          {src ? (
            <Image
              src={src}
              alt={alt}
              fill
              sizes={full ? '(min-width: 1280px) 380px, 30vw' : '128px'}
              className="object-cover grayscale-[12%]"
            />
          ) : (
            <div className="flex h-full w-full flex-col items-center justify-center gap-2 p-3 text-center">
              <span className="label text-faint">{full ? '[ photo ]' : 'photo'}</span>
              {full ? <span className="label text-[0.625rem] text-faint">public/aditya.jpg</span> : null}
            </div>
          )}
        </div>
        {full ? (
          <>
            <Tick className="-left-1.5 -top-1.5 border-l border-t" />
            <Tick className="-right-1.5 -top-1.5 border-r border-t" />
            <Tick className="-bottom-1.5 -left-1.5 border-b border-l" />
            <Tick className="-bottom-1.5 -right-1.5 border-b border-r" />
          </>
        ) : null}
      </div>
      {full ? (
        <figcaption className="label mt-3 flex justify-between gap-4 text-faint">
          <span>Fig. 01</span>
          <span>{site.city}</span>
        </figcaption>
      ) : null}
    </figure>
  );
}
