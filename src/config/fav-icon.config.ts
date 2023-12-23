const usesDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches || false;
const favicon: any = document.getElementById('favicon');

function switchIcon(usesDarkMode: boolean) {
  if (usesDarkMode) {
    favicon.href = '/vite-dark.svg';
  } else {
    favicon.href = '/vite.svg';
  }
}
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => switchIcon(e.matches));
switchIcon(usesDarkMode);
