'use client';

import { Component, type ReactNode } from 'react';

type State = { failed: boolean };

/**
 * If the shader fails (no WebGL context, blocked HDR download, driver issue),
 * drop it silently. The static CSS gradient underneath stays visible and the page keeps working.
 */
export class ShaderErrorBoundary extends Component<{ children: ReactNode }, State> {
  state: State = { failed: false };

  static getDerivedStateFromError(): State {
    return { failed: true };
  }

  componentDidCatch(error: unknown) {
    if (process.env.NODE_ENV !== 'production') {
      console.warn('[Background] Shader disabled:', error);
    }
  }

  render() {
    return this.state.failed ? null : this.props.children;
  }
}
