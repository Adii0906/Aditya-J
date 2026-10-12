export type Theme = 'dark' | 'light';

export const THEME_KEY = 'aj-theme';
export const DEFAULT_THEME: Theme = 'dark';

/** Runs in <head> before paint so the saved theme never flashes. Dark unless the visitor chose light. */
export const themeInitScript = `(function(){try{var t=localStorage.getItem('${THEME_KEY}');document.documentElement.dataset.theme=t==='light'?'light':'dark';}catch(e){document.documentElement.dataset.theme='dark';}})();`;
