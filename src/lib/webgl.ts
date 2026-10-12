export function hasWebGL(): boolean {
  if (typeof window === 'undefined') return false;
  try {
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl2') || canvas.getContext('webgl');
    const ok = !!gl;
    const lose = gl?.getExtension('WEBGL_lose_context');
    lose?.loseContext();
    return ok;
  } catch {
    return false;
  }
}
