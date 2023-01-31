import type { Settings } from "./types";
import { getSettings, setSettings } from "./settings";

async function toggleDarkMode() {
  let settings = await getSettings();

  if (settings.darkMode === true) {
    settings.darkMode = false;
  } else if (settings.darkMode === false) {
    settings.darkMode = "system";
  } else {
    settings.darkMode = true;
  }

  await setSettings(settings);
}

async function getIconPath(settings?: Settings) {
  settings = settings ?? (await getSettings());

  if (settings.darkMode === true) {
    return "icon32_dark.png";
  } else if (settings.darkMode === false) {
    return "icon32_light.png";
  } else {
    return "icon32_auto.png";
  }
}

async function updateIcon(settings?: Settings) {
  chrome.action.setIcon({
    path: await getIconPath(settings),
  });
}

chrome.action.onClicked.addListener(() => {
  toggleDarkMode();
});

chrome.storage.sync.onChanged.addListener(() => {
  updateIcon();
});

updateIcon();
