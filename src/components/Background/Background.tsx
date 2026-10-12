'use client';

import dynamic from 'next/dynamic';
import { memo, useEffect, useState } from 'react';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { usePageVisible } from '@/hooks/usePageVisible';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { useTheme } from '@/hooks/useTheme';
import { hasWebGL } from '@/lib/webgl';
import { ShaderErrorBoundary } from './ShaderErrorBoundary';
import { DARK_PALETTE, LIGHT_PALETTE } from './ShaderLayer';

const ShaderLayer = dynamic(() => import('./ShaderLayer'), { ssr: false });

const DESKTOP_DENSITY = 1;
const MOBILE_DENSITY = 0.6;

/**
 * Shader motion. The brief's original value was 0.3.
 * 0.04 reads as a slow drift. Set to 0 for a fully still frame.
 */
const SHADER_SPEED = { dark: 0.04, light: 0.03 } as const;

/** Overlay strength per theme. Light is heavier so the shader stays a faint wash. */
const OVERLAY = { dark: 'bg-scrim/50', light: 'bg-scrim/70' } as const;

/**
 * Fixed page background.
 * Layers, bottom to top:
 *   1. static CSS gradient in the theme palette (always present, also the no-WebGL fallback)
 *   2. ShaderGradient (client only, lazy, paused when the tab is hidden or motion is reduced)
 *   3. overlay for text contrast
 */
function BackgroundImpl() {
  const [webgl, setWebgl] = useState(false);
  const isMobile = useMediaQuery('(max-width: 767px), (pointer: coarse)');
  const visible = usePageVisible();
  const reduced = useReducedMotion();
  const { theme } = useTheme();

  useEffect(() => {
    // Defer WebGL until the page is idle so first paint and text stay fast.
    const start = () => setWebgl(hasWebGL());
    if ('requestIdleCallback' in window) {
      const id = window.requestIdleCallback(start, { timeout: 1200 });
      return () => window.cancelIdleCallback(id);
    }
    const t = setTimeout(start, 300);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 h-[100lvh] w-screen overflow-hidden bg-ink transition-colors duration-500"
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(60% 50% at 18% 30%, var(--bg-glow-1), transparent 70%),' +
            'radial-gradient(50% 45% at 82% 65%, var(--bg-glow-2), transparent 70%),' +
            'radial-gradient(55% 50% at 55% 95%, var(--bg-glow-3), transparent 70%)',
        }}
      />

      {webgl ? (
        <div className="absolute inset-0 animate-[fade-in_1.4s_ease-out_both]">
          <ShaderErrorBoundary>
            <ShaderLayer
              pixelDensity={isMobile ? MOBILE_DENSITY : DESKTOP_DENSITY}
              animate={visible && !reduced}
              speed={SHADER_SPEED[theme]}
              palette={theme === 'light' ? LIGHT_PALETTE : DARK_PALETTE}
            />
          </ShaderErrorBoundary>
        </div>
      ) : null}

      <div className={`absolute inset-0 transition-colors duration-500 ${OVERLAY[theme]}`} />
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(120% 90% at 50% 40%, transparent 40%, color-mix(in srgb, var(--scrim) 55%, transparent) 100%)',
        }}
      />
    </div>
  );
}

export const Background = memo(BackgroundImpl);
export default Background;
