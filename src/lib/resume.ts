// Server only: reads the filesystem at build time.
import { existsSync } from 'node:fs';
import { join } from 'node:path';
import { site } from '@/data/site';

/**
 * Returns the resume link only if the file is really there.
 * Drop the PDF at /public/resume.pdf (or the path set in site.ts) and rebuild; the buttons turn on by themselves.
 */
export function getResumeHref(): string | null {
  const href = site.links.resume;
  if (!href) return null;
  if (/^https?:\/\//.test(href)) return href;
  return existsSync(join(process.cwd(), 'public', href.replace(/^\//, ''))) ? href : null;
}
