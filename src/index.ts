const prefersDarkTheme = window.matchMedia("(prefers-color-scheme: dark)");

const themeAttribute = 'data-georgify-theme';

enum Theme {
    Light = 'light',
    Dark = 'dark',
}

const theme = prefersDarkTheme.matches ? Theme.Dark : Theme.Light;

document.documentElement.setAttribute(themeAttribute, theme);
