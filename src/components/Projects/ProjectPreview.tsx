import Image from 'next/image';
import type { Project } from '@/data/projects';

/** Project visual. Falls back to a typographic frame until an image is added. */
export function ProjectPreview({ project, priority }: { project: Project; priority?: boolean }) {
  return (
    <div className="relative w-full overflow-hidden border border-line bg-scrim/50">
      {project.image ? (
        <Image
          src={project.image.src}
          alt={`${project.title} interface`}
          width={project.image.width}
          height={project.image.height}
          priority={priority}
          sizes="(min-width: 1280px) 720px, (min-width: 768px) 58vw, 100vw"
          className="h-auto w-full"
        />
      ) : (
        <div className="relative aspect-[16/10]">
          <div className="flex h-full w-full flex-col justify-between p-4 md:p-6">
            <div className="flex items-start justify-between gap-4">
              <span className="label text-faint">{project.slug}</span>
              <span className="label text-faint">[ image pending ]</span>
            </div>
            <p
              aria-hidden="true"
              className="truncate font-mono text-[clamp(2.5rem,9vw,6.5rem)] font-medium leading-none tracking-[-0.06em] text-tint/[0.14]"
            >
              {project.title}
            </p>
            <p className="label line-clamp-2 text-faint">
              {project.workflow ? project.workflow.join(' → ') : project.stack.join(' / ') || '—'}
            </p>
          </div>
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-scrim/40 via-transparent to-transparent"
          />
        </div>
      )}
    </div>
  );
}
