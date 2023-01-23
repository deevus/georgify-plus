import { Theme } from "./types";
import { shouldUseDarkMode } from "./settings";

const themeAttribute = "data-georgify-theme";

async function getTheme() {
  const useDarkMode = await shouldUseDarkMode();

  return useDarkMode ? Theme.Dark : Theme.Light;
}

async function updateTheme() {
  const theme = await getTheme();

  document.documentElement.setAttribute(themeAttribute, theme);
}

chrome.storage.sync.onChanged.addListener(() => {
  updateTheme();
});

updateTheme();
