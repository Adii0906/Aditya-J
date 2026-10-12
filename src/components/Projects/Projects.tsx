import { projects } from '@/data/projects';
import { Section } from '../ui/Section';
import { ProjectCard } from './ProjectCard';

export function Projects() {
  return (
    <Section id="work" index="02" label="SELECTED WORK">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <p className="max-w-[26ch] text-[clamp(1.75rem,4vw,3rem)] font-medium leading-[1.02] tracking-[-0.04em] text-paper">
          A few things I&apos;ve built.
        </p>
        <p className="label text-faint">{String(projects.length).padStart(2, '0')} projects</p>
      </div>

      <div className="mt-10 md:mt-14">
        {projects.map((p, i) => (
          <ProjectCard key={p.slug} project={p} index={i} />
        ))}
      </div>
    </Section>
  );
}
