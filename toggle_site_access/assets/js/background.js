chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set(
    {
      toggleSitesActive: false,
      toggleSitesList: "youtube.com",
    },
    () => {}
  );
});

let toggleSitesActive = false;
let toggleSitesList = "youtube.com";

chrome.storage.sync.get(
  ["toggleSitesActive", "toggleSitesList"],
   (result) => {
    toggleSitesActive = result.toggleSitesActive;
    toggleSitesList = result.toggleSitesList;
  }
);

chrome.runtime.onStartup.addListener(() => {
  chrome.storage.sync.get(
    ["toggleSitesActive", "toggleSitesList"],
    function (result) {
      toggleSitesActive = result.toggleSitesActive;
      toggleSitesList = result.toggleSitesList;
    }
  );
});

chrome.webRequest.onBeforeRequest.addListener(
  (details) => {
    if (!toggleSitesActive) {
      return { cancel: false };
    }

    let cancel = toggleSitesList.split(/\n/).some((site) => {
      let url = new URL(details.url);
      return Boolean(url.hostname.indexOf(site) != -1);
    });

    return { cancel: cancel };
  },

  {
    urls: ["<all_urls>"],
    types: ["main_frame"],
  },
  ["blocking"]
);

chrome.storage.onChanged.addListener((changes, namespace) => {
  if (namespace === "sync") {
    if (changes.toggleSitesActive) {
      toggleSitesActive = changes.toggleSitesActive.newValue;
    }
    if (changes.toggleSitesList) {
      toggleSitesList = changes.toggleSitesList.newValue;
    }
  }
});