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

chrome.contextMenus.onClicked.addListener((info) => {
  if (info.menuItemId === "darkModeToggle") {
    toggleDarkMode();
  }
});

function getDarkModeText(darkMode: Settings["darkMode"]) {
  if (typeof darkMode === "boolean") {
    return darkMode ? "On" : "Off";
  } else {
    return "System";
  }
}

async function initMenu() {
  const settings = await getSettings();

  chrome.contextMenus.removeAll();

  chrome.contextMenus.create({
    id: "darkModeToggle",
    title: `Toggle Dark Mode (Current: ${getDarkModeText(settings.darkMode)})`,
    contexts: ["action"],
  });
}

chrome.storage.sync.onChanged.addListener(() => {
  initMenu();
});

initMenu();
