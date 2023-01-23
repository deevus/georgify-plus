import { Settings, Theme } from "./types";

export async function getSettings() {
  return chrome.storage.sync.get({
    darkMode: "system",
  }) as Promise<Settings>;
}

export async function setSettings(settings: Settings) {
  return chrome.storage.sync.set(settings);
}

export async function getForcedTheme(): Promise<Theme | undefined> {
  const { darkMode } = await getSettings();

  if (typeof darkMode === "boolean") {
    return darkMode ? Theme.Dark : Theme.Light;
  } else {
    return undefined;
  }
}
