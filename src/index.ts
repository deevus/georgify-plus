import { getForcedTheme } from "./settings";

const themeAttribute = "data-georgify-theme";

async function updateTheme() {
  const forcedTheme = await getForcedTheme();

  if (forcedTheme) {
    document.documentElement.setAttribute(themeAttribute, forcedTheme);
  } else {
    document.documentElement.removeAttribute(themeAttribute);
  }
}

chrome.storage.sync.onChanged.addListener(() => {
  updateTheme();
});

updateTheme();
