import type { Metadata, Viewport } from 'next';
import { GeistMono } from 'geist/font/mono';
import { GeistSans } from 'geist/font/sans';
import type { ReactNode } from 'react';
import { Background } from '@/components/Background';
import { site } from '@/data/site';
import { themeInitScript } from '@/lib/theme';
import { Providers } from './providers';
import './globals.css';

const description = `${site.name} builds AI applications and developer tools around LLMs, agentic workflows and RAG. Based in Bengaluru.`;

export const metadata: Metadata = {
  metadataBase: new URL(site.links.portfolio),
  title: `${site.name} | ${site.role}`,
  description,
  authors: [{ name: site.name, url: site.links.portfolio }],
  openGraph: {
    type: 'website',
    url: site.links.portfolio,
    title: `${site.name} | ${site.role}`,
    description,
    siteName: site.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${site.name} | ${site.role}`,
    description,
  },
};

export const viewport: Viewport = {
  themeColor: '#000000',
  colorScheme: 'dark light',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      data-theme="dark"
      suppressHydrationWarning
      className={`${GeistSans.variable} ${GeistMono.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body>
        <a href="#main" className="skip-link label">
          Skip to content
        </a>
        <Providers>
          <Background />
          {children}
        </Providers>
      </body>
    </html>
  );
}
