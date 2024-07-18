export function redirect(page) {
  chrome.tabs.create({
    url: chrome.runtime.getURL(`build/index.html?page=${page}`),
  });
}
