import type { Settings } from "./types";

export async function getSettings() {
  return new Promise<Settings>((resolve) => {
    chrome.storage.sync.get(
      {
        darkMode: "system",
      },
      resolve
    );
  });
}

export async function setSettings(settings: Settings) {
  return new Promise<void>((resolve) => {
    chrome.storage.sync.set(settings, resolve);
  });
}

export async function shouldUseDarkMode() {
  const { darkMode } = await getSettings();

  if (typeof darkMode === "boolean") {
    return darkMode;
  } else {
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  }
}
