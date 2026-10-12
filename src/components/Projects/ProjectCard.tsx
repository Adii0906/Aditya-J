import type { Project } from '@/data/projects';
import { GlitchText } from '../ui/GlitchText';
import { ProjectPreview } from './ProjectPreview';

type Props = {
  project: Project;
  index: number;
};

export function ProjectCard({ project, index }: Props) {
  const primary = project.demo ?? project.repo;
  const number = String(index + 1).padStart(2, '0');
  const titleId = `project-${project.slug}`;

  return (
    <article
      aria-labelledby={titleId}
      className="group relative grid gap-6 py-10 md:grid-cols-12 md:gap-8 md:py-14 rule-row"
    >
      <div className="md:col-span-7 md:col-start-6 md:row-start-1">
        <ProjectPreview project={project} priority={index === 0} />
      </div>

      <div className="flex min-w-0 flex-col md:col-span-5 md:row-start-1">
        <div className="label flex items-center justify-between gap-4 text-faint">
          <span>{number}</span>
          {project.year ? <span>{project.year}</span> : null}
        </div>

        <h3
          id={titleId}
          className="mt-4 text-[clamp(2.25rem,6vw,4.25rem)] font-semibold leading-[0.95] tracking-[-0.045em] text-paper"
        >
          {primary ? (
            <a
              href={primary}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-start gap-3 after:absolute after:inset-0 after:content-[''] focus-visible:outline-none focus-visible:after:outline focus-visible:after:outline-1 focus-visible:after:outline-paper"
            >
              <GlitchText text={project.title} />
              <span
                aria-hidden="true"
                className="mt-[0.15em] text-[0.45em] text-mute transition-transform duration-300 ease-out-quart group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-paper"
              >
                ↗
              </span>
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          ) : (
            <GlitchText text={project.title} />
          )}
        </h3>

        <p className="mt-4 text-lg leading-snug text-paper md:text-xl">{project.summary}</p>
        <p className="mt-4 max-w-[38rem] text-[0.95rem] leading-relaxed text-mute">{project.description}</p>

        {project.workflow ? (
          <div className="mt-6">
            <p className="label text-faint">Workflow</p>
            <ol className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-1.5">
              {project.workflow.map((step, i) => (
                <li key={step} className="label flex items-center gap-2 text-paper">
                  <span>{step}</span>
                  {i < project.workflow!.length - 1 ? (
                    <span aria-hidden="true" className="text-faint">
                      →
                    </span>
                  ) : null}
                </li>
              ))}
            </ol>
          </div>
        ) : null}

        {project.stack.length ? (
          <div className="mt-6">
            <p className="label text-faint">Stack</p>
            <ul className="mt-2 flex flex-wrap gap-1.5">
              {project.stack.map((s) => (
                <li key={s} className="label border border-line px-2 py-1 text-paper/90">
                  {s}
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        <div className="relative z-10 mt-auto flex flex-wrap gap-x-6 pt-8 transition-opacity duration-300 [@media(hover:hover)]:opacity-70 [@media(hover:hover)]:group-hover:opacity-100">
          {project.repo ? (
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="label inline-flex min-h-11 items-center gap-2 text-paper underline-offset-4 hover:underline"
            >
              GitHub <span aria-hidden="true">↗</span>
              <span className="sr-only">{` for ${project.title} (opens in a new tab)`}</span>
            </a>
          ) : null}
          {project.demo ? (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="label inline-flex min-h-11 items-center gap-2 text-paper underline-offset-4 hover:underline"
            >
              Live demo <span aria-hidden="true">↗</span>
              <span className="sr-only">{` for ${project.title} (opens in a new tab)`}</span>
            </a>
          ) : null}
          {!project.repo && !project.demo ? (
            <span className="label inline-flex min-h-11 items-center text-faint">Links coming soon</span>
          ) : null}
        </div>
      </div>
    </article>
  );
}
